import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Avis FMCS — 12 témoignages d'anciens élèves coachs",
  description:
    "Découvrez 12 avis vérifiés d'anciens élèves FMCS : coachs BPJEPS, débutants, reconversions. Verbatims complets, profils variés, retours sur la formation.",
  alternates: { canonical: `${SITE_URL}/avis-temoignages` },
  openGraph: {
    title: "Avis FMCS — 12 témoignages d'anciens élèves",
    description:
      "12 témoignages intégraux d'anciens élèves FMCS : coachs déjà diplômés, débutants, reconversions.",
    url: `${SITE_URL}/avis-temoignages`,
    type: "website",
    images: [
      {
        url: "/images/nassim-fondateur.webp",
        width: 1024,
        height: 1024,
        alt: "FMCS — Fitmass Coaching School",
      },
    ],
  },
};

// 12 témoignages — verbatims intégraux récupérés depuis https://fmcs.mykajabi.com/ (2 mai 2026).
// Photos téléchargées en local dans /public/images/temoignages/.
// Aucune coupe, aucune paraphrase. Fautes orthographiques d'origine conservées (signal d'authenticité).
type Temoignage = {
  id: string;
  prenom: string;
  profil: string;
  photo: string;
  alt: string;
  verbatim: string;
};

const temoignages: Temoignage[] = [
  {
    id: "theo-bpjeps",
    prenom: "Théo",
    profil: "Coach BPJEPS HM (2018), reconversion vers FMCS",
    photo: "/images/temoignages/theo-1.jpeg",
    alt: "Théo, coach BPJEPS HM 2018, élève FMCS",
    verbatim:
      "J'ai rejoins la team car j'ai clairement eu un manque d'information. J'ai obtenu mon BPJEPS haltérophilie musculation en janvier 2018 dans un organisme de formation dont je ne citerai pas le nom qui c'est extrêmement mal passé... Des cours à dormir debout, aucune organisation sur les cours. Aucun cours sur la nutrition la récupération le choix des exercices et j'en passe.",
  },
  {
    id: "hanane",
    prenom: "Hanane",
    profil: "Future coach, programmation",
    photo: "/images/temoignages/hanane.jpeg",
    alt: "Hanane, future coach sportive, élève FMCS",
    verbatim:
      "J'ai grandit personnellement et professionnellement. Je suis maintenant complètement assurée et confiantes dans la programmation des plans d'entraînements pour mes clients. C'est une formation ultra complète et qui va à l'essentiel pour nous assurer d'apporter toutes les connaissances nécessaires dans notre futur métier de coach sportif.",
  },
  {
    id: "quentin",
    prenom: "Quentin",
    profil: "Coach diplômé(e) 2014, reconversion Québec",
    photo: "/images/temoignages/quentin.jpeg",
    alt: "Quentin, coach diplômé(e) depuis 2014, élève FMCS",
    verbatim:
      "Coach diplômée depuis 2014 j'ai fais confiance à Nassim pour acquérir de nouvelles compétences. En effet, en mars 2021 j'étais responsable d'une salle de sport fermée à cause de la pandémie. Je préparai en parallèle mon immigration au Québec pour être entraîneur privé. Je voulais avoir d'autres outils et il était temps que je me remette en question. Cette formation a répondue à mes attentes, j'ai pu avancer à mon rythme.",
  },
  {
    id: "samuel",
    prenom: "Samuel",
    profil: "Recommandation forte",
    photo: "/images/temoignages/samuel.jpeg",
    alt: "Samuel, élève FMCS",
    verbatim:
      "Si vous ne savez pas quel formation choisir, ne cherchez plus, vous l'avez ! La FMCS est une formation complète qui approfondira vos connaissances et vous poussera à vous perfectionner afin de donner la meilleure version de vous même.",
  },
  {
    id: "lexie",
    prenom: "Lexie",
    profil: "Recommandation présentiel et distance",
    photo: "/images/temoignages/lexie.jpeg",
    alt: "Lexie, élève FMCS",
    verbatim:
      "Une formation excellente et très complète. De l'anatomie à l'entraînement en passant par la nutrition et la relation avec le client, on oublie aucun aspect du coaching. Je recommande fortement cette formation à toutes les personnes qui souhaitent se lancer dans le coaching, que ce soit en présentiel ou à distance.",
  },
  {
    id: "valentin-eleve",
    prenom: "Valentin",
    profil: "Futur coach, bases scientifiques",
    photo: "/images/temoignages/valentin.jpeg",
    alt: "Valentin, futur coach sportif, élève FMCS (homonyme du co-fondateur)",
    verbatim:
      "Une formation qui se donne les moyens pour devenir une future référence Des piliers solides avec une base scientifique indéniable. Dans l'idée d'en faire un futur vrai métier, je pense avoir les clés en main pour appréhender au mieux cette activité (le terrain va m'apprendre le reste de ce que je dois connaître sur ce métier de passion). La FMCS m'apporte des bases solides, un \"retour aux sources\" avec des concepts fondamentaux et théoriques, des exemples et des mises en situation de qualité.",
  },
  {
    id: "romain",
    prenom: "Romain",
    profil: "Réactivité de l'équipe",
    photo: "/images/temoignages/romain.jpeg",
    alt: "Romain, élève FMCS",
    verbatim:
      "La formation aborde des sujets importants que l'on avait même pas imaginé. J'ai appris énormément de choses qui me seront très précieuses dans le futur. La formation est très complète et aborde des sujets importants que l'on avait même pas imaginé. Surtout le côté vraiment concret du métier de coach que l'on a du mal à imaginer. La formation nous permet de vraiment nous projeter. L'équipe est très réactive pour répondre aux questions et nous accompagner tout au long de la formation.",
  },
  {
    id: "pauline",
    prenom: "Pauline",
    profil: "Anatomie, biomécanique, métabolisme",
    photo: "/images/temoignages/pauline.jpeg",
    alt: "Pauline, future coach, élève FMCS",
    verbatim:
      "La formation m'a apporté énormément de connaissances supplémentaires sur l'anatomie, la bio-mécanique, le métabolisme… Mais surtout une autre vision du coaching. Je suis très satisfaite. La FMCS m'a apporté énormément de confiance et encore plus de motivation pour la suite. Je n'ai qu'un conseil, si vous avez envie d'intégrer cette formation que vous êtes motivés et que vous avez envie d'apprendre et d'acquérir un max de connaissances pour pouvoir peut-être devenir coach.",
  },
  {
    id: "theo-neophytes",
    prenom: "Théo",
    profil: "Accessible aux néophytes et aux confirmés",
    photo: "/images/temoignages/theo-2.jpeg",
    alt: "Théo, élève FMCS (différent du premier Théo, profil différent)",
    verbatim:
      "La FMCS est une formation riche en connaissances et en conseils très pratiques. Les formateurs sont à l'écoute, répondent aux questions rapidement et nous transmettent leur expérience personnelle. Je pense qu'elle convient aussi bien aux néophytes qu'à ceux qui sont plus expérimentés car certains cours comme ceux sur la nutrition sont poussés en terme de savoir mais pas inaccessibles.",
  },
  {
    id: "megane",
    prenom: "Mégane",
    profil: "Réaliser son rêve, se lancer",
    photo: "/images/temoignages/megane.png",
    alt: "Mégane, future coach, élève FMCS",
    verbatim:
      "J'ai vu dans cette formation un espoir de pouvoir enfin réaliser mon rêve. La formation FMCS est extrêmement complète, en effet elle aborde autant l'anatomie et la physiologie que la programmation d'entraînement en passant par la nutrition et aussi tout ce qui touche au suivi et l'accompagnement des clients jusqu'aux aspects pour pouvoir se développer. Quand on a suivi la formation on sent que l'on a toutes les clés en main pour pouvoir se lancer correctement dans le coaching sportif.",
  },
  {
    id: "sebastien",
    prenom: "Sébastien",
    profil: "Double diplômé BPJEPS APT + AF HM",
    photo: "/images/temoignages/sebastien.png",
    alt: "Sébastien, BPJEPS APT et BPJEPS AF HM, élève FMCS",
    verbatim:
      "Un bon coach devrait toujours se remettre en question et se former. Après un BPJEPS APT, puis un BPJEPS AF HM, je me suis intéressé à la FMCS. Contenu, pédagogie, à la pointe des dernières découvertes en lien avec la musculation, cette formation est un must.",
  },
  {
    id: "dimitri",
    prenom: "Dimitri",
    profil: "Pratique personnelle et clients",
    photo: "/images/temoignages/dimitri.png",
    alt: "Dimitri, élève FMCS",
    verbatim:
      "Une formation très complète qui m'a permis de me rassurer sur plusieurs points. J'ai pu acquérir de nombreuses connaissances au niveau théorique mais aussi pour ma pratique personnelle et ainsi pouvoir moi même tester de nouvelles variables d'entrainements sur mes propres programme et par la suite les appliquer dans les programmes de mes futurs clients.",
  },
];

const reviewSchemaList = temoignages.map((t) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  author: { "@type": "Person", name: t.prenom },
  itemReviewed: {
    "@type": "Course",
    "@id": `${SITE_URL}/#course`,
    name: "FMCS — Fitmass Coaching School",
    provider: {
      "@type": "EducationalOrganization",
      name: "FMCS",
      url: SITE_URL,
    },
  },
  reviewBody: t.verbatim,
}));

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Avis & témoignages",
      item: `${SITE_URL}/avis-temoignages`,
    },
  ],
};

function TemoignageCard({ t }: { t: Temoignage }) {
  return (
    <article className="rounded-2xl border border-[#e5e5e5] bg-white p-7 shadow-sm flex flex-col">
      {/* Header card : photo + identité */}
      <div className="flex items-center gap-4 mb-5">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#e5e5e5] shrink-0">
          <Image
            src={t.photo}
            alt={t.alt}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="text-[1.0625rem] font-700 text-[#131316] leading-tight">
            {t.prenom}
          </p>
          <p className="text-[0.8125rem] text-[#888] mt-0.5 leading-snug">
            {t.profil}
          </p>
        </div>
      </div>

      {/* Verbatim */}
      <blockquote className="relative pl-1">
        <span
          aria-hidden="true"
          className="absolute -left-1 -top-2 text-[2.5rem] leading-none text-[#e5b80b] font-700 select-none"
          style={{ fontFamily: "Georgia, serif" }}
        >
          “
        </span>
        <p className="text-[0.9375rem] leading-[1.7] text-[#2a2a2a] pl-7 italic">
          {t.verbatim}
        </p>
      </blockquote>
    </article>
  );
}

export default function AvisTemoignagesPage() {
  return (
    <>
      {reviewSchemaList.map((schema, i) => (
        <script
          key={`review-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="pt-[100px] pb-20 bg-white">
        {/* Breadcrumb */}
        <nav
          aria-label="Fil d'Ariane"
          className="mx-auto max-w-[1080px] px-6 text-[0.8125rem] text-[#888] mb-6"
        >
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#131316] transition-colors">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-[#131316] font-500" aria-current="page">
              Avis &amp; témoignages
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="mx-auto max-w-[860px] px-6 mb-12 text-center">
          <p className="text-[0.6875rem] font-700 uppercase tracking-[0.15em] text-[#e5b80b] mb-3">
            Avis &amp; témoignages
          </p>
          <h1 className="text-[2rem] sm:text-[2.5rem] font-700 leading-[1.1] tracking-[-0.02em] text-[#131316] mb-5">
            12 anciens élèves FMCS prennent la parole
          </h1>
          <p className="text-[1.0625rem] text-[#555] leading-[1.8] max-w-[680px] mx-auto">
            Plus de 4 000 coachs ont été formés par FMCS depuis 2021. Voici les
            retours intégraux de 12 d&apos;entre eux — coachs déjà diplômés
            (BPJEPS, STAPS), débutants en reconversion, futurs coachs en
            construction de leur projet. Chaque témoignage est publié sans
            coupe ni reformulation.
          </p>
        </header>

        {/* Bandeau réassurance */}
        <section
          aria-label="Chiffres clés FMCS"
          className="mx-auto max-w-[860px] px-6 mb-14"
        >
          <div className="rounded-2xl border border-[#e5e5e5] bg-[#f8f7f4] p-6 sm:p-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-[1.75rem] sm:text-[2rem] font-700 text-[#131316] leading-none mb-1">
                  4 000+
                </p>
                <p className="text-[0.75rem] uppercase tracking-[0.05em] text-[#888]">
                  Coachs formés
                </p>
              </div>
              <div className="border-x border-[#e5e5e5]">
                <p className="text-[1.75rem] sm:text-[2rem] font-700 text-[#131316] leading-none mb-1">
                  98 %
                </p>
                <p className="text-[0.75rem] uppercase tracking-[0.05em] text-[#888]">
                  Satisfaction
                </p>
              </div>
              <div>
                <p className="text-[1.75rem] sm:text-[2rem] font-700 text-[#131316] leading-none mb-1">
                  12
                </p>
                <p className="text-[0.75rem] uppercase tracking-[0.05em] text-[#888]">
                  Témoignages publiés
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grille 12 témoignages */}
        <section
          aria-label="Témoignages"
          className="mx-auto max-w-[1080px] px-6 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {temoignages.map((t) => (
              <TemoignageCard key={t.id} t={t} />
            ))}
          </div>
        </section>

        {/* Section avis publics complémentaires */}
        <section
          aria-label="Avis publics complémentaires"
          className="mx-auto max-w-[720px] px-6 mb-12 text-center"
        >
          <h2 className="text-[1.25rem] sm:text-[1.5rem] font-700 text-[#131316] mb-4 tracking-[-0.01em]">
            D&apos;autres avis publics sur FMCS
          </h2>
          <p className="text-[0.9375rem] text-[#555] leading-[1.8] mb-5">
            Au-delà des 12 témoignages écrits ci-dessus, vous pouvez consulter
            les retours publics sur Trustpilot et les commentaires de la
            chaîne YouTube Fitmass.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://fr.trustpilot.com/review/fitmass.school"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white hover:bg-[#f8f7f4] px-5 py-2.5 text-[0.875rem] font-600 text-[#131316] transition-colors"
            >
              Voir les avis Trustpilot →
            </a>
            <a
              href="https://www.youtube.com/@FITMASS-COACHING"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white hover:bg-[#f8f7f4] px-5 py-2.5 text-[0.875rem] font-600 text-[#131316] transition-colors"
            >
              Chaîne YouTube Fitmass →
            </a>
          </div>
        </section>

        {/* CTA card finale */}
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
