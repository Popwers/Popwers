# AGENTS.md

GitHub profile README for Popwers.

`index.js` prints the README body. `.github/workflows/workflow.yml` runs `bun index.js > README.md` on push, on a daily cron, and on `workflow_dispatch`, then commits the file.

Edit `index.js`. Do not edit `README.md` by hand. The workflow overwrites it.

## Constraints

Do not turn this profile repo into an app. Do not add Vite+.
