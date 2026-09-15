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
- Search/docs: mirror the same problem terms without keyword stuffing.

## Issue intelligence

Search public issues for click IDs lost in redirects, CRM field mapping, Meta event duplication, cross-domain transfer, and conversion mismatches. Convert recurring failures into a skill test, example regression, and adapter improvement. Do not spam links or scrape private data.

## Target inventory

Status re-checked through the GitHub API on **2026-09-15**. Every entry is a
separate evidence layer; an open issue, a pushed branch, a submitted form, and an
accepted upstream change are not the same fact.

### Upstream defect and feature threads

Contribution records live in `clicktrail-js/docs/oss-contributions/`. These are
the threads where the problem is already stated and a patch or a rule is the
useful contribution, not a product introduction.

| Project | Thread | Shape |
|---|---|---|
| Sourcebuster | [alex35mil#39](https://github.com/alex35mil/sourcebuster-js/issues/39) | `gbraid`/`wbraid` unrecognised. Fix implemented, tested, pushed to the `vizuh` fork. |
| Odoo | [#268774](https://github.com/odoo/odoo/issues/268774) | `/r/<code>` drops incoming click IDs. Defect fix plus regression test. |
| Matomo | [#24882](https://github.com/matomo-org/matomo/issues/24882), [#24751](https://github.com/matomo-org/matomo/issues/24751) | Deferred campaign attribution after consent. Design discussion first. |
| PostHog | [#95999](https://github.com/PostHog/posthog/issues/95999) | Google Ads destination needs `gbraid`/`wbraid` selection rule. |
| Chatwoot | [#12560](https://github.com/chatwoot/chatwoot/issues/12560) | WhatsApp `referral` dropped. Read 26 existing comments first. |
| trace-ids | [#1](https://github.com/lifexmarketing/trace-ids/issues/1) | Cached page leaks a stale click ID into an organic form. |

### Agent and machine surfaces

- `@vizuh/clicktrail-mcp` is **not published** (npm 404) and the official MCP
  registry returns **zero** ClickTrail servers. MCP directories are therefore
  blocked: punkpeye/awesome-mcp-servers, modelcontextprotocol/servers,
  Smithery, Glama, PulseMCP, mcp.so, mcp.directory.
- `clicktrail-skills` is built, validated, and indexed; the agent-skill catalogs
  ComposioHQ/awesome-claude-skills and travisvn/awesome-claude-skills are the
  highest-reach remaining listing for it.
- `clicktrail-mcp` needed a `prepack` build hook before any publish path could
  ship a working `bin`; that fix is on a branch.

### Host-platform marketplaces

Nine PHP and Twig packages are scaffolded and published to GitHub but not
submitted to any store: Filament, October, Craft, Shopware, Symfony (Flex
recipe), plus the deferred Drupal, Statamic, PrestaShop, TYPO3, Grav, Bagisto,
and Adobe Commerce targets. Stores are where the platform's own buyers browse.

### Adapter coverage already in the workspace

Integration packages already exist for `chatwoot`, `hubspot`, `odoo`, `posthog`,
`shopify`, `twenty`, `formbricks`, and `next`, in addition to the JS framework
adapters. Introducing ClickTrail to a platform thread should therefore be able to
arrive with code rather than a request.

### Binding constraint

Every directory, catalog, and store rung above inherits the same gate. As of
**2026-09-15** `npm whoami` returns **401** and the first-publication checklist
still has `npm login` unchecked. Release `0.2.0-rc.2` is authorized in
`RELEASE-AUTHORIZATION.json`, but `npm publish` outside the checklist's step 5
is explicitly forbidden without separate written approval. Adapter readiness is
not the blocker; published artefacts are.

Popularity thresholds are also unmet: the `vizuh/*` repositories sit at **0-2
stars**, so star-gated lists such as Best of JS and Awesome Laravel remain out
of reach regardless of submission effort. The WordPress plugin is live at
`click-trail-handler` with **10** active installs.
