import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import IntakeForm from "@/components/IntakeForm";
import {
  Shield,
  Users,
  Target,
  Eye,
  Award,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Zap,
  Clock,
} from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto relative z-10 py-20 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Exclusively for Full-Arch & Implant Practices
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Your Implant Practice{" "}
              <span className="text-primary">Deserves More</span> Than
              Generic Ads.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Propel Dental is not an ad agency. We are a tailor-fit marketing and consulting
              firm built exclusively for full-arch and implant dentistry practices. We work
              hand-in-hand with you to build your practice identity, strengthen your brand, and
              fill your chairs with qualified full-arch cases.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <IntakeForm
                trigger={
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-8 text-lg">
                    Book a Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                }
              />
              <Link href="/p90-protocol">
                <Button size="lg" variant="outline" className="border-border hover:bg-muted/50 h-14 px-8 text-lg font-semibold">
                  Explore the P90 Protocol
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" /> HIPAA Compliant
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Limited Client List
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Full Transparency
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" /> All 50 States
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tired of Marketing Companies That Don't Get It?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We've heard the same frustrations from doctors across the country. Cookie-cutter
              ads that look like every other practice. Agencies that churn through clients.
              Black-box reporting that hides where your money goes. We built Propel Dental to
              be the opposite of everything you hate about dental marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "No More Generic Ads",
                description:
                  "Every asset we create is built around your practice voice, your team, and your competitive advantages. Not a template with your logo slapped on it.",
              },
              {
                title: "No More Churn",
                description:
                  "We maintain a limited client list because we prioritize depth over volume. When we take you on, we're committed for the long haul.",
              },
              {
                title: "No More Black Box",
                description:
                  "Full visibility into every dollar spent, every lead generated, and every strategy decision. You'll always know exactly what's happening and why.",
              },
              {
                title: "No More Fly-By-Night Agencies",
                description:
                  "Our team brings years of experience in implant dentistry marketing specifically. This isn't a side hustle — it's all we do.",
              },
              {
                title: "No More Wasted First 90 Days",
                description:
                  "Our P90 Success Protocol ensures your launch is optimized from day one with in-office training, workflow analysis, and custom strategy.",
              },
              {
                title: "No More One-Size-Fits-All",
                description:
                  "We learn your market, your strengths, your team. Then we build a strategy that's uniquely yours — because your practice is unique.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors group"
              >
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* P90 PROTOCOL TEASER */}
      <section className="py-20 md:py-28 border-t border-border bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                Industry Exclusive
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The P90 Success Protocol
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our industry-exclusive 90-day onboarding program is designed to eliminate the
                common pain points of launching or scaling implant marketing. We come to your
                office, train your team, learn your voice, and build a strategy that's
                authentically yours.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Personalized in-office training for your entire team",
                  "Full-arch workflow analysis and operational optimization",
                  "Practice voice discovery and brand positioning",
                  "Custom videography and marketing asset creation",
                  "Lead management and case acceptance coaching",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/p90-protocol">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Learn About the P90 Protocol <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              {[
                {
                  phase: "Days 1–30",
                  title: "Discovery & Foundation",
                  desc: "In-office immersion, team training, practice voice discovery, competitive analysis, and workflow audit.",
                },
                {
                  phase: "Days 31–60",
                  title: "Build & Launch",
                  desc: "Custom creative production, campaign architecture, lead management systems, and initial launch.",
                },
                {
                  phase: "Days 61–90",
                  title: "Optimize & Scale",
                  desc: "Performance analysis, campaign refinement, case acceptance coaching, and scaling strategy.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-[9px]" />
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {item.phase}
                  </span>
                  <h3 className="text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 PILLARS */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Implant Practices Choose Propel
            </h2>
            <p className="text-lg text-muted-foreground">
              We're not trying to be the biggest agency. We're building the most trusted
              partnership in implant dentistry marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <Clock className="w-6 h-6" />, title: "P90 Protocol", desc: "90-day in-office onboarding that sets the foundation for long-term success." },
              { icon: <Users className="w-6 h-6" />, title: "Limited Clients", desc: "We cap our client list so every partner gets our full attention and resources." },
              { icon: <Target className="w-6 h-6" />, title: "Custom Everything", desc: "No templates. Every ad, video, and strategy is built from your practice's DNA." },
              { icon: <Eye className="w-6 h-6" />, title: "Full Transparency", desc: "See every dollar, every metric, every decision. No hidden fees or black-box reporting." },
              { icon: <Award className="w-6 h-6" />, title: "Deep Expertise", desc: "Industry veterans in implant marketing — not generalists learning on your dime." },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 md:py-28 border-t border-border bg-primary/5">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for Results. Measured by Transparency.
            </h2>
            <p className="text-lg text-muted-foreground">
              We don't just promise growth — we prove it with numbers you can see and verify.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "90", suffix: " Days", label: "To a fully optimized launch", icon: <Clock className="w-5 h-5" /> },
              { stat: "100", suffix: "%", label: "Transparency on spend & results", icon: <Eye className="w-5 h-5" /> },
              { stat: "0", suffix: "", label: "Generic template ads created", icon: <Shield className="w-5 h-5" /> },
              { stat: "50", suffix: "+", label: "States served nationwide", icon: <TrendingUp className="w-5 h-5" /> },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-lg border border-border bg-card">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {item.stat}<span className="text-2xl">{item.suffix}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Full-Service Implant Practice Growth
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From custom ad creation to in-office training, we handle every aspect of your
              implant marketing so you can focus on what you do best — changing lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Custom Ad Creation & Video Production", desc: "Professional videography, patient testimonials, practice films, and ad creative built around your unique story." },
              { title: "Targeted Digital Advertising", desc: "Facebook, Instagram, TikTok, YouTube, Google Ads, and streaming TV — all targeted to your ideal full-arch patients." },
              { title: "Lead Management & Qualification", desc: "Systems and training to ensure every lead is properly handled, qualified, and converted into a consultation." },
              { title: "Case Acceptance Training", desc: "In-office coaching for your team on presenting treatment plans, handling objections, and closing full-arch cases." },
              { title: "Practice Brand Development", desc: "Discover and amplify what makes your practice unique. Build a brand that stands out in your community." },
              { title: "SEO & Online Presence", desc: "Dominate local search results for implant and full-arch keywords. Reputation management and review strategy." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors group">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/full-arch-marketing">
              <Button size="lg" variant="outline" className="border-border hover:bg-muted/50 font-semibold">
                View All Services <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 border-t border-border bg-card">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Real?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              This isn't a sales pitch. It's a real strategy conversation about your practice,
              your market, and whether we're the right fit. We're selective about who we work
              with — and we think you should be too.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <IntakeForm
                trigger={
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-8 text-lg">
                    Book a Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                }
              />
              <a href="tel:8887767735">
                <Button size="lg" variant="outline" className="border-border hover:bg-muted/50 h-14 px-8 text-lg font-semibold">
                  Call (888) PROPEL-5
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
