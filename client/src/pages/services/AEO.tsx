import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import IntakeForm from "@/components/IntakeForm";
import { ArrowRight, MessageSquare, Mic, Search, FileText, Code, MapPin, CheckCircle2 } from "lucide-react";
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

export default function AEO() {
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
              Answer Engine Optimization{" "}
              <span className="text-primary">(AEO)</span>{" "}
              for Dental Practices
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
              Patients are no longer just typing keywords into Google  - they're asking AI tools
              like ChatGPT, Perplexity, Google's AI Overviews, and voice assistants direct questions
              about dental care. AEO ensures your practice is the answer.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS AEO */}
      <section className="py-20 md:py-28 border-b border-border bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">What Is Answer Engine Optimization?</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Answer Engine Optimization (AEO) is the practice of structuring your dental
                  practice's online content so that AI-powered search tools  - ChatGPT, Google's
                  AI Overviews (formerly SGE), Perplexity, Bing Copilot, and voice assistants
                  like Siri and Alexa  - can find, understand, and directly cite your practice
                  when patients ask questions.
                </p>
                <p>
                  Unlike traditional SEO, which focuses on ranking your website in a list of
                  blue links, AEO focuses on being <strong>selected as the direct answer</strong>.
                  When a patient asks "Who is the best implant dentist in Dallas?"  - AEO
                  determines whether your practice is the one the AI recommends.
                </p>
                <p>
                  With over 65% of Google searches now ending without a click (zero-click searches),
                  and AI tools increasingly providing direct answers, AEO is no longer optional
                  for dental practices that want to stay visible.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold mb-2">AEO vs Traditional SEO</h3>
              <div className="rounded-lg border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-semibold">Traditional SEO</th>
                      <th className="text-left p-3 font-semibold">AEO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr><td className="p-3 text-muted-foreground">Optimizes for keyword rankings</td><td className="p-3 text-muted-foreground">Optimizes for direct answers</td></tr>
                    <tr><td className="p-3 text-muted-foreground">Drives clicks to your website</td><td className="p-3 text-muted-foreground">Gets your practice cited by AI</td></tr>
                    <tr><td className="p-3 text-muted-foreground">Focuses on backlinks & authority</td><td className="p-3 text-muted-foreground">Focuses on structured, clear answers</td></tr>
                    <tr><td className="p-3 text-muted-foreground">Targets typed search queries</td><td className="p-3 text-muted-foreground">Targets voice & conversational queries</td></tr>
                    <tr><td className="p-3 text-muted-foreground">Success = page 1 ranking</td><td className="p-3 text-muted-foreground">Success = being THE recommended answer</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEST PRACTICES */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">AEO Best Practices for Dental Practices</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            These are the specific strategies we implement for every Propel Dental partner
            to ensure their practice is visible in AI-driven search.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <MessageSquare className="w-5 h-5" />,
                title: "Create Question-Based Content",
                desc: "Structure your content around the actual questions patients ask: 'How much do All-on-4 implants cost?' 'Is the procedure painful?' 'How long does recovery take?' Use these as H2/H3 headings with clear 2-3 sentence answers immediately following.",
              },
              {
                icon: <FileText className="w-5 h-5" />,
                title: "Build Comprehensive FAQ Sections",
                desc: "Every treatment page should have a dedicated FAQ section answering 8-12 common patient questions. AI tools heavily favor FAQ-structured content because it's easy to parse and cite directly.",
              },
              {
                icon: <Code className="w-5 h-5" />,
                title: "Implement Schema Markup",
                desc: "Add FAQ schema, LocalBusiness schema, MedicalBusiness schema, and HowTo schema to your pages. This structured data helps AI systems understand your content and increases the chance of being featured in AI-generated answers.",
              },
              {
                icon: <Mic className="w-5 h-5" />,
                title: "Optimize for Voice Search",
                desc: "Voice searches are conversational and question-based. Write content that mirrors how people actually speak: 'Where can I get dental implants near me?' rather than targeting keyword phrases like 'dental implants city name.'",
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                title: "Strengthen Local Signals",
                desc: "Include location-specific language naturally throughout your content. 'At our practice in [city], we offer same-day All-on-4 implants.' Maintain consistent NAP (Name, Address, Phone) across all platforms.",
              },
              {
                icon: <Search className="w-5 h-5" />,
                title: "Build Topical Authority",
                desc: "Create comprehensive content clusters around each procedure. A single page on 'dental implants' isn't enough  - you need interconnected content covering cost, process, recovery, alternatives, candidacy, and more.",
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

      {/* FAQ SECTION */}
      <section className="py-20 md:py-28 border-b border-border bg-card">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions About AEO</h2>
            <p className="text-muted-foreground text-center mb-10">
              Everything dental practices need to know about Answer Engine Optimization.
            </p>
            <FAQAccordion items={[
              {
                q: "What is Answer Engine Optimization (AEO)?",
                a: "AEO is the practice of optimizing your dental practice's online content so that AI-powered tools  - like ChatGPT, Google's AI Overviews, Perplexity, and voice assistants  - can find, understand, and directly recommend your practice when patients ask questions. It goes beyond traditional SEO by focusing on being selected as the direct answer, not just ranking on a results page.",
              },
              {
                q: "How is AEO different from traditional SEO?",
                a: "Traditional SEO focuses on ranking your website in search engine results pages (SERPs) so patients click through to your site. AEO focuses on structuring your content so AI systems can cite your practice directly in their answers  - often without the patient ever visiting your website. Both are important, but AEO addresses the growing trend of zero-click searches and AI-generated answers.",
              },
              {
                q: "Why does AEO matter for dental implant practices specifically?",
                a: "Implant patients do extensive research before choosing a provider. They ask detailed questions about cost, procedure, recovery, and alternatives  - exactly the type of queries AI tools are designed to answer. If your practice isn't optimized for these AI-driven searches, you're invisible to a growing segment of high-value patients who rely on ChatGPT, voice search, and AI Overviews for their research.",
              },
              {
                q: "What are zero-click searches and why should I care?",
                a: "Zero-click searches are queries where the user gets their answer directly on the search results page  - through featured snippets, AI Overviews, or knowledge panels  - without clicking through to any website. Over 65% of Google searches now end without a click. For dental practices, this means your content needs to be the source that Google and AI tools pull from, even if patients never visit your site directly.",
              },
              {
                q: "How do I optimize my dental website for voice search?",
                a: "Voice searches are conversational and question-based. To optimize: (1) Create content that answers questions the way patients actually speak, (2) Use natural language rather than keyword-stuffed phrases, (3) Add FAQ sections with concise 2-3 sentence answers, (4) Implement FAQ and LocalBusiness schema markup, and (5) Ensure your Google Business Profile is complete and accurate with consistent NAP information.",
              },
              {
                q: "What is schema markup and why does it matter for AEO?",
                a: "Schema markup is structured data code added to your website that helps search engines and AI tools understand your content. For dental practices, key schema types include FAQ schema (for question-and-answer content), LocalBusiness/MedicalBusiness schema (for practice information), HowTo schema (for procedure explanations), and Review schema (for patient testimonials). Schema doesn't change how your site looks to patients  - it changes how AI systems read and interpret your content.",
              },
              {
                q: "How do I get my dental practice recommended by ChatGPT?",
                a: "ChatGPT pulls from web content it was trained on and, increasingly, from real-time web searches. To increase your chances: (1) Build comprehensive, authoritative content about your procedures, (2) Get mentioned on trusted third-party sites and directories, (3) Maintain consistent practice information across all platforms, (4) Generate authentic patient reviews on Google and other platforms, and (5) Create content that directly answers the questions patients ask ChatGPT about dental implants.",
              },
              {
                q: "How long does it take to see results from AEO?",
                a: "AEO is a long-term strategy. You may see improvements in featured snippets and AI Overview citations within 2-3 months of implementing structured content and schema markup. Voice search and ChatGPT visibility typically take 3-6 months as AI systems re-crawl and re-index your content. The key is consistency  - regularly publishing question-based, well-structured content that builds your topical authority over time.",
              },
              {
                q: "Can I do AEO myself or do I need an agency?",
                a: "Basic AEO practices  - like adding FAQ sections and writing question-based content  - can be done in-house. However, technical implementation (schema markup, structured data, site architecture), ongoing content strategy, and monitoring AI visibility across multiple platforms typically requires specialized expertise. At Propel Dental, AEO is built into every engagement as part of our comprehensive approach.",
              },
              {
                q: "Does AEO replace SEO?",
                a: "No. AEO builds on top of SEO  - it doesn't replace it. You still need strong traditional SEO (technical foundation, quality content, backlinks, local optimization) as the base. AEO adds a layer of optimization specifically for AI-driven search. Think of it as: SEO gets you found by search engines, AEO gets you recommended by AI. Both are essential for modern dental marketing.",
              },
            ]} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Is Your Practice Visible to AI Search?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              We'll audit your practice's visibility across ChatGPT, Google AI Overviews,
              Perplexity, and voice search  - and show you exactly what needs to change.
            </p>
            <IntakeForm
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-8 text-lg">
                  Get Your AEO Audit <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
