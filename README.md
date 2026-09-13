# AI TOOLS 공식 홈페이지

에이아이툴즈(AI TOOLS)의 AI 광고 성과 분석·운영 자동화 플랫폼을 소개하고, 데모 신청과 문의를 받는 B2B 마케팅 사이트입니다.

**https://aitoolz.kr**

## 개요

기획서를 개발 명세(`SPEC.md`)로 옮기는 단계부터 설계·구현·테스트·배포(Vercel)까지 1인 개발했습니다.

| 경로 | 페이지 |
|---|---|
| `/` | 홈 (Hero · AI 기능 다이어그램 · 핵심 기능 · 지표 · 특허) |
| `/service` | 서비스 |
| `/solution` | 솔루션 |
| `/patent` | 특허/기술 |
| `/about` | 회사소개 |
| `/demo` | 데모 신청 |
| `/contact` | 문의하기 |
| `/privacy` · `/terms` | 개인정보처리방침 · 이용약관 |
| `POST /api/inquiry` | 데모 신청·문의 폼 공용 메일 전송 API |

## 기술 스택

| 구분 | 사용 기술 |
|---|---|
| 프레임워크 | Next.js 16 (App Router) · React 19 · TypeScript 5 |
| 스타일·UI | Tailwind CSS 4 · shadcn/ui (Base UI) |
| 애니메이션 | Motion · react-countup |
| 아이콘 | 커스텀 SVG · lucide-react (UI 보조) · react-icons (Meta 로고) |
| 메일 | Resend |
| 테스트 | Vitest · Testing Library · Playwright |
| 도구 | ESLint 9 · sharp (OG 이미지 생성) · pnpm |
| 배포 | Vercel |

## 주요 구현

### 데모 신청·문의 폼

- 검증 함수(`lib/demo-form.ts`, `lib/contact-form.ts`)를 폼 컴포넌트와 API Route(`app/api/inquiry/route.ts`)에서 함께 사용합니다. 브라우저를 거치지 않은 요청도 서버에서 같은 규칙으로 다시 검증합니다.
- 두 폼은 하나의 엔드포인트로 전송하고, 요청의 `kind` 값으로 데모 신청과 문의를 구분합니다.
- Resend로 담당자에게 HTML 메일을 보냅니다. 입력값은 HTML 이스케이프하고, `replyTo`를 신청자 메일로 지정해 바로 답장할 수 있게 했습니다.
- 검증 실패는 400, 메일 전송 실패는 502로 응답하고 폼에 오류 메시지를 표시합니다. Resend 클라이언트는 API 키가 있을 때만 생성해 키 없이도 빌드가 되도록 했습니다.

### 콘텐츠 데이터 분리 (`content/`)

- 카피·지표·특허·약관 같은 화면 문구를 `content/`의 데이터 상수(10개 파일)로 분리하고, 컴포넌트는 렌더링만 담당하게 했습니다.
- 회사 정보는 `content/company.ts` 한 곳에서 관리합니다. 푸터·회사소개·문의 페이지·JSON-LD·sitemap·robots·manifest가 모두 이 값을 읽습니다.

### SEO

- Next.js 메타데이터 라우트로 `sitemap.xml`(9개 페이지와 우선순위) · `robots.txt`(`/api/` 제외) · `manifest`를 생성합니다.
- 9개 페이지 모두 canonical URL을 지정했습니다.
- JSON-LD 구조화 데이터(Organization · WebSite)를 넣었습니다.
- OG·Twitter 카드 메타데이터를 설정했습니다. OG 이미지는 `scripts/generate-og-image.mjs`에서 sharp로 SVG와 로고를 합성한 PNG를 커밋해, 배포 서버의 폰트와 관계없이 한글이 그대로 보이게 했습니다 (`pnpm og`로 재생성).

### 접근성·반응형

- 페이지를 추가할 때마다 axe-core로 WCAG 2.0/2.1 A·AA를 점검했습니다. 9개 페이지(데스크톱·모바일 390px)와 모바일 메뉴를 연 상태에서 위반 0입니다.
- 본문 바로가기 링크를 두고, 모바일 메뉴는 `role="dialog"`·`aria-modal`로 표시했습니다. 메뉴를 열면 닫기 버튼으로, 닫으면 햄버거 버튼으로 포커스가 이동하고 Esc로 닫힙니다.
- `prefers-reduced-motion` 설정을 Motion(`MotionConfig reducedMotion="user"`)과 CSS 양쪽에 반영했고, 키보드 사용 시에만 보이는 `:focus-visible` 포커스 링을 적용했습니다.
- 스크롤 후 헤더에 `backdrop-filter`가 붙으면 고정 위치 모바일 메뉴가 헤더 영역 안에 갇히는 문제를 `createPortal`로 `body`에 렌더링해 해결했습니다.
- 한국어 어절이 줄 중간에서 끊기지 않도록 전역에 `word-break: keep-all`을 적용했습니다.

### 커스텀 SVG 아이콘 + 프로젝트 스킬

- 기능·특허·서비스 차별점·솔루션·핵심가치 카드의 아이콘을 아이콘 라이브러리 대신 브랜드 색에 맞춘 SVG 파일 19개(`public/icons/`)로 만들었습니다. 화살표·닫기·햄버거 같은 UI 보조 아이콘에만 lucide-react를 사용합니다.
- 이 규칙을 `AGENTS.md`에 적어 두어 Claude Code가 작업할 때 기본으로 따르게 했습니다.
- 제작 절차(대상 수집 → 브랜드 파악 → 항목별 은유 선정 → SVG 작성 → 미리보기 확인 → 적용)는 프로젝트 스킬 `.claude/skills/custom-svg-icons`로 만들어 저장소에 포함했습니다. 스킬을 추가한 뒤 서비스·솔루션·회사소개 페이지 아이콘도 같은 배지 스타일로 교체했습니다.

## AI 활용 개발 (Claude Code)

Claude Code를 개발 도구로 사용하면서, 기획서를 바로 코드로 옮기지 않고 문서 단계를 거쳐 태스크 단위로 구현했습니다.

```
기획서 → SPEC.md → tasks/plan.md → tasks/todo.md → 구현·검증
```

| 단계 | 문서 | 내용 |
|---|---|---|
| 명세 | `SPEC.md` | 기획서를 개발용 단일 명세로 정리. 브랜드 토큰 · 페이지 구성 · 테스트 전략 · 인수 기준 · 작업 경계(항상 한다 / 먼저 묻는다 / 절대 안 한다) |
| 계획 | `tasks/plan.md` | 태스크 의존성 그래프 · 단계별 체크포인트 |
| 태스크 | `tasks/todo.md` | 태스크별 목표 · 의존성 · 구현 · 인수 기준 · 검증 방법, 완료 후 검증 결과 기록 |

- 각 태스크를 마크업·스타일·반응형·애니메이션·테스트까지 한 번에 완결하는 수직 슬라이스로 나눴습니다.
- 모든 태스크에 `pnpm typecheck` · `pnpm lint` 무오류를 공통 통과 기준으로 두고, 로직이 있는 컴포넌트는 단위 테스트, 페이지는 E2E 스모크 테스트를 함께 추가했습니다.
- `SPEC.md`의 작업 경계에 외부 서비스·환경변수·시크릿 도입은 "먼저 묻는다", 승인 없는 프로덕션 배포와 시크릿 하드코딩은 "절대 안 한다"로 정해 두었습니다.
- 기능 커밋 메시지에 태스크 ID(예: `(T4)`, `(2차 S9)`)를 붙여 `tasks/todo.md`와 git 이력을 연결했습니다.

## 테스트

| 종류 | 도구 | 규모 | 확인 내용 |
|---|---|---|---|
| 단위·컴포넌트 | Vitest · Testing Library | 15개 파일 · 44건 | 폼 검증 규칙 · 폼 제출(빈 입력 시 요청 차단, 전송 성공·실패) · 모바일 메뉴 토글·포커스 복귀·스킵 링크 · 페이지별 주요 콘텐츠 |
| E2E 스모크 | Playwright | 7개 스펙 · 7건 | 페이지 로드 · 주요 요소 노출 · 콘솔 에러 0 |

## 로컬 실행

```bash
pnpm install
cp .env.example .env.local   # 환경변수 설정
pnpm dev                     # http://localhost:3000
```

환경변수는 `.env.example`을 참고하세요. `RESEND_API_KEY`가 없어도 사이트는 동작하고, 폼 전송만 실패(502)합니다.

| 변수 | 설명 |
|---|---|
| `RESEND_API_KEY` | Resend API 키 (폼 메일 발송) |
| `INQUIRY_TO_EMAIL` | 폼 접수 메일을 받을 주소 |
| `INQUIRY_FROM_EMAIL` | 발신자 표기 |

| 명령 | 설명 |
|---|---|
| `pnpm dev` | 개발 서버 |
| `pnpm build` · `pnpm start` | 프로덕션 빌드 · 실행 |
| `pnpm typecheck` | 타입 검사 (`tsc --noEmit`) |
| `pnpm lint` | ESLint |
| `pnpm test` · `pnpm test:watch` | 단위·컴포넌트 테스트 (Vitest) |
| `pnpm e2e` | E2E 테스트 (Playwright, 3000 포트에 서버가 없으면 개발 서버를 직접 실행) |
| `pnpm og` | OG 이미지 재생성 |

## 폴더 구조

```
app/                 페이지 · API Route · sitemap · robots · manifest · OG 이미지
components/
  sections/          홈 섹션 · 공통 페이지 헤더
  about/ service/ solution/ patent/ contact/ legal/
                     페이지별 본문
  forms/             데모 신청 · 문의 폼
  layout/            헤더(GNB) · 푸터
  icons/             광고 플랫폼 · SNS 로고
  seo/               JSON-LD
  ui/                shadcn/ui 컴포넌트
content/             카피 · 지표 · 특허 · 약관 · 회사 정보 데이터
lib/                 폼 검증 · 메일 발송 · 유틸
public/icons/        커스텀 SVG 아이콘
assets/              로고 · 파비콘 이미지
scripts/             OG 이미지 생성
tests/
  unit/              Vitest
  e2e/               Playwright
tasks/               구현 계획(plan.md) · 태스크 목록(todo.md)
SPEC.md              개발 명세
AGENTS.md            프로젝트 규칙 (Claude Code가 읽는 지침)
.claude/skills/      프로젝트 스킬
```

`ref/`(기획 원본)는 사업자등록증·특허명세서 같은 민감 문서라 저장소에 포함하지 않습니다.
