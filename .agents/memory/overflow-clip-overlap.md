---
name: Bottom-overlap elements need overflow-x-clip
description: How to let an absolutely-positioned child overlap a section's seam without being clipped
---

A common hero pattern: an element (e.g. a trip-builder bar) is `absolute bottom-0 translate-y-1/2` so it overlaps the seam into the next section. If the parent section has `overflow-hidden`, the overflowing bottom half gets clipped.

**Fix:** use `overflow-x-clip` on the section instead of `overflow-hidden`. Per CSS spec, `overflow-x: clip` with `overflow-y: visible` does NOT coerce the y-axis (unlike `hidden`+`visible` → `auto`), so horizontal bleed is still clipped while the vertical overlap stays visible. No scrollbar is introduced.

**Also:** a content-dense hero pinned to `min-h-[100dvh]` pushes a bottom-overlap element a full screen down (centered content leaves the builder at the very bottom edge). Drop the forced full-viewport height and let the section size to content so the overlap is reachable/visible near the fold.

**How to apply:** any time an absolute child must visually cross a section boundary, prefer `overflow-x-clip` and verify particles/visuals are self-clipped in their own wrappers.
