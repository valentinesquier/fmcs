"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ExitPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [dismissed]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
    setDismissed(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#131316]/70 backdrop-blur-md"
        onClick={close}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg animate-[fadeInScale_0.3s_ease-out] overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white shadow-2xl">
        {/* Close button */}
        <button
          onClick={close}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#f0f0f0] text-[#555] transition-colors hover:bg-[#e5e5e5] hover:text-[#131316]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 sm:p-10 text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/favicon.png"
              alt="FMCS"
              width={60}
              height={60}
              className="w-[60px] h-[60px] rounded-2xl"
            />
          </div>

          <h3 className="mb-3 text-2xl font-700 tracking-tight text-[#131316] sm:text-3xl">
            Attendez, vous partez déjà ?
          </h3>
          <p className="mx-auto mb-8 max-w-sm text-base leading-relaxed text-[#555]">
            Vous êtes à un appel de découvrir comment{" "}
            <span className="font-600 text-[#e5b80b]">vivre du coaching en musculation</span>.
            <br />
            Et vous dites non ? Alors que c&apos;est gratuit et sans engagement.
          </p>

          <a
            href="#rdv"
            onClick={close}
            className="red-button inline-block"
          >
            <span className="red-button-inner text-[1rem] px-8 py-4">
              Réserver mon appel gratuit
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>

          <button
            onClick={close}
            className="mt-4 block w-full text-sm text-[#aaa] transition-colors hover:text-[#555]"
          >
            Non, vivre de ma passion ne m&apos;intéresse pas
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
