"use client";

import { ArrowRight } from "@phosphor-icons/react";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[998] md:hidden p-3">
      <a href="#rdv" className="red-button block w-full">
        <span className="red-button-inner justify-center w-full text-[0.9375rem] py-3">
          Réserver mon appel découverte
          <ArrowRight size={16} weight="bold" />
        </span>
      </a>
    </div>
  );
}
