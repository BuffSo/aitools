import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/hero";

vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));
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

describe("Hero", () => {
  it("renders the tagline, headline and subcopy", () => {
    render(<Hero />);
    expect(screen.getByText("AI MARKETING OS")).toBeInTheDocument();
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("의사결정합니다");
    expect(
      screen.getByText(/최적의 광고 운영 솔루션을 제공합니다/),
    ).toBeInTheDocument();
  });

  it("renders both CTAs and the integration platform badges", () => {
    render(<Hero />);
    expect(
      screen.getByRole("link", { name: /데모 신청하기/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /솔루션 소개서 다운로드/ }),
    ).toBeInTheDocument();
    for (const p of ["Google Ads", "Meta", "NAVER", "kakao"]) {
      expect(screen.getByText(p)).toBeInTheDocument();
    }
  });
});
