"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { NAV_ITEMS } from "@/content/nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // 스크롤 50px 이상이면 헤더 배경 흰색 + 그림자 고정
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 드로어 열렸을 때: Esc 닫기 + 바디 스크롤 잠금
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="AI TOOLS 홈" className="shrink-0">
          <Image
            src="/logo-horizontal-dark.png"
            alt="AI TOOLS"
            width={132}
            height={28}
            priority
            className="h-7 w-auto"
          />
        </Link>

        {/* 데스크톱 메뉴 */}
        <nav aria-label="주 메뉴" className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-ink/80 transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 데스크톱 우측 CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-brand-ink/70 transition-colors hover:text-brand"
          >
            로그인
          </Link>
          <Link href="/demo" className={cn(buttonVariants(), "h-9 px-4")}>
            데모 신청
          </Link>
        </div>

        {/* 모바일 햄버거 */}
        <button
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(true)}
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-ink md:hidden"
        >
          <Menu className="size-6" aria-hidden />
        </button>
      </div>

      {/* 모바일 드로어 */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <div className="absolute inset-y-0 right-0 flex w-72 max-w-[80%] flex-col bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <Image
                src="/logo-icon.png"
                alt="AI TOOLS"
                width={32}
                height={32}
                className="size-8"
              />
              <button
                type="button"
                aria-label="메뉴 닫기"
                onClick={() => setMobileOpen(false)}
                className="rounded-md p-2 text-brand-ink"
              >
                <X className="size-6" aria-hidden />
              </button>
            </div>

            <nav
              id="mobile-menu"
              aria-label="모바일 메뉴"
              className="mt-6 flex flex-col gap-1"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-2 py-3 text-base font-medium text-brand-ink/90 transition-colors hover:bg-brand-bg hover:text-brand"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="text-center text-sm font-medium text-brand-ink/70"
              >
                로그인
              </Link>
              <Link
                href="/demo"
                onClick={() => setMobileOpen(false)}
                className={cn(buttonVariants(), "h-10 w-full")}
              >
                데모 신청
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
