"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Star, ShieldCheck } from "@phosphor-icons/react";
import GridLines from "./GridLines";

const TOTAL_AVIS = 34;

export default function MurTemoignages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="mur-temoignages"
      ref={ref}
      className="relative py-[128px] section-border bg-white overflow-hidden"
    >
      <GridLines />
      <div className="relative z-10 mx-auto max-w-[860px] px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-700 leading-[1.1] tracking-[-0.02em] mb-4">
            + de 4000 coachs formés par la FMCS.{" "}
            <span className="text-[#e5b80b]">Leurs avis.</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 border border-[#e5e5e5] bg-[#f8f7f4] rounded-full px-4 py-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} weight="fill" className="text-[#00b67a]" />
                ))}
              </div>
              <span className="text-[0.8125rem] text-[#555] font-500">Trustpilot</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-[0.8125rem] text-[#555]">
              <ShieldCheck size={16} weight="fill" className="text-[#e5b80b]" />
              <span>Avis certifiés</span>
            </div>
          </div>
        </motion.div>

        {/* Mur 2 colonnes */}
        <div className="columns-1 sm:columns-2 gap-4 space-y-4">
          {Array.from({ length: TOTAL_AVIS }, (_, i) => i + 1).map((num, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: Math.min(0.1 + i * 0.04, 1) }}
              className="break-inside-avoid rounded-[16px] border border-[#e5e5e5] bg-white overflow-hidden hover:border-[#d0d0d0] transition-all duration-300"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
            >
              <Image
                src={`/images/temoignage-${num}.png`}
                alt={`Avis certifié FMCS #${num}`}
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
