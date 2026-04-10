"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Check, X } from "@phosphor-icons/react";
import GridLines from "./GridLines";

const ROWS = [
  { label: "Durée", fmcs: "6 mois", classic: "12 à 18 mois" },
  { label: "Format", fmcs: "100% en ligne, à ton rythme", classic: "Présentiel imposé" },
  { label: "Anatomie & Physiologie", fmcs: true, classic: true },
  { label: "Nutrition avancée", fmcs: true, classic: false },
  { label: "Programmation poussée", fmcs: true, classic: false },
  { label: "Suivi & accompagnement client", fmcs: true, classic: false },
  { label: "Trouver des clients", fmcs: true, classic: false },
  { label: "Créer son entreprise", fmcs: true, classic: false },
  { label: "Communauté de coachs", fmcs: true, classic: false },
  { label: "Accompagnement carte pro", fmcs: true, classic: true },
  { label: "Compatible avec un emploi", fmcs: true, classic: false },
];

export default function Comparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="comparatif" ref={ref} className="relative py-[128px] section-border bg-[#f7f7f7] overflow-hidden">
      <GridLines />
      <div className="relative z-10 mx-auto max-w-[860px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="pretag mx-auto w-fit mb-8">
            ⚔️ Comparatif
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-700 leading-[1.1] tracking-[-0.02em] mb-4">
            FMCS vs{" "}
            <span className="text-[#888]">Formations classiques</span>
          </h2>
          <p className="text-[1.0625rem] text-[#555] leading-[1.6] max-w-[520px] mx-auto">
            Compare par toi-même ce que tu obtiens avec la FMCS par rapport à un
            BPJEPS ou un STAPS.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border border-[#e5e5e5] rounded-[20px] bg-white overflow-hidden"
          style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
        >
          {/* Header */}
          <div className="grid grid-cols-[1fr_140px_140px] sm:grid-cols-[1fr_180px_180px] border-b border-[#e5e5e5]">
            <div className="p-4 sm:p-5" />
            <div className="p-4 sm:p-5 text-center border-l border-[#e5e5e5] bg-[#e5b80b]/5">
              <Image
                src="/images/favicon.png"
                alt="FMCS"
                width={28}
                height={28}
                className="w-7 h-7 rounded-lg mx-auto mb-1.5"
              />
              <p className="text-[0.8125rem] font-700 text-[#e5b80b]">FMCS</p>
            </div>
            <div className="p-4 sm:p-5 text-center border-l border-[#e5e5e5] bg-[#ff0505]/5">
              <p className="text-[0.6875rem] text-[#ff0505]/60 mt-2">BPJEPS / STAPS</p>
              <p className="text-[0.8125rem] font-600 text-[#ff0505]">Classique</p>
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1fr_140px_140px] sm:grid-cols-[1fr_180px_180px] ${
                i < ROWS.length - 1 ? "border-b border-[#f0f0f0]" : ""
              }`}
            >
              <div className="p-3.5 sm:p-4 text-[0.8125rem] sm:text-[0.875rem] font-500 text-[#131316]">
                {row.label}
              </div>
              <div className="p-3.5 sm:p-4 text-center border-l border-[#f0f0f0] bg-[#e5b80b]/[0.02]">
                {typeof row.fmcs === "boolean" ? (
                  row.fmcs ? (
                    <Check size={18} weight="bold" className="text-[#e5b80b] mx-auto" />
                  ) : (
                    <X size={18} weight="bold" className="text-[#d0d0d0] mx-auto" />
                  )
                ) : (
                  <span className="text-[0.8125rem] font-600 text-[#e5b80b]">{row.fmcs}</span>
                )}
              </div>
              <div className="p-3.5 sm:p-4 text-center border-l border-[#f0f0f0] bg-[#ff0505]/[0.02]">
                {typeof row.classic === "boolean" ? (
                  row.classic ? (
                    <Check size={18} weight="bold" className="text-[#131316] mx-auto" />
                  ) : (
                    <X size={18} weight="bold" className="text-[#ff0505]/40 mx-auto" />
                  )
                ) : (
                  <span className="text-[0.8125rem] text-[#ff0505]/60">{row.classic}</span>
                )}
              </div>
            </div>
          ))}

          {/* Prix — dernière ligne mise en avant */}
          <div className="grid grid-cols-[1fr_140px_140px] sm:grid-cols-[1fr_180px_180px] bg-[#131316]">
            <div className="p-4 sm:p-5 text-[0.9375rem] font-700 text-white">
              💰 Prix
            </div>
            <div className="p-4 sm:p-5 text-center border-l border-white/10 bg-[#e5b80b]/10">
              <p className="text-[0.9375rem] font-700 text-[#e5b80b]">Révélé en appel</p>
            </div>
            <div className="p-4 sm:p-5 text-center border-l border-white/10">
              <p className="text-[0.9375rem] font-600 text-[#ff0505]">+8 000€</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
