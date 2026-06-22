import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SolutionContent } from "@/components/solution/solution-content";

export const metadata: Metadata = {
  title: "솔루션",
  alternates: { canonical: "/solution" },
  description:
    "쇼핑몰·병원·학원·프랜차이즈 등 업종별 특성에 맞춘 AI 광고 운영 솔루션. 멀티플랫폼 데이터 통합과 AI 성과 예측, 자동 예산 최적화를 한 번에.",
};

export default function SolutionPage() {
  return (
    <>
      <PageHero
        eyebrow="솔루션"
        title="업종에 최적화된 AI 광고 솔루션"
        description="쇼핑몰부터 병원·학원·프랜차이즈까지. 산업 특성에 맞춰 광고 성과 분석과 예산 최적화, 운영 자동화를 제공합니다."
        cta={{ label: "데모 신청", href: "/demo" }}
      />
      <SolutionContent />
    </>
  );
}
