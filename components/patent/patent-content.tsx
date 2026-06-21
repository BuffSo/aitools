"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeader } from "@/components/sections/section-header";
import { PATENTS, PATENT_META } from "@/content/patents";

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const META_ITEMS = [
  { label: "출원 특허", value: `${PATENT_META.count}건` },
  { label: "출원인", value: PATENT_META.applicant },
  { label: "발명자", value: PATENT_META.inventor },
  { label: "출원 시기", value: PATENT_META.filedAt },
];

export function PatentContent() {
  return (
    <>
      {/* 출원 현황 */}
      <section className="border-y border-border bg-brand-bg py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {META_ITEMS.map((m, i) => (
            <motion.div
              key={m.label}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.06 }}
              className="text-center"
            >
              <p className="text-xs font-semibold tracking-[0.15em] text-brand-ink/65 uppercase">
                {m.label}
              </p>
              <p className="mt-1.5 text-xl font-bold text-brand">{m.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 특허 5종 상세 */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Patents"
            title="출원 특허 5건"
            description="AI TOOLS는 광고 운영 자동화의 핵심 기술을 특허로 보호하고 있습니다."
          />
          <div className="mt-14 space-y-6">
            {PATENTS.map((p, i) => (
              <motion.article
                key={p.number}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:border-brand/40 hover:shadow-md sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-mid text-white shadow-lg shadow-brand/30">
                    <p.Icon className="size-7" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="inline-flex items-center rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-bold text-brand">
                      출원 {p.number}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-brand-ink">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm leading-snug text-brand-ink/70">
                      {p.title}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-base leading-relaxed text-brand-ink/70">
                  {p.summary}
                </p>

                <ul className="mt-5 grid gap-2.5 border-t border-border pt-5 sm:grid-cols-2">
                  {p.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-brand-ink/80"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-brand"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-brand-ink/65">
                    IPC
                  </span>
                  {p.ipc.map((code) => (
                    <span
                      key={code}
                      className="rounded-md bg-brand-bg px-2 py-1 font-mono text-xs text-brand-ink/70"
                    >
                      {code}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
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
              특허 기술이 궁금하신가요?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-ink/70">
              AI TOOLS의 광고 자동화 기술을 직접 확인해 보세요. 도입 상담과 기술
              문의를 환영합니다.
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
                기술 문의하기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
