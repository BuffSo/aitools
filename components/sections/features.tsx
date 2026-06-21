"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";

import { SERVICE_FEATURES, type ServiceFeature } from "@/content/services";

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Features() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-bold tracking-[0.25em] text-brand uppercase sm:text-base">
            핵심 기능
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            AI가 모든 과정을 자동으로 처리합니다
          </h2>
          <p className="mt-4 text-lg text-brand-ink/70">
            광고 운영의 복잡한 업무를 AI가 자동화하여 최적의 성과를 만들어냅니다.
          </p>
        </motion.div>

        {/* 3×2 그리드 */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_FEATURES.map((feature, i) => (
            <FeatureCard key={feature.href} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: ServiceFeature;
  index: number;
}) {
  const { Icon, name, desc, href } = feature;
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link
        href={href}
        prefetch={false}
        className="group flex h-full min-h-[12.5rem] flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand hover:shadow-md"
      >
        <span className="grid size-12 place-items-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
          <Icon className="size-6" aria-hidden />
        </span>
        <h3 className="mt-5 text-lg font-bold text-brand-ink">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">{desc}</p>
        <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-brand">
          자세히 보기
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );
}
