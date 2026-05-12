"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#terminal" },
  { label: "Tech Stack", href: "#technologies" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ className }: { className?: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = (label: string) => {
    setActiveLink(label);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop + Mobile Navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 transition-all duration-500",
          scrolled
            ? "py-3 bg-black/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "py-5 bg-transparent",
          className,
        )}
      >
        {/* Logo */}
        <Link href="#home" onClick={() => handleLinkClick("Home")}>
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-[2px] rounded-full bg-black flex items-center justify-center">
                <span className="text-[10px] font-bold text-white tracking-tighter">
                  AS
                </span>
              </div>
            </div>
            <span className="text-white font-semibold text-sm tracking-wide hidden sm:block">
              Arham<span className="text-violet-400">.</span>dev
            </span>
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-md px-3 py-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => handleLinkClick(link.label)}
              className="relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 group"
            >
              {activeLink === link.label && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span
                className={cn(
                  "relative z-10 transition-colors duration-200",
                  activeLink === link.label
                    ? "text-white"
                    : "text-neutral-400 group-hover:text-white",
                )}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold tracking-wider text-black bg-white hover:bg-violet-100 transition-colors duration-200 px-4 py-2 rounded-full"
          >
            Resume
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 10L10 2M10 2H4M10 2V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm gap-[5px] hover:border-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-[1.5px] bg-white rounded-full origin-center"
            />
            <motion.span
              animate={
                menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.2 }}
              className="block w-5 h-[1.5px] bg-white rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-[1.5px] bg-white rounded-full origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-black/95 backdrop-blur-2xl md:hidden"
          >
            {/* Decorative ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-violet-600/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-indigo-600/10 blur-[80px] pointer-events-none" />

            <nav className="flex flex-col items-center justify-center flex-1 gap-2 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-full max-w-xs"
                >
                  <Link
                    href={link.href}
                    onClick={() => handleLinkClick(link.label)}
                    className={cn(
                      "flex items-center justify-between w-full px-6 py-4 rounded-2xl border text-xl font-semibold tracking-tight transition-all duration-200 group",
                      activeLink === link.label
                        ? "bg-white/10 border-white/20 text-white"
                        : "border-white/5 text-neutral-400 hover:text-white hover:border-white/10 hover:bg-white/[0.03]",
                    )}
                  >
                    <span>{link.label}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                    >
                      <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.4 }}
                className="w-full max-w-xs mt-4"
              >
                <a
                  href="/Resume.pdf"
                  download
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-white text-black font-semibold text-lg tracking-tight hover:bg-violet-100 transition-colors duration-200"
                >
                  Download Resume
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 2v8M8 10l-3-3M8 10l3-3M2 13h12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </motion.div>
            </nav>

            {/* Bottom social hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-6 pb-10 text-xs text-neutral-600"
            >
              <span>GitHub</span>
              <span>·</span>
              <span>LinkedIn</span>
              <span>·</span>
              <span>Twitter</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
