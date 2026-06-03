import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { guides, guideCategories } from "@/data/content";
import { MediaFrame } from "@/components/ui/media-frame";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export default function Guides() {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");

  const filteredGuides = activeCategory === "Tous" 
    ? guides 
    : guides.filter(g => g.category === activeCategory);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <MediaFrame slot="guidesCover" className="w-full h-full opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-siyajj-deep-black via-siyajj-deep-black/80 to-siyajj-deep-black" />
        </div>
        <div className="container relative z-10 px-4 md:px-8 mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/5 text-siyajj-luxury-gold text-xs tracking-[0.2em] uppercase mb-6"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="font-bold">Centre de Ressources</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-siyajj-ivory mb-6"
          >
            Guides & Conseils
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-siyajj-ivory/70 leading-relaxed max-w-2xl mx-auto"
          >
            Des ressources éditoriales conçues pour vous accompagner avant, pendant et après votre voyage sacré.
          </motion.p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-12 md:py-20 relative z-20">
        <div className="container px-4 md:px-8 mx-auto">
          {/* Categories Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
            <button
              onClick={() => setActiveCategory("Tous")}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 ${
                activeCategory === "Tous" 
                  ? "bg-siyajj-luxury-gold text-siyajj-deep-black shadow-[0_0_20px_rgba(200,154,70,0.3)]" 
                  : "border border-siyajj-luxury-gold/20 text-siyajj-ivory hover:border-siyajj-luxury-gold/50"
              }`}
            >
              Tous
            </button>
            {guideCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-siyajj-luxury-gold text-siyajj-deep-black shadow-[0_0_20px_rgba(200,154,70,0.3)]" 
                    : "border border-siyajj-luxury-gold/20 text-siyajj-ivory/80 hover:border-siyajj-luxury-gold/50 hover:text-siyajj-ivory"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredGuides.map((guide) => (
                <motion.div
                  key={guide.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card rounded-2xl p-8 flex flex-col group hover:border-siyajj-luxury-gold/50 transition-all duration-500 relative overflow-hidden h-full cursor-pointer"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-siyajj-luxury-gold/0 to-transparent group-hover:via-siyajj-luxury-gold/50 transition-all duration-500" />
                  
                  <div className="mb-6">
                    <span className="text-[10px] text-siyajj-champagne uppercase tracking-widest font-bold border border-siyajj-luxury-gold/30 px-3 py-1 rounded-full">
                      {guide.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-siyajj-ivory mb-4 group-hover:text-siyajj-luxury-gold transition-colors">
                    {guide.title}
                  </h3>
                  
                  <p className="text-siyajj-ivory/70 text-sm leading-relaxed mb-8 flex-grow">
                    {guide.excerpt}
                  </p>
                  
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                    <span className="text-xs uppercase tracking-widest text-siyajj-luxury-gold font-bold">Lire le guide</span>
                    <div className="w-8 h-8 rounded-full border border-siyajj-luxury-gold/30 flex items-center justify-center group-hover:bg-siyajj-luxury-gold group-hover:text-siyajj-deep-black transition-all">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-siyajj-charcoal opacity-50" />
        <div className="container relative z-10 px-4 md:px-8 mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif text-siyajj-ivory mb-6">Une question spécifique ?</h2>
          <p className="text-siyajj-ivory/80 mb-10 text-lg font-light">
            Nos conseillers sont disponibles pour vous accompagner dans la préparation de votre voyage sacré.
          </p>
          <Button asChild className="h-14 px-8 bg-gradient-to-r from-siyajj-champagne via-siyajj-luxury-gold to-siyajj-champagne text-siyajj-deep-black rounded-xl uppercase tracking-widest text-xs font-bold sweep-hover shadow-[0_10px_30px_-8px_rgba(200,154,70,0.6)]">
            <Link href="/contact"><span className="relative z-10">Parler à un conseiller</span></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
