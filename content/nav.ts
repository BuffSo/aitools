export interface NavItem {
  label: string;
  href: string;
}

// SPEC §3 — GNB 메뉴 (뉴스 제거됨)
export const NAV_ITEMS: NavItem[] = [
  { label: "홈", href: "/" },
  { label: "서비스", href: "/service" },
  { label: "솔루션", href: "/solution" },
  { label: "특허/기술", href: "/patent" },
  { label: "회사소개", href: "/about" },
  { label: "문의하기", href: "/contact" },
];
