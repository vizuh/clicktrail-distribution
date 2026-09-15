# Machine-distribution benchmark

This corpus measures the path from discovery to a verified local boundary. It
uses synthetic click IDs only and never calls an ad platform, CRM, or analytics
vendor.

Each report uses the MDR contract:

```json
{
  "schemaVersion": "1.0.0",
  "caseId": "happy_path",
  "stageResults": [{"stage": "capture", "status": "pass", "evidenceRef": "synthetic-local"}],
  "findings": [],
  "nextActions": [],
  "unknowns": [],
  "redactionPassed": true
}
```

Run from the ClickTrail workspace after building MCP:

```bash
node clicktrail-distribution/scripts/run-benchmarks.mjs
```

The runner imports only deterministic local MCP handlers. A `pass` here is not
proof of a production provider receipt; provider delivery remains `unknown`
until a caller supplies one.
