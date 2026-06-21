import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { LegalDocument } from "@/components/legal/legal-document";
import { TERMS_DOC } from "@/content/legal";

export const metadata: Metadata = {
  title: "이용약관",
  description:
    "AI TOOLS(에이아이툴즈) 서비스 이용약관입니다. 서비스 이용 조건과 회사·이용자의 권리·의무를 안내합니다.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Terms" title="이용약관" />
      <LegalDocument doc={TERMS_DOC} />
    </>
  );
}
