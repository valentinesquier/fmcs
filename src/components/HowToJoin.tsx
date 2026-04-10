"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, CalendarCheck, Handshake } from "@phosphor-icons/react";
import GridLines from "./GridLines";

const STEPS = [
  {
    num: "1",
    icon: CalendarCheck,
    title: "Réserve ton appel",
    description: "Clique sur le bouton et choisis un créneau. C'est gratuit et sans engagement.",
  },
  {
    num: "2",
    icon: Phone,
    title: "Échange avec un conseiller",
    description: "On découvre ta situation, tes objectifs, et on t'explique l'accompagnement en détail.",
  },
  {
    num: "3",
    icon: Handshake,
    title: "Rejoins la FMCS",
    description: "Si c'est fait pour toi, on t'ouvre l'accès et tu commences immédiatement.",
  },
];

export default function HowToJoin() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-[128px] section-border marble-bg overflow-hidden">
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
            🤝 Comment nous rejoindre ?
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-700 leading-[1.1] tracking-[-0.02em] mb-4">
            Découvre si la FMCS est faite pour toi<br />
            lors d&apos;un{" "}
            <span className="text-[#e5b80b]">appel gratuit.</span>
          </h2>
          <p className="text-[1.0625rem] text-[#555] leading-[1.6] max-w-[520px] mx-auto">
            En cliquant sur le bouton, tu ne t&apos;engages à rien. Tu demandes
            simplement à découvrir l&apos;accompagnement lors d&apos;un appel
            personnalisé avec un conseiller.
          </p>
        </motion.div>

        {/* 3 étapes */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="border border-[#e5e5e5] rounded-[20px] bg-white p-6 text-center"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
            >
              <div className="w-12 h-12 rounded-full bg-[#e5b80b]/10 border border-[#e5b80b]/20 flex items-center justify-center mx-auto mb-4">
                <step.icon size={22} weight="fill" className="text-[#e5b80b]" />
              </div>
              <span className="text-[0.6875rem] text-[#e5b80b] font-600 uppercase tracking-[0.05em]">
                Étape {step.num}
              </span>
              <h3 className="text-[1.0625rem] font-700 text-[#131316] mt-1 mb-2">
                {step.title}
              </h3>
              <p className="text-[0.8125rem] text-[#555] leading-[1.6]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a href="#rdv" className="red-button inline-block">
            <span className="red-button-inner text-[1rem] px-10 py-4">
              Réserver mon appel découverte
              <ArrowRight size={18} weight="bold" />
            </span>
          </a>
          <p className="text-[0.8125rem] text-[#888] mt-4">
            Gratuit &middot; Sans engagement &middot; 45 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
