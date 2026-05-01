import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "FMCS vs BPJEPS AF : laquelle choisir pour devenir coach sportif ?",
  description:
    "Comparatif détaillé FMCS vs BPJEPS AF : durée, coût, contenu, débouchés. Laquelle choisir si vous débutez ? Et si vous avez déjà le BPJEPS, devez-vous faire la FMCS en plus ?",
  alternates: { canonical: `${SITE_URL}/comparatif/bpjeps` },
  openGraph: {
    title: "FMCS vs BPJEPS AF : le comparatif détaillé",
    description:
      "Durée, coût, contenu, débouchés. La voie qu'on recommande selon votre profil.",
    url: `${SITE_URL}/comparatif/bpjeps`,
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
      name: "FMCS vs BPJEPS",
      item: `${SITE_URL}/comparatif/bpjeps`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Le BPJEPS suffit-il pour vivre du coaching ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le BPJEPS donne la carte professionnelle et les bases théoriques pour exercer en salle. Il couvre peu en revanche la nutrition appliquée, la programmation avancée et le business du coaching, qui sont les compétences décisives pour vivre durablement de l'activité.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il faire la FMCS si on a déjà le BPJEPS ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. La FMCS apporte un socle de compétences que le BPJEPS ne traite pas en profondeur : nutrition sportive appliquée, programmation par profils clients, gestion psychologique du suivi, et tout le volet business (acquisition, tarification, statut). C'est un complément, pas un remplacement.",
      },
    },
    {
      "@type": "Question",
      name: "Vaut-il mieux faire BPJEPS ou FMCS + CQP ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si vous n'avez aucun diplôme, la combinaison FMCS + CQP IF est généralement plus efficace : moins chère, plus rapide, et la FMCS apporte un socle de compétences plus complet que le BPJEPS sur la nutrition, la programmation et le business.",
      },
    },
    {
      "@type": "Question",
      name: "Le BPJEPS est-il reconnu partout ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, le BPJEPS AF est inscrit au RNCP (niveau 4). Il donne droit à la carte professionnelle d'éducateur sportif et permet d'exercer en salle, club ou association partout en France.",
      },
    },
  ],
};

export default function ComparatifBPJEPSPage() {
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
              FMCS vs BPJEPS
            </li>
          </ol>
        </nav>

        <header className="mx-auto max-w-[860px] px-6 mb-12">
          <p className="text-[0.875rem] uppercase tracking-[0.05em] text-[#888] font-500 mb-2">
            Comparatif coach sportif
          </p>
          <h1 className="text-[2rem] sm:text-[2.5rem] font-700 leading-[1.1] tracking-[-0.02em] text-[#131316] mb-6">
            FMCS vs BPJEPS AF : laquelle choisir pour devenir coach sportif ?
          </h1>
          <p className="text-[1.0625rem] text-[#555] leading-[1.6]">
            Le BPJEPS est le diplôme d&apos;État historique pour devenir coach
            en salle de sport. La FMCS est une formation en ligne lancée en
            2021 par Nassim Sahili. Les deux ne couvrent pas le même terrain
            et ne répondent pas au même besoin. Voici en quoi elles
            diffèrent, et surtout comment les combiner intelligemment selon
            votre situation.
          </p>
        </header>

        <article className="mx-auto max-w-[720px] px-6 prose prose-neutral prose-lg">
          <h2>Qu&apos;est-ce que le BPJEPS AF ?</h2>
          <p>
            Le <strong>BPJEPS AF</strong> (Brevet Professionnel de la Jeunesse,
            de l&apos;Éducation Populaire et du Sport, mention &laquo;
            Activités de la Forme &raquo;) est un diplôme d&apos;État de
            niveau 4, inscrit au RNCP (code RNCP 32153). Il forme à
            l&apos;animation et l&apos;encadrement d&apos;activités physiques
            de la forme — musculation, cours collectifs, cardio.
          </p>
          <p>Caractéristiques principales :</p>
          <ul>
            <li>
              <strong>Durée</strong> : ~700 à 1 200 heures (souvent étalées
              sur 9 à 12 mois), avec stages en entreprise obligatoires
            </li>
            <li>
              <strong>Coût</strong> : 5 000 à 10 000€ selon le centre
              (financement CPF, Pôle Emploi, OPCO possibles)
            </li>
            <li>
              <strong>Format</strong> : présentiel principalement, dans un
              centre de formation agréé
            </li>
            <li>
              <strong>Pré-requis</strong> : tests de sélection (PSC1, test
              physique, entretien)
            </li>
            <li>
              <strong>Débouché légal</strong> : carte professionnelle
              d&apos;éducateur sportif, qui permet d&apos;exercer en salle,
              club ou association
            </li>
          </ul>
          <p>
            Ce que le BPJEPS couvre bien : pédagogie générale, sécurité du
            pratiquant, animation de cours collectifs, anatomie de base,
            réglementation. Ce qu&apos;il couvre peu : nutrition appliquée
            avancée, programmation par profils clients, suivi psychologique,
            et toute la partie business (acquisition clients, tarification,
            création d&apos;activité).
          </p>

          <h2>Qu&apos;est-ce que la FMCS ?</h2>
          <p>
            La <strong>FMCS</strong> (Fitmass Coaching School), fondée en
            2021 par Nassim Sahili, est une formation 100 % en ligne, conçue
            pour combler les angles morts des formations classiques. Elle ne
            délivre pas la carte professionnelle (elle est complémentaire),
            mais elle couvre en profondeur les 5 piliers indissociables d&apos;un
            coaching durable : anatomie & physiologie, nutrition, programmation,
            suivi client, business.
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
            <li>
              <strong>Volume</strong> : 55+ heures de cours et replays live
            </li>
          </ul>

          <h2>Tableau comparatif détaillé</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Critère</th>
                  <th>BPJEPS AF</th>
                  <th>FMCS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Durée</td>
                  <td>9-12 mois</td>
                  <td>6 mois</td>
                </tr>
                <tr>
                  <td>Coût</td>
                  <td>5 000-10 000€</td>
                  <td>Révélé en appel</td>
                </tr>
                <tr>
                  <td>Format</td>
                  <td>Présentiel</td>
                  <td>100% en ligne, à votre rythme</td>
                </tr>
                <tr>
                  <td>Carte pro</td>
                  <td>Oui (RNCP 4)</td>
                  <td>Non en direct (accompagnement vers CQP)</td>
                </tr>
                <tr>
                  <td>Anatomie / physio</td>
                  <td>Bases</td>
                  <td>Pilier dédié approfondi</td>
                </tr>
                <tr>
                  <td>Nutrition sportive</td>
                  <td>Bases</td>
                  <td>Pilier dédié</td>
                </tr>
                <tr>
                  <td>Programmation</td>
                  <td>Bases</td>
                  <td>Pilier dédié (périodisation, blocs, etc.)</td>
                </tr>
                <tr>
                  <td>Suivi client</td>
                  <td>Pédagogie générale</td>
                  <td>Pilier dédié (5 profils psychologiques)</td>
                </tr>
                <tr>
                  <td>Business du coaching</td>
                  <td>Très peu</td>
                  <td>Pilier dédié (acquisition, tarification, statut)</td>
                </tr>
                <tr>
                  <td>Pré-requis</td>
                  <td>Tests sélection (PSC1, physique)</td>
                  <td>Aucun</td>
                </tr>
                <tr>
                  <td>Compatible CDI</td>
                  <td>Difficile (présentiel intensif)</td>
                  <td>Oui (3h/semaine au choix)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[0.8125rem] text-[#888]">
            Sources : RNCP 32153 (France Compétences), Code du sport
            (Légifrance), documentation publique BPJEPS AF 2025-2026.
          </p>

          <h2>Que choisir selon votre situation ?</h2>

          <h3>Vous n&apos;avez aucun diplôme et voulez vivre du coaching</h3>
          <p>
            Notre recommandation : <strong>FMCS + CQP IF</strong>, plutôt
            que BPJEPS seul. La combinaison vous coûte généralement moins
            cher, vous prend moins de temps, et vous donne un socle de
            compétences plus complet — surtout sur la nutrition, la
            programmation et le business.
          </p>
          <p>
            Le CQP IF vous donne la carte pro (en 4-6 mois). La FMCS vous
            donne en parallèle (ou avant) la profondeur métier qui fait la
            différence entre &laquo; coach diplômé qui galère &raquo; et
            &laquo; coach qui vit de son activité &raquo;.
          </p>

          <h3>Vous avez déjà le BPJEPS</h3>
          <p>
            Notre recommandation : <strong>ajouter la FMCS</strong>. Vous
            avez déjà la carte pro et les bases. Ce qu&apos;il vous manque
            pour vivre vraiment du coaching, ce sont les compétences que le
            BPJEPS effleure : programmer un client en surcharge progressive
            sur 3 mois, gérer la nutrition d&apos;un client en sèche, savoir
            détecter et anticiper le décrochage psychologique, et toute la
            mécanique business de l&apos;auto-entrepreneur ou du coach indé.
          </p>
          <p>
            La FMCS s&apos;ajoute à votre BPJEPS. Elle ne le remplace pas.
            85 % des coachs diplômés quittent la profession dans les 5 ans —
            l&apos;écart de compétences avec la réalité du métier en est la
            cause principale.
          </p>

          <h3>Vous êtes en CDI et envisagez la reconversion</h3>
          <p>
            Le BPJEPS est très contraignant : présentiel souvent à temps
            plein, difficile à concilier avec un emploi salarié. La FMCS,
            elle, se suit en 3h par semaine, à votre rythme. Vous pouvez
            commencer la FMCS dès maintenant pour acquérir le socle, et
            envisager le CQP ou le BPJEPS dans un second temps quand vous
            êtes prêt à quitter votre poste.
          </p>

          <h2>FAQ comparative</h2>

          <h3>Le BPJEPS suffit-il pour vivre du coaching ?</h3>
          <p>
            Le BPJEPS donne la carte professionnelle et les bases théoriques
            pour exercer en salle. Il couvre peu en revanche la nutrition
            appliquée, la programmation avancée et le business du coaching,
            qui sont les compétences décisives pour vivre durablement de
            l&apos;activité.
          </p>

          <h3>Faut-il faire la FMCS si on a déjà le BPJEPS ?</h3>
          <p>
            Oui. La FMCS apporte un socle de compétences que le BPJEPS ne
            traite pas en profondeur : nutrition sportive appliquée,
            programmation par profils clients, gestion psychologique du
            suivi, et tout le volet business. C&apos;est un complément, pas
            un remplacement.
          </p>

          <h3>Vaut-il mieux faire BPJEPS ou FMCS + CQP ?</h3>
          <p>
            Si vous n&apos;avez aucun diplôme, la combinaison FMCS + CQP IF
            est généralement plus efficace : moins chère, plus rapide, et la
            FMCS apporte un socle de compétences plus complet que le BPJEPS
            sur la nutrition, la programmation et le business.
          </p>

          <h3>Le BPJEPS est-il reconnu partout ?</h3>
          <p>
            Oui, le BPJEPS AF est inscrit au RNCP (niveau 4). Il donne droit
            à la carte professionnelle d&apos;éducateur sportif et permet
            d&apos;exercer en salle, club ou association partout en France.
          </p>

          <h2>Discuter de votre situation</h2>
          <p>
            Si vous hésitez entre BPJEPS, CQP, ou FMCS — ou si vous avez
            déjà un diplôme et vous demandez si la FMCS est adaptée — vous
            pouvez réserver un appel découverte gratuit avec l&apos;équipe
            FMCS. On évalue votre profil et on vous oriente sans pression.
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
            <Link href="/comparatif/staps">FMCS vs STAPS</Link> ·{" "}
            <Link href="/comparatif/cqp">FMCS vs CQP</Link> ·{" "}
            <Link href="/comparatif">Hub comparatifs</Link>
          </p>
        </article>
      </main>

      <Footer />
    </>
  );
}
