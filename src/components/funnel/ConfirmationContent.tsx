import Image from "next/image";
import {
  ArrowRight,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import FunnelFooter from "./FunnelFooter";
import VidalyticsEmbed from "./VidalyticsEmbed";

export default function ConfirmationContent({
  vslId,
}: {
  vslId?: string;
}) {
  return (
    <>
      <main className="flex-1">
        {/* LOGO TOP */}
        <header className="marble-bg pt-6 md:pt-8 pb-0 flex justify-center">
          <Image
            src="/images/favicon.png"
            alt="FMCS"
            width={56}
            height={56}
            priority
            className="h-10 w-10 md:h-12 md:w-12 rounded-xl"
          />
        </header>

        {/* HERO */}
        <section className="pt-4 pb-0 marble-bg">
          <div className="mx-auto max-w-[860px] px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-[#e5e5e5] rounded-full px-4 py-2 mb-5 shadow-[0_2px_8px_rgba(0,0,0,0.05)] mx-auto">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e5b80b] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e5b80b]" />
              </span>
              <span className="text-[0.75rem] md:text-[0.8125rem] text-[#131316] font-700 uppercase tracking-[0.1em]">
                En cours de validation
                <span
                  className="animate-pulse-dot"
                  style={{ animationDelay: "0ms" }}
                >
                  .
                </span>
                <span
                  className="animate-pulse-dot"
                  style={{ animationDelay: "200ms" }}
                >
                  .
                </span>
                <span
                  className="animate-pulse-dot"
                  style={{ animationDelay: "400ms" }}
                >
                  .
                </span>
              </span>
            </div>
            <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-700 leading-[1.15] tracking-[-0.02em] mb-10">
              Félicitations, nous sommes en train d&apos;analyser ta
              candidature à la{" "}
              <span className="text-[#e5b80b]">FMCS</span>
              <span
                className="animate-pulse-dot"
                style={{ animationDelay: "0ms" }}
              >
                .
              </span>
              <span
                className="animate-pulse-dot"
                style={{ animationDelay: "200ms" }}
              >
                .
              </span>
              <span
                className="animate-pulse-dot"
                style={{ animationDelay: "400ms" }}
              >
                .
              </span>
            </h1>

            <div className="max-w-[720px] md:max-w-none mx-auto space-y-5 text-left">
              <div className="flex items-center gap-4 p-4 md:px-6 md:py-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 md:justify-center">
                <WhatsappLogo
                  size={28}
                  weight="fill"
                  className="text-[#25D366] shrink-0"
                />
                <p className="text-[0.875rem] md:text-[0.9375rem] text-[#131316] leading-[1.5] md:whitespace-nowrap">
                  Pour valider ton rendez-vous, un conseiller va te contacter
                  d&apos;ici peu via <strong>WhatsApp ou SMS</strong>.
                </p>
              </div>

              <div className="relative p-5 md:p-6 rounded-2xl border-2 border-[#ef4444]/50 bg-[#ef4444]/10 shadow-[0_4px_16px_rgba(239,68,68,0.1)]">
                <div className="flex items-start gap-3 mb-3">
                  <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#ef4444] text-white text-[0.875rem] font-700">
                    !
                  </span>
                  <p className="text-[0.9375rem] md:text-[1rem] text-[#131316] leading-[1.55]">
                    <strong className="text-[#ef4444]">Important :</strong>
                    {" "}Ton rendez-vous sera annulé en cas d&apos;absence{" "}
                    <em>sans prévenir</em>
                    {" "}et tu n&apos;auras plus la possibilité de rejoindre
                    la FMCS.
                  </p>
                </div>
                <div className="pl-11">
                  <p className="text-[0.9375rem] md:text-[1rem] text-[#555] leading-[1.55]">
                    <strong className="text-[#131316]">Pourquoi ?</strong>
                    {" "}Ton temps est précieux et celui de mes équipes aussi.
                    Il est important d&apos;honorer le rendez-vous ou de
                    prévenir si tu préfères le décaler ou l&apos;annuler.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-700 leading-[1.15] tracking-[-0.02em] mt-12 md:mt-14">
              En attendant ton rendez-vous, suis ces{" "}
              <span
                style={{
                  background:
                    "linear-gradient(180deg, transparent 55%, #fde047 55%)",
                  padding: "0 6px",
                  boxDecorationBreak: "clone",
                  WebkitBoxDecorationBreak: "clone",
                }}
              >
                4 étapes
              </span>{" "}
              :
            </h2>
          </div>
        </section>

        {/* LES 4 ÉTAPES — cartes blanches distinctes */}
        <section className="py-10 md:py-16 marble-bg section-border">
          <div className="mx-auto max-w-[900px] px-6 space-y-4 md:space-y-5">
            {/* ÉTAPE 01 — Vidéo */}
            <div className="glass-card p-5 md:p-8">
              <p className="text-[0.75rem] md:text-[0.8125rem] font-700 text-[#e5b80b] uppercase tracking-[0.12em] mb-2">
                Étape 1
              </p>
              <h2 className="text-[1.5rem] md:text-[1.875rem] font-700 leading-[1.2] mb-2">
                Regarde cette vidéo
              </h2>
              <p className="text-[#555] leading-[1.6] mb-6">
                Elle répond aux questions les plus fréquentes avant
                d&apos;arriver en appel.
              </p>
              <div className="-mx-5 md:mx-0">
                {vslId ? (
                  <div className="rounded-2xl overflow-hidden md:border border-[#e5e5e5] bg-[#131316]">
                    <VidalyticsEmbed vslId={vslId} />
                  </div>
                ) : (
                  <div className="rounded-2xl md:border border-dashed border-[#e5e5e5] bg-[#f8f7f4] aspect-[16/9] flex items-center justify-center text-[#888] text-[0.875rem]">
                    [VSL Vidalytics à fournir]
                  </div>
                )}
              </div>
            </div>

            {/* ÉTAPE 02 — Notez la date */}
            <div className="glass-card p-5 md:p-8">
              <p className="text-[0.75rem] md:text-[0.8125rem] font-700 text-[#e5b80b] uppercase tracking-[0.12em] mb-2">
                Étape 2
              </p>
              <h3 className="text-[1.5rem] md:text-[1.875rem] font-700 leading-[1.2] mb-3">
                Note la date du rendez-vous et clique sur{" "}
                <span className="text-[#e5b80b]">«&nbsp;Oui&nbsp;»</span>
              </h3>
              <p className="text-[#555] leading-[1.6] mb-4">
                Vous avez reçu toutes les informations par email. Il te
                suffit de cliquer sur{" "}
                <strong className="text-[#131316]">
                  &laquo;&nbsp;Oui&nbsp;&raquo;
                </strong>{" "}
                en bas du mail pour confirmer ta présence.
              </p>
              <div className="rounded-[16px] border border-[#e5e5e5] overflow-hidden bg-white max-w-[520px]">
                <Image
                  src="/images/valider-rdv.png"
                  alt="Exemple du bouton Oui dans l'email de confirmation"
                  width={1040}
                  height={520}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* ÉTAPE 03 — Témoignages */}
            <div className="glass-card p-5 md:p-8">
              <p className="text-[0.75rem] md:text-[0.8125rem] font-700 text-[#e5b80b] uppercase tracking-[0.12em] mb-2">
                Étape 3
              </p>
              <h3 className="text-[1.5rem] md:text-[1.875rem] font-700 leading-[1.2] mb-2">
                Regarde ce que Matheo et Emma ont vécu à la{" "}
                <span className="text-[#e5b80b]">FMCS</span>
              </h3>
              <p className="text-[#555] leading-[1.6] mb-6">
                Deux coachs diplômés qui racontent leur transformation.
              </p>

              <div className="-mx-5 md:mx-0 flex flex-col gap-4">
                <div className="rounded-[16px] bg-[#131316] md:border border-[#e5e5e5] overflow-hidden">
                  <div
                    id="vidalytics_embed_m9nQeSqmgdeuJEqd"
                    style={{
                      width: "100%",
                      position: "relative",
                      paddingTop: "56.25%",
                    }}
                  />
                  <div className="p-4">
                    <p className="text-[0.8125rem] text-white/70 italic mb-2">
                      &ldquo;Sans la FMCS, je n&apos;aurais jamais pu être
                      coach, alors que j&apos;avais deux BPJEPS !&rdquo;
                    </p>
                    <p className="text-[0.75rem] font-600 text-white">
                      Matheo
                    </p>
                    <p className="text-[0.6875rem] text-white/40">
                      Coach diplômé de la FMCS
                    </p>
                  </div>
                </div>

                <div className="rounded-[16px] bg-[#131316] md:border border-[#e5e5e5] overflow-hidden">
                  <div
                    id="vidalytics_embed_iLskrr4hQB2EHZrU"
                    style={{
                      width: "100%",
                      position: "relative",
                      paddingTop: "56.25%",
                    }}
                  />
                  <div className="p-4">
                    <p className="text-[0.8125rem] text-white/70 italic mb-2">
                      &ldquo;J&apos;ai fait plusieurs formations avant la FMCS
                      pour devenir coach et c&apos;est la seule où j&apos;ai
                      vraiment appris le métier.&rdquo;
                    </p>
                    <p className="text-[0.75rem] font-600 text-white">Emma</p>
                    <p className="text-[0.6875rem] text-white/40">
                      Coach diplômée de la FMCS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ÉTAPE 04 — Visite le site */}
            <div className="glass-card p-5 md:p-8">
              <p className="text-[0.75rem] md:text-[0.8125rem] font-700 text-[#e5b80b] uppercase tracking-[0.12em] mb-2">
                Étape 4
              </p>
              <h3 className="text-[1.5rem] md:text-[1.875rem] font-700 leading-[1.2] mb-3">
                Visite notre site internet
              </h3>
              <p className="text-[#555] mb-6 leading-[1.6]">
                Pour avoir toutes les informations sur
                l&apos;accompagnement.
              </p>
              <a
                href="https://www.fitmass.school"
                className="red-button inline-block mb-8"
              >
                <span className="red-button-inner text-[0.9375rem] px-8 py-3">
                  Visiter le site
                  <ArrowRight size={16} weight="bold" />
                </span>
              </a>
              <p className="text-[0.9375rem] text-[#555]">
                Une question ? Écris-nous à{" "}
                <a
                  href="mailto:contact@fitmass.school"
                  className="text-[#131316] font-600 underline underline-offset-2"
                >
                  contact@fitmass.school
                </a>
              </p>
              <p className="text-[0.8125rem] text-[#888] mt-2">
                Nous répondrons le plus vite possible sauf le week-end.
              </p>
            </div>
          </div>
        </section>

      </main>

      <FunnelFooter />
    </>
  );
}
