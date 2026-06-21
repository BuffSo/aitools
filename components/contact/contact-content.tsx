"use client";

import { motion, type Variants } from "motion/react";
import { Mail, MapPin, type LucideIcon } from "lucide-react";

import { COMPANY } from "@/content/company";
import { ContactForm } from "@/components/forms/contact-form";

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface InfoItem {
  label: string;
  value: string;
  href?: string;
  Icon: LucideIcon;
}

const INFO: InfoItem[] = [
  {
    label: "이메일",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    Icon: Mail,
  },
  {
    label: "주소",
    value: `(우 ${COMPANY.zip}) ${COMPANY.address}`,
    Icon: MapPin,
  },
];

export function ContactContent() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
        {/* 좌: 문의 안내 */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-2"
        >
          <h2 className="text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
            무엇을 도와드릴까요?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-ink/70">
            서비스 도입, 제휴, 기타 문의를 남겨주시면 담당자가 빠르게
            연락드립니다.
          </p>

          <ul className="mt-8 space-y-5">
            {INFO.map((item) => (
              <li key={item.label} className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                  <item.Icon className="size-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-[0.1em] text-brand-ink/65 uppercase">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-0.5 block text-sm font-medium text-brand transition-colors hover:text-brand-mid"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-sm leading-relaxed text-brand-ink/80">
                      {item.value}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 우: 문의 폼 */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-3"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
