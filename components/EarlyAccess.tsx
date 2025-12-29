"use client";

export default function EarlyAccess() {
  return (
    <section className="relative flex flex-col items-center px-4 py-24 md:py-32">
      {/* Heading with blue dot */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: "#5198FF" }}
        />
        <h2 className="text-[47px] font-normal text-black" style={{ letterSpacing: "-0.02em" }}>
          Get early access
        </h2>
      </div>

      {/* Subheading */}
      <p className="text-[22px] mb-10 text-black font-light">
        Get early access to the end-to-end content system
      </p>

      {/* Email Form - Pill shaped */}
      <form className="w-full max-w-[900px] mb-16">
        <div
          className="relative flex items-stretch rounded-full"
          style={{
            background: "linear-gradient(to right, #DCE5ED 0%, #82B2F4 100%)",
            border: "1px solid #FFFFFF",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* Email Input */}
          <input
            type="email"
            placeholder="your email address"
            className="flex-1 bg-transparent px-10 py-6 text-lg outline-none placeholder-[#435976]"
            style={{ color: "#183F7B" }}
          />

          {/* Submit Button - Gradient border wrapper */}
          <div
            className="rounded-full p-[2px] -m-[1px]"
            style={{
              background: "linear-gradient(90deg, #2B72E0, #DBE5ED)",
            }}
          >
            <button
              type="submit"
              className="flex items-center justify-center px-24 h-full text-lg font-medium transition-all hover:opacity-90 rounded-full text-black"
              style={{
                backgroundColor: "#DBE5ED",
              }}
            >
              Join waitlist
            </button>
          </div>
        </div>
      </form>

      {/* Tagline */}
      <p className="text-center text-[22px] font-normal max-w-[1000px] leading-relaxed text-black">
        Your 24/7 AI personal-brand content team that plans, creates, publishes, and optimizes
        <br className="hidden md:block" />
        {" "}your talking-head content automatically
      </p>
    </section>
  );
}
