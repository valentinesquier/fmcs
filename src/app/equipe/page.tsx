import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "L'équipe FMCS — Nassim Sahili et les 3 formateurs",
  description:
    "Découvrez l'équipe FMCS : Nassim Sahili (fondateur, BPJEPS 2011, créateur Fitmass 1,2M abonnés), Harry, Cédric et Johanna. Quatre coachs au service de votre formation.",
  alternates: { canonical: `${SITE_URL}/equipe` },
  openGraph: {
    title: "L'équipe FMCS — quatre coachs, une seule école",
    description:
      "Quatre coachs spécialisés. Chacun enseigne un pilier qu'il pratique au quotidien dans son métier.",
    url: `${SITE_URL}/equipe`,
    type: "website",
    images: [
      {
        url: "/images/nassim-fondateur.webp",
        width: 1024,
        height: 1024,
        alt: "Nassim Sahili, fondateur de FMCS",
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE_URL}/#organization`,
  name: "FMCS — Fitmass Coaching School",
  url: SITE_URL,
  founder: { "@id": `${SITE_URL}/#nassim-sahili` },
  employee: [
    { "@id": `${SITE_URL}/#nassim-sahili` },
    {
      "@type": "Person",
      name: "Harry",
      jobTitle:
        "Formateur multi-sport · Éducateur sportif diplômé STAPS",
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Person",
      name: "Cédric",
      jobTitle: "Formateur programmation d'entraînement",
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Person",
      name: "Johanna",
      jobTitle: "Diététicienne-nutritionniste du sport",
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "L'équipe",
      item: `${SITE_URL}/equipe`,
    },
  ],
};

type FormateurCardProps = {
  initiale: string;
  eyebrow: string;
  nom: string;
  role: string;
  bio: string;
};

function FormateurCard({
  initiale,
  eyebrow,
  nom,
  role,
  bio,
}: FormateurCardProps) {
  return (
    <div className="not-prose rounded-2xl border border-[#e5e5e5] bg-[#f8f7f4] p-7 flex flex-col items-center text-center">
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center mb-5 shadow-sm"
        style={{
          background: "linear-gradient(135deg, #e5b80b 0%, #c59e08 100%)",
        }}
        aria-hidden="true"
      >
        <span className="text-white font-700 text-[2.5rem] leading-none">
          {initiale}
        </span>
      </div>
      <p className="text-[0.6875rem] font-700 uppercase tracking-[0.15em] text-[#e5b80b] mb-2">
        {eyebrow}
      </p>
      <h3 className="text-[1.25rem] font-700 text-[#131316] mb-1 leading-tight">
        {nom}
      </h3>
      <p className="text-[0.875rem] text-[#888] mb-4 font-500">{role}</p>
      <p className="text-[0.9375rem] leading-[1.7] text-[#2a2a2a]">{bio}</p>
      <p className="text-[0.75rem] text-[#888] italic mt-4">
        Bio détaillée à venir
      </p>
    </div>
  );
}

export default function EquipePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="pt-[100px] pb-20 bg-white">
        {/* Breadcrumb */}
        <nav
          aria-label="Fil d'Ariane"
          className="mx-auto max-w-[860px] px-6 text-[0.8125rem] text-[#888] mb-6"
        >
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#131316] transition-colors">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-[#131316] font-500" aria-current="page">
              L&apos;équipe
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="mx-auto max-w-[860px] px-6 mb-14 text-center">
          <p className="text-[0.6875rem] font-700 uppercase tracking-[0.15em] text-[#e5b80b] mb-3">
            L&apos;équipe FMCS
          </p>
          <h1 className="text-[2rem] sm:text-[2.5rem] font-700 leading-[1.1] tracking-[-0.02em] text-[#131316] mb-5">
            L&apos;équipe FMCS — quatre coachs, une seule école
          </h1>
          <p className="text-[1.0625rem] text-[#555] leading-[1.8] max-w-[680px] mx-auto">
            FMCS s&apos;appuie sur quatre coachs spécialisés. Chacun enseigne
            un pilier qu&apos;il pratique au quotidien dans son métier. Pas de
            formateur généraliste qui survolerait tous les sujets — un expert
            par domaine, pour que chaque module soit enseigné par celui qui le
            maîtrise le mieux.
          </p>
        </header>

        {/* Section Fondateur — carte Nassim pleine largeur */}
        <section
          aria-labelledby="fondateur"
          className="mx-auto max-w-[860px] px-6 mb-12"
        >
          <h2
            id="fondateur"
            className="text-[0.6875rem] font-700 uppercase tracking-[0.15em] text-[#e5b80b] mb-5 text-center"
          >
            Le fondateur
          </h2>
          <article className="rounded-2xl border border-[#e5e5e5] bg-white p-6 sm:p-8 shadow-sm">
            <div className="grid sm:grid-cols-[180px_1fr] gap-6 sm:gap-8 items-center">
              <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden border-2 border-[#e5e5e5] shrink-0 mx-auto sm:mx-0">
                <Image
                  src="/images/nassim-fondateur.webp"
                  alt="Nassim Sahili, fondateur de FMCS"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[0.6875rem] font-700 uppercase tracking-[0.15em] text-[#e5b80b] mb-2">
                  Fondateur FMCS · Co-fondateur Coalition Nutrition
                </p>
                <h3 className="text-[1.5rem] sm:text-[1.75rem] font-700 text-[#131316] mb-1 leading-tight">
                  Nassim Sahili
                </h3>
                <p className="text-[0.9375rem] text-[#888] mb-4 font-500">
                  Direction pédagogique · Coach principal
                </p>
                <p className="text-[1rem] leading-[1.8] text-[#2a2a2a] mb-5">
                  Coach diplômé d&apos;État depuis 2011 (BPJEPS AGFF), Nassim a
                  créé la chaîne YouTube Fitmass en 2014 — devenue l&apos;une
                  des plus grandes chaînes francophones de musculation avec
                  plus de 1,2 million d&apos;abonnés. Il fonde FMCS en 2021,
                  après huit ans à former des stagiaires BPJEPS dans sa salle
                  de sport à Lyon. Il anime également le podcast «&nbsp;Là On
                  Discute&nbsp;» et co-dirige Coalition Nutrition.
                </p>
                <Link
                  href="/nassim-sahili"
                  className="inline-flex items-center gap-2 text-[0.9375rem] font-600 text-[#131316] underline underline-offset-4 hover:text-[#e5b80b] transition-colors"
                >
                  Lire la bio complète →
                </Link>
              </div>
            </div>
          </article>
        </section>

        {/* Section Formateurs — 3 cartes */}
        <section
          aria-labelledby="formateurs"
          className="mx-auto max-w-[860px] px-6 mb-14"
        >
          <h2
            id="formateurs"
            className="text-[0.6875rem] font-700 uppercase tracking-[0.15em] text-[#e5b80b] mb-5 text-center"
          >
            Les formateurs
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FormateurCard
              initiale="H"
              eyebrow="Formateur multi-sport"
              nom="Harry"
              role="Coaching multi-sport · Application terrain"
              bio="Éducateur sportif diplômé STAPS, spécialiste du coaching multi-sport. Harry intervient sur les modules d'application terrain de la formation FMCS."
            />
            <FormateurCard
              initiale="C"
              eyebrow="Formateur programmation"
              nom="Cédric"
              role="Programmation · Périodisation avancée"
              bio="Spécialiste de la programmation d'entraînement, trois ans aux côtés de Nassim. Cédric est en charge de tous les modules de planification avancée : périodisation linéaire, ondulante et par blocs, gestion du volume et de l'intensité, méthodes pour profils confirmés."
            />
            <FormateurCard
              initiale="J"
              eyebrow="Formatrice nutrition"
              nom="Johanna"
              role="Diététique du sport · Nutrition appliquée"
              bio="Diététicienne-nutritionniste du sport, spécialisée musculation et sports d'endurance. Johanna est en charge du volet nutrition appliquée pour les élèves FMCS — balance énergétique, macronutriments, six types de diètes, timing nutritionnel et prise en charge des pathologies courantes."
            />
          </div>
        </section>

        {/* Section "Pourquoi cette équipe" — corps prose-fmcs */}
        <article className="prose prose-lg prose-fmcs mx-auto max-w-[720px] px-6">
          <h2>
            Une équipe choisie pour que chaque pilier soit enseigné par un
            spécialiste
          </h2>
          <p>
            Quand Nassim a structuré FMCS, il est parti d&apos;un constat : la
            carrière d&apos;un coach qui réussit repose sur cinq piliers
            indissociables — anatomie &amp; physiologie, nutrition &amp;
            récupération, programmation, suivi client, et réseau &amp;
            business.
          </p>
          <p>
            Plutôt que de tout enseigner seul, Nassim s&apos;est entouré de
            trois formateurs spécialisés. Chacun pratique au quotidien le
            pilier qu&apos;il enseigne. C&apos;est ce qui garantit que la
            formation reste connectée à la réalité du métier — et que vous
            appreniez chaque sujet avec quelqu&apos;un qui le maîtrise
            vraiment.
          </p>
          <p>
            Pour aller plus loin sur le parcours du fondateur, consultez la{" "}
            <Link href="/nassim-sahili">bio complète de Nassim Sahili</Link>.
          </p>
        </article>

        {/* CTA card en bas */}
        <section className="mx-auto max-w-[860px] px-6 mt-16">
          <div className="rounded-2xl bg-[#131316] text-white p-8 sm:p-12 text-center overflow-hidden relative">
            <p className="text-[0.6875rem] font-700 uppercase tracking-[0.15em] text-[#e5b80b] mb-3">
              Discuter avec l&apos;équipe FMCS
            </p>
            <h2
              className="text-[1.5rem] sm:text-[2rem] font-700 leading-[1.15] tracking-[-0.02em] mb-4"
              style={{ color: "#ffffff" }}
            >
              Vous voulez en savoir plus sur la formation ?
            </h2>
            <p className="text-[0.9375rem] sm:text-[1rem] text-white/70 max-w-[520px] mx-auto mb-7 leading-[1.8]">
              Réservez un appel découverte gratuit. On évalue votre situation,
              vos objectifs, et on vous explique en détail comment
              l&apos;accompagnement fonctionne.
            </p>
            <Link
              href="/#rdv"
              className="inline-flex items-center gap-2 bg-[#e5b80b] hover:bg-[#d4a809] text-[#131316] rounded-full px-7 py-3 text-[0.9375rem] font-700 transition-colors"
            >
              Réserver mon appel découverte →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
