import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import IntakeForm from "@/components/IntakeForm";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Video,
  BarChart3,
  Target,
  Lightbulb,
  Shield,
  Wrench,
} from "lucide-react";

export default function P90Protocol() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              Industry Exclusive
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              The P90 Success Protocol
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-4">
              Our industry-exclusive, 90-day success plan designed to ensure the most
              successful start to our partnership. We created this protocol to reduce the risk
              of inefficiencies during the critical first months, increase case acceptance from
              day one, and build a foundation for long-term, high-ROI growth.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
              This isn't a cookie-cutter onboarding checklist. It's a personalized, in-office
              program that embeds our team into yours  - so we can learn your voice, optimize operational gaps and bottlenecks, and build marketing that actually sounds like you.
            </p>
            <IntakeForm
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-8 text-lg">
                  Apply for the P90 Protocol <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* WHY P90 EXISTS */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why the First 90 Days Make or Break Everything
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Most implant marketing partnerships fail in the first 90 days. Not necessarily due to the marketing, but due to the practice not having the correct systems in place to see their highest potential. Leads come in and nobody knows how to handle them. The front desk isn't trained on full-arch conversations. The workflow has bottlenecks nobody identified. The ads look generic because the agency never took the time to learn the practice.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We built the P90 Success Protocol to fix all of that before it becomes a problem.
                By investing the first 90 days in your team, your operations, and your brand, we
                ensure that when the leads start flowing, your practice is ready to convert them.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { label: "Leads that go unanswered or poorly handled", icon: <Shield className="w-5 h-5" /> },
                { label: "Generic ads that don't reflect your practice", icon: <Shield className="w-5 h-5" /> },
                { label: "Staff unprepared for full-arch conversations", icon: <Shield className="w-5 h-5" /> },
                { label: "Workflow bottlenecks that kill conversion", icon: <Shield className="w-5 h-5" /> },
                { label: "No system for tracking or qualifying leads", icon: <Shield className="w-5 h-5" /> },
                { label: "Doctor frustration leading to early churn", icon: <Shield className="w-5 h-5" /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-lg border border-destructive/20 bg-destructive/5">
                  <div className="text-destructive">{item.icon}</div>
                  <span className="text-sm font-medium line-through text-muted-foreground">{item.label}</span>
                </div>
              ))}
              <p className="text-sm text-primary font-semibold pt-2">
                The P90 Protocol eliminates every one of these problems before they start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 1 */}
      <section className="py-20 md:py-28 border-b border-border bg-card">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold">
              01
            </div>
            <div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Days 1–30</span>
              <h2 className="text-3xl md:text-4xl font-bold">Discovery & Foundation</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: <Users className="w-5 h-5" />,
                title: "In-Office Immersion",
                desc: "Our team visits your practice to meet your staff, observe your workflow, and understand your culture firsthand. This isn't a Zoom call  - it's boots on the ground.",
              },
              {
                icon: <Lightbulb className="w-5 h-5" />,
                title: "Practice Voice Discovery",
                desc: "We interview you, your team, and even your patients to understand what makes your practice unique. This becomes the foundation of all your marketing.",
              },
              {
                icon: <BarChart3 className="w-5 h-5" />,
                title: "Competitive Market Analysis",
                desc: "We analyze every implant practice in your market  - their ads, their positioning, their strengths and weaknesses  - to find your competitive edge.",
              },
              {
                icon: <Wrench className="w-5 h-5" />,
                title: "Full-Arch Workflow Audit",
                desc: "We map your entire patient journey from first call to case completion, identifying bottlenecks, staffing gaps, and operational inefficiencies.",
              },
              {
                icon: <Target className="w-5 h-5" />,
                title: "Lead Management Training",
                desc: "Train your front desk and treatment coordinators on handling implant inquiries, qualifying leads, and booking consultations effectively.",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Systems & Infrastructure Setup",
                desc: "CRM configuration, call tracking, automated follow-up sequences, and real-time dashboards  - everything you need to manage leads from day one.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg border border-border bg-background">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASE 2 */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold">
              02
            </div>
            <div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Days 31–60</span>
              <h2 className="text-3xl md:text-4xl font-bold">Build & Launch</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: <Video className="w-5 h-5" />,
                title: "Custom Videography & Asset Creation",
                desc: "Professional video shoot at your practice  - doctor spotlights, patient testimonials, procedure walkthroughs, and social content. All custom. All yours.",
              },
              {
                icon: <Target className="w-5 h-5" />,
                title: "Campaign Architecture",
                desc: "We build your multi-platform campaign strategy based on everything we learned in Phase 1. Targeting, messaging, creative, and budget allocation  - all tailored to your market.",
              },
              {
                icon: <BarChart3 className="w-5 h-5" />,
                title: "Landing Page Development",
                desc: "Custom landing pages designed for full-arch conversions. Not templates  - pages built around your practice voice, your team photos, and your unique value proposition.",
              },
              {
                icon: <Lightbulb className="w-5 h-5" />,
                title: "Ad Creative Production",
                desc: "Using the video and photography from your shoot, we produce a library of ad creative across formats  - static, video, carousel, story, and more.",
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: "Case Acceptance Coaching",
                desc: "In-office training sessions on presenting full-arch treatment plans, handling financial conversations, and overcoming common patient objections.",
              },
              {
                icon: <Wrench className="w-5 h-5" />,
                title: "Initial Campaign Launch",
                desc: "Controlled launch across selected platforms with close monitoring. We start conservative and scale based on real data  - not assumptions.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg border border-border bg-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASE 3 */}
      <section className="py-20 md:py-28 border-b border-border bg-card">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold">
              03
            </div>
            <div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Days 61–90</span>
              <h2 className="text-3xl md:text-4xl font-bold">Optimize & Scale</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: <BarChart3 className="w-5 h-5" />,
                title: "Performance Deep Dive",
                desc: "Comprehensive analysis of every campaign, every ad, every lead source. We identify what's working, what's not, and where the biggest opportunities are.",
              },
              {
                icon: <Target className="w-5 h-5" />,
                title: "Campaign Refinement",
                desc: "Based on 30+ days of real data, we optimize targeting, creative, messaging, and budget allocation. This is where the ROI starts compounding.",
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: "Advanced Case Acceptance Training",
                desc: "Follow-up coaching sessions based on real scenarios your team has encountered. We review recorded calls, role-play objections, and refine scripts.",
              },
              {
                icon: <Wrench className="w-5 h-5" />,
                title: "Operational Optimization",
                desc: "Using data from the first 60 days, we identify and fix remaining workflow gaps, staffing issues, and process inefficiencies using our experience and industry partnerships.",
              },
              {
                icon: <Lightbulb className="w-5 h-5" />,
                title: "Long-Term Strategy Development",
                desc: "We build your 6-month and 12-month growth roadmap  - including seasonal strategies, expansion plans, and new service line marketing.",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Partnership Transition",
                desc: "Seamless transition from intensive onboarding to ongoing partnership. Clear KPIs, reporting cadence, and communication structure for the long haul.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg border border-border bg-background">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why the P90 Protocol Works</h2>
            <p className="text-lg text-muted-foreground">
              It's not magic. It's what happens when you actually invest in understanding a
              practice before you start marketing it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Your marketing sounds like YOU  - not a template",
              "Your team is trained and confident handling implant leads",
              "Your workflow is optimized before you scale",
              "Your lead management system catches every opportunity",
              "Your ads are built on real competitive intelligence",
              "Your relationship with us is built on trust, not a contract",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your P90?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              The P90 Success Protocol is available to a limited number of new partners each
              quarter. If you're serious about building a full-arch marketing program that
              actually works, let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <IntakeForm
                trigger={
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-8 text-lg">
                    Apply for the P90 Protocol <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                }
              />
              <a href="tel:9549450011">
                <Button size="lg" variant="outline" className="border-border hover:bg-muted/50 h-14 px-8 text-lg font-semibold">
                  Call (954) 945-0011
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
