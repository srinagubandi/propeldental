// PageSpeed optimization: lazy-load all non-home pages so the initial JS bundle
// only includes Home page code. Other pages are fetched on demand.
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
// Home is eagerly loaded — it's the entry point and needed immediately
import Home from "./pages/Home";
// All other pages lazy-loaded — only fetched when the user navigates to them
const NotFound        = lazy(() => import("@/pages/NotFound"));
const FullArchMarketing = lazy(() => import("@/pages/FullArchMarketing"));
const P90Protocol     = lazy(() => import("@/pages/P90Protocol"));
const Results         = lazy(() => import("@/pages/Results"));
const About           = lazy(() => import("@/pages/About"));
const Contact         = lazy(() => import("@/pages/Contact"));
const Calculator      = lazy(() => import("@/pages/Calculator"));
const DentalSEO       = lazy(() => import("@/pages/services/DentalSEO"));
const SocialMedia     = lazy(() => import("@/pages/services/SocialMedia"));
const PaidSearch      = lazy(() => import("@/pages/services/PaidSearch"));
const VideoProduction = lazy(() => import("@/pages/services/VideoProduction"));
const AEO             = lazy(() => import("@/pages/services/AEO"));
const GEO             = lazy(() => import("@/pages/services/GEO"));
// Minimal loading fallback — dark background matching site theme, no layout shift
function PageLoader() {
  return <div style={{ minHeight: "100vh", background: "#05070b" }} />;
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
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
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
    </Suspense>
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
