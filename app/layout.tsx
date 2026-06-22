import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StructuredData } from "@/components/seo/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SLOGAN =
  "에이아이툴즈는 인공지능으로 광고의 성과를 분석하고, 의사결정하여, 최적의 광고 운영 솔루션을 제공합니다.";

export const metadata: Metadata = {
  metadataBase: new URL("https://aitoolz.kr"),
  title: {
    default: "AI TOOLS | AI 마케팅·광고 자동화 솔루션",
    template: "%s | AI TOOLS",
  },
  description: SLOGAN,
  applicationName: "AI TOOLS",
  keywords: [
    "AI TOOLS",
    "에이아이툴즈",
    "AI 광고",
    "AI 마케팅",
    "광고 자동화",
    "광고 성과 분석",
    "광고 예산 최적화",
    "성과 예측",
    "퍼포먼스 마케팅",
    "AI 광고 운영",
  ],
  openGraph: {
    title: "AI TOOLS — AI MARKETING OS",
    description: SLOGAN,
    url: "https://aitoolz.kr",
    siteName: "AI TOOLS",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI TOOLS — AI MARKETING OS",
    description: SLOGAN,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // 검색엔진 소유권 확인 코드 발급 후 입력 (Google Search Console / 네이버 서치어드바이저)
  // verification: { google: "...", other: { "naver-site-verification": "..." } },
};

export const viewport: Viewport = {
  themeColor: "#1749a6",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <StructuredData />
        <Providers>
          <Header />
          <main id="main-content" className="flex flex-1 flex-col">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
