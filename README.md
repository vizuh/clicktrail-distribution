# ClickTrail distribution assets

Machine-readable and human review assets for distributing ClickTrail's
open-source attribution handoff layer: the shared contract that keeps observed
acquisition context attached to conversion records inside the stack a team owns.
The assets include problem-oriented skills, query-shaped examples, packages, MCP,
and agent plugins. The [`grok/`](grok/) directory contains a pinned,
not-yet-submitted xAI Plugin Marketplace draft that reuses the Claude plugin.

Run `node scripts/verify-all.mjs` from this directory to check cross-references.

## Machine-completion benchmark

`benchmarks/cases.json` and `queries/` define synthetic discovery and
attribution-boundary cases. Run `node scripts/run-benchmarks.mjs` from the
ClickTrail workspace. The report separates local proof from provider/runtime
unknowns; it never invents live receipts.
