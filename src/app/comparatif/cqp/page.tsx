import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "FMCS + CQP IF : la combinaison qu'on recommande pour devenir coach",
  description:
    "Comparatif FMCS vs CQP IF — et pourquoi la combinaison FMCS + CQP est la voie la plus efficace si vous n'avez pas encore la carte professionnelle d'éducateur sportif.",
  alternates: { canonical: `${SITE_URL}/comparatif/cqp` },
  openGraph: {
    title: "FMCS + CQP IF : la combinaison recommandée",
    description:
      "Le CQP donne la carte pro. La FMCS donne le socle complet. Ensemble, c'est le meilleur ratio temps/coût/résultat.",
    url: `${SITE_URL}/comparatif/cqp`,
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
      name: "FMCS vs CQP",
      item: `${SITE_URL}/comparatif/cqp`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Le CQP IF suffit-il pour vivre du coaching ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le CQP IF donne la carte professionnelle d'éducateur sportif et les bases d'animation. Il couvre peu en revanche la nutrition appliquée, la programmation avancée et le business du coaching, qui sont les compétences décisives pour vivre durablement de l'activité.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi recommander FMCS + CQP plutôt que CQP seul ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le CQP IF est court (4-6 mois) et délivre la carte pro, mais il reste très focalisé sur l'animation en salle. Pour vivre du coaching individuel, il manque la profondeur sur 4 dimensions : nutrition sportive appliquée, programmation par profils clients, suivi psychologique, business. La FMCS comble ces angles morts.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte la combinaison FMCS + CQP IF ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le CQP IF coûte 2 000 à 4 000€ selon le centre. Le tarif FMCS est révélé en appel découverte. Au total, c'est généralement moins cher qu'un BPJEPS seul, pour un socle de compétences plus complet.",
      },
    },
    {
      "@type": "Question",
      name: "Le CQP IF est-il reconnu partout ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, le CQP IF est inscrit au RNCP (niveau 4) et donne droit à la carte professionnelle d'éducateur sportif. Il permet d'exercer en salle, club ou association partout en France.",
      },
    },
  ],
};

export default function ComparatifCQPPage() {
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
              FMCS vs CQP
            </li>
          </ol>
        </nav>

        <header className="mx-auto max-w-[860px] px-6 mb-12">
          <p className="text-[0.875rem] uppercase tracking-[0.05em] text-[#888] font-500 mb-2">
            Comparatif coach sportif
          </p>
          <h1 className="text-[2rem] sm:text-[2.5rem] font-700 leading-[1.1] tracking-[-0.02em] text-[#131316] mb-6">
            FMCS + CQP IF : la combinaison qu&apos;on recommande pour devenir
            coach sportif
          </h1>
          <p className="text-[1.0625rem] text-[#555] leading-[1.6]">
            Si vous n&apos;avez aucun diplôme et que vous voulez vivre du
            coaching, la combinaison <strong>FMCS + CQP IF</strong> est la
            voie qu&apos;on recommande systématiquement. Le CQP donne la
            carte professionnelle (le cadre légal). La FMCS donne le socle
            complet de compétences (le métier réel). Ensemble, c&apos;est le
            meilleur ratio temps / coût / opérabilité du marché. Voici
            pourquoi.
          </p>
        </header>

        <article className="mx-auto max-w-[720px] px-6 prose prose-neutral prose-lg">
          <h2>Qu&apos;est-ce que le CQP IF ?</h2>
          <p>
            Le <strong>CQP IF</strong> (Certificat de Qualification
            Professionnelle &laquo; Instructeur Forme &raquo;) est délivré
            par les fédérations sportives. C&apos;est la voie la plus rapide
            et la moins chère pour obtenir la carte professionnelle
            d&apos;éducateur sportif. Il existe aussi le <strong>CQP ALS
            </strong> (Animateur de Loisirs Sportifs) plus généraliste.
          </p>
          <ul>
            <li>
              <strong>Durée</strong> : ~250 à 400 heures (4-6 mois)
            </li>
            <li>
              <strong>Coût</strong> : 2 000 à 4 000€ selon le centre
            </li>
            <li>
              <strong>Format</strong> : présentiel + parfois e-learning
              partiel
            </li>
            <li>
              <strong>Pré-requis</strong> : majorité civile, PSC1
              recommandé, parfois tests
            </li>
            <li>
              <strong>Débouché légal</strong> : carte professionnelle
              d&apos;éducateur sportif (RNCP niveau 4)
            </li>
          </ul>
          <p>
            Le CQP IF couvre l&apos;essentiel pour animer une salle :
            sécurité, animation de cours, conseil de base. Il couvre peu en
            revanche les sujets décisifs pour vivre du coaching individuel :
            nutrition sportive appliquée poussée, programmation par profils
            clients, suivi psychologique sur la durée, et toute la
            dimension business (acquisition, tarification, création
            d&apos;activité).
          </p>

          <h2>Qu&apos;est-ce que la FMCS ?</h2>
          <p>
            La <strong>FMCS</strong> (Fitmass Coaching School) est une
            formation 100 % en ligne lancée en 2021 par Nassim Sahili. Elle
            ne délivre pas la carte pro à elle seule, mais elle couvre les
            5 piliers indissociables d&apos;un coaching durable : anatomie
            & physiologie, nutrition, programmation, suivi client, business.
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
              <strong>Accompagnement carte pro</strong> : la FMCS vous
              accompagne directement vers le CQP IF (la voie la plus rapide
              et la moins chère)
            </li>
            <li>
              <strong>Diplômés</strong> : 4 000+ coachs formés, 4,2/5 sur
              Trustpilot
            </li>
          </ul>

          <h2>Pourquoi la combinaison FMCS + CQP IF fonctionne</h2>
          <p>
            Les deux formations ne se chevauchent quasiment pas — elles se
            complètent.
          </p>
          <ul>
            <li>
              <strong>CQP IF</strong> : cadre légal (carte pro), animation
              en salle, sécurité du pratiquant
            </li>
            <li>
              <strong>FMCS</strong> : profondeur scientifique sur les 5
              piliers, application au coaching individuel, business
            </li>
          </ul>
          <p>
            Vous sortez de cette combinaison avec :
          </p>
          <ul>
            <li>
              La <strong>carte professionnelle</strong> qui vous autorise à
              exercer partout (CQP IF)
            </li>
            <li>
              Un <strong>socle de compétences complet</strong> que peu de
              coachs ont (FMCS)
            </li>
            <li>
              Les <strong>outils business</strong> pour trouver vos clients
              et fixer vos tarifs (FMCS)
            </li>
            <li>
              L&apos;accès à une <strong>communauté de 4 000+ coachs</strong>{" "}
              en activité (FMCS)
            </li>
          </ul>

          <h2>Tableau comparatif détaillé</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Critère</th>
                  <th>CQP IF seul</th>
                  <th>FMCS seule</th>
                  <th>FMCS + CQP IF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Durée totale</td>
                  <td>4-6 mois</td>
                  <td>6 mois</td>
                  <td>10-12 mois (peuvent se chevaucher)</td>
                </tr>
                <tr>
                  <td>Coût total</td>
                  <td>2 000-4 000€</td>
                  <td>Sur appel</td>
                  <td>FMCS + 2 000-4 000€ CQP</td>
                </tr>
                <tr>
                  <td>Format</td>
                  <td>Présentiel</td>
                  <td>100% en ligne</td>
                  <td>Mix présentiel CQP + en ligne FMCS</td>
                </tr>
                <tr>
                  <td>Carte pro</td>
                  <td>Oui</td>
                  <td>Non en direct</td>
                  <td>Oui (via CQP)</td>
                </tr>
                <tr>
                  <td>Anatomie / physio</td>
                  <td>Bases</td>
                  <td>Pilier dédié</td>
                  <td>Complet</td>
                </tr>
                <tr>
                  <td>Nutrition</td>
                  <td>Bases</td>
                  <td>Pilier dédié</td>
                  <td>Complet</td>
                </tr>
                <tr>
                  <td>Programmation</td>
                  <td>Bases</td>
                  <td>Pilier dédié</td>
                  <td>Complet</td>
                </tr>
                <tr>
                  <td>Business</td>
                  <td>Très peu</td>
                  <td>Pilier dédié</td>
                  <td>Complet</td>
                </tr>
                <tr>
                  <td>Compatible CDI</td>
                  <td>Difficile</td>
                  <td>Oui</td>
                  <td>Partiellement (FMCS oui, CQP non)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[0.8125rem] text-[#888]">
            Sources : RNCP (France Compétences), fédérations sportives
            délivrant le CQP IF, documentation publique 2025-2026.
          </p>

          <h2>Que choisir selon votre situation ?</h2>

          <h3>Vous n&apos;avez aucun diplôme — recommandation principale</h3>
          <p>
            <strong>FMCS + CQP IF.</strong> C&apos;est la voie qu&apos;on
            recommande systématiquement. Vous obtenez la carte pro (CQP) et
            le socle métier complet (FMCS) en 10-12 mois, pour un coût
            généralement inférieur à un BPJEPS seul. Vous êtes opérationnel
            sur le terrain et vous avez les outils pour développer votre
            activité.
          </p>
          <p>
            Vous pouvez commencer la FMCS dès maintenant (en parallèle de
            votre emploi actuel ou de vos études) et démarrer le CQP IF
            quelques mois plus tard quand vous êtes plus à l&apos;aise avec
            les bases.
          </p>

          <h3>Vous avez déjà le CQP IF</h3>
          <p>
            Notre recommandation : <strong>ajouter la FMCS</strong>. Vous
            avez déjà la carte pro et les bases d&apos;animation. Ce qu&apos;il
            vous manque pour vivre vraiment du coaching individuel, c&apos;est
            la profondeur sur la nutrition appliquée, la programmation par
            profils clients, le suivi psychologique, et toute la dimension
            business du coach indépendant.
          </p>

          <h3>Vous êtes en CDI et envisagez la reconversion</h3>
          <p>
            Le CQP IF étant principalement présentiel, il peut être
            difficile à concilier avec un emploi. La FMCS, elle, se suit en
            3h par semaine, à votre rythme. Vous pouvez commencer la FMCS
            dès maintenant pour acquérir le socle, et envisager le CQP IF
            dans un second temps quand vous êtes prêt à dégager le temps
            nécessaire.
          </p>

          <h2>FAQ comparative</h2>

          <h3>Le CQP IF suffit-il pour vivre du coaching ?</h3>
          <p>
            Le CQP IF donne la carte professionnelle d&apos;éducateur
            sportif et les bases d&apos;animation. Il couvre peu en
            revanche la nutrition appliquée, la programmation avancée et le
            business du coaching, qui sont les compétences décisives pour
            vivre durablement de l&apos;activité.
          </p>

          <h3>Pourquoi recommander FMCS + CQP plutôt que CQP seul ?</h3>
          <p>
            Le CQP IF est court (4-6 mois) et délivre la carte pro, mais il
            reste très focalisé sur l&apos;animation en salle. Pour vivre du
            coaching individuel, il manque la profondeur sur 4 dimensions :
            nutrition sportive appliquée, programmation par profils
            clients, suivi psychologique, business. La FMCS comble ces
            angles morts.
          </p>

          <h3>Combien coûte la combinaison FMCS + CQP IF ?</h3>
          <p>
            Le CQP IF coûte 2 000 à 4 000€ selon le centre. Le tarif FMCS
            est révélé en appel découverte. Au total, c&apos;est
            généralement moins cher qu&apos;un BPJEPS seul, pour un socle
            plus complet.
          </p>

          <h3>Le CQP IF est-il reconnu partout ?</h3>
          <p>
            Oui, le CQP IF est inscrit au RNCP (niveau 4) et donne droit à
            la carte professionnelle d&apos;éducateur sportif. Il permet
            d&apos;exercer en salle, club ou association partout en France.
          </p>

          <h2>Discuter de votre situation</h2>
          <p>
            Si vous voulez démarrer la combinaison FMCS + CQP IF ou si vous
            avez déjà le CQP et hésitez sur la FMCS, vous pouvez réserver
            un appel découverte gratuit avec l&apos;équipe FMCS. On évalue
            votre profil et on vous oriente.
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
            <Link href="/comparatif/staps">FMCS vs STAPS</Link> ·{" "}
            <Link href="/comparatif">Hub comparatifs</Link>
          </p>
        </article>
      </main>

      <Footer />
    </>
  );
}
