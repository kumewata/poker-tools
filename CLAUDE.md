# Poker Tools

ポーカープリフロップ戦略ツール。

## Tech Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Static export (`output: 'export'`) for GitHub Pages hosting
- No server-side processing — all data is client-side

## Commands

- `npm run dev` — dev server
- `npm run build` — static export to `out/`
- `npm run lint` — ESLint

## Project Structure

- `src/data/ranges.ts` — all hand range data (single source of truth)
- `src/components/` — shared UI components (HandGrid, selectors)
- `src/app/page.tsx` — main page

## Conventions

- Japanese UI labels (ポジション名、アクション名)
- Mobile-first responsive design (landscape smartphone)
