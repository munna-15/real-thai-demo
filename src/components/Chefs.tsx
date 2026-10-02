"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const chefs = [
  {
    number: "01",
    name: "Chef's Name",
    role: "Executive Chef",
    image: "/images/real-thai/chef-01.jpg",
  },
  {
    number: "02",
    name: "Chef's Name",
    role: "Thai Cuisine",
    image: "/images/real-thai/chef-02.jpg",
  },
];

export default function Chefs() {
  return (
    <section className="min-h-[70vh] bg-[#f4f1ea] px-6 py-14 text-[#11110f] lg:px-10 lg:py-16">
      <div className="mx-auto flex min-h-[calc(70vh-7rem)] max-w-[1400px] flex-col justify-center">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-9 bg-[#a58a5c]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8d754e]">
                The Kitchen
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, delay: 0.05, ease }}
              className="mt-6 max-w-xl text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.07em]"
            >
              Crafted by
              <br />
              people who care.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: 0.14, ease }}
              className="mt-5 max-w-sm text-[13px] leading-6 text-[#706a61]"
            >
              Behind every plate is a team dedicated to bringing the depth,
              character and warmth of Thai cuisine to the table.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:gap-5">
            {chefs.map((chef, index) => (
              <motion.article
                key={chef.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease,
                }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#ddd8cf]">
                  <motion.div
                    initial={{ scale: 1.015 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, ease }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={chef.image}
                      alt={chef.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 32vw"
                      className="object-cover object-center transition-transform duration-[1200ms] group-hover:scale-[1.015]"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 text-[8px] font-medium tracking-[0.2em] text-white/60 lg:left-5 lg:top-5">
                    {chef.number}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between lg:bottom-5 lg:left-5 lg:right-5">
                    <div>
                      <p className="text-sm font-medium tracking-[-0.02em] text-white sm:text-base">
                        {chef.name}
                      </p>

                      <p className="mt-1 text-[7px] uppercase tracking-[0.22em] text-white/55 sm:text-[8px]">
                        {chef.role}
                      </p>
                    </div>

                    <span className="flex h-8 w-8 items-center justify-center border border-white/25 text-white/60 transition-all duration-300 group-hover:border-white/60 group-hover:text-white">
                      <ArrowUpRight size={14} strokeWidth={1.3} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex items-center gap-3 border-t border-[#11110f]/10 pt-4"
        >
          <span className="h-px w-8 bg-[#a58a5c]" />

          <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#8d754e]">
            From our kitchen to your table
          </span>
        </motion.div>
      </div>
    </section>
  );
}

