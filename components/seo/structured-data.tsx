import { COMPANY } from "@/content/company";

const BASE_URL = `https://${COMPANY.domain}`;

// "2026.05.11" → "2026-05-11" (schema.org Date 형식)
const foundingDate = COMPANY.foundedAt.replace(/\./g, "-");

// schema.org 구조화 데이터 — 검색 결과 지식 패널/리치 결과용
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: COMPANY.nameKo,
      legalName: COMPANY.legalNameKo,
      alternateName: COMPANY.nameEn,
      url: BASE_URL,
      logo: `${BASE_URL}/logo-horizontal.png`,
      email: COMPANY.email,
      foundingDate,
      founder: { "@type": "Person", name: COMPANY.ceo },
      description: COMPANY.slogan,
      address: {
        "@type": "PostalAddress",
        postalCode: COMPANY.zip,
        streetAddress: COMPANY.address,
        addressCountry: "KR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: COMPANY.email,
        contactType: "customer support",
        availableLanguage: ["Korean"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: COMPANY.nameEn,
      description: COMPANY.slogan,
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "ko-KR",
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify 출력은 신뢰 가능한 정적 데이터 — XSS 위험 없음
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
