<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Icons & brand visuals

Feature, value-prop, and other brand/marketing icons must be **custom SVG files** in `public/icons/`, **not** pulled from an icon library (lucide-react, etc.). This is the default — do it without being asked or given a reference. Use the **`custom-svg-icons` skill** to create or convert them. Small UI affordances (arrow, close, chevron, hamburger) may use lucide.
