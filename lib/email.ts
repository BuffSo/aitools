import { Resend } from "resend";

// brainhouse 패턴 기반 — 데모/문의 폼 공용 이메일 발송 모듈.
// 환경변수: RESEND_API_KEY(필수), INQUIRY_TO_EMAIL, INQUIRY_FROM_EMAIL.

const TO_EMAIL = process.env.INQUIRY_TO_EMAIL || "aitoolz@kakao.com";
const FROM_EMAIL =
  process.env.INQUIRY_FROM_EMAIL || "AI TOOLS <onboarding@resend.dev>";

export type InquirySource = "데모 신청" | "문의";

export interface InquiryEmailData {
  source: InquirySource;
  replyTo: string;
  fields: { label: string; value: string }[];
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtml(source: InquirySource, fields: InquiryEmailData["fields"]) {
  const rows = fields
    .map(
      (f) => `
        <div class="field">
          <div class="label">${escapeHtml(f.label)}</div>
          <div class="value">${escapeHtml(f.value).replace(/\n/g, "<br>") || "-"}</div>
        </div>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Pretendard', -apple-system, sans-serif; line-height: 1.6; color: #1a1a2e; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1749a6 0%, #00b4d8 100%); color: #fff; padding: 28px; border-radius: 8px 8px 0 0; }
    .content { background: #f0f4ff; padding: 28px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 16px; }
    .label { font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; margin-bottom: 4px; }
    .value { color: #1a1a2e; font-size: 15px; }
    .footer { margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin:0;font-size:22px;">AI TOOLS</h1>
      <p style="margin:8px 0 0;opacity:.9;">${escapeHtml(source)} 접수</p>
    </div>
    <div class="content">
      ${rows}
      <div class="footer">AI TOOLS 웹사이트에서 접수된 ${escapeHtml(source)}입니다.</div>
    </div>
  </div>
</body>
</html>`;
}

export async function sendInquiryEmail({
  source,
  replyTo,
  fields,
}: InquiryEmailData): Promise<{ error: unknown }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { error: { message: "RESEND_API_KEY is not configured" } };
  }
  // 키가 있을 때만 인스턴스화 (생성자가 빈 키에서 throw 하므로 빌드 단계 회피)
  const resend = new Resend(apiKey);
  return resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo,
    subject: `[AI TOOLS] ${source} 접수`,
    html: buildHtml(source, fields),
  });
}
