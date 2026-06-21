import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Patents } from "@/components/sections/patents";

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

describe("Patents (섹션 04)", () => {
  it("renders 5 patent cards with title only (no badge, no description)", () => {
    render(<Patents />);
    expect(
      screen.getByRole("heading", { name: /특허로 차별화합니다/ }),
    ).toBeInTheDocument();

    for (const name of [
      "AI 예산 최적화 특허",
      "AI 광고 소재 생성 특허",
      "성과 기반 수익 정산 특허",
      "멀티플랫폼 데이터 통합 특허",
      "AI 에이전트 특허",
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument();
    }

    // "출원 예정" 배지 제거됨 / 설명 카피 없음
    expect(screen.queryByText("출원 예정")).not.toBeInTheDocument();
    expect(
      screen.queryByText(/실시간 광고 예산을 자동 배분/),
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /특허\/기술 자세히 보기/ }),
    ).toBeInTheDocument();
  });
});
