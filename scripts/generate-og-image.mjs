// OG 이미지 생성: scripts/og-image.svg(배경+텍스트) + 흰색 가로 로고 합성 → app/opengraph-image.png
// 한글은 시스템 폰트(Apple SD Gothic Neo)로 렌더링되며, 결과 PNG를 커밋하므로 배포 서버 폰트와 무관하다.
// 내용을 바꾸면: pnpm run og
import sharp from "sharp";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const svgPath = join(__dirname, "og-image.svg");
const logoPath = join(__dirname, "..", "public", "logo-horizontal.png");
const outputPath = join(__dirname, "..", "app", "opengraph-image.png");

// 로고: 원본 4170×900(≈4.63:1) → 좌상단 배치 (배지와 같은 높이대)
const LOGO_W = 300;
const LOGO_H = Math.round((LOGO_W * 900) / 4170); // ≈ 65
const LOGO_X = 64;
const LOGO_Y = 68;

const logo = await sharp(logoPath).resize(LOGO_W, LOGO_H).png().toBuffer();

await sharp(readFileSync(svgPath))
  .resize(1200, 630)
  .composite([{ input: logo, top: LOGO_Y, left: LOGO_X }])
  .png()
  .toFile(outputPath);

console.log("OG image generated:", outputPath);
