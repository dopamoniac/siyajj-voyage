import { MediaFrame } from "@/components/ui/media-frame";
import { Link } from "wouter";

export default function Activites() {
  const activities = [
    { title: "Manâsik Masterclass", desc: "Préparez vos rites avant le départ avec nos experts pour vivre votre Omra pleinement.", image: "activityMasterclass", tag: "Préparation" },
    { title: "Parcours Sîra à Médine", desc: "Visites guidées pleines de sens sur les traces du Prophète (PSL).", image: "madinahImage", tag: "Histoire" },
    { title: "Ziyarat Privées", desc: "Découvertes culturelles et spirituelles en toute intimité.", image: "activityZiyarat", tag: "Découverte" },
    { title: "Hira Immersion", desc: "Expérience historique poignante sur le lieu de la première révélation.", image: "activityHira", tag: "Spiritualité" },
    { title: "Tawaf & Sa'i Guidés", desc: "Soutien bienveillant et accompagnement pas à pas pendant les rites.", image: "makkahImage", tag: "Accompagnement" },
    { title: "Family Care", desc: "Accompagnement adapté aux familles et prise en charge des besoins spécifiques.", image: "offerFamille", tag: "Famille" },
    { title: "Seniors Sérénité", desc: "Rythme doux, logistique adaptée et assistance dédiée à nos aînés.", image: "offerSeniors", tag: "Seniors" },
    { title: "Carnet Renaissance", desc: "Votre journal de bord spirituel exclusif offert avant le départ.", image: "collectionRenaissance", tag: "Exclusivité" },
    { title: "After-Omra Circle", desc: "Suivi, soutien et rappels spirituels après votre retour en France.", image: "atmosphere", tag: "Continuité" }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-24">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4 font-bold flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-siyajj-luxury-gold/50"></span>
          Approfondir
          <span className="w-8 h-[1px] bg-siyajj-luxury-gold/50"></span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif text-siyajj-ivory mb-6 drop-shadow-md">Activités & Expériences</h1>
        <p className="text-siyajj-ivory/70 leading-relaxed text-lg font-light max-w-2xl mx-auto">
          Au-delà de l'organisation logistique, SIYAJJ propose des moments spirituels et culturels intenses pour enrichir votre séjour aux Lieux Saints.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((item, i) => (
          <div key={i} className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-siyajj-luxury-gold/50 transition-all duration-500 aspect-[4/5] flex flex-col hover:shadow-[0_0_40px_rgba(200,154,70,0.15)] bg-black/40">
            <MediaFrame slot={item.image as any} className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-90" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
            
            {/* Elegant Motif Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-10 pointer-events-none">
               <svg className="w-48 h-48 text-siyajj-luxury-gold" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <path d="M50 0 L100 50 L50 100 L0 50 Z" />
                  <circle cx="50" cy="50" r="30" />
               </svg>
            </div>

            <div className="relative z-20 p-8 flex-grow flex flex-col justify-between h-full">
              <div className="self-start px-3 py-1 bg-black/50 backdrop-blur-md border border-siyajj-luxury-gold/30 rounded-full text-[10px] text-siyajj-champagne uppercase tracking-widest">
                {item.tag}
              </div>
              
              <div className="mt-auto transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-serif text-siyajj-ivory mb-3 drop-shadow-md">{item.title}</h3>
                <p className="text-sm text-siyajj-ivory/70 font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.desc}
                </p>
                
                <Link href="/contact" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-siyajj-luxury-gold group/btn">
                  <span className="w-6 h-[1px] bg-siyajj-luxury-gold group-hover/btn:w-10 transition-all duration-300"></span>
                  Demander des informations
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
