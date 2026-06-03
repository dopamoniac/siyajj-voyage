import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Info, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { activities } from "@/data/content";
import { MediaFrame } from "@/components/ui/media-frame";

export default function Activites() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
      }
    }
  }, []);

  return (
    <div className="w-full overflow-x-hidden pt-10 md:pt-20">
      {/* Hero Section */}
      <section className="relative px-4 md:px-8 pb-24">
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/5 text-siyajj-luxury-gold text-[11px] tracking-[0.2em] uppercase mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(200,154,70,0.1)]">
              <span className="text-[10px]">✦</span> Approfondir
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif leading-[1.1] mb-8 text-siyajj-ivory drop-shadow-md">
              Activités & <span className="text-gold-gradient">Expériences</span>
            </h1>
            <p className="text-base md:text-xl text-siyajj-ivory/70 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
              Au-delà de l'organisation logistique, SIYAJJ propose des moments spirituels et culturels intenses pour enrichir votre séjour aux Lieux Saints.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities Feed */}
      <section className="pb-32 relative">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col gap-24 md:gap-32">
            {activities.map((activity, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={activity.id}
                  id={activity.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`scroll-mt-28 flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden glass-card p-2 relative shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
                      <MediaFrame slot={activity.slot} alt={activity.name} className="w-full h-full rounded-2xl" />
                      <div className="absolute inset-0 border border-siyajj-luxury-gold/20 rounded-3xl m-2 pointer-events-none mix-blend-overlay" />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-siyajj-luxury-gold/20 text-siyajj-luxury-gold text-[10px] uppercase tracking-widest mb-6 bg-black/30 self-start">
                      Pour : {activity.forWhom}
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-serif text-siyajj-ivory mb-6 leading-tight">{activity.name}</h2>
                    
                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                          <Info className="w-4 h-4" /> Description
                        </h4>
                        <p className="text-siyajj-ivory/80 leading-relaxed font-light">{activity.what}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                          <Star className="w-4 h-4" /> Valeur Spirituelle
                        </h4>
                        <p className="text-siyajj-ivory/80 leading-relaxed font-light">{activity.spiritualValue}</p>
                      </div>
                      
                      <div className="bg-black/30 rounded-xl p-5 border border-white/5">
                        <h4 className="text-siyajj-ivory text-sm font-serif mb-4 border-b border-white/10 pb-2">Inclus dans l'expérience :</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {activity.included.map((inc, i) => (
                            <li key={i} className="flex items-center gap-2 text-siyajj-ivory/70 text-sm">
                              <CheckCircle className="w-3.5 h-3.5 text-siyajj-luxury-gold shrink-0" />
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-siyajj-luxury-gold/10">
                      <Button asChild variant="outline" className="h-12 px-8 rounded-lg border-siyajj-luxury-gold/40 text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold hover:text-siyajj-deep-black uppercase tracking-widest text-[11px] font-bold sweep-hover relative overflow-hidden group">
                        <Link href="/contact">
                          <span className="relative z-10 flex items-center gap-2">
                            Demander des informations
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative bg-siyajj-black-ink border-t border-siyajj-luxury-gold/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,154,70,0.1),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-siyajj-ivory mb-6">Prêt à vivre une expérience complète ?</h2>
          <p className="text-siyajj-ivory/70 text-lg mb-10 max-w-2xl mx-auto font-light">
            Découvrez nos collections pour voir quelles activités sont incluses selon le niveau de service choisi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="h-14 px-8 bg-gradient-to-r from-siyajj-antique-bronze via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black hover:brightness-110 uppercase tracking-widest text-xs font-bold rounded-xl shadow-lg sweep-hover relative overflow-hidden">
              <Link href="/collections"><span className="relative z-10">Découvrir les collections</span></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
