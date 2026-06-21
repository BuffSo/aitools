"use client";

import { useState } from "react";
import Link from "next/link";
import { CircleCheck, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  validateContactForm,
  EMPTY_CONTACT_FORM,
  CONTACT_TYPES,
  type ContactFormValues,
  type ContactFormErrors,
} from "@/lib/contact-form";

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_CONTACT_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof ContactFormValues>(
    key: K,
    value: ContactFormValues[K],
  ) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validateContactForm(values);
    setErrors(next);
    // TODO(S9): 실제 전송 연동 (이메일/DB). 현재는 클라이언트 검증 + 성공 UI 만.
    if (Object.keys(next).length === 0) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-white p-10 text-center shadow-sm">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand/10 text-brand">
          <CircleCheck className="size-8" aria-hidden />
        </span>
        <h2 className="mt-5 text-2xl font-bold text-brand-ink">
          문의가 접수되었습니다
        </h2>
        <p className="mt-2 text-brand-ink/70">
          빠른 시일 내에 담당자가 연락드리겠습니다. 감사합니다.
        </p>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "mt-6 h-10 px-5")}
        >
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="type"
            className="block text-sm font-medium text-brand-ink"
          >
            문의 유형
          </label>
          <select
            id="type"
            value={values.type}
            onChange={(e) =>
              update("type", e.target.value as ContactFormValues["type"])
            }
            className="mt-1.5 w-full rounded-lg border border-input bg-white px-3 py-2 text-sm text-brand-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/30"
          >
            {CONTACT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <Field
          id="name"
          label="담당자명"
          required
          value={values.name}
          error={errors.name}
          onChange={(v) => update("name", v)}
        />
        <Field
          id="company"
          label="회사명"
          value={values.company}
          onChange={(v) => update("company", v)}
        />
        <Field
          id="email"
          label="이메일"
          type="email"
          required
          value={values.email}
          error={errors.email}
          onChange={(v) => update("email", v)}
        />
        <Field
          id="phone"
          label="연락처"
          type="tel"
          value={values.phone}
          onChange={(v) => update("phone", v)}
        />
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-brand-ink"
          >
            문의 내용
            <span className="ml-0.5 text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            value={values.message}
            aria-invalid={!!errors.message}
            onChange={(e) => update("message", e.target.value)}
            className={cn(
              "mt-1.5 w-full rounded-lg border bg-white px-3 py-2 text-sm text-brand-ink outline-none transition-colors focus:ring-2 focus:ring-brand/30",
              errors.message
                ? "border-red-400 focus:border-red-400"
                : "border-input focus:border-brand",
            )}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className={cn(buttonVariants(), "mt-6 h-12 w-full gap-2 text-base")}
      >
        문의 보내기
        <ArrowRight className="size-4" />
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-brand-ink">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        aria-invalid={!!error}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "mt-1.5 w-full rounded-lg border bg-white px-3 py-2 text-sm text-brand-ink outline-none transition-colors focus:ring-2 focus:ring-brand/30",
          error
            ? "border-red-400 focus:border-red-400"
            : "border-input focus:border-brand",
        )}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
