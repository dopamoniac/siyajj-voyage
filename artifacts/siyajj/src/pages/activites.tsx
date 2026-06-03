import { MediaFrame } from "@/components/ui/media-frame";

export default function Activites() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4">Approfondir</div>
        <h1 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-6">Activités & Expériences</h1>
        <p className="text-siyajj-muted-text leading-relaxed">
          Au-delà de l'organisation, SIYAJJ propose des moments spirituels et culturels pour enrichir votre séjour.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Manâsik Masterclass", desc: "Préparez vos rites avant le départ." },
          { title: "Parcours Sîra à Médine", desc: "Visites guidées pleines de sens." },
          { title: "Ziyarat Privées", desc: "Découvertes culturelles et spirituelles en privé." },
          { title: "Hira Immersion", desc: "Expérience historique sur la révélation." },
          { title: "Tawaf & Sa'i Guidés", desc: "Soutien bienveillant pendant les rites." },
          { title: "Family Care", desc: "Accompagnement adapté aux familles." },
          { title: "Seniors Sérénité", desc: "Rythme doux et assistance dédiée." },
          { title: "Carnet Renaissance", desc: "Votre journal de bord spirituel." },
          { title: "After-Omra Circle", desc: "Suivi et soutien après votre retour." }
        ].map((item, i) => (
          <div key={i} className="glass-card rounded-xl border border-white/5 hover:border-siyajj-luxury-gold/30 transition-all overflow-hidden flex flex-col">
            <MediaFrame slot="activitiesImage" className="h-40 w-full" />
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-serif text-siyajj-ivory mb-2">{item.title}</h3>
              <p className="text-sm text-siyajj-muted-text mb-6 flex-grow">{item.desc}</p>
              <button className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold text-left mt-auto">En savoir plus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}