---
name: Card hover content visibility on mobile
description: Pattern to show hover-only content by default on touch/mobile devices
---

## Rule
Use `md:` prefix on hover-dependent visibility classes so content is always visible on mobile (touch devices).

**Pattern:**
- Desktop only: `md:opacity-0 md:group-hover:opacity-100 md:h-0 md:group-hover:h-auto`
- Desktop only transform: `md:translate-y-6 md:group-hover:translate-y-0`

**Why:** Touch devices don't fire `:hover` events persistently. Content hidden behind `opacity-0 group-hover:opacity-100` is inaccessible on mobile.

**How to apply:** Audit all `group-hover:opacity-100`, `group-hover:scale-*`, `group-hover:translate-*` patterns — add `md:` prefix to opacity-0/h-0 base states so mobile shows content by default.
