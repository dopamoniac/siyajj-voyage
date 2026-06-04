import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { MotionConfig } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PageShell } from "@/components/layout/PageShell";
import { ThemeProvider } from "@/contexts/theme";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

// Core pages
const NosOmras = lazy(() => import("@/pages/nos-omras"));
const Collections = lazy(() => import("@/pages/collections"));
const SurMesure = lazy(() => import("@/pages/sur-mesure"));
const SignatureVip = lazy(() => import("@/pages/signature-vip"));
const Activites = lazy(() => import("@/pages/activites"));
const Formations = lazy(() => import("@/pages/formations"));
const Hajj = lazy(() => import("@/pages/hajj"));
const Guides = lazy(() => import("@/pages/guides"));
const APropos = lazy(() => import("@/pages/a-propos"));
const Contact = lazy(() => import("@/pages/contact"));

// New detail pages
const ActiviteDetail = lazy(() => import("@/pages/activite-detail"));
const FormationDetail = lazy(() => import("@/pages/formation-detail"));
const GuideDetail = lazy(() => import("@/pages/guide-detail"));
const OmraSubpage = lazy(() => import("@/pages/omra-subpage"));
const CollectionDetail = lazy(() => import("@/pages/collection-detail"));

// Billets
const BilletsAvion = lazy(() => import("@/pages/billets-avion"));
const BilletsBateau = lazy(() => import("@/pages/billets-bateau"));

// Standalone pages
const Avis = lazy(() => import("@/pages/avis"));
const FaqPage = lazy(() => import("@/pages/faq-page"));
const HajjPreparation = lazy(() => import("@/pages/hajj-preparation"));
const AProposMethode = lazy(() => import("@/pages/a-propos-methode"));
const AProposFactory = lazy(() => import("@/pages/a-propos-factory"));

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="h-10 w-10 rounded-full border-2 border-siyajj-luxury-gold/30 border-t-siyajj-luxury-gold animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <PageShell>
        <Suspense fallback={<RouteFallback />}>
          <Switch>
            {/* Home */}
            <Route path="/" component={Home} />

            {/* Core pages */}
            <Route path="/nos-omras" component={NosOmras} />
            <Route path="/collections" component={Collections} />
            <Route path="/sur-mesure" component={SurMesure} />
            <Route path="/signature-vip" component={SignatureVip} />
            <Route path="/activites" component={Activites} />
            <Route path="/formations" component={Formations} />
            <Route path="/guides" component={Guides} />
            <Route path="/a-propos" component={APropos} />
            <Route path="/contact" component={Contact} />

            {/* Hajj pages — specific before generic */}
            <Route path="/hajj/preparation" component={HajjPreparation} />
            <Route path="/hajj/demande-informations" component={Contact} />
            <Route path="/hajj" component={Hajj} />

            {/* À propos subpages */}
            <Route path="/a-propos/methode" component={AProposMethode} />
            <Route path="/a-propos/omra-factory" component={AProposFactory} />

            {/* Nos Omras subpages — dynamic slug */}
            <Route path="/nos-omras/:slug" component={OmraSubpage} />

            {/* Collections subpages — dynamic slug */}
            <Route path="/collections/:slug" component={CollectionDetail} />

            {/* Activities — specific routes come from :slug wildcard */}
            <Route path="/activites/:slug" component={ActiviteDetail} />

            {/* Formations */}
            <Route path="/formations/:slug" component={FormationDetail} />

            {/* Guides */}
            <Route path="/guides/:slug" component={GuideDetail} />

            {/* Billets */}
            <Route path="/billets-avion" component={BilletsAvion} />
            <Route path="/billets-bateau" component={BilletsBateau} />

            {/* Standalone */}
            <Route path="/avis" component={Avis} />
            <Route path="/faq" component={FaqPage} />

            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </PageShell>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <MotionConfig reducedMotion="user">
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <Router />
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </MotionConfig>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
