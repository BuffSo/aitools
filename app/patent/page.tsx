import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { PatentContent } from "@/components/patent/patent-content";

export const metadata: Metadata = {
  title: "특허 / 기술",
  description:
    "AI TOOLS는 멀티채널 입찰 최적화, 생성형 AI 광고 소재, 타겟 오디언스 확장, 성과 기반 수익 정산, 멀티플랫폼 AI 에이전트 등 광고 운영 자동화 핵심 기술 5건을 특허 출원했습니다.",
};

export default function PatentPage() {
  return (
    <>
      <PageHero
        eyebrow="특허 · 기술"
        title="독자적인 AI 기술과 특허"
        description="AI TOOLS는 광고 운영 자동화의 핵심 기술을 5건의 특허로 출원하며, 기술 경쟁력으로 차별화합니다."
      />
      <PatentContent />
    </>
  );
}
