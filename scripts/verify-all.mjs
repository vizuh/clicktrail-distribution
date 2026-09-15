import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const root = path.resolve(new URL('../', import.meta.url).pathname, '..');
const skills = ['google-ads-offline-conversions','meta-capi-deduplication','preserve-click-ids','cross-domain-attribution','lead-to-sale-attribution','crm-revenue-attribution','attribution-debugging','conversion-reconciliation'];
const examples = ['nextjs-google-ads-offline-conversions','webhook-to-offline-conversion','twenty-crm-google-ads','chatwoot-lead-attribution','shopify-meta-capi'];
const required = [
  ...skills.map((s) => path.join(root, 'clicktrail-skills', 'skills', s, 'SKILL.md')),
  ...examples.map((e) => path.join(root, 'clicktrail-examples', e, 'README.md')),
  path.join(root, 'clicktrail-mcp', 'server.json'),
  path.join(root, 'clicktrail-distribution', 'llms.txt'),
  path.join(root, 'clicktrail-distribution', 'benchmarks', 'cases.json'),
  path.join(root, 'clicktrail-distribution', 'benchmarks', 'report.schema.json'),
  path.join(root, 'clicktrail-distribution', 'competitors', 'talivia.md'),
  path.join(root, 'clicktrail-distribution', 'grok', 'marketplace-entry.json'),
  path.join(root, 'clicktrail-distribution', 'grok', 'README.md'),
];
const missing = required.filter((p) => !fs.existsSync(p));
if (missing.length) { console.error(missing.join(String.fromCharCode(10))); process.exit(1); }
const grokEntry = JSON.parse(fs.readFileSync(path.join(root, 'clicktrail-distribution', 'grok', 'marketplace-entry.json'), 'utf8'));
if (!/^[a-z0-9-]+$/.test(grokEntry.name) || grokEntry.source?.source !== 'url' || !/^https:\/\/github\.com\/vizuh\//.test(grokEntry.source?.url || '') || !/^[0-9a-f]{40}$/.test(grokEntry.source?.sha || '') || !Array.isArray(grokEntry.keywords) || grokEntry.keywords.some((keyword) => !keyword.toLowerCase().includes('clicktrail') && !keyword.toLowerCase().includes('gclid') && !keyword.toLowerCase().includes('crm') && !keyword.toLowerCase().includes('offline'))) {
  console.error('Grok marketplace draft is missing a pinned Vizuh source or scoped discovery metadata.');
  process.exit(1);
}
const cases = JSON.parse(fs.readFileSync(path.join(root, 'clicktrail-distribution', 'benchmarks', 'cases.json'), 'utf8'));
const expectedCases = ['happy_path', 'redirect_loss', 'consent_denied', 'duplicate_retry', 'cross_domain_expired', 'provider_unknown'];
const caseIds = cases.cases?.map((item) => item.caseId) || [];
if (cases.schemaVersion !== '1.0.0' || expectedCases.some((id) => !caseIds.includes(id))) {
  console.error('Benchmark corpus is missing its schema version or required cases.');
  process.exit(1);
}
const { TOOL_DEFINITIONS, TOOL_SCHEMAS } = await import(pathToFileURL(path.join(root, 'clicktrail-mcp', 'src', 'tools.mjs')));
const missingSchemas = TOOL_DEFINITIONS.map(([name]) => name).filter((name) => !TOOL_SCHEMAS[name]);
if (missingSchemas.length) { console.error(`MCP tools missing schemas: ${missingSchemas.join(', ')}`); process.exit(1); }
console.log(`Verified ${skills.length} skills, ${examples.length} examples, ${TOOL_DEFINITIONS.length} MCP tools with schemas, manifest, llms index, and ${caseIds.length} benchmark cases.`);
