import { test, expect } from "@playwright/test";

test("home page loads with brand title, logo, and no console errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto("/");

  await expect(page).toHaveTitle(/AI TOOLS/);
  // Hero 헤드라인(H1)으로 메인 로드 확인 — "AI MARKETING OS"는 Hero·다이어그램에 중복 노출
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByText("AI MARKETING OS").first()).toBeVisible();

  // GNB(주 메뉴) 노출 + 데모 CTA (데스크톱 뷰포트)
  const gnb = page.getByRole("navigation", { name: "주 메뉴" });
  await expect(gnb).toBeVisible();
  await expect(gnb.getByRole("link", { name: "서비스" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "데모 신청" }).first(),
  ).toBeVisible();

  // 푸터 회사정보 노출
  const footer = page.getByRole("contentinfo");
  await expect(footer.getByText("728-81-04234")).toBeVisible();
  await expect(footer.getByText(/©\s*2026/)).toBeVisible();

  expect(errors, errors.join("\n")).toEqual([]);
});
