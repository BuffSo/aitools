import { Hero } from "@/components/sections/hero";
import { AiDiagram } from "@/components/sections/ai-diagram";
import { Features } from "@/components/sections/features";

// 메인 홈 — Hero + 섹션01~04 (T7~T8에서 순차 추가).
export default function Home() {
  return (
    <>
      <Hero />
      <AiDiagram />
      <Features />
    </>
  );
}
