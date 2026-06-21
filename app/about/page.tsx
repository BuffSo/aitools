import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { AboutContent } from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "회사소개",
  description:
    "에이아이툴즈(AI TOOLS)는 인공지능으로 기업의 마케팅 의사결정을 자동화하는 AI 광고 운영 솔루션 기업입니다. 비전·미션·핵심가치와 회사 개요를 소개합니다.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="회사소개"
        title="데이터와 AI로 마케팅을 혁신합니다"
        description="에이아이툴즈는 광고 운영자의 경험과 감에 의존하던 의사결정을 데이터와 인공지능으로 자동화합니다."
      />
      <AboutContent />
    </>
  );
}
