"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Sky() {
  return (
    <section className="bg-[#f4f1ea] px-6 py-20 text-[#11110f] lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
          <div className="lg:pb-8">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-9 bg-[#a58a5c]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8d754e]">
                The Sky
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.05, ease }}
              className="mt-7 max-w-xl text-[clamp(3.2rem,6vw,6.6rem)] font-medium leading-[0.88] tracking-[-0.07em]"
            >
              Dinner with
              <br />a view.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.16, ease }}
              className="mt-7 max-w-md text-[14px] leading-7 text-[#706a61]"
            >
              Above the movement of the city, the atmosphere becomes part of the
              experience. Open skies, warm light and Thai flavours come together
              in one setting.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="group relative aspect-[16/10] overflow-hidden"
          >
            <motion.div
              initial={{ scale: 1.055 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease }}
              className="absolute inset-0"
            >
              <Image
                src="/images/real-thai/05.jpg"
                alt="Real Thai Sky Café rooftop dining"
                fill
                sizes="(max-width: 1024px) 100vw, 75vw"
                className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.025]"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between lg:bottom-8 lg:left-8 lg:right-8">
              <div>
                <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-white/55">
                  Rooftop Dining
                </span>

                <p className="mt-2 text-sm font-medium tracking-[-0.02em] text-white">
                  Above the city
                </p>
              </div>

              <span className="flex h-10 w-10 items-center justify-center border border-white/30 text-white">
                <ArrowUpRight size={16} strokeWidth={1.3} />
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 grid border-t border-[#11110f]/10 pt-5 sm:grid-cols-3"
        >
          <div className="flex items-center gap-3 py-3 sm:py-0">
            <span className="text-[9px] font-semibold tracking-[0.2em] text-[#8d754e]">
              01
            </span>

            <span className="text-[9px] uppercase tracking-[0.22em] text-[#706a61]">
              Open skies
            </span>
          </div>

          <div className="flex items-center gap-3 border-t border-[#11110f]/10 py-3 sm:border-l sm:border-t-0 sm:pl-6 sm:py-0">
            <span className="text-[9px] font-semibold tracking-[0.2em] text-[#8d754e]">
              02
            </span>

            <span className="text-[9px] uppercase tracking-[0.22em] text-[#706a61]">
              City atmosphere
            </span>
          </div>

          <div className="flex items-center gap-3 border-t border-[#11110f]/10 py-3 sm:border-l sm:border-t-0 sm:pl-6 sm:py-0">
            <span className="text-[9px] font-semibold tracking-[0.2em] text-[#8d754e]">
              03
            </span>

            <span className="text-[9px] uppercase tracking-[0.22em] text-[#706a61]">
              Thai hospitality
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
