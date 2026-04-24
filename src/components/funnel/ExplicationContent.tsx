import { X } from "@phosphor-icons/react/dist/ssr";
import VidalyticsEmbed from "./VidalyticsEmbed";
import IClosedReveal from "./IClosedReveal";
import FunnelFooter from "./FunnelFooter";
import LiveViewers from "./LiveViewers";

export default function ExplicationContent({
  vslId,
  iClosedUrl,
  iClosedTitle,
}: {
  vslId: string;
  iClosedUrl: string;
  iClosedTitle: string;
}) {
  return (
    <>
      <div className="bg-[#FEF3C7] border-b border-[#FCD34D]">
        <div className="mx-auto max-w-[1100px] px-6 py-3">
          <p className="text-center text-[0.875rem] text-[#92400E] font-600">
            ⚠️ Message de Nassim :{" "}
            <em className="italic font-500">
              «&nbsp;Ne ferme pas cette page, parce que j&apos;ai une annonce
              inédite à te faire.&nbsp;»
            </em>
          </p>
        </div>
      </div>

      <main className="flex-1">
        <section className="pt-4 md:pt-6 pb-12 md:pb-20">
          <div className="mx-auto max-w-[1100px] px-6">
            <h1 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-700 leading-[1.1] tracking-[-0.02em] text-center mb-5 max-w-[860px] mx-auto">
              Comment devenir{" "}
              <span className="text-[#e5b80b]">coach diplômé</span> et gagner{" "}
              <span className="text-[#e5b80b]">+ de 3&nbsp;000&nbsp;€/mois</span>{" "}
              ?
            </h1>

            <ul className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:justify-center gap-x-5 gap-y-1.5 mb-6 text-[#555] text-[0.9375rem]">
              {[
                "Sans passer par une formation classique",
                "Sans dépenser 8 000 €",
                "Sans attendre 3 ans pour être formé",
              ].map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 whitespace-nowrap"
                >
                  <X
                    size={16}
                    weight="bold"
                    className="text-[#ef4444] shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <LiveViewers />

            <div className="max-w-[900px] mx-auto rounded-2xl sm:rounded-3xl p-[2px] animate-gold-gradient shadow-[0_8px_40px_rgba(229,184,11,0.25)]">
              <div className="rounded-[14px] sm:rounded-[22px] bg-[#131316] overflow-hidden">
                <VidalyticsEmbed vslId={vslId} />
              </div>
            </div>

            <IClosedReveal url={iClosedUrl} title={iClosedTitle} />
          </div>
        </section>
      </main>

      <FunnelFooter />
    </>
  );
}
