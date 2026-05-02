import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nassim Sahili — Fondateur FMCS, créateur Fitmass (1,2M abonnés)",
  description:
    "Coach diplômé d'État depuis 2011, fondateur de FMCS, créateur de la chaîne Fitmass (1,2M+ abonnés YouTube). Découvrez son parcours et sa méthode.",
  alternates: { canonical: `${SITE_URL}/nassim-sahili` },
  openGraph: {
    title: "Nassim Sahili — Fondateur FMCS",
    description:
      "Coach diplômé d'État depuis 2011, créateur de Fitmass (1,2M+ abonnés YouTube), fondateur de FMCS et co-fondateur de Coalition Nutrition.",
    url: `${SITE_URL}/nassim-sahili`,
    type: "profile",
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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#nassim-sahili`,
  name: "Nassim Sahili",
  jobTitle: "Fondateur FMCS, coach diplômé d'État",
  description:
    "Coach diplômé d'État depuis 2011, créateur de la chaîne YouTube Fitmass (1,2M+ abonnés), fondateur de FMCS (Fitmass Coaching School) et co-fondateur de Coalition Nutrition. Propriétaire de deux salles de sport à Lyon.",
  image: `${SITE_URL}/images/nassim-fondateur.webp`,
  url: `${SITE_URL}/nassim-sahili`,
  worksFor: { "@id": `${SITE_URL}/#organization` },
  knowsAbout: [
    "Musculation",
    "Nutrition sportive",
    "Coaching sportif",
    "Programmation d'entraînement",
    "Pédagogie sportive",
    "Business du coaching",
  ],
  sameAs: [
    "https://www.youtube.com/channel/UCC1Tdag0L4dfOEDAsWW6TvQ",
    "https://www.youtube.com/@FITMASS-COACHING",
    "https://www.instagram.com/nassim.sahili/",
    "https://www.instagram.com/fitmass.school/",
    "https://fr.linkedin.com/in/nassim-sahili-b3217a201",
    "https://open.spotify.com/show/0wccS7iw5urKkIzi1vJzTw",
    "https://podcasts.apple.com/us/podcast/l%C3%A0-on-discute/id1628541875",
    "https://fr.trustpilot.com/review/fitmass.school",
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
      name: "Nassim Sahili",
      item: `${SITE_URL}/nassim-sahili`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quel diplôme a Nassim Sahili ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nassim Sahili est titulaire du BPJEPS AGFF (Brevet Professionnel de la Jeunesse, de l'Éducation Populaire et du Sport, mention Activités Gymniques de la Forme et de la Force), obtenu en février 2011 après 18 mois de formation, avec deux mentions : musculation sur plateau et cours collectifs/fitness.",
      },
    },
    {
      "@type": "Question",
      name: "Combien Nassim Sahili a-t-il d'abonnés sur YouTube ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La chaîne YouTube Fitmass, créée par Nassim en 2014, dépasse aujourd'hui les 1,2 million d'abonnés. C'est l'une des plus grandes chaînes francophones consacrées à la musculation et au coaching sportif.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi Nassim a-t-il créé FMCS ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nassim a créé FMCS en 2021 après huit ans (2013-2020) passés à former des stagiaires BPJEPS dans sa salle de sport. Il a constaté un écart majeur entre ce qu'enseignent les diplômes d'État français (formation longue, contenu daté, coût élevé) et les compétences réelles nécessaires pour vivre durablement du coaching. FMCS est la formation qu'il aurait voulu suivre lui-même quand il a débuté.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de coachs ont été formés par FMCS ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depuis sa création en 2021, FMCS a formé plus de 4 000 coachs en France, avec un taux de satisfaction de 98 % d'après les retours élèves.",
      },
    },
    {
      "@type": "Question",
      name: "Où exerce Nassim Sahili ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nassim exerce à Lyon, où il est propriétaire de deux salles de sport : Gym Nass et VO2Max Lyon. Il coache encore régulièrement et utilise ses salles comme terrain d'application des principes enseignés à FMCS.",
      },
    },
    {
      "@type": "Question",
      name: "Comment contacter Nassim ou l'équipe FMCS ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le moyen le plus direct est de réserver un appel découverte gratuit avec l'équipe FMCS via la page d'accueil fitmass.school. Pour suivre Nassim au quotidien : YouTube Fitmass, Instagram @nassim.sahili, podcast « Là On Discute ».",
      },
    },
  ],
};

// Sections H2 pour la TOC
const TOC = [
  { id: "coach-2011", label: "Coach diplômé d'État depuis 2011" },
  { id: "youtube-fitmass", label: "La chaîne YouTube Fitmass : 1,2M abonnés" },
  { id: "methode-fmcs", label: "La méthode FMCS : cinq piliers indissociables" },
  { id: "creation-fmcs", label: "Pourquoi Nassim a créé FMCS en 2021" },
  { id: "ecosysteme", label: "Trois marques complémentaires" },
  { id: "podcast", label: "« Là On Discute » : le podcast curiosité" },
  { id: "salles-lyon", label: "Les deux salles de sport à Lyon" },
  { id: "equipe", label: "L'équipe FMCS autour de Nassim" },
  { id: "faq", label: "FAQ" },
];

export default function NassimSahiliPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
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
              Nassim Sahili
            </li>
          </ol>
        </nav>

        {/* Hero bio */}
        <header className="mx-auto max-w-[860px] px-6 mb-12">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
            <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-[#e5e5e5] shadow-sm shrink-0">
              <Image
                src="/images/nassim-fondateur.webp"
                alt="Nassim Sahili, fondateur de FMCS"
                fill
                priority
                sizes="200px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[0.875rem] uppercase tracking-[0.05em] text-[#888] font-500 mb-2">
                Fondateur FMCS · Coach diplômé d&apos;État · Créateur de Fitmass
              </p>
              <h1 className="text-[2rem] sm:text-[2.5rem] font-700 leading-[1.1] tracking-[-0.02em] text-[#131316] mb-4">
                Nassim Sahili — Coach diplômé d&apos;État, fondateur FMCS et
                créateur Fitmass
              </h1>
              <p className="text-[1.0625rem] text-[#555] leading-[1.8]">
                Coach diplômé d&apos;État depuis 2011, Nassim Sahili est le
                créateur de la chaîne YouTube Fitmass, l&apos;une des plus
                grandes chaînes de musculation francophones avec plus de 1,2
                million d&apos;abonnés. Il est le fondateur de FMCS (Fitmass
                Coaching School), la formation en ligne qui forme plus de 4 000
                coachs en France, et le co-fondateur de Coalition Nutrition.
              </p>
            </div>
          </div>
        </header>

        {/* INFOBOX faits clés */}
        <aside
          aria-label="Faits clés Nassim Sahili"
          className="mx-auto max-w-[860px] px-6 mb-12"
        >
          <div className="rounded-2xl border border-[#e5e5e5] bg-[#f8f7f4] p-6 sm:p-8">
            <p className="text-[0.6875rem] font-700 uppercase tracking-[0.15em] text-[#e5b80b] mb-4">
              Faits clés
            </p>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-5 text-[0.9375rem] leading-[1.6]">
              <div className="flex gap-2">
                <dt className="text-[#888] shrink-0">Diplôme :</dt>
                <dd className="text-[#131316] font-500">
                  BPJEPS AGFF (février 2011)
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-[#888] shrink-0">YouTube :</dt>
                <dd className="text-[#131316] font-500">
                  Fitmass — 1,2M+ abonnés (depuis 2014)
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-[#888] shrink-0">Instagram :</dt>
                <dd className="text-[#131316] font-500">@nassim.sahili</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-[#888] shrink-0">Podcast :</dt>
                <dd className="text-[#131316] font-500">
                  « Là On Discute » — 85 épisodes
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-[#888] shrink-0">Salles :</dt>
                <dd className="text-[#131316] font-500">
                  Gym Nass + VO2Max Lyon
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-[#888] shrink-0">Société :</dt>
                <dd className="text-[#131316] font-500">
                  Fit-Mass Formations (Lyon)
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-[#888] shrink-0">FMCS :</dt>
                <dd className="text-[#131316] font-500">
                  4 000+ coachs formés · 98 % satisfaction
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-[#888] shrink-0">Coalition Nutrition :</dt>
                <dd className="text-[#131316] font-500">
                  Co-fondateur (2023)
                </dd>
              </div>
            </dl>
          </div>
        </aside>

        {/* Table des matières */}
        <aside
          aria-label="Sommaire"
          className="mx-auto max-w-[720px] px-6 mb-12"
        >
          <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6 sm:p-8">
            <p className="text-[0.6875rem] font-700 uppercase tracking-[0.15em] text-[#e5b80b] mb-3">
              Dans cette page
            </p>
            <ol className="space-y-3 text-[0.9375rem] leading-[1.6] list-decimal list-inside text-[#131316]">
              {TOC.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-[#131316] hover:text-[#e5b80b] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        {/* Corps article */}
        <article
          className="mx-auto max-w-[720px] px-6
            [&_p]:text-[1.0625rem] [&_p]:leading-[1.9] [&_p]:text-[#2a2a2a] [&_p]:my-7
            [&_h2]:text-[1.625rem] sm:[&_h2]:text-[1.875rem] [&_h2]:font-700 [&_h2]:tracking-[-0.02em] [&_h2]:text-[#131316] [&_h2]:mt-20 [&_h2]:mb-7 [&_h2]:scroll-mt-24 [&_h2]:leading-[1.2]
            [&_h3]:text-[1.125rem] [&_h3]:font-700 [&_h3]:tracking-[-0.01em] [&_h3]:text-[#131316] [&_h3]:mt-14 [&_h3]:mb-5
            [&_ul]:my-7 [&_ul]:list-disc [&_ul]:pl-6
            [&_ol]:my-7 [&_ol]:list-decimal [&_ol]:pl-6
            [&_li]:my-3 [&_li]:leading-[1.85] [&_li]:text-[1.0625rem] [&_li]:text-[#2a2a2a]
            [&_strong]:font-700 [&_strong]:text-[#131316]
            [&_a]:text-[#131316] [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[#e5b80b] [&_a]:transition-colors"
        >

          <h2 id="coach-2011">Coach diplômé d&apos;État depuis 2011</h2>
          <p>
            Nassim pratique la musculation depuis 2006. Il obtient son BPJEPS
            AGFF (Activités Gymniques de la Forme et de la Force) en février
            2011, après une formation de 18 mois avec deux mentions :
            musculation sur plateau et cours collectifs/fitness. La formation
            lui coûte 5 800 € à l&apos;époque, qu&apos;il paye intégralement de
            sa poche, sans financement extérieur. Avec l&apos;inflation, ce
            montant représenterait aujourd&apos;hui environ 7 000 à 7 500 €.
          </p>
          <p>
            Diplômé, il commence à exercer comme coach sportif. À partir de
            2013, il accueille aussi des stagiaires BPJEPS dans l&apos;une de
            ses salles de sport à Lyon. Ce rôle de tuteur, qu&apos;il exercera
            pendant huit ans (2013 à 2020), va peu à peu construire sa
            conviction sur l&apos;état réel des formations d&apos;État pour les
            coachs sportifs en France, et finir par le pousser à fonder sa
            propre école.
          </p>
          <p>
            Nassim continue aujourd&apos;hui de coacher au quotidien dans ses
            deux salles de sport lyonnaises, en parallèle de la supervision de
            FMCS.
          </p>

          <h2 id="youtube-fitmass">
            La chaîne YouTube Fitmass : 1,2M abonnés, dix ans de pédagogie
          </h2>
          <p>
            En 2014, Nassim lance la chaîne YouTube{" "}
            <strong>Fitmass</strong>. L&apos;angle, dès le départ : expliquer
            ce que les manuels et les coachs de salle expliquent rarement avec
            rigueur. Biomécanique, programmation d&apos;entraînement, nutrition
            appliquée, business du coaching.
          </p>
          <p>
            La chaîne décolle progressivement grâce à un parti pris assumé :
            pas de raccourcis, pas de mode passagère, des sources qu&apos;on
            peut vérifier. Fitmass dépasse aujourd&apos;hui les{" "}
            <strong>1,2 million d&apos;abonnés</strong> et reste l&apos;une des
            plus grandes chaînes de musculation francophones.
          </p>
          <p>
            La chaîne joue deux rôles pour Nassim : elle a formé toute une
            génération de pratiquants et de futurs coachs avant même
            l&apos;existence de FMCS, et elle constitue le laboratoire
            pédagogique grandeur nature qui sert aujourd&apos;hui de socle à la
            formation.
          </p>

          <h2 id="methode-fmcs">
            La méthode FMCS : cinq piliers indissociables
          </h2>
          <p>
            Quand Nassim a structuré FMCS, il est parti d&apos;un constat
            simple : la carrière d&apos;un coach qui réussit repose sur cinq
            piliers indissociables. Sur le long terme, négliger un seul de ces
            piliers suffit à fragiliser toute l&apos;activité.
          </p>
          <p>Ces cinq piliers structurent toute la formation :</p>
          <ol>
            <li>
              <strong>L&apos;Anatomie &amp; Physiologie</strong> — insertions
              musculaires, biomécanique articulaire, système nerveux et
              recrutement des fibres. Comprendre le corps humain au niveau
              requis pour expliquer à un client pourquoi tel exercice plutôt
              qu&apos;un autre.
            </li>
            <li>
              <strong>La Nutrition &amp; Récupération</strong> — balance
              énergétique, macronutriments, six types de diètes, timing
              nutritionnel, prise en charge des pathologies courantes. Le
              pilier le plus souvent traité à l&apos;instinct par les coachs
              diplômés.
            </li>
            <li>
              <strong>La Programmation</strong> — périodisation linéaire,
              ondulante et par blocs, gestion du volume et de l&apos;intensité,
              déséquilibres musculaires, méthodes avancées de préparation.
              Construire des entraînements qui transforment vraiment les
              clients.
            </li>
            <li>
              <strong>Le Suivi Client</strong> — anamnèse complète, bilan
              postural, cinq profils psychologiques de clients, outils de
              motivation sur la durée. La différence entre un coach qui galère
              à fidéliser et un coach dont le carnet est plein.
            </li>
            <li>
              <strong>Le Réseau &amp; Business</strong> — cinq étapes pour
              trouver vos premiers clients, fixer vos tarifs sans vous brader,
              utiliser les réseaux sociaux comme levier, créer une
              auto-entreprise sans erreurs administratives. Le pilier que les
              diplômes d&apos;État ne traitent quasiment jamais.
            </li>
          </ol>
          <p>
            La méthode est née sur le terrain. Nassim l&apos;a d&apos;abord
            construite pour son propre coaching, validée sur ses clients, ses
            élèves YouTube et ses stagiaires Muscle Academy, avant de
            l&apos;adapter pour former des coachs.
          </p>

          <h2 id="creation-fmcs">Pourquoi Nassim a créé FMCS en 2021</h2>
          <p>
            L&apos;idée de FMCS naît d&apos;un constat construit pendant huit
            ans (2013-2020) en accueillant des stagiaires BPJEPS dans sa salle
            de sport. Année après année, les retours étaient les mêmes : un
            contenu daté, une organisation défaillante, et un coût élevé pour
            des compétences insuffisantes pour vivre du coaching.
          </p>
          <p>Trois éléments ont fini par faire pencher la balance :</p>

          <h3>1. Le constat international</h3>
          <p>
            La France est l&apos;un des derniers pays au monde à imposer un
            diplôme d&apos;État pour exercer comme coach sportif. La plupart
            des autres pays (Australie, Canada, États-Unis, Irlande, plusieurs
            pays d&apos;Europe) fonctionnent avec des formations privées
            certifiantes qui donnent le droit d&apos;exercer. Et le contenu de
            coaching y est souvent meilleur. Le système français, en imposant
            un diplôme d&apos;État dont la qualité varie énormément selon les
            centres, finit par produire l&apos;inverse de ce qu&apos;il
            cherche à protéger.
          </p>

          <h3>2. L&apos;anecdote des vidéos YouTube</h3>
          <p>
            Année après année, Nassim recevait des messages de stagiaires
            BPJEPS lui montrant que leurs propres formateurs utilisaient ses
            vidéos YouTube gratuites pour leur faire cours. Une formation à
            6 000 € qui s&apos;appuie sur du contenu gratuit publié par un
            coach indépendant : le déséquilibre était difficile à ignorer.
          </p>

          <h3>3. Une mini-formation test (juin 2020)</h3>
          <p>
            En juin 2020, Nassim lance Fitmass Builder, une mini-formation à
            un peu plus de 300 € destinée aux pratiquants qui veulent
            comprendre les variables de l&apos;entraînement. Le retour de
            stagiaires BPJEPS et STAPS est sans appel : le contenu est plus
            précis et plus pertinent que ce qu&apos;ils voyaient dans leurs
            cursus officiels.
          </p>

          <p>
            C&apos;est à ce moment que Nassim formule le dilemme qui débouche
            sur FMCS :
          </p>

          <blockquote className="border-l-4 border-[#e5b80b] bg-[#f8f7f4] not-italic py-6 px-6 sm:px-8 rounded-r-lg my-10">
            <p className="text-[1rem] sm:text-[1.0625rem] leading-[1.85] text-[#131316] mb-3 italic">
              « Aujourd&apos;hui je suis face à un dilemme. Est-ce que je dois
              continuer à supporter de voir des stagiaires perdre 10 à 18 mois
              de leur vie et 6 000 € pour sortir avec des connaissances datant
              des années 90 ? Ou est-ce que je prends le taureau par les cornes
              et je me mets moi-même à construire une formation avec un
              contenu de haute qualité ? »
            </p>
            <footer className="text-[0.8125rem] text-[#888] not-italic">
              — Nassim Sahili, février 2021
            </footer>
          </blockquote>

          <p>
            FMCS naît de cette deuxième option. La formation ouvre les
            inscriptions courant 2021. Nassim s&apos;entoure de trois autres
            formateurs spécialisés (un en programmation, un en multi-sport,
            une diététicienne du sport) pour couvrir l&apos;ensemble des cinq
            piliers.
          </p>

          <p className="not-prose mt-8 mb-10 text-[0.9375rem] leading-[1.75] text-[#555] bg-[#fff8e1] border-l-4 border-[#e5b80b] py-4 px-5 rounded-r">
            <strong className="text-[#131316]">À noter :</strong> Nassim n&apos;a
            jamais encouragé l&apos;exercice du coaching sans diplôme. FMCS
            ne délivre pas la carte professionnelle d&apos;éducateur sportif et
            accompagne ses élèves vers le CQP IF, qui reste la voie la plus
            rapide pour obtenir la carte pro légalement.
          </p>

          <h2 id="ecosysteme">
            Trois marques complémentaires : FMCS, Fitmass, Coalition Nutrition
          </h2>
          <p>
            FMCS est la pièce centrale d&apos;un ensemble de trois marques que
            Nassim a construites progressivement autour de la culture
            musculation francophone.
          </p>
          <p>
            <strong>Fitmass</strong> (
            <a href="https://fitmass.fr" target="_blank" rel="noopener">
              fitmass.fr
            </a>
            ) regroupe les contenus grand public — chaîne YouTube principale,
            programmes d&apos;entraînement, articles. C&apos;est la porte
            d&apos;entrée pour les pratiquants qui veulent progresser sans
            devenir coach.
          </p>
          <p>
            <strong>FMCS</strong> (
            <a href="https://www.fitmass.school" target="_blank" rel="noopener">
              fitmass.school
            </a>
            ) est la formation en ligne destinée aux coachs et futurs coachs :
            six mois, 100 % en ligne, plus de 4 000 coachs formés depuis 2021.
          </p>
          <p>
            <strong>Coalition Nutrition</strong> (
            <a
              href="https://www.coalition-nutrition.com"
              target="_blank"
              rel="noopener"
            >
              coalition-nutrition.com
            </a>
            ) est la marque de compléments alimentaires sportifs co-fondée en
            2023 par Nassim et Valentin Esquier. Tous les produits sont
            fabriqués en France à partir de matières premières brevetées
            (Creapure®, Epax® et d&apos;autres labels reconnus). C&apos;est la
            suite logique de FMCS : donner aux coachs et aux pratiquants des
            produits dignes de la rigueur enseignée à l&apos;école.
          </p>
          <p>
            Les trois marques se renforcent mutuellement. Fitmass nourrit FMCS
            en notoriété et en crédibilité pédagogique. FMCS nourrit Coalition
            en clientèle exigeante qui sait lire une étiquette. Coalition
            referme la boucle en équipant Fitmass et FMCS de produits cohérents
            avec leur discours.
          </p>

          <h2 id="podcast">« Là On Discute » : le podcast curiosité</h2>
          <p>
            Au-delà du sport, Nassim anime depuis 2022 le podcast{" "}
            <strong>« Là On Discute »</strong>, qui en est aujourd&apos;hui à
            85 épisodes. Le format est volontairement large : sport, cinéma,
            psychologie, art, développement personnel. L&apos;idée est
            d&apos;apprendre, de prendre du recul, de découvrir,
            d&apos;apprécier.
          </p>
          <p>
            Le podcast permet à Nassim d&apos;aborder publiquement les sujets
            qu&apos;il ne traite pas sur Fitmass : la lecture, la curiosité
            intellectuelle, le rapport au temps. C&apos;est un complément utile
            à la chaîne YouTube principale, plus orientée musculation pure.
          </p>
          <p>
            Le podcast est disponible sur{" "}
            <a
              href="https://open.spotify.com/show/0wccS7iw5urKkIzi1vJzTw"
              target="_blank"
              rel="noopener"
            >
              Spotify
            </a>
            ,{" "}
            <a
              href="https://www.youtube.com/c/L%C3%A0OnDiscute"
              target="_blank"
              rel="noopener"
            >
              YouTube
            </a>{" "}
            et{" "}
            <a
              href="https://podcasts.apple.com/us/podcast/l%C3%A0-on-discute/id1628541875"
              target="_blank"
              rel="noopener"
            >
              Apple Podcasts
            </a>
            .
          </p>

          <h2 id="salles-lyon">Les deux salles de sport à Lyon</h2>
          <p>
            Nassim continue d&apos;exercer comme coach et de gérer deux salles
            de sport à Lyon, point d&apos;ancrage géographique du projet :
          </p>
          <ul>
            <li>
              <strong>Gym Nass</strong> —{" "}
              <a href="https://gymnass.fr" target="_blank" rel="noopener">
                gymnass.fr
              </a>{" "}
              ·{" "}
              <a
                href="https://www.instagram.com/gym.nass/"
                target="_blank"
                rel="noopener"
              >
                @gym.nass
              </a>
            </li>
            <li>
              <strong>VO2Max Lyon</strong> —{" "}
              <a
                href="https://www.instagram.com/vo2max_lyon/"
                target="_blank"
                rel="noopener"
              >
                @vo2max_lyon
              </a>
            </li>
          </ul>
          <p>
            Ces salles servent au quotidien de terrain d&apos;application aux
            principes enseignés à FMCS. Tous les formateurs FMCS ont coaché ou
            coachent encore en salle, ce qui garantit que la formation reste
            connectée à la réalité du métier.
          </p>

          <h2 id="equipe">L&apos;équipe FMCS autour de Nassim</h2>
          <p>
            Nassim n&apos;enseigne pas seul. FMCS s&apos;appuie sur trois
            formateurs spécialisés, chacun en charge d&apos;un domaine précis :
          </p>
          <ul>
            <li>
              <strong>Harry</strong> — éducateur sportif diplômé STAPS,
              spécialiste coaching multi-sport. Il assiste Nassim sur les
              stages Muscle Academy et intervient sur les modules
              d&apos;application terrain.
            </li>
            <li>
              <strong>Cédric</strong> — spécialiste programmation
              d&apos;entraînement, trois ans aux côtés de Nassim. Il est en
              charge de tous les modules de planification avancée :
              périodisation, gestion du volume, méthodes pour profils
              confirmés.
            </li>
            <li>
              <strong>Johanna</strong> — diététicienne-nutritionniste du sport,
              spécialisée musculation et sports d&apos;endurance. Elle est en
              charge du volet nutrition appliquée pour les élèves FMCS.
            </li>
          </ul>
          <p>
            Avec cette équipe, chaque pilier est enseigné par un formateur qui
            le pratique au quotidien, plutôt que par un généraliste qui les
            survolerait tous.
          </p>

          <h2 id="faq">FAQ</h2>

          <h3>Quel diplôme a Nassim Sahili ?</h3>
          <p>
            Nassim Sahili est titulaire du BPJEPS AGFF (Brevet Professionnel
            de la Jeunesse, de l&apos;Éducation Populaire et du Sport, mention
            Activités Gymniques de la Forme et de la Force), obtenu en février
            2011 après 18 mois de formation, avec deux mentions : musculation
            sur plateau et cours collectifs/fitness.
          </p>

          <h3>Combien Nassim Sahili a-t-il d&apos;abonnés sur YouTube ?</h3>
          <p>
            La chaîne YouTube Fitmass, créée par Nassim en 2014, dépasse
            aujourd&apos;hui les <strong>1,2 million d&apos;abonnés</strong>.
            C&apos;est l&apos;une des plus grandes chaînes francophones
            consacrées à la musculation et au coaching sportif.
          </p>

          <h3>Pourquoi Nassim a-t-il créé FMCS ?</h3>
          <p>
            Nassim a créé FMCS en 2021 après huit ans (2013-2020) passés à
            former des stagiaires BPJEPS dans sa salle de sport. Il a constaté
            un écart majeur entre ce qu&apos;enseignent les diplômes d&apos;État
            français (formation longue, contenu daté, coût élevé) et les
            compétences réelles nécessaires pour vivre durablement du coaching.
            FMCS est la formation qu&apos;il aurait voulu suivre lui-même quand
            il a débuté.
          </p>

          <h3>Combien de coachs ont été formés par FMCS ?</h3>
          <p>
            Depuis sa création en 2021, FMCS a formé plus de{" "}
            <strong>4 000 coachs</strong> en France, avec un taux de
            satisfaction de <strong>98 %</strong> d&apos;après les retours
            élèves.
          </p>

          <h3>Où exerce Nassim Sahili ?</h3>
          <p>
            Nassim exerce à Lyon, où il est propriétaire de deux salles de
            sport : Gym Nass et VO2Max Lyon. Il coache encore régulièrement et
            utilise ses salles comme terrain d&apos;application des principes
            enseignés à FMCS.
          </p>

          <h3>Comment contacter Nassim ou l&apos;équipe FMCS ?</h3>
          <p>
            Le moyen le plus direct est de réserver un appel découverte gratuit
            avec l&apos;équipe FMCS via la page d&apos;accueil{" "}
            <Link href="/">fitmass.school</Link>. Pour suivre Nassim au
            quotidien : YouTube Fitmass, Instagram @nassim.sahili, podcast
            « Là On Discute ».
          </p>
        </article>

        {/* CTA card en bas */}
        <section className="mx-auto max-w-[860px] px-6 mt-16">
          <div className="rounded-2xl bg-[#131316] text-white p-8 sm:p-12 text-center overflow-hidden relative">
            <p className="text-[0.6875rem] font-700 uppercase tracking-[0.15em] text-[#e5b80b] mb-3">
              Discuter avec l&apos;équipe FMCS
            </p>
            <h2 className="text-[1.5rem] sm:text-[2rem] font-700 leading-[1.15] tracking-[-0.02em] text-white mb-4">
              Vous voulez devenir coach et vivre de votre passion ?
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
