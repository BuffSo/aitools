import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";

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
    default: "AI TOOLS — AI가 광고의 성과를 분석하고 의사결정합니다",
    template: "%s | AI TOOLS",
  },
  description: SLOGAN,
  openGraph: {
    title: "AI TOOLS — AI MARKETING OS",
    description: SLOGAN,
    url: "https://aitoolz.kr",
    siteName: "AI TOOLS",
    locale: "ko_KR",
    type: "website",
  },
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
        <Header />
        <div className="flex flex-1 flex-col pt-16">{children}</div>
      </body>
    </html>
  );
}
