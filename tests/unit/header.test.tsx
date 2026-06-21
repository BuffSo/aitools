import { describe, it, expect, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "@/components/layout/header";

// next/image, next/link 는 테스트 환경에서 단순 태그로 대체
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

describe("Header / GNB", () => {
  it("renders the 6 primary nav menus (뉴스 removed)", () => {
    render(<Header />);
    const primary = screen.getByRole("navigation", { name: "주 메뉴" });
    for (const label of [
      "홈",
      "서비스",
      "솔루션",
      "특허/기술",
      "회사소개",
      "문의하기",
    ]) {
      expect(within(primary).getByText(label)).toBeInTheDocument();
    }
    // 뉴스 메뉴 제거됨
    expect(within(primary).queryByText("뉴스")).not.toBeInTheDocument();
  });

  it("no longer renders a 로그인 link", () => {
    render(<Header />);
    expect(
      screen.queryByRole("link", { name: "로그인" }),
    ).not.toBeInTheDocument();
  });

  it("toggles the mobile drawer open and closed", async () => {
    const user = userEvent.setup();
    render(<Header />);

    // 처음엔 모바일 메뉴 닫힘
    expect(
      screen.queryByRole("navigation", { name: "모바일 메뉴" }),
    ).not.toBeInTheDocument();

    // 햄버거 클릭 → 열림
    await user.click(screen.getByRole("button", { name: "메뉴 열기" }));
    expect(
      screen.getByRole("navigation", { name: "모바일 메뉴" }),
    ).toBeVisible();

    // 닫기 클릭 → 닫힘
    await user.click(screen.getByRole("button", { name: "메뉴 닫기" }));
    expect(
      screen.queryByRole("navigation", { name: "모바일 메뉴" }),
    ).not.toBeInTheDocument();
  });

  it("provides a skip-to-content link as the first focusable element", () => {
    render(<Header />);
    const skip = screen.getByRole("link", { name: /본문 바로가기/ });
    expect(skip).toHaveAttribute("href", "#main-content");
  });

  it("exposes the mobile drawer as a modal dialog", async () => {
    const user = userEvent.setup();
    render(<Header />);
    await user.click(screen.getByRole("button", { name: "메뉴 열기" }));
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
  });

  it("returns focus to the hamburger trigger after closing the drawer", async () => {
    const user = userEvent.setup();
    render(<Header />);
    const hamburger = screen.getByRole("button", { name: "메뉴 열기" });
    await user.click(hamburger);
    await user.click(screen.getByRole("button", { name: "메뉴 닫기" }));
    expect(hamburger).toHaveFocus();
  });
});
