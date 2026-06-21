import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "문의하기",
  description:
    "AI TOOLS 서비스 도입·제휴·기타 문의를 남겨주세요. 담당자가 빠르게 연락드립니다.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="문의하기"
        title="문의를 남겨주세요"
        description="서비스 도입부터 제휴 제안까지, 궁금하신 점을 남겨주시면 담당자가 빠르게 연락드립니다."
      />
      <ContactContent />
    </>
  );
}
