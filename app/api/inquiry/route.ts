import { NextResponse } from "next/server";

import { validateDemoForm, type DemoFormValues } from "@/lib/demo-form";
import {
  validateContactForm,
  type ContactFormValues,
} from "@/lib/contact-form";
import { sendInquiryEmail, type InquiryEmailData } from "@/lib/email";

// 데모 신청 / 문의 폼 공용 전송 엔드포인트
export async function POST(request: Request) {
  try {
    const body = await request.json();

    let payload: InquiryEmailData;

    if (body.kind === "demo") {
      const values = body as DemoFormValues;
      if (Object.keys(validateDemoForm(values)).length > 0) {
        return NextResponse.json({ error: "유효성 검사 실패" }, { status: 400 });
      }
      payload = {
        source: "데모 신청",
        replyTo: values.email.trim(),
        fields: [
          { label: "회사명", value: values.company },
          { label: "담당자명", value: values.name },
          { label: "이메일", value: values.email },
          { label: "연락처", value: values.phone },
          { label: "희망 데모 일정", value: values.date },
          { label: "문의 내용", value: values.message },
        ],
      };
    } else if (body.kind === "contact") {
      const values = body as ContactFormValues;
      if (Object.keys(validateContactForm(values)).length > 0) {
        return NextResponse.json({ error: "유효성 검사 실패" }, { status: 400 });
      }
      payload = {
        source: "문의",
        replyTo: values.email.trim(),
        fields: [
          { label: "문의 유형", value: values.type },
          { label: "담당자명", value: values.name },
          { label: "회사명", value: values.company },
          { label: "이메일", value: values.email },
          { label: "연락처", value: values.phone },
          { label: "문의 내용", value: values.message },
        ],
      };
    } else {
      return NextResponse.json(
        { error: "알 수 없는 요청입니다." },
        { status: 400 },
      );
    }

    const result = await sendInquiryEmail(payload);
    if (result.error) {
      console.error("[inquiry] resend error:", result.error);
      return NextResponse.json(
        { error: "전송에 실패했습니다. 잠시 후 다시 시도해 주세요." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[inquiry] error:", error);
    return NextResponse.json(
      { error: "전송 중 오류가 발생했습니다." },
      { status: 500 },
    );
  }
}
