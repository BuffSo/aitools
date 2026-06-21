import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import SolutionPage from "@/app/solution/page";
import {
  SOLUTION_INDUSTRIES,
  SOLUTION_PILLARS,
} from "@/content/solution-page";

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

describe("Solution page (/solution)", () => {
  it("renders the page hero with the demo CTA", () => {
    render(<SolutionPage />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "업종에 최적화된 AI 광고 솔루션",
      }),
    ).toBeInTheDocument();
    const demoCtas = screen.getAllByRole("link", { name: /데모 신청/ });
    expect(demoCtas.length).toBeGreaterThan(0);
    expect(demoCtas[0]).toHaveAttribute("href", "/demo");
  });

  it("renders all 4 industry solutions and 3 platform pillars", () => {
    render(<SolutionPage />);
    for (const ind of SOLUTION_INDUSTRIES) {
      expect(screen.getByText(ind.name)).toBeInTheDocument();
      expect(screen.getByText(ind.tagline)).toBeInTheDocument();
    }
    for (const p of SOLUTION_PILLARS) {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    }
  });

  it("links the contact CTA without prefetch", () => {
    render(<SolutionPage />);
    const contact = screen.getByRole("link", { name: "문의하기" });
    expect(contact).toHaveAttribute("href", "/contact");
  });
});
