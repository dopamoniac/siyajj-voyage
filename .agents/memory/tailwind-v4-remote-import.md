---
name: Tailwind v4 remote @import
description: Why remote CSS @import (Google Fonts) fails with Tailwind v4 and what to do instead
---

In a Tailwind v4 Vite project, putting a remote `@import url('https://fonts.googleapis.com/...')` inside the main CSS file fails the PostCSS build with: "@import must precede all other statements (besides @charset or empty @layer)".

**Why:** `@import "tailwindcss"` is inlined by Tailwind into thousands of lines (including `@property` rules) at its position. The remote font `@import` ends up *after* those generated statements in the compiled output, violating the CSS spec that all `@import` must come first. Reordering the source line doesn't help because the inlining happens at build time. HMR can also cache the error, so a full workflow restart is needed to confirm a fix.

**How to apply:** Don't load remote fonts via CSS `@import`. Load them with `<link rel="stylesheet" href="...">` in `index.html` (with `preconnect` to fonts.googleapis.com / fonts.gstatic.com). Keep only local `@import "tailwindcss"`, `@import "tw-animate-css"`, and Tailwind at-rules (`@plugin`, `@custom-variant`, `@theme`) in the CSS file.
