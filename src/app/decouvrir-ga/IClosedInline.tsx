"use client";

import { useEffect } from "react";

export default function IClosedInline() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const ICLOSED_ORIGINS = [
      "https://app.iclosed.io",
      "https://stage.iclosed.io",
      "https://dev.iclosed.io",
    ];
    const blockAutoScroll = (event: MessageEvent) => {
      if (!ICLOSED_ORIGINS.includes(event.origin)) return;
      if (event?.data?.type === "scrollIntoView") {
        event.stopImmediatePropagation();
      }
    };
    window.addEventListener("message", blockAutoScroll);
    return () => {
      window.removeEventListener("message", blockAutoScroll);
    };
  }, []);

  return (
    <div
      id="rdv"
      className="scroll-mt-20 mt-6 w-screen relative left-1/2 -translate-x-1/2"
    >
      <div className="mx-auto max-w-[1100px] px-6">
        <div
          className="iclosed-widget w-full"
          data-url="https://app.iclosed.io/e/fit-mass-formation/fmcs-candidature-g"
          data-title="FMCS - Candidature (G)"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}
