---
name: SIYAJJ mobile z-index stack
description: Correct z-index ordering for mobile fixed overlays to prevent coverage conflicts
---

## Rule
Z-index order (highest to lowest):
1. Scroll progress bar: `z-[60]`
2. Mobile menu (full-screen overlay): `z-[52]`
3. Header: `z-50`
4. FloatingWhatsApp button: `z-[49]` — positioned `bottom-[88px] md:bottom-6 right-4 md:right-6`
5. MobileActionBar: `z-[48]` — scroll-aware, shows after 55% viewport height scroll

**Why:** Mobile menu must be above FloatingWA and MobileActionBar to cover them when open. FloatingWA must be above MobileActionBar so it's always tappable even when action bar appears.

**How to apply:** Any new fixed/sticky mobile element must slot into this ordering. MobileActionBar uses `window.scrollY > window.innerHeight * 0.55` threshold.
