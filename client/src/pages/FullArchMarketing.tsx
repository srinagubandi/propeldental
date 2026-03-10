import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import IntakeForm from "@/components/IntakeForm";
import {
  ArrowRight,
  CheckCircle2,
  Video,
  Target,
  Users,
  BarChart3,
  Megaphone,
  Search,
  Tv,
  MessageSquare,
  Smartphone,
  Globe,
} from "lucide-react";

export default function FullArchMarketing() {
  const primaryServices = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Custom Video Production & Creative",
      description:
        "We produce professional practice films, patient testimonial videos, procedure explainers, and ad creative that tells your unique story. No stock footage. No templates. Every frame is authentically yours.",
      features: [
        "Practice introduction films",
        "Patient testimonial videos",
        "Full-arch procedure explainers",
        "Short-form social content (TikTok, Reels, Shorts)",
        "Before & after case presentations",
        "Doctor spotlight content",
      ],
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Targeted Digital Advertising",
      description:
        "Multi-platform campaigns designed to reach patients actively searching for full-arch and implant solutions. We target by demographics, intent, geography, and behavior to fill your pipeline with qualified leads.",
      features: [
        "Facebook & Instagram ad campaigns",
        "Google Search & Display advertising",
        "YouTube pre-roll and in-stream ads",
        "TikTok advertising for younger demographics",
        "Retargeting and lookalike audiences",
        "Landing page design and optimization",
      ],
    },
    {
      icon: <Tv className="w-6 h-6" />,
      title: "TV & Streaming Advertising",
      description:
        "Reach patients where they spend their evenings  - on connected TV and streaming platforms. We produce broadcast-quality commercials and place them on Hulu, Roku, Amazon Fire TV, Peacock, and local broadcast.",
      features: [
        "30-second and 60-second TV commercials",
        "Connected TV / OTT placement",
        "Local broadcast TV campaigns",
        "YouTube TV and streaming pre-roll",
        "Geo-targeted streaming ads",
        "Performance tracking and attribution",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Case Acceptance Training",
      description:
        "The best marketing in the world means nothing if your team can't close. We provide in-office training for your front desk, treatment coordinators, and clinical staff on presenting full-arch cases and handling objections.",
      features: [
        "Treatment presentation coaching",
        "Objection handling frameworks",
        "Financial conversation training",
        "Phone skills and lead qualification",
        "Follow-up systems and scripts",
        "Role-playing and live practice sessions",
      ],
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Lead Management Systems",
      description:
        "We build and optimize your lead pipeline from first click to seated patient. CRM setup, automated follow-ups, call tracking, and real-time dashboards so no lead falls through the cracks.",
      features: [
        "CRM setup and optimization",
        "Automated email and SMS sequences",
        "Call tracking and recording",
        "Real-time lead dashboards",
        "Speed-to-lead optimization",
        "Lead scoring and qualification",
      ],
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Practice Brand Development",
      description:
        "We go beyond ads to build a brand that resonates in your community. From your visual identity to your messaging framework, we help you stand out as the go-to implant practice in your market.",
      features: [
        "Brand positioning and messaging",
        "Visual identity refinement",
        "Community presence strategy",
        "Reputation management",
        "Patient review generation",
        "Referral program development",
      ],
    },
  ];

  const socialPlatforms = [
    { icon: <Globe className="w-5 h-5" />, name: "Facebook", desc: "Targeted campaigns reaching implant candidates in your area" },
    { icon: <Smartphone className="w-5 h-5" />, name: "Instagram", desc: "Visual storytelling with before/afters and practice culture" },
    { icon: <Smartphone className="w-5 h-5" />, name: "TikTok", desc: "Short-form video content reaching younger demographics" },
    { icon: <Video className="w-5 h-5" />, name: "YouTube", desc: "Long-form educational content and pre-roll advertising" },
    { icon: <Globe className="w-5 h-5" />, name: "X (Twitter)", desc: "Thought leadership and community engagement" },
    { icon: <MessageSquare className="w-5 h-5" />, name: "Reddit", desc: "Community-driven content in dental and health subreddits" },
    { icon: <Smartphone className="w-5 h-5" />, name: "Snapchat", desc: "Geo-filtered campaigns targeting local audiences" },
    { icon: <Globe className="w-5 h-5" />, name: "Nextdoor", desc: "Hyper-local community marketing to nearby neighborhoods" },
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              Full-Arch Marketing{" "}
              <span className="text-primary">Built From the Inside Out</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
              We don't hand you a media plan and disappear. We embed ourselves in your practice,
              learn what makes you different, and build a marketing engine that's authentically
              yours. Every ad, every video, every strategy  - custom-built for your full-arch practice.
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

      {/* PRIMARY SERVICES */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="space-y-16">
            {primaryServices.map((service, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  {service.features.map((feature, j) => (
                    <div
                      key={j}
                      className="flex items-start gap-3 p-3 rounded-md border border-border bg-card"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA PLATFORMS */}
      <section className="py-20 md:py-28 border-t border-border bg-card">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Every Platform Your Patients Use
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We manage your presence across every consumer-facing social platform  - with content
              and campaigns tailored to how each platform works and who uses it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialPlatforms.map((platform, i) => (
              <div key={i} className="p-5 rounded-lg border border-border bg-background hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                  {platform.icon}
                </div>
                <h3 className="font-semibold mb-1">{platform.name}</h3>
                <p className="text-xs text-muted-foreground">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO SECTION  - OTHER SPECIALTIES */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-bold mb-4 text-muted-foreground">
              We Also Serve Other Dental Specialties
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              While our primary focus is full-arch and implant dentistry, our marketing
              expertise extends across the dental industry. If you're a general dentist,
              orthodontist, or cosmetic dentistry practice looking for a transparent growth
              partner, we can help.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "General Dentistry",
              "Orthodontics",
              "Cosmetic Dentistry",
              "Oral Surgery",
              "Periodontics",
              "Endodontics",
              "Pediatric Dentistry",
              "Prosthodontics",
              "Sedation Dentistry",
              "Emergency Dentistry",
              "TMJ / TMD Treatment",
              "Dental Sleep Medicine",
            ].map((specialty, i) => (
              <div
                key={i}
                className="p-3 rounded-md border border-border text-center text-sm text-muted-foreground"
              >
                {specialty}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP-DIVE SERVICE PAGES */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Go Deeper</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Explore our detailed guides and service breakdowns for each marketing channel.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Dental SEO", desc: "Dominate local search for implant keywords", href: "/services/dental-seo" },
              { title: "Paid Search & PPC", desc: "Google Ads built for $30K+ cases", href: "/services/paid-search" },
              { title: "Social Media Marketing", desc: "Every platform your patients use", href: "/services/social-media" },
              { title: "Video Production & TV", desc: "Broadcast-quality content and TV ads", href: "/services/video-production" },
              { title: "AEO Best Practices", desc: "Answer Engine Optimization for dentists", href: "/services/aeo" },
              { title: "GEO Best Practices", desc: "Generative Engine Optimization guide", href: "/services/geo" },
            ].map((item, i) => (
              <Link key={i} href={item.href}>
                <div className="p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors cursor-pointer group">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                  <span className="text-primary text-sm mt-3 inline-flex items-center gap-1">Read more <ArrowRight className="w-3 h-3" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-border bg-card">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Your Growth Engine
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Every partnership starts with a conversation. Tell us about your practice, your
              goals, and your frustrations  - and we'll show you exactly how we'd approach your
              market.
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
