import { test, expect } from "@playwright/test";

test("contact page loads with form and validates, no console errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto("/contact");

  await expect(
    page.getByRole("heading", { level: 1, name: "문의를 남겨주세요" }),
  ).toBeVisible();

  // 빈 제출 → 검증 에러, 성공 화면 미노출
  await page.getByRole("button", { name: /문의 보내기/ }).click();
  await expect(page.getByText("담당자명을 입력해 주세요.")).toBeVisible();

  expect(errors, errors.join("\n")).toEqual([]);
});
