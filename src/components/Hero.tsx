"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#0d0d0c] text-white">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.03 }}
        animate={{ scale: 1.07 }}
        transition={{
          duration: 18,
          ease: "easeOut",
        }}
        className="absolute inset-[-3%] will-change-transform"
      >
        <Image
          src="/images/real-thai/hero-01.jpg"
          alt="Real Thai Sky Café"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(183,154,104,0.12),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-6 pb-8 lg:px-10 lg:pb-10">
        <div className="max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease,
            }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="h-px w-9 bg-[#b79a68]/70" />

            <p className="text-[9px] font-medium uppercase tracking-[0.34em] text-white/65">
              Authentic Thai Cuisine · Uttara
            </p>
          </motion.div>

          <h1 className="max-w-5xl overflow-hidden text-[clamp(3.6rem,8vw,8rem)] font-medium leading-[0.84] tracking-[-0.075em]">
            <motion.span
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease,
              }}
              className="block"
            >
              A taste of
            </motion.span>

            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.1,
                  delay: 0.45,
                  ease,
                }}
                className="block"
              >
                Thailand, above the city.
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.75,
              ease,
            }}
            className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end"
          >
            <p className="max-w-md text-[13px] leading-6 text-white/60">
              Authentic Thai flavours served in an elevated dining experience,
              above the city.
            </p>

            <Link
              href="#menu"
              className="group inline-flex w-fit items-center gap-3 border-b border-white/35 pb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-white"
            >
              Explore the Menu
              <ArrowUpRight
                size={15}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Bottom information */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.95,
            ease,
          }}
          className="mt-14 flex items-end justify-between border-t border-white/15 pt-5"
        >
          <div className="flex items-center gap-7 text-[9px] font-medium uppercase tracking-[0.22em] text-white/45">
            <span>Real Thai</span>

            <span className="h-px w-5 bg-white/20" />

            <span>Sky Café</span>
          </div>

          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.25em] text-white/40"
          >
            Scroll
            <ArrowDown size={13} strokeWidth={1.3} />
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle light sweep */}
      <motion.div
        initial={{
          x: "-120%",
          opacity: 0,
        }}
        animate={{
          x: "120%",
          opacity: [0, 0.1, 0],
        }}
        transition={{
          duration: 2.4,
          delay: 1,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-y-0 left-0 w-[32%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/15 to-transparent blur-2xl"
      />
    </section>
  );
}
