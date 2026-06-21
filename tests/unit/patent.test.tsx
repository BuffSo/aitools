import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import PatentPage from "@/app/patent/page";
import { PATENTS } from "@/content/patents";

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

describe("Patent page (/patent)", () => {
  it("renders the page hero", () => {
    render(<PatentPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: "독자적인 AI 기술과 특허" }),
    ).toBeInTheDocument();
  });

  it("renders all 5 patents with name, official title and IPC codes", () => {
    render(<PatentPage />);
    for (const p of PATENTS) {
      expect(screen.getByText(p.name)).toBeInTheDocument();
      expect(screen.getByText(p.title)).toBeInTheDocument();
      // 각 특허의 첫 IPC 코드가 노출 (코드 중복 가능 → getAllByText)
      expect(screen.getAllByText(p.ipc[0]).length).toBeGreaterThan(0);
    }
  });

  it("shows applicant and inventor in the filing summary", () => {
    render(<PatentPage />);
    expect(screen.getByText("(주)에이아이툴즈")).toBeInTheDocument();
    expect(screen.getByText("서동구")).toBeInTheDocument();
  });
});
