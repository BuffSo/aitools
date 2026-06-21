import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/about/page";
import { CORE_VALUES, MILESTONES } from "@/content/about-page";
import { COMPANY } from "@/content/company";

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

describe("About page (/about)", () => {
  it("renders the page hero", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "데이터와 AI로 마케팅을 혁신합니다",
      }),
    ).toBeInTheDocument();
  });

  it("renders all 4 core values and the company overview", () => {
    render(<AboutPage />);
    for (const v of CORE_VALUES) {
      expect(screen.getByText(v.ko)).toBeInTheDocument();
      expect(screen.getByText(v.en)).toBeInTheDocument();
    }
    // 회사 개요 핵심 정보
    expect(screen.getByText(COMPANY.ceo)).toBeInTheDocument();
    expect(screen.getByText(COMPANY.foundedAt)).toBeInTheDocument();
    expect(screen.getByText(COMPANY.bizNo)).toBeInTheDocument();
  });

  it("renders the milestones timeline", () => {
    render(<AboutPage />);
    for (const m of MILESTONES) {
      expect(screen.getByText(m.title)).toBeInTheDocument();
    }
  });
});
