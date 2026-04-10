"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import GridLines from "./GridLines";
import {
  Barbell,
  Brain,
  ForkKnife,
  ChartLineUp,
  UsersThree,
  Briefcase,
  CheckCircle,
  Play,
  Gift,
  Monitor,
  ChatCircle,
  Video,
  UserCircle,
  Users,
} from "@phosphor-icons/react";

const PILLARS = [
  {
    num: "01",
    title: "Anatomie & Physiologie",
    icon: Brain,
    summary: "Comprends le corps humain comme 95% des pratiquants ne le comprennent pas.",
    details: [
      "Insertions musculaires et angles de traction",
      "Biomécanique articulaire complète",
      "Système nerveux et recrutement des fibres",
      "Tensions d'étirement et de contraction",
    ],
    result: "Tu peux expliquer pourquoi tu prescris tel exercice plutôt qu'un autre. Ton client te fait confiance parce qu'il comprend pourquoi.",
  },
  {
    num: "02",
    title: "Nutrition & Récupération",
    icon: ForkKnife,
    summary: "Le domaine que la quasi-totalité des coachs diplômés gère à l'instinct.",
    details: [
      "Balance énergétique et macronutriments",
      "6 types de diètes et timing nutritionnel",
      "Pathologies : obésité, diabète, cardio",
      "Sommeil, stress, compléments alimentaires",
    ],
    result: "Tu réponds à des questions que la majorité des coachs diplômés ne savent pas traiter.",
  },
  {
    num: "03",
    title: "Programmation",
    icon: Barbell,
    summary: "Crée des entraînements qui transforment vraiment tes clients.",
    details: [
      "Périodisation linéaire, ondulante et par blocs",
      "Volume, intensité, fréquence et surcompensation",
      "Déséquilibres musculaires et asymétries",
      "Préparation compétition et méthodes avancées",
    ],
    result: "Aucun profil ne te dépasse. Débutant, sportif confirmé, client blessé, compétiteur.",
  },
  {
    num: "04",
    title: "Suivi Client",
    icon: UsersThree,
    summary: "La différence entre un coach qui galère et un coach dont le carnet est plein.",
    details: [
      "Anamnèse complète et bilan postural",
      "Gestion des pathologies courantes",
      "5 profils psychologiques clients",
      "Outils de motivation sur la durée",
    ],
    result: "Un client suivi avec ce niveau d'attention ne part pas. Il reste. Il progresse. Il te recommande.",
  },
  {
    num: "05",
    title: "Réseau & Business",
    icon: Briefcase,
    summary: "Le pilier qu'aucune école ne t'enseigne vraiment.",
    details: [
      "5 étapes pour trouver tes premiers clients",
      "Fixer tes tarifs sans te brader",
      "Réseaux sociaux comme levier business",
      "Auto-entreprise sans erreurs administratives",
    ],
    result: "Tu sors avec les compétences et le plan d'action. Pas juste un certificat et de la bonne volonté.",
  },
  {
    num: "06",
    title: "Bonus",
    icon: Gift,
    summary: "Le programme d'accompagnement qui transforme tes compétences en activité rentable.",
    details: [
      "Plan de lancement pas-à-pas en 6 étapes",
      "Accompagnement vers la carte professionnelle (CQP)",
      "Module auto-entreprise : statut, assurance, facturation",
      "Communauté privée + accès aux événements FMCS",
    ],
    result: "Tu ne sors pas juste avec des connaissances. Tu sors avec un business prêt à tourner dès le premier jour.",
    featured: true,
  },
];

const FEATURES = [
  { icon: Video, title: "Vidéos HD & supports", description: "5 piliers de formation en vidéos, notes et sources scientifiques.", image: "/images/formation.jpg", alt: "Cours vidéo FMCS" },
  { icon: ChatCircle, title: "Communauté privée", description: "Des centaines de coachs qui avancent dans la même direction.", image: "/images/communaute.png", alt: "Communauté FMCS" },
  { icon: UserCircle, title: "Espace membre", description: "Ton espace pour suivre ta progression et passer ton examen.", image: "/images/espace-membre.jpg", alt: "Espace membre FMCS" },
];

const TEAM = [
  { name: "Nassim", role: "Éducateur sportif & Formateur", highlights: ["Depuis 2006", "YouTubeur", "Gérant de salle"], bio: "Pratiquant, prof de fitness, coach sportif, gérant de salle, YouTubeur. Le sport c'est plus qu'un métier, c'est une vocation. Formateur officieux depuis 2014 sur YouTube, il lance la FMCS pour former les meilleurs coachs du marché.", featured: true, photo: "/images/nassim.png" },
  { name: "Harry", role: "Éducateur sportif & Formateur", highlights: ["Cursus STAPS", "Multi-sport", "Muscle Academy"], bio: "Passé par le cursus STAPS, Harry a trouvé sa vocation dans le coaching et l'accompagnement client. Il assiste Nassim sur les stages Muscle Academy. Son approche multi-sport en fait un atout de taille dans l'équipe.", featured: false, photo: "/images/harry.png" },
  { name: "Cédric", role: "Éducateur sportif & Formateur", highlights: ["Programmation", "Science du sport", "3 ans avec Nassim"], bio: "La programmation d'entraînement n'a plus aucun secret pour lui. Ce qui l'attire : manipuler toutes les variables de l'entraînement pour créer les programmes les mieux adaptés. Résultat ? Des clients satisfaits.", featured: false, photo: "/images/cedric.png" },
  { name: "Damien", role: "Diététicien & Formateur", highlights: ["Diététicien diplômé", "Expert nutrition", "Musculation intelligente"], bio: "Sa mission : apporter son expertise en diététique et vous former à devenir de meilleurs coachs. Il associe ses connaissances en diététique à une pratique intelligente de la musculation.", featured: false, photo: "/images/damien.png" },
];

function PlatformCards({ inView }: { inView: boolean }) {
  return (
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
              <h4 className="text-[1.125rem] font-600 text-[#131316]">
                {feature.title}
              </h4>
            </div>
            <p className="text-[0.875rem] text-[#555] leading-[1.5]">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Pillars() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section id="programme" ref={ref} className="relative py-[128px] section-border bg-[#f7f7f7] overflow-hidden">

      <div className="relative z-10 mx-auto max-w-[76.875rem] px-10">
        {/* Reveal card — "Le Saint Graal" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="relative rounded-[28px] overflow-hidden animate-gold-gradient p-px">
            {/* Inner card */}
            <div className="relative rounded-[27px] bg-[#0a0a0a] p-10 sm:p-16 text-center overflow-hidden">
              {/* Central glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(229,184,11,0.15) 0%, transparent 70%)" }} />

              <div className="relative z-10">
                {/* Logo */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-6"
                >
                  <div className="relative w-20 h-20 mx-auto">
                    <div className="absolute inset-[-8px] rounded-3xl bg-[#e5b80b] opacity-30 blur-[20px]" />
                    <Image
                      src="/images/favicon.png"
                      alt="FMCS"
                      width={80}
                      height={80}
                      className="relative w-20 h-20 rounded-2xl"
                    />
                  </div>
                </motion.div>

                {/* Tag */}
                <div className="inline-flex items-center gap-2 border border-[#e5b80b]/20 bg-[#e5b80b]/10 rounded-full px-4 py-2 mb-8">
                  <ChartLineUp size={14} weight="fill" className="text-[#e5b80b]" />
                  <span className="text-[0.75rem] font-600 text-[#e5b80b] uppercase tracking-[0.05em]">
                    L&apos;accompagnement
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-[clamp(2.25rem,5vw,4rem)] font-700 leading-[1.05] tracking-[-0.03em] mb-6" style={{ color: "#ffffff" }}>
                  C&apos;est quoi la{" "}
                  <span className="text-[#e5b80b]">FMCS</span> ?
                </h2>

                <p className="text-[1.125rem] sm:text-[1.25rem] text-white/70 leading-[1.6] max-w-[560px] mx-auto">
                  La seule formation qui t&apos;accompagne vraiment
                  pour vivre du coaching en musculation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 1. Le programme */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-8 rounded-full bg-[#e5b80b] text-white text-[0.8125rem] font-700 flex items-center justify-center">1</span>
          <span className="text-[1.125rem] font-700 text-[#131316]">Le programme</span>
        </div>

        {/* Tab toggle row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-10 border border-[#e5e5e5] bg-white rounded-[20px] p-2"
          style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
        >
          {PILLARS.map((pillar, i) => {
            const isFeatured = "featured" in pillar && pillar.featured;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center justify-center gap-2 px-3 py-3 rounded-[16px] text-[0.8125rem] font-500 transition-all duration-300 text-center ${
                  active === i
                    ? isFeatured
                      ? "bg-[#e5b80b] text-white"
                      : "bg-[#131316] text-white"
                    : isFeatured
                      ? "text-[#e5b80b] border border-[#e5b80b]/30 bg-[#e5b80b]/5 hover:bg-[#e5b80b]/10"
                      : "text-[#555] hover:text-[#131316] hover:bg-[#f7f7f7]"
                }`}
              >
                <pillar.icon
                  size={18}
                  weight={active === i || isFeatured ? "fill" : "regular"}
                  className={active === i ? (isFeatured ? "text-white" : "text-[#e5b80b]") : isFeatured ? "text-[#e5b80b]" : ""}
                />
                <span className="hidden sm:inline">{pillar.title}</span>
                <span className="sm:hidden">{pillar.num}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active pillar content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid lg:grid-cols-2 border border-[#e5e5e5] rounded-[20px] overflow-hidden bg-white"
          style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
        >
          {/* Left: overview */}
          <div className="p-8 lg:p-12 bg-white border-b lg:border-b-0 lg:border-r border-[#e5e5e5] relative overflow-hidden">
            <div className="relative">
              <div className="w-[60px] h-[60px] rounded-full border border-[#e5e5e5] bg-[#f7f7f7] flex items-center justify-center mb-6">
                {(() => {
                  const Icon = PILLARS[active].icon;
                  return <Icon size={24} weight="fill" className="text-[#e5b80b]" />;
                })()}
              </div>
              <h3
                className="text-[2rem] font-600 text-[#131316] tracking-[-0.01em] mb-4"
                style={{ fontFamily: "var(--font-instrument), system-ui" }}
              >
                {PILLARS[active].title}
              </h3>
              <p className="text-[1.125rem] text-[#555] leading-[1.5]">
                {PILLARS[active].summary}
              </p>
            </div>
          </div>

          {/* Right: details + result */}
          <div className="p-8 lg:p-12 bg-[#f7f7f7] flex flex-col justify-between">
            <div className="space-y-4 mb-8">
              {PILLARS[active].details.map((detail, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={20} weight="fill" className="text-[#e5b80b] mt-0.5 shrink-0" />
                  <span className="text-[#131316]">{detail}</span>
                </motion.div>
              ))}
            </div>
            <div className="border border-[#e5b80b]/30 bg-[#e5b80b]/5 rounded-[16px] p-6">
              <p className="text-[0.875rem] text-[#e5b80b] font-600 mb-2">
                🎯 Résultat
              </p>
              <p className="text-[#131316] font-500 leading-[1.5]">{PILLARS[active].result}</p>
            </div>
          </div>
        </motion.div>


        {/* --- 2. LA PLATEFORME --- */}
        <div className="mt-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-8 rounded-full bg-[#e5b80b] text-white text-[0.8125rem] font-700 flex items-center justify-center">2</span>
            <span className="text-[1.125rem] font-700 text-[#131316]">La plateforme</span>
          </div>
          <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-700 tracking-[-0.02em] mb-4">
            Tout est pensé pour ta réussite.
          </h3>
          <p className="text-[1.125rem] text-[#555] leading-[1.5] mb-10 max-w-[680px]">
            100% en ligne, à ton rythme. 3h par semaine suffisent pour suivre le programme en 6 mois.
          </p>

          <PlatformCards inView={inView} />
        </div>

        {/* --- 3. L'ÉQUIPE --- */}
        <div id="formateurs" className="mt-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-8 rounded-full bg-[#e5b80b] text-white text-[0.8125rem] font-700 flex items-center justify-center">3</span>
            <span className="text-[1.125rem] font-700 text-[#131316]">L&apos;équipe</span>
          </div>
          <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-700 tracking-[-0.02em] mb-4">
            Les experts qui vont t&apos;accompagner.
          </h3>
          <p className="text-[1.125rem] text-[#555] leading-[1.5] mb-10 max-w-[680px]">
            Des formateurs qui exercent sur le terrain, pas des théoriciens derrière un bureau.
          </p>

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
                <div className={`w-20 h-20 rounded-full mb-5 overflow-hidden ${member.featured ? "border-2 border-[#e5b80b33]" : "border border-[#e5e5e5]"}`}>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover object-top scale-[1.3]"
                  />
                </div>

                <h4 className="text-[1.125rem] font-600 text-[#131316] mb-1">
                  {member.name}
                </h4>
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
      </div>
    </section>
  );
}
