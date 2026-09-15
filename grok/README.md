# Grok Build distribution draft

This directory prepares (but does not submit) a third-party entry for the
official xAI Plugin Marketplace. The plugin source is the existing
`vizuh/clicktrail-claude-plugin`; Grok Build documents zero-config Claude Code
compatibility, so this is not a second plugin implementation.

## Draft entry

`marketplace-entry.json` is the single entry to add to a fork of
`xai-org/plugin-marketplace/.grok-plugin/marketplace.json`. It pins the
ClickTrail plugin to a full commit SHA and uses brand-scoped keywords plus the
owned `vizuh.com` domain. The pinned commit must remain public and reachable
before any submission.

Do not hand-edit xAI's generated `.grok-plugin/plugin-index.json`. After adding
the entry in a fork, run:

```sh
python3 scripts/generate-plugin-index.py
python3 scripts/validate-catalog.py
python3 scripts/generate-plugin-index.py --check
```

Then open a PR in the official marketplace fork. This repository does not
submit that PR.

## Current boundaries

- The plugin is skill-only for distribution. It has no hooks, executable, or
  automatic `.mcp.json`.
- Grok Build can attach the checked-out ClickTrail MCP server manually with a
  project-scoped stdio command after `npm run build`.
- `@vizuh/clicktrail-mcp@0.2.0` is not currently published on npm, so an `npx`
  command is not a valid portable marketplace component.
- xAI Responses API remote MCP requires a hosted streaming HTTP or SSE server;
  the current ClickTrail MCP is stdio-only.
- Web Search and X Search discovery, citations, runtime behavior, provider
  delivery, and marketplace publication are separate evidence layers.

See the plugin's [Grok compatibility notes](https://github.com/vizuh/clicktrail-claude-plugin/blob/f5841a8c325c9a06c1fc3f0359421163294c6f3d/docs/GROK.md),
the [official marketplace README](https://github.com/xai-org/plugin-marketplace/blob/main/README.md),
and the [official contribution guide](https://github.com/xai-org/plugin-marketplace/blob/main/CONTRIBUTING.md).
