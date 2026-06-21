"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowRight, ChevronDown, Download, TrendingUp, Zap } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const PLATFORMS = ["Google Ads", "Meta", "NAVER", "kakao"];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-white via-brand-bg/50 to-white pt-28 pb-20 lg:pt-32">
      {/* 배경 장식 */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(23,73,166,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,73,166,0.05)_1px,transparent_1px)] [background-size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute -top-24 right-[-6rem] size-[32rem] rounded-full bg-brand-glow/15 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-[-4rem] size-96 rounded-full bg-brand/10 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* 좌: 텍스트 */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-semibold tracking-wide text-brand"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-glow opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-brand-glow" />
            </span>
            AI MARKETING OS
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold leading-[1.15] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl"
          >
            AI가 광고의 성과를
            <br />
            <span className="bg-gradient-to-r from-brand via-brand-mid to-brand-glow bg-clip-text text-transparent">
              분석하고 의사결정
            </span>
            합니다
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-brand-ink/70"
          >
            에이아이툴즈는 인공지능으로 광고의 성과를 분석하고, 의사결정하여,
            최적의 광고 운영 솔루션을 제공합니다.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/demo"
              className={cn(buttonVariants(), "group h-12 gap-2 px-6 text-base")}
            >
              데모 신청하기
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/solution"
              prefetch={false}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 gap-2 border-brand/30 px-6 text-base text-brand hover:bg-brand/5 hover:text-brand",
              )}
            >
              솔루션 소개서 다운로드
              <Download className="size-4" />
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <p className="text-xs font-semibold tracking-[0.15em] text-brand-ink/65 uppercase">
              연동 플랫폼
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-7 gap-y-2">
              {PLATFORMS.map((p) => (
                <span
                  key={p}
                  className="text-base font-bold text-brand-ink/60 transition-colors hover:text-brand-ink/80"
                >
                  {p}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* 우: AI 비주얼 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-brand-ink/55 sm:flex"
      >
        <span className="text-[0.65rem] font-medium tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ChevronDown className="size-5 animate-bounce" aria-hidden />
      </motion.div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative size-full" aria-hidden>
      {/* 글로우 */}
      <motion.div
        className="absolute top-1/2 left-1/2 size-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-glow/30 blur-3xl"
        animate={{ opacity: [0.35, 0.65, 0.35], scale: [0.95, 1.08, 0.95] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* 회전 점선 링 */}
      <motion.div
        className="absolute inset-4 rounded-full border border-dashed border-brand/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-12 rounded-full border border-brand-glow/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* 헥사곤 네트워크 */}
      <svg viewBox="0 0 200 200" className="relative size-full drop-shadow-[0_0_25px_rgba(0,180,216,0.25)]">
        <defs>
          <linearGradient id="hexStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7dd2" />
            <stop offset="100%" stopColor="#00b4d8" />
          </linearGradient>
        </defs>
        {/* 외곽 헥사곤 */}
        <motion.path
          d="M100 22 L168 61 L168 139 L100 178 L32 139 L32 61 Z"
          fill="none"
          stroke="url(#hexStroke)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.4 }}
        />
        {/* 중심 → 노드 연결선 */}
        {NODES.map(([x, y], i) => (
          <motion.line
            key={i}
            x1="100"
            y1="100"
            x2={x}
            y2={y}
            stroke="url(#hexStroke)"
            strokeWidth="1.5"
            strokeOpacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.9 + i * 0.08 }}
          />
        ))}
        {/* 노드 */}
        {NODES.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="4.5"
            fill="#00b4d8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.1 + i * 0.08 }}
          />
        ))}
      </svg>

      {/* 중앙 AI 칩 */}
      <motion.div
        className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-mid text-xl font-extrabold text-white shadow-lg shadow-brand/40"
        animate={{ boxShadow: ["0 0 20px rgba(0,180,216,0.4)", "0 0 40px rgba(0,180,216,0.7)", "0 0 20px rgba(0,180,216,0.4)"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        AI
      </motion.div>

      {/* 플로팅 카드 */}
      <FloatingCard className="-top-2 right-2" delay={1.6}>
        <TrendingUp className="size-4 text-brand-glow" />
        <span>ROAS +200%</span>
      </FloatingCard>
      <FloatingCard className="-bottom-1 left-0" delay={1.9}>
        <Zap className="size-4 text-brand" />
        <span>실시간 자동 최적화</span>
      </FloatingCard>
    </div>
  );
}

const NODES: [number, number][] = [
  [100, 55],
  [139, 78],
  [139, 122],
  [100, 145],
  [61, 122],
  [61, 78],
];

function FloatingCard({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={cn(
        "absolute flex items-center gap-1.5 rounded-xl border border-border bg-white/90 px-3 py-2 text-sm font-semibold text-brand-ink shadow-lg shadow-brand/10 backdrop-blur",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
