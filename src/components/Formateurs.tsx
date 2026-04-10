"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users } from "@phosphor-icons/react";
import Image from "next/image";
import GridLines from "./GridLines";

const TEAM = [
  {
    name: "Nassim Sahili",
    role: "Fondateur & Formateur principal",
    highlights: ["20 ans de musculation", "15 ans de coaching", "+10 000 clients"],
    bio: "Passé par toutes les étapes : pratiquant, prof de fitness, coach sportif, gérant de salle, YouTubeur. Formateur officieux depuis 2014, il lance la FMCS pour former les meilleurs coachs du marché.",
    featured: true,
  },
  {
    name: "Harry",
    role: "Éducateur sportif & Formateur",
    highlights: ["Cursus STAPS", "Approche multi-sport", "Stages Muscle Academy"],
    bio: "Après le cursus STAPS, Harry a trouvé sa vocation dans le coaching. Son approche multi-sport en fait un atout de taille dans l'équipe.",
    featured: false,
  },
  {
    name: "Cédric",
    role: "Éducateur sportif & Formateur",
    highlights: ["Expert programmation", "Science du sport", "Variables d'entraînement"],
    bio: "La programmation d'entraînement n'a plus aucun secret pour Cédric. Il manipule toutes les variables pour créer les programmes les mieux adaptés.",
    featured: false,
  },
  {
    name: "Damien",
    role: "Diététicien & Formateur",
    highlights: ["Diététicien diplômé", "Expert nutrition", "Musculation intelligente"],
    bio: "Sa mission : apporter son expertise en diététique et former des coachs capables de prodiguer des conseils nutritionnels de qualité.",
    featured: false,
  },
];

export default function Formateurs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="formateurs" ref={ref} className="relative py-[128px] section-border bg-[#f7f7f7] overflow-hidden">
      <GridLines />
      <div className="relative z-10 mx-auto max-w-[76.875rem] px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="pretag">
            <Users size={14} weight="fill" className="text-[#e5b80b]" />
            L&apos;équipe
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-[680px] mb-12"
        >
          <h2
            className="text-[clamp(2rem,4vw,3.875rem)] font-600 leading-[1.1] tracking-[-0.02em] mb-6"
            style={{ fontFamily: "var(--font-instrument), system-ui" }}
          >
            Les experts qui vont t&apos;accompagner.
          </h2>
          <p className="text-[1.125rem] text-[#555] leading-[1.5]">
            Des formateurs qui exercent sur le terrain, pas des théoriciens derrière un bureau.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className={`group rounded-[20px] p-6 border transition-all duration-400 hover:-translate-y-1 ${
                member.featured
                  ? "border-[#e5b80b33] bg-white shadow-[0_4px_20px_rgba(229,184,11,0.08)]"
                  : "border-[#e5e5e5] bg-white"
              }`}
              style={{ boxShadow: member.featured ? undefined : "0 1px 3px rgba(0,0,0,0.04)" }}
            >
              {member.featured ? (
                <div className="w-16 h-16 rounded-full mb-5 overflow-hidden border-2 border-[#e5b80b33]">
                  <Image
                    src="/images/nassim-cover.png"
                    alt={member.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ) : (
                <div
                  className="w-16 h-16 rounded-full mb-5 flex items-center justify-center text-[1.5rem] font-600 bg-[#f7f7f7] border border-[#e5e5e5] text-[#131316]"
                  style={{ fontFamily: "var(--font-instrument), system-ui" }}
                >
                  {member.name[0]}
                </div>
              )}

              <h3
                className="text-[1.125rem] font-600 text-[#131316] mb-1"
                style={{ fontFamily: "var(--font-instrument), system-ui" }}
              >
                {member.name}
              </h3>
              <p className="text-[0.8125rem] text-[#e5b80b] font-500 mb-4">{member.role}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {member.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-[0.6875rem] px-2.5 py-1 rounded-full border border-[#e5e5e5] bg-[#f7f7f7] text-[#555]"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <p className="text-[0.875rem] text-[#555] leading-[1.5]">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
