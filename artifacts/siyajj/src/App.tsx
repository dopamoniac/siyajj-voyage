import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PageShell } from "@/components/layout/PageShell";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import NosOmras from "@/pages/nos-omras";
import Collections from "@/pages/collections";
import SurMesure from "@/pages/sur-mesure";
import SignatureVip from "@/pages/signature-vip";
import Activites from "@/pages/activites";
import Hajj from "@/pages/hajj";
import Guides from "@/pages/guides";
import APropos from "@/pages/a-propos";
import Contact from "@/pages/contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <PageShell>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/nos-omras" component={NosOmras} />
        <Route path="/collections" component={Collections} />
        <Route path="/sur-mesure" component={SurMesure} />
        <Route path="/signature-vip" component={SignatureVip} />
        <Route path="/activites" component={Activites} />
        <Route path="/hajj" component={Hajj} />
        <Route path="/guides" component={Guides} />
        <Route path="/a-propos" component={APropos} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </PageShell>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
