import { describe, it, expect, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { Footer } from "@/components/layout/footer";

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

describe("Footer", () => {
  it("renders company info, address and 2026 copyright", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");

    expect(within(footer).getByText(/이주호/)).toBeInTheDocument();
    expect(within(footer).getByText(/728-81-04234/)).toBeInTheDocument();
    expect(within(footer).getByText(/aitoolz@kakao\.com/)).toBeInTheDocument();
    expect(within(footer).getByText(/김포시/)).toBeInTheDocument();
    expect(within(footer).getByText(/©\s*2026/)).toBeInTheDocument();
  });

  it("lists quick-link menus (without 홈)", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(within(footer).getByText("서비스")).toBeInTheDocument();
    expect(within(footer).getByText("문의하기")).toBeInTheDocument();
  });
});
