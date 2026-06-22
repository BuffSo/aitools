import type { MetadataRoute } from "next";
import { COMPANY } from "@/content/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${COMPANY.nameEn} — ${COMPANY.nameKo}`,
    short_name: COMPANY.nameEn,
    description: COMPANY.slogan,
    start_url: "/",
    display: "standalone",
    lang: "ko",
    background_color: "#ffffff",
    theme_color: "#1749a6",
    icons: [
      { src: "/logo-icon.png", sizes: "192x192", type: "image/png" },
      { src: "/logo-icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
