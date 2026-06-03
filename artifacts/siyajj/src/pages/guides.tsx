import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "wouter";
import { BookOpen, FileText, Luggage, Users, HeartHandshake, Map, Star, Calendar } from "lucide-react";

export default function Guides() {
  const articles = [
    { title: "Guide Omra 2026", icon: BookOpen, desc: "Tout ce qu'il faut savoir pour préparer votre voyage spirituel cette année." },
    { title: "Documents nécessaires pour la Omra", icon: FileText, desc: "La liste complète des documents requis, passeport, visa, vaccins." },
    { title: "Préparer sa valise", icon: Luggage, desc: "Les indispensables à emporter pour un séjour serein aux Lieux Saints." },
    { title: "Omra avec enfants", icon: Users, desc: "Conseils et astuces pour vivre une Omra inoubliable en famille." },
    { title: "Omra seniors", icon: HeartHandshake, desc: "Adapter le rythme et garantir le confort de nos aînés." },
    { title: "Différence Hajj et Omra", icon: Map, desc: "Comprendre les distinctions fondamentales entre le petit et le grand pèlerinage." },
    { title: "Comprendre les rites", icon: Star, desc: "Une explication détaillée de chaque étape de la Omra." },
    { title: "Quand partir en Omra", icon: Calendar, desc: "Analyser les meilleures périodes selon la météo et l'affluence." }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4">Conseils & Préparation</div>
        <h1 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-6">Guides SIYAJJ</h1>
        <p className="text-siyajj-muted-text leading-relaxed">
          Des ressources éditoriales conçues pour vous accompagner avant, pendant et après votre pèlerinage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article, i) => (
          <Link href="/contact" key={i} className="block group">
            <Card className="h-full bg-siyajj-black-ink border-white/5 group-hover:border-siyajj-luxury-gold/30 transition-colors">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-siyajj-warm-black border border-siyajj-luxury-gold/20 flex items-center justify-center mb-4 group-hover:bg-siyajj-luxury-gold/10 transition-colors">
                  <article.icon className="w-5 h-5 text-siyajj-luxury-gold" />
                </div>
                <CardTitle className="text-lg font-serif text-siyajj-ivory group-hover:text-siyajj-luxury-gold transition-colors">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-siyajj-muted-text">{article.desc}</CardDescription>
                <div className="mt-6 text-[10px] uppercase tracking-widest text-siyajj-luxury-gold flex items-center gap-2">
                  Lire l'article <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
