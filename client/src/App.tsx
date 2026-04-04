import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import FullArchMarketing from "./pages/FullArchMarketing";
import P90Protocol from "./pages/P90Protocol";
import Results from "./pages/Results";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Calculator from "@/pages/Calculator";
import DentalSEO from "@/pages/services/DentalSEO";
import SocialMedia from "@/pages/services/SocialMedia";
import PaidSearch from "@/pages/services/PaidSearch";
import VideoProduction from "@/pages/services/VideoProduction";
import AEO from "@/pages/services/AEO";
import GEO from "@/pages/services/GEO";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/full-arch-marketing"} component={FullArchMarketing} />
      <Route path={"/p90-protocol"} component={P90Protocol} />
      <Route path={"/results"} component={Results} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/calculator" component={Calculator} />
      {/* Second-level service pages */}
      <Route path="/services/dental-seo" component={DentalSEO} />
      <Route path="/services/social-media" component={SocialMedia} />
      <Route path="/services/paid-search" component={PaidSearch} />
      <Route path="/services/video-production" component={VideoProduction} />
      <Route path="/services/aeo" component={AEO} />
      <Route path="/services/geo" component={GEO} />
      {/* Legal pages — linked from footer */}
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
