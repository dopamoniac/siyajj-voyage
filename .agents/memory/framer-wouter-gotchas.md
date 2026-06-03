---
name: Framer Motion + wouter gotchas
description: Two recurring TS/runtime traps when using Framer Motion variants and wouter links in the SIYAJJ (and similar React+Vite+TS) apps.
---

## Framer Motion `ease` in a `Variants` object must be a tuple, not `number[]`
A cubic-bezier easing written inline as `ease: [0.16, 1, 0.3, 1]` inside an object that is later
assigned to Framer Motion's `Variants` type fails typecheck: `number[]` is not assignable to `Easing`.
**Fix:** append `as const` → `ease: [0.16, 1, 0.3, 1] as const` so it narrows to a 4-tuple.
A bare string like `ease: "easeOut"` also widens to `string`; same `as const` fix (or a tuple) works.

**Why:** Framer types easing as `Easing | Easing[]`, where a bezier is a fixed-length tuple; a plain
array literal infers to `number[]` which is not assignable.
**How to apply:** Inline `transition` props on `<motion.div>` usually infer fine; the error appears
specifically when the object is hoisted into a `const` used as `variants={...}`.

## wouter `<Link href="#anchor">` does not scroll to in-page anchors
wouter's `<Link>` intercepts clicks and calls `preventDefault()`, so a hash href never triggers
native anchor scrolling. The flagship hero CTA silently did nothing.
**Fix:** for in-page navigation use a real button with `onClick={() => document.getElementById(id)?.scrollIntoView(...)}`
(respect `useReducedMotion()` → `behavior: 'auto'`). Keep `<Link>` only for route changes.

For cross-route deep links like `/activites#someId`: wouter ignores the hash for matching and the
target content mounts after navigation, so the browser won't auto-scroll. Add `id={...}` +
`scroll-mt-28` on the target sections and a `useEffect` on mount that reads `window.location.hash`
and calls `scrollIntoView` inside `requestAnimationFrame`.
