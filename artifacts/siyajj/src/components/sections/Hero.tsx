import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-siyajj-deep-black pt-20">
      {/* Background Sacred Portal Visual (3D-like CSS representation) */}
      <div className="absolute right-0 top-0 w-full md:w-2/3 h-full pointer-events-none opacity-40 md:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-siyajj-luxury-gold/10 via-siyajj-deep-black/80 to-siyajj-deep-black" />
        
        {/* Abstract Arch Shapes */}
        <div className="absolute top-1/2 right-[10%] transform -translate-y-1/2 w-[60vh] h-[80vh] border border-siyajj-luxury-gold/20 rounded-t-full opacity-50 blur-[1px]"></div>
        <div className="absolute top-1/2 right-[12%] transform -translate-y-1/2 w-[55vh] h-[75vh] border border-siyajj-luxury-gold/30 rounded-t-full opacity-60"></div>
        <div className="absolute top-1/2 right-[14%] transform -translate-y-1/2 w-[50vh] h-[70vh] border-2 border-siyajj-luxury-gold/40 rounded-t-full shadow-[0_0_50px_rgba(200,154,70,0.15)] bg-gradient-to-b from-siyajj-luxury-gold/5 to-transparent"></div>
        
        {/* Glow and Depth Fog */}
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-siyajj-deep-black to-transparent" />
        <div className="absolute top-1/2 right-[20%] w-[30vh] h-[30vh] bg-siyajj-luxury-gold/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
        
        <div className="w-full md:w-[55%] pt-10 pb-32 md:py-20 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-siyajj-luxury-gold/30 bg-siyajj-luxury-gold/5 text-siyajj-luxury-gold text-xs tracking-widest uppercase mb-8 backdrop-blur-md">
            <span className="text-[10px]">✦</span> OMRA & HAJJ PREMIUM DEPUIS LA FRANCE
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6 text-siyajj-ivory">
            Votre voyage vers<br/>
            les Lieux Saints,<br/>
            <span className="text-gold-gradient font-serif">réinventé avec excellence.</span>
          </h1>

          <p className="text-lg text-siyajj-muted-text max-w-xl leading-relaxed mb-10">
            SIYAJJ conçoit votre Omra et votre Hajj avec un accompagnement haut de gamme, des hôtels soigneusement sélectionnés et une expérience pensée dans chaque détail.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="/sur-mesure">
              <Button className="w-full sm:w-auto h-14 px-8 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne transition-all duration-300 rounded-none uppercase tracking-widest text-xs font-medium relative group overflow-hidden">
                <span className="relative z-10">Construire mon voyage</span>
                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </Button>
            </Link>

            <Dialog>
              <DialogTrigger asChild>
                <button className="w-full sm:w-auto h-14 px-8 flex items-center justify-center gap-3 text-siyajj-ivory hover:text-siyajj-luxury-gold transition-colors border border-white/10 hover:border-siyajj-luxury-gold/30 bg-white/5 backdrop-blur-sm rounded-none uppercase tracking-widest text-xs font-medium group">
                  <Play className="w-4 h-4 fill-current group-hover:text-siyajj-luxury-gold transition-colors" />
                  <span>Découvrir l'expérience</span>
                </button>
              </DialogTrigger>
              <DialogContent className="bg-siyajj-deep-black border border-siyajj-luxury-gold/20 text-siyajj-ivory max-w-4xl">
                <div className="aspect-video bg-siyajj-black-ink border border-white/5 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-siyajj-luxury-gold/10 flex items-center justify-center mb-6">
                    <Play className="w-6 h-6 text-siyajj-luxury-gold fill-current" />
                  </div>
                  <h3 className="font-serif text-2xl mb-2 text-siyajj-ivory">Vidéo d'expérience SIYAJJ bientôt disponible</h3>
                  <p className="text-siyajj-muted-text">Plongez au cœur de l'excellence spirituelle.</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="hidden md:flex w-full md:w-[35%] justify-end">
          <div className="glass-card p-8 rounded-xl max-w-sm w-full relative z-20">
            <h3 className="text-xl font-serif text-siyajj-luxury-gold mb-6 border-b border-siyajj-luxury-gold/20 pb-4">L'expérience SIYAJJ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-siyajj-luxury-gold mt-2 shrink-0 shadow-[0_0_8px_rgba(200,154,70,0.8)]" />
                <span className="text-siyajj-ivory text-sm leading-relaxed">Accompagnement francophone 24/7</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-siyajj-luxury-gold mt-2 shrink-0 shadow-[0_0_8px_rgba(200,154,70,0.8)]" />
                <span className="text-siyajj-ivory text-sm leading-relaxed">Hôtels sélectionnés avec exigence</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-siyajj-luxury-gold mt-2 shrink-0 shadow-[0_0_8px_rgba(200,154,70,0.8)]" />
                <span className="text-siyajj-ivory text-sm leading-relaxed">Services premium et attentionnés</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-siyajj-luxury-gold mt-2 shrink-0 shadow-[0_0_8px_rgba(200,154,70,0.8)]" />
                <span className="text-siyajj-ivory text-sm leading-relaxed">Partenaire opérationnel Omra Factory</span>
              </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-siyajj-luxury-gold/10 flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-siyajj-warm-black border border-siyajj-luxury-gold/30 flex items-center justify-center overflow-hidden">
                     <span className="text-[10px] text-siyajj-luxury-gold opacity-50">SIYAJJ</span>
                  </div>
                ))}
              </div>
              <div className="text-right">
                <div className="text-lg font-serif text-siyajj-ivory">4.9/5</div>
                <div className="text-[10px] uppercase tracking-widest text-siyajj-luxury-gold">avis vérifiés</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Trip Builder Overlay - Fixed to bottom of hero */}
      <div className="absolute bottom-0 left-0 w-full z-30 transform translate-y-1/2">
        <div className="container mx-auto px-4 md:px-8">
          <div className="glass-card p-4 md:p-2 rounded-xl border border-siyajj-luxury-gold/20 shadow-2xl flex flex-col md:flex-row items-center gap-4 max-w-5xl mx-auto backdrop-blur-xl bg-siyajj-deep-black/80">
            <div className="grid grid-cols-2 md:flex md:flex-row w-full gap-4 md:gap-0 divide-x-0 md:divide-x divide-white/10">
              
              <div className="px-4 py-2 cursor-pointer group w-full">
                <div className="text-[10px] uppercase tracking-widest text-siyajj-muted-text mb-1">Ville de départ</div>
                <div className="text-siyajj-ivory text-sm font-medium group-hover:text-siyajj-luxury-gold transition-colors">Paris (CDG)</div>
              </div>
              
              <div className="px-4 py-2 cursor-pointer group w-full">
                <div className="text-[10px] uppercase tracking-widest text-siyajj-muted-text mb-1">Date souhaitée</div>
                <div className="text-siyajj-ivory text-sm font-medium group-hover:text-siyajj-luxury-gold transition-colors">Sélectionner</div>
              </div>
              
              <div className="px-4 py-2 cursor-pointer group w-full">
                <div className="text-[10px] uppercase tracking-widest text-siyajj-muted-text mb-1">Voyageurs</div>
                <div className="text-siyajj-ivory text-sm font-medium group-hover:text-siyajj-luxury-gold transition-colors">2 voyageurs</div>
              </div>
              
              <div className="px-4 py-2 cursor-pointer group w-full">
                <div className="text-[10px] uppercase tracking-widest text-siyajj-muted-text mb-1">Collection</div>
                <div className="text-siyajj-ivory text-sm font-medium group-hover:text-siyajj-luxury-gold transition-colors">Signature VIP</div>
              </div>

            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full md:w-auto shrink-0 h-12 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne rounded text-xs uppercase tracking-widest font-medium">
                  Trouver mon voyage
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-siyajj-deep-black border border-siyajj-luxury-gold/20 text-siyajj-ivory">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-siyajj-luxury-gold/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl text-siyajj-luxury-gold">✦</span>
                  </div>
                  <h3 className="text-2xl font-serif text-siyajj-ivory mb-2">Votre projet SIYAJJ est prêt</h3>
                  <p className="text-siyajj-muted-text mb-8">Un conseiller est disponible pour affiner les détails de votre voyage vers les Lieux Saints.</p>
                  
                  <div className="flex flex-col gap-4">
                    <Button className="w-full h-12 bg-siyajj-luxury-gold text-siyajj-deep-black hover:bg-siyajj-champagne">
                      Demander un devis
                    </Button>
                    <Button variant="outline" className="w-full h-12 border-siyajj-luxury-gold/30 text-siyajj-ivory hover:bg-white/5 hover:text-siyajj-luxury-gold">
                      Continuer sur WhatsApp
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
          </div>
        </div>
      </div>
    </section>
  );
}
