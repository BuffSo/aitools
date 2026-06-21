import { test, expect } from "@playwright/test";

test("service page loads with key sections and no console errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto("/service");

  await expect(
    page.getByRole("heading", { level: 1, name: "AI 광고 운영 자동화 플랫폼" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "어떻게 작동하나요?" }),
  ).toBeVisible();
  // 데모 CTA 동작 확인
  await expect(
    page.getByRole("link", { name: /무료 분석 신청/ }).first(),
  ).toHaveAttribute("href", "/demo");

  expect(errors, errors.join("\n")).toEqual([]);
});
