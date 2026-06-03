import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, Minus, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { collections } from "@/data/content";
import { MediaFrame } from "@/components/ui/media-frame";

export default function Collections() {
  return (
    <div className="w-full overflow-x-hidden pt-10 md:pt-20">
      {/* Hero Section */}
      <section className="relative px-4 md:px-8 pb-20">
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/5 text-siyajj-luxury-gold text-[11px] tracking-[0.2em] uppercase mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(200,154,70,0.1)]">
              <span className="text-[10px]">✦</span> Notre Gamme
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif leading-[1.1] mb-8 text-siyajj-ivory drop-shadow-md">
              Les Collections <span className="text-gold-gradient">SIYAJJ</span>
            </h1>
            <p className="text-base md:text-xl text-siyajj-ivory/70 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
              Cinq niveaux de service conçus pour répondre à chaque attente de confort, d'accompagnement et de prestige. Trouvez l'expérience qui vous correspond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collections Showcase */}
      <section className="pb-12 md:pb-24 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-32">
            {collections.map((item, i) => (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.15 }}
                className={`group relative rounded-2xl overflow-hidden border border-siyajj-luxury-gold/20 hover:border-siyajj-luxury-gold/60 transition-all duration-500 aspect-[3/4] flex flex-col justify-end ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <MediaFrame slot={item.slot} alt={item.name} className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-siyajj-deep-black via-siyajj-deep-black/60 to-transparent" />
                <div className="absolute inset-0 bg-siyajj-luxury-gold/0 group-hover:bg-siyajj-luxury-gold/10 transition-colors duration-500 mix-blend-overlay" />
                
                {item.featured && (
                  <div className="absolute top-4 right-4 z-30">
                    <span className="bg-siyajj-luxury-gold text-siyajj-deep-black text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(200,154,70,0.5)]">
                      Premium
                    </span>
                  </div>
                )}
                
                {/* Gold framing */}
                <div className="absolute inset-4 border border-siyajj-luxury-gold/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-20 p-5 md:p-8 glass-card m-3 md:m-4 rounded-xl md:translate-y-6 md:group-hover:translate-y-0 transition-transform duration-500 bg-black/40 border-white/10 backdrop-blur-md">
                  <div className="flex flex-col gap-1 mb-3">
                    <span className="text-siyajj-champagne text-[10px] uppercase tracking-widest font-bold">Collection</span>
                    <h3 className="text-2xl md:text-3xl font-serif text-siyajj-ivory">{item.name.replace("Collection ", "")}</h3>
                  </div>
                  
                  <div className="md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 md:h-0 md:group-hover:h-auto overflow-hidden">
                    <p className="text-siyajj-ivory/80 text-sm mb-4 font-light leading-relaxed">{item.tagline}</p>
                    <div className="text-siyajj-muted-text text-xs mb-6 border-l-2 border-siyajj-luxury-gold/50 pl-3">
                      Pour : {item.forWhom}
                    </div>
                  </div>
                  
                  <div className="w-full h-[1px] bg-siyajj-luxury-gold/20 mb-4" />
                  
                  <Link href="/nos-omras" className="text-[11px] uppercase tracking-widest text-siyajj-champagne hover:text-siyajj-ivory transition-colors flex items-center justify-between group/btn w-full">
                    <span>Découvrir les offres</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-32 relative z-10 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-12 rounded-3xl border-siyajj-luxury-gold/20 shadow-2xl overflow-hidden bg-black/60"
          >
            <div className="text-center mb-12">
              <span className="text-2xl text-siyajj-luxury-gold opacity-50 mb-4 block">✦</span>
              <h2 className="text-4xl font-serif text-siyajj-ivory">Comparer en détail</h2>
              <p className="text-siyajj-ivory/60 mt-4 font-light">Trouvez la collection adaptée à vos exigences</p>
            </div>
            
            <div className="overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0">
              <div className="min-w-[900px]">
                {/* Headers */}
                <div className="grid grid-cols-6 gap-4 border-b border-siyajj-luxury-gold/20 pb-6 mb-6">
                  <div className="col-span-1"></div>
                  {collections.map((c) => (
                    <div key={c.id} className="col-span-1 text-center flex flex-col items-center justify-end">
                      {c.featured && <Star className="w-3 h-3 text-siyajj-luxury-gold mb-2" />}
                      <span className="font-serif text-xl text-siyajj-champagne">{c.name.replace("Collection ", "")}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {/* Confort */}
                  <div className="grid grid-cols-6 gap-4 items-center group hover:bg-white/5 p-3 rounded-xl transition-colors">
                    <div className="col-span-1 text-[11px] text-siyajj-luxury-gold uppercase tracking-widest font-bold">Hébergement</div>
                    {collections.map((c) => (
                      <div key={c.id} className="col-span-1 text-center text-sm text-siyajj-ivory font-light">
                        {c.comfort}
                      </div>
                    ))}
                  </div>

                  {/* Services */}
                  <div className="grid grid-cols-6 gap-4 items-start group hover:bg-white/5 p-3 rounded-xl transition-colors bg-black/20">
                    <div className="col-span-1 text-[11px] text-siyajj-luxury-gold uppercase tracking-widest font-bold pt-1">Services Inclus</div>
                    {collections.map((c) => (
                      <div key={c.id} className="col-span-1 flex flex-col gap-2 items-center text-center">
                        {c.services.slice(0, 4).map((s, i) => (
                          <div key={i} className="text-xs text-siyajj-ivory/80 font-light bg-white/5 px-2 py-1 rounded w-full">{s}</div>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Activités */}
                  <div className="grid grid-cols-6 gap-4 items-start group hover:bg-white/5 p-3 rounded-xl transition-colors">
                    <div className="col-span-1 text-[11px] text-siyajj-luxury-gold uppercase tracking-widest font-bold pt-1">Expériences</div>
                    {collections.map((c) => (
                      <div key={c.id} className="col-span-1 flex flex-col gap-2 items-center text-center">
                        {c.activities.slice(0, 3).map((a, i) => (
                          <div key={i} className="text-xs text-siyajj-champagne border border-siyajj-luxury-gold/20 px-2 py-1 rounded w-full">{a}</div>
                        ))}
                      </div>
                    ))}
                  </div>
                  
                  {/* Action */}
                  <div className="grid grid-cols-6 gap-4 items-center pt-8 border-t border-siyajj-luxury-gold/10 mt-6">
                    <div className="col-span-1"></div>
                    {collections.map((c) => (
                      <div key={c.id} className="col-span-1 flex justify-center">
                        <Button asChild variant="outline" className="h-10 px-4 rounded-lg border-siyajj-luxury-gold/40 text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold hover:text-siyajj-deep-black uppercase tracking-widest text-[9px] font-bold w-full">
                          <Link href="/nos-omras">Voir offres</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile note */}
            <div className="mt-4 text-center text-xs text-siyajj-ivory/50 md:hidden italic">
              Faites glisser pour voir toutes les collections
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Help Section */}
      <section className="py-10 md:py-20 border-t border-siyajj-luxury-gold/10 bg-black/40 text-center px-4">
        <h3 className="text-2xl font-serif text-siyajj-ivory mb-4">Indécis sur le choix de votre collection ?</h3>
        <p className="text-siyajj-ivory/70 max-w-xl mx-auto mb-8 font-light">
          Nos conseillers sont à votre disposition pour vous guider vers la formule qui correspond le mieux à vos attentes, votre budget et la composition de votre groupe.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne h-12 px-8 uppercase tracking-widest text-xs font-bold rounded-xl sweep-hover">
            <Link href="/contact">Parler à un conseiller</Link>
          </Button>
          <Button asChild variant="outline" className="border-siyajj-luxury-gold/40 text-siyajj-luxury-gold hover:bg-white/5 h-12 px-8 uppercase tracking-widest text-xs font-bold rounded-xl">
            <a href="https://wa.me/33100000000" target="_blank" rel="noopener noreferrer">Contact WhatsApp</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
