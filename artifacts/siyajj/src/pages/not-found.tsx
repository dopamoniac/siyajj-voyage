import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center px-6 py-24 text-center">
      <div className="max-w-md mx-auto">
        <div className="text-siyajj-luxury-gold/40 font-serif text-[7rem] leading-none mb-2 select-none">404</div>
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-[0.3em] mb-6">Page introuvable</div>
        <h1 className="font-serif text-3xl md:text-4xl text-siyajj-ivory mb-4">
          Cette page s'est égarée
        </h1>
        <p className="text-siyajj-muted-text leading-relaxed mb-10">
          La page que vous recherchez n'existe pas ou a été déplacée. Laissez-nous vous guider vers votre prochaine étape spirituelle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="w-full sm:w-auto h-12 px-8 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne uppercase tracking-widest text-xs font-medium">
              Retour à l'accueil
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="w-full sm:w-auto h-12 px-8 border-siyajj-luxury-gold/30 text-siyajj-luxury-gold hover:bg-siyajj-luxury-gold/10 uppercase tracking-widest text-xs">
              Nous contacter
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
