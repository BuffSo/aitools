"use client";

import { motion, type Variants } from "motion/react";

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// 섹션 공통 헤더 (eyebrow + 제목 + 설명) — 진입 페이드업
export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={className ?? "mx-auto max-w-2xl text-center"}
    >
      <span className="text-sm font-bold tracking-[0.25em] text-brand uppercase sm:text-base">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-brand-ink/70">{description}</p>
      )}
    </motion.div>
  );
}
