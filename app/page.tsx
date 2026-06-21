import { Hero } from "@/components/sections/hero";
import { AiDiagram } from "@/components/sections/ai-diagram";
import { Features } from "@/components/sections/features";
import { Kpi } from "@/components/sections/kpi";
import { Patents } from "@/components/sections/patents";

// 메인 홈 — Hero + 섹션01~04 + 푸터
export default function Home() {
  return (
    <>
      <Hero />
      <AiDiagram />
      <Features />
      <Kpi />
      <Patents />
    </>
  );
}
