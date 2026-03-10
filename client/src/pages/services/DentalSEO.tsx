import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import IntakeForm from "@/components/IntakeForm";
import { ArrowRight, CheckCircle2, Search, MapPin, Star, BarChart3, Globe, FileText } from "lucide-react";

export default function DentalSEO() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Link href="/full-arch-marketing">
              <span className="text-sm text-primary hover:underline cursor-pointer mb-4 inline-block">&larr; Back to Services</span>
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              Dental SEO for{" "}
              <span className="text-primary">Implant Practices</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
              Rank for the searches that matter most — "full arch dentist near me," "All-on-4 cost,"
              "dental implants [your city]." We build SEO strategies specifically for implant and
              full-arch practices that drive qualified patient inquiries, not just traffic.
            </p>
            <IntakeForm
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-8 text-lg">
                  Get a Free SEO Audit <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* WHY IMPLANT SEO IS DIFFERENT */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Implant SEO Is Different</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Most dental SEO agencies optimize for generic terms like "dentist near me" or
                  "teeth cleaning." That's fine for general practices, but it's not how full-arch
                  patients search. Implant patients ask specific, high-intent questions — and they
                  research extensively before choosing a provider.
                </p>
                <p>
                  Our SEO strategy is built around the full-arch patient journey: from initial
                  research ("Are dental implants worth it?") to comparison ("All-on-4 vs dentures")
                  to decision ("best implant dentist in [city]"). We capture patients at every stage.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: <Search className="w-5 h-5" />, title: "High-Intent Keyword Strategy", desc: "We target the exact phrases implant patients use — not generic dental terms." },
                { icon: <MapPin className="w-5 h-5" />, title: "Local SEO Domination", desc: "Google Business Profile optimization, local citations, and map pack strategy." },
                { icon: <FileText className="w-5 h-5" />, title: "Content That Converts", desc: "Educational content that answers patient questions and builds trust before they call." },
                { icon: <Star className="w-5 h-5" />, title: "Review & Reputation Strategy", desc: "Systematic review generation that boosts both rankings and patient confidence." },
                { icon: <Globe className="w-5 h-5" />, title: "Technical SEO Foundation", desc: "Site speed, schema markup, mobile optimization, and crawlability." },
                { icon: <BarChart3 className="w-5 h-5" />, title: "Transparent Reporting", desc: "Monthly reports showing real metrics — rankings, traffic, leads, and revenue impact." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg border border-border bg-card">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR SEO PROCESS */}
      <section className="py-20 md:py-28 border-b border-border bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Implant SEO Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Audit & Discovery", desc: "Complete technical audit, competitive analysis, and keyword research focused on your market and implant services." },
              { step: "02", title: "On-Page Optimization", desc: "Service pages, schema markup, internal linking, and content optimization for every implant procedure you offer." },
              { step: "03", title: "Content Strategy", desc: "Monthly content calendar targeting patient questions, procedure comparisons, and local search terms." },
              { step: "04", title: "Local & Off-Page", desc: "Google Business Profile optimization, citation building, review strategy, and authoritative backlink acquisition." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg border border-border bg-background">
                <div className="text-3xl font-bold text-primary/30 mb-3">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEYWORDS WE TARGET */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Keywords That Drive Full-Arch Patients</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            We don't chase vanity keywords. We target the exact searches that lead to
            $25K–$50K+ treatment plans.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "All-on-4 dental implants [city]",
              "full arch dental implants cost",
              "teeth in a day near me",
              "dental implant specialist",
              "All-on-4 vs dentures",
              "full mouth dental implants",
              "implant supported dentures",
              "same day dental implants",
              "best implant dentist [city]",
              "dental implant consultation",
              "affordable dental implants",
              "full arch restoration",
              "implant dentist reviews",
              "sedation dentistry implants",
              "bone grafting for implants",
              "zygomatic implants near me",
            ].map((kw, i) => (
              <div key={i} className="p-3 rounded-md border border-border bg-card text-sm text-muted-foreground text-center">
                {kw}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Own Your Local Search Results?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Get a free SEO audit of your implant practice — we'll show you exactly where
              you stand and what it would take to dominate your market.
            </p>
            <IntakeForm
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-8 text-lg">
                  Get Your Free SEO Audit <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
