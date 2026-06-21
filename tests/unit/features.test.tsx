import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Features } from "@/components/sections/features";

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

describe("Features (섹션 02)", () => {
  it("renders the section title and all 6 feature cards (info only, no detail links)", () => {
    render(<Features />);
    expect(
      screen.getByRole("heading", { name: /모든 과정을 자동으로 처리합니다/ }),
    ).toBeInTheDocument();

    for (const name of [
      "AI 예산 최적화",
      "AI 광고 소재 생성",
      "AI 타겟 추천",
      "자동 리포트",
      "통합 플랫폼 관리",
      "실시간 알림",
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument();
    }

    // "자세히 보기" 상세 링크 제거됨 — 카드는 정보용 (404 방지)
    expect(screen.queryByText("자세히 보기")).not.toBeInTheDocument();
  });
});
