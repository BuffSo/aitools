import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceContent } from "@/components/service/service-content";

export const metadata: Metadata = {
  title: "서비스",
  alternates: { canonical: "/service" },
  description:
    "광고 데이터를 업로드하면 AI가 성과를 분석하고 예산 최적화·성과 예측·광고 운영 계획까지 자동으로 생성합니다. AI 광고 운영 자동화 플랫폼의 작동 방식과 기대효과를 확인하세요.",
};

export default function ServicePage() {
  return (
    <>
      <PageHero
        eyebrow="서비스"
        title="AI 광고 운영 자동화 플랫폼"
        description="광고 데이터를 업로드하면 AI가 최적의 광고 전략을 제안합니다. 성과 분석부터 예산 최적화, 성과 예측, 광고 운영 계획 수립까지 한 번에."
        cta={{ label: "무료 분석 신청", href: "/demo" }}
      />
      <ServiceContent />
    </>
  );
}
