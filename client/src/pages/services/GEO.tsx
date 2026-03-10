import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import IntakeForm from "@/components/IntakeForm";
import { ArrowRight, Brain, Globe, Shield, BarChart3, Layers, Sparkles } from "lucide-react";
import { useState } from "react";

function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-border rounded-lg overflow-hidden bg-card">
          <button
            className="w-full text-left p-5 flex items-start justify-between gap-4 hover:bg-muted/50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-semibold text-sm leading-relaxed">{item.q}</span>
            <span className="text-primary shrink-0 text-lg">{openIndex === i ? "−" : "+"}</span>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function GEO() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Link href="/full-arch-marketing">
              <span className="text-sm text-primary hover:underline cursor-pointer mb-4 inline-block">&larr; Back to Services</span>
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              Best Practices Guide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              Generative Engine Optimization{" "}
              <span className="text-primary">(GEO)</span>{" "}
              for Dental Practices
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
              AI doesn't just find information anymore  - it generates answers, recommendations,
              and summaries. GEO ensures your implant practice is the one AI systems choose
              to recommend when patients ask for help finding a provider.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS GEO */}
      <section className="py-20 md:py-28 border-b border-border bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">What Is Generative Engine Optimization?</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Generative Engine Optimization (GEO) is the practice of structuring your
                  dental practice's entire online presence so that AI systems  - Google AI Overviews,
                  ChatGPT, Gemini, Perplexity, and others  - can understand, trust, and confidently
                  <strong> recommend</strong> your practice when generating answers for patients.
                </p>
                <p>
                  While AEO focuses on being the <em>answer</em> to a question, GEO focuses on
                  being the <em>recommendation</em>. When a patient asks "Who is the best
                  All-on-4 dentist in Phoenix?"  - GEO determines whether AI includes your
                  practice in its generated response.
                </p>
                <p>
                  AI systems are increasingly selective. They don't show every result  - they
                  synthesize information from multiple sources and recommend only the practices
                  they have the highest confidence in. GEO builds that confidence.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold mb-2">The Three Layers of Modern Search Visibility</h3>
              <div className="rounded-lg border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-semibold">Layer</th>
                      <th className="text-left p-3 font-semibold">Focus</th>
                      <th className="text-left p-3 font-semibold">Goal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-3 font-medium">SEO</td>
                      <td className="p-3 text-muted-foreground">Search engine rankings</td>
                      <td className="p-3 text-muted-foreground">Get discovered</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">AEO</td>
                      <td className="p-3 text-muted-foreground">AI-powered answers</td>
                      <td className="p-3 text-muted-foreground">Be the answer</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-primary">GEO</td>
                      <td className="p-3 text-muted-foreground">AI-generated recommendations</td>
                      <td className="p-3 text-muted-foreground">Be the recommendation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground">
                Each layer builds on the one below it. You need strong SEO as a foundation,
                AEO to be cited in answers, and GEO to be the practice AI actively recommends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW AI DECIDES */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">How AI Decides Which Practices to Recommend</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            AI systems don't follow a single ranking rule. They look for patterns that
            reduce uncertainty. Here's what they evaluate:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe className="w-5 h-5" />,
                title: "Clear Service & Location Signals",
                desc: "AI needs to understand exactly what you do and where. 'Emergency implant dentist in Kirkland offering same-day All-on-4' gives AI a strong signal. 'Comprehensive dental care' gives it nothing to work with.",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Cross-Platform Consistency",
                desc: "AI cross-checks your information across your website, Google Business Profile, review platforms, and directories. Inconsistent details (different hours, services, addresses) create uncertainty  - and AI skips uncertain sources.",
              },
              {
                icon: <Layers className="w-5 h-5" />,
                title: "Answer-Ready Content",
                desc: "AI systems reuse existing information  - they summarize, quote, and combine content. Practices with clearly structured, answer-formatted content are far more likely to be included in AI-generated responses.",
              },
              {
                icon: <BarChart3 className="w-5 h-5" />,
                title: "Credibility & Social Proof",
                desc: "Review volume, recency, and sentiment across Google, Yelp, and Healthgrades. AI weighs these signals heavily when deciding which practices to recommend with confidence.",
              },
              {
                icon: <Brain className="w-5 h-5" />,
                title: "E-E-A-T Signals",
                desc: "Experience, Expertise, Authoritativeness, and Trustworthiness. AI prioritizes content from practices that demonstrate real clinical expertise  - doctor bios, credentials, published content, and professional affiliations.",
              },
              {
                icon: <Sparkles className="w-5 h-5" />,
                title: "Patient-Centric Language",
                desc: "AI matches content to how patients actually ask questions. Practices that write in patient-friendly language (not clinical jargon) are more likely to match the conversational queries patients use with AI tools.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg border border-border bg-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">{item.icon}</div>
                <h3 className="font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEST PRACTICES */}
      <section className="py-20 md:py-28 border-b border-border bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">GEO Best Practices for Implant Practices</h2>
            <p className="text-muted-foreground text-center mb-12">
              Actionable strategies we implement for every Propel Dental partner.
            </p>
            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "Define Every Service Specifically",
                  desc: "Don't say 'we offer dental implants.' Say 'We perform full-arch All-on-4 dental implant procedures, single-tooth implant replacements, implant-supported dentures, and zygomatic implants for patients with bone loss  - at our practice in [city].' Specificity is what AI needs to match your practice to patient queries.",
                },
                {
                  num: "02",
                  title: "Maintain Absolute Cross-Platform Consistency",
                  desc: "Your practice name, address, phone number, hours, services, and doctor names must be identical across your website, Google Business Profile, Yelp, Healthgrades, ZocDoc, and every directory you're listed on. AI cross-references these sources  - any inconsistency reduces confidence.",
                },
                {
                  num: "03",
                  title: "Structure Content as Reusable Answers",
                  desc: "Write content that AI can easily extract and reuse. Use clear headings, concise paragraphs, and direct answers to specific questions. Think of every section as a potential AI citation  - if it can't stand alone as a clear answer, restructure it.",
                },
                {
                  num: "04",
                  title: "Build a Systematic Review Strategy",
                  desc: "AI heavily weighs review signals  - volume, recency, and sentiment. Implement a systematic process for requesting reviews after every successful treatment. Respond to every review (positive and negative) to show active engagement.",
                },
                {
                  num: "05",
                  title: "Showcase Doctor Credentials and Expertise",
                  desc: "Detailed doctor bio pages with credentials, training, specializations, publications, and professional affiliations. AI uses these E-E-A-T signals to determine whether your practice has the authority to be recommended for complex procedures like full-arch implants.",
                },
                {
                  num: "06",
                  title: "Create Comprehensive Content Clusters",
                  desc: "Build interconnected content hubs around each major procedure. For All-on-4: cost page, process page, recovery page, candidacy page, comparison pages (vs dentures, vs implant-supported dentures), FAQ page. This topical depth signals expertise to AI systems.",
                },
                {
                  num: "07",
                  title: "Implement Advanced Schema Markup",
                  desc: "Go beyond basic schema. Implement MedicalBusiness, Dentist, MedicalProcedure, FAQPage, Review, and LocalBusiness schema. Use JSON-LD format. This structured data is the language AI systems use to understand your practice programmatically.",
                },
                {
                  num: "08",
                  title: "Monitor Your AI Visibility",
                  desc: "Regularly test how AI tools respond to queries about your services and market. Ask ChatGPT, Perplexity, and Google AI Overviews about dental implants in your city. Track whether you're mentioned, how you're described, and what competitors appear instead.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-lg border border-border bg-background">
                  <div className="text-2xl font-bold text-primary/30 shrink-0">{item.num}</div>
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions About GEO</h2>
            <p className="text-muted-foreground text-center mb-10">
              Everything dental practices need to know about Generative Engine Optimization.
            </p>
            <FAQAccordion items={[
              {
                q: "What is Generative Engine Optimization (GEO)?",
                a: "GEO is the practice of optimizing your dental practice's entire online presence so that AI systems  - Google AI Overviews, ChatGPT, Gemini, Perplexity  - can understand, trust, and confidently recommend your practice when generating answers for patients. It focuses on being selected as a recommendation, not just appearing in search results.",
              },
              {
                q: "How is GEO different from AEO?",
                a: "AEO (Answer Engine Optimization) focuses on being the direct answer to a specific question  - like 'How much do dental implants cost?' GEO goes further by focusing on being the recommended practice when AI generates responses to broader queries  - like 'Who is the best implant dentist in [city]?' AEO is about answering questions; GEO is about earning recommendations.",
              },
              {
                q: "Does GEO replace traditional SEO?",
                a: "No. GEO builds on top of SEO  - it extends it. Traditional SEO provides the foundation: technical health, quality content, backlinks, and local optimization. GEO adds a layer that specifically addresses how AI systems interpret, synthesize, and recommend from those SEO signals. Without strong SEO, there's nothing for GEO to build on.",
              },
              {
                q: "Why isn't my dental practice showing up in AI search results?",
                a: "Common reasons include: (1) Inconsistent information across platforms (different hours, services, or addresses), (2) Vague service descriptions that don't match specific patient queries, (3) Lack of structured data/schema markup, (4) Insufficient review volume or recency, (5) Content that isn't structured as clear, reusable answers, and (6) Weak E-E-A-T signals (doctor credentials, authority content).",
              },
              {
                q: "How do Google AI Overviews affect my dental practice?",
                a: "Google AI Overviews appear at the top of search results and provide AI-generated summaries that answer patient queries directly. For dental practices, this means patients may get information about procedures, costs, and even provider recommendations without scrolling to traditional results. If your practice isn't optimized for AI Overviews, you're losing visibility to competitors who are.",
              },
              {
                q: "Is GEO relevant for smaller or local dental practices?",
                a: "Absolutely. In fact, GEO may be even more important for local practices. When AI generates answers about dental services in a specific city, it can only recommend practices it has high confidence in. Smaller practices with clear, consistent, well-structured information can outperform larger competitors who have vague or inconsistent online presences.",
              },
              {
                q: "Can GEO help with visibility in ChatGPT and Perplexity?",
                a: "Yes. ChatGPT and Perplexity pull from web content, citations, and increasingly from real-time search. GEO strategies  - consistent information, authoritative content, strong reviews, and structured data  - directly influence whether these tools mention and recommend your practice. The key is building a comprehensive, trustworthy online presence that AI can confidently cite.",
              },
              {
                q: "How do I measure GEO success?",
                a: "GEO measurement is still evolving, but key indicators include: (1) Whether your practice appears in Google AI Overviews for target queries, (2) Whether ChatGPT and Perplexity mention your practice, (3) Featured snippet appearances, (4) Knowledge panel accuracy and completeness, (5) Review volume and sentiment trends, and (6) Branded search volume (patients searching your practice name after AI exposure).",
              },
              {
                q: "How long does GEO take to show results?",
                a: "GEO is a cumulative strategy. Initial improvements (schema markup, content restructuring) can show results in 2-4 months. Building the review volume, content depth, and cross-platform consistency that drives AI recommendations typically takes 4-6 months. Full topical authority  - where AI consistently recommends your practice  - is a 6-12 month investment.",
              },
              {
                q: "What's the relationship between reviews and GEO?",
                a: "Reviews are one of the strongest GEO signals. AI systems use review volume, recency, sentiment, and response patterns to assess practice credibility. A practice with 500 recent, positive reviews and active owner responses gives AI much higher confidence than a practice with 50 reviews from two years ago. Systematic review generation is a core GEO strategy.",
              },
            ]} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Is AI Recommending Your Practice?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              We'll test your practice's visibility across every major AI platform and show
              you exactly where you stand  - and what it takes to become the recommended choice.
            </p>
            <IntakeForm
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-8 text-lg">
                  Get Your GEO Audit <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
