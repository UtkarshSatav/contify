"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function BotCard({
  name,
  icon,
  delay = 0,
  flipHorizontal = false,
}: {
  name: string;
  icon: string;
  delay?: number;
  flipHorizontal?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: delay,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <motion.div
        className="flex flex-col items-center"
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          // Add a random or slight offset to float so they aren't perfectly synced if needed,
          // but for now, just let them float.
        }}
      >
        <div className={`relative h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 ${flipHorizontal ? "-scale-x-100" : ""}`}>
          <Image
            src={icon}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
        <div
          className="relative z-10 flex items-center justify-center rounded-lg px-5 py-2 md:px-6 md:py-2.5 -mt-6"
          style={{
            background: "linear-gradient(90deg, #A5CEFE, #C9DDFA)",
            boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.15)",
          }}
        >
          <span className="text-xl font-semibold text-[#2A518B] whitespace-nowrap">
            {name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex h-full flex-col items-center px-4 pt-8 md:pt-12 overflow-hidden">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-2 px-8 py-1.5"
        style={{
          background: "linear-gradient(90deg, #A5CEFE 0%, #C8DDFA 100%)",
          borderRadius: "4px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#CCFDBB] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#CCFDBB]" />
        </span>
        <span
          className="text-[10px] font-medium font-[family-name:var(--font-inter)]"
          style={{ color: "#183F7B" }}
        >
          Operating System V 1.0
        </span>
      </motion.div>

      {/* Headline */}
      <h1 className="mb-3 text-center leading-tight">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="block text-[42px] font-semibold md:text-[60px] lg:text-[72px]"
          style={{
            letterSpacing: "-0.08em",
            color: "var(--color-hero-headline)",
          }}
        >
          Grow 10× Faster With
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="block bg-clip-text text-[42px] font-semibold text-transparent md:text-[60px] lg:text-[72px] -mt-[15px]"
          style={{
            letterSpacing: "-0.08em",
            backgroundImage: "linear-gradient(90deg, #ADDAFF, #5198FF)",
          }}
        >
          AI Talking-Head Content
        </motion.span>
      </h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center text-[12px] font-light font-sans max-w-[600px] mb-8 leading-relaxed text-black"
      >
        An end-to-end AI system that helps creators and founders show up on social media with
        <br />
        talking-head videos without recording, editing, or managing content manually.
      </motion.p>

      {/* Bot Layout with Central Ghost and Connections */}
      <div className="relative w-full max-w-[1100px] flex-1 overflow-visible">

        {/* Circuit SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute left-1/2 -translate-x-1/2 top-[20%] -translate-y-1/2 w-full pointer-events-none z-0"
        >
          <Image
            src="/hero/circuit.svg"
            alt=""
            width={854}
            height={273}
            className="w-[80%] h-auto mx-auto"
            priority
          />
        </motion.div>


        {/* Central Contify AI Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute left-1/2 bottom-0 -translate-x-1/2 z-10"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-auto"
            style={{
              width: 'clamp(320px, 52vw, 750px)',
              maxWidth: 'none',
            }}
          >
            <source src="/hero/contify-ai.webm" type="video/webm" />
          </video>
        </motion.div>

        {/* Left Side Bots - positioned at circuit endpoints */}
        {/* Top Left - Script bot */}
        <div
          className="absolute left-[12%] top-[-38%]"
          style={{ transform: 'translateX(-100%)' }}
        >
          <BotCard
            name="Ai Script bot"
            icon="/hero/ai-script-bot.svg"
            delay={0.5}
            flipHorizontal
          />
        </div>

        {/* Mid Left - Avatar bot */}
        <div
          className="absolute left-[23%] top-[4%]"
          style={{ transform: 'translateX(-100%)' }}
        >
          <BotCard
            name="Ai Avatar bot"
            icon="/hero/ai-avatar-bot.svg"
            delay={0.6}
            flipHorizontal
          />
        </div>

        {/* Bottom Left - Publish bot */}
        <div
          className="absolute left-[13%] top-[38%]"
          style={{ transform: 'translateX(-100%)' }}
        >
          <BotCard
            name="Ai Publish bot"
            icon="/hero/ai-publish-bot.svg"
            delay={0.7}
            flipHorizontal
          />
        </div>

        {/* Right Side Bots - positioned at circuit endpoints */}
        {/* Top Right - Idea bot */}
        <div className="absolute right-[-1%] top-[-38%]">
          <BotCard
            name="Ai Idea bot"
            icon="/hero/ai-idea-bot.svg"
            delay={0.8}
          />
        </div>

        {/* Mid Right - Edit bot */}
        <div className="absolute right-[10%] top-[4%]">
          <BotCard
            name="Ai Edit bot"
            icon="/hero/ai-edit-bot.svg"
            delay={0.9}
          />
        </div>

        {/* Bottom Right - Growth bot */}
        <div className="absolute right-[-4%] top-[38%]">
          <BotCard
            name="Ai Growth bot"
            icon="/hero/ai-growth-bot.svg"
            delay={1.0}
          />
        </div>
      </div>
    </section>
  );
}

