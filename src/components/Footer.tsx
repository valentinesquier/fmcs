import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="divider-fade" />
      <div className="mx-auto max-w-[76.875rem] px-10 pt-16 pb-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-12">
          <div className="max-w-[300px]">
            <a href="#" className="inline-block mb-3">
              <Image
                src="/images/logo-fmcs.png"
                alt="FMCS"
                width={126}
                height={40}
                className="h-8 w-auto"
              />
            </a>
            <p className="text-[0.875rem] text-[#555] leading-[1.5]">
              Fitmass Coaching School. L&apos;école en ligne la plus complète
              pour devenir coach en musculation.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-[0.75rem] text-[#888] font-500 uppercase tracking-[0.05em] mb-1">
                Formation
              </p>
              <a href="#programme" className="text-[0.875rem] text-[#555] hover:text-[#131316] transition-colors">Programme</a>
              <a href="#formateurs" className="text-[0.875rem] text-[#555] hover:text-[#131316] transition-colors">Formateurs</a>
              <a href="#temoignages" className="text-[0.875rem] text-[#555] hover:text-[#131316] transition-colors">Témoignages</a>
              <a href="#faq" className="text-[0.875rem] text-[#555] hover:text-[#131316] transition-colors">FAQ</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[0.75rem] text-[#888] font-500 uppercase tracking-[0.05em] mb-1">
                Légal
              </p>
              <a href="/mentions-legales" className="text-[0.875rem] text-[#555] hover:text-[#131316] transition-colors">Mentions légales</a>
              <a href="/conditions-generales-de-ventes" className="text-[0.875rem] text-[#555] hover:text-[#131316] transition-colors">CGV</a>
              <a href="/politique-de-confidentialite" className="text-[0.875rem] text-[#555] hover:text-[#131316] transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>

        <div className="divider-fade mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.75rem] text-[#888]">
            &copy; {new Date().getFullYear()} Coaching Accelerator. Tous droits réservés.
          </p>
          <p className="text-[0.75rem] text-[#d0d0d0]">Made with Fitmass</p>
        </div>
      </div>
    </footer>
  );
}
