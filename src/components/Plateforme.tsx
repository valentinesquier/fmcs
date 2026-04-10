"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Monitor, ChatCircle, Video, UserCircle } from "@phosphor-icons/react";
import GridLines from "./GridLines";

const FEATURES = [
  {
    icon: Video,
    title: "Vidéos HD & supports",
    description: "5 piliers de formation en vidéos, notes et sources scientifiques. Accessibles depuis n'importe quel appareil.",
    image: "/images/formation.jpg",
    alt: "Plateforme de formation FMCS — cours vidéo",
  },
  {
    icon: ChatCircle,
    title: "Communauté privée",
    description: "Des centaines de coachs qui avancent dans la même direction. L'endroit où les gens te comprennent.",
    image: "/images/communaute.jpg",
    alt: "Communauté FMCS — Discord",
  },
  {
    icon: UserCircle,
    title: "Espace membre",
    description: "Ton espace personnel pour suivre ta progression, accéder aux modules et passer ton examen.",
    image: "/images/espace-membre.jpg",
    alt: "Espace membre FMCS",
  },
];

export default function Plateforme() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-[128px] section-border bg-white overflow-hidden">
      <GridLines />
      <div className="relative z-10 mx-auto max-w-[76.875rem] px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="pretag">
            <Monitor size={14} weight="fill" className="text-[#e5b80b]" />
            La plateforme
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-[680px] mb-16"
        >
          <h2
            className="text-[clamp(2rem,4vw,3.875rem)] font-600 leading-[1.1] tracking-[-0.02em] mb-6"
            style={{ fontFamily: "var(--font-instrument), system-ui" }}
          >
            Tout est pensé pour ta réussite.
          </h2>
          <p className="text-[1.125rem] text-[#555] leading-[1.5]">
            100% en ligne, à ton rythme. 3h par semaine suffisent pour suivre le programme en 6 mois.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group rounded-[20px] border border-[#e5e5e5] bg-white overflow-hidden hover:border-[#d0d0d0] transition-all duration-400 hover:-translate-y-1"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full border border-[#e5e5e5] bg-[#f7f7f7] flex items-center justify-center">
                    <feature.icon size={20} weight="fill" className="text-[#e5b80b]" />
                  </div>
                  <h3
                    className="text-[1.125rem] font-600 text-[#131316]"
                    style={{ fontFamily: "var(--font-instrument), system-ui" }}
                  >
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[0.875rem] text-[#555] leading-[1.5]">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
