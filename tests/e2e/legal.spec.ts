import { test, expect } from "@playwright/test";

test("privacy and terms pages load with no console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto("/privacy");
  await expect(
    page.getByRole("heading", { level: 1, name: "개인정보처리방침" }),
  ).toBeVisible();

  await page.goto("/terms");
  await expect(
    page.getByRole("heading", { level: 1, name: "이용약관" }),
  ).toBeVisible();

  expect(errors, errors.join("\n")).toEqual([]);
});
