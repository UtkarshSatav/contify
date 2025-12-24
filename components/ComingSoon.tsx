"use client";

import Image from "next/image";

export default function ComingSoon() {
  return (
    <section className="relative flex flex-col items-center px-4 py-16 md:py-24">
      <div className="w-full max-w-[1100px]">
        <Image
          src="/coming-soon.svg"
          alt="Coming Soon"
          width={1081}
          height={131}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
