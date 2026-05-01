"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import GridLines from "./GridLines";


export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rdv" ref={ref} className="relative py-[128px] marble-bg overflow-hidden">
      <GridLines />
      <div className="relative z-10 mx-auto max-w-[76.875rem] px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-[24px] overflow-hidden bg-[#131316]"
        >
          <div className="relative p-10 lg:p-16">
            <div className="text-center max-w-[680px] mx-auto">
              <Image
                src="/images/favicon.png"
                alt="FMCS"
                width={48}
                height={48}
                className="w-12 h-12 rounded-xl mx-auto mb-8"
              />

              <h2
                className="text-[clamp(1.5rem,4vw,3rem)] font-700 leading-[1.1] tracking-[-0.02em] mb-4 whitespace-nowrap"
                style={{ color: "#ffffff" }}
              >
                Prêt à devenir un coach <span className="text-[#e5b80b] whitespace-nowrap">5 étoiles</span> ?
              </h2>
              <p className="text-[1.125rem] text-[#ffffffba] leading-[1.5] mb-10 max-w-[520px] mx-auto">
                Réserve un appel découverte gratuit avec notre équipe. On répond
                à toutes vos questions et on vous aide à définir votre plan.
              </p>

              {/* RED CTA */}
              <a href="#rdv" className="red-button inline-block">
                <span className="red-button-inner text-[1.125rem] px-10 py-4">
                  Réserver mon appel découverte
                  <ArrowRight size={20} weight="bold" />
                </span>
              </a>
              <p className="text-[0.8125rem] text-[#ffffffba] mt-5">
                Gratuit &middot; Sans engagement &middot; 45 minutes
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
