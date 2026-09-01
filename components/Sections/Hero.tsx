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
        className="relative z-10 mx-auto max-w-[1520px] px-6 pt-[170px] sm:px-10 lg:px-16 lg:pt-[190px]"
      >
        <motion.p
          variants={item}
          className="font-body text-[13px] font-semibold uppercase tracking-[0.16em] text-white/70"
        >
          AI Led Software Development Company
        </motion.p>
<motion.h1
  variants={item}
  className="font-heading mt-5 max-w-none whitespace-nowrap text-[22px] font-bold tracking-tight leading-[1.1] text-white sm:text-[32px] lg:text-[42px] xl:text-[50px]"
>
  AI-Driven Software And Product Engineering
</motion.h1>

    <motion.p
  variants={item}
  className="font-body mt-6 max-w-lg text-[17px] font-normal leading-[1.7] text-slate-200/85"
>
  Starfii designs, builds, and scales high performance web, mobile,
  and AI powered products for enterprises, so your business moves
  from idea to launch with zero friction and unstoppable momentum.
</motion.p>

        <motion.a
          variants={item}
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="font-body mt-8 flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-4 text-[15px] font-semibold text-[#3B2FE0]"
        >
          Talk To Our Team
          <ArrowUpRight size={18} strokeWidth={2.5} />
        </motion.a>
      </motion.div>
    </section>

  );
  
}

