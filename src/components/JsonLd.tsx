import { SITE_URL } from "@/lib/site";

export default function JsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "BPJEPS, STAPS, CQP ou FMCS : lequel choisir ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La carte professionnelle est obligatoire pour exercer en salle, club ou association. La FMCS t'accompagne directement vers le CQP, la voie la plus rapide et la moins chère pour décrocher ta carte pro.",
        },
      },
      {
        "@type": "Question",
        name: "Je n'ai pas le temps avec mon boulot, comment faire ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "3h par semaine suffisent pour suivre le programme en 6 mois. La majorité des élèves FMCS ont gardé leur CDI pendant toute la formation.",
        },
      },
      {
        "@type": "Question",
        name: "J'ai déjà un diplôme. La FMCS va vraiment m'apporter quelque chose ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La FMCS couvre ce que les formations d'État ne touchent pas : la profondeur scientifique en nutrition, la programmation avancée, et le business.",
        },
      },
      {
        "@type": "Question",
        name: "Le certificat FMCS est-il reconnu par l'État ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non. Pour exercer légalement en salle, il te faudra un diplôme d'État. La FMCS ne remplace pas cette démarche, elle la complète. On t'accompagne vers le CQP.",
        },
      },
      {
        "@type": "Question",
        name: "Comment se passe l'examen final ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'examen valide tes connaissances. Tu reçois ton certificat FMCS signé par Nassim, avec la possibilité d'accéder à la carte pro.",
        },
      },
      {
        "@type": "Question",
        name: "Ça coûte combien ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bien moins cher qu'un BPJEPS ou un STAPS (qui coûtent en moyenne +8 000€). Le prix exact est révélé durant l'appel découverte.",
        },
      },
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#nassim-sahili`,
    name: "Nassim Sahili",
    jobTitle: "Fondateur FMCS, coach diplômé",
    description:
      "Fondateur de FMCS (Fitmass Coaching School) et de Coalition Nutrition. Coach diplômé depuis 2011, créateur de la chaîne YouTube Fitmass (1,2M+ abonnés), propriétaire de deux salles de sport.",
    image: `${SITE_URL}/images/nassim-fmcs.gif`,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    knowsAbout: [
      "Musculation",
      "Nutrition sportive",
      "Coaching sportif",
      "Programmation d'entraînement",
      "Business du coaching",
    ],
    sameAs: [
      "https://www.youtube.com/@FITMASS-COACHING",
      "https://www.instagram.com/fitmass.school/",
      "https://fr.linkedin.com/in/nassim-sahili-b3217a201",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    "@id": `${SITE_URL}/#organization`,
    name: "FMCS - Fitmass Coaching School",
    legalName: "Fit-Mass Formations",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-fmcs.png`,
    image: `${SITE_URL}/images/fmcs-hero.jpeg`,
    email: "contact@fitmass.school",
    address: {
      "@type": "PostalAddress",
      streetAddress: "45 Quai Dr Gailleton",
      postalCode: "69002",
      addressLocality: "Lyon",
      addressRegion: "Auvergne-Rhône-Alpes",
      addressCountry: "FR",
    },
    founder: { "@id": `${SITE_URL}/#nassim-sahili` },
    description:
      "L'école en ligne la plus complète pour maîtriser le coaching en musculation, trouver des clients et vivre de sa passion en 6 mois.",
    sameAs: [
      "https://www.youtube.com/@FITMASS-COACHING",
      "https://www.instagram.com/fitmass.school/",
      "https://fr.trustpilot.com/review/fitmass.school",
      "https://www.coalition-nutrition.com",
      "https://fitmass.fr",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.2",
      bestRating: "5",
      ratingCount: "34",
      reviewCount: "34",
    },
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${SITE_URL}/#course`,
    name: "FMCS - Formation Coaching Musculation",
    description:
      "Formation en ligne de 6 mois pour devenir coach en musculation. 5 piliers : anatomie, nutrition, programmation, suivi client, business.",
    url: SITE_URL,
    image: `${SITE_URL}/images/fmcs-hero.jpeg`,
    provider: { "@id": `${SITE_URL}/#organization` },
    educationalLevel: "Tous niveaux",
    inLanguage: "fr",
    teaches: [
      "Anatomie et physiologie",
      "Nutrition sportive",
      "Programmation d'entraînement",
      "Suivi et accompagnement client",
      "Business et développement d'activité",
    ],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: "P6M",
      inLanguage: "fr",
      location: {
        "@type": "VirtualLocation",
        url: SITE_URL,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
    </>
  );
}
