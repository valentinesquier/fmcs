import Link from "next/link";

export default function MentionsLegales() {
  return (
    <main className="pt-[100px] pb-20 bg-white">
      <div className="mx-auto max-w-[720px] px-6 prose prose-neutral">
        <Link href="/" className="inline-flex items-center gap-2 text-[0.875rem] text-[#555] hover:text-[#131316] mb-8 no-underline">&larr; Retour au site</Link>
        <h1 className="text-[2rem] font-700 mb-8">Mentions Légales</h1>

        <h2>Responsable de la publication</h2>
        <p>Fit-Mass Formations<br />Adresse : 45 Quai Dr Gailleton - 69002 Lyon<br />Email : contact@fitmass.school</p>

        <h2>Hébergeur du site</h2>
        <p>Vercel Inc.</p>

        <h2>Propriété intellectuelle</h2>
        <p>Le contenu de ce site internet est protégé par le droit d&apos;auteur. Toute reproduction, modification, distribution ou exploitation de tout ou partie du contenu de ce site, sans autorisation écrite préalable, est strictement interdite.</p>

        <h2>Liens hypertextes</h2>
        <p>Ce site internet peut contenir des liens vers des sites internet tiers. Nous déclinons toute responsabilité quant au contenu de ces sites tiers, ainsi qu&apos;aux éventuels préjudices qu&apos;ils pourraient causer.</p>

        <h2>Données personnelles</h2>
        <p>Les informations recueillies via ce site sont utilisées dans le cadre de la relation commerciale. Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition de vos données personnelles. Ces droits peuvent être exercés en contactant contact@fitmass.school</p>

        <h2>Cookies</h2>
        <p>Ce site utilise des cookies. Pour plus d&apos;informations sur l&apos;utilisation des cookies, veuillez consulter notre politique de cookies.</p>

        <h2>Droit applicable</h2>
        <p>Tout litige relatif à l&apos;utilisation de ce site internet est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>

        <div className="mt-12"><Link href="/" className="inline-flex items-center gap-2 text-[0.875rem] text-[#555] hover:text-[#131316] no-underline">&larr; Retour au site</Link></div>
      </div>
    </main>
  );
}
