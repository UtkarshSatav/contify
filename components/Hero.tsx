"use client";

import Image from "next/image";

function BotCard({
  name,
  icon,
  animationClass = "",
}: {
  name: string;
  icon: string;
  animationClass?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className={`relative h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 ${animationClass} -mb-6`}>
        <Image
          src={icon}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
      <div
        className="relative z-10 flex items-center justify-center rounded-xl bg-[#5E9AF4] px-5 py-2 shadow-lg backdrop-blur-sm transition-transform hover:scale-105 -mt-7"
        style={{
          boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <span className="text-sm font-bold text-white whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-60px)] flex-col items-center px-4 pt-24">
      {/* Badge */}
      <div
        className="mb-8 flex items-center gap-2 rounded-[7px] px-12 py-1 shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        style={{
          background: "linear-gradient(90deg, #82B2F4, #2B72E0)",
        }}
      >
        <span className="h-2 w-2 rounded-full bg-[#2B72E0]" />
        <span className="text-sm font-medium text-white">
          End-to-End AI Content System
        </span>
      </div>

      {/* Headline */}
      <h1 className="mb-4 text-center leading-tight">
        <span
          className="block text-[44px] font-normal text-white md:text-[56px] lg:text-[70px]"
          style={{ letterSpacing: "-0.06em" }}
        >
          Grow 10× Faster With
        </span>
        <span
          className="-mt-2 block bg-clip-text text-[44px] font-medium text-transparent md:-mt-3 md:text-[56px] lg:-mt-4 lg:text-[70px]"
          style={{
            letterSpacing: "-0.06em",
            backgroundImage: "linear-gradient(90deg, #CBE7FE, #5198FF)",
          }}
        >
          AI Talking-Head Content
        </span>
      </h1>

      {/* Description */}
      <p
        className="text-center text-sm font-light text-white"
        style={{
          letterSpacing: "-0.02em",
          lineHeight: "140%",
        }}
      >
        An end-to-end AI system that helps creators and founders show up on social media with
        <br />
        talking-head videos without recording, editing, or managing content manually.
      </p>

      {/* Bot cards + Central ghost - pulled up with negative margin */}
      <div className="relative -mt-8 flex flex-1 w-full max-w-[1282px] items-start justify-center md:-mt-12 lg:-mt-16">
        {/* Central Ghost */}
        <div className="relative z-10 mt-16 md:mt-20 lg:mt-24">
          <Image
            src="/hero/contify-ai.svg"
            alt="Contify AI"
            width={420}
            height={473}
            className="h-auto w-[280px] md:w-[350px] lg:w-[420px]"
            priority
          />
        </div>

        {/* All 6 Bot Cards positioned around */}

        {/* Top Left - Script bot */}
        <div className="absolute left-[4.87%] top-[2%] md:left-[4.87%] lg:left-[4.87%]">
          <BotCard
            name="AI Script Bot"
            icon="/hero/ai-script-bot.svg"
            animationClass="animate-float"
          />
        </div>

        {/* Top Right - Idea bot */}
        <div className="absolute right-[4.64%] top-[2%] md:right-[4.64%] lg:right-[4.64%]">
          <BotCard
            name="AI Idea Bot"
            icon="/hero/ai-idea-bot.svg"
            animationClass="animate-float-delay-1"
          />
        </div>

        {/* Mid Left - Avatar bot */}
        <div className="absolute left-[18.45%] top-[28%] md:left-[18.45%] lg:left-[18.45%]">
          <BotCard
            name="AI Avatar Bot"
            icon="/hero/ai-avatar-bot.svg"
            animationClass="animate-float-delay-2"
          />
        </div>

        {/* Mid Right - Edit bot */}
        <div className="absolute right-[18.21%] top-[28%] md:right-[18.21%] lg:right-[18.21%]">
          <BotCard
            name="AI Edit Bot"
            icon="/hero/ai-edit-bot.svg"
            animationClass="animate-float-delay-3"
          />
        </div>

        {/* Bottom Left - Publish bot */}
        <div className="absolute left-[4.87%] top-[54%] md:left-[4.87%] lg:left-[4.87%]">
          <BotCard
            name="AI Publish Bot"
            icon="/hero/ai-publish-bot.svg"
            animationClass="animate-float-delay-4"
          />
        </div>

        {/* Bottom Right - Growth bot */}
        <div className="absolute right-[4.64%] top-[54%] md:right-[4.64%] lg:right-[4.64%]">
          <BotCard
            name="AI Growth Bot"
            icon="/hero/ai-growth-bot.svg"
            animationClass="animate-float-delay-5"
          />
        </div>
      </div>
    </section>
  );
}
