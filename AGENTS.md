# AGENTS.md

GitHub profile README for Popwers.

## Layout

- `index.js` prints the README body.
- `.github/workflows/workflow.yml` runs `bun index.js > README.md` on push, pull_request, a daily cron, and `workflow_dispatch`, then commits the file.
- `README.md` is generated output.

## Commands

```bash
bun index.js > README.md
```

## Invariants

Edit `index.js`. Do not edit `README.md` by hand. The workflow overwrites it.
