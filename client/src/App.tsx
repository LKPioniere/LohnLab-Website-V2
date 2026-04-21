import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Lohnerhoehung from "@/pages/lohnerhoehung";
import Neueinstellungen from "@/pages/neueinstellungen";
import Kontakt from "@/pages/kontakt";
import Karriere from "@/pages/karriere";
import FAQ from "@/pages/faq";
import Impressum from "@/pages/impressum";
import Datenschutz from "@/pages/datenschutz";
import SaasVertrag from "@/pages/saas-vertrag";
import Steuerberater from "@/pages/steuerberater";
import Unternehmen from "@/pages/unternehmen";
import NewHireCompensationAPI from "@/pages/api/new-hire-compensation";
import { Analytics } from "@vercel/analytics/react";
import CookieConsent from "@/components/CookieConsent";
import { useConsent } from "@/lib/cookie-consent";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/loesungen/lohnerhoehung" component={Lohnerhoehung} />
      <Route path="/loesungen/neueinstellungen" component={Neueinstellungen} />
      <Route path="/steuerberater" component={Steuerberater} />
      <Route path="/unternehmen" component={Unternehmen} />
      <Route path="/kontakt" component={Kontakt} />
      <Route path="/contact">
        <Redirect to="/kontakt" />
      </Route>
      <Route path="/karriere" component={Karriere} />
      <Route path="/faq" component={FAQ} />
      <Route
        path="/api/new-hire-compensation"
        component={NewHireCompensationAPI}
      />
      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route path="/saas-vertrag" component={SaasVertrag} />
      <Route component={NotFound} />
    </Switch>
  );
}

function ConditionalAnalytics() {
  const consent = useConsent();
  if (consent?.statistics !== true) return null;
  return <Analytics />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <ConditionalAnalytics />
        <CookieConsent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
