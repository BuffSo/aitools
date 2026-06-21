import {
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  Store,
  Network,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";

// ref/홈페이지 기획서 F13 기반 — /solution 산업별 솔루션 (쇼핑몰·병원·학원·프랜차이즈)

export interface SolutionIndustry {
  name: string;
  tagline: string;
  desc: string;
  points: string[];
  Icon: LucideIcon;
}

export const SOLUTION_INDUSTRIES: SolutionIndustry[] = [
  {
    name: "쇼핑몰 · 이커머스",
    tagline: "상품·시즌별 성과 최적화",
    desc: "상품 수가 많고 시즌·프로모션에 따라 성과가 급변하는 쇼핑몰. AI가 상품·채널별 ROAS를 분석해 예산을 자동으로 재배분합니다.",
    points: [
      "상품·카테고리별 광고 성과 분석",
      "시즌·프로모션 예산 최적화",
      "장바구니·구매 전환 추적",
    ],
    Icon: ShoppingBag,
  },
  {
    name: "병원 · 의료",
    tagline: "지역·진료과 타겟 효율화",
    desc: "지역과 진료 과목 타겟이 중요한 병원. 키워드·지역 기반 광고 효율을 분석해 환자 유입 단가(CPA)를 관리합니다.",
    points: [
      "지역·진료과 타겟 효율 분석",
      "검색광고 키워드 성과 진단",
      "예약·상담 전환 추적",
    ],
    Icon: Stethoscope,
  },
  {
    name: "학원 · 교육",
    tagline: "모집 시즌 수요 예측",
    desc: "모집 시즌 집중도가 높은 학원. 시즌별 수요를 예측해 광고 타이밍과 예산을 최적화하고 등록 전환을 추적합니다.",
    points: [
      "시즌·학기 수요 예측",
      "지역 타겟 광고 최적화",
      "상담·등록 전환 추적",
    ],
    Icon: GraduationCap,
  },
  {
    name: "프랜차이즈 · 다점포",
    tagline: "지점별 통합 광고 관리",
    desc: "여러 지점을 운영하는 프랜차이즈. 지점별 광고 성과를 한곳에서 비교·관리하고 본사 차원의 예산 배분을 자동화합니다.",
    points: [
      "지점별 성과 통합 대시보드",
      "지역별 예산 자동 배분",
      "브랜드·지점 광고 일관성 유지",
    ],
    Icon: Store,
  },
];

export interface SolutionPillar {
  title: string;
  desc: string;
  Icon: LucideIcon;
}

// 모든 산업 솔루션의 공통 기반 (AdBrain 플랫폼)
export const SOLUTION_PILLARS: SolutionPillar[] = [
  {
    title: "멀티플랫폼 데이터 통합",
    desc: "Google·Meta·NAVER·kakao 광고 데이터를 한곳에서 통합 분석합니다.",
    Icon: Network,
  },
  {
    title: "AI 분석 · 성과 예측",
    desc: "과거 데이터를 학습해 향후 광고 성과를 예측하고 운영 전략을 제안합니다.",
    Icon: TrendingUp,
  },
  {
    title: "자동 예산 최적화",
    desc: "성과가 높은 채널로 예산을 자동 배분하여 광고 효율을 끌어올립니다.",
    Icon: Zap,
  },
];
