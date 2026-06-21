"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeader } from "@/components/sections/section-header";
import {
  SOLUTION_INDUSTRIES,
  SOLUTION_PILLARS,
} from "@/content/solution-page";

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function SolutionContent() {
  return (
    <>
      {/* 산업별 맞춤 솔루션 */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Industry Solutions"
            title="산업별 맞춤 솔루션"
            description="업종마다 광고 전략은 다릅니다. AI TOOLS는 산업 특성에 맞춰 광고 운영을 자동화합니다."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {SOLUTION_INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.name}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06 }}
                className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-md sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-mid text-white shadow-lg shadow-brand/30">
                    <ind.Icon className="size-7" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-brand-ink">
                      {ind.name}
                    </h3>
                    <p className="text-sm font-semibold text-brand">
                      {ind.tagline}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-base leading-relaxed text-brand-ink/70">
                  {ind.desc}
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                  {ind.points.map((point) => (
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 공통 기반 */}
      <section className="bg-brand-bg py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Platform"
            title="모든 솔루션의 공통 기반"
            description="어떤 업종이든, 동일한 AI 광고 운영 엔진 위에서 작동합니다."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {SOLUTION_PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm"
              >
                <span className="mx-auto grid size-12 place-items-center rounded-xl bg-brand/10 text-brand">
                  <p.Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold text-brand-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 최종 CTA */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              우리 업종에 맞는 솔루션이 궁금하신가요?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-ink/70">
              업종과 광고 데이터를 알려주시면, AI TOOLS가 최적의 광고 운영
              전략을 제안해 드립니다.
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
