"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeader } from "@/components/sections/section-header";
import {
  PAIN_POINTS,
  SERVICE_STEPS,
  SERVICE_WHY,
  SERVICE_EFFECTS,
  SERVICE_INDUSTRIES,
} from "@/content/service-page";

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ServiceContent() {
  return (
    <>
      {/* 이런 고민이 있으신가요? */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Pain Points"
            title="이런 고민이 있으신가요?"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {PAIN_POINTS.map((point, i) => (
              <motion.div
                key={point}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm"
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                  <Check className="size-4" aria-hidden />
                </span>
                <p className="text-base leading-relaxed text-brand-ink/80">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-10 text-center text-lg font-semibold text-brand"
          >
            AI 광고 운영 자동화 플랫폼이 해결해 드립니다.
          </motion.p>
        </div>
      </section>

      {/* 어떻게 작동하나요? — STEP 1~5 */}
      <section className="bg-brand-bg py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How it works"
            title="어떻게 작동하나요?"
            description="데이터 업로드부터 광고 운영 계획 생성까지, AI가 5단계로 처리합니다."
          />
          <ol className="relative mt-14 space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[1.6875rem] before:w-px before:bg-brand/20">
            {SERVICE_STEPS.map((s, i) => (
              <motion.li
                key={s.step}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.05 }}
                className="relative flex gap-5"
              >
                <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-mid text-white shadow-lg shadow-brand/30">
                  <s.Icon className="size-6" aria-hidden />
                </span>
                <div className="flex-1 rounded-2xl border border-border bg-white p-5 shadow-sm">
                  <span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">
                    {s.step}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-brand-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                    {s.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* 왜 우리인가 */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why us"
            title="왜 AI 광고 운영 자동화 플랫폼인가?"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {SERVICE_WHY.map((w, i) => (
              <motion.div
                key={w.title}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-md"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-brand/10 text-brand">
                  <w.Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold text-brand-ink">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                  {w.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 기대효과 */}
      <section className="bg-brand-ink py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center"
          >
            <span className="text-sm font-bold tracking-[0.25em] text-brand-glow uppercase sm:text-base">
              기대효과
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              도입 시 기대되는 효과
            </h2>
          </motion.div>
          <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {SERVICE_EFFECTS.map((e, i) => (
              <motion.div
                key={e.label}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06 }}
                className="text-center"
              >
                <p className="text-3xl font-extrabold text-brand-glow sm:text-4xl">
                  {e.value}
                </p>
                <p className="mt-2 text-sm font-medium text-white/70">
                  {e.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 활용 분야 */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Industries" title="활용 분야" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {SERVICE_INDUSTRIES.map((name, i) => (
              <motion.span
                key={name}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.04 }}
                className="rounded-full border border-brand/20 bg-brand/5 px-5 py-2.5 text-sm font-semibold text-brand"
              >
                {name}
              </motion.span>
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
              AI가 광고 운영의 새로운 기준을 만듭니다
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-ink/70">
              광고 데이터를 분석하는 시대를 넘어, 광고 전략을 자동으로 수립하는
              시대. AI TOOLS와 함께 더 높은 광고 성과를 경험해 보세요.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/demo"
                className={cn(buttonVariants(), "h-12 gap-2 px-6 text-base")}
              >
                무료 분석 신청
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
                서비스 문의하기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
