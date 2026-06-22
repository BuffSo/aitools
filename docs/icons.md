# Icon & brand-visual guidelines

## The rule

Feature, patent, value-proposition, and other **brand/marketing icons must be custom SVG files** under `public/icons/` — **never pulled from an icon library** (lucide-react, heroicons, etc.). This is the default; do it without being asked and without needing a reference example.

**Exception:** small UI affordances — arrow, close/X, chevron, hamburger, spinner — may use lucide-react. Don't redraw those.

## Style spec

Each icon is a self-contained badge:

- Canvas `120×120`, `viewBox="0 0 120 120"`.
- Badge: `<rect width="120" height="120" rx="30">` filled with a **brand gradient** in the deep-blue → cyan family:
  - `#1749a6` (brand) · `#2d7dd2` (brand-mid) · `#00b4d8` (brand-glow). Vary the two stops per icon for subtle variety, but stay in this family.
- Illustration: **white** strokes/fills on the badge, `stroke-width ≈ 5`, round caps/joins.
- Accent: one **cyan** highlight (`#9be8ff` or `#00b4d8`) per icon to signal "AI / live / active".
- **One literal, bespoke metaphor per item.** Keep it simple enough to stay legible at 24–48px. No generic AI sparkles as the main subject; no abstract monoline glyphs.

Metaphor examples already in use:

| Item | Metaphor |
|---|---|
| 예산 최적화 | 동전(₩) + 상승 화살표 |
| 광고 소재 생성 | 메가폰 + 생성 스파크 (NOT a photo frame) |
| 타겟 추천 | 과녁 + 명중 화살 |
| 자동 리포트 | 문서 + 막대 차트 |
| 통합 플랫폼 관리 | 허브 + 노드 |
| 실시간 알림 | 벨 + 펄스 |
| 입찰 최적화 | 이퀄라이저 슬라이더 |
| 타겟 오디언스 확장 | 인물 그룹 + 확장(+) |
| 수익 정산 | 영수증 + ₩ + 체크 |
| 멀티플랫폼 에이전트 | 궤도 + AI 코어 |

Reuse one icon across sections when the concept is identical (e.g. 광고 소재 생성 is shared by the feature card and the patent card).

## Workflow (avoids long back-and-forth)

1. **Build a preview gallery first.** A throwaway `public/icons/preview.html` (or temp page) that shows every icon at 88 / 48 / 28px. Screenshot it / let the user open it, confirm the set — **before** wiring into components.
2. After approval, wire in and **delete the gallery** (don't ship it).

## Rendering

The SVG **is** the badge — drop any tinted `bg-brand/10` container. Render with a plain `<img>`:

```tsx
{/* eslint-disable-next-line @next/next/no-img-element */}
<img src="/icons/budget.svg" alt="" aria-hidden width={48} height={48} className="size-12" />
```

Sizes in use: feature cards `size-12`, patent cards `size-14`.
