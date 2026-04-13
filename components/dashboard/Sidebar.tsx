"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Wardrobe",
    href: "/dashboard",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    label: "Outfits",
    href: "/dashboard/outfits",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    label: "Categories",
    href: "/dashboard/categories",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-[#ffc2cc] flex flex-col">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-[#ffc2cc]">
        <Link href="/" className="text-xl font-bold text-[#4a1f38]">
          Closet<span className="text-[#c084a0]">.</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                active
                  ? "bg-[#fce8e0] text-[#9b5c7a]"
                  : "text-[#7a4f5a] hover:bg-[#fdf6f0] hover:text-[#9b5c7a]"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="px-6 py-5 border-t border-[#ffc2cc]">
        <span className="text-sm text-[#7a4f5a] font-medium">Demo Mode</span>
      </div>
    </aside>
  );
}
