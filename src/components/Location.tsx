"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Location() {
  return (
    <section
      id="contact"
      className="bg-[#101c2b] px-6 py-16 text-white lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Top */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-9 bg-[#b79a68]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#b79a68]">
                Find Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, delay: 0.05, ease }}
              className="mt-6 text-[clamp(3rem,5.5vw,5.8rem)] font-medium leading-[0.88] tracking-[-0.07em]"
            >
              Above the
              <br />
              city.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="border-t border-white/10 pt-6"
          >
            <div className="flex items-start justify-between gap-8">
              <div className="flex gap-4">
                <MapPin
                  size={18}
                  strokeWidth={1.2}
                  className="mt-0.5 shrink-0 text-[#b79a68]"
                />

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                    Real Thai · Sky Café
                  </p>

                  <p className="mt-3 max-w-md text-[13px] leading-6 text-white/40">
                    Khan Tower
                    <br />
                    Sonargaon Janapath Road
                    <br />
                    Uttara, Dhaka
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Real+Thai+Sky+Cafe+Uttara+Dhaka"
                target="_blank"
                rel="noreferrer"
                className="group flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-white/40 transition-all duration-300 hover:border-[#b79a68] hover:text-[#b79a68]"
                aria-label="Open location in Google Maps"
              >
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.3}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* REAL MAP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="group relative mt-12 h-[280px] overflow-hidden border border-white/10 sm:h-[340px] lg:h-[390px]"
        >
          <iframe
            title="Real Thai Sky Café location"
            src="https://www.google.com/maps?q=Real+Thai+Sky+Cafe+Uttara+Dhaka&output=embed"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Premium map overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101c2b]/35 via-transparent to-transparent" />

          {/* Map label */}
          <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
            <div className="flex items-center gap-3 border border-white/15 bg-[#101c2b]/90 px-4 py-3 backdrop-blur-md">
              <MapPin size={14} strokeWidth={1.3} className="text-[#b79a68]" />

              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white">
                  Real Thai · Sky Café
                </p>

                <p className="mt-1 text-[7px] uppercase tracking-[0.18em] text-white/40">
                  Uttara, Dhaka
                </p>
              </div>
            </div>
          </div>

          {/* Open Maps */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Real+Thai+Sky+Cafe+Uttara+Dhaka"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Real Thai Sky Café in Google Maps"
            className="group absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center border border-white/20 bg-[#101c2b]/85 text-white/50 backdrop-blur-md transition-all duration-300 hover:border-[#b79a68] hover:text-[#b79a68] sm:bottom-7 sm:right-7"
          >
            <ArrowUpRight
              size={16}
              strokeWidth={1.3}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="flex flex-col gap-4 border-b border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-6">
            <span className="text-[8px] uppercase tracking-[0.24em] text-white/40">
              Thai Cuisine
            </span>

            <span className="h-px w-6 bg-white/20" />

            <span className="text-[8px] uppercase tracking-[0.24em] text-white/40">
              Rooftop Dining
            </span>
          </div>

          <span className="text-[8px] uppercase tracking-[0.24em] text-white/30">
            Above the ordinary
          </span>
        </motion.div>
      </div>
    </section>
  );
}
