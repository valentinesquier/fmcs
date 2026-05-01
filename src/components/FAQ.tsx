"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus, Question } from "@phosphor-icons/react";
import GridLines from "./GridLines";

const QUESTIONS = [
  {
    q: "BPJEPS, STAPS, CQP ou FMCS : lequel choisir ?",
    a: "La carte professionnelle est obligatoire pour exercer en salle, club ou association. En dehors, coaching en ligne, à domicile ou en extérieur, vous pouvez vous lancer en toute légalité. La FMCS vous accompagne directement vers le CQP, la voie la plus rapide et la moins chère pour décrocher votre carte pro. Ce que le CQP, le BPJEPS ou le STAPS ne vous apprendront jamais : la nutrition avancée, la programmation poussée, et comment trouver des clients. La FMCS, si.",
  },
  {
    q: "Je n'ai pas le temps avec mon boulot, comment faire ?",
    a: "3h par semaine suffisent pour suivre le programme en 6 mois. La majorité des élèves FMCS ont gardé leur CDI pendant toute la formation. Ils ont trouvé leurs premiers clients en parallèle. Ils ont démissionné quand leurs revenus coaching le permettaient.",
  },
  {
    q: "J'ai déjà un diplôme. La FMCS va vraiment m'apporter quelque chose ?",
    a: "Sébastien a fait deux BPJEPS avant la FMCS. Il dit que c'est « un must ». Parce que la FMCS couvre ce que les formations d'État ne touchent pas : la profondeur scientifique en nutrition, la programmation avancée, et le business, absent de pratiquement tous les diplômes sportifs.",
  },
  {
    q: "Le certificat FMCS est-il reconnu par l'État ?",
    a: "Non, et on ne va pas vous dire le contraire. Pour exercer légalement en salle, il vous faudra un diplôme d'État pour votre carte professionnelle. La FMCS ne remplace pas cette démarche, elle la complète. C'est pourquoi on vous accompagne directement vers le CQP. Vous sortez de la FMCS avec les compétences. Vous passez le CQP pour avoir le papier.",
  },
  {
    q: "Comment se passe l'examen final ?",
    a: "L'examen est conçu pour vérifier que vous êtes prêt à encadrer des clients. Vous pouvez le passer à la fin de la formation. À l'issue, vous recevez votre certificat FMCS signé par Nassim, avec la possibilité d'accéder à la carte pro si vous ne l'avez pas encore.",
  },
  {
    q: "Ça coûte combien ?",
    a: "Bien moins cher qu'un BPJEPS ou un STAPS (qui coûtent en moyenne +8 000€), pour une formation bien plus complète. Le prix exact est révélé durant l'appel découverte, car il dépend de votre profil et de vos objectifs.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#e5e5e5] bg-white rounded-[16px] overflow-hidden transition-all duration-300 hover:border-[#d0d0d0]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left group"
      >
        <span className="text-[#131316] font-500 pr-4 group-hover:text-[#e5b80b] transition-colors duration-200">
          {q}
        </span>
        <span className="shrink-0 w-8 h-8 rounded-full border border-[#e5e5e5] bg-[#f8f7f4] flex items-center justify-center text-[#555] group-hover:text-[#e5b80b] group-hover:border-[#e5b80b33] transition-all duration-200">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-[#e5e5e5]">
              <p className="text-[#555] leading-[1.6] pt-4">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="relative py-[128px] section-border bg-white overflow-hidden">
      <GridLines />
      <div className="relative z-10 mx-auto max-w-[76.875rem] px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-[100px]"
          >
            <div className="pretag mb-8">
              <Question size={14} weight="fill" className="text-[#e5b80b]" />
              FAQ
            </div>
            <h2
              className="text-[clamp(2rem,4vw,3.875rem)] font-600 leading-[1.1] tracking-[-0.02em] mb-6"
              style={{ fontFamily: "var(--font-instrument), system-ui" }}
            >
              Questions fréquentes
            </h2>
            <p className="text-[1.125rem] text-[#555] leading-[1.5] max-w-[480px]">
              Tout ce que vous avez besoin de savoir avant de rejoindre la FMCS. Une
              question en plus ? Réserve votre appel découverte.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {QUESTIONS.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
