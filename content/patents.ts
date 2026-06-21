import {
  SlidersHorizontal,
  PenTool,
  UsersRound,
  Receipt,
  Orbit,
  type LucideIcon,
} from "lucide-react";

// ref/AdBrain 특허명세서 기반 — 특허 5건 (출원)
// 메인 섹션(섹션04)은 name·Icon 만, /patent 상세 페이지는 전체 필드를 사용.

export interface Patent {
  number: string; // 출원 순번 (제N호)
  name: string; // 카드용 짧은 명칭
  title: string; // 공식 발명의 명칭
  ipc: string[]; // IPC 분류
  summary: string; // 한 줄 요약
  points: string[]; // 핵심 기술 포인트
  Icon: LucideIcon;
}

// 공통 출원 정보
export const PATENT_META = {
  applicant: "(주)에이아이툴즈",
  inventor: "서동구",
  filedAt: "2026년 5월",
  count: 5,
} as const;

export const PATENTS: Patent[] = [
  {
    number: "제1호",
    name: "AI 멀티채널 입찰 최적화",
    title: "인공지능 기반 멀티채널 광고 입찰가 실시간 최적화 방법 및 시스템",
    ipc: ["G06Q 30/02", "G06N 20/00", "G06Q 10/04"],
    summary:
      "복수 광고 플랫폼의 경매 데이터를 통합 분석하고, 강화학습 기반 에이전트로 채널별 입찰가를 실시간 최적화합니다.",
    points: [
      "멀티채널 실시간 데이터 수집·표준화",
      "강화학습(RL) 기반 입찰가 자동 산출",
      "멀티암드밴딧 동적 예산 재배분",
      "이상 트래픽(부정 클릭) 자동 탐지·차단",
    ],
    Icon: SlidersHorizontal,
  },
  {
    number: "제2호",
    name: "생성형 AI 광고 소재 생성",
    title:
      "생성형 인공지능을 이용한 광고 크리에이티브 자동 생성 및 성과 기반 최적화 방법",
    ipc: ["G06Q 30/02", "G06N 3/08", "G06F 40/56"],
    summary:
      "LLM·이미지 생성 AI로 광고 카피와 비주얼을 자동 생성하고, 실시간 성과로 최적 소재를 자동 선별합니다.",
    points: [
      "업종·타깃 분석 기반 크리에이티브 브리프 자동 생성",
      "LLM·이미지 AI 광고 소재 대량 생성",
      "Thompson Sampling A/B 테스트 자동 최적화",
      "소재 피로도 감지·자동 교체",
    ],
    Icon: PenTool,
  },
  {
    number: "제3호",
    name: "AI 타겟 오디언스 확장",
    title: "인공지능 기반 광고 타겟 오디언스 자동 최적화 및 유사 타겟 확장 방법",
    ipc: ["G06Q 30/02", "G06N 20/00", "G06F 16/9535"],
    summary:
      "전환 사용자의 행동 데이터를 분석해 고전환 오디언스를 발굴하고, 유사 타겟을 자동 생성·확장합니다.",
    points: [
      "고전환 오디언스 공통 특성 자동 추출",
      "플랫폼 독립 통합 오디언스 프로파일",
      "크로스플랫폼 유사 타겟 자동 확장",
      "실시간 행동 데이터 기반 동적 갱신",
    ],
    Icon: UsersRound,
  },
  {
    number: "제4호",
    name: "성과 기반 수익 정산",
    title: "광고 성과 기반 수익 자동 정산 방법 및 시스템",
    ipc: ["G06Q 30/02", "G06Q 40/00", "G06N 20/00"],
    summary:
      "실측 성과 지표(ROAS·CPA 등)로 성과 연동 수수료를 자동 산출하고, 통합 정산서를 투명하게 생성합니다.",
    points: [
      "성과 연동 수수료 자동 산출",
      "멀티플랫폼 통합 정산서 자동 생성",
      "SHA-256 해시 기반 정산 데이터 무결성 검증",
      "광고주·매체·대행 3자 정산 자동 분배",
    ],
    Icon: Receipt,
  },
  {
    number: "제5호",
    name: "멀티플랫폼 AI 에이전트",
    title: "멀티플랫폼 광고 데이터 통합 학습 및 AI 에이전트 자율 운영 방법",
    ipc: ["G06N 3/08", "G06Q 30/02", "G06N 20/00"],
    summary:
      "연합학습으로 멀티플랫폼 데이터를 안전하게 통합 학습하고, AI 에이전트가 광고 운영 전 과정을 자율 실행합니다.",
    points: [
      "연합학습(FedAvg) 기반 멀티플랫폼 통합 학습",
      "지각·추론·계획·실행·평가 5단계 자율 운영",
      "증분학습(EWC)으로 신규 플랫폼 유연 통합",
      "설명가능 AI(XAI·SHAP) 의사결정 리포트",
    ],
    Icon: Orbit,
  },
];
