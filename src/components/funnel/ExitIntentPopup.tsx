"use client";

import { useEffect, useRef, useState } from "react";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    const onLeave = (e: MouseEvent) => {
      if (fired.current) return;
      // Only fire when cursor exits via the top of the viewport (likely going to close/change tab)
      if (e.clientY <= 0 && e.relatedTarget === null) {
        fired.current = true;
        setIsOpen(true);
      }
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative z-10 w-full max-w-[520px] bg-white rounded-[24px] p-8 md:p-10 text-center shadow-2xl">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Fermer"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f8f7f4] hover:bg-[#ececea] flex items-center justify-center text-[#555] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div
          className="inline-flex items-center gap-2 bg-[#131316] text-white rounded-full px-4 py-1.5 text-[0.75rem] font-700 uppercase tracking-[0.08em] mb-4"
          style={{ boxShadow: "0 4px 16px rgba(229,184,11,0.35)" }}
        >
          <span className="w-2 h-2 rounded-full bg-[#e5b80b]" />
          Attends !
        </div>

        <h3 className="text-[1.5rem] md:text-[1.75rem] font-700 leading-[1.2] mb-3">
          La masterclass est{" "}
          <span className="text-[#e5b80b]">100% gratuite</span>
        </h3>
        <p className="text-[0.9375rem] text-[#555] leading-[1.5] mb-6">
          Ne pars pas sans voir comment devenir coach expert, construire une
          carrière stable et trouver des clients en illimité.
        </p>

        <a
          href="#capture"
          onClick={() => setIsOpen(false)}
          className="red-button inline-block"
        >
          <span className="red-button-inner text-[0.9375rem] px-8 py-3 justify-center">
            Oui, je veux la masterclass
          </span>
        </a>

        <p className="text-[0.75rem] text-[#888] mt-4">
          Accès immédiat &middot; Aucune carte requise
        </p>
      </div>
    </div>
  );
}
