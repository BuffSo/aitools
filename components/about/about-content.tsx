"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeader } from "@/components/sections/section-header";
import { COMPANY } from "@/content/company";
import {
  ABOUT_VISION,
  ABOUT_MISSION,
  CORE_VALUES,
  MILESTONES,
} from "@/content/about-page";

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const OVERVIEW: { label: string; value: string }[] = [
  { label: "법인명", value: `${COMPANY.legalNameKo} (${COMPANY.nameEn})` },
  { label: "대표이사", value: COMPANY.ceo },
  { label: "설립일", value: COMPANY.foundedAt },
  { label: "사업자등록번호", value: COMPANY.bizNo },
  { label: "소재지", value: `(우 ${COMPANY.zip}) ${COMPANY.address}` },
  { label: "이메일", value: COMPANY.email },
];

export function AboutContent() {
  return (
    <>
      {/* 비전 · 미션 */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className="text-sm font-bold tracking-[0.25em] text-brand uppercase sm:text-base">
              Vision
            </span>
            <p className="mt-5 text-2xl font-bold leading-snug tracking-tight text-brand-ink sm:text-3xl">
              “{ABOUT_VISION}”
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-ink/70">
              {ABOUT_MISSION}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 핵심가치 */}
      <section className="bg-brand-bg py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Core Values" title="핵심가치" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((v, i) => (
              <motion.div
                key={v.en}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-md"
              >
                <span className="mx-auto grid size-12 place-items-center rounded-xl bg-brand/10 text-brand">
                  <v.Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold text-brand-ink">{v.ko}</h3>
                <p className="text-xs font-semibold tracking-[0.15em] text-brand uppercase">
                  {v.en}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 회사 개요 + 연혁 */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* 회사 개요 */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-sm font-bold tracking-[0.25em] text-brand uppercase sm:text-base">
              Company
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              회사 개요
            </h2>
            <dl className="mt-8 divide-y divide-border border-t border-border">
              {OVERVIEW.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6"
                >
                  <dt className="w-36 shrink-0 text-sm font-semibold text-brand-ink/65">
                    {row.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-brand-ink/80">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* 연혁 */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-sm font-bold tracking-[0.25em] text-brand uppercase sm:text-base">
              Milestones
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              연혁
            </h2>
            <ol className="relative mt-8 space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[0.3125rem] before:w-px before:bg-brand/20">
              {MILESTONES.map((m) => (
                <li key={`${m.date}-${m.title}`} className="relative flex gap-5">
                  <span className="relative z-10 mt-1.5 size-2.5 shrink-0 rounded-full bg-brand ring-4 ring-brand-bg" />
                  <div>
                    <p className="text-sm font-bold text-brand">{m.date}</p>
                    <p className="mt-0.5 text-base text-brand-ink/80">
                      {m.title}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* 최종 CTA */}
      <section className="bg-brand-bg py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              AI TOOLS와 함께하세요
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-ink/70">
              데이터와 인공지능으로 광고 운영의 새로운 기준을 만들어가는 여정에
              함께해요.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/demo"
                className={cn(buttonVariants(), "h-12 gap-2 px-6 text-base")}
              >
                데모 신청
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                prefetch={false}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 border-brand/30 px-6 text-base text-brand hover:bg-brand/5 hover:text-brand",
                )}
              >
                문의하기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
