import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PrivacyPage from "@/app/privacy/page";
import TermsPage from "@/app/terms/page";
import { PRIVACY_DOC, TERMS_DOC } from "@/content/legal";

describe("Legal pages", () => {
  it("renders the privacy policy with its sections", () => {
    render(<PrivacyPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: "개인정보처리방침" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "10. 개인정보 보호책임자" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`시행일: ${PRIVACY_DOC.effectiveDate}`)),
    ).toBeInTheDocument();
  });

  it("renders the terms of service with its articles", () => {
    render(<TermsPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: "이용약관" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "제1조 (목적)" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "제9조 (면책조항)" })).toBeInTheDocument();
  });

  it("uses the corporate name in both documents", () => {
    expect(PRIVACY_DOC.intro).toMatch(/\(주\)에이아이툴즈/);
    expect(TERMS_DOC.intro).toMatch(/\(주\)에이아이툴즈/);
    expect(TERMS_DOC.sections.length).toBeGreaterThanOrEqual(10);
    expect(PRIVACY_DOC.sections.length).toBeGreaterThanOrEqual(10);
  });
});
