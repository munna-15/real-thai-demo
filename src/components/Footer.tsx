"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0d11] px-6 pt-16 text-white lg:px-10 lg:pt-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.4fr_0.6fr_0.7fr] lg:gap-20">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <Link href="/" className="group flex w-fit items-center gap-4">
              <div className="relative h-12 w-16 overflow-hidden rounded-sm">
                <Image
                  src="/images/real-thai/logo.jpg"
                  alt="Real Thai Sky Café"
                  fill
                  sizes="64px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div>
                <p className="text-[14px] font-semibold uppercase tracking-[0.18em]">
                  Real Thai
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-white/30">
                  Sky Café
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-md text-[13px] leading-7 text-white/35">
              Authentic Thai flavours, elevated dining and an atmosphere above
              the city.
            </p>

            <Link
              href="#reservation"
              className="group mt-7 flex w-fit items-center gap-3 border-b border-white/20 pb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:border-[#b79a68] hover:text-white"
            >
              Reserve a Table
              <ArrowUpRight
                size={15}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Explore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
          >
            <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#b79a68]">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-white/40 transition-colors duration-300 hover:text-white"
                >
                  {link.label}

                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.2}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
          >
            <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#b79a68]">
              Connect
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="group flex h-10 w-10 items-center justify-center border border-white/10 text-white/35 transition-all duration-300 hover:border-[#b79a68]/50 hover:text-[#b79a68]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:scale-105"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="group flex h-10 w-10 items-center justify-center border border-white/10 text-white/35 transition-all duration-300 hover:border-[#b79a68]/50 hover:text-[#b79a68]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:scale-105"
                >
                  <path
                    d="M14 8H16V4.5C15.65 4.45 14.45 4.35 13.1 4.35C10.3 4.35 8.4 6.05 8.4 9.1V12H5.25V15.9H8.4V21H12.25V15.9H15.3L15.8 12H12.25V9.45C12.25 8.35 12.55 8 14 8Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>

            {/* Location */}
            <div className="mt-7 border-t border-white/10 pt-5">
              <p className="text-[8px] uppercase tracking-[0.22em] text-white/25">
                Location
              </p>

              <p className="mt-2 text-[11px] leading-5 text-white/40">
                Khan Tower
                <br />
                Sonargaon Janapath Road
                <br />
                Uttara, Dhaka
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[8px] uppercase tracking-[0.24em] text-white/20">
            © 2026 Real Thai · Sky Café
          </span>

          <div className="flex items-center gap-5">
            <span className="text-[8px] uppercase tracking-[0.24em] text-white/20">
              Thai Cuisine
            </span>

            <span className="h-px w-5 bg-white/10" />

            <span className="text-[8px] uppercase tracking-[0.24em] text-white/20">
              Above the city
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
