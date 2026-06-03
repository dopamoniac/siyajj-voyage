import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { MotionConfig } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PageShell } from "@/components/layout/PageShell";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

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

const queryClient = new QueryClient();

function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="h-10 w-10 rounded-full border-2 border-siyajj-luxury-gold/30 border-t-siyajj-luxury-gold animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <PageShell>
      <Suspense fallback={<RouteFallback />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/nos-omras" component={NosOmras} />
          <Route path="/collections" component={Collections} />
          <Route path="/sur-mesure" component={SurMesure} />
          <Route path="/signature-vip" component={SignatureVip} />
          <Route path="/activites" component={Activites} />
          <Route path="/formations" component={Formations} />
          <Route path="/hajj" component={Hajj} />
          <Route path="/guides" component={Guides} />
          <Route path="/a-propos" component={APropos} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </PageShell>
  );
}

function App() {
  return (
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
  );
}

export default App;
