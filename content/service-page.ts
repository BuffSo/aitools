import {
  Upload,
  BarChart3,
  TrendingUp,
  Coins,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";

// ref/홈페이지 구성안 기반 — /service 페이지 콘텐츠

// 이런 고민이 있으신가요?
export const PAIN_POINTS: string[] = [
  "광고비는 계속 늘어나는데 매출은 기대만큼 증가하지 않는다.",
  "여러 광고 플랫폼의 데이터를 한눈에 확인하기 어렵다.",
  "어떤 채널에 예산을 더 투자해야 할지 판단하기 어렵다.",
  "광고 대행사의 보고서만으로는 의사결정이 어렵다.",
  "광고 성과를 예측하고 최적의 운영 전략을 수립하고 싶다.",
];

export interface ServiceStep {
  step: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
}

// 어떻게 작동하나요? — STEP 1~5
export const SERVICE_STEPS: ServiceStep[] = [
  {
    step: "STEP 1",
    title: "광고 데이터 업로드",
    desc: "네이버·구글·메타 등 다양한 광고 플랫폼 데이터를 업로드합니다. 최근 3개월 이상의 광고 데이터만 있으면 됩니다.",
    Icon: Upload,
  },
  {
    step: "STEP 2",
    title: "AI 광고 성과 분석",
    desc: "채널별·캠페인별 성과, 광고비 효율, 전환율, ROAS를 AI가 자동으로 진단합니다.",
    Icon: BarChart3,
  },
  {
    step: "STEP 3",
    title: "광고 성과 예측",
    desc: "과거 데이터를 학습하여 향후 클릭수·전환수·매출·CPA·ROAS를 예측합니다.",
    Icon: TrendingUp,
  },
  {
    step: "STEP 4",
    title: "광고 예산 최적화",
    desc: "채널별 투자 효율을 계산하여 예산을 어디에 더 투자해야 하는지 자동으로 제안합니다.",
    Icon: Coins,
  },
  {
    step: "STEP 5",
    title: "광고 운영 계획 생성",
    desc: "채널별 예산 배분·입찰 전략·타겟 전략·운영 우선순위·예상 성과까지 한 번에 제공합니다.",
    Icon: ClipboardList,
  },
];

export interface ServiceWhy {
  title: string;
  desc: string;
  iconSrc: string; // /public/icons 의 커스텀 SVG 배지
}

// 왜 AI 광고 운영 자동화 플랫폼인가?
export const SERVICE_WHY: ServiceWhy[] = [
  {
    title: "단순 리포트가 아닙니다",
    desc: "기존 도구가 ‘무슨 일이 있었는지’ 알려준다면, 우리는 ‘무엇을 해야 하는지’ 알려줍니다.",
    iconSrc: "/icons/why-actionable.svg",
  },
  {
    title: "미래 성과를 예측합니다",
    desc: "과거 분석에 그치지 않고, AI가 향후 광고 성과를 예측하여 최적의 운영 방향을 제안합니다.",
    iconSrc: "/icons/why-forecast.svg",
  },
  {
    title: "광고비를 더 효율적으로",
    desc: "가장 높은 성과가 기대되는 채널에 광고 예산을 자동으로 배분하도록 지원합니다.",
    iconSrc: "/icons/why-efficiency.svg",
  },
  {
    title: "데이터 기반 의사결정",
    desc: "경험과 직관이 아닌, 데이터와 AI 분석을 기반으로 광고 전략을 수립합니다.",
    iconSrc: "/icons/why-decision.svg",
  },
];

export interface ServiceEffect {
  value: string;
  label: string;
}

// 기대효과 (도입 시 기대되는 효과 — 실적 수치 아님)
export const SERVICE_EFFECTS: ServiceEffect[] = [
  { value: "최대 80%", label: "광고 운영 시간 단축" },
  { value: "100%", label: "광고 성과 분석 자동화" },
  { value: "최대 30%", label: "광고 예산 효율 향상" },
  { value: "실현", label: "데이터 기반 의사결정" },
];

// 활용 분야
export const SERVICE_INDUSTRIES: string[] = [
  "전자상거래",
  "쇼핑몰",
  "스타트업",
  "프랜차이즈",
  "광고대행사",
  "중소기업",
  "브랜드 마케팅",
  "온라인 서비스",
];
