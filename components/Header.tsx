"use client";

import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Use cases", href: "/use-cases", hasDropdown: true },
  { label: "Pricing", href: "/pricing", hasDropdown: false },
  { label: "Resources", href: "/resources", hasDropdown: false },
  { label: "Blogs", href: "/blogs", hasDropdown: false },
];

export default function Header() {
  return (
    <header className="flex w-full font-[family-name:var(--font-inter)]">
      {/* Part 1: Logo */}
      <div
        className="flex items-center px-24 py-3"
        style={{ backgroundColor: "var(--header-logo)" }}
      >
        <Link href="/">
          {/* Light mode: dark logo */}
          <Image
            src="/contify-dark.svg"
            alt="Contify"
            width={110}
            height={26}
            priority
            className="dark:hidden"
          />
          {/* Dark mode: light logo */}
          <Image
            src="/contify.svg"
            alt="Contify"
            width={110}
            height={26}
            priority
            className="hidden dark:block"
          />
        </Link>
      </div>

      {/* Part 2: Navigation */}
      <nav
        className="flex flex-1 items-center justify-center gap-12 px-8 py-3"
        style={{
          background: "linear-gradient(to right, var(--header-nav-start), var(--header-nav-end))",
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-1 text-sm text-[#183F7B] transition-colors hover:text-[#0f2a54] dark:text-white/90 dark:hover:text-white"
          >
            {item.label}
            {item.hasDropdown && (
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </Link>
        ))}
      </nav>

      {/* Part 3: CTA */}
      <div
        className="flex items-center gap-5 px-6 py-3"
        style={{ backgroundColor: "var(--header-cta)" }}
      >
        <Link
          href="/book-demo"
          className="group relative text-sm font-medium text-[#183F7B] transition-colors hover:text-[#0f2a54] dark:text-white dark:hover:text-white"
        >
          Book a demo
          <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#183F7B] dark:bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/join-waitlist"
          className="rounded-full border border-[#183F7B]/30 px-5 py-1.5 text-sm text-[#183F7B] transition-all hover:scale-105 hover:border-[#183F7B]/50 hover:bg-[#183F7B]/5 hover:shadow-lg dark:border-white/30 dark:text-white dark:hover:border-white/50 dark:hover:bg-white/5"
        >
          Join waitlist
        </Link>
      </div>
    </header>
  );
}
