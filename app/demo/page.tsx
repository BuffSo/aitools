import type { Metadata } from "next";
import { DemoForm } from "@/components/forms/demo-form";

export const metadata: Metadata = {
  title: "데모 신청",
  description:
    "AI TOOLS 광고 운영 자동화 플랫폼 데모를 신청하세요. 담당자가 빠르게 연락드립니다.",
};

export default function DemoPage() {
  return (
    <section className="bg-brand-bg/40 pt-28 pb-20 lg:pt-32">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold tracking-[0.25em] text-brand-mid uppercase">
            데모 신청
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            AI TOOLS 데모를 신청하세요
          </h1>
          <p className="mt-4 text-lg text-brand-ink/60">
            광고 운영 자동화를 직접 경험해 보세요. 신청해 주시면 담당자가 빠르게
            연락드립니다.
          </p>
        </div>
        <div className="mt-10">
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
