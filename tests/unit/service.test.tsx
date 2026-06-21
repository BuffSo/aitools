import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ServicePage from "@/app/service/page";
import {
  SERVICE_STEPS,
  SERVICE_EFFECTS,
  SERVICE_INDUSTRIES,
  PAIN_POINTS,
} from "@/content/service-page";

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

describe("Service page (/service)", () => {
  it("renders the page hero with the demo CTA", () => {
    render(<ServicePage />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "AI 광고 운영 자동화 플랫폼",
      }),
    ).toBeInTheDocument();
    const ctas = screen.getAllByRole("link", { name: /무료 분석 신청/ });
    expect(ctas.length).toBeGreaterThan(0);
    expect(ctas[0]).toHaveAttribute("href", "/demo");
  });

  it("renders the pain points and all 5 process steps", () => {
    render(<ServicePage />);
    expect(
      screen.getByRole("heading", { name: "이런 고민이 있으신가요?" }),
    ).toBeInTheDocument();
    expect(screen.getByText(PAIN_POINTS[0])).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "어떻게 작동하나요?" }),
    ).toBeInTheDocument();
    for (const step of SERVICE_STEPS) {
      expect(screen.getByText(step.title)).toBeInTheDocument();
    }
  });

  it("renders expected-effects and industries", () => {
    render(<ServicePage />);
    // "데이터 기반 의사결정"은 차별점 제목과 기대효과 라벨에 함께 등장 → getAllByText
    for (const e of SERVICE_EFFECTS) {
      expect(screen.getAllByText(e.label).length).toBeGreaterThan(0);
    }
    for (const name of SERVICE_INDUSTRIES) {
      expect(screen.getAllByText(name).length).toBeGreaterThan(0);
    }
  });
});
