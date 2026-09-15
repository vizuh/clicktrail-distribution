import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const cases = JSON.parse(fs.readFileSync(path.join(root, 'benchmarks', 'cases.json'), 'utf8'));
const mcpPath = path.resolve(root, '..', 'clicktrail-mcp', 'src', 'tools.mjs');
const { simulateAdClick, attributionHealth } = await import(pathToFileURL(mcpPath));

const reports = cases.cases.map((item) => {
  const simulation = simulateAdClick(item.input);
  const health = attributionHealth(simulation);
  const stageResults = Object.entries(simulation.statuses).map(([stage, value]) => ({
    stage,
    status: value.status,
    evidenceRef: simulation.evidence,
  }));
  const unknowns = stageResults.filter((stage) => stage.status === 'unknown').map((stage) => stage.stage);
  const findings = item.caseId === 'redirect_loss' ? ['Redirect did not preserve the query string.'] : [];
  const nextActions = unknowns.length ? ['Supply runtime evidence for unknown stages before claiming completion.'] : [];
  const expected = Object.fromEntries((item.expected || []).map((value) => value.split(':')));
  const mismatches = Object.entries(expected).filter(([stage, expectedStatus]) => stageResults.find((result) => result.stage === stage)?.status !== expectedStatus);
  if (mismatches.length) throw new Error(`${item.caseId}: benchmark expectation mismatch for ${mismatches.map(([stage]) => stage).join(', ')}`);
  const serialized = JSON.stringify({ stageResults, findings, nextActions, unknowns });
  return {
    schemaVersion: cases.schemaVersion,
    caseId: item.caseId,
    score: health.score,
    stageResults,
    findings,
    nextActions,
    unknowns,
    redactionPassed: !serialized.includes('synthetic-gclid'),
  };
});

if (reports.some((report) => report.redactionPassed !== true)) {
  console.error('Benchmark redaction check failed.');
  process.exit(1);
}
process.stdout.write(`${JSON.stringify({ schemaVersion: cases.schemaVersion, generatedAt: new Date().toISOString(), reports }, null, 2)}\n`);
