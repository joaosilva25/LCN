"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChessKnight } from "lucide-react";

const NAV_LINKS = [
  { label: "Transformação", href: "#transformacao" },
  { label: "O que está incluso", href: "#incluso" },
  { label: "Diferencial", href: "#diferencial" },
  { label: "Quem sou?", href: "#fundador" },
  { label: "FAQ", href: "#faq" },
];

export const LcnHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 ${
          scrolled
            ? "bg-[#090506]/80 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl"
            : "bg-transparent backdrop-blur-xl sm:backdrop-blur-none"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-5 sm:px-8 h-16 sm:h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group relative right-11 md:right-20">
            <img
              src="/LCNLogo.png"
              alt="Comunidade LCN"
              className="h-20 w-auto"
            />
          </a>

          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-white/65 hover:text-[#F7EEEC] transition-colors duration-300 flex items-center gap-1.5"
              >
                {link.label}
                <ChessKnight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" strokeWidth={2} />
              </a>
            ))}
          </nav>

          {/* CTA button — right */}
          <a
            href="#oferta"
            className="hidden lg:inline-flex px-5 py-2 rounded-lg text-xs font-semibold tracking-[0.15em] uppercase text-[#F7EEEC] lcn-gradient-btn hover:shadow-[0_0_20px_rgba(185,31,60,0.3)] transition-all duration-300"
          >
            Entrar
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-[#F7EEEC] lcn-gradient-btn lcn-pulse transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#090506]/95 backdrop-blur-lg lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="px-6 py-3.5 text-sm font-semibold tracking-[0.2em] uppercase text-[#F7EEEC]/50 hover:text-[#F7EEEC] transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#oferta"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: NAV_LINKS.length * 0.06 }}
                className="mt-4 px-8 py-3.5 rounded-xl text-xs font-semibold tracking-[0.15em] uppercase text-[#F7EEEC] lcn-gradient-btn lcn-pulse transition-all duration-300"
              >
                Entrar na Comunidade
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
