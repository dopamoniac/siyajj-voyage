---
name: Tailwind v4 theme runtime toggling
description: Why @theme (not @theme inline) is required for dark/light CSS variable overriding
---

## Rule
Always use `@theme { }` (bare, no `inline` keyword) in index.css for CSS custom property definitions.

**Why:** `@theme inline` compiles utilities to static values at build time — CSS variables are inlined and cannot be changed at runtime. `@theme` (bare) keeps variables as references, allowing `html.light { --color-...: ...; }` overrides to work for theme toggling.

**How to apply:** Whenever adding new theme tokens (colors, fonts) to index.css, use `@theme { }` not `@theme inline { }`. The ThemeProvider applies/removes `html.light` class via localStorage key `siyajj-theme`.
