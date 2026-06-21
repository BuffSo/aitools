# AI TOOLS 홈페이지 — 구현 계획 (1차: 메인 랜딩)

> 근거: `SPEC.md`. 1차 범위 = 메인 홈 1페이지(Hero + 섹션01~04 + 푸터), 데모 폼은 UI+검증까지.
> 작업 원칙: **수직 슬라이싱** — 각 태스크는 마크업 + 스타일 + 반응형 + 애니메이션 + 테스트까지 완결된 한 조각으로 만든다 (가로 레이어 분리 금지).

## 현재 상태
- 빈 저장소. `ref/`(기획 원본), `assets/`(로고·파비콘), `SPEC.md`만 존재. Next.js 미스캐폴딩.

## 스택
Next.js(App Router, TS) + Tailwind + shadcn/ui + Framer Motion + react-countup · pnpm · Vercel.

## 의존성 그래프
```
T1 Scaffold/Tooling ──┬─ T2 헤더(GNB)   ┐
 (모든 작업의 전제)     ├─ T3 푸터        │ (T1 이후 서로 병렬 가능)
                       ├─ T4 Hero        │
                       ├─ T5 섹션01 다이어그램
                       ├─ T6 섹션02 핵심기능
                       ├─ T7 섹션03 KPI
                       └─ T8 섹션04 특허
T9 데모 폼 ── T1 이후 / T2·T4의 CTA에서 호출
T10 반응형·접근성 폴리시 ── T2~T9 이후
T11 최종 검증 ── 전체 이후
```
- 각 섹션(T4~T8)은 독립 컴포넌트로 만들고 `app/page.tsx`에서 순서대로 조립.
- 콘텐츠(카피·KPI·기능·특허)는 `content/`의 데이터 상수로 분리 → JSX와 분리.

## 단계 & 체크포인트
| Phase | 태스크 | 산출 | 체크포인트 |
|---|---|---|---|
| 1. Foundation | T1 | 실행 가능한 빈 앱 + 토큰·파비콘·레이아웃 | **⛳ A** — `dev/build/lint/typecheck` + 스모크 통과 |
| 2. Shell | T2, T3 | 탐색 가능한 헤더·푸터 | |
| 3. Sections | T4~T8 | 메인 페이지 전체 조립 | **⛳ B** — 전체 페이지 시각 리뷰(시안 없으므로 필수) |
| 4. Form | T9 | 데모 폼(UI+검증) | |
| 5. Polish/Verify | T10, T11 | 반응형·접근성·최종 검증 | **⛳ C** — SPEC §9 인수기준 충족 → 사용자 리뷰 |

## 로고 사용 규칙 (라이트 테마 기준)
- 헤더(흰 배경): `assets/logo-horizontal-dark.png`
- 푸터(다크 배경): `assets/logo-horizontal.png`
- 파비콘: `assets/favicon.ico` + `icon`/`apple-icon`(Next.js `app/` 메타데이터)

## 리스크 / 주의
- **디자인 시안 PNG 부재** → 토큰·카피 기반 제작, ⛳B에서 반드시 시각 확인.
- AI 다이어그램 **Lottie 에셋 없음** → 1차는 CSS 글로우/애니메이션으로 구현.
- 데모 폼 **백엔드는 2차** → 지금은 검증 + 성공 UI만 (전송 없음).
- 소개서/특허 PDF 등 미확정 에셋은 플레이스홀더 처리 (SPEC §11).

## 범위 밖 (2차 이후)
서브페이지 본문(`/service` `/solution` `/patent` `/about` `/news` `/contact` `/demo` `/login`), 폼 백엔드, PDF 다운로드, 카카오맵, GA4/GTM, i18n.
