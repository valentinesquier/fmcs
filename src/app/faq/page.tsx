import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ FMCS — Vos questions sur la formation coach (2026)",
  description:
    "15 réponses claires : durée, distanciel, accompagnement, BPJEPS/CQP, carte pro, prix, débouchés. Les vraies questions des futurs élèves FMCS.",
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: "FAQ FMCS — Vos questions sur la formation coach",
    description:
      "15 réponses claires aux questions les plus posées sur la formation FMCS.",
    url: `${SITE_URL}/faq`,
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

// 15 Q/R structurées par thème — synchro avec le draft Obsidian + inputs Valentin 2 mai 2026.
type QA = { id: string; question: string; reponse: React.ReactNode };
type Section = { theme: string; qas: QA[] };

const sections: Section[] = [
  {
    theme: "Format & durée",
    qas: [
      {
        id: "duree",
        question: "Combien de temps dure la formation ?",
        reponse: (
          <>
            <p>
              La formation FMCS dure <strong>6 mois</strong>, à raison
              d&apos;environ <strong>3 heures par semaine</strong> en moyenne.
              Elle est conçue pour être suivie en parallèle d&apos;une
              activité professionnelle ou d&apos;études. Une fois la formation
              terminée, vous gardez un <strong>accès à vie</strong> à
              l&apos;ensemble des cours et des mises à jour.
            </p>
          </>
        ),
      },
      {
        id: "distanciel",
        question:
          "La formation est-elle 100 % distancielle ou y a-t-il du présentiel ?",
        reponse: (
          <>
            <p>
              La formation FMCS est <strong>100 % en ligne</strong>. Vous
              accédez aux cours, replays, ressources et lives depuis
              n&apos;importe où, à votre rythme. Aucun déplacement
              obligatoire, aucun stage présentiel à valider pour terminer le
              cursus.
            </p>
            <p>
              Les échanges avec les formateurs et les autres élèves se font
              via les <strong>lives mensuels</strong> et un{" "}
              <strong>espace privé</strong> hébergé sur fitmass.school (cf
              question sur l&apos;accompagnement ci-dessous).
            </p>
          </>
        ),
      },
      {
        id: "rythme",
        question: "Est-ce que je peux suivre la formation en travaillant à côté ?",
        reponse: (
          <>
            <p>
              Oui. La formation demande environ <strong>3 heures par semaine</strong>{" "}
              et se suit à votre rythme grâce au format 100 % en ligne. Plus de{" "}
              <strong>4 000 coachs</strong> l&apos;ont déjà suivie, dont
              beaucoup en parallèle d&apos;un emploi salarié, d&apos;études
              ou d&apos;une activité indépendante.
            </p>
          </>
        ),
      },
    ],
  },
  {
    theme: "Reconnaissance & exercice légal",
    qas: [
      {
        id: "diplomante",
        question: "Est-ce que la formation est diplômante ?",
        reponse: (
          <>
            <p>
              <strong>Non</strong>, FMCS n&apos;est pas un diplôme
              d&apos;État. Vous obtenez un <strong>certificat FMCS</strong>{" "}
              délivré par l&apos;école à l&apos;issue du cursus, qui atteste
              de la maîtrise du programme.
            </p>
            <p>
              Pour exercer le coaching contre rémunération en France, la loi
              exige une <strong>carte professionnelle d&apos;éducateur sportif</strong>.
              FMCS ne délivre pas cette carte mais accompagne ses élèves vers
              le CQP IF, qui est la voie la plus rapide et la moins coûteuse
              pour l&apos;obtenir (cf notre{" "}
              <Link href="/comparatif/cqp">comparatif FMCS + CQP IF</Link>).
            </p>
          </>
        ),
      },
      {
        id: "bpjeps-cqp",
        question:
          "Est-ce qu'avec FMCS, je dois quand même passer un BPJEPS ou un CQP ?",
        reponse: (
          <>
            <p>
              <strong>Oui</strong> — si votre objectif est de coacher contre
              rémunération en France. La législation française impose la
              carte professionnelle d&apos;éducateur sportif (article L.212-1
              du Code du sport), et FMCS ne la délivre pas.
            </p>
            <p>
              En pratique, on recommande la voie <strong>CQP IF</strong>{" "}
              plutôt que le BPJEPS : durée plus courte (4 à 6 mois contre 9
              à 12), coût plus bas (~3 500 € contre ~8 000 € en moyenne), et
              même débouché légal (la carte pro). Le détail est dans notre{" "}
              <Link href="/comparatif/cqp">comparatif FMCS + CQP IF</Link>.
            </p>
            <p>
              Si vous avez déjà un BPJEPS, un STAPS ou un CQP, vous
              n&apos;avez rien à repasser : FMCS vient compléter votre socle
              existant sur les piliers que les diplômes d&apos;État couvrent
              peu (nutrition appliquée, programmation avancée, business du
              coaching).
            </p>
          </>
        ),
      },
      {
        id: "presentiel-exercice",
        question: "Est-ce qu'avec la formation, je peux exercer en présentiel ?",
        reponse: (
          <>
            <p>
              <strong>Oui</strong>, à partir du moment où vous avez la carte
              professionnelle d&apos;éducateur sportif (obtenue via CQP IF,
              BPJEPS, STAPS, etc.). Cette carte vous autorise à coacher en
              salle de sport, en club, en association, en cabinet privé ou à
              domicile, partout en France.
            </p>
            <p>
              FMCS vous donne le socle de compétences (anatomie, nutrition,
              programmation, suivi client, business) ; la carte pro vous
              donne le cadre légal. Les deux sont complémentaires.
            </p>
          </>
        ),
      },
    ],
  },
  {
    theme: "Financement & paiement",
    qas: [
      {
        id: "cpf",
        question: "Est-ce qu'on peut payer la formation avec le CPF ?",
        reponse: (
          <>
            <p>
              <strong>Non</strong>, FMCS n&apos;est pas éligible au CPF.
            </p>
            <p>
              Il n&apos;existe pas non plus de dispositif officiel d&apos;aide
              au financement (Pôle Emploi AIF, OPCO, FAFCEA, etc.) qui
              prenne en charge la formation. Le financement est donc{" "}
              <strong>directement assumé par l&apos;élève</strong>.
            </p>
            <p>
              Les modalités de paiement (paiement comptant ou en plusieurs
              fois) vous sont présentées en détail lors de votre{" "}
              <Link href="/#rdv">appel découverte gratuit</Link> avec
              l&apos;équipe FMCS, en fonction de votre situation.
            </p>
          </>
        ),
      },
      {
        id: "prix",
        question: "Combien coûte la formation ?",
        reponse: (
          <>
            <p>
              Le tarif de FMCS vous est présenté en{" "}
              <Link href="/#rdv">appel découverte gratuit</Link> avec
              l&apos;équipe. C&apos;est l&apos;occasion d&apos;évaluer
              ensemble votre situation, vos objectifs et les modalités de
              paiement adaptées à votre profil.
            </p>
            <p>
              Pour vous donner un ordre de grandeur, la combinaison{" "}
              <strong>FMCS + CQP IF</strong> (formation complète + carte pro)
              revient généralement <strong>moins cher qu&apos;un BPJEPS seul</strong>{" "}
              (8 000 € en moyenne), pour un socle de compétences plus
              complet.
            </p>
          </>
        ),
      },
    ],
  },
  {
    theme: "Contenu & déroulement",
    qas: [
      {
        id: "contenu",
        question: "Que contient exactement la formation ?",
        reponse: (
          <>
            <p>
              La formation est structurée autour de{" "}
              <strong>5 piliers indissociables</strong> identifiés par Nassim
              au cours de ses 14 ans de coaching :
            </p>
            <ol>
              <li>
                <strong>Anatomie &amp; physiologie</strong> — insertions
                musculaires, biomécanique, recrutement des fibres
              </li>
              <li>
                <strong>Nutrition &amp; récupération</strong> — balance
                énergétique, macronutriments, 6 types de diètes, timing
              </li>
              <li>
                <strong>Programmation</strong> — périodisation
                linéaire/ondulante/par blocs, méthodes avancées
              </li>
              <li>
                <strong>Suivi client</strong> — anamnèse, bilan postural, 5
                profils psychologiques, fidélisation
              </li>
              <li>
                <strong>Réseau &amp; business</strong> — auto-entreprise,
                tarification, réseaux sociaux, premiers clients
              </li>
            </ol>
            <p>
              Le tout couvre <strong>55+ heures de cours</strong> plus les
              replays live, accessibles à vie.
            </p>
          </>
        ),
      },
      {
        id: "accompagnement",
        question: "Est-ce qu'on est accompagné pendant la formation ?",
        reponse: (
          <>
            <p>
              Oui. Vous suivez les cours en autonomie selon votre rythme, et
              vous bénéficiez en parallèle de <strong>deux canaux d&apos;accompagnement</strong>{" "}
              :
            </p>
            <ul>
              <li>
                <strong>Un live mensuel</strong> avec les formateurs FMCS —
                vous posez vos questions en direct et bénéficiez de
                réponses concrètes adaptées à votre projet.
              </li>
              <li>
                <strong>Un espace privé</strong> sur fitmass.school qui
                réunit l&apos;ensemble des élèves de la formation, pour
                échanger entre vous et progresser ensemble.
              </li>
            </ul>
            <p>
              L&apos;accès à ces deux canaux est inclus pendant{" "}
              <strong>1 an</strong>, et reste <strong>prolongeable</strong>{" "}
              au-delà sur simple demande à l&apos;équipe FMCS.
            </p>
          </>
        ),
      },
      {
        id: "formateurs",
        question: "Qui sont les formateurs ?",
        reponse: (
          <>
            <p>
              FMCS s&apos;appuie sur <strong>4 coachs spécialisés</strong>,
              chacun expert dans son domaine :
            </p>
            <ul>
              <li>
                <Link href="/nassim-sahili"><strong>Nassim Sahili</strong></Link>{" "}
                — fondateur, coach diplômé d&apos;État depuis 2011, créateur
                de la chaîne YouTube Fitmass (1,2M+ abonnés)
              </li>
              <li>
                <strong>Harry</strong> — éducateur sportif diplômé STAPS,
                spécialiste coaching multi-sport
              </li>
              <li>
                <strong>Cédric</strong> — spécialiste programmation
                d&apos;entraînement et périodisation avancée (3 ans aux
                côtés de Nassim)
              </li>
              <li>
                <strong>Johanna</strong> — diététicienne-nutritionniste du
                sport, en charge du module nutrition appliquée
              </li>
            </ul>
            <p>
              Découvrez l&apos;équipe complète sur la page{" "}
              <Link href="/equipe">/equipe</Link>.
            </p>
          </>
        ),
      },
    ],
  },
  {
    theme: "Profil & prérequis",
    qas: [
      {
        id: "debutants",
        question: "Est-ce que la formation est accessible aux débutants ?",
        reponse: (
          <>
            <p>
              Oui, FMCS est ouverte aux débutants comme aux coachs déjà en
              exercice qui veulent étoffer leur socle. Les modules
              d&apos;anatomie et de programmation partent des bases avant
              de monter en complexité, ce qui permet à un profil sans
              connaissance préalable de suivre.
            </p>
            <p>
              Toutes les candidatures ne sont pas validées : un{" "}
              <Link href="/#rdv">appel découverte gratuit</Link> permet à
              l&apos;équipe d&apos;évaluer ensemble si la formation
              correspond à votre projet.
            </p>
          </>
        ),
      },
      {
        id: "deja-diplome",
        question:
          "Et si je suis déjà coach diplômé (BPJEPS / STAPS / CQP), ça vaut le coup ?",
        reponse: (
          <>
            <p>
              Oui, <strong>probablement même plus</strong>. Les diplômes
              d&apos;État français couvrent solidement la pédagogie générale
              et le cadre légal, mais peu :
            </p>
            <ul>
              <li>la nutrition appliquée (au-delà des grandes lignes)</li>
              <li>la programmation avancée (périodisation, méthodes intensives)</li>
              <li>le suivi client psychologique</li>
              <li>le business du coaching (auto-entreprise, tarification, acquisition)</li>
            </ul>
            <p>
              FMCS comble ces angles morts. C&apos;est ce que confirment les
              retours d&apos;élèves déjà titulaires d&apos;un BPJEPS ou
              d&apos;un STAPS qui ont rejoint la formation (cf{" "}
              <Link href="/avis-temoignages">avis et témoignages</Link>).
            </p>
          </>
        ),
      },
    ],
  },
  {
    theme: "Après la formation",
    qas: [
      {
        id: "fin",
        question: "Que se passe-t-il à la fin des 6 mois ?",
        reponse: (
          <>
            <p>
              À la fin du cursus, vous obtenez le{" "}
              <strong>certificat FMCS</strong>. Vous gardez un{" "}
              <strong>accès à vie</strong> au programme (cours, replays,
              mises à jour).
            </p>
            <p>
              Si vous n&apos;avez pas encore la carte pro, FMCS vous
              accompagne directement vers le <strong>CQP IF</strong>, qui se
              passe en 4 à 6 mois en parallèle ou à la suite de la
              formation. Vous pouvez ensuite vous lancer en tant que coach
              indépendant ou postuler en salle de sport, club ou
              association.
            </p>
          </>
        ),
      },
      {
        id: "inscription",
        question: "Comment s'inscrire à FMCS ?",
        reponse: (
          <>
            <p>
              L&apos;inscription passe systématiquement par un{" "}
              <strong>appel découverte gratuit</strong> avec
              l&apos;équipe FMCS. C&apos;est l&apos;occasion :
            </p>
            <ul>
              <li>d&apos;évaluer ensemble votre situation et vos objectifs</li>
              <li>
                de valider que FMCS correspond à votre projet (toutes les
                candidatures ne sont pas validées)
              </li>
              <li>
                de vous présenter en détail le contenu, le tarif et les
                modalités de paiement
              </li>
            </ul>
            <p>
              <Link href="/#rdv">Réservez votre appel découverte ici</Link>.
            </p>
          </>
        ),
      },
    ],
  },
];

// Schema FAQPage : on génère le mainEntity à partir du tableau ci-dessus.
// Important : le `text` du schema doit refléter le contenu humain — on extrait
// donc manuellement les réponses au format texte plat (pour rester en sync, on
// duplique ici la version "texte simple" — toute modif de la version JSX doit
// être répercutée ici).
const faqSchemaEntries: { question: string; answer: string }[] = [
  {
    question: "Combien de temps dure la formation ?",
    answer:
      "La formation FMCS dure 6 mois, à raison d'environ 3 heures par semaine en moyenne. Elle est conçue pour être suivie en parallèle d'une activité professionnelle ou d'études. Une fois la formation terminée, vous gardez un accès à vie à l'ensemble des cours et des mises à jour.",
  },
  {
    question:
      "La formation est-elle 100 % distancielle ou y a-t-il du présentiel ?",
    answer:
      "La formation FMCS est 100 % en ligne. Vous accédez aux cours, replays, ressources et lives depuis n'importe où, à votre rythme. Aucun déplacement obligatoire, aucun stage présentiel à valider pour terminer le cursus. Les échanges avec les formateurs et les autres élèves se font via les lives mensuels et un espace privé hébergé sur fitmass.school.",
  },
  {
    question: "Est-ce que je peux suivre la formation en travaillant à côté ?",
    answer:
      "Oui. La formation demande environ 3 heures par semaine et se suit à votre rythme grâce au format 100 % en ligne. Plus de 4 000 coachs l'ont déjà suivie, dont beaucoup en parallèle d'un emploi salarié, d'études ou d'une activité indépendante.",
  },
  {
    question: "Est-ce que la formation est diplômante ?",
    answer:
      "Non, FMCS n'est pas un diplôme d'État. Vous obtenez un certificat FMCS délivré par l'école à l'issue du cursus, qui atteste de la maîtrise du programme. Pour exercer le coaching contre rémunération en France, la loi exige une carte professionnelle d'éducateur sportif. FMCS ne délivre pas cette carte mais accompagne ses élèves vers le CQP IF, qui est la voie la plus rapide et la moins coûteuse pour l'obtenir.",
  },
  {
    question:
      "Est-ce qu'avec FMCS, je dois quand même passer un BPJEPS ou un CQP ?",
    answer:
      "Oui — si votre objectif est de coacher contre rémunération en France. La législation française impose la carte professionnelle d'éducateur sportif (article L.212-1 du Code du sport), et FMCS ne la délivre pas. En pratique, on recommande la voie CQP IF plutôt que le BPJEPS : durée plus courte (4 à 6 mois contre 9 à 12), coût plus bas (~3 500 € contre ~8 000 € en moyenne), et même débouché légal (la carte pro). Si vous avez déjà un BPJEPS, un STAPS ou un CQP, vous n'avez rien à repasser : FMCS vient compléter votre socle existant sur les piliers que les diplômes d'État couvrent peu (nutrition appliquée, programmation avancée, business du coaching).",
  },
  {
    question: "Est-ce qu'avec la formation, je peux exercer en présentiel ?",
    answer:
      "Oui, à partir du moment où vous avez la carte professionnelle d'éducateur sportif (obtenue via CQP IF, BPJEPS, STAPS, etc.). Cette carte vous autorise à coacher en salle de sport, en club, en association, en cabinet privé ou à domicile, partout en France. FMCS vous donne le socle de compétences (anatomie, nutrition, programmation, suivi client, business) ; la carte pro vous donne le cadre légal. Les deux sont complémentaires.",
  },
  {
    question: "Est-ce qu'on peut payer la formation avec le CPF ?",
    answer:
      "Non, FMCS n'est pas éligible au CPF. Il n'existe pas non plus de dispositif officiel d'aide au financement (Pôle Emploi AIF, OPCO, FAFCEA, etc.) qui prenne en charge la formation. Le financement est donc directement assumé par l'élève. Les modalités de paiement (paiement comptant ou en plusieurs fois) vous sont présentées en détail lors de votre appel découverte gratuit avec l'équipe FMCS, en fonction de votre situation.",
  },
  {
    question: "Combien coûte la formation ?",
    answer:
      "Le tarif de FMCS vous est présenté en appel découverte gratuit avec l'équipe. C'est l'occasion d'évaluer ensemble votre situation, vos objectifs et les modalités de paiement adaptées à votre profil. Pour vous donner un ordre de grandeur, la combinaison FMCS + CQP IF (formation complète + carte pro) revient généralement moins cher qu'un BPJEPS seul (8 000 € en moyenne), pour un socle de compétences plus complet.",
  },
  {
    question: "Que contient exactement la formation ?",
    answer:
      "La formation est structurée autour de 5 piliers indissociables identifiés par Nassim au cours de ses 14 ans de coaching : 1) Anatomie & physiologie ; 2) Nutrition & récupération ; 3) Programmation ; 4) Suivi client ; 5) Réseau & business. Le tout couvre 55+ heures de cours plus les replays live, accessibles à vie.",
  },
  {
    question: "Est-ce qu'on est accompagné pendant la formation ?",
    answer:
      "Oui. Vous suivez les cours en autonomie selon votre rythme, et vous bénéficiez en parallèle de deux canaux d'accompagnement : un live mensuel avec les formateurs FMCS pour poser vos questions en direct, et un espace privé sur fitmass.school qui réunit l'ensemble des élèves de la formation pour échanger entre vous. L'accès à ces deux canaux est inclus pendant 1 an, et reste prolongeable au-delà sur simple demande à l'équipe FMCS.",
  },
  {
    question: "Qui sont les formateurs ?",
    answer:
      "FMCS s'appuie sur 4 coachs spécialisés : Nassim Sahili (fondateur, BPJEPS 2011, créateur Fitmass 1,2M abonnés), Harry (éducateur sportif STAPS, multi-sport), Cédric (spécialiste programmation, 3 ans aux côtés de Nassim), Johanna (diététicienne-nutritionniste du sport). Découvrez l'équipe complète sur la page /equipe.",
  },
  {
    question: "Est-ce que la formation est accessible aux débutants ?",
    answer:
      "Oui, FMCS est ouverte aux débutants comme aux coachs déjà en exercice qui veulent étoffer leur socle. Les modules d'anatomie et de programmation partent des bases avant de monter en complexité, ce qui permet à un profil sans connaissance préalable de suivre. Toutes les candidatures ne sont pas validées : un appel découverte gratuit permet à l'équipe d'évaluer ensemble si la formation correspond à votre projet.",
  },
  {
    question:
      "Et si je suis déjà coach diplômé (BPJEPS / STAPS / CQP), ça vaut le coup ?",
    answer:
      "Oui, probablement même plus. Les diplômes d'État français couvrent solidement la pédagogie générale et le cadre légal, mais peu : la nutrition appliquée (au-delà des grandes lignes), la programmation avancée (périodisation, méthodes intensives), le suivi client psychologique, le business du coaching (auto-entreprise, tarification, acquisition). FMCS comble ces angles morts. C'est ce que confirment les retours d'élèves déjà titulaires d'un BPJEPS ou d'un STAPS qui ont rejoint la formation.",
  },
  {
    question: "Que se passe-t-il à la fin des 6 mois ?",
    answer:
      "À la fin du cursus, vous obtenez le certificat FMCS. Vous gardez un accès à vie au programme (cours, replays, mises à jour). Si vous n'avez pas encore la carte pro, FMCS vous accompagne directement vers le CQP IF, qui se passe en 4 à 6 mois en parallèle ou à la suite de la formation. Vous pouvez ensuite vous lancer en tant que coach indépendant ou postuler en salle de sport, club ou association.",
  },
  {
    question: "Comment s'inscrire à FMCS ?",
    answer:
      "L'inscription passe systématiquement par un appel découverte gratuit avec l'équipe FMCS. C'est l'occasion d'évaluer ensemble votre situation et vos objectifs, de valider que FMCS correspond à votre projet (toutes les candidatures ne sont pas validées), et de vous présenter en détail le contenu, le tarif et les modalités de paiement.",
  },
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSchemaEntries.map((e) => ({
    "@type": "Question",
    name: e.question,
    acceptedAnswer: { "@type": "Answer", text: e.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "FAQ",
      item: `${SITE_URL}/faq`,
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
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
              FAQ
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="mx-auto max-w-[860px] px-6 mb-12 text-center">
          <p className="text-[0.6875rem] font-700 uppercase tracking-[0.15em] text-[#e5b80b] mb-3">
            Questions &amp; réponses
          </p>
          <h1 className="text-[2rem] sm:text-[2.5rem] font-700 leading-[1.1] tracking-[-0.02em] text-[#131316] mb-5">
            FAQ — Tout ce qu&apos;il faut savoir avant de rejoindre FMCS
          </h1>
          <p className="text-[1.0625rem] text-[#555] leading-[1.8] max-w-[680px] mx-auto">
            15 réponses claires aux questions les plus posées par les futurs
            élèves : durée, distanciel, accompagnement, BPJEPS/CQP, prix,
            débouchés. Si votre question n&apos;y est pas, l&apos;équipe est
            disponible en appel découverte.
          </p>
        </header>

        {/* Bloc CTA "pas trouvé votre réponse" en haut (conversion immédiate) */}
        <section className="mx-auto max-w-[720px] px-6 mb-14">
          <div className="rounded-2xl border border-[#e5e5e5] bg-[#f8f7f4] p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
            <p className="text-[0.9375rem] text-[#131316] text-center sm:text-left">
              Vous ne trouvez pas votre réponse ? Posez-la directement à
              l&apos;équipe.
            </p>
            <Link
              href="/#rdv"
              className="shrink-0 inline-flex items-center gap-2 bg-[#131316] hover:bg-black text-white rounded-full px-5 py-2.5 text-[0.875rem] font-600 transition-colors"
            >
              Réserver un appel →
            </Link>
          </div>
        </section>

        {/* 15 Q/R par thème — Typography (prose-fmcs) */}
        <article className="prose prose-lg prose-fmcs mx-auto max-w-[720px] px-6">
          {sections.map((section, sIdx) => (
            <section key={section.theme} aria-labelledby={`section-${sIdx}`}>
              <h2
                id={`section-${sIdx}`}
                className="not-prose text-[1.5rem] sm:text-[1.75rem] font-700 text-[#131316] mt-14 mb-6 tracking-[-0.01em] flex items-center gap-3"
              >
                <span
                  aria-hidden="true"
                  className="inline-block w-8 h-[3px] bg-[#e5b80b] rounded-full"
                />
                {section.theme}
              </h2>
              {section.qas.map((qa) => (
                <div key={qa.id} id={qa.id} className="scroll-mt-24">
                  <h3>{qa.question}</h3>
                  {qa.reponse}
                </div>
              ))}
            </section>
          ))}
        </article>

        {/* CTA card finale */}
        <section className="mx-auto max-w-[860px] px-6 mt-20">
          <div className="rounded-2xl bg-[#131316] text-white p-8 sm:p-12 text-center overflow-hidden relative">
            <p className="text-[0.6875rem] font-700 uppercase tracking-[0.15em] text-[#e5b80b] mb-3">
              Discuter avec l&apos;équipe FMCS
            </p>
            <h2
              className="text-[1.5rem] sm:text-[2rem] font-700 leading-[1.15] tracking-[-0.02em] mb-4"
              style={{ color: "#ffffff" }}
            >
              Une question spécifique sur votre projet ?
            </h2>
            <p className="text-[0.9375rem] sm:text-[1rem] text-white/70 max-w-[520px] mx-auto mb-7 leading-[1.8]">
              Réservez un appel découverte gratuit. On évalue votre
              situation, vos objectifs, et on vous explique en détail comment
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
