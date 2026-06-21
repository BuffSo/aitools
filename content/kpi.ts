import {
  Award,
  Network,
  Cpu,
  Clock,
  type LucideIcon,
} from "lucide-react";

export interface KpiStat {
  end: number;
  start: number;
  suffix: string;
  decimals: number;
  duration: number;
  label: string;
  Icon: LucideIcon;
}

// 신규 법인이라 실적(누적 고객사/캠페인 등) 대신, 사실인 기술·역량 지표만 표기.
export const KPI_STATS: KpiStat[] = [
  { end: 5, start: 0, suffix: "건", decimals: 0, duration: 1.5, label: "출원 특허", Icon: Award },
  { end: 4, start: 0, suffix: "종", decimals: 0, duration: 1.5, label: "연동 광고 플랫폼", Icon: Network },
  { end: 6, start: 0, suffix: "대", decimals: 0, duration: 1.5, label: "AI 자동화 기능", Icon: Cpu },
  { end: 24, start: 0, suffix: "/7", decimals: 0, duration: 1.8, label: "실시간 자동 운영", Icon: Clock },
];
