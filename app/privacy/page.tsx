import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { LegalDocument } from "@/components/legal/legal-document";
import { PRIVACY_DOC } from "@/content/legal";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description:
    "AI TOOLS(에이아이툴즈) 웹사이트의 개인정보 수집·이용·보관·파기에 관한 처리방침입니다.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="개인정보처리방침" />
      <LegalDocument doc={PRIVACY_DOC} />
    </>
  );
}
