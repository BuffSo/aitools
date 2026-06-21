"use client";

import { MotionConfig } from "motion/react";

// 사용자의 prefers-reduced-motion 설정을 모든 Framer Motion 컴포넌트에 적용
// (transform/layout 애니메이션 비활성, opacity 페이드는 유지)
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
