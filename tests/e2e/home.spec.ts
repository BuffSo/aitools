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
  await expect(page.getByText("AI MARKETING OS")).toBeVisible();

  // GNB(주 메뉴) 노출 + 데모 CTA (데스크톱 뷰포트)
  const gnb = page.getByRole("navigation", { name: "주 메뉴" });
  await expect(gnb).toBeVisible();
  await expect(gnb.getByRole("link", { name: "서비스" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "데모 신청" }).first(),
  ).toBeVisible();

  expect(errors, errors.join("\n")).toEqual([]);
});
