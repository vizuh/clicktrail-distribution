import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(new URL('../', import.meta.url).pathname, '..');
const skills = ['google-ads-offline-conversions','meta-capi-deduplication','preserve-click-ids','cross-domain-attribution','lead-to-sale-attribution','crm-revenue-attribution','attribution-debugging','conversion-reconciliation'];
const examples = ['nextjs-google-ads-offline-conversions','webhook-to-offline-conversion','twenty-crm-google-ads','chatwoot-lead-attribution','shopify-meta-capi'];
const required = [
  ...skills.map((s) => path.join(root, 'clicktrail-skills', 'skills', s, 'SKILL.md')),
  ...examples.map((e) => path.join(root, 'clicktrail-examples', e, 'README.md')),
  path.join(root, 'clicktrail-mcp', 'server.json'),
  path.join(root, 'clicktrail-distribution', 'llms.txt')
];
const missing = required.filter((p) => !fs.existsSync(p));
if (missing.length) { console.error(missing.join(String.fromCharCode(10))); process.exit(1); }
console.log(`Verified ${skills.length} skills, ${examples.length} examples, MCP manifest, and llms index.`);
