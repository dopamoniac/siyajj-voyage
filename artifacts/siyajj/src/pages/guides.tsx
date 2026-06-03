import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "wouter";
import { MediaFrame } from "@/components/ui/media-frame";

export default function Guides() {
  const articles = [
    { title: "Guide Omra 2026", desc: "Tout ce qu'il faut savoir pour préparer votre voyage spirituel cette année.", image: "makkahImage" },
    { title: "Documents nécessaires", desc: "La liste complète des documents requis, passeport, visa, vaccins.", image: "collectionEssentielle" },
    { title: "Préparer sa valise", desc: "Les indispensables à emporter pour un séjour serein aux Lieux Saints.", image: "atmosphere" },
    { title: "Omra avec enfants", desc: "Conseils et astuces pour vivre une Omra inoubliable en famille.", image: "offerFamille" },
    { title: "Omra seniors", desc: "Adapter le rythme et garantir le confort de nos aînés.", image: "offerSeniors" },
    { title: "Hajj ou Omra ?", desc: "Comprendre les distinctions fondamentales entre le petit et le grand pèlerinage.", image: "collectionRenaissance" },
    { title: "Comprendre les rites", desc: "Une explication détaillée de chaque étape de la Omra.", image: "activityMasterclass" },
    { title: "Quand partir", desc: "Analyser les meilleures périodes selon la météo et l'affluence.", image: "madinahImage" }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4 font-bold flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-siyajj-luxury-gold/50"></span>
          Conseils & Préparation
          <span className="w-8 h-[1px] bg-siyajj-luxury-gold/50"></span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif text-siyajj-ivory mb-6 drop-shadow-md">Le Journal SIYAJJ</h1>
        <p className="text-siyajj-ivory/70 leading-relaxed text-lg font-light">
          Des ressources éditoriales conçues pour vous accompagner avant, pendant et après votre pèlerinage. L'expertise spirituelle et logistique au service de votre sérénité.
        </p>
      </div>

      {/* Featured Article */}
      <Link href="/contact" className="block group mb-16 relative rounded-3xl overflow-hidden aspect-[2/1] md:aspect-[3/1] border border-siyajj-luxury-gold/20 hover:border-siyajj-luxury-gold/60 transition-all duration-700 shadow-2xl">
        <MediaFrame slot="guidesCover" className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-2xl">
          <div className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-siyajj-luxury-gold/40 text-siyajj-champagne text-[10px] uppercase tracking-widest rounded-full font-bold inline-block mb-6">
            Édition Spéciale
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-4 drop-shadow-md">Guide Complet Omra 2026</h2>
          <p className="text-siyajj-ivory/80 text-lg font-light mb-8 hidden md:block">
            Découvrez toutes les nouveautés, réglementations et conseils d'experts pour préparer votre voyage vers les Lieux Saints dans les meilleures conditions.
          </p>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-siyajj-luxury-gold font-bold">
            Lire l'article spécial <span className="w-8 h-[1px] bg-siyajj-luxury-gold transform group-hover:w-12 transition-all duration-300"></span>
          </div>
        </div>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {articles.map((article, i) => (
          <Link href="/contact" key={i} className="block group h-full">
            <Card className="h-full bg-black/40 backdrop-blur-md border border-white/10 group-hover:border-siyajj-luxury-gold/40 transition-all duration-500 overflow-hidden flex flex-col rounded-2xl group-hover:shadow-[0_0_30px_rgba(200,154,70,0.1)]">
              <div className="relative aspect-[4/3] overflow-hidden">
                 <MediaFrame slot={article.image as any} className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
              </div>
              <CardContent className="p-6 flex-grow flex flex-col relative z-10 -mt-16">
                <CardTitle className="text-2xl font-serif text-siyajj-ivory mb-3 drop-shadow-md group-hover:text-siyajj-champagne transition-colors">{article.title}</CardTitle>
                <CardDescription className="text-siyajj-ivory/60 font-light leading-relaxed mb-6 flex-grow">{article.desc}</CardDescription>
                <div className="mt-auto text-[10px] uppercase tracking-widest text-siyajj-luxury-gold flex items-center gap-2 font-bold">
                  Lire l'article <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
