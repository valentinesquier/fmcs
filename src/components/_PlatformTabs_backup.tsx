// BACKUP — Design tabs 8lab pour la plateforme (avec GIF placeholders)
// Réutilisable quand la plateforme sera plus animée

/*
const PLATFORM_TABS = [
  { icon: Video, title: "Formation complète", description: "150h de contenu HD structuré en 5 piliers", image: "/images/formation.jpg", alt: "Cours vidéo FMCS" },
  { icon: ChatCircle, title: "Communauté privée", description: "Des centaines de coachs qui avancent ensemble", image: "/images/communaute.jpg", alt: "Communauté FMCS" },
  { icon: UserCircle, title: "Espace membre", description: "Suivi de progression et passage d'examen", image: "/images/espace-membre.jpg", alt: "Espace membre FMCS" },
  { icon: Monitor, title: "Outils & ressources", description: "Templates, calculateurs et fiches pratiques", image: "/images/formation.jpg", alt: "Outils FMCS" },
];

function PlatformSection({ inView }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="rounded-[24px] bg-[#131316] p-6 sm:p-10 overflow-hidden">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {PLATFORM_TABS.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`flex flex-col items-center gap-2 p-4 sm:p-5 rounded-[16px] border transition-all duration-300 text-center ${
              activeTab === i
                ? "bg-white/10 border-white/20 text-white"
                : "bg-white/[0.03] border-white/5 text-white/40 hover:text-white/70 hover:bg-white/5"
            }`}
          >
            <tab.icon size={22} weight={activeTab === i ? "fill" : "regular"} className={activeTab === i ? "text-[#e5b80b]" : ""} />
            <span className="text-[0.8125rem] font-600 leading-tight">{tab.title}</span>
          </button>
        ))}
      </div>

      <motion.p key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="text-white/50 text-[0.9375rem] text-center mb-6">
        {PLATFORM_TABS[activeTab].description}
      </motion.p>

      <motion.div key={`img-${activeTab}`} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="relative rounded-[16px] border border-white/10 overflow-hidden aspect-[16/9]">
        <Image src={PLATFORM_TABS[activeTab].image} alt={PLATFORM_TABS[activeTab].alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-[#e5b80b]/20 border border-[#e5b80b]/30 flex items-center justify-center mx-auto mb-3">
              <Play size={22} weight="fill" className="text-[#e5b80b] ml-0.5" />
            </div>
            <p className="text-white/40 text-[0.75rem]">GIF à ajouter</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
*/
