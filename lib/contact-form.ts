export const CONTACT_TYPES = [
  "서비스 도입 문의",
  "제휴·협력 문의",
  "기타 문의",
] as const;

export type ContactType = (typeof CONTACT_TYPES)[number];

export interface ContactFormValues {
  type: ContactType;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export const EMPTY_CONTACT_FORM: ContactFormValues = {
  type: CONTACT_TYPES[0],
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 클라이언트 검증 — 필수: 담당자·이메일·문의내용 / 이메일 형식 체크
export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!values.name.trim()) errors.name = "담당자명을 입력해 주세요.";
  if (!values.email.trim()) {
    errors.email = "이메일을 입력해 주세요.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "올바른 이메일 형식이 아닙니다.";
  }
  if (!values.message.trim()) errors.message = "문의 내용을 입력해 주세요.";
  return errors;
}
