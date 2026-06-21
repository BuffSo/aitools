"use client";

import Link from "next/link";
import CountUp from "react-countup";
import { motion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { KPI_STATS, type KpiStat } from "@/content/kpi";

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Kpi() {
  return (
    <section className="bg-brand-bg py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* 좌측 — 제목 · 서브 · CTA */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className="text-xs font-bold tracking-[0.25em] text-brand-mid uppercase">
            기술 경쟁력
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            기술로 증명하는
            <br />
            AI TOOLS
          </h2>
          <p className="mt-4 text-lg text-brand-ink/60">
            특허 기반 AI 기술과 폭넓은 플랫폼 연동으로 광고 운영의 새로운 기준을
            만듭니다.
          </p>
          <Link
            href="/service"
            className={cn(buttonVariants(), "mt-8 h-11 gap-2 px-5 text-base")}
          >
            서비스 자세히 보기
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>

        {/* 우측 — 역량 지표 4종 */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10">
          {KPI_STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, index }: { stat: KpiStat; index: number }) {
  const { Icon, end, start, suffix, decimals, duration, label } = stat;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
    >
      <span className="grid size-10 place-items-center rounded-lg bg-brand/10 text-brand">
        <Icon className="size-5" aria-hidden />
      </span>
      <p className="mt-3 text-3xl font-extrabold text-brand sm:text-4xl">
        <CountUp
          end={end}
          start={start}
          duration={duration}
          decimals={decimals}
          suffix={suffix}
          separator=","
          enableScrollSpy
          scrollSpyOnce
        />
      </p>
      <p className="mt-1 text-sm font-medium text-brand-ink/60">{label}</p>
    </motion.div>
  );
}
