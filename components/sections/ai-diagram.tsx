"use client";

import { motion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";
import { DIAGRAM_NODES, type DiagramNode } from "@/content/diagram";

// 데스크톱 절대배치 좌표 (컨테이너 % 기준) — 카드 안쪽 모서리 = 연결선 끝점
const EDGE_X = { left: 25, right: 75 } as const;
const ROW_Y = [18, 50, 82] as const;

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function AiDiagram() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-brand-mid uppercase">
            AI MARKETING OS
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            하나의 AI 엔진이 광고의
            <br className="hidden sm:block" /> 모든 과정을 연결합니다
          </h2>
        </motion.div>

        {/* 데스크톱 다이어그램 */}
        <div className="relative mx-auto mt-16 hidden h-[34rem] max-w-5xl lg:block">
          {/* 연결선 */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 size-full"
            aria-hidden
          >
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1749a6" />
                <stop offset="100%" stopColor="#00b4d8" />
              </linearGradient>
            </defs>
            {DIAGRAM_NODES.map((n, i) => (
              <motion.line
                key={n.name}
                x1="50"
                y1="50"
                x2={EDGE_X[n.side]}
                y2={ROW_Y[n.row]}
                stroke="url(#lineGrad)"
                strokeWidth="0.4"
                strokeDasharray="1.5 1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              />
            ))}
          </svg>

          {/* 중앙 AI 칩 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <AiCore />
          </div>

          {/* 6 노드 카드 */}
          {DIAGRAM_NODES.map((n, i) => (
            <div
              key={n.name}
              className={cn(
                "absolute w-60 -translate-y-1/2",
                n.side === "left" ? "left-0" : "right-0",
              )}
              style={{ top: `${ROW_Y[n.row]}%` }}
            >
              <NodeCard node={n} index={i} />
            </div>
          ))}
        </div>

        {/* 모바일 다이어그램 — AI 칩 + 2열 그리드 */}
        <div className="mt-12 lg:hidden">
          <div className="flex justify-center">
            <AiCore />
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4">
            {DIAGRAM_NODES.map((n, i) => (
              <NodeCard key={n.name} node={n} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AiCore() {
  return (
    <div className="relative grid size-28 place-items-center">
      <motion.div
        className="absolute inset-0 rounded-full bg-brand-glow/30 blur-2xl"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-2 rounded-full border border-dashed border-brand/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative grid size-20 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-mid text-2xl font-extrabold text-white shadow-lg shadow-brand/40">
        AI
      </div>
    </div>
  );
}

function NodeCard({ node, index }: { node: DiagramNode; index: number }) {
  const { Icon, name, sub } = node;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: 0.1 + index * 0.1, ease: "easeOut" }}
      className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-md"
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
        <Icon className="size-5" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="font-semibold text-brand-ink">{name}</p>
        <p className="text-sm leading-snug text-brand-ink/55">{sub}</p>
      </div>
    </motion.div>
  );
}
