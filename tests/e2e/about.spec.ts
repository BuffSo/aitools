import { test, expect } from "@playwright/test";

test("about page loads with vision, values and no console errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto("/about");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "데이터와 AI로 마케팅을 혁신합니다",
    }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "핵심가치" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "회사 개요" })).toBeVisible();

  expect(errors, errors.join("\n")).toEqual([]);
});
