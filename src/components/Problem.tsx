"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import GridLines from "./GridLines";
import {
  Warning,
  TrendDown,
  CurrencyEur,
  Clock,
  UserMinus,
  BookOpen,
} from "@phosphor-icons/react";

const PAIN_POINTS = [
  {
    icon: TrendDown,
    stat: "85%",
    text: "des diplômés quittent le métier dans les 5 ans suivant leur certification.",
    source: "Observatoire des métiers du sport, 2023",
  },
  {
    icon: CurrencyEur,
    stat: "8 000€",
    text: "dépensés pour une formation qui ne t'apprend ni la nutrition avancée, ni le business.",
    source: "Ministère des Sports, tarifs BPJEPS",
  },
  {
    icon: Clock,
    stat: "18 mois",
    text: "de formation classique pour sortir sans savoir comment trouver un seul client.",
    source: "Durée moyenne BPJEPS / DEJEPS",
  },
];

const CHART_BARS = [
  { year: "2020", value: 2.1, px: 36, color: "#d0d0d0" },
  { year: "2021", value: 2.4, px: 42, color: "#d0d0d0" },
  { year: "2022", value: 2.8, px: 48, color: "#d0d0d0" },
  { year: "2023", value: 3.2, px: 55, color: "#d0d0d0" },
  { year: "2024", value: 3.6, px: 62, color: "#888" },
  { year: "2025", value: 4.0, px: 69, color: "#888" },
  { year: "2026", value: 4.5, px: 78, color: "#e5b80b" },
  { year: "2027", value: 5.0, px: 86, color: "#e5b80b", dashed: true },
  { year: "2028", value: 5.5, px: 95, color: "#e5b80b", dashed: true },
  { year: "2029", value: 6.1, px: 105, color: "#e5b80b", dashed: true },
  { year: "2030", value: 6.7, px: 116, color: "#e5b80b", dashed: true },
  { year: "2031", value: 7.4, px: 128, color: "#e5b80b", dashed: true },
  { year: "2032", value: 8.1, px: 140, color: "#e5b80b", dashed: true },
  { year: "2033", value: 8.9, px: 154, color: "#e5b80b", dashed: true },
  { year: "2034", value: 9.8, px: 170, color: "#e5b80b", dashed: true },
  { year: "2035", value: 10.8, px: 186, color: "#e5b80b", dashed: true },
];

function ChartSection() {
  const chartRef = useRef(null);
  const chartInView = useInView(chartRef, { once: true, margin: "-50px" });

  return (
    <div ref={chartRef} className="border border-[#e5e5e5] rounded-[20px] bg-white p-6 sm:p-8 my-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <div>
          <p className="text-[0.75rem] text-[#888] font-500 uppercase tracking-[0.05em] mb-1">
            Marché du coaching sportif en France
          </p>
          <p className="text-[0.8125rem] text-[#555]">
            Valeur estimée du marché (en milliards €)
          </p>
        </div>
        <p className="text-[0.6875rem] text-[#aaa] italic">
          Source : IHRSA, Deloitte, Ministère des Sports
        </p>
      </div>

      <div className="flex items-end gap-[3px] sm:gap-4 h-[200px] mb-4 overflow-hidden">
        {CHART_BARS.map((bar, i) => (
          <div key={bar.year} className="flex-1 flex flex-col items-center gap-1">
            <span className="text-[0.5rem] sm:text-[0.625rem] text-[#888] font-500">{bar.value}B</span>
            <div className="w-full flex-1 flex items-end">
              <motion.div
                initial={{ height: 0 }}
                animate={chartInView ? { height: bar.px } : { height: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full rounded-t-md min-h-[4px] ${bar.dashed ? "border-2 border-dashed bg-transparent" : ""}`}
                style={{
                  backgroundColor: bar.dashed ? undefined : bar.color,
                  borderColor: bar.dashed ? "#e5b80b" : undefined,
                }}
              />
            </div>
            <span className={`text-[0.5rem] sm:text-[0.625rem] font-500 ${bar.year === "2026" ? "text-[#e5b80b] font-700" : "text-[#888]"}`}>
              {bar.year}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[0.6875rem] text-[#888]">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-[#d0d0d0]" />
          <span>Historique</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-[#e5b80b]" />
          <span className="text-[#e5b80b] font-600">2026 (aujourd&apos;hui)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm border-2 border-dashed border-[#e5b80b]" />
          <span>Projection (+10%/an)</span>
        </div>
      </div>
    </div>
  );
}

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative pt-[64px] pb-[128px] section-border bg-white overflow-hidden">
      <GridLines />
      <div className="relative z-10 mx-auto max-w-[860px] px-6">
        {/* Pretag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="pretag">
            <Warning size={14} weight="fill" className="text-[#e5b80b]" />
            Le constat
          </div>
        </motion.div>

        {/* Heading — centré */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-700 leading-[1.15] tracking-[-0.02em]">
            Le système traditionnel ne te prépare pas à vivre du coaching.
          </h2>
        </motion.div>

        {/* Bloc texte — centré, style conversationnel comme Agencilab */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 mb-20"
        >
          <p className="text-[1.0625rem] text-[#555] leading-[1.8]">
            Vivre de sa passion pour la musculation et aider les autres à
            atteindre leurs objectifs, c&apos;est à mes yeux{" "}
            <span className="text-[#131316] font-600">
              le métier le plus gratifiant qui soit.
            </span>
          </p>

          <p className="text-[1.0625rem] text-[#555] leading-[1.8]">
            Pourtant, très peu de personnes y arrivent vraiment.
          </p>

          <p className="text-[1.0625rem] text-[#555] leading-[1.8]">
            C&apos;est étonnant quand on sait que le marché est loin d&apos;être
            saturé.
          </p>

          {/* Schéma marché */}
          <div className="my-4 border border-[#e5e5e5] rounded-[20px] bg-[#f8f7f4] p-6 sm:p-8">
            <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-6">
              <div className="text-center">
                <div className="text-[1.5rem] sm:text-[2.5rem] font-700 text-[#e5b80b] tracking-[-0.02em]">71%</div>
                <p className="text-[0.6875rem] sm:text-[0.75rem] text-[#555] mt-1">des Français pratiquent une activité physique</p>
              </div>
              <div className="text-center">
                <div className="text-[1.5rem] sm:text-[2.5rem] font-700 text-[#e5b80b] tracking-[-0.02em]">+10%</div>
                <p className="text-[0.6875rem] sm:text-[0.75rem] text-[#555] mt-1">de croissance annuelle du coaching sportif</p>
              </div>
              <div className="text-center">
                <div className="text-[1.5rem] sm:text-[2.5rem] font-700 text-[#e5b80b] tracking-[-0.02em]">4.2M</div>
                <p className="text-[0.6875rem] sm:text-[0.75rem] text-[#555] mt-1">d&apos;abonnés en salle de sport en France</p>
              </div>
            </div>

            {/* Barre de progression marché */}
            <div>
              <div className="flex justify-between text-[0.75rem] text-[#555] mb-2">
                <span>Places prises sur le marché</span>
                <span className="font-600 text-[#131316]">~15%</span>
              </div>
              <div className="h-4 rounded-full bg-[#e5e5e5] overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: "15%" } : {}}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-[#131316]"
                />
              </div>
              <div className="flex justify-between text-[0.6875rem] mt-2">
                <span className="text-[#131316] font-500">Coachs actifs</span>
                <span className="text-[#e5b80b] font-600">85% du marché encore disponible →</span>
              </div>
            </div>
          </div>

          {/* Graphique projection marché */}
          <ChartSection />

          <p className="text-[1.0625rem] text-[#555] leading-[1.8]">
            Il y a de la place, et il y en aura encore longtemps.
          </p>

          <p className="text-[1.0625rem] text-[#555] leading-[1.8]">
            Le problème est ailleurs. Entre vouloir devenir coach et en vivre
            vraiment, il y a un fossé que personne ne t&apos;apprend à franchir.
          </p>

          <p className="text-[1.0625rem] text-[#555] leading-[1.8]">
            Peut-être que tu passes tes journées dans un boulot qui ne te
            ressemble pas, en te disant que le coaching c&apos;est pour bientôt.
            Peut-être que tu coaches déjà, mais cette insécurité sur certains
            sujets, cette impression de ne jamais en savoir assez, elle est
            toujours là. Dans les deux cas, ce n&apos;est pas un problème de
            motivation.
          </p>

          <div className="relative rounded-[20px] border border-[#e5e5e5] bg-[#f8f7f4] p-8 sm:p-12 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#131316] to-transparent" />
            <p className="text-[1.25rem] sm:text-[1.5rem] text-[#888] font-500 mb-2">
              Le vrai problème
            </p>
            <p className="text-[2rem] sm:text-[2.5rem] font-700 text-[#131316] tracking-[-0.03em]">
              C&apos;est la{" "}
              <span className="text-[#e5b80b]">formation.</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stats + graphiques — un peu plus large */}
      <div className="relative z-10 mx-auto max-w-[860px] px-6">
        {/* Titre + texte Nassim */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-700 tracking-[-0.02em] mb-8">
            Le problème des formations traditionnelles
          </h3>

          <div className="space-y-5">
            <p className="text-[1.0625rem] text-[#555] leading-[1.8]">
              La totalité des coachs dépensent 8 000€ et passent 18 mois en
              école pour obtenir leur diplôme.
            </p>
            <p className="text-[1.0625rem] text-[#555] leading-[1.8]">
              Et à la sortie ?{" "}
              <span className="text-[#131316] font-600">
                Ils sont laissés dans la nature.
              </span>
            </p>
            <p className="text-[1.0625rem] text-[#555] leading-[1.8]">
              Pas de nutrition avancée, pas de programmation réelle, rien sur
              comment trouver des clients. Ils reçoivent leur carte pro, mais
              sans aucune idée de comment vivre de leur activité.
            </p>

            <p className="text-[1.0625rem] text-[#555] leading-[1.8]">
              Résultat ? La majorité des diplômés finissent dans l&apos;un de
              ces trois scénarios :
            </p>

            {/* Réalité des diplômés */}
            <div className="grid grid-cols-3 gap-3 my-2">
              <div className="border border-[#e5e5e5] rounded-[16px] p-4 bg-[#f8f7f4] text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#d0d0d0] hover:shadow-md cursor-default group">
                <span className="text-[1.5rem] block mb-2 group-hover:scale-125 transition-transform duration-300">🧹</span>
                <p className="text-[0.8125rem] text-[#131316] font-600 leading-tight">Agent d&apos;entretien</p>
                <p className="text-[0.6875rem] text-[#888] mt-1">Il nettoie la sueur sur les bancs et range les haltères</p>
              </div>
              <div className="border border-[#e5e5e5] rounded-[16px] p-4 bg-[#f8f7f4] text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#d0d0d0] hover:shadow-md cursor-default group">
                <span className="text-[1.5rem] block mb-2 group-hover:scale-125 transition-transform duration-300">👋</span>
                <p className="text-[0.8125rem] text-[#131316] font-600 leading-tight">Agent d&apos;accueil</p>
                <p className="text-[0.6875rem] text-[#888] mt-1">Il fait de la relation client derrière un comptoir</p>
              </div>
              <div className="border border-[#e5e5e5] rounded-[16px] p-4 bg-[#f8f7f4] text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#d0d0d0] hover:shadow-md cursor-default group">
                <span className="text-[1.5rem] block mb-2 group-hover:scale-125 transition-transform duration-300">🔄</span>
                <p className="text-[0.8125rem] text-[#131316] font-600 leading-tight">Reconversion</p>
                <p className="text-[0.6875rem] text-[#888] mt-1">Il quitte le métier et retourne à la case départ</p>
              </div>
            </div>
            <p className="text-[1.25rem] font-700 text-[#131316] tracking-[-0.02em]">
              Et ce n&apos;est pas juste mon avis,{" "}
              <span className="text-[#e5b80b]">les chiffres parlent d&apos;eux-mêmes.</span>
            </p>
          </div>
        </motion.div>

        {/* Stats cards */}
        <div className="grid md:grid-cols-3 border border-[#e5e5e5] rounded-[20px] overflow-hidden mb-10">
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              className={`p-6 lg:p-8 bg-[#f7f7f7] text-center ${
                i < PAIN_POINTS.length - 1
                  ? "md:border-r border-b md:border-b-0 border-[#e5e5e5]"
                  : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full border border-[#e5e5e5] bg-white flex items-center justify-center mb-4 mx-auto">
                <point.icon size={20} weight="regular" className="text-[#131316]" />
              </div>
              <div className="text-[2rem] lg:text-[2.5rem] font-700 text-[#e5b80b] tracking-[-0.02em] mb-2">
                {point.stat}
              </div>
              <p className="text-[0.875rem] text-[#555] leading-[1.5] mb-3">{point.text}</p>
              <p className="text-[0.6875rem] text-[#aaa] italic">{point.source}</p>
            </motion.div>
          ))}
        </div>

        {/* Graphiques */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {/* Graphique 1 : Taux d'abandon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <UserMinus size={16} weight="fill" className="text-[#e5b80b]" />
              <p className="text-[0.6875rem] text-[#888] font-500 uppercase tracking-[0.05em]">
                Taux d&apos;abandon après 5 ans
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "BPJEPS", value: 85, color: "#131316" },
                { label: "STAPS", value: 78, color: "#131316" },
                { label: "CQP", value: 70, color: "#131316" },
                { label: "FMCS", value: 12, color: "#e5b80b" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-[0.8125rem] mb-1.5">
                    <span className="font-500 text-[#131316]">{item.label}</span>
                    <span className="font-700" style={{ color: item.color }}>
                      {item.value}%
                    </span>
                  </div>
                  <div className="h-2.5 rounded-full bg-[#f0f0f0] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.value}%` } : {}}
                      transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Graphique 2 : Compétences couvertes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <BookOpen size={16} weight="fill" className="text-[#e5b80b]" />
              <p className="text-[0.6875rem] text-[#888] font-500 uppercase tracking-[0.05em]">
                Compétences couvertes
              </p>
            </div>
            <table className="w-full text-[0.8125rem]">
              <thead>
                <tr className="border-b border-[#e5e5e5]">
                  <th className="text-left py-2.5 pr-3 font-500 text-[#888]" />
                  <th className="text-center py-2.5 px-2 font-500 text-[#888]">BPJEPS</th>
                  <th className="text-center py-2.5 px-2 font-500 text-[#888]">STAPS</th>
                  <th className="text-center py-2.5 px-2 font-600 text-[#e5b80b]">FMCS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { skill: "Anatomie", bpjeps: true, staps: true, fmcs: true },
                  { skill: "Nutrition avancée", bpjeps: false, staps: false, fmcs: true },
                  { skill: "Programmation", bpjeps: false, staps: true, fmcs: true },
                  { skill: "Suivi client", bpjeps: false, staps: false, fmcs: true },
                  { skill: "Trouver des clients", bpjeps: false, staps: false, fmcs: true },
                  { skill: "Créer son entreprise", bpjeps: false, staps: false, fmcs: true },
                ].map((row) => (
                  <tr key={row.skill} className="border-b border-[#f0f0f0]">
                    <td className="py-2.5 pr-3 text-[#131316] font-500">{row.skill}</td>
                    <td className="text-center py-2.5 px-2">
                      <span className={row.bpjeps ? "text-[#131316]" : "text-[#d0d0d0]"}>
                        {row.bpjeps ? "✓" : "✗"}
                      </span>
                    </td>
                    <td className="text-center py-2.5 px-2">
                      <span className={row.staps ? "text-[#131316]" : "text-[#d0d0d0]"}>
                        {row.staps ? "✓" : "✗"}
                      </span>
                    </td>
                    <td className="text-center py-2.5 px-2">
                      <span className="text-[#e5b80b] font-700">✓</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Bloc transition — accroche */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 mb-10"
        >
          <p className="text-[1.25rem] sm:text-[1.5rem] font-700 text-[#131316] tracking-[-0.02em] leading-[1.3]">
            Et si vous lisez ces lignes aujourd&apos;hui, c&apos;est que vous
            aussi vous avez senti que quelque chose clochait.
          </p>
        </motion.div>

        {/* 2 profils en cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="grid md:grid-cols-2 gap-5 mb-10"
        >
          <div className="border border-[#e5e5e5] rounded-[20px] p-6 bg-[#f8f7f4] transition-all duration-300 hover:-translate-y-1 hover:border-[#d0d0d0] hover:shadow-md cursor-default group">
            <span className="text-[1.5rem] mb-3 block group-hover:scale-125 transition-transform duration-300">🤔</span>
            <p className="text-[0.9375rem] font-600 text-[#131316] mb-3">
              Vous n&apos;avez pas encore sauté le pas
            </p>
            <p className="text-[0.875rem] text-[#555] leading-[1.7]">
              BPJEPS, CQP, formation privée… vous ne savez pas par où commencer
              et cette confusion vous paralyse depuis des mois, peut-être des
              années.
            </p>
          </div>
          <div className="border border-[#e5e5e5] rounded-[20px] p-6 bg-[#f8f7f4] transition-all duration-300 hover:-translate-y-1 hover:border-[#d0d0d0] hover:shadow-md cursor-default group">
            <span className="text-[1.5rem] mb-3 block group-hover:scale-125 transition-transform duration-300">😓</span>
            <p className="text-[0.9375rem] font-600 text-[#131316] mb-3">
              Vous coachez déjà, mais vous improvisez
            </p>
            <p className="text-[0.875rem] text-[#555] leading-[1.7]">
              Une pathologie complexe. Un plan nutritionnel. Un client qui stagne.
              Les lacunes vous coûtent en clients perdus, tarifs sous-évalués et
              en légitimité.
            </p>
          </div>
        </motion.div>

        {/* Constat encadré */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-l-4 border-[#e5b80b] pl-6 py-2 mb-10"
        >
          <p className="text-[1.0625rem] text-[#555] leading-[1.8]">
            Dans les deux cas, le constat est le même : une formation complète,
            des bases scientifiques jusqu&apos;à la finalité d&apos;avoir des
            clients et de les garder,{" "}
            <span className="text-[#131316] font-600">
              ça n&apos;existe pas dans les cursus classiques.
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="relative rounded-[20px] border border-[#e5b80b]/30 bg-gradient-to-r from-[#e5b80b]/5 via-[#e5b80b]/10 to-[#e5b80b]/5 p-8 sm:p-10 text-center overflow-hidden"
            style={{ boxShadow: "0 0 50px rgba(229,184,11,0.06)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e5b80b]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e5b80b]/40 to-transparent" />
            <Image
              src="/images/favicon.png"
              alt=""
              width={36}
              height={36}
              className="w-9 h-9 rounded-xl mx-auto mb-4 opacity-80"
            />
            <p className="text-[1.5rem] sm:text-[2rem] font-700 text-[#131316] tracking-[-0.02em]">
              C&apos;est pour ça que la{" "}
              <span className="text-[#e5b80b]">FMCS</span> existe.
            </p>
          </div>
        </motion.div>

        {/* --- QUI SUIS-JE --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 mb-20"
        >
          <div className="text-center mb-10">
            <div className="pretag mx-auto w-fit mb-6">
              👤 Le fondateur
            </div>
            <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-700 tracking-[-0.02em]">
              Qui suis-je pour dire ça ?
            </h3>
          </div>

          <div className="grid md:grid-cols-[320px_1fr] gap-8 items-start">
            {/* Photo */}
            <div>
              <div className="rounded-[20px] overflow-hidden border border-[#e5e5e5] mb-4 aspect-[3/4]">
                <Image
                  src="/images/nassim-fondateur.jpg"
                  alt="Nassim Sahili"
                  width={320}
                  height={427}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-[1.125rem] font-700 text-[#131316]">Nassim Sahili</p>
                <p className="text-[0.8125rem] text-[#e5b80b] font-600">Fondateur de la FMCS</p>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-5">
              <p className="text-[1.0625rem] text-[#555] leading-[1.8]">
                Pratiquant de musculation depuis 2006. Coach diplômé d&apos;État
                depuis 2011.{" "}
                <span className="text-[#131316] font-600">
                  20 ans à tester sur mon propre corps,
                </span>{" "}
                puis 15 ans à appliquer tout ça sur des dizaines de milliers
                d&apos;élèves.
              </p>

              {/* Credentials */}
              <div className="space-y-3">
                {[
                  "1M+ d'abonnés sur YouTube, la plus grosse chaîne francophone sur la musculation",
                  "Des dizaines de milliers de transformations accompagnées depuis 2011",
                  "Créateur des programmes FITMASS depuis 2016",
                  "Fondateur de la FMCS en 2021, mon école pour former les meilleurs coachs",
                  "Créateur de Coalition Nutrition en 2023, ma marque de compléments alimentaires",
                  "Propriétaire de deux salles de sport, chaque jour au plus près du terrain",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#e5b80b] mt-1 shrink-0">›</span>
                    <p className="text-[0.9375rem] text-[#555] leading-[1.6]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-[1.0625rem] text-[#555] leading-[1.8]">
                La FMCS, c&apos;est le résultat de tout ça.{" "}
                <span className="text-[#131316] font-600">
                  Un système que j&apos;ai d&apos;abord construit pour moi,
                </span>{" "}
                puis adapté pour former les meilleurs coachs du marché.
              </p>
            </div>
          </div>
        </motion.div>

        {/* --- 5 PILIERS intro --- */}
        <div className="divider-fade mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mb-10"
        >
          <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-700 tracking-[-0.02em] mb-4">
            La carrière d&apos;un coach qui réussit repose<br />
            sur{" "}<span className="text-[#e5b80b]">ces 5 piliers.</span>
          </h3>
          <p className="text-[1.0625rem] text-[#555] leading-[1.7] max-w-[560px] mx-auto">
            Tout part de la valeur que vous apportez à vos clients,
            autrement dit votre{" "}
            <span className="text-[#131316] font-600">Offre.</span>
            <br />
            Et votre offre repose sur 5 piliers{" "}
            <span className="text-[#131316] font-600">indissociables :</span>
          </p>

          {/* Les 5 piliers */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-8">
            {[
              { num: "01", name: "L'Anatomie & Physiologie", emoji: "🧠" },
              { num: "02", name: "La Nutrition & Récupération", emoji: "🥗" },
              { num: "03", name: "La Programmation", emoji: "🏋️" },
              { num: "04", name: "Le Suivi Client", emoji: "🤝" },
              { num: "05", name: "Le Réseau & Business", emoji: "💼" },
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="border border-[#e5e5e5] rounded-[16px] p-4 bg-white text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#e5b80b]/30 hover:shadow-md cursor-default group"
              >
                <span className="text-[1.25rem] block mb-2 group-hover:scale-125 transition-transform duration-300">{pillar.emoji}</span>
                <p className="text-[0.6875rem] text-[#e5b80b] font-600 mb-1">{pillar.num}</p>
                <p className="text-[0.8125rem] font-600 text-[#131316] leading-tight">{pillar.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Warning text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mb-10 space-y-4"
        >
          <p className="text-[1.0625rem] text-[#555] leading-[1.8]">
            Par exemple, se consacrer uniquement au réseau sans soigner
            l&apos;accompagnement client ? Vous enchaînez les clients qui vous
            oublient très vite.
          </p>
          <p className="text-[1.0625rem] text-[#131316] font-600 leading-[1.8]">
            Délaisser un pilier au profit d&apos;un autre n&apos;est pas viable
            sur le long terme.
          </p>
        </motion.div>

        {/* Comparaison rapide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid grid-cols-3 gap-3 mb-10 text-center"
        >
          <div className="border border-[#e5e5e5] rounded-[16px] p-4 bg-[#f8f7f4]">
            <p className="text-[0.75rem] text-[#888] mb-1">BPJEPS</p>
            <p className="text-[1.5rem] font-700 text-[#131316]">2<span className="text-[0.875rem] text-[#888] font-500">/5</span></p>
            <p className="text-[0.6875rem] text-[#aaa]">piliers couverts</p>
          </div>
          <div className="border border-[#e5e5e5] rounded-[16px] p-4 bg-[#f8f7f4]">
            <p className="text-[0.75rem] text-[#888] mb-1">STAPS</p>
            <p className="text-[1.5rem] font-700 text-[#131316]">3<span className="text-[0.875rem] text-[#888] font-500">/5</span></p>
            <p className="text-[0.6875rem] text-[#aaa]">piliers (à moitié)</p>
          </div>
          <div className="border border-[#e5b80b] rounded-[16px] p-4 bg-gradient-to-b from-[#e5b80b]/10 to-[#c59e08]/5">
            <p className="text-[0.75rem] text-[#e5b80b] font-600 mb-1">FMCS</p>
            <p className="text-[1.5rem] font-700 text-[#e5b80b]">5<span className="text-[0.875rem] text-[#c59e08] font-500">/5</span></p>
            <p className="text-[0.6875rem] text-[#c59e08]">piliers complets</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="text-center"
        >
          <p className="text-[1.25rem] sm:text-[1.5rem] font-700 text-[#131316] tracking-[-0.02em]">
            La FMCS est la seule vraie formation construite autour de{" "}
            <span className="text-[#e5b80b]">ces 5 piliers.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
