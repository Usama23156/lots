# AGENTS.md

## Cursor Cloud specific instructions

### Product

Single **qubain** frontend: React 19 + TypeScript + Vite 8 + Tailwind 3 + shadcn/ui. No backend, database, or `.env` files. E2E means loading the SPA in a browser.

### Dependencies

Use **npm** with `package-lock.json` at the repo root. From `/workspace`:

- Install: `npm ci` (or `npm install`)
- Requires Node.js (tested with v22.x)

### Commands (see `package.json`)

| Task | Command |
|------|---------|
| Dev server | `npm run dev` → http://127.0.0.1:5173 |
| Lint | `npm run lint` |
| Build | `npm run build` → `dist/` |
| Preview build | `npm run preview` → http://127.0.0.1:4173 |

There is **no** `test` script in this repo.

### Running the dev server

- Default Vite host is localhost; use `npm run dev -- --host 127.0.0.1` if you need to reach it from browser automation outside the shell.
- For long-running dev/preview processes in Cloud Agent VMs, prefer a **tmux** session (e.g. `vite-dev-server`) rather than a one-shot background job.

### Lint caveats

`npm run lint` may report **pre-existing** ESLint issues (unused vars in `src/App.tsx`, `react-refresh/only-export-components` in UI primitives, `react-hooks/set-state-in-effect` in `carousel.tsx`). These do not block `npm run build` or the dev server.

### Hello-world check

1. `npm ci` && `npm run dev`
2. Open http://127.0.0.1:5173 — tab title **qubain**, full-viewport beige background (`#e8d5b7`), empty shell (no routes yet).
