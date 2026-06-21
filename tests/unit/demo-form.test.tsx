import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { validateDemoForm, EMPTY_DEMO_FORM } from "@/lib/demo-form";
import { DemoForm } from "@/components/forms/demo-form";

describe("validateDemoForm", () => {
  it("flags the 3 required fields when empty", () => {
    const errors = validateDemoForm(EMPTY_DEMO_FORM);
    expect(errors.company).toBeTruthy();
    expect(errors.name).toBeTruthy();
    expect(errors.email).toBeTruthy();
  });

  it("rejects a malformed email", () => {
    const errors = validateDemoForm({
      ...EMPTY_DEMO_FORM,
      company: "에이아이툴즈",
      name: "서동구",
      email: "not-an-email",
    });
    expect(errors.email).toMatch(/형식/);
  });

  it("passes with valid required fields", () => {
    const errors = validateDemoForm({
      ...EMPTY_DEMO_FORM,
      company: "에이아이툴즈",
      name: "서동구",
      email: "a@b.com",
    });
    expect(errors).toEqual({});
  });
});

describe("DemoForm", () => {
  it("blocks submit and shows errors when empty", async () => {
    const user = userEvent.setup();
    render(<DemoForm />);
    await user.click(screen.getByRole("button", { name: /데모 신청하기/ }));
    expect(screen.getByText("회사명을 입력해 주세요.")).toBeInTheDocument();
    expect(
      screen.queryByText(/신청이 접수되었습니다/),
    ).not.toBeInTheDocument();
  });

  it("shows success after submitting valid input", async () => {
    const user = userEvent.setup();
    render(<DemoForm />);
    await user.type(screen.getByLabelText(/회사명/), "에이아이툴즈");
    await user.type(screen.getByLabelText(/담당자/), "서동구");
    await user.type(screen.getByLabelText(/이메일/), "a@b.com");
    await user.click(screen.getByRole("button", { name: /데모 신청하기/ }));
    expect(await screen.findByText(/신청이 접수되었습니다/)).toBeInTheDocument();
  });
});
