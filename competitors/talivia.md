# Talivia Agent Kit comparison

Reviewed 2026-09-15 against Talivia agent fixed point
`f4ed3fc6b554ad5183a57ae13ca2a9bd5162c12a`:
<https://github.com/talivia-group/agent/tree/f4ed3fc6b554ad5183a57ae13ca2a9bd5162c12a>

## Confirmed Talivia strengths

- Hosted streamable-HTTP MCP plus local stdio package.
- Browser-approved setup and check-in flow with local credential permission checks.
- Explicit install, build, live tracker verification, and payment handoff workflow.
- Strong repository tests for JSON-RPC, SSE, credential storage, and setup errors.

## ClickTrail response

- Added `inspect_project`, `detect_attribution_gaps`, and `plan_installation`.
- Added synthetic `simulate_ad_click` and separate capture, form, CRM, delivery,
  and health verification tools.
- Added per-tool closed input schemas and robust JSON-RPC parse/error handling.
- Kept provider delivery `unknown` without a receipt instead of fabricating live proof.
- Added a versioned benchmark corpus with redaction assertions and explicit
  evidence references.
- Preserved vendor-neutral, local-first operation. ClickTrail does not request
  provider secrets or send customer data from the local MCP server.

## Remaining difference

Talivia has a hosted account and live-ingestion service. ClickTrail does not yet
have a hosted collector, account connection, or provider receipt service. That is
a product capability gap, not something a local benchmark can honestly claim to
close. The next implementation should add hosted verification only behind
explicit authentication, consent, and a separate runtime evidence contract.
