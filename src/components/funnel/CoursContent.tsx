import Image from "next/image";
import { ArrowRight, CheckCircle, X } from "@phosphor-icons/react/dist/ssr";
import FunnelFooter from "./FunnelFooter";
import TallyPopup from "./TallyPopup";
import ExitIntentPopup from "./ExitIntentPopup";
import FunnelSocialNotif from "./FunnelSocialNotif";

export default function CoursContent({
  tallySrc,
  tallyTitle,
}: {
  tallySrc: string;
  tallyTitle: string;
}) {
  return (
    <>
      <main className="flex-1 marble-bg">
        <section className="py-6 md:py-10">
          <div className="mx-auto max-w-[860px] px-6 text-center">
            <div className="mb-5 flex flex-col items-center gap-2">
              <div
                className="inline-flex items-center gap-3 rounded-2xl border border-[#e5b80b]/30 bg-white px-4 py-2.5"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(229,184,11,0.2), 0 0 40px rgba(229,184,11,0.45), 0 0 80px rgba(229,184,11,0.25)",
                }}
              >
                <div className="relative shrink-0">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#e5e5e5]">
                    <Image
                      src="/images/nassim-sahili-ytb.webp"
                      alt="Nassim Sahili"
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <span
                    className="absolute -bottom-0.5 -right-0.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#0066FF] ring-2 ring-white"
                    aria-label="Compte certifié"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-2.5 w-2.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[0.8125rem] font-bold tracking-tight text-[#131316] md:text-[0.875rem]">
                    Masterclass de Nassim Sahili
                  </span>
                  <span className="text-[0.75rem] tracking-tight text-[#555] md:text-[0.8125rem]">
                    Coach à +1 million d&apos;abonnés sur YouTube
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-[clamp(2rem,5vw,2.75rem)] font-700 leading-[1.15] tracking-[-0.02em] mb-3">
              Comment devenir{" "}
              <span className="text-[#e5b80b]">coach diplômé</span> et gagner{" "}
              <span className="text-[#e5b80b]">+ de 3&nbsp;000&nbsp;€/mois</span>{" "}
              ?
            </h1>

            <ul className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:justify-center gap-x-4 gap-y-2 sm:gap-y-1.5 mb-4 text-[#131316] text-[1.0625rem] md:text-[0.9375rem] font-500">
              {[
                "Sans passer par une formation classique",
                "Sans dépenser 8 000 €",
                "Sans attendre 3 ans pour être formé",
              ].map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap"
                >
                  <X
                    size={18}
                    weight="bold"
                    className="text-[#ef4444] shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#capture"
              aria-label="Accéder à la masterclass"
              className="glass-card aspect-[16/9] overflow-hidden relative max-w-[520px] mx-auto mb-4 mt-4 block cursor-pointer transition-transform hover:scale-[1.01]"
            >
              <Image
                src="/images/nassim-fmcs.gif"
                alt="Nassim Sahili — Masterclass FMCS"
                fill
                className="object-cover"
                unoptimized
                priority
              />
            </a>

            <div className="block">
              <a href="#capture" className="red-button inline-block">
                <span className="red-button-inner text-[0.9375rem] px-8 py-3">
                  Accéder à la Masterclass (OFFERTE)
                  <ArrowRight size={16} weight="bold" />
                </span>
              </a>
            </div>

            <p className="text-[0.8125rem] text-[#555] mt-3">
              <strong className="text-[#131316]">+24&nbsp;191 coachs</strong>{" "}
              l&apos;ont déjà suivi 🇫🇷
            </p>

            <div className="glass-card mt-10 p-6 md:p-8 max-w-[560px] mx-auto text-left">
              <p className="text-[1.125rem] md:text-[1.0625rem] font-700 text-[#131316] leading-[1.25] mb-5 text-center">
                Ce que tu vas apprendre dans cette vidéo :
              </p>
              <ul className="flex flex-col items-start gap-2">
                {[
                  "Est-ce que le marché du coaching sportif est saturé ?",
                  "Faut-il vraiment faire 3 ans d'étude et payer 8 000 € pour l'être ?",
                  "Combien gagne un coach en 2026 ?",
                  "Comment tu vas pouvoir devenir coach sportif en seulement 6 mois ?",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[1rem] md:text-[0.9375rem] leading-[1.4] text-[#131316]"
                  >
                    <CheckCircle
                      size={22}
                      weight="fill"
                      className="text-[#e5b80b] shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <FunnelFooter />
      <TallyPopup tallySrc={tallySrc} title={tallyTitle} />
      <ExitIntentPopup />
      <FunnelSocialNotif />
    </>
  );
}
