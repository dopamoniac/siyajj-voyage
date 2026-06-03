import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { Link } from "wouter";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { MediaFrame } from "@/components/ui/media-frame";

export default function Home() {
  const collections = [
    { title: "Nos Omras", tag: "Le Catalogue", desc: "Découvrez l'ensemble de nos départs organisés.", href: "/nos-omras", slot: "makkahImage" },
    { title: "Signature VIP", tag: "Service Conciergerie", desc: "Un accompagnement privé et un confort absolu.", href: "/signature-vip", slot: "vipImage" },
    { title: "Sur-Mesure", tag: "À La Carte", desc: "Créez le voyage qui correspond exactement à vos attentes.", href: "/sur-mesure", slot: "madinahImage" }
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      
      {/* Stats Strip */}
      <div className="border-y border-white/5 bg-siyajj-black-ink/50 backdrop-blur-sm py-8 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x divide-white/5">
            <div className="px-2 md:px-4">
              <div className="text-2xl md:text-3xl font-serif text-siyajj-luxury-gold mb-1">+15 000</div>
              <div className="text-[10px] md:text-xs text-siyajj-muted-text uppercase tracking-wider">Pèlerins accompagnés</div>
            </div>
            <div className="px-2 md:px-4">
              <div className="text-2xl md:text-3xl font-serif text-siyajj-luxury-gold mb-1">+30</div>
              <div className="text-[10px] md:text-xs text-siyajj-muted-text uppercase tracking-wider">Départs chaque mois</div>
            </div>
            <div className="px-4 hidden md:block">
              <div className="text-3xl font-serif text-siyajj-luxury-gold mb-1">4.9/5</div>
              <div className="text-xs text-siyajj-muted-text uppercase tracking-wider">Avis vérifiés</div>
            </div>
            <div className="px-4 hidden md:block">
              <div className="text-3xl font-serif text-siyajj-luxury-gold mb-1">24/7</div>
              <div className="text-xs text-siyajj-muted-text uppercase tracking-wider">Assistance</div>
            </div>
            <div className="px-4 hidden md:block">
              <div className="text-lg font-serif text-siyajj-luxury-gold mb-1 mt-2">Omra Factory</div>
              <div className="text-xs text-siyajj-muted-text uppercase tracking-wider">Partenaire</div>
            </div>
          </div>
        </div>
      </div>

      {/* Collections Preview */}
      <section className="py-24 bg-siyajj-deep-black relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-siyajj-luxury-gold tracking-widest text-xs uppercase mb-4">L'Excellence SIYAJJ</div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-siyajj-ivory">Découvrez nos collections</h2>
            <p className="text-siyajj-muted-text">
              Des expériences pensées pour répondre à vos aspirations spirituelles et à vos exigences de confort.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {collections.map((item, idx) => (
              <Link href={item.href} key={idx}>
                <MediaFrame slot={item.slot as any} className="glass-card group rounded-xl aspect-[4/5] flex flex-col justify-end p-8 cursor-pointer transition-all duration-500 hover:border-siyajj-luxury-gold/40" style={{ marginTop: idx === 1 ? '-2rem' : idx === 2 ? '-4rem' : '0' }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-siyajj-deep-black via-siyajj-deep-black/60 to-transparent z-10" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-siyajj-luxury-gold z-10" />
                  
                  <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-3">{item.tag}</div>
                    <h3 className="text-3xl font-serif text-siyajj-ivory mb-3">{item.title}</h3>
                    <p className="text-siyajj-muted-text text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {item.desc}
                    </p>
                    <div className="w-10 h-[1px] bg-siyajj-luxury-gold group-hover:w-20 transition-all duration-500" />
                  </div>
                </MediaFrame>
              </Link>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent className="-ml-4">
                {collections.map((item, idx) => (
                  <CarouselItem key={idx} className="pl-4 basis-[85%]">
                    <Link href={item.href}>
                      <MediaFrame slot={item.slot as any} className="glass-card group relative overflow-hidden rounded-xl aspect-[4/5] flex flex-col justify-end p-6 cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-t from-siyajj-deep-black via-siyajj-deep-black/60 to-transparent z-10" />
                        
                        <div className="relative z-20">
                          <div className="text-siyajj-luxury-gold text-[10px] uppercase tracking-widest mb-2">{item.tag}</div>
                          <h3 className="text-2xl font-serif text-siyajj-ivory mb-2">{item.title}</h3>
                          <p className="text-siyajj-muted-text text-xs mb-4">
                            {item.desc}
                          </p>
                          <div className="w-10 h-[1px] bg-siyajj-luxury-gold" />
                        </div>
                      </MediaFrame>
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