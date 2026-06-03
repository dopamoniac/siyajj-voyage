---
name: PageShell already pads for the fixed header
description: Avoid double top-offset on full-viewport hero sections in the SIYAJJ site
---

The SIYAJJ layout `PageShell` renders `<main className="flex-grow pt-28 ...">`, and the
`Header` is `fixed` with height `h-28` (7rem / 112px). So every page's content already
starts below the header.

**Rule:** A page-level hero that wants to fill exactly one viewport must NOT add its own
`pt-28` (that double-compensates → ~224px and pushes content/stats below the fold). Size it
with `lg:min-h-[calc(100vh-7rem)]` and center content with a flex column + `justify-center`,
not `min-h-screen`.

**Why:** A code review caught the hero overflowing the first screen because both `main` and
the hero applied `pt-28`. `min-h-screen` is also too coarse — it ignores the fixed header.

**How to apply:** When building any new full-bleed/first-screen section in this project,
rely on the global `main pt-28` for header clearance and budget height against
`100vh - 7rem`.
