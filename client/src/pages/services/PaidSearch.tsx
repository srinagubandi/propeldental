import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import IntakeForm from "@/components/IntakeForm";
import { ArrowRight, Target, DollarSign, BarChart3, MousePointerClick, Shield, Zap } from "lucide-react";

export default function PaidSearch() {
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
              Paid Search & PPC for{" "}
              <span className="text-primary">Full-Arch Practices</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
              When a patient searches "All-on-4 dentist near me," you need to be the first
              thing they see. Our paid search campaigns are built exclusively for high-value
              implant cases  - not $200 cleanings.
            </p>
            <IntakeForm
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-8 text-lg">
                  Get a Free PPC Audit <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 md:py-28 border-b border-border bg-card">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Most Dental PPC Is Wasting Your Money</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Here's what we see constantly: practices spending $5,000–$15,000/month on Google Ads
                and getting leads for cleanings, whitening, and price shoppers. The agency reports
                "150 leads this month!" but only 3 were actual implant inquiries.
              </p>
              <p>
                The problem isn't Google Ads  - it's the strategy. Generic dental PPC campaigns
                cast too wide a net. Full-arch PPC requires a fundamentally different approach:
                different keywords, different landing pages, different qualification, and different
                conversion tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Full-Arch PPC Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Target className="w-5 h-5" />, title: "Implant-Only Targeting", desc: "We build campaigns around high-intent implant keywords only. No cleanings, no whitening, no price shoppers. Every dollar goes toward $25K+ cases." },
              { icon: <MousePointerClick className="w-5 h-5" />, title: "Custom Landing Pages", desc: "Dedicated landing pages for each procedure  - All-on-4, full-arch, implant-supported dentures  - with conversion-optimized design and copy." },
              { icon: <DollarSign className="w-5 h-5" />, title: "Revenue-Based Tracking", desc: "We don't just track clicks and leads. We track which campaigns produce actual consultations and closed cases, so you know your true ROI." },
              { icon: <Shield className="w-5 h-5" />, title: "Negative Keyword Strategy", desc: "Aggressive negative keyword management to eliminate waste  - no 'cheap,' 'free,' 'insurance,' or irrelevant procedure clicks eating your budget." },
              { icon: <Zap className="w-5 h-5" />, title: "Rapid Testing & Optimization", desc: "Continuous A/B testing of ad copy, landing pages, and bidding strategies. We optimize weekly, not monthly." },
              { icon: <BarChart3 className="w-5 h-5" />, title: "Transparent Reporting", desc: "Full access to your ad accounts. Monthly reports showing spend, leads, cost per lead, consultations booked, and revenue generated." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg border border-border bg-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-20 md:py-28 border-b border-border bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Platforms We Manage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Google Search Ads", desc: "Capture high-intent patients actively searching for implant procedures. The highest-converting channel for full-arch cases." },
              { name: "Google Local Service Ads", desc: "Google Guaranteed badge placement at the very top of search results. Pay per lead, not per click." },
              { name: "Meta Ads (Facebook & Instagram)", desc: "Targeted awareness and retargeting campaigns reaching implant candidates based on demographics, interests, and behaviors." },
              { name: "YouTube Pre-Roll Ads", desc: "Video ads that play before dental and health content. Showcase patient transformations to a targeted local audience." },
            ].map((platform, i) => (
              <div key={i} className="p-6 rounded-lg border border-border bg-background">
                <h3 className="font-bold mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What We Optimize For</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { metric: "Cost Per Lead", desc: "Not just any lead  - qualified implant inquiries" },
              { metric: "Consultation Rate", desc: "Percentage of leads that book a consultation" },
              { metric: "Case Acceptance", desc: "Tracking from click to closed treatment plan" },
              { metric: "Revenue per $1 Spent", desc: "The only metric that truly matters" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-bold text-primary mb-2">{item.metric}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Stop Paying for Cleaning Leads</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Get a free PPC audit  - we'll show you exactly how much of your current ad spend
              is wasted on non-implant clicks and what a focused strategy could deliver.
            </p>
            <IntakeForm
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-8 text-lg">
                  Get My Free PPC Audit <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
