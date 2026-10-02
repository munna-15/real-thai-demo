"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Intro() {
  return (
    <section
      id="about"
      className="bg-[#f4f1ea] px-6 py-20 text-[#11110f] lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-9 bg-[#a58a5c]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8d754e]">
            The Real Thai Experience
          </span>
        </motion.div>

        {/* Main statement */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease }}
          className="mt-7 max-w-[1050px] text-[clamp(3.1rem,6.5vw,7rem)] font-medium leading-[0.87] tracking-[-0.07em]"
        >
          Authentic Thai.
          <br />
          Elevated above the ordinary.
        </motion.h2>

        {/* Content */}
        <div className="mt-14 grid gap-10 lg:mt-18 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
            className="group relative aspect-[16/9] overflow-hidden"
          >
            <motion.div
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease }}
              className="absolute inset-0"
            >
              <Image
                src="/images/real-thai/food-05.jpg"
                alt="Real Thai cuisine"
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.025]"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <span className="absolute bottom-5 left-5 text-[8px] font-medium uppercase tracking-[0.26em] text-white/65">
              Crafted with tradition
            </span>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="lg:pb-1"
          >
            <p className="max-w-lg text-[clamp(1.3rem,2vw,1.65rem)] font-medium leading-[1.3] tracking-[-0.035em] text-[#191815]">
              Bold flavours.
              <br />A higher way to dine.
            </p>

            <div className="mt-6 space-y-4">
              <p className="max-w-md text-[14px] leading-7 text-[#706a61]">
                From aromatic herbs and vibrant spices to carefully prepared
                Thai favourites, every plate is made to bring the character of
                Thailand to your table.
              </p>

              <p className="max-w-md text-[14px] leading-7 text-[#706a61]">
                Come for the flavours. Stay for the atmosphere.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-8 bg-[#a58a5c]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#8d754e]">
                Taste · Atmosphere · Experience
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
