import {
  ChartNoAxesColumn,
  Coins,
  Settings,
  Target,
  Pencil,
  FileText,
  type LucideIcon,
} from "lucide-react";

export interface DiagramNode {
  name: string;
  sub: string;
  Icon: LucideIcon;
  side: "left" | "right";
  row: 0 | 1 | 2;
}

// SPEC §4.2 — 중앙 AI 칩 + 6방향 방사형 기능
export const DIAGRAM_NODES: DiagramNode[] = [
  { name: "데이터 분석", sub: "실시간 데이터 수집·분석", Icon: ChartNoAxesColumn, side: "left", row: 0 },
  { name: "예산 최적화", sub: "AI 기반 예산 자동 배분", Icon: Coins, side: "left", row: 1 },
  { name: "자동 실행", sub: "캠페인 자동 운영·최적화", Icon: Settings, side: "left", row: 2 },
  { name: "타겟팅 최적화", sub: "고객 세그먼트 자동 추천", Icon: Target, side: "right", row: 0 },
  { name: "소재 생성", sub: "AI 광고 소재 자동 생성", Icon: Pencil, side: "right", row: 1 },
  { name: "성과 리포트", sub: "자동 리포트 생성·제공", Icon: FileText, side: "right", row: 2 },
];
