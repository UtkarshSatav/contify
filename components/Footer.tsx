"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full px-4 md:px-8 lg:px-16 pb-8">
      {/* Horizontal Divider */}
      <div
        className="w-full h-px mb-8"
        style={{
          background: "linear-gradient(to right, transparent 0%, #93C5FD 20%, #93C5FD 80%, transparent 100%)",
        }}
      />

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Logo + Copyright */}
        <div className="flex items-center gap-4">
          <Image
            src="/contify-dark.svg"
            alt="Contify"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
          <span
            className="text-sm"
            style={{ color: "#5A6B7A" }}
          >
            © 2025 — Copyright
          </span>
        </div>

        {/* Center: Tagline */}
        <div className="flex items-center gap-4 md:gap-6">
          <span
            className="text-3xl font-medium"
            style={{ color: "#183F7B", letterSpacing: "-0.01em" }}
          >
            Automate.
          </span>
          <span
            className="text-3xl font-medium"
            style={{ color: "#183F7B", letterSpacing: "-0.01em" }}
          >
            Grow.
          </span>
          <span
            className="text-3xl font-medium"
            style={{ color: "#183F7B", letterSpacing: "-0.01em" }}
          >
            Monetize.
          </span>
        </div>

        {/* Right: Social Links */}
        <div className="flex flex-col items-start gap-3">
          <span
            className="text-sm"
            style={{ color: "#5A6B7A" }}
          >
            Follow us on
          </span>
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center transition-all hover:opacity-80"
              style={{ backgroundColor: "#183F7B" }}
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Dribbble */}
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center transition-all hover:opacity-80"
              style={{ backgroundColor: "#183F7B" }}
              aria-label="Dribbble"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center transition-all hover:opacity-80"
              style={{ backgroundColor: "#183F7B" }}
              aria-label="Twitter"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center transition-all hover:opacity-80"
              style={{ backgroundColor: "#183F7B" }}
              aria-label="YouTube"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
