import type { ComponentType } from "react";
import { SiMeta } from "react-icons/si";

// 연동 광고 플랫폼 브랜드 마크 — 제3자 상표, 연동 표시(nominative) 목적.
// Meta 는 Simple Icons(CC0) 정식 마크, 나머지는 간략화 마크.

export function GoogleAdsMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M11.6 4 5.1 18.4"
        stroke="#FBBC04"
        strokeWidth="5.8"
        strokeLinecap="round"
      />
      <path
        d="M11.6 4 18.1 18.4"
        stroke="#4285F4"
        strokeWidth="5.8"
        strokeLinecap="round"
      />
      <circle cx="5.4" cy="18.3" r="3.3" fill="#4285F4" />
    </svg>
  );
}

export function MetaMark({ className }: { className?: string }) {
  return <SiMeta aria-hidden className={className} style={{ color: "#0467DF" }} />;
}

export function NaverMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="6" fill="#03C75A" />
      <path
        d="M8 16.8V7.2h2.7l2.6 4.1V7.2H16v9.6h-2.7l-2.6-4.1v4.1Z"
        fill="#fff"
      />
    </svg>
  );
}

export function KakaoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="6" fill="#FEE500" />
      <path
        d="M12 6.4c-3.7 0-6.7 2.3-6.7 5.2 0 1.85 1.25 3.47 3.13 4.4l-.66 2.45c-.06.22.18.4.37.27l2.95-1.95c.3.03.6.05.91.05 3.7 0 6.7-2.33 6.7-5.22C18.7 8.7 15.7 6.4 12 6.4Z"
        fill="#3C1E1E"
      />
    </svg>
  );
}

export interface PlatformLogo {
  name: string;
  label: string;
  Mark: ComponentType<{ className?: string }>;
  /** 워드마크 색 (Tailwind 임의값 클래스) */
  labelClass: string;
}

export const PLATFORM_LOGOS: PlatformLogo[] = [
  {
    name: "Google Ads",
    label: "Google Ads",
    Mark: GoogleAdsMark,
    labelClass: "text-[#5f6368]",
  },
  {
    name: "Meta",
    label: "Meta",
    Mark: MetaMark,
    labelClass: "text-[#1c2b33]",
  },
  {
    name: "NAVER",
    label: "NAVER",
    Mark: NaverMark,
    labelClass: "text-[#03c75a]",
  },
  {
    name: "kakao",
    label: "kakao",
    Mark: KakaoMark,
    labelClass: "text-[#e8a317]",
  },
];
