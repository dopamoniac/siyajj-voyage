---
name: SIYAJJ art-direction & conventions
description: Conventions for the SIYAJJ Renaissance luxury site (artifacts/siyajj) — media slots, reduced-motion, interactive nesting.
---

# SIYAJJ Renaissance (artifacts/siyajj)

Frontend-only luxury Omra/Hajj concierge site. Black + antique gold cinematic
art direction. Client rejected anything "generic/template"; bar is custom
luxury craft on every page, sacred theme respected (no fake promises).

## Media system
- Real visuals live in `public/assets/siyajj-visuals/`; resolved through
  `src/data/media.ts` which prefixes every path with `import.meta.env.BASE_URL`.
  **Do not** add another BASE_URL prefix at call sites — `<MediaFrame slot="..."/>`
  consumes the value directly in `<img src>`. Empty slot string → premium CSS fallback.
- `MediaFrame` defaults to `loading="lazy" decoding="async"`; pass `priority`
  for above-the-fold images (hero portal) to get eager + fetchPriority high.

## Reduced motion
- Global `<MotionConfig reducedMotion="user">` in App.tsx makes all framer-motion
  components respect the user preference automatically (disables transform/layout,
  keeps fades). Prefer this over gating every component by hand.
- CSS keyframe animations (`.animate-slow-pulse`, `.particle`) are killed via a
  `@media (prefers-reduced-motion: reduce)` block in index.css.
- **Why:** per-component `useReducedMotion` gating was incomplete and a review caught it.

## Interactive nesting
- Never nest interactives (`a > button`). For a styled Button that navigates, use
  `<Button asChild><Link .../></Button>` (or `<a>` for external/wa.me) so a single
  anchor renders. For plain text links, put classes on `<Link>` and use `<span>` inside.
