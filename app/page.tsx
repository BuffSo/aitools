import { Hero } from "@/components/sections/hero";
import { AiDiagram } from "@/components/sections/ai-diagram";
import { Features } from "@/components/sections/features";
import { Kpi } from "@/components/sections/kpi";

// 메인 홈 — Hero + 섹션01~04 (T8에서 특허 섹션 추가).
export default function Home() {
  return (
    <>
      <Hero />
      <AiDiagram />
      <Features />
      <Kpi />
    </>
  );
}
