import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "BPJEPS, STAPS, CQP ou FMCS : quelle formation pour devenir coach sportif ?",
    description:
    "BPJEPS, STAPS, CQP ou FMCS : comparatif des 4 voies pour devenir coach sportif. Durée, coût, débouchés, et la combinaison recommandée selon votre profil.",
  alternates: { canonical: `${SITE_URL}/comparatif` },
  openGraph: {
    title: "Quelle formation pour devenir coach sportif : BPJEPS, STAPS, CQP ou FMCS ?",
    description:
      "Le comparatif des 4 voies pour devenir coach sportif en France et notre recommandation selon votre profil.",
    url: `${SITE_URL}/comparatif`,
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
  ],
};

export default function ComparatifHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            <li className="text-[#131316] font-500" aria-current="page">
              Comparatifs
            </li>
          </ol>
        </nav>

        <header className="mx-auto max-w-[860px] px-6 mb-12">
          <p className="text-[0.875rem] uppercase tracking-[0.05em] text-[#888] font-500 mb-2">
            Comparatif formations coach sportif
          </p>
          <h1 className="text-[2rem] sm:text-[2.5rem] font-700 leading-[1.1] tracking-[-0.02em] text-[#131316] mb-6">
            BPJEPS, STAPS, CQP ou FMCS : quelle formation choisir pour devenir
            coach sportif ?
          </h1>
          <p className="text-[1.0625rem] text-[#555] leading-[1.6]">
            Quatre voies existent en France pour devenir coach sportif.
            Trois sont des diplômes d&apos;État ou certifications reconnues
            (BPJEPS, STAPS, CQP). La quatrième est la FMCS — une formation
            complémentaire en ligne. Les unes ne remplacent pas les autres :
            elles répondent à des besoins différents. On vous explique
            lesquelles, et surtout lesquelles combiner selon votre situation.
          </p>
        </header>

        <article className="mx-auto max-w-[720px] px-6 prose prose-neutral prose-lg">
          <h2>Les 4 voies pour devenir coach sportif en France</h2>
          <p>
            Pour exercer le coaching sportif en salle, club ou association,
            la <strong>carte professionnelle d&apos;éducateur sportif</strong>{" "}
            est obligatoire (article L.212-1 du Code du sport). Elle ne peut
            être délivrée qu&apos;à partir d&apos;un diplôme d&apos;État ou
            d&apos;une certification inscrite au RNCP.
          </p>
          <p>
            En dehors de ce cadre légal, vous pouvez exercer en coaching en
            ligne, à domicile ou en extérieur sans carte pro — mais pour vivre
            durablement de l&apos;activité, il vous faudra des compétences que
            ces diplômes couvrent rarement complètement : nutrition appliquée,
            programmation avancée, suivi client, business.
          </p>

          <h2>BPJEPS AF — diplôme d&apos;État, format présentiel</h2>
          <p>
            Le <strong>BPJEPS AF</strong> (Brevet Professionnel de la
            Jeunesse, de l&apos;Éducation Populaire et du Sport, mention
            &laquo; Activités de la Forme &raquo;) est le diplôme d&apos;État
            historique pour devenir coach en salle de sport. Il se prépare
            généralement sur 9 à 12 mois, en présentiel, dans un centre de
            formation agréé.
          </p>
          <ul>
            <li>
              <strong>Durée</strong> : ~700 à 1 200 heures (9-12 mois)
            </li>
            <li>
              <strong>Coût moyen</strong> : 8 000€ (financement CPF / Pôle
              Emploi possible)
            </li>
            <li>
              <strong>Format</strong> : présentiel principalement
            </li>
            <li>
              <strong>Carte pro</strong> : oui (RNCP niveau 4)
            </li>
          </ul>
          <p>
            <Link href="/comparatif/bpjeps">
              Lire le comparatif détaillé FMCS vs BPJEPS →
            </Link>
          </p>

          <h2>STAPS — Licence universitaire (3 ans)</h2>
          <p>
            La <strong>Licence STAPS</strong> (Sciences et Techniques des
            Activités Physiques et Sportives) est la voie universitaire.
            Plusieurs mentions existent ; les plus pertinentes pour le
            coaching sont &laquo; Entraînement Sportif &raquo; et &laquo;
            Activités Physiques Adaptées et Santé &raquo;. C&apos;est un
            cursus long (3 ans), académique et théorique.
          </p>
          <ul>
            <li>
              <strong>Durée</strong> : 3 ans (Licence) + souvent 2 ans
              supplémentaires en Master
            </li>
            <li>
              <strong>Coût</strong> : variable selon université publique
              ou privée
            </li>
            <li>
              <strong>Format</strong> : présentiel obligatoire
            </li>
            <li>
              <strong>Carte pro</strong> : oui à partir de la Licence (RNCP
              niveau 6)
            </li>
          </ul>
          <p>
            <Link href="/comparatif/staps">
              Lire le comparatif détaillé FMCS vs STAPS →
            </Link>
          </p>

          <h2>CQP IF — Certificat professionnel (le plus rapide)</h2>
          <p>
            Le <strong>CQP IF</strong> (Certificat de Qualification
            Professionnelle &laquo; Instructeur Forme &raquo;) est délivré
            par les fédérations sportives. C&apos;est la voie la plus rapide
            et la moins chère pour obtenir la carte professionnelle. Il existe
            aussi le CQP ALS (Animateur de Loisirs Sportifs) plus généraliste.
          </p>
          <ul>
            <li>
              <strong>Durée</strong> : ~250 à 400 heures (4-6 mois)
            </li>
            <li>
              <strong>Coût moyen</strong> : 3 500€
            </li>
            <li>
              <strong>Format</strong> : présentiel + parfois e-learning
            </li>
            <li>
              <strong>Carte pro</strong> : oui (RNCP niveau 4)
            </li>
          </ul>
          <p>
            <Link href="/comparatif/cqp">
              Lire le comparatif détaillé FMCS vs CQP →
            </Link>
          </p>

          <h2>FMCS — formation en ligne complémentaire</h2>
          <p>
            La <strong>FMCS</strong> (Fitmass Coaching School) est une
            formation 100 % en ligne, créée en 2021 par Nassim Sahili. Elle
            ne remplace pas un diplôme d&apos;État (elle ne donne pas la
            carte pro à elle seule), mais elle couvre les 5 piliers que les
            formations classiques abordent rarement en profondeur :
            anatomie & physiologie, nutrition, programmation, suivi client,
            business du coaching.
          </p>
          <ul>
            <li>
              <strong>Durée</strong> : 6 mois (3h par semaine)
            </li>
            <li>
              <strong>Coût</strong> : révélé en appel découverte
            </li>
            <li>
              <strong>Format</strong> : 100 % en ligne, accès à vie
            </li>
            <li>
              <strong>Carte pro</strong> : non en direct, mais accompagnement
              vers le CQP inclus
            </li>
            <li>
              <strong>Diplômés</strong> : 4 000+ coachs formés (98 %
              satisfaction)
            </li>
          </ul>

          <h2>Notre recommandation par profil</h2>

          <h3>Vous n&apos;avez aucun diplôme et aucune carte pro</h3>
          <p>
            La combinaison <strong>FMCS + CQP IF</strong> est la voie la plus
            efficace : la FMCS vous donne le socle complet de compétences (en
            6 mois, 100 % en ligne, à votre rythme), et le CQP IF vous donne
            la carte pro nécessaire pour exercer en salle (en quelques mois
            de plus). C&apos;est aussi l&apos;option la moins chère parmi
            celles qui mènent à la carte pro.
          </p>

          <h3>Vous avez déjà un BPJEPS, STAPS ou CQP</h3>
          <p>
            La FMCS reste pertinente — et nous la recommandons. Les
            diplômes d&apos;État vous ont donné le cadre légal (carte pro) et
            les bases académiques, mais ils couvrent peu les sujets qui font
            la différence entre &laquo; avoir un diplôme &raquo; et &laquo;
            vivre vraiment du coaching &raquo; : nutrition appliquée poussée,
            programmation par profils clients, gestion psychologique du
            suivi, et toute la partie business (acquisition, tarification,
            statut, pérennité).
          </p>
          <p>
            La FMCS s&apos;ajoute à votre diplôme. Elle ne le remplace pas.
          </p>

          <h2>Tableau récapitulatif</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Critère</th>
                  <th>BPJEPS AF</th>
                  <th>STAPS</th>
                  <th>CQP IF</th>
                  <th>FMCS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Durée</td>
                  <td>9-12 mois</td>
                  <td>3 ans (L)</td>
                  <td>4-6 mois</td>
                  <td>6 mois</td>
                </tr>
                <tr>
                  <td>Coût moyen</td>
                  <td>8 000€</td>
                  <td>Variable (université)</td>
                  <td>3 500€</td>
                  <td>Sur appel</td>
                </tr>
                <tr>
                  <td>Format</td>
                  <td>Présentiel</td>
                  <td>Présentiel</td>
                  <td>Présentiel</td>
                  <td>100% en ligne</td>
                </tr>
                <tr>
                  <td>Carte pro</td>
                  <td>Oui</td>
                  <td>Oui (Licence)</td>
                  <td>Oui</td>
                  <td>Non (mais accompagne vers CQP)</td>
                </tr>
                <tr>
                  <td>Business inclus</td>
                  <td>Très peu</td>
                  <td>Non</td>
                  <td>Très peu</td>
                  <td>Pilier dédié</td>
                </tr>
                <tr>
                  <td>Nutrition appliquée</td>
                  <td>Bases</td>
                  <td>Théorique</td>
                  <td>Bases</td>
                  <td>Pilier dédié</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[0.8125rem] text-[#888]">
            Sources : RNCP (France Compétences), Code du sport (Légifrance),
            documentation publique des centres de formation 2025-2026. Les
            tarifs BPJEPS et CQP IF varient selon les centres — chiffres donnés
            ici à titre indicatif (moyenne marché).
          </p>

          <h2>Discuter de votre situation</h2>
          <p>
            Si vous voulez savoir précisément quelle combinaison est la plus
            adaptée à votre profil, vous pouvez réserver un appel découverte
            gratuit avec l&apos;équipe FMCS. On évalue votre situation, vos
            objectifs, et on vous oriente sans pression.
          </p>
          <p className="not-prose mt-8">
            <Link
              href="/#rdv"
              className="inline-flex items-center gap-2 bg-[#131316] hover:bg-[#2a2a2a] text-white rounded-full px-6 py-3 text-[0.9375rem] font-500 transition-colors"
            >
              Réserver mon appel découverte
            </Link>
          </p>
        </article>
      </main>

      <Footer />
    </>
  );
}
