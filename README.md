# ClickTrail distribution assets

Machine-readable and human review assets for distributing ClickTrail attribution knowledge through problem-oriented skills, query-shaped examples, packages, MCP, and agent plugins.

Run `node scripts/verify-all.mjs` from this directory to check cross-references.

## Machine-completion benchmark

`benchmarks/cases.json` and `queries/` define synthetic discovery and
attribution-boundary cases. Run `node scripts/run-benchmarks.mjs` from the
ClickTrail workspace. The report separates local proof from provider/runtime
unknowns; it never invents live receipts.
