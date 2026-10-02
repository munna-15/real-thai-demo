"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Reservation() {
  return (
    <section
      id="reservation"
      className="bg-[#f4f1ea] px-6 py-14 text-[#11110f] lg:px-10 lg:py-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid min-h-[68vh] overflow-hidden bg-[#101c2b] lg:grid-cols-[0.78fr_1.22fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease }}
            className="flex flex-col justify-between p-8 text-white sm:p-10 lg:p-14"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#b79a68]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d0b47e]">
                  Reservations
                </span>
              </div>

              <h2 className="mt-7 max-w-xl text-[clamp(3.2rem,5.5vw,6.4rem)] font-medium leading-[0.86] tracking-[-0.075em]">
                Your table
                <br />
                <span className="text-[#d0b47e]">is waiting.</span>
              </h2>

              <p className="mt-7 max-w-md text-[13px] leading-7 text-white/45">
                Make your evening memorable with authentic Thai flavours, warm
                hospitality and an elevated rooftop setting above the city.
              </p>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="border-t border-white/10 pt-5">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <span className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                      Dining
                    </span>

                    <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-white/65">
                      Dinner · Celebrations · Gatherings
                    </p>
                  </div>

                  <span className="text-[8px] uppercase tracking-[0.22em] text-[#b79a68]">
                    Sky Café
                  </span>
                </div>
              </div>

              <Link
                href="#contact"
                className="group mt-7 flex w-fit items-center gap-4 bg-[#f4f1ea] px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#101c2b] transition-all duration-400 hover:bg-white"
              >
                Reserve a Table
                <span className="flex h-7 w-7 items-center justify-center bg-[#101c2b] text-white">
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.3}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="group relative min-h-[430px] overflow-hidden lg:min-h-0"
          >
            <motion.div
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease }}
              className="absolute inset-0"
            >
              <Image
                src="/images/real-thai/hero.jpg"
                alt="Real Thai Sky Café rooftop dining"
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover transition-transform duration-[1600ms] group-hover:scale-[1.025]"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#07111d]/70 via-transparent to-[#07111d]/10" />

            <div className="absolute left-6 top-6 flex items-center gap-3 lg:left-8 lg:top-8">
              <span className="h-px w-7 bg-white/45" />

              <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-white/60">
                An evening above the city
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between lg:bottom-8 lg:left-8 lg:right-8">
              <div>
                <p className="text-[clamp(1.6rem,2.8vw,2.8rem)] font-medium leading-none tracking-[-0.05em] text-white">
                  Taste the
                  <br />
                  extraordinary.
                </p>
              </div>

              <span className="flex h-11 w-11 items-center justify-center border border-white/25 text-white/65">
                <ArrowUpRight size={17} strokeWidth={1.3} />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
