import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import IntakeForm from "@/components/IntakeForm";

const IconImage = ({ src, alt, size = 48 }: { src: string; alt: string; size?: number }) => (
  <img src={src} alt={alt} className="object-contain" style={{ width: size, height: size }} />
);

export default function HowItWorks() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const steps = [
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/woFUFmSxhgHLUyTo.png",
      step: "01",
      title: "Practice Growth Brief",
      desc: "We start with a comprehensive, no-obligation review of your dental practice's digital ecosystem. This includes your current online presence, local market competition, patient demand signals, and growth opportunities specific to your dental specialty and geography.",
      details: [
        "Digital presence audit (website, Google Business Profile, reviews)",
        "Local market competition analysis",
        "Patient demand and search volume research",
        "Identification of highest-value growth opportunities",
        "Delivered within 3 business days, no charge"
      ]
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/EtYMzJocxPYxMecb.png",
      step: "02",
      title: "Deploy & Optimize",
      desc: "Once we agree on a growth strategy, we deploy the right mix of dental SEO, paid search, reputation management, AI-powered website, and patient capture tools. Everything is continuously optimized using real-time data and AI-driven insights.",
      details: [
        "Dental SEO and local search optimization",
        "Google Ads and paid search management",
        "HIPAA-compliant AI website with 24/7 patient capture",
        "Reputation management and review generation",
        "Patient reactivation campaigns",
        "Real-time performance dashboard"
      ]
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/qANZOjHlFCcayAsG.png",
      step: "03",
      title: "Pay for Patients",
      desc: "You only pay when we deliver qualified patient inquiries and booked appointments. Our performance-based model means our success is directly tied to yours. No retainers, no wasted spend, no surprises.",
      details: [
        "Pay per qualified patient inquiry or booked appointment",
        "No monthly retainers or management fees",
        "No long-term contracts or lock-in periods",
        "Real-time reporting on all patient activity",
        "Monthly performance reviews with your growth specialist"
      ]
    }
  ];

  const comparisonRows = [
    { feature: "Pricing Model", us: "Performance-Based", them: "High Fixed Retainer" },
    { feature: "Technology", us: "AI-Driven Real-Time Optimization", them: "Manual Reporting & Slow Updates" },
    { feature: "Financial Risk", us: "Shared Risk", them: "100% On You" },
    { feature: "Contract Terms", us: "Flexible, No Lock-in", them: "12-24 Month Lock-in" },
    { feature: "Incentives", us: "Aligned with Your Growth", them: "Paid Regardless of Results" },
    { feature: "HIPAA Compliance", us: "Built-In, Dental-First", them: "Often an Afterthought" },
    { feature: "Dental Expertise", us: "Exclusively Dental", them: "Generic Healthcare or All Industries" },
    { feature: "Reporting", us: "Real-Time Patient Outcomes", them: "Vanity Metrics & Impressions" }
  ];

  const faqs = [
    {
      q: "How is Propel Dental different from a traditional dental marketing agency?",
      a: "Traditional agencies charge a fixed monthly retainer regardless of results. Propel Dental is performance-based — you only pay when we deliver qualified patient inquiries and booked appointments. Our incentives are completely aligned with your practice's growth."
    },
    {
      q: "What dental specialties do you work with?",
      a: "We work with all dental specialties across the USA, including general dentistry, orthodontics, cosmetic dentistry, dental implants, oral surgery, periodontics, endodontics, pediatric dentistry, prosthodontics, and sedation dentistry. We also work with multi-specialty practices and DSOs."
    },
    {
      q: "How long does it take to see results?",
      a: "Most dental practices see meaningful new patient growth within 60-90 days of launch. Paid search campaigns can generate patient inquiries within days, while dental SEO typically takes 3-6 months to reach full velocity. We'll set realistic expectations based on your specific market and specialty."
    },
    {
      q: "Is your platform HIPAA compliant?",
      a: "Yes. HIPAA compliance is built into everything we do — from our AI chatbots and patient capture forms to our reporting dashboards and communication tools. We understand that dental practices operate in a regulated environment and we take compliance seriously."
    },
    {
      q: "Do you require a long-term contract?",
      a: "No. We don't believe in locking dental practices into long-term contracts. Our performance-based model means we have to earn your business every month. We offer flexible arrangements with no long-term lock-in."
    },
    {
      q: "What is the Practice Growth Brief?",
      a: "The Practice Growth Brief is a comprehensive, no-obligation review of your dental practice's digital ecosystem. It includes a digital presence audit, local market competition analysis, patient demand research, and identification of your highest-value growth opportunities. It's delivered within 3 business days at no charge."
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-background to-blue-50/30 border-b border-border">
        <div className="container">
          <motion.div className="text-center max-w-3xl mx-auto" {...fadeIn}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">How Propel Dental Works</h1>
            <p className="text-xl text-muted-foreground">
              Simple. Transparent. Aligned with your dental practice's success. No retainers, no guesswork — just accountable, performance-based patient growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="grid md:grid-cols-2 gap-12 items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-7xl font-black text-primary/10 leading-none">{step.step}</div>
                    <IconImage src={step.icon} alt={step.title} size={56} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{step.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                <div className={`bg-white border-l-4 border-secondary p-8 shadow-sm ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="font-bold text-primary mb-4 uppercase tracking-wide text-sm">What's Included</h3>
                  <ul className="space-y-3">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Propel Dental Difference</h2>
            <p className="text-blue-100 text-lg">
              Misaligned incentives are the problem with traditional dental marketing agencies. Our performance-based model changes everything.
            </p>
          </motion.div>

          <div className="bg-white text-foreground p-8 md:p-10 shadow-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 mb-6 text-sm font-bold uppercase tracking-wide">
              <div className="text-muted-foreground">Feature</div>
              <div className="text-primary text-center">Propel Dental</div>
              <div className="text-muted-foreground text-center">Traditional Agency</div>
            </div>
            <div className="space-y-4">
              {comparisonRows.map((row, i) => (
                <div key={i} className="grid grid-cols-3 gap-4 items-center border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="font-medium text-sm text-muted-foreground">{row.feature}</div>
                  <div className="font-bold text-sm text-primary flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-secondary shrink-0" /> {row.us}
                  </div>
                  <div className="text-sm text-muted-foreground/60 flex items-center justify-center gap-2">
                    <X className="h-4 w-4 text-destructive shrink-0" /> {row.them}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="border border-border p-8 bg-white shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <h3 className="font-bold text-primary text-lg mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30 border-t border-border text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Request a free Practice Growth Brief and see exactly where your dental practice has the most opportunity to grow.
          </p>
          <IntakeForm trigger={
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-10 h-16 rounded-none shadow-xl">
              Request a Practice Growth Brief <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          } />
        </div>
      </section>
    </Layout>
  );
}
