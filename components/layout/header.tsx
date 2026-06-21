"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { NAV_ITEMS } from "@/content/nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  function closeMobile() {
    setMobileOpen(false);
    // 드로어를 연 햄버거 버튼으로 포커스 복귀 (키보드 접근성)
    hamburgerRef.current?.focus();
  }

  // 스크롤 50px 이상이면 헤더 배경 흰색 + 그림자 고정
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 드로어 열렸을 때: Esc 닫기 + 바디 스크롤 잠금 + 닫기 버튼으로 포커스 이동
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
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
      {/* 키보드 사용자용 본문 바로가기 */}
      <a
        href="#main-content"
        className="sr-only z-50 rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        본문 바로가기
      </a>
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
              prefetch={false}
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
            prefetch={false}
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
          ref={hamburgerRef}
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
            onClick={closeMobile}
            aria-hidden
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="모바일 메뉴"
            className="absolute inset-y-0 right-0 flex w-72 max-w-[78%] flex-col bg-white shadow-xl"
          >
            {/* 헤더 */}
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Image
                src="/logo-horizontal-dark.png"
                alt="AI TOOLS"
                width={120}
                height={26}
                className="h-6 w-auto"
              />
              <button
                ref={closeBtnRef}
                type="button"
                aria-label="메뉴 닫기"
                onClick={closeMobile}
                className="-mr-2 rounded-md p-2 text-brand-ink/70 transition-colors hover:bg-brand-bg hover:text-brand"
              >
                <X className="size-6" aria-hidden />
              </button>
            </div>

            {/* 메뉴 */}
            <nav
              id="mobile-menu"
              aria-label="모바일 메뉴"
              className="flex flex-col gap-0.5 px-3 py-4"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  onClick={closeMobile}
                  className="group flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-brand-ink/90 transition-colors hover:bg-brand-bg hover:text-brand"
                >
                  {item.label}
                  <ChevronRight
                    className="size-4 text-brand-ink/25 transition-colors group-hover:text-brand"
                    aria-hidden
                  />
                </Link>
              ))}
            </nav>

            {/* CTA — 하단 고정 */}
            <div className="mt-auto flex flex-col gap-2.5 border-t border-border px-5 pt-5 pb-6">
              <Link
                href="/demo"
                onClick={closeMobile}
                className={cn(buttonVariants(), "h-11 w-full")}
              >
                데모 신청
              </Link>
              <Link
                href="/login"
                prefetch={false}
                onClick={closeMobile}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-11 w-full border-brand/30 text-brand hover:bg-brand/5 hover:text-brand",
                )}
              >
                로그인
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
