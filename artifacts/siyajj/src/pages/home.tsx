import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { Link } from "wouter";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { MediaFrame } from "@/components/ui/media-frame";

export default function Home() {
  const collections = [
    { title: "Nos Omras", tag: "Le Catalogue", desc: "Découvrez l'ensemble de nos départs organisés.", href: "/nos-omras", slot: "offerNovembre" },
    { title: "Signature VIP", tag: "Service Conciergerie", desc: "Un accompagnement privé et un confort absolu.", href: "/signature-vip", slot: "signatureVip" },
    { title: "Sur-Mesure", tag: "À La Carte", desc: "Créez le voyage qui correspond exactement à vos attentes.", href: "/sur-mesure", slot: "surMesure" }
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      
      {/* Stats Strip */}
      <div className="border-y border-siyajj-luxury-gold/20 bg-black/60 backdrop-blur-xl py-10 relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x divide-siyajj-luxury-gold/10">
            <div className="px-2 md:px-4">
              <div className="text-3xl md:text-4xl font-serif text-siyajj-champagne mb-2 drop-shadow-sm">+15 000</div>
              <div className="text-[10px] md:text-xs text-siyajj-luxury-gold/70 uppercase tracking-widest font-bold">Pèlerins accompagnés</div>
            </div>
            <div className="px-2 md:px-4">
              <div className="text-3xl md:text-4xl font-serif text-siyajj-champagne mb-2 drop-shadow-sm">+30</div>
              <div className="text-[10px] md:text-xs text-siyajj-luxury-gold/70 uppercase tracking-widest font-bold">Départs chaque mois</div>
            </div>
            <div className="px-4 hidden md:block">
              <div className="text-4xl font-serif text-siyajj-champagne mb-2 drop-shadow-sm">4.9<span className="text-2xl text-siyajj-champagne/50">/5</span></div>
              <div className="text-[10px] md:text-xs text-siyajj-luxury-gold/70 uppercase tracking-widest font-bold">Avis vérifiés</div>
            </div>
            <div className="px-4 hidden md:block">
              <div className="text-4xl font-serif text-siyajj-champagne mb-2 drop-shadow-sm">24<span className="text-2xl text-siyajj-champagne/50">/7</span></div>
              <div className="text-[10px] md:text-xs text-siyajj-luxury-gold/70 uppercase tracking-widest font-bold">Conciergerie</div>
            </div>
            <div className="px-4 hidden md:block flex flex-col justify-center">
              <div className="text-2xl font-serif text-siyajj-champagne mb-2 drop-shadow-sm flex items-center justify-center gap-2">
                 <span className="text-lg opacity-50">✦</span> Omra Factory
              </div>
              <div className="text-[10px] md:text-xs text-siyajj-luxury-gold/70 uppercase tracking-widest font-bold">Partenaire Officiel</div>
            </div>
          </div>
        </div>
      </div>

      {/* Collections Preview */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4 font-bold flex items-center justify-center gap-2">
               <span className="w-8 h-[1px] bg-siyajj-luxury-gold/50"></span>
               L'Excellence SIYAJJ
               <span className="w-8 h-[1px] bg-siyajj-luxury-gold/50"></span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif mb-6 text-siyajj-ivory drop-shadow-md">Découvrez nos collections</h2>
            <p className="text-siyajj-ivory/70 text-lg font-light leading-relaxed">
              Des expériences pensées pour répondre à vos aspirations spirituelles et à vos exigences d'excellence absolue.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {collections.map((item, idx) => (
              <Link href={item.href} key={idx}>
                <div 
                  className="glass-card group rounded-2xl aspect-[3/4] flex flex-col justify-end p-10 cursor-pointer transition-all duration-700 hover:border-siyajj-luxury-gold/60 relative overflow-hidden hover:shadow-[0_0_50px_rgba(200,154,70,0.15)] bg-black/40" 
                  style={{ marginTop: idx === 1 ? '-3rem' : idx === 2 ? '-6rem' : '0' }}
                >
                  <MediaFrame slot={item.slot as any} className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                  <div className="absolute inset-0 bg-siyajj-luxury-gold/0 group-hover:bg-siyajj-luxury-gold/10 transition-colors duration-700 mix-blend-overlay z-10" />
                  
                  <div className="relative z-20 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <div className="text-siyajj-champagne text-[10px] uppercase tracking-widest mb-3 font-bold">{item.tag}</div>
                    <h3 className="text-4xl font-serif text-siyajj-ivory mb-4 drop-shadow-md">{item.title}</h3>
                    <p className="text-siyajj-ivory/80 text-base font-light mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="w-12 h-[1px] bg-siyajj-luxury-gold group-hover:w-full transition-all duration-700 ease-in-out" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {collections.map((item, idx) => (
                  <CarouselItem key={idx} className="pl-4 basis-[85%]">
                    <Link href={item.href}>
                      <div className="glass-card group relative overflow-hidden rounded-2xl aspect-[3/4] flex flex-col justify-end p-8 cursor-pointer border-siyajj-luxury-gold/20 bg-black/40">
                        <MediaFrame slot={item.slot as any} className="absolute inset-0 opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                        
                        <div className="relative z-20">
                          <div className="text-siyajj-champagne text-[10px] uppercase tracking-widest mb-2 font-bold">{item.tag}</div>
                          <h3 className="text-3xl font-serif text-siyajj-ivory mb-3 drop-shadow-md">{item.title}</h3>
                          <p className="text-siyajj-ivory/80 text-sm font-light mb-6 leading-relaxed">
                            {item.desc}
                          </p>
                          <div className="w-12 h-[1px] bg-siyajj-luxury-gold" />
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

        </div>
      </section>
    </div>
  );
}
