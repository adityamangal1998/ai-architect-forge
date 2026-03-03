# AI Architect Portfolio

Personal portfolio website built with Vite + React + TypeScript + Tailwind.

## Local development

This repo includes a `bun.lockb`, so Bun is the easiest path:

```sh
bun install
bun run dev
```

Or with npm:

```sh
npm install
npm run dev
```

## Build

```sh
bun run build
bun run preview
```

## Deploy (Vercel)

1. Push your repo to GitHub.
2. On Vercel: **New Project** → import this repo.
3. Framework preset: **Vite** (auto-detected).
4. Build Command: `bun run build` (or `npm run build`)
5. Output Directory: `dist`

This project includes a `vercel.json` rewrite so React Router routes (e.g. `/about`) work on refresh.
