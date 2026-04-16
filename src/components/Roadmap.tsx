"use client";

import { motion, useInView, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import GridLines from "./GridLines";

function RevenueCalculator({ inView }: { inView: boolean }) {
  const [clients, setClients] = useState(10);
  const [price, setPrice] = useState(40);
  const [sessions, setSessions] = useState(2);
  const monthly = Math.round(clients * price * sessions * 4);
  const yearly = monthly * 12;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mt-16 rounded-[20px] border border-[#e5e5e5] bg-white p-8 sm:p-10 overflow-hidden"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
    >
      <div className="text-center mb-8">
        <p className="text-[0.75rem] text-[#e5b80b] font-600 uppercase tracking-[0.05em] mb-3">
          💰 Calculateur de revenus
        </p>
        <h3 className="text-[1.5rem] sm:text-[2rem] font-700 text-[#131316] tracking-[-0.02em] mb-2">
          Combien tu peux gagner grâce au coaching ?
        </h3>
        <p className="text-[0.9375rem] text-[#555] max-w-[450px] mx-auto">
          Fais bouger les curseurs et vois par toi-même. Ça peut aller très vite !
        </p>
      </div>

      {/* Sliders */}
      <div className="grid sm:grid-cols-3 gap-8 mb-10 max-w-[720px] mx-auto">
        <div>
          <div className="flex justify-between mb-3">
            <span className="text-[0.8125rem] text-[#555]">Nombre de clients</span>
            <span className="text-[0.9375rem] font-700 text-[#131316]">{clients}</span>
          </div>
          <input
            type="range"
            min={1}
            max={30}
            value={clients}
            onChange={(e) => setClients(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#e5b80b]"
            style={{ background: `linear-gradient(to right, #e5b80b ${(clients / 30) * 100}%, #e5e5e5 ${(clients / 30) * 100}%)` }}
          />
          <div className="flex justify-between text-[0.6875rem] text-[#aaa] mt-1">
            <span>1</span>
            <span>30</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-3">
            <span className="text-[0.8125rem] text-[#555]">Prix par séance</span>
            <span className="text-[0.9375rem] font-700 text-[#131316]">{price}€</span>
          </div>
          <input
            type="range"
            min={20}
            max={100}
            step={5}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#e5b80b]"
            style={{ background: `linear-gradient(to right, #e5b80b ${((price - 20) / 80) * 100}%, #e5e5e5 ${((price - 20) / 80) * 100}%)` }}
          />
          <div className="flex justify-between text-[0.6875rem] text-[#aaa] mt-1">
            <span>20€</span>
            <span>100€</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-3">
            <span className="text-[0.8125rem] text-[#555]">Séances par semaine</span>
            <span className="text-[0.9375rem] font-700 text-[#131316]">{sessions}</span>
          </div>
          <input
            type="range"
            min={1}
            max={5}
            value={sessions}
            onChange={(e) => setSessions(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#e5b80b]"
            style={{ background: `linear-gradient(to right, #e5b80b ${((sessions - 1) / 4) * 100}%, #e5e5e5 ${((sessions - 1) / 4) * 100}%)` }}
          />
          <div className="flex justify-between text-[0.6875rem] text-[#aaa] mt-1">
            <span>1</span>
            <span>5</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="rounded-[16px] bg-[#131316] p-6 sm:p-8 text-center mb-8">
        <p className="text-[0.75rem] text-white/40 mb-1">Avec {clients} clients à {price}€/séance (~{sessions} séances/sem.)</p>
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div>
            <p className="text-[2.5rem] sm:text-[3rem] font-800 text-[#e5b80b] tracking-[-0.03em]">
              {monthly.toLocaleString("fr-FR")}€
            </p>
            <p className="text-[0.875rem] font-700 text-white/70">par mois</p>
          </div>
          <div>
            <p className="text-[2.5rem] sm:text-[3rem] font-800 text-white tracking-[-0.03em]">
              {yearly.toLocaleString("fr-FR")}€
            </p>
            <p className="text-[0.875rem] font-700 text-white/70">par an</p>
          </div>
        </div>
      </div>

      {/* Context */}
      <div className="text-center">
        <p className="text-[0.9375rem] text-[#555] leading-[1.6] mb-4 max-w-[480px] mx-auto">
          En seulement quelques clients tu peux déjà rentabiliser la FMCS.
          C&apos;est{" "}
          <span className="text-[#131316] font-600">
            l&apos;investissement le plus rentable de ta carrière.
          </span>
        </p>
        <p className="text-[1.125rem] font-700 text-[#131316] mb-5">
          💎 Le prix est révélé seulement durant l&apos;appel
        </p>
        <a href="#rdv" className="red-button inline-block">
          <span className="red-button-inner text-[0.9375rem] px-8 py-3">
            Réserver mon appel découverte
            <ArrowRight size={16} weight="bold" />
          </span>
        </a>
      </div>
    </motion.div>
  );
}

function TimelineDot({ scrollProgress, threshold }: { scrollProgress: MotionValue<number>; threshold: number }) {
  const bg = useTransform(scrollProgress, [threshold - 0.05, threshold], ["#ffffff", "#e5b80b"]);
  const border = useTransform(scrollProgress, [threshold - 0.05, threshold], ["#e5e5e5", "rgba(229,184,11,0.3)"]);
  const shadow = useTransform(scrollProgress, [threshold - 0.05, threshold], ["0 0 0 transparent", "0 0 10px rgba(229,184,11,0.4)"]);

  return (
    <motion.div
      className="absolute left-[17px] sm:left-[25px] top-1 w-4 h-4 rounded-full border-[3px]"
      style={{ backgroundColor: bg, borderColor: border, boxShadow: shadow }}
    />
  );
}

const STEPS = [
  {
    month: "Mois 1-2",
    title: "Les fondations",
    emoji: "🧠",
    items: [
      "Anatomie, physiologie et biomécanique",
      "Les bases de la nutrition sportive",
      "Tu comprends le corps humain mieux que 95% des pratiquants",
    ],
    roi: null,
  },
  {
    month: "Mois 2-3",
    title: "La maîtrise technique",
    emoji: "🏋️",
    items: [
      "Programmation d'entraînement complète",
      "Nutrition avancée : diètes, pathologies, timing",
      "Tu sais créer un programme adapté à n'importe quel profil",
    ],
    roi: null,
  },
  {
    month: "Mois 3-4",
    title: "L'accompagnement client",
    emoji: "🤝",
    items: [
      "Anamnèse, bilan postural, profils psychologiques",
      "Techniques de suivi et de fidélisation",
      "Tes clients restent, progressent et te recommandent",
    ],
    roi: null,
  },
  {
    month: "Mois 4-5",
    title: "Le business",
    emoji: "💼",
    items: [
      "Trouver tes premiers clients (plan en 5 étapes)",
      "Fixer tes tarifs, créer ton auto-entreprise",
      "Réseaux sociaux comme levier d'acquisition",
    ],
    roi: "Premiers clients trouvés",
  },
  {
    month: "Mois 5-6",
    title: "Le lancement",
    emoji: "🚀",
    items: [
      "Module Lancement Pas-à-Pas",
      "Accompagnement carte pro (CQP)",
      "Examen final + Certificat FMCS",
    ],
    roi: "Activité lancée",
  },
  {
    month: "Mois 6+",
    title: "La croissance",
    emoji: "📈",
    items: [
      "Communauté privée pour continuer à progresser",
      "Accès 1 an pour revoir tout le contenu",
      "Tu vis de ta passion et tu développes ton activité",
    ],
    roi: "Revenus récurrents",
  },
];

export default function Roadmap() {
  const ref = useRef(null);
  const timelineRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative py-[128px] section-border bg-white overflow-hidden">
      <GridLines />
      <div className="relative z-10 mx-auto max-w-[860px] px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="pretag mx-auto w-fit mb-8">
            🗺️ Le parcours
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-700 leading-[1.1] tracking-[-0.02em] mb-4">
            <span className="text-[#e5b80b]">6 mois</span> pour vivre du coaching
          </h2>
          <p className="text-[1.0625rem] text-[#555] leading-[1.6] max-w-[520px] mx-auto">
            De zéro à coach rentable. Voici exactement ce qui se passe quand tu
            rejoins la FMCS.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Vertical line — static background */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-[#e5e5e5]" />
          {/* Vertical line — animated gold progress */}
          <motion.div
            className="absolute left-6 sm:left-8 top-0 w-px bg-[#e5b80b] origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-0">
            {STEPS.map((step, i) => {
              const threshold = (i + 0.5) / STEPS.length;
              return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="relative pl-16 sm:pl-20 pb-10 last:pb-0"
              >
                {/* Dot on timeline — changes color when scroll passes */}
                <TimelineDot scrollProgress={scrollYProgress} threshold={threshold} />

                {/* Month badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-[#f8f7f4] px-3 py-1 mb-3">
                  <span className="text-[0.75rem] font-600 text-[#131316]">{step.month}</span>
                </div>

                {/* Card */}
                <div className={`rounded-[16px] border p-5 sm:p-6 ${
                  step.roi
                    ? "border-[#e5b80b]/30 bg-[#e5b80b]/[0.03]"
                    : "border-[#e5e5e5] bg-white"
                }`} style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[1.25rem]">{step.emoji}</span>
                    <h3 className="text-[1.0625rem] font-700 text-[#131316]">{step.title}</h3>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {step.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-[0.875rem] text-[#555] leading-[1.5]">
                        <span className="text-[#e5b80b] mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {step.roi && (
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#e5b80b]/10 border border-[#e5b80b]/20 px-3 py-1.5">
                      <span className="text-[0.75rem] font-600 text-[#e5b80b]">
                        🎯 {step.roi}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>

        {/* Calculateur de revenus — masqué */}
        {/* <RevenueCalculator inView={inView} /> */}
      </div>
    </section>
  );
}
