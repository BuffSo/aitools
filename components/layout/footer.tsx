import Image from "next/image";
import Link from "next/link";

import { COMPANY } from "@/content/company";
import { NAV_ITEMS } from "@/content/nav";
import { LinkedinIcon, YoutubeIcon } from "@/components/icons/social";

const QUICK_LINKS = NAV_ITEMS.filter((item) => item.href !== "/");

const SNS = [
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: LinkedinIcon },
  { label: "YouTube", href: "https://www.youtube.com", Icon: YoutubeIcon },
];

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* 컬럼 1 — 로고 + 슬로건 */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo-horizontal.png"
              alt="AI TOOLS"
              width={148}
              height={32}
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {COMPANY.slogan}
            </p>
          </div>

          {/* 컬럼 2 — 회사 정보 */}
          <div>
            <h2 className="text-sm font-semibold text-white">회사 정보</h2>
            <dl className="mt-4 space-y-1.5 text-sm">
              <div className="flex gap-2">
                <dt className="text-white/50">회사명</dt>
                <dd>
                  {COMPANY.nameKo} ({COMPANY.nameEn})
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-white/50">대표자</dt>
                <dd>{COMPANY.ceo}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-white/50">사업자번호</dt>
                <dd>{COMPANY.bizNo}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-white/50">이메일</dt>
                <dd>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="transition-colors hover:text-white"
                  >
                    {COMPANY.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-white/50">대표전화</dt>
                <dd>{COMPANY.phone}</dd>
              </div>
            </dl>
          </div>

          {/* 컬럼 3 — 주소 */}
          <div>
            <h2 className="text-sm font-semibold text-white">오시는 길</h2>
            <address className="mt-4 text-sm not-italic leading-relaxed text-white/60">
              (우) {COMPANY.zip}
              <br />
              {COMPANY.address}
            </address>
            <Link
              href="/contact"
              className="mt-3 inline-block text-sm font-medium text-brand-glow transition-colors hover:text-white"
            >
              오시는 길 →
            </Link>
          </div>

          {/* 컬럼 4 — 바로가기 + SNS */}
          <div>
            <h2 className="text-sm font-semibold text-white">바로가기</h2>
            <nav aria-label="푸터 메뉴" className="mt-4 flex flex-col gap-2">
              {QUICK_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-5 flex gap-3">
              {SNS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-md p-2 text-white/60 ring-1 ring-white/15 transition-colors hover:text-white hover:ring-white/40"
                >
                  <Icon className="size-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 바 */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {COMPANY.copyrightYear} {COMPANY.legalName} All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition-colors hover:text-white">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
