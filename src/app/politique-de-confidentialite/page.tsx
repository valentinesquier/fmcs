import Link from "next/link";

export default function PolitiqueConfidentialite() {
  return (
    <main className="pt-[100px] pb-20 bg-white">
      <div className="mx-auto max-w-[720px] px-6 prose prose-neutral">
        <Link href="/" className="inline-flex items-center gap-2 text-[0.875rem] text-[#555] hover:text-[#131316] mb-8 no-underline">&larr; Retour au site</Link>
        <h1 className="text-[2rem] font-700 mb-8">Politique de Confidentialité</h1>

        <h2>Informations personnelles recueillies</h2>
        <p>Lorsque vous visitez le site, nous recueillons automatiquement certaines informations sur votre appareil, notamment des informations sur votre navigateur web, votre adresse IP, votre fuseau horaire et certains des cookies qui sont installés sur votre appareil. En outre, lorsque vous naviguez sur le site, nous recueillons des informations sur les pages web individuelles que vous consultez, les sites web ou les termes de recherche qui vous ont renvoyé au site et des informations sur la manière dont vous interagissez avec le site.</p>

        <h3>Cookies utilisés</h3>
        <ul>
          <li><strong>_session_id</strong> : identifiant unique de session</li>
          <li><strong>_shopify_visit</strong> : suivi des visites (persistance 30 minutes)</li>
          <li><strong>_shopify_uniq</strong> : comptage des visites uniques</li>
          <li><strong>cart</strong> : données du panier (persistance 2 semaines)</li>
          <li><strong>_secure_session_id</strong> : identifiant de session sécurisé</li>
          <li><strong>storefront_digest</strong> : identifiant de vérification d&apos;accès</li>
        </ul>

        <p>De plus, les fichiers journaux enregistrent les adresses IP, les types de navigateurs, les données ISP et les horodatages.</p>

        <p>Lors d&apos;une tentative d&apos;achat, nous recueillons votre nom, votre adresse de facturation, votre adresse d&apos;expédition, vos informations de paiement et vos coordonnées.</p>

        <h2>Comment utilisons-nous vos informations personnelles ?</h2>
        <p>Les informations de commande nous permettent de traiter les transactions, faciliter les expéditions, générer les confirmations et communiquer avec les utilisateurs. Le site évalue les risques de fraude et optimise les performances du site via des analyses et l&apos;évaluation des campagnes marketing.</p>

        <h2>Partage de vos informations personnelles</h2>
        <p>Des tiers reçoivent des données personnelles. Shopify héberge la boutique en ligne ; Google Analytics analyse le comportement des utilisateurs. Le site partage des données pour se conformer aux lois, répondre aux demandes légales et protéger les droits.</p>

        <h2>Conditions générales du marketing textuel</h2>
        <p>En fournissant des numéros de téléphone lors du paiement ou de l&apos;inscription, les utilisateurs acceptent les notifications SMS et les messages marketing. Les utilisateurs peuvent se désabonner en envoyant &quot;STOP&quot; ou en utilisant les liens de désabonnement fournis.</p>

        <h2>Publicité comportementale</h2>
        <p>Le site utilise des informations personnelles pour la publicité ciblée. Les utilisateurs peuvent se désinscrire via Facebook, Google, Bing ou le portail de la Digital Advertising Alliance.</p>

        <h2>Vos droits</h2>
        <p>Les résidents européens disposent de droits d&apos;accès, de correction, de mise à jour ou de suppression des informations personnelles. Les transferts de données ont lieu en dehors de l&apos;Europe, vers le Canada et les États-Unis.</p>

        <h2>Rétention des données</h2>
        <p>Les informations de commande restent dans nos fichiers, sauf si la suppression est demandée.</p>

        <h2>Nous contacter</h2>
        <p>Email : contact@fitmass.school<br />Adresse : 45 Quai Dr Gailleton, Lyon, ARA, 69002, France</p>

        <div className="mt-12"><Link href="/" className="inline-flex items-center gap-2 text-[0.875rem] text-[#555] hover:text-[#131316] no-underline">&larr; Retour au site</Link></div>
      </div>
    </main>
  );
}
