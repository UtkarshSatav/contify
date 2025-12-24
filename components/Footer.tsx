"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 py-16 md:py-24 pl-8 md:pl-16 lg:pl-24">
        {/* Main content area */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Left side - Waitlist Form */}
          <div
            className="w-full max-w-[600px] rounded-2xl p-8 md:p-10"
            style={{
              background: "linear-gradient(135deg, rgba(30, 58, 108, 0.5) 0%, rgba(10, 25, 50, 0.7) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Header with title and submit button */}
            <div className="mb-8 flex items-center justify-between">
              <h2
                className="text-3xl md:text-4xl font-medium text-white"
                style={{ letterSpacing: "-0.02em" }}
              >
                Join waitlist
              </h2>

              {/* Icon-only Submit Button */}
              <button
                type="submit"
                form="waitlist-form"
                className="group flex h-12 w-12 items-center justify-center rounded-xl text-white transition-all hover:scale-110 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #7DD3FC 0%, #3B82F6 50%, #8B5CF6 100%)",
                  boxShadow: "0 4px 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)",
                }}
                aria-label="Submit"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>

            <form id="waitlist-form" className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Deo"
                  className="w-full rounded-lg px-4 py-3 text-[#7BA3D8] placeholder-[#7BA3D8]/60 outline-none transition-all focus:ring-2 focus:ring-[#5198FF]/50"
                  style={{
                    background: "rgba(20, 40, 80, 0.6)",
                    border: "1px solid rgba(123, 163, 216, 0.3)",
                  }}
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Johndeo@example.com"
                  className="w-full rounded-lg px-4 py-3 text-[#7BA3D8] placeholder-[#7BA3D8]/60 outline-none transition-all focus:ring-2 focus:ring-[#5198FF]/50"
                  style={{
                    background: "rgba(20, 40, 80, 0.6)",
                    border: "1px solid rgba(123, 163, 216, 0.3)",
                  }}
                />
              </div>
            </form>
          </div>

          {/* Right side - Ghost Outline */}
          <div className="hidden lg:block absolute right-0 top-0 h-full w-[500px] xl:w-[600px] pointer-events-none">
            <Image
              src="/outline-contify.svg"
              alt=""
              fill
              className="object-contain object-right"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Tagline */}
        <p
          className="mt-12 text-lg md:text-xl text-white/80 font-light"
          style={{ letterSpacing: "-0.02em" }}
        >
          We&apos;re onboarding a small group of creators before public launch.
        </p>

        {/* Divider - constrained to avoid ghost outline area */}
        <div
          className="mt-16 h-px w-full lg:max-w-[calc(100%-450px)] xl:max-w-[calc(100%-550px)]"
          style={{
            background: "linear-gradient(90deg, rgba(147, 197, 253, 0.8) 0%, rgba(59, 130, 246, 0.5) 50%, rgba(123, 163, 216, 0.1) 100%)",
          }}
        />

        {/* Footer Bar - constrained to avoid ghost outline area */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 lg:max-w-[calc(100%-450px)] xl:max-w-[calc(100%-550px)]">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-4">
            <Image
              src="/contify.svg"
              alt="Contify"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-sm text-white/60">
              © 2025 — Copyright
            </span>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm text-white/60">Follow us on</span>
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:border-white/40 hover:text-white"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Dribbble */}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:border-white/40 hover:text-white"
                aria-label="Dribbble"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                  <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                  <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:border-white/40 hover:text-white"
                aria-label="Twitter"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:border-white/40 hover:text-white"
                aria-label="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
