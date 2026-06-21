export interface DemoFormValues {
  company: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
}

export type DemoFormErrors = Partial<Record<keyof DemoFormValues, string>>;

export const EMPTY_DEMO_FORM: DemoFormValues = {
  company: "",
  name: "",
  email: "",
  phone: "",
  date: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 클라이언트 검증 — 필수: 회사명·담당자·이메일 / 이메일 형식 체크
export function validateDemoForm(values: DemoFormValues): DemoFormErrors {
  const errors: DemoFormErrors = {};
  if (!values.company.trim()) errors.company = "회사명을 입력해 주세요.";
  if (!values.name.trim()) errors.name = "담당자명을 입력해 주세요.";
  if (!values.email.trim()) {
    errors.email = "이메일을 입력해 주세요.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "올바른 이메일 형식이 아닙니다.";
  }
  return errors;
}
