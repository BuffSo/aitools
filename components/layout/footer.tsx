import Image from "next/image";
import Link from "next/link";

import { COMPANY } from "@/content/company";
import { LinkedinIcon, YoutubeIcon } from "@/components/icons/social";

const SNS = [
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: LinkedinIcon },
  { label: "YouTube", href: "https://www.youtube.com", Icon: YoutubeIcon },
];

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* 로고 + 슬로건 + SNS */}
          <div>
            <Image
              src="/logo-horizontal.png"
              alt="AI TOOLS"
              width={140}
              height={30}
              className="h-7 w-auto"
            />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
              {COMPANY.slogan}
            </p>
            <div className="mt-4 flex gap-2.5">
              {SNS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-md p-2 text-white/60 ring-1 ring-white/15 transition-colors hover:text-white hover:ring-white/40"
                >
                  <Icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* 회사 정보 */}
          <div>
            <h2 className="text-sm font-semibold text-white">회사 정보</h2>
            <dl className="mt-3 space-y-1.5 text-sm">
              <div className="flex gap-2">
                <dt className="text-white/45">회사명</dt>
                <dd>
                  {COMPANY.nameKo} ({COMPANY.nameEn})
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-white/45">대표자</dt>
                <dd>{COMPANY.ceo}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-white/45">사업자번호</dt>
                <dd>{COMPANY.bizNo}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-white/45">이메일</dt>
                <dd>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="transition-colors hover:text-white"
                  >
                    {COMPANY.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* 오시는 길 */}
          <div>
            <h2 className="text-sm font-semibold text-white">오시는 길</h2>
            <address className="mt-3 text-sm not-italic leading-relaxed text-white/55">
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
        </div>

        {/* 하단 바 */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
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
