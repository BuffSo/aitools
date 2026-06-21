import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Kpi } from "@/components/sections/kpi";
import { KPI_STATS } from "@/content/kpi";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));
// 애니메이션 내부(requestAnimationFrame) 회피 — 목표값만 렌더
vi.mock("react-countup", () => ({
  default: ({ end, suffix = "" }: { end: number; suffix?: string }) => (
    <span>
      {end}
      {suffix}
    </span>
  ),
}));

describe("Capability stats (섹션 03)", () => {
  it("uses only honest, factual metrics for a new company (no fabricated totals)", () => {
    expect(KPI_STATS).toHaveLength(4);
    const labels = KPI_STATS.map((s) => s.label);
    // 신규 법인이라 실적 수치는 없어야 함
    expect(labels).not.toContain("누적 고객사");
    expect(labels).not.toContain("누적 캠페인");
    expect(KPI_STATS.find((s) => s.label === "출원 특허")).toMatchObject({
      end: 5,
      suffix: "건",
    });
    expect(KPI_STATS.find((s) => s.label === "연동 광고 플랫폼")).toMatchObject({
      end: 4,
      suffix: "종",
    });
  });
});

describe("Kpi section", () => {
  it("renders title, all 4 labels and the service CTA", () => {
    render(<Kpi />);
    expect(
      screen.getByRole("heading", { name: /기술로 증명하는/ }),
    ).toBeInTheDocument();
    for (const s of KPI_STATS) {
      expect(screen.getByText(s.label)).toBeInTheDocument();
    }
    expect(
      screen.getByRole("link", { name: /서비스 자세히 보기/ }),
    ).toBeInTheDocument();
  });
});
