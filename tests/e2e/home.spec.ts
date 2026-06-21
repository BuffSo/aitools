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
  await expect(page.getByAltText("AI TOOLS")).toBeVisible();
  await expect(page.getByText("AI MARKETING OS")).toBeVisible();

  expect(errors, errors.join("\n")).toEqual([]);
});
