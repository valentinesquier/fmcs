"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "L'accompagnement", href: "#programme" },
  { label: "Carte pro", href: "#carte-pro" },
  { label: "Comparatif", href: "#comparatif" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8f7f4]">
      {/* Bottom line with animated light */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[rgba(0,0,0,0.06)]">
        <div
          className="absolute h-px w-[120px]"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.25), transparent)",
            animation: "navPulse 8s linear infinite",
          }}
        />
      </div>
      <style jsx>{`
        @keyframes navPulse {
          0% { left: -120px; }
          100% { left: 100%; }
        }
      `}</style>
      <div className="mx-auto max-w-[76.875rem] flex items-center justify-between px-6 sm:px-10 h-[56px] sm:h-[60px]">
        {/* Logo */}
        <a href="#" className="shrink-0">
          <Image
            src="/images/logo-fmcs.png"
            alt="FMCS"
            width={100}
            height={32}
            className="h-9 sm:h-10 w-auto"
            priority
          />
        </a>

        {/* Centered links (desktop) */}
        <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.8125rem] font-500 text-[#555] hover:text-[#131316] px-4 py-2 rounded-full transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.fitmass.school/login"
            className="hidden sm:inline-flex text-[0.8125rem] font-500 text-[#555] hover:text-[#131316] transition-colors duration-200"
          >
            Se connecter
          </a>
          {/* CTA */}
          <div className="relative shake-btn hidden sm:block">
            <a
              href="#rdv"
              className="inline-flex items-center gap-2 bg-[#131316] hover:bg-[#2a2a2a] border border-[#131316] rounded-full px-5 py-2 text-[0.8125rem] font-500 text-white transition-all duration-200"
            >
              Réserver mon appel
              <ArrowRight size={14} weight="bold" />
            </a>
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#e5b80b] text-white text-[0.625rem] font-700 flex items-center justify-center shadow-sm">
              1
            </span>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors text-[#131316]"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-[rgba(0,0,0,0.06)] bg-[#f8f7f4]"
          >
            <div className="flex flex-col gap-0.5 p-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[#555] hover:text-[#131316] py-3 px-4 rounded-lg hover:bg-black/5 transition-all duration-200 text-[0.9375rem]"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-white/5 mt-2 pt-3">
                <a
                  href="#rdv"
                  onClick={() => setOpen(false)}
                  className="red-button block"
                >
                  <span className="red-button-inner justify-center text-[0.9375rem] py-3">
                    Réserver mon appel
                    <ArrowRight size={16} weight="bold" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
