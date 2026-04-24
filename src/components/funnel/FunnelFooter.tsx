export default function FunnelFooter() {
  return (
    <footer className="border-t border-[#e5e5e5] py-8">
      <div className="mx-auto max-w-[1100px] px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.8125rem] text-[#888]">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a
            href="/politique-de-confidentialite"
            className="hover:text-[#131316] transition-colors"
          >
            Politique de confidentialité
          </a>
          <a
            href="/mentions-legales"
            className="hover:text-[#131316] transition-colors"
          >
            Mentions légales
          </a>
          <a
            href="/conditions-generales-de-ventes"
            className="hover:text-[#131316] transition-colors"
          >
            Conditions Générales de Vente
          </a>
        </nav>
        <p>&copy; 2026 Coaching Accelerator</p>
      </div>
    </footer>
  );
}
