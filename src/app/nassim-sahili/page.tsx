import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Nassim Sahili — Fondateur de FMCS, coach diplômé depuis 2011",
  description:
    "Parcours, expertise et vision de Nassim Sahili : coach diplômé depuis 2011, créateur de la chaîne YouTube Fitmass (1,2M+ abonnés), fondateur de FMCS et de Coalition Nutrition.",
  alternates: { canonical: `${SITE_URL}/nassim-sahili` },
  openGraph: {
    title: "Nassim Sahili — Fondateur de FMCS",
    description:
      "Coach diplômé depuis 2011, créateur de Fitmass (1,2M+ abonnés YouTube), fondateur de FMCS et Coalition Nutrition.",
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
  jobTitle: "Fondateur FMCS, coach diplômé",
  description:
    "Coach diplômé depuis 2011, créateur de la chaîne YouTube Fitmass (1,2M+ abonnés), fondateur de FMCS (Fitmass Coaching School) et de Coalition Nutrition. Propriétaire de deux salles de sport.",
  image: `${SITE_URL}/images/nassim-fondateur.webp`,
  url: `${SITE_URL}/nassim-sahili`,
  worksFor: { "@id": `${SITE_URL}/#organization` },
  knowsAbout: [
    "Musculation",
    "Nutrition sportive",
    "Coaching sportif",
    "Programmation d'entraînement",
    "Business du coaching",
    "Pédagogie sportive",
  ],
  sameAs: [
    "https://www.youtube.com/@FITMASS-COACHING",
    "https://www.instagram.com/fitmass.school/",
    "https://fr.linkedin.com/in/nassim-sahili-b3217a201",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Nassim Sahili",
      item: `${SITE_URL}/nassim-sahili`,
    },
  ],
};

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

      <Navbar />

      <main className="pt-[100px] pb-20 bg-white">
        {/* Breadcrumb visible */}
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
                Fondateur FMCS · Coach diplômé · Créateur de Fitmass
              </p>
              <h1 className="text-[2rem] sm:text-[2.5rem] font-700 leading-[1.1] tracking-[-0.02em] text-[#131316] mb-4">
                Nassim Sahili
              </h1>
              <p className="text-[1.0625rem] text-[#555] leading-[1.6]">
                Coach diplômé depuis 2011, créateur de la chaîne YouTube Fitmass
                (1,2M+ abonnés), fondateur de FMCS — la formation en ligne la
                plus complète pour vivre du coaching en musculation — et de
                Coalition Nutrition.
              </p>
            </div>
          </div>
        </header>

        {/* Corps article */}
        <article className="mx-auto max-w-[720px] px-6 prose prose-neutral prose-lg">
          <h2>Un coach formé sur le terrain depuis 2011</h2>
          <p>
            Nassim Sahili est coach sportif diplômé depuis 2011. Il a fait ses
            classes comme prof de fitness et coach personnel avant de devenir
            gérant de ses propres salles de sport. Cette double casquette
            terrain — coach au quotidien et chef d&apos;entreprise — est ce qui
            fonde aujourd&apos;hui sa pédagogie : enseigner ce qui marche
            vraiment, pas ce qui se trouve dans les manuels.
          </p>
          <p>
            Il est aujourd&apos;hui propriétaire de deux salles de sport
            [<em>noms et adresses à compléter</em>] et continue d&apos;y coacher
            régulièrement.
          </p>

          <h2>La chaîne YouTube Fitmass : pédagogie sans concession (depuis 2014)</h2>
          <p>
            En 2014, Nassim lance la chaîne YouTube{" "}
            <strong>Fitmass</strong>. Son angle : casser les idées reçues sur la
            musculation et expliquer ce que personne n&apos;explique
            — biomécanique, programmation, nutrition appliquée, business du
            coaching. Le ton direct, la rigueur scientifique et la pédagogie
            terrain font progressivement décoller la chaîne.
          </p>
          <p>
            Aujourd&apos;hui, Fitmass dépasse{" "}
            <strong>1,2 million d&apos;abonnés</strong> et reste l&apos;une des
            plus grandes chaînes de musculation francophones. C&apos;est
            principalement à travers cette chaîne que Nassim a formé toute une
            génération de pratiquants et de futurs coachs avant même
            l&apos;existence de la FMCS.
          </p>

          <h2>2021 : la création de FMCS</h2>
          <p>
            En 2021, Nassim lance{" "}
            <strong>FMCS — Fitmass Coaching School</strong>, la formation
            structurée qu&apos;il aurait voulu suivre lui-même quand il a
            débuté. L&apos;idée fondatrice : combler les angles morts des
            formations d&apos;État (BPJEPS, STAPS, CQP) en ajoutant ce
            qu&apos;elles couvrent peu ou pas — la nutrition appliquée, la
            programmation avancée, le suivi client psychologique, et surtout le
            volet business indispensable pour vivre du coaching.
          </p>
          <p>
            Quatre ans plus tard, FMCS a formé{" "}
            <strong>plus de 4 000 coachs</strong> en France, avec une note
            Trustpilot de <strong>4,2/5</strong> et un taux de satisfaction
            étudiants de <strong>98 %</strong>.
          </p>

          <h2>2023 : Coalition Nutrition</h2>
          <p>
            En 2023, Nassim co-fonde <strong>Coalition Nutrition</strong> avec
            Valentin Esquier — une marque de compléments alimentaires sportifs
            premium fabriqués en France à partir de matières premières
            brevetées (Creapure®, Epax®, et d&apos;autres labels reconnus). Une
            suite logique à la FMCS : donner aux pratiquants et aux coachs des
            produits dignes de la rigueur enseignée à l&apos;école.
          </p>

          <h2>L&apos;approche pédagogique de Nassim</h2>
          <p>
            La méthode Nassim repose sur trois piliers :
          </p>
          <ul>
            <li>
              <strong>La rigueur scientifique</strong> — chaque
              recommandation s&apos;appuie sur des sources vérifiables (études,
              consensus scientifiques) et non sur des modes ou des
              traditions de gym.
            </li>
            <li>
              <strong>L&apos;application terrain</strong> — la théorie ne
              vaut que si elle se traduit en résultats clients mesurables.
              Tous les contenus partent de cas réels.
            </li>
            <li>
              <strong>L&apos;honnêteté commerciale</strong> — pas de promesses
              irréalistes, pas de raccourcis. Devenir coach prend du temps et
              demande du travail. La FMCS le dit clairement.
            </li>
          </ul>

          <h2>L&apos;équipe FMCS autour de Nassim</h2>
          <p>
            Nassim n&apos;enseigne pas seul. Il s&apos;est entouré de trois
            formateurs spécialisés :
          </p>
          <ul>
            <li>
              <strong>Harry</strong> — éducateur sportif diplômé STAPS,
              expert coaching multi-sport, assiste Nassim sur les stages
              Muscle Academy.
            </li>
            <li>
              <strong>Cédric</strong> — spécialiste programmation
              d&apos;entraînement, trois ans aux côtés de Nassim, en charge
              des modules de planification avancée.
            </li>
            <li>
              <strong>Damien</strong> — diététicien diplômé, en charge de
              tout le volet nutrition appliquée à la musculation.
            </li>
          </ul>

          <h2>Suivre Nassim Sahili</h2>
          <p>
            Vous pouvez retrouver Nassim et le contenu Fitmass sur les canaux
            suivants :
          </p>
          <ul>
            <li>
              YouTube (chaîne FMCS) :{" "}
              <a
                href="https://www.youtube.com/@FITMASS-COACHING"
                target="_blank"
                rel="noopener"
              >
                @FITMASS-COACHING
              </a>
            </li>
            <li>
              Instagram :{" "}
              <a
                href="https://www.instagram.com/fitmass.school/"
                target="_blank"
                rel="noopener"
              >
                @fitmass.school
              </a>
            </li>
            <li>
              LinkedIn :{" "}
              <a
                href="https://fr.linkedin.com/in/nassim-sahili-b3217a201"
                target="_blank"
                rel="noopener"
              >
                Nassim Sahili
              </a>
            </li>
            <li>
              Newsletter Fitmass &laquo; Lundi 7h &raquo; (hebdomadaire,
              gratuite) — disponible sur{" "}
              <a href="https://fitmass.fr" target="_blank" rel="noopener">
                fitmass.fr
              </a>
            </li>
          </ul>

          <h2>Discuter directement avec l&apos;équipe FMCS</h2>
          <p>
            Si vous voulez devenir coach et discuter de votre projet, vous
            pouvez réserver un appel découverte gratuit avec l&apos;équipe FMCS.
            On y évalue votre situation, vos objectifs, et on vous explique en
            détail comment l&apos;accompagnement fonctionne.
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
