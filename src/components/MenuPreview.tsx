"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const dishes = [
  {
    name: "Tom Yum",
    description:
      "Aromatic Thai soup with herbs, spices and a delicate balance of heat and citrus.",
    price: "—",
    image: "/images/real-thai/food-01.jpg",
  },
  {
    name: "Pad Thai",
    description:
      "Classic Thai rice noodles finished with fresh herbs and traditional flavours.",
    price: "—",
    image: "/images/real-thai/food-02.jpg",
  },
  {
    name: "Thai Green Curry",
    description:
      "Rich coconut curry infused with fragrant Thai herbs and spices.",
    price: "—",
    image: "/images/real-thai/food-03.jpg",
  },
  {
    name: "Chef's Special",
    description:
      "A signature creation prepared with the chef's selection of ingredients.",
    price: "—",
    image: "/images/real-thai/food-02.jpg",
  },
  {
    name: "Tom Kha",
    description:
      "Silky coconut soup with herbs, galangal and a delicate citrus finish.",
    price: "—",
    image: "/images/real-thai/food-01.jpg",
  },
  {
    name: "Massaman Curry",
    description:
      "Slow-cooked curry with coconut, aromatic spices and rich Thai flavour.",
    price: "—",
    image: "/images/real-thai/food-03.jpg",
  },
  {
    name: "Thai Basil",
    description:
      "Fragrant Thai basil, chilli and savoury seasoning brought together.",
    price: "—",
    image: "/images/real-thai/food-02.jpg",
  },
  {
    name: "Crispy Chicken",
    description:
      "Golden crispy chicken finished with a refined Thai-inspired glaze.",
    price: "—",
    image: "/images/real-thai/food-01.jpg",
  },
];

export default function MenuPreview() {
  return (
    <section
      id="menu-preview"
      className="bg-[#101c2b] px-6 py-20 text-[#f4f1ea] lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-7 border-b border-white/10 pb-8 md:flex-row md:items-end">
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
                Our Menu
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, delay: 0.05, ease }}
              className="mt-6 text-[clamp(3rem,5vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.07em]"
            >
              Thai favourites.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.12, ease }}
            className="max-w-sm text-[13px] leading-6 text-white/45 md:pb-1"
          >
            A selection from our kitchen, prepared with authentic flavours and
            carefully chosen ingredients.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="mt-7 flex items-center gap-7 overflow-x-auto border-b border-white/10 pb-4">
          <button
            type="button"
            className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#b79a68]"
          >
            All
          </button>

          <button
            type="button"
            className="shrink-0 text-[9px] font-medium uppercase tracking-[0.22em] text-white/40 transition-colors hover:text-white"
          >
            Starters
          </button>

          <button
            type="button"
            className="shrink-0 text-[9px] font-medium uppercase tracking-[0.22em] text-white/40 transition-colors hover:text-white"
          >
            Mains
          </button>

          <button
            type="button"
            className="shrink-0 text-[9px] font-medium uppercase tracking-[0.22em] text-white/40 transition-colors hover:text-white"
          >
            Thai Specials
          </button>

          <button
            type="button"
            className="shrink-0 text-[9px] font-medium uppercase tracking-[0.22em] text-white/40 transition-colors hover:text-white"
          >
            Drinks
          </button>
        </div>

        {/* Menu Items */}
        {/* Menu Items */}
        <div className="mt-2 grid lg:grid-cols-2 lg:divide-x lg:divide-white/10">
          <div className="lg:pr-8">
            {dishes.slice(0, 4).map((dish, index) => (
              <motion.article
                key={dish.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease,
                }}
                className="group grid grid-cols-[72px_1fr_auto] items-center gap-5 border-b border-white/10 py-5 sm:grid-cols-[88px_1fr_auto] sm:gap-6 lg:grid-cols-[100px_1fr_70px_auto] lg:py-6"
              >
                <div className="relative aspect-square overflow-hidden bg-[#172536]">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="100px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="text-[8px] tracking-[0.18em] text-[#b79a68]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="truncate text-[17px] font-medium tracking-[-0.025em] text-white sm:text-[19px]">
                      {dish.name}
                    </h3>
                  </div>

                  <p className="mt-2 max-w-xl text-[11px] leading-5 text-white/38 sm:text-[12px]">
                    {dish.description}
                  </p>
                </div>

                <span className="hidden text-right text-[12px] font-medium tracking-[0.05em] text-[#b79a68] lg:block">
                  {dish.price}
                </span>

                <span className="flex h-8 w-8 items-center justify-center border border-white/10 text-white/30 transition-all duration-300 group-hover:border-[#b79a68]/50 group-hover:text-[#b79a68]">
                  <ArrowUpRight size={14} strokeWidth={1.3} />
                </span>
              </motion.article>
            ))}
          </div>

          <div className="lg:pl-8">
            {dishes.slice(4, 8).map((dish, index) => (
              <motion.article
                key={dish.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06 + 0.1,
                  ease,
                }}
                className="group grid grid-cols-[72px_1fr_auto] items-center gap-5 border-b border-white/10 py-5 sm:grid-cols-[88px_1fr_auto] sm:gap-6 lg:grid-cols-[100px_1fr_70px_auto] lg:py-6"
              >
                <div className="relative aspect-square overflow-hidden bg-[#172536]">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="100px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="text-[8px] tracking-[0.18em] text-[#b79a68]">
                      {String(index + 5).padStart(2, "0")}
                    </span>

                    <h3 className="truncate text-[17px] font-medium tracking-[-0.025em] text-white sm:text-[19px]">
                      {dish.name}
                    </h3>
                  </div>

                  <p className="mt-2 max-w-xl text-[11px] leading-5 text-white/38 sm:text-[12px]">
                    {dish.description}
                  </p>
                </div>

                <span className="hidden text-right text-[12px] font-medium tracking-[0.05em] text-[#b79a68] lg:block">
                  {dish.price}
                </span>

                <span className="flex h-8 w-8 items-center justify-center border border-white/10 text-white/30 transition-all duration-300 group-hover:border-[#b79a68]/50 group-hover:text-[#b79a68]">
                  <ArrowUpRight size={14} strokeWidth={1.3} />
                </span>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="mt-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center"
        >
          <span className="text-[8px] uppercase tracking-[0.25em] text-white/35">
            Selection from our menu
          </span>

          <Link
            href="#reservation"
            className="group flex items-center gap-3 border-b border-white/20 pb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/65 transition-colors duration-300 hover:border-[#b79a68] hover:text-white"
          >
            View Full Menu
            <ArrowUpRight
              size={15}
              strokeWidth={1.3}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
