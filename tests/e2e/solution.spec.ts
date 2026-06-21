import { test, expect } from "@playwright/test";

test("solution page loads with industry solutions and no console errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto("/solution");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "업종에 최적화된 AI 광고 솔루션",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "산업별 맞춤 솔루션" }),
  ).toBeVisible();
  await expect(page.getByText("쇼핑몰 · 이커머스")).toBeVisible();

  expect(errors, errors.join("\n")).toEqual([]);
});
