---
name: Screenshot timing vs entrance animations
description: Why elements with delayed entrance animations appear missing in app_preview screenshots
---

The `screenshot` (app_preview) tool captures shortly after the page loads — often before delayed entrance animations finish. Elements animating from `opacity: 0` with a delay (e.g. framer-motion `transition={{ delay: 0.9 }}`) will look completely absent in the screenshot even though they render fine for real users.

**Why:** the capture happens ~0.5–1s after mount; anything still at opacity ~0 is invisible.

**How to apply:** if a component is "missing" in a screenshot but typecheck is clean and there are no console errors, suspect animation timing before restructuring layout. Tighten entrance delays (also better UX) or temporarily disable the animation to verify presence. Correlate: if exactly the latest-delay elements are the missing ones, it's timing, not layout.
