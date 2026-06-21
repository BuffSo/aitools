import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AiDiagram } from "@/components/sections/ai-diagram";

describe("AiDiagram (섹션 01)", () => {
  it("renders the central AI chip and all 6 radial functions", () => {
    render(<AiDiagram />);
    expect(screen.getAllByText("AI").length).toBeGreaterThan(0);
    // 데스크톱·모바일 두 레이아웃이 모두 마운트되므로 각 라벨은 1개 이상 존재
    for (const name of [
      "데이터 분석",
      "예산 최적화",
      "자동 실행",
      "타겟팅 최적화",
      "소재 생성",
      "성과 리포트",
    ]) {
      expect(screen.getAllByText(name).length).toBeGreaterThan(0);
    }
  });
});
