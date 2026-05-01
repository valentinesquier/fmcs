import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "FMCS vs STAPS : laquelle choisir pour vivre du coaching sportif ?",
  description:
    "FMCS vs Licence STAPS : comparatif détaillé. 6 mois vs 3 ans, en ligne vs présentiel, formation pro vs académique. Quelle voie pour vivre du coaching ?",
  alternates: { canonical: `${SITE_URL}/comparatif/staps` },
  openGraph: {
    title: "FMCS vs STAPS : le comparatif détaillé",
    description:
      "6 mois vs 3 ans, en ligne vs présentiel, formation pro vs formation universitaire. Ce qu'il faut savoir.",
    url: `${SITE_URL}/comparatif/staps`,
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Comparatifs",
      item: `${SITE_URL}/comparatif`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "FMCS vs STAPS",
      item: `${SITE_URL}/comparatif/staps`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "La Licence STAPS suffit-elle pour devenir coach sportif ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Licence STAPS donne la carte professionnelle d'éducateur sportif et un cadre théorique académique solide. Elle est en revanche très théorique et couvre peu l'application pratique du coaching individuel : nutrition appliquée, programmation par profils clients, suivi psychologique, business du coaching.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il faire la FMCS si on a déjà une Licence STAPS ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. La Licence STAPS forme à la science du sport au sens large (physiologie, biomécanique, sociologie). La FMCS, elle, est centrée sur l'application terrain du coaching en musculation : nutrition sportive appliquée, programmation client par client, suivi sur la durée, business. C'est complémentaire.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte la Licence STAPS ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le coût de la Licence STAPS dépend du type d'établissement : très modique à l'université publique (frais d'inscription universitaires), nettement plus élevé en STAPS privée. À cela s'ajoutent les frais de vie étudiante (logement, transport, etc.) sur 3 ans.",
      },
    },
    {
      "@type": "Question",
      name: "STAPS ou FMCS si je veux vite vivre du coaching ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si l'objectif est de vivre du coaching le plus vite possible, FMCS + CQP IF est généralement plus rapide (10-12 mois total) et donne un socle plus directement opérationnel que la Licence STAPS (3 ans, théorique). STAPS reste pertinent si vous visez aussi l'enseignement, le sport-santé ou la recherche.",
      },
    },
  ],
};

export default function ComparatifSTAPSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="pt-[100px] pb-20 bg-white">
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
            <li>
              <Link
                href="/comparatif"
                className="hover:text-[#131316] transition-colors"
              >
                Comparatifs
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-[#131316] font-500" aria-current="page">
              FMCS vs STAPS
            </li>
          </ol>
        </nav>

        <header className="mx-auto max-w-[860px] px-6 mb-12">
          <p className="text-[0.875rem] uppercase tracking-[0.05em] text-[#888] font-500 mb-2">
            Comparatif coach sportif
          </p>
          <h1 className="text-[2rem] sm:text-[2.5rem] font-700 leading-[1.1] tracking-[-0.02em] text-[#131316] mb-6">
            FMCS vs STAPS : laquelle choisir pour vivre du coaching sportif ?
          </h1>
          <p className="text-[1.0625rem] text-[#555] leading-[1.6]">
            La Licence STAPS est la voie universitaire historique pour
            travailler dans le sport. La FMCS est une formation
            professionnelle en ligne lancée en 2021, centrée sur le coaching
            en musculation. Les deux formations n&apos;ont ni la même durée,
            ni le même format, ni le même contenu. Voici ce qui les
            distingue, et comment les combiner intelligemment.
          </p>
        </header>

        <article className="mx-auto max-w-[720px] px-6 prose prose-neutral prose-lg">
          <h2>Qu&apos;est-ce que la Licence STAPS ?</h2>
          <p>
            La <strong>Licence STAPS</strong> (Sciences et Techniques des
            Activités Physiques et Sportives) est un diplôme universitaire
            de niveau 6 (Bac+3), inscrit au RNCP. Plusieurs mentions
            existent — les plus pertinentes pour le coaching sont
            &laquo; Entraînement Sportif &raquo;, &laquo; Activités Physiques
            Adaptées et Santé &raquo; et &laquo; Éducation et Motricité
            &raquo;.
          </p>
          <ul>
            <li>
              <strong>Durée</strong> : 3 ans (Licence). Souvent suivie de
              2 ans de Master (Bac+5) pour des débouchés étendus
            </li>
            <li>
              <strong>Coût</strong> : variable — frais universitaires
              modiques en université publique, nettement plus élevés en
              STAPS privée
            </li>
            <li>
              <strong>Format</strong> : présentiel obligatoire à
              l&apos;université, contrôle continu et examens
            </li>
            <li>
              <strong>Pré-requis</strong> : Bac, dossier Parcoursup, parfois
              tests physiques
            </li>
            <li>
              <strong>Débouché légal</strong> : carte professionnelle
              d&apos;éducateur sportif (à partir de la Licence)
            </li>
          </ul>
          <p>
            Ce que la STAPS couvre bien : sciences du sport, anatomie,
            physiologie, biomécanique, sociologie du sport, méthodologie
            scientifique. Ce qu&apos;elle couvre peu : application terrain
            du coaching individuel, nutrition sportive appliquée à la
            performance, programmation par profils clients, et le business
            du coaching indépendant.
          </p>

          <h2>Qu&apos;est-ce que la FMCS ?</h2>
          <p>
            La <strong>FMCS</strong> (Fitmass Coaching School), fondée en
            2021 par Nassim Sahili, est une formation 100 % en ligne
            spécifiquement dédiée au coaching en musculation. Elle ne
            délivre pas la carte professionnelle (elle est complémentaire),
            mais elle couvre les 5 piliers que les formations classiques
            abordent rarement en profondeur : anatomie & physiologie,
            nutrition, programmation, suivi client, business.
          </p>
          <ul>
            <li>
              <strong>Durée</strong> : 6 mois (3h par semaine en moyenne)
            </li>
            <li>
              <strong>Format</strong> : 100 % en ligne, accès à vie au
              contenu, communauté privée
            </li>
            <li>
              <strong>Pré-requis</strong> : aucun
            </li>
            <li>
              <strong>Débouché</strong> : certificat FMCS + accompagnement
              vers la carte pro via le CQP
            </li>
          </ul>

          <h2>Tableau comparatif détaillé</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Critère</th>
                  <th>Licence STAPS</th>
                  <th>FMCS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Durée</td>
                  <td>3 ans (Licence)</td>
                  <td>6 mois</td>
                </tr>
                <tr>
                  <td>Coût</td>
                  <td>Variable selon université publique ou privée</td>
                  <td>Révélé en appel</td>
                </tr>
                <tr>
                  <td>Format</td>
                  <td>Présentiel obligatoire</td>
                  <td>100% en ligne, à votre rythme</td>
                </tr>
                <tr>
                  <td>Carte pro</td>
                  <td>Oui (RNCP 6)</td>
                  <td>Non en direct (accompagnement vers CQP)</td>
                </tr>
                <tr>
                  <td>Approche</td>
                  <td>Académique, scientifique, généraliste sport</td>
                  <td>Métier coaching musculation appliqué</td>
                </tr>
                <tr>
                  <td>Anatomie / physio</td>
                  <td>Approfondi (théorique)</td>
                  <td>Approfondi (orienté coaching)</td>
                </tr>
                <tr>
                  <td>Nutrition</td>
                  <td>Théorique</td>
                  <td>Pilier dédié appliqué</td>
                </tr>
                <tr>
                  <td>Programmation client</td>
                  <td>Bases</td>
                  <td>Pilier dédié (périodisation, blocs, etc.)</td>
                </tr>
                <tr>
                  <td>Business du coaching</td>
                  <td>Non</td>
                  <td>Pilier dédié (acquisition, tarification, statut)</td>
                </tr>
                <tr>
                  <td>Compatible CDI</td>
                  <td>Difficile (présence universitaire requise)</td>
                  <td>Oui (3h/semaine au choix)</td>
                </tr>
                <tr>
                  <td>Autres débouchés</td>
                  <td>Enseignement, sport-santé, recherche, sport pro</td>
                  <td>Coaching musculation principalement</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[0.8125rem] text-[#888]">
            Sources : RNCP (France Compétences), arrêtés universitaires
            STAPS, ANESTAPS, sites des facultés. Frais d&apos;inscription
            universitaires actualisés chaque rentrée.
          </p>

          <h2>Que choisir selon votre situation ?</h2>

          <h3>Vous voulez vivre du coaching le plus vite possible</h3>
          <p>
            Notre recommandation : <strong>FMCS + CQP IF</strong>. La
            combinaison vous prend environ 10-12 mois (vs 3 ans pour la
            Licence STAPS), coûte moins cher, et vous donne un socle
            directement opérationnel pour le coaching individuel. La STAPS
            est plus pertinente si votre projet inclut aussi
            l&apos;enseignement, la recherche ou le sport-santé.
          </p>

          <h3>Vous avez déjà une Licence STAPS</h3>
          <p>
            Notre recommandation : <strong>ajouter la FMCS</strong>. La
            STAPS vous a donné la rigueur scientifique et le cadre
            académique. Ce qu&apos;il vous manque pour vivre vraiment du
            coaching individuel, c&apos;est la traduction métier : comment
            programmer un client en surcharge progressive sur 3 mois,
            adapter la nutrition à un objectif de prise de masse ou de
            sèche, gérer le suivi à distance, fixer ses tarifs, gérer son
            statut d&apos;auto-entrepreneur.
          </p>
          <p>
            La FMCS s&apos;ajoute à votre STAPS. Elle ne la remplace pas. Le
            STAPS vous donne la carte pro et le diplôme universitaire ; la
            FMCS vous donne les armes terrain pour vivre durablement de
            votre activité.
          </p>

          <h3>Vous êtes en STAPS et hésitez à continuer en Master</h3>
          <p>
            Si votre objectif principal est le coaching individuel, vous
            pouvez tout à fait arrêter à la Licence et compléter par la
            FMCS. Cela vous donnera la carte pro (Licence) + le socle
            opérationnel (FMCS) en 3,5 ans environ — vs 5 ans pour aller
            jusqu&apos;au Master STAPS.
          </p>

          <h2>FAQ comparative</h2>

          <h3>La Licence STAPS suffit-elle pour devenir coach sportif ?</h3>
          <p>
            La Licence STAPS donne la carte professionnelle d&apos;éducateur
            sportif et un cadre théorique académique solide. Elle est en
            revanche très théorique et couvre peu l&apos;application
            pratique du coaching individuel.
          </p>

          <h3>Faut-il faire la FMCS si on a déjà une Licence STAPS ?</h3>
          <p>
            Oui. La Licence STAPS forme à la science du sport au sens large.
            La FMCS, elle, est centrée sur l&apos;application terrain du
            coaching en musculation : nutrition sportive appliquée,
            programmation client par client, suivi sur la durée, business.
            C&apos;est complémentaire.
          </p>

          <h3>Combien coûte la Licence STAPS ?</h3>
          <p>
            Le coût dépend du type d&apos;établissement : très modique à
            l&apos;université publique (frais d&apos;inscription
            universitaires), nettement plus élevé en STAPS privée. À cela
            s&apos;ajoutent les frais de vie étudiante (logement,
            transport, etc.) sur 3 ans.
          </p>

          <h3>STAPS ou FMCS si je veux vite vivre du coaching ?</h3>
          <p>
            FMCS + CQP IF est plus rapide (10-12 mois total) et donne un
            socle plus directement opérationnel. La STAPS reste pertinente
            si vous visez aussi l&apos;enseignement, le sport-santé ou la
            recherche.
          </p>

          <h2>Discuter de votre situation</h2>
          <p>
            Si vous êtes en cours de Licence STAPS, déjà diplômé, ou si
            vous hésitez entre STAPS et une voie plus courte, vous pouvez
            réserver un appel découverte gratuit avec l&apos;équipe FMCS.
            On évalue votre profil et on vous oriente sans pression.
          </p>
          <p className="not-prose mt-8">
            <Link
              href="/#rdv"
              className="inline-flex items-center gap-2 bg-[#131316] hover:bg-[#2a2a2a] text-white rounded-full px-6 py-3 text-[0.9375rem] font-500 transition-colors"
            >
              Réserver mon appel découverte
            </Link>
          </p>

          <p className="not-prose text-[0.8125rem] text-[#888] mt-8">
            Voir aussi :{" "}
            <Link href="/comparatif/bpjeps">FMCS vs BPJEPS</Link> ·{" "}
            <Link href="/comparatif/cqp">FMCS vs CQP</Link> ·{" "}
            <Link href="/comparatif">Hub comparatifs</Link>
          </p>
        </article>
      </main>

      <Footer />
    </>
  );
}
