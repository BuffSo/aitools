// ref/사업기획서 기반 — /about 회사소개

export const ABOUT_VISION = "인공지능으로 기업의 마케팅 의사결정을 자동화하다";
export const ABOUT_MISSION =
  "중소기업부터 대기업까지, 누구나 데이터 기반 광고 운영을 할 수 있도록 AI 기반 광고 운영 솔루션을 제공합니다.";

export interface CoreValue {
  en: string;
  ko: string;
  desc: string;
  iconSrc: string; // /public/icons 의 커스텀 SVG 배지
}

export const CORE_VALUES: CoreValue[] = [
  {
    en: "Automation",
    ko: "자동화",
    desc: "반복적인 광고 운영 업무를 100% 자동화합니다.",
    iconSrc: "/icons/value-automation.svg",
  },
  {
    en: "Optimization",
    ko: "최적화",
    desc: "ROAS·CPA·CTR을 실시간으로 분석해 최적화합니다.",
    iconSrc: "/icons/value-optimization.svg",
  },
  {
    en: "Intelligence",
    ko: "지능화",
    desc: "경험과 직관이 아닌 데이터 기반 AI 의사결정을 지향합니다.",
    iconSrc: "/icons/value-intelligence.svg",
  },
  {
    en: "Scalability",
    ko: "확장성",
    desc: "소상공인부터 대기업까지 유연하게 확장합니다.",
    iconSrc: "/icons/value-scalability.svg",
  },
];

export interface Milestone {
  date: string;
  title: string;
}

// 사실 기반 마일스톤 (설립·특허 출원·홈페이지 오픈) + 향후 방향
export const MILESTONES: Milestone[] = [
  { date: "2026.05", title: "(주)에이아이툴즈 법인 설립" },
  { date: "2026.05", title: "AI 광고 자동화 핵심 기술 특허 5건 출원" },
  { date: "2026", title: "AI 광고 운영 자동화 플랫폼 공식 홈페이지 오픈" },
  { date: "이후", title: "연동 광고 채널 및 고객 기반 확대" },
];
