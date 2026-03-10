import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import IntakeForm from "@/components/IntakeForm";
import {
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  DollarSign,
  Phone,
  BarChart3,
} from "lucide-react";

export default function Results() {
  const caseStudies = [
    {
      practice: "Premier Implant Center",
      location: "Dallas, TX",
      specialty: "Full-Arch / All-on-4",
      challenge:
        "Had been working with a large implant marketing agency for 8 months with declining lead quality and no visibility into ad spend. Doctor was frustrated and ready to quit marketing entirely.",
      approach:
        "P90 Protocol onboarding with full workflow audit, team retraining on lead management, custom video production, and a rebuilt campaign strategy focused on their unique sedation-first approach.",
      results: [
        { metric: "Full-Arch Consultations", before: "8/mo", after: "32/mo" },
        { metric: "Case Acceptance Rate", before: "28%", after: "52%" },
        { metric: "Cost Per Qualified Lead", before: "$420", after: "$185" },
        { metric: "Monthly Implant Revenue", before: "$95K", after: "$340K" },
      ],
      quote:
        "For the first time, I actually know where my money is going and I can see the results in my schedule. Propel didn't just fix our marketing  - they fixed our entire patient intake process.",
      doctor: "Dr. Michael Torres",
    },
    {
      practice: "Smile Architects",
      location: "Charlotte, NC",
      specialty: "Implants & Cosmetic",
      challenge:
        "New practice trying to establish a full-arch program. No existing patient base for implants, competing against 4 established implant practices in the market, and a team with no experience handling high-value cases.",
      approach:
        "Ground-up brand development, in-office case acceptance training, custom videography featuring the doctor's personal story, and a phased campaign launch targeting underserved zip codes.",
      results: [
        { metric: "Full-Arch Cases (Monthly)", before: "0", after: "6" },
        { metric: "Implant Revenue", before: "$0", after: "$180K/mo" },
        { metric: "Google Reviews", before: "12", after: "87" },
        { metric: "New Patient Calls", before: "15/mo", after: "85/mo" },
      ],
      quote:
        "We went from zero implant cases to a full schedule in under 6 months. The P90 training was a game-changer for my team  - they went from nervous about implant conversations to confident and closing.",
      doctor: "Dr. Amanda Chen",
    },
    {
      practice: "Tri-State Oral Surgery",
      location: "Philadelphia, PA",
      specialty: "Oral Surgery & Full-Arch",
      challenge:
        "Established oral surgery practice wanting to grow their full-arch program. Previous agency was running the same ads as 3 other practices in the area. Doctor felt like a commodity.",
      approach:
        "Complete brand differentiation strategy, custom content highlighting their surgical expertise and technology, community-focused marketing, and a referral program for general dentists.",
      results: [
        { metric: "Full-Arch Starts", before: "4/mo", after: "14/mo" },
        { metric: "Referring Dentists", before: "8", after: "34" },
        { metric: "Average Case Value", before: "$22K", after: "$28K" },
        { metric: "Patient Satisfaction", before: "4.2", after: "4.9" },
      ],
      quote:
        "Propel understood that we're not just another implant mill. They built our marketing around our surgical expertise and our commitment to patient care. The referral program alone has been worth the investment.",
      doctor: "Dr. Robert Patel",
    },
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" />
              Results & Case Studies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              Real Practices.{" "}
              <span className="text-primary">Real Results.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              We believe in full transparency  - and that includes showing you exactly what
              we've done for our partners. These are real case studies with real numbers from
              real implant practices.
            </p>
          </div>
        </div>
      </section>

      {/* AGGREGATE STATS */}
      <section className="py-16 border-b border-border bg-primary/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <TrendingUp className="w-5 h-5" />, stat: "3.5x", label: "Average increase in full-arch consultations" },
              { icon: <DollarSign className="w-5 h-5" />, stat: "52%", label: "Average improvement in case acceptance" },
              { icon: <Users className="w-5 h-5" />, stat: "94%", label: "Partner retention rate" },
              { icon: <Phone className="w-5 h-5" />, stat: "<2 min", label: "Average speed-to-lead after P90 training" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-lg border border-border bg-card">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                  {item.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{item.stat}</div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto space-y-20">
          {caseStudies.map((study, i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden bg-card">
              <div className="p-8 border-b border-border bg-primary/5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold">{study.practice}</h2>
                    <p className="text-muted-foreground">{study.location}  - {study.specialty}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-sm font-bold text-destructive uppercase tracking-wider mb-3">The Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Our Approach</h3>
                    <p className="text-muted-foreground leading-relaxed">{study.approach}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {study.results.map((result, j) => (
                    <div key={j} className="p-4 rounded-lg border border-border bg-background text-center">
                      <p className="text-xs text-muted-foreground mb-2">{result.metric}</p>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm text-muted-foreground line-through">{result.before}</span>
                        <ArrowRight className="w-3 h-3 text-primary" />
                        <span className="text-lg font-bold text-primary">{result.after}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-foreground italic leading-relaxed mb-2">"{study.quote}"</p>
                  <cite className="text-sm text-muted-foreground not-italic"> - {study.doctor}, {study.practice}</cite>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-border bg-card">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want Results Like These?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Every case study started with a single conversation. Let's talk about your
              practice, your market, and what's possible.
            </p>
            <IntakeForm
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-8 text-lg">
                  Book a Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
