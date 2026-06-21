import {
  Brain,
  PenTool,
  CircleDollarSign,
  Database,
  Bot,
  type LucideIcon,
} from "lucide-react";

export interface Patent {
  name: string;
  Icon: LucideIcon;
}

// SPEC §4.5·§8 — 특허 5종. 제목만 노출(설명 카피·배지 없음).
export const PATENTS: Patent[] = [
  { name: "AI 예산 최적화 특허", Icon: Brain },
  { name: "AI 광고 소재 생성 특허", Icon: PenTool },
  { name: "성과 기반 수익 정산 특허", Icon: CircleDollarSign },
  { name: "멀티플랫폼 데이터 통합 특허", Icon: Database },
  { name: "AI 에이전트 특허", Icon: Bot },
];
