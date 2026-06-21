import { test, expect } from "@playwright/test";

test("patent page loads with patents and no console errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto("/patent");

  await expect(
    page.getByRole("heading", { level: 1, name: "독자적인 AI 기술과 특허" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "출원 특허 5건" }),
  ).toBeVisible();
  await expect(page.getByText("AI 멀티채널 입찰 최적화")).toBeVisible();

  expect(errors, errors.join("\n")).toEqual([]);
});
