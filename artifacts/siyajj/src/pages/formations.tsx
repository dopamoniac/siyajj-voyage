import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, MonitorPlay, Users, Sparkles, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formations } from "@/data/content";
import { MediaFrame } from "@/components/ui/media-frame";

export default function Formations() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <div className="w-full overflow-x-hidden pt-10 md:pt-20">
      {/* Hero Section */}
      <section className="relative px-4 md:px-8 pb-20">
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/5 text-siyajj-luxury-gold text-[11px] tracking-[0.2em] uppercase mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(200,154,70,0.1)]">
              <span className="text-[10px]">✦</span> Accompagnement Spirituel
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif leading-[1.1] mb-8 text-siyajj-ivory drop-shadow-md">
              Formations & <span className="text-gold-gradient">Préparation</span>
            </h1>
            <p className="text-base md:text-xl text-siyajj-ivory/70 max-w-2xl mx-auto leading-relaxed mb-10 font-light tracking-wide">
              Abordez votre Omra avec confiance, compréhension et présence du cœur. Une préparation rigoureuse pour un voyage transformateur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi se former */}
      <section className="py-20 relative bg-black/40 border-y border-siyajj-luxury-gold/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-siyajj-ivory mb-4">Pourquoi se former avant la Omra ?</h2>
              <div className="w-16 h-[1px] bg-siyajj-luxury-gold/50 mb-8" />
              <p className="text-siyajj-ivory/70 leading-relaxed text-lg font-light mb-8">
                La Omra n'est pas un simple voyage, c'est une invocation exaucée, une invitation divine. Pour en tirer tous les bienfaits, il est essentiel d'en maîtriser les rites, d'en comprendre les sagesses et de s'y préparer spirituellement, mentalement et matériellement.
              </p>
              <div className="space-y-4">
                {[
                  "Éviter les erreurs rituelles courantes",
                  "Vivre chaque étape avec une intention claire",
                  "Se concentrer sur l'adoration plutôt que sur la logistique",
                  "Préparer son cœur à la Révélation et à la Sîra"
                ].map((point, i) => (
                  <motion.div variants={item} key={i} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-siyajj-luxury-gold mt-1 shrink-0" />
                    <span className="text-siyajj-ivory/80 text-lg">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden glass-card p-2 relative shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
                <MediaFrame slot="guidesCover" className="w-full h-full rounded-2xl" alt="Préparation et Carnet de voyage" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules de formation */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-6">Nos Modules de Formation</h2>
            <p className="text-siyajj-ivory/70 text-lg font-light">Des programmes complets, pensés pour tous les profils de pèlerins, dispensés par des accompagnateurs qualifiés.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formations.map((formation, idx) => (
              <motion.div
                key={formation.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="glass-card rounded-2xl p-8 border border-siyajj-luxury-gold/20 hover:border-siyajj-luxury-gold/50 transition-colors group relative overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-siyajj-luxury-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="inline-flex items-center self-start gap-2 px-3 py-1 rounded-full border border-siyajj-luxury-gold/20 text-siyajj-luxury-gold text-[10px] uppercase tracking-widest mb-6 bg-black/30">
                    {formation.format}
                  </div>
                  <h3 className="text-2xl font-serif text-siyajj-ivory mb-3">{formation.title}</h3>
                  <p className="text-siyajj-ivory/70 text-sm mb-6 leading-relaxed flex-1">{formation.purpose}</p>
                  <div className="pt-4 border-t border-siyajj-luxury-gold/10 flex items-center justify-between text-xs text-siyajj-muted-text mt-auto">
                    <span className="uppercase tracking-widest">Pour qui :</span>
                    <span className="text-siyajj-ivory/90">{formation.forWhom}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profils Spécifiques */}
      <section className="py-24 bg-siyajj-black-ink border-y border-siyajj-luxury-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,154,70,0.05),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-6">Préparations Spécifiques</h2>
            <p className="text-siyajj-ivory/70 text-lg font-light">Parce que chaque situation demande une approche particulière.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: "Première Omra", desc: "Un accompagnement pas à pas pour ceux qui découvrent les Lieux Saints pour la première fois. Explications simplifiées et rassurantes." },
              { icon: Users, title: "En Famille", desc: "Des conseils pour gérer le rythme avec des enfants, les intégrer à l'expérience spirituelle et sécuriser le voyage." },
              { icon: Heart, title: "Seniors", desc: "Anticipation des efforts physiques, alternatives pour les rites, et préparation liée à la santé et à la mobilité." },
              { icon: BookOpen, title: "Ramadan", desc: "Comment gérer le jeûne, l'affluence extrême, et maximiser ses adorations pendant le mois sacré." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="emerald-glass rounded-2xl p-8 border border-siyajj-luxury-gold/15 text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-siyajj-luxury-gold/10 flex items-center justify-center mb-6 border border-siyajj-luxury-gold/30">
                  <item.icon className="w-6 h-6 text-siyajj-luxury-gold" />
                </div>
                <h3 className="text-xl font-serif text-siyajj-ivory mb-3">{item.title}</h3>
                <p className="text-siyajj-ivory/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supports Inclus */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="glass-card rounded-3xl p-8 md:p-16 border border-siyajj-luxury-gold/30 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] relative overflow-hidden">
             <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIiBmaWxsPSJyZ2JhKDIwMCwgMTU0LCA3MCwgMSkiLz48L3N2Zz4=')] bg-[length:24px_24px]" />
             <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
               <div className="flex-1 text-center lg:text-left">
                 <h2 className="text-3xl md:text-4xl font-serif text-siyajj-ivory mb-6">Un écosystème d'apprentissage complet</h2>
                 <p className="text-siyajj-ivory/70 text-lg font-light mb-8">Tous nos séjours incluent l'accès à une suite de supports exclusifs pour vous accompagner avant, pendant et après votre Omra.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {[
                     { icon: MonitorPlay, label: "Vidéos de préparation" },
                     { icon: Users, label: "Séances Live Q&A" },
                     { icon: BookOpen, label: "Guides PDF détaillés" },
                     { icon: Sparkles, label: "Carnet Spirituel (selon collection)" }
                   ].map((support, idx) => (
                     <div key={idx} className="flex items-center gap-3 bg-black/40 border border-white/5 rounded-xl p-4">
                       <support.icon className="w-5 h-5 text-siyajj-luxury-gold" />
                       <span className="text-siyajj-ivory/90 text-sm font-medium">{support.label}</span>
                     </div>
                   ))}
                 </div>
               </div>
               <div className="w-full lg:w-1/3 flex flex-col items-center justify-center bg-black/30 p-8 rounded-2xl border border-white/5">
                 <div className="text-center mb-8">
                   <h3 className="text-xl font-serif text-siyajj-luxury-gold mb-2">Prêt à entamer votre cheminement ?</h3>
                   <p className="text-siyajj-ivory/60 text-sm">Discutez de votre projet avec un conseiller formation.</p>
                 </div>
                 <Button asChild className="w-full h-14 bg-gradient-to-r from-siyajj-antique-bronze via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 uppercase tracking-widest text-xs font-bold rounded-xl sweep-hover relative overflow-hidden group">
                   <Link href="/contact">
                     <span className="relative z-10 flex items-center justify-center gap-2">
                       Demander des informations
                       <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                     </span>
                   </Link>
                 </Button>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
