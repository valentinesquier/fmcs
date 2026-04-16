"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star } from "@phosphor-icons/react";
import GridLines from "./GridLines";
import BrandMarquee from "./BrandMarquee";

const STATS = [
  { value: "+4 000", label: "coachs formés" },
  { value: "4.2/5", label: "Trustpilot" },
  { value: "6 mois", label: "de formation" },
];

export default function Hero({ vslId = "TTLI7ZsYSFTFuoJT" }: { vslId?: string }) {
  return (
    <section className="relative pt-[100px] sm:pt-[120px] pb-16 bg-white overflow-hidden">
      <GridLines />
      <div className="relative z-10 mx-auto max-w-[76.875rem] px-5 sm:px-10">
        {/* Main hero container with border sweep */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[24px] sm:rounded-[32px] border border-[#e5e5e5] bg-[#f8f7f4] overflow-hidden"
        >
          {/* Content grid */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-0">
            {/* Left: Text content */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-3 py-1.5 w-fit mb-5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e5b80b] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e5b80b]" />
                </span>
                <span className="text-[0.75rem] font-500 text-[#555]">
                  +4 000 coachs formés
                </span>
              </div>

              {/* Headline */}
              <h1
                className="text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] font-700 leading-[1.15] tracking-[-0.03em] text-[#131316] mb-5"
              >
                La formation n°1 pour maîtriser le coaching en musculation, trouver des clients à l&apos;infini et{" "}
                <span className="text-[#e5b80b]">
                  vivre de sa passion en 6 mois.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-[0.875rem] sm:text-[0.9375rem] text-[#555] leading-[1.6] mb-6 max-w-[420px]">
                L&apos;école en ligne la plus complète du marché. De
                l&apos;anatomie au business, la FMCS te forme sur les 5 piliers
                indissociables du coaching.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <a href="#rdv" className="red-button glow-red">
                  <span className="red-button-inner text-[0.9375rem] sm:text-[1rem] px-6 sm:px-8 py-3">
                    Réserver mon appel découverte
                    <ArrowRight size={18} weight="bold" />
                  </span>
                </a>
              </div>

              {/* Faces + proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {["N", "H", "C", "D", "E", "S"].map((letter, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-[#f8f7f4] bg-white flex items-center justify-center text-[0.625rem] font-600 text-[#131316] shadow-sm"
                    >
                      {letter}
                    </div>
                  ))}
                  <div className="w-9 h-9 rounded-full border-2 border-[#f8f7f4] bg-[#e5b80b] flex items-center justify-center text-[0.625rem] font-700 text-white shadow-sm">
                    +1k
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        weight="fill"
                        className={
                          i < 4 ? "text-[#e5b80b]" : "text-[#e5b80b66]"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-[0.75rem] text-[#888]">4.2/5</span>
                </div>
              </div>
            </div>

            {/* Right: Image + stats overlay */}
            <div className="relative min-h-[350px] lg:min-h-[600px]">
              <Image
                src="/images/fmcs-hero.jpeg"
                alt="Élèves FMCS en salle — Fitmass Coaching School"
                fill
                className="object-cover object-center"
                priority
                unoptimized
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#131316]/50 via-transparent to-transparent" />

              {/* Stats bar overlay */}
              <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6">
                <div className="flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-[#e5e5e5] px-4 py-3 shadow-lg">
                  <Image
                    src="/images/favicon.png"
                    alt="FMCS"
                    width={28}
                    height={28}
                    className="rounded-lg"
                  />
                  <div className="flex items-center gap-4 sm:gap-6 text-[0.6875rem] sm:text-[0.75rem] flex-1">
                    {STATS.map((stat, i) => (
                      <div key={stat.label} className="flex items-center gap-4 sm:gap-6">
                        <div>
                          <span className="font-600 text-[#131316]">
                            {stat.value}
                          </span>{" "}
                          <span className="text-[#888]">{stat.label}</span>
                        </div>
                        {i < STATS.length - 1 && (
                          <div className="w-px h-4 bg-[#e5e5e5]" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Brand marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-8 sm:mt-10"
        >
          <BrandMarquee />
        </motion.div>

        {/* Handwritten text + arrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center mt-6 mb-2"
        >
          <p
            className="text-[1.25rem] sm:text-[1.5rem] text-[#131316]/70"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            👇 Regarde cette vidéo, elle explique tout 👇
          </p>
        </motion.div>

        {/* VSL — Vidalytics embed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20"
        >
          <div className="rounded-2xl sm:rounded-3xl border border-[#e5e5e5] bg-[#131316] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
            <div
              id={`vidalytics_embed_${vslId}`}
              style={{ width: "100%", position: "relative", paddingTop: "56.25%" }}
            />
          </div>
        </motion.div>

        {/* Stats bar — fond noir */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 rounded-2xl bg-[#131316] border border-[#e5e5e5] overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Nombre de coachs formés", value: "+4 000", emoji: "🎓" },
              { label: "Note Trustpilot", value: "4.2/5", emoji: "⭐" },
              { label: "Satisfaction de nos élèves", value: "98%", emoji: "🔥" },
              { label: "Heures de cours + rediffusions live", value: "55h+", emoji: "🎬" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center py-6 sm:py-8 px-4 ${
                  i < 3 ? "lg:border-r border-white/10" : ""
                } ${i < 2 ? "border-b lg:border-b-0 border-white/10" : ""}`}
              >
                <span className="text-[1.25rem] mb-1">{stat.emoji}</span>
                <p className="text-[0.75rem] sm:text-[0.8125rem] text-white/50 text-center mb-2">
                  {stat.label}
                </p>
                <p className="text-[1.5rem] sm:text-[2rem] font-700 text-white tracking-[-0.02em]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bandeau témoignages défilant */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 sm:mt-10 overflow-hidden"
        >
          <div className="flex gap-5 animate-marquee whitespace-nowrap">
            {[
              { name: "Zoum Méité", text: "Belle formation, complète avec tout le contenu nécessaire pour passer à un niveau supérieur." },
              { name: "Victorien Penel", text: "Gain de temps monstrueux dans mes projets professionnels. Formation complète et pertinente." },
              { name: "Mickael Dalichoux", text: "La formation est extra, la team exceptionnelle. Nassim est un gars expérimenté, c'est un tueur." },
              { name: "Moufassa", text: "Permet d'acquérir les compétences essentielles pour encadrer et motiver des athlètes." },
              { name: "Monsieur Vierjon", text: "Formation très complète et très intéressante, avec des personnes toujours disponibles." },
              { name: "Claude", text: "Il y a tout, c'est très dense et complet pour avoir les bases du coaching sportif / nutrition !" },
              { name: "Daryan Lee", text: "Une excellente formation pour les passionnés de musculation. Je recommande vivement !" },
              { name: "Anthony Verdavaine", text: "Formation de très bonne qualité, bien structurée, formateurs compétents." },
              { name: "Zoum Méité", text: "Belle formation, complète avec tout le contenu nécessaire pour passer à un niveau supérieur." },
              { name: "Victorien Penel", text: "Gain de temps monstrueux dans mes projets professionnels. Formation complète et pertinente." },
              { name: "Mickael Dalichoux", text: "La formation est extra, la team exceptionnelle. Nassim est un gars expérimenté, c'est un tueur." },
              { name: "Moufassa", text: "Permet d'acquérir les compétences essentielles pour encadrer et motiver des athlètes." },
              { name: "Monsieur Vierjon", text: "Formation très complète et très intéressante, avec des personnes toujours disponibles." },
              { name: "Claude", text: "Il y a tout, c'est très dense et complet pour avoir les bases du coaching sportif / nutrition !" },
              { name: "Daryan Lee", text: "Une excellente formation pour les passionnés de musculation. Je recommande vivement !" },
              { name: "Anthony Verdavaine", text: "Formation de très bonne qualité, bien structurée, formateurs compétents." },
            ].map((t, i) => (
              <div
                key={i}
                className="inline-flex flex-col gap-2 border border-[#e5e5e5] rounded-[16px] bg-white p-4 min-w-[280px] max-w-[320px] whitespace-normal"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} weight="fill" className="text-[#e5b80b]" />
                  ))}
                </div>
                <p className="text-[0.8125rem] text-[#555] leading-[1.5] line-clamp-2">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-[0.75rem] font-600 text-[#131316]">{t.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
