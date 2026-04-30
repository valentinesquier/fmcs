import BackLink from "@/components/BackLink";

export default function PolitiqueConfidentialite() {
  return (
    <main className="pt-[100px] pb-20 bg-white">
      <div className="mx-auto max-w-[720px] px-6 prose prose-neutral">
        <BackLink className="mb-8" />
        <h1 className="text-[2rem] font-700 mb-8">
          Politique de Confidentialité
        </h1>

        <p>
          La présente politique vous informe de la façon dont Fit-Mass
          Formations collecte, utilise et protège vos données personnelles
          lorsque vous visitez le site fitmass.school ou interagissez avec nos
          services. Elle est conforme au Règlement Général sur la Protection
          des Données (RGPD, UE 2016/679) et à la loi française Informatique et
          Libertés modifiée.
        </p>

        <h2>1. Responsable du traitement</h2>
        <p>
          <strong>Fit-Mass Formations</strong> (SARL)
          <br />
          45 Quai Docteur Gailleton, 69002 Lyon, France
          <br />
          SIREN : 912 845 534
          <br />
          Contact : contact@fitmass.school
        </p>
        <p>
          Aucun délégué à la protection des données (DPO) n&apos;est désigné,
          la désignation n&apos;étant pas obligatoire pour notre structure. Le
          contact ci-dessus est compétent pour toute question relative aux
          données personnelles.
        </p>

        <h2>2. Données collectées</h2>
        <h3>2.1 Données collectées automatiquement (navigation)</h3>
        <ul>
          <li>Adresse IP (anonymisée par notre service d&apos;analyse)</li>
          <li>Type et version du navigateur, système d&apos;exploitation</li>
          <li>Pages visitées, durée de visite, source de provenance</li>
          <li>Données de performance (Core Web Vitals)</li>
        </ul>

        <h3>2.2 Données fournies par vous</h3>
        <ul>
          <li>
            Lors d&apos;une candidature à une formation : nom, prénom, adresse
            email, numéro de téléphone (via le formulaire de réservation
            d&apos;appel)
          </li>
          <li>
            Lors de l&apos;inscription à une formation : informations de
            facturation et coordonnées complètes (gérées par notre prestataire
            Kajabi)
          </li>
          <li>
            Lors d&apos;un échange par email : contenu des messages échangés
          </li>
        </ul>

        <h2>3. Finalités et bases légales</h2>
        <table>
          <thead>
            <tr>
              <th>Finalité</th>
              <th>Base légale (RGPD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Exécution du contrat de formation</td>
              <td>Article 6.1.b — exécution du contrat</td>
            </tr>
            <tr>
              <td>Réponse aux demandes d&apos;information</td>
              <td>Article 6.1.b — mesures précontractuelles</td>
            </tr>
            <tr>
              <td>Mesure d&apos;audience et amélioration du site</td>
              <td>Article 6.1.f — intérêt légitime</td>
            </tr>
            <tr>
              <td>Cookies non essentiels (mesure, vidéo)</td>
              <td>Article 6.1.a — consentement</td>
            </tr>
            <tr>
              <td>Obligations comptables et fiscales</td>
              <td>Article 6.1.c — obligation légale</td>
            </tr>
          </tbody>
        </table>

        <h2>4. Cookies et traceurs utilisés</h2>
        <p>
          Le site utilise les cookies et traceurs suivants. Les cookies non
          strictement nécessaires ne sont déposés qu&apos;après votre
          consentement, recueilli via le bandeau d&apos;information.
        </p>
        <ul>
          <li>
            <strong>Vercel Analytics</strong> — mesure d&apos;audience
            anonymisée (sans cookie persistant). Hébergeur : Vercel Inc.
            (États-Unis).
          </li>
          <li>
            <strong>Vercel Speed Insights</strong> — collecte des métriques de
            performance (Core Web Vitals) pour l&apos;optimisation technique.
          </li>
          <li>
            <strong>Vidalytics</strong> — lecture des vidéos d&apos;explication
            (VSL). Cookies déposés par fast.vidalytics.com pour suivre la
            progression de visionnage. Durée : jusqu&apos;à 1 an.
          </li>
          <li>
            <strong>iClosed</strong> — widget de prise de rendez-vous pour
            l&apos;appel découverte. Cookies de session uniquement.
          </li>
          <li>
            <strong>Trustpilot</strong> — affichage des avis clients. Cookies
            de session déposés par trustpilot.com.
          </li>
          <li>
            <strong>Stockage local du consentement</strong> — votre choix
            concernant les cookies est mémorisé pour ne pas vous redemander à
            chaque visite.
          </li>
        </ul>

        <h2>5. Sous-traitants et destinataires</h2>
        <p>
          Vos données sont accessibles uniquement à Fit-Mass Formations et à
          ses sous-traitants techniques :
        </p>
        <ul>
          <li>
            <strong>Vercel Inc.</strong> (États-Unis) — hébergement du site et
            mesure d&apos;audience
          </li>
          <li>
            <strong>Kajabi LLC</strong> (États-Unis) — plateforme e-learning et
            traitement des paiements
          </li>
          <li>
            <strong>Vidalytics</strong> (États-Unis) — diffusion des vidéos
          </li>
          <li>
            <strong>iClosed</strong> (États-Unis) — prise de rendez-vous
          </li>
          <li>
            <strong>Trustpilot A/S</strong> (Danemark) — collecte et affichage
            des avis clients
          </li>
        </ul>

        <h2>6. Transferts de données hors Union européenne</h2>
        <p>
          Certains de nos sous-traitants étant établis aux États-Unis, vos
          données peuvent y être transférées. Ces transferts sont encadrés par
          les Clauses Contractuelles Types de la Commission européenne (SCC) et
          / ou par le cadre Data Privacy Framework UE-États-Unis pour les
          sous-traitants certifiés.
        </p>

        <h2>7. Durée de conservation</h2>
        <ul>
          <li>
            <strong>Prospects</strong> (formulaire sans inscription) : 3 ans à
            compter du dernier contact
          </li>
          <li>
            <strong>Clients</strong> (formation suivie) : durée du contrat + 5
            ans pour les obligations comptables
          </li>
          <li>
            <strong>Documents comptables et factures</strong> : 10 ans
            (obligation légale)
          </li>
          <li>
            <strong>Données de navigation et logs serveur</strong> : 12 mois
            maximum
          </li>
          <li>
            <strong>Cookies de consentement</strong> : 6 mois
          </li>
        </ul>

        <h2>8. Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez des droits suivants sur vos
          données personnelles :
        </p>
        <ul>
          <li>Droit d&apos;accès et droit d&apos;obtenir une copie</li>
          <li>Droit de rectification</li>
          <li>
            Droit à l&apos;effacement (sous réserve des obligations légales de
            conservation)
          </li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité de vos données</li>
          <li>Droit d&apos;opposition au traitement</li>
          <li>Droit de retirer votre consentement à tout moment</li>
          <li>
            Droit de définir des directives relatives au sort de vos données
            après votre décès
          </li>
        </ul>
        <p>
          Pour exercer ces droits, écrivez à{" "}
          <a href="mailto:contact@fitmass.school">contact@fitmass.school</a> en
          précisant l&apos;objet de votre demande. Une réponse vous sera
          apportée dans un délai d&apos;un mois.
        </p>

        <h2>9. Réclamation auprès de la CNIL</h2>
        <p>
          Si vous estimez que le traitement de vos données ne respecte pas la
          réglementation, vous pouvez introduire une réclamation auprès de la
          Commission Nationale de l&apos;Informatique et des Libertés (CNIL) :
          <br />
          3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, France
          <br />
          <a href="https://www.cnil.fr" target="_blank" rel="noopener">
            www.cnil.fr
          </a>
        </p>

        <h2>10. Sécurité</h2>
        <p>
          Fit-Mass Formations met en œuvre les mesures techniques et
          organisationnelles appropriées pour protéger vos données contre la
          perte, l&apos;accès non autorisé, la divulgation ou la destruction :
          chiffrement HTTPS, hébergement sur infrastructure sécurisée Vercel,
          contrôle d&apos;accès, sauvegardes régulières.
        </p>

        <h2>11. Modifications</h2>
        <p>
          La présente politique peut être mise à jour pour refléter les
          évolutions de nos pratiques ou de la réglementation. La version en
          vigueur est celle publiée sur cette page.
        </p>

        <h2>12. Contact</h2>
        <p>
          Pour toute question relative à la présente politique :
          <br />
          Email :{" "}
          <a href="mailto:contact@fitmass.school">contact@fitmass.school</a>
          <br />
          Adresse : 45 Quai Docteur Gailleton, 69002 Lyon, France
        </p>

        <div className="mt-12">
          <BackLink />
        </div>
      </div>
    </main>
  );
}
