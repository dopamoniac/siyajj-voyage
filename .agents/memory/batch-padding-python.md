---
name: Batch Tailwind padding mobile reduction
description: Python regex pattern to safely add mobile breakpoint to bare py- classes across many files
---

## Rule
Use this Python regex to add mobile-friendly padding without touching already-prefixed classes:

```python
import re, glob
def fix(content):
    content = re.sub(r'(?<![a-zA-Z0-9:_-])py-24(?![a-zA-Z0-9_])', 'py-12 md:py-24', content)
    content = re.sub(r'(?<![a-zA-Z0-9:_-])py-20(?![a-zA-Z0-9_])', 'py-10 md:py-20', content)
    content = re.sub(r'(?<![a-zA-Z0-9:_-])py-32(?![a-zA-Z0-9_])', 'py-16 md:py-32', content)
    return content
```

**Why:** Lookbehind `(?<![a-zA-Z0-9:_-])` prevents matching `md:py-24`, `lg:py-24`, etc. Lookahead prevents partial matches.

**Note:** This only handles `py-`. Standalone `pt-`, `pb-`, `mb-` require separate grep + targeted fixes.

**Mobile targets:** py-24→py-12(48px), py-20→py-10(40px), py-32→py-16(64px).
