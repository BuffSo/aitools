import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  validateContactForm,
  EMPTY_CONTACT_FORM,
} from "@/lib/contact-form";
import { ContactForm } from "@/components/forms/contact-form";

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

describe("validateContactForm", () => {
  it("flags the required fields when empty", () => {
    const errors = validateContactForm(EMPTY_CONTACT_FORM);
    expect(errors.name).toBeTruthy();
    expect(errors.email).toBeTruthy();
    expect(errors.message).toBeTruthy();
  });

  it("rejects a malformed email", () => {
    const errors = validateContactForm({
      ...EMPTY_CONTACT_FORM,
      name: "서동구",
      email: "not-an-email",
      message: "문의 드립니다.",
    });
    expect(errors.email).toMatch(/형식/);
  });

  it("passes with valid required fields", () => {
    const errors = validateContactForm({
      ...EMPTY_CONTACT_FORM,
      name: "서동구",
      email: "a@b.com",
      message: "서비스 도입 문의 드립니다.",
    });
    expect(errors).toEqual({});
  });
});

describe("ContactForm", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) }),
    );
  });

  it("blocks submit (no network call) and shows errors when empty", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(screen.getByRole("button", { name: /문의 보내기/ }));
    expect(screen.getByText("담당자명을 입력해 주세요.")).toBeInTheDocument();
    expect(screen.getByText("문의 내용을 입력해 주세요.")).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();
    expect(
      screen.queryByText(/문의가 접수되었습니다/),
    ).not.toBeInTheDocument();
  });

  it("posts to the inquiry API and shows success on valid input", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.type(screen.getByLabelText(/담당자명/), "서동구");
    await user.type(screen.getByLabelText(/이메일/), "a@b.com");
    await user.type(screen.getByLabelText(/문의 내용/), "서비스 도입 문의 드립니다.");
    await user.click(screen.getByRole("button", { name: /문의 보내기/ }));

    expect(
      await screen.findByText(/문의가 접수되었습니다/),
    ).toBeInTheDocument();
    const sentBody = JSON.parse(
      (global.fetch as ReturnType<typeof vi.fn>).mock.calls[0][1].body,
    );
    expect(sentBody).toMatchObject({ kind: "contact", email: "a@b.com" });
  });

  it("shows an error message when the send fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.type(screen.getByLabelText(/담당자명/), "서동구");
    await user.type(screen.getByLabelText(/이메일/), "a@b.com");
    await user.type(screen.getByLabelText(/문의 내용/), "문의 드립니다.");
    await user.click(screen.getByRole("button", { name: /문의 보내기/ }));

    expect(await screen.findByRole("alert")).toHaveTextContent(/전송에 실패/);
    expect(
      screen.queryByText(/문의가 접수되었습니다/),
    ).not.toBeInTheDocument();
  });
});
