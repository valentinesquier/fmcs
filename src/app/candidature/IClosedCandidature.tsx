"use client";

import { useState, useEffect } from "react";

export default function IClosedCandidature() {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeMounted, setIframeMounted] = useState(false);

  useEffect(() => {
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    if (w.requestIdleCallback) {
      w.requestIdleCallback(() => setIframeMounted(true), { timeout: 3000 });
    } else {
      const t = setTimeout(() => setIframeMounted(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href="#rdv"]');
      if (link) {
        e.preventDefault();
        setIframeMounted(true);
        setIsOpen(true);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "auto" : "none",
        transition: "opacity 0.2s ease",
      }}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-[#131316]/80 backdrop-blur-md"
        onClick={() => setIsOpen(false)}
      />

      <button
        onClick={() => setIsOpen(false)}
        className="relative z-20 mb-3 flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Retour
      </button>

      <p className="relative z-10 mb-2 text-sm text-white/50">
        Le calendrier peut prendre quelques secondes à s&apos;afficher
      </p>

      {iframeMounted && (
        <iframe
          src="https://app.iclosed.io/e/fit-mass-formation/fmcs-candidature-y"
          title="FMCS - Candidature (Y)"
          className="relative z-10 w-full"
          style={{ height: "90vh", border: "none" }}
          allow="camera; microphone"
          loading="eager"
        />
      )}
    </div>
  );
}
