import Image from "next/image";

// T1 플레이스홀더 — 실제 랜딩(Hero + 섹션01~04 + 푸터)은 T2 이후 채워진다.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-8 text-center">
      <Image
        src="/logo-horizontal-dark.png"
        alt="AI TOOLS"
        width={360}
        height={78}
        priority
      />
      <p className="text-sm font-medium tracking-[0.2em] text-brand">
        AI MARKETING OS
      </p>
      <p className="max-w-xl text-balance text-brand-ink/60">
        AI가 광고의 성과를 분석하고 의사결정합니다
      </p>
    </main>
  );
}
