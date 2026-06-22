export interface ServiceFeature {
  name: string;
  desc: string;
  href: string;
  iconSrc: string; // /public/icons 의 커스텀 SVG 배지
}

// SPEC §4.3 — 핵심 기능 6종
export const SERVICE_FEATURES: ServiceFeature[] = [
  {
    name: "AI 예산 최적화",
    desc: "광고 성과를 실시간 분석하여 최적의 예산을 자동으로 배분합니다.",
    href: "/service/budget",
    iconSrc: "/icons/budget.svg",
  },
  {
    name: "AI 광고 소재 생성",
    desc: "고객 행동 데이터를 분석하여 광고 문구와 이미지를 AI가 자동 생성합니다.",
    href: "/service/creative",
    iconSrc: "/icons/ad-creative.svg",
  },
  {
    name: "AI 타겟 추천",
    desc: "고객 행동 데이터를 분석하여 최적의 타겟을 자동으로 추천합니다.",
    href: "/service/targeting",
    iconSrc: "/icons/target.svg",
  },
  {
    name: "자동 리포트",
    desc: "일간·주간·월간 성과 리포트를 자동으로 생성하고 제공합니다.",
    href: "/service/report",
    iconSrc: "/icons/report.svg",
  },
  {
    name: "통합 플랫폼 관리",
    desc: "Google·Meta·Naver·Kakao 등 다양한 플랫폼을 한 번에 관리합니다.",
    href: "/service/platform",
    iconSrc: "/icons/platform.svg",
  },
  {
    name: "실시간 알림",
    desc: "성과 변화 및 이상 징후를 실시간으로 알림 발송합니다.",
    href: "/service/alert",
    iconSrc: "/icons/alert.svg",
  },
];
