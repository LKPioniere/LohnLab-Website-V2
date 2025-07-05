import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Unternehmen from "@/pages/unternehmen";
import Lohnerhoehung from "@/pages/lohnerhoehung";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/unternehmen" component={Unternehmen} />
      <Route path="/loesungen/lohnerhoehung" component={Lohnerhoehung} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
