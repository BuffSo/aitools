import type { MetadataRoute } from "next";
import { COMPANY } from "@/content/company";

const BASE_URL = `https://${COMPANY.domain}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
