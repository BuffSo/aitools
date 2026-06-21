"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  cta?: { label: string; href: string };
}

// 서브페이지 공통 헤더 (고정 헤더 아래 여백 확보 + 브랜드 그라데이션 배경)
export function PageHero({ eyebrow, title, description, cta }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-brand-bg/60 via-white to-white pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(23,73,166,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,73,166,0.05)_1px,transparent_1px)] [background-size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute -top-24 right-[-6rem] size-[28rem] rounded-full bg-brand-glow/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <span className="text-sm font-bold tracking-[0.25em] text-brand uppercase sm:text-base">
          {eyebrow}
        </span>
        <h1 className="mt-4 text-4xl font-bold leading-[1.15] tracking-tight text-brand-ink sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-brand-ink/70">
            {description}
          </p>
        )}
        {cta && (
          <Link
            href={cta.href}
            className={cn(buttonVariants(), "mt-8 h-12 gap-2 px-6 text-base")}
          >
            {cta.label}
            <ArrowRight className="size-4" />
          </Link>
        )}
      </motion.div>
    </section>
  );
}
