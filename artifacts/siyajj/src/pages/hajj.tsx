import { Link } from "wouter";

export default function Hajj() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="text-siyajj-luxury-gold text-xs uppercase tracking-widest mb-4">Le Grand Pèlerinage</div>
        <h1 className="text-4xl md:text-5xl font-serif text-siyajj-ivory mb-6">Le Hajj avec SIYAJJ</h1>
        <p className="text-siyajj-muted-text leading-relaxed">
          Le voyage d'une vie mérite une transparence totale et une préparation rigoureuse.
        </p>
      </div>

      <div className="max-w-2xl mx-auto glass-card p-8 md:p-12 rounded-xl border border-white/5 text-center">
        <h2 className="text-2xl font-serif text-siyajj-ivory mb-6">Préinscription Hajj 2026</h2>
        <p className="text-siyajj-muted-text mb-8">Les modalités d'organisation du Hajj sont soumises aux directives du Ministère du Hajj. Laissez-nous vos coordonnées pour être informé en priorité.</p>
        <Link href="/contact" className="inline-block px-8 py-4 bg-siyajj-luxury-gold text-siyajj-deep-black uppercase tracking-widest text-xs font-medium hover:bg-siyajj-champagne transition-colors">
          Être contacté
        </Link>
      </div>
    </div>
  );
}
