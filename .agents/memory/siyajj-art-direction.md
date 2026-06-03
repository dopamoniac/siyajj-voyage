---
name: SIYAJJ art-direction & conventions
description: Durable decisions for the SIYAJJ Renaissance luxury site — bar for quality, media/base-path rule, reduced-motion and a11y conventions.
---

# SIYAJJ Renaissance (artifacts/siyajj)

Frontend-only premium French Omra/Hajj concierge site, black + antique gold
cinematic art direction.

## Quality bar (why the rebuild happened)
- The client rejects anything "generic/template." The accepted standard is custom
  luxury craft on *every* page (real themed visuals, refined motion, app-like
  mobile), with the sacred subject treated with restraint — no fake promises,
  no manipulated holy-site imagery.

## Base-path rule
- All routing and asset URLs must go through `import.meta.env.BASE_URL` because the
  app is served under a path prefix, not root. Image paths are centralized so the
  prefix is applied exactly once — never prefix again at the call site.
- **Why:** root-relative URLs escape the artifact's path prefix and 404 in the
  proxied preview/deploy.

## Reduced motion
- Prefer a single global framer-motion `MotionConfig reducedMotion="user"` plus a
  CSS `prefers-reduced-motion` media query for CSS keyframes, over gating each
  component by hand.
- **Why:** per-component gating was applied inconsistently and a review flagged the
  gaps; the global approach is comprehensive and hard to forget.

## Accessibility convention
- Never nest interactives (`a > button`). For a styled button that navigates, use
  the design-system Button's `asChild` so a single anchor renders.
- **Why:** invalid nesting breaks keyboard/screen-reader activation; reviews reject it.
