import BackLink from "@/components/BackLink";

export default function MentionsLegales() {
  return (
    <main className="pt-[100px] pb-20 bg-white">
      <div className="mx-auto max-w-[720px] px-6 prose prose-neutral">
        <BackLink className="mb-8" />
        <h1 className="text-[2rem] font-700 mb-8">Mentions Légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          <strong>Fit-Mass Formations</strong>
          <br />
          Société à responsabilité limitée (SARL)
          <br />
          Siège social : 45 Quai Docteur Gailleton, 69002 Lyon, France
          <br />
          SIREN : 912 845 534
          <br />
          SIRET (siège) : 912 845 534 00029
          <br />
          Code APE / NAF : 8559A — Formation continue d&apos;adultes
          <br />
          TVA intracommunautaire : FR22912845534
          <br />
          RCS : Lyon
          <br />
          Email : contact@fitmass.school
        </p>

        <h2>Directeur de la publication</h2>
        <p>Nassim Sahili</p>

        <h2>Organisme de formation</h2>
        <p>
          Fit-Mass Formations est enregistrée comme organisme de formation
          professionnelle auprès de la Préfecture de la région
          Auvergne-Rhône-Alpes sous le numéro de déclaration d&apos;activité :
          <br />
          <strong>84 69 19792 69</strong>
          <br />
          <em>
            Cet enregistrement ne vaut pas agrément de l&apos;État (article
            L.6352-12 du Code du travail).
          </em>
        </p>

        <h2>Hébergeur du site</h2>
        <p>
          <strong>Vercel Inc.</strong>
          <br />
          340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
          <br />
          Site web :{" "}
          <a href="https://vercel.com" target="_blank" rel="noopener">
            vercel.com
          </a>
        </p>

        <h2>Plateforme e-learning</h2>
        <p>
          L&apos;accès aux formations est délivré via la plateforme Kajabi,
          opérée par Kajabi LLC (États-Unis).
          <br />
          Site web :{" "}
          <a href="https://kajabi.com" target="_blank" rel="noopener">
            kajabi.com
          </a>
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu du site (textes, images, vidéos, logos,
          graphismes, code source) est la propriété exclusive de Fit-Mass
          Formations ou de ses partenaires, et est protégé par le droit
          d&apos;auteur français et international. Toute reproduction,
          modification, distribution ou exploitation, totale ou partielle, sans
          autorisation écrite préalable est strictement interdite.
        </p>

        <h2>Liens hypertextes</h2>
        <p>
          Ce site peut contenir des liens vers des sites tiers. Fit-Mass
          Formations décline toute responsabilité quant au contenu de ces sites
          tiers ainsi qu&apos;aux éventuels préjudices résultant de leur
          consultation.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Le traitement des données personnelles collectées via ce site est
          détaillé dans notre{" "}
          <a href="/politique-de-confidentialite">politique de confidentialité</a>.
        </p>

        <h2>Droit applicable et juridiction</h2>
        <p>
          Les présentes mentions légales sont régies par le droit français. En
          cas de litige et après tentative de résolution amiable, les tribunaux
          de Lyon seront seuls compétents.
        </p>

        <div className="mt-12">
          <BackLink />
        </div>
      </div>
    </main>
  );
}
