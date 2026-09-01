"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Helvetica-style stack — system fonts fallback (free, no download needed)

const helveticaStyle = {
  fontFamily:
    '"Helvetica Neue", Helvetica, Arial, "Segoe UI", sans-serif',
};

export default function Hero() {
  return (
    <section className="relative isolate min-h-[760px] w-full overflow-hidden bg-[#0b1224]">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/d1.jpg"
            alt=""
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1224]/60 via-[#0b1224]/20 to-transparent" />
      </div>

      {/* Hero Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={helveticaStyle}
        className="relative z-10 mx-auto max-w-[1520px] px-6 pt-[170px] sm:px-10 lg:px-16 lg:pt-[190px]"
      >
        <motion.p
          variants={item}
          className="text-[13px] font-semibold uppercase tracking-[0.16em] text-white/70"
        >
          AI Led Software Development Company
        </motion.p>

      <motion.h1
  variants={item}
  style={helveticaStyle}
  className="
    mt-5
    whitespace-nowrap
    font-semibold
    tracking-[-0.02em]
    leading-[1.05]
    text-[22px]
    text-white
    sm:text-[32px]
    lg:text-[48px]
    xl:text-[58px]
  "
>
  AI-Driven Software And Product Engineering
</motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-lg text-[17px] font-normal leading-[1.7] text-slate-200/85"
        >
          Starfii designs, builds, and scales high performance web, mobile,
          and AI powered products for enterprises, so your business moves
          from idea to launch with zero friction and unstoppable momentum.
        </motion.p>

        <motion.a
          href="#contact"
          variants={item}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-4 text-[15px] font-semibold text-[#3B2FE0]"
        >
          Talk To Our Team
          <ArrowUpRight size={18} strokeWidth={2.5} />
        </motion.a>
      </motion.div>
    </section>
  );
}