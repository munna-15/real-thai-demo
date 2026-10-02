"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#0d0d0c]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between px-6 transition-[height] duration-500 lg:px-10 ${
          scrolled ? "h-[76px]" : "h-[92px]"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-[48px] w-[62px] overflow-hidden rounded-sm lg:h-[52px] lg:w-[68px]">
            <Image
              src="/images/real-thai/logo.jpg"
              alt="Real Thai Sky Café"
              fill
              priority
              sizes="68px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-[14px] font-semibold uppercase tracking-[0.18em] text-white">
              Real Thai
            </span>

            <span className="mt-1 text-[8px] uppercase tracking-[0.3em] text-white/45">
              Sky Café
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center md:flex">
          <div className="flex items-center gap-9">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 hover:text-white"
              >
                {link.label}

                <span className="absolute bottom-1 left-0 h-px w-0 bg-[#b79a68] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <Link
            href="#reservation"
            className="group ml-10 flex items-center gap-3 border border-white/25 px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-all duration-400 hover:border-white hover:bg-white hover:text-[#0d0d0c]"
          >
            Reserve a Table
            <ArrowUpRight
              size={14}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center border border-white/25 text-white md:hidden"
        >
          {open ? (
            <X size={18} strokeWidth={1.4} />
          ) : (
            <Menu size={18} strokeWidth={1.4} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-white/10 bg-[#0d0d0c]/95 backdrop-blur-xl md:hidden"
          >
            <nav className="px-6 pb-7 pt-2">
              {links.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-white/10 py-5 text-[12px] font-medium uppercase tracking-[0.16em] text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}

                    <ArrowUpRight size={16} strokeWidth={1.4} />
                  </Link>
                </motion.div>
              ))}

              <Link
                href="#reservation"
                onClick={() => setOpen(false)}
                className="mt-6 flex items-center justify-between border border-white/20 px-5 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-white"
              >
                Reserve a Table
                <ArrowUpRight size={17} strokeWidth={1.4} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
