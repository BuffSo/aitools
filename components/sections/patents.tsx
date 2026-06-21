"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { PATENTS, type Patent } from "@/content/patents";

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Patents() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-bold tracking-[0.25em] text-brand-mid uppercase sm:text-base">
            특허 / 기술 경쟁력
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            독자적인 AI 기술과 특허로 차별화합니다
          </h2>
          <p className="mt-4 text-lg text-brand-ink/60">
            에이아이툴즈는 독자적인 AI 기술과 특허를 기반으로 차별화된 광고
            자동화 솔루션을 제공합니다.
          </p>
        </motion.div>

        {/* 특허 5종 */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {PATENTS.map((patent, i) => (
            <PatentCard key={patent.name} patent={patent} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/patent"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-11 gap-2 border-brand/30 px-5 text-base text-brand hover:bg-brand/5 hover:text-brand",
            )}
          >
            특허/기술 자세히 보기
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PatentCard({ patent, index }: { patent: Patent; index: number }) {
  const { Icon, name } = patent;
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className="flex flex-col items-center rounded-2xl border border-border bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-md"
    >
      <span className="grid size-14 place-items-center rounded-full bg-brand/10 text-brand">
        <Icon className="size-7" aria-hidden />
      </span>
      <h3 className="mt-4 text-sm font-bold leading-snug text-brand-ink">
        {name}
      </h3>
    </motion.div>
  );
}
