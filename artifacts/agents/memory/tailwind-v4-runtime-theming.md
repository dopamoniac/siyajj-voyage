---
name: Tailwind v4 runtime theming
description: How to enable dark/light mode toggling via CSS variable overrides in Tailwind v4
---

## The rule
Use `@theme` (without `inline`) in Tailwind v4 when you need runtime CSS variable overriding for theme switching.

**Why:** With `@theme inline`, Tailwind compiles utility classes to static values (e.g. `.bg-brand-black { background-color: #050403 }`). Overriding the CSS custom property at runtime has no effect because the utilities don't reference `var()`. With `@theme` (no `inline`), utilities reference the variable (e.g. `.bg-brand-black { background-color: var(--color-brand-black) }`), so overriding in `html.light { --color-brand-black: #FAF8F4; }` updates all usages immediately.

**How to apply:** For any Tailwind v4 project that needs a runtime dark/light toggle via class on `<html>` (not the built-in `dark:` variant), switch from `@theme inline { }` to `@theme { }`. CSS custom properties that themselves reference other `var()` (like `--color-background: hsl(var(--background))`) work fine in both modes.

**Caveat:** `@theme inline` is preferred for performance (smaller bundles, no var() chain). Only use `@theme` when runtime overriding is genuinely needed.
