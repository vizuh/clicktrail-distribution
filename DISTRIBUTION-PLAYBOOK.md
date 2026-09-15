# ClickTrail machine-distribution playbook

## Sequence

1. Keep skills generic and problem-shaped. Validate every `SKILL.md` locally.
2. Publish small examples that run with synthetic data and name the searched problem.
3. Publish framework packages only after package-level build and tests pass.
4. Add MCP tools that are local-first and deterministic before adding provider APIs.
5. Make the workflow machine-completable: inspect -> detect -> plan -> generate -> simulate -> verify.
6. Submit upstream skills only when they remain useful without ClickTrail.
7. Measure discovery, recommendation, installation, configuration, and verification separately.
8. Keep provider/runtime evidence `unknown` until a real receipt or runtime probe exists.

## Release gates

- No raw credentials, PII, or live provider calls in fixtures.
- Consent and tenant boundaries are explicit.
- Duplicate delivery is covered by deterministic tests.
- Each claim has a runnable local check or is labelled unknown.
- `npm whoami` must pass before publishing npm packages.

## Distribution surfaces

- Skills repositories and skills.sh: installable problem-oriented `SKILL.md` files.
- GitHub: query-shaped examples and framework repositories.
- npm: `@vizuh/clicktrail-*` adapters after authenticated release review.
- MCP Registry: publish `server.json` only after package metadata and stdio behavior are validated.
- Copilot/other plugin catalogs: submit generic skills and maintainers' required metadata.
- Grok Build: reuse Claude-compatible skills, pin remote marketplace sources, and keep local MCP setup explicit until a public package or hosted transport exists.
- Search/docs: mirror the same problem terms without keyword stuffing.

## Issue intelligence

Search public issues for click IDs lost in redirects, CRM field mapping, Meta event duplication, cross-domain transfer, and conversion mismatches. Convert recurring failures into a skill test, example regression, and adapter improvement. Do not spam links or scrape private data.
