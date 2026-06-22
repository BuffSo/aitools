---
name: custom-svg-icons
description: Replace generic icon-library or placeholder icons with custom, hand-crafted brand SVG icons that fit the site. Use when the user points at a set of icons (feature cards, value props, a diagram, section badges) and asks to "make these SVG icons", "change these to custom/SVG icons", "stop using lucide/heroicons here", or "make icons that fit the brand". Brand-adaptive — works on any project, not a fixed style.
---

# Custom SVG icons

Turn a set of library/placeholder icons into **bespoke, brand-fitting SVG files**, so the UI looks designed instead of templated. Reusable across any site — detect the brand, don't hardcode it.

## What "good" means
- Each icon is a real `.svg` file the user can open in VS Code or a browser.
- One **literal, concrete metaphor per item**, matched to its MEANING (not its words).
- Fits the site's existing palette and icon treatment.
- Legible at small sizes (24–48px) — simplicity beats detail.
- No generic "AI sparkle" as the main subject, no off-the-shelf-looking monoline glyphs, no wrong metaphor (e.g. a photo frame for "ad creative").

## Process

### 1. Locate the set
Grep the labels the user showed (or the section/component). For each item collect: **label, short description, current icon**. Find every place the icon is rendered (a section card, a detail page, etc.) — there may be more than one render site for the same data.

### 2. Detect the brand (don't hardcode)
Read the project's design tokens before drawing:
- `globals.css` / theme / tailwind config → primary, secondary, accent colors (`--color-*`, `--brand*`, `--primary`, etc.).
- The existing icon treatment: is it a tinted container + monochrome icon? a filled colored badge? a plain line icon? what size?
Decide whether the new icons should be **filled colored badges** (bolder) or **brand-colored illustrations on a light/transparent container** (more minimal) so they match the site. When unsure, ask once with two sample directions.

### 3. Pick a metaphor per item (the part that goes wrong if rushed)
Map each label to one concrete object. Common marketing/SaaS concepts:
| concept | metaphor |
|---|---|
| 데이터 분석 / analytics | bar / line chart |
| 예산 / budget | coins or bill (₩ / $) |
| 타겟팅 / targeting | bullseye + arrow |
| 오디언스 확장 | people group + "+" |
| 광고 소재 생성 / ad creative | **megaphone / ad board** (never a photo frame) |
| 자동 실행 / automation | gear or play/loop |
| 리포트 / report | document + chart |
| 정산 / settlement | receipt + currency + check |
| 알림 / alert | bell + pulse |
| 입찰 최적화 / bidding | equalizer sliders |
| 통합/플랫폼 | hub + nodes |
| 에이전트 | orbit + core |
Keep neighbors distinct. Reuse one icon when two items genuinely mean the same thing. If the brand is AI-ish, add a single accent-colored highlight to signal "AI / live".

### 4. Draw each icon
Signature recipe (adapt colors/treatment to step 2):
- Standalone `.svg`, `120×120`, `viewBox="0 0 120 120"`, saved to `public/icons/` (or the project's static dir).
- Filled-badge variant: `<rect width="120" height="120" rx="30" fill="url(#grad)">` with a brand gradient (primary→accent); white illustration, `stroke-width ≈ 5`, round caps/joins; one accent-color highlight.
- Light variant: transparent/light badge, illustration in the brand color, accent in the secondary color.
- Vary the gradient stops per icon for subtle variety, but stay in one color family.

### 5. Preview FIRST — before touching components
Build a throwaway gallery (`public/icons/preview.html`) listing every icon at **88 / 48 / 28px** with labels. Open it / screenshot it and confirm the set with the user. Fix metaphors and small-size legibility here, where it's cheap. Do NOT wire into components until the set is approved.

### 6. Wire in
Replace each `<LibraryIcon className="size-N"/>` with:
```tsx
{/* eslint-disable-next-line @next/next/no-img-element */}
<img src="/icons/<name>.svg" alt="" aria-hidden width={W} height={H} className="size-N" />
```
If the SVG carries its own badge, drop the old tinted/colored container. Keep the surrounding layout and sizes. Update the data/types if they held an icon component (e.g. `Icon: LucideIcon` → `iconSrc: string`).

### 7. Finish
- **Delete the gallery page** (don't ship it).
- Remove now-unused library imports / dead icon components.
- `typecheck` + `lint`.
- Show the result in context (screenshot the actual cards), not just the gallery.

## Exceptions
Small UI affordances — arrow, close/X, chevron, hamburger, spinner — may stay on the icon library. Don't redraw those.
