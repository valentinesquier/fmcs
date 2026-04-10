"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import GridLines from "./GridLines";

const STEPS = [
  { num: "1", text: "Tu suis la FMCS et tu acquiers les vraies compétences" },
  { num: "2", text: "On te met en relation avec les bons organismes" },
  { num: "3", text: "Tu passes le CQP, la voie la plus rapide et la moins chère" },
  { num: "4", text: "Tu obtiens ta carte pro et tu exerces en toute légalité" },
];

export default function CartePro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="carte-pro" ref={ref} className="relative py-[128px] section-border bg-white overflow-hidden">
      <GridLines />
      <div className="relative z-10 mx-auto max-w-[860px] px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="pretag mx-auto w-fit mb-8">
            <ShieldCheck size={14} weight="fill" className="text-[#e5b80b]" />
            Carte professionnelle
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-700 leading-[1.1] tracking-[-0.02em] mb-4">
            On t&apos;accompagne aussi pour{" "}
            <span className="text-[#e5b80b]">ta carte pro.</span>
          </h2>
        </motion.div>

        {/* Explication */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-[680px] mx-auto space-y-5 mb-12"
        >
          <p className="text-[1.0625rem] text-[#555] leading-[1.8]">
            En France, la{" "}
            <span className="text-[#131316] font-600">
              carte professionnelle est obligatoire
            </span>{" "}
            pour exercer en salle de sport, en club ou en association.
          </p>

          <p className="text-[1.0625rem] text-[#555] leading-[1.8]">
            En dehors de ça, coaching en ligne, à domicile, en extérieur, tu
            peux te lancer, trouver des clients et générer des revenus en toute
            légalité.
          </p>

          <p className="text-[1.0625rem] text-[#555] leading-[1.8]">
            Pour autant, on ne conseille à personne de démarrer sans être en
            règle. C&apos;est pourquoi à la FMCS,{" "}
            <span className="text-[#e5b80b] font-600">
              on t&apos;accompagne directement vers le CQP
            </span>{" "}
            , la voie la plus rapide et la moins chère pour décrocher ta carte
            pro, sans passer 18 mois et 8 000€ dans une école.
          </p>
        </motion.div>

        {/* Card principale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-[20px] bg-[#131316] p-8 sm:p-10 mb-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/images/favicon.png"
              alt="FMCS"
              width={40}
              height={40}
              className="w-10 h-10 rounded-xl"
            />
            <div>
              <p className="text-[0.75rem] text-[#e5b80b] font-600 uppercase tracking-[0.05em]">
                Le parcours carte pro
              </p>
              <p className="text-white font-700">FMCS d&apos;abord, CQP ensuite.</p>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="w-8 h-8 shrink-0 rounded-full bg-[#e5b80b] text-white text-[0.8125rem] font-700 flex items-center justify-center">
                  {step.num}
                </span>
                <p className="text-white/70 leading-[1.6] pt-1">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <a href="#rdv" className="red-button inline-block">
            <span className="red-button-inner text-[0.9375rem] px-8 py-3">
              Réserver mon appel découverte
              <ArrowRight size={16} weight="bold" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
