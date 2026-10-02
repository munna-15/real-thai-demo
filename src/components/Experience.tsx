"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const moments = [
  {
    number: "01",
    title: "The arrival",
    text: "Step away from the ordinary and into an atmosphere designed for the evening.",
  },
  {
    number: "02",
    title: "The table",
    text: "A setting where thoughtful details, warm light and Thai hospitality meet.",
  },
  {
    number: "03",
    title: "The evening",
    text: "Good food, open skies and conversations that are meant to stay a little longer.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="overflow-hidden bg-[#11110f] px-6 py-20 text-white lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
          {/* Left Content */}
          <div className="lg:pb-8">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-9 bg-[#b79a68]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#b79a68]">
                Dining Experience
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.05, ease }}
              className="mt-7 max-w-xl text-[clamp(3.2rem,5.8vw,6.3rem)] font-medium leading-[0.86] tracking-[-0.075em]"
            >
              More than
              <br />
              <span className="text-white/45">a meal.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="mt-7 max-w-sm text-[13px] leading-7 text-white/40"
            >
              Every visit is shaped by the details around the table — from the
              first moment you arrive to the last conversation of the evening.
            </motion.p>

            {/* Small Detail */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.25, ease }}
              className="mt-9 flex items-center gap-4"
            >
              <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-white/25">
                01 — 03
              </span>

              <span className="h-px w-8 bg-white/15" />

              <span className="text-[8px] uppercase tracking-[0.25em] text-[#b79a68]/70">
                The experience
              </span>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="group relative aspect-[16/9] overflow-hidden lg:aspect-[16/9]"
          >
            <motion.div
              initial={{ scale: 1.045 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease }}
              className="absolute inset-0"
            >
              <Image
                src="/images/real-thai/rooftop.jpg"
                alt="Dining experience at Real Thai Sky Café"
                fill
                sizes="(max-width: 1024px) 100vw, 75vw"
                className="object-cover transition-transform duration-[1600ms] group-hover:scale-[1.025]"
              />
            </motion.div>

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080909]/75 via-black/10 to-black/10" />

            {/* Top Label */}
            <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-7 sm:top-7">
              <span className="h-px w-7 bg-white/40" />

              <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-white/55">
                Above the ordinary
              </span>
            </div>

            {/* Image Bottom */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">
              <div>
                <span className="text-[8px] uppercase tracking-[0.28em] text-white/45">
                  An elevated evening
                </span>

                <p className="mt-2 text-[clamp(1.2rem,2vw,1.8rem)] font-medium tracking-[-0.04em] text-white">
                  Taste. Atmosphere. Connection.
                </p>
              </div>

              <motion.span
                whileHover={{ scale: 1.05 }}
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/25 text-white/60"
              >
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.2}
                  className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </motion.span>
            </div>
          </motion.div>
        </div>

        {/* Experience Cards */}
        <div className="mt-14 grid border-y border-white/10 md:grid-cols-3">
          {moments.map((moment, index) => (
            <motion.article
              key={moment.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.75,
                delay: index * 0.08,
                ease,
              }}
              className={`group relative min-h-[220px] overflow-hidden px-6 py-7 transition-colors duration-500 hover:bg-white/[0.025] sm:px-7 ${
                index !== 0 ? "border-t md:border-l md:border-t-0" : ""
              } border-white/10`}
            >
              {/* Hover Accent */}
              <span className="absolute left-0 top-0 h-px w-0 bg-[#b79a68] transition-all duration-500 group-hover:w-full" />

              {/* Number + Arrow */}
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-medium tracking-[0.22em] text-[#b79a68]">
                  {moment.number}
                </span>

                <span className="flex h-8 w-8 items-center justify-center border border-white/10 text-white/25 transition-all duration-400 group-hover:border-[#b79a68]/40 group-hover:text-[#b79a68]">
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.2}
                    className="transition-transform duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>

              {/* Content */}
              <div className="mt-12">
                <h3 className="text-[clamp(1.6rem,2.3vw,2.25rem)] font-medium tracking-[-0.055em] text-white transition-colors duration-300 group-hover:text-[#d4bd91]">
                  {moment.title}
                </h3>

                <p className="mt-4 max-w-sm text-[12px] leading-6 text-white/35 transition-colors duration-300 group-hover:text-white/45">
                  {moment.text}
                </p>
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-7 left-6 right-6 flex items-center gap-3 sm:left-7 sm:right-7">
                <span className="h-px w-5 bg-white/10 transition-all duration-500 group-hover:w-9 group-hover:bg-[#b79a68]/50" />

                <span className="text-[7px] uppercase tracking-[0.25em] text-white/15 transition-colors duration-300 group-hover:text-white/30">
                  Real Thai · Sky Café
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
