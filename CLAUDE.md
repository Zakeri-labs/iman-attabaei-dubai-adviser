# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev       # start dev server
bun run build     # production build
bun run lint      # ESLint
bun run format    # Prettier
```

## Architecture

**TanStack Start** (SSR) app — a Persian-speaking Dubai real estate advisor site for Iman Attabaei.

### Routing

File-based routing via TanStack Router. All routes live in `src/routes/`. `routeTree.gen.ts` is **auto-generated** — never edit it manually. See `src/routes/README.md` for naming conventions.

### Page layout

Every page wraps its content in `<SiteLayout>` (from `src/components/site/SiteLayout.tsx`), which provides `<Header>`, `<Footer>`, and `<MobileBottomNav>`. Importing `SiteLayout` also triggers the i18n initialization side effect via `@/i18n`.

### Internationalization

All translatable strings are defined inline in `src/i18n.ts` — three locales (`fa`, `en`, `ar`) all typed against the `fa` object. Persian (`fa`) is the default/fallback language. Add new copy to all three locales when updating strings.

RTL languages are `fa` and `ar`. The `useDirection` hook (`src/hooks/useDirection.ts`) reads the active locale and sets `document.documentElement.dir` and `.lang` accordingly. Every page with `SiteLayout` gets this automatically.

### Styling

Tailwind CSS v4 with shadcn/ui (New York style, slate base color, `@/components/ui`). CSS variables defined in `src/styles.css`. Path alias `@/` maps to `src/`.

### Vite config

`@lovable.dev/vite-tanstack-config` bundles many plugins (TanStack Start, React, Tailwind, tsconfig paths, Nitro, etc.). **Do not add these plugins manually** in `vite.config.ts` — duplicates break the build.

### Contact / social constants

WhatsApp number, Instagram, Threads URL, and office address are centralized in `src/lib/constants.ts`.
