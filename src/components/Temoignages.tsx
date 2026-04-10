"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Star, ChatCircleDots, Play, ArrowDown } from "@phosphor-icons/react";
import GridLines from "./GridLines";


export default function Temoignages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="temoignages"
      ref={ref}
      className="relative py-[128px] section-border marble-bg overflow-hidden"
    >
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
            <ChatCircleDots size={14} weight="fill" className="text-[#e5b80b]" />
            Témoignages
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-700 leading-[1.1] tracking-[-0.02em] mb-4">
            Ce que nos élèves pensent de la{" "}
            <span className="text-[#e5b80b]">FMCS</span>.
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} weight="fill" className={i < 4 ? "text-[#e5b80b]" : "text-[#e5b80b66]"} />
              ))}
            </div>
            <span className="text-[1rem] font-600 text-[#131316]">4.2/5</span>
            <span className="text-[0.875rem] text-[#555]">sur Trustpilot</span>
          </div>
        </motion.div>

        {/* Vidéo témoignages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-4 mb-10"
        >
            {/* Matheo */}
          <div className="rounded-[16px] bg-[#131316] border border-[#e5e5e5] overflow-hidden">
            <div
              id="vidalytics_embed_m9nQeSqmgdeuJEqd"
              style={{ width: "100%", position: "relative", paddingTop: "56.25%" }}
            />
            <div className="p-4">
              <p className="text-[0.8125rem] text-white/70 italic mb-2">
                &ldquo;Sans la FMCS, je n&apos;aurais jamais pu être coach, alors que j&apos;avais deux BPJEPS !&rdquo;
              </p>
              <p className="text-[0.75rem] font-600 text-white">Matheo</p>
              <p className="text-[0.6875rem] text-white/40">Coach diplômé de la FMCS</p>
            </div>
          </div>

          {/* Emma */}
          <div className="rounded-[16px] bg-[#131316] border border-[#e5e5e5] overflow-hidden">
            <div
              id="vidalytics_embed_iLskrr4hQB2EHZrU"
              style={{ width: "100%", position: "relative", paddingTop: "56.25%" }}
            />
            <div className="p-4">
              <p className="text-[0.8125rem] text-white/70 italic mb-2">
                &ldquo;J&apos;ai fait plusieurs formations avant la FMCS pour devenir coach et c&apos;est la seule où j&apos;ai vraiment appris le métier.&rdquo;
              </p>
              <p className="text-[0.75rem] font-600 text-white">Emma</p>
              <p className="text-[0.6875rem] text-white/40">Coach diplômée de la FMCS</p>
            </div>
          </div>
        </motion.div>

        {/* 6 avis Trustpilot — screenshots */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[1, 2, 3, 4, 5, 6].map((num, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="border border-[#e5e5e5] rounded-[16px] bg-white overflow-hidden hover:border-[#d0d0d0] transition-all duration-300"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
            >
              <Image
                src={`/images/temoignage-${num}.png`}
                alt={`Avis Trustpilot FMCS #${num}`}
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </div>

        {/* Bouton voir plus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="#mur-temoignages"
            className="inline-flex items-center gap-2 border border-[#e5e5e5] bg-white rounded-full px-6 py-3 text-[0.875rem] font-600 text-[#131316] hover:border-[#d0d0d0] hover:bg-[#f8f7f4] transition-all duration-200"
          >
            Voir plus d&apos;avis
            <ArrowDown size={16} weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
