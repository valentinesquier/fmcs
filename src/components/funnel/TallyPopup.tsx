"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

const TALLY_SRC = "https://tally.so/widgets/embed.js";

export default function TallyPopup({
  trigger = "#capture",
  tallySrc,
  title,
}: {
  trigger?: string;
  tallySrc: string;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const el = target.closest(`a[href="${trigger}"]`);
      if (el) {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [trigger]);

  useEffect(() => {
    const load = () => {
      if (typeof window !== "undefined" && window.Tally) {
        window.Tally.loadEmbeds();
      }
    };
    const existing = document.querySelector(`script[src="${TALLY_SRC}"]`);
    if (existing) {
      load();
      return;
    }
    const s = document.createElement("script");
    s.src = TALLY_SRC;
    s.async = true;
    s.onload = load;
    s.onerror = load;
    document.body.appendChild(s);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-200 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-[#0a0a0c]"
        onClick={() => setIsOpen(false)}
      />

      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="absolute top-5 left-5 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Fermer"
      >
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
          <path
            d="M1 1L13 13M13 1L1 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="relative z-10 w-full max-w-[560px] mx-auto px-4 md:px-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white/20">
              <Image
                src="/images/nassim-sahili-ytb.webp"
                alt="Nassim Sahili"
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <span
              className="absolute -bottom-0.5 -right-0.5 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#0066FF] ring-2 ring-[#0a0a0c]"
              aria-label="Compte certifié"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12l5 5L20 7" />
              </svg>
            </span>
          </div>
        </div>

        <h2 className="!text-white text-center text-[1.375rem] md:text-[1.625rem] font-700 leading-[1.25] tracking-[-0.01em] mb-2">
          Remplis ce formulaire{" "}
          <span className="italic text-[#e5b80b]">(7&nbsp;sec)</span>
        </h2>
        <p className="text-white/70 text-center text-[0.9375rem] md:text-[1rem] mb-6">
          pour accéder à la masterclass
        </p>
        <iframe
          data-tally-src={tallySrc}
          loading="eager"
          width="100%"
          height={306}
          title={title}
          className="block w-full bg-transparent"
        />
      </div>
    </div>
  );
}
