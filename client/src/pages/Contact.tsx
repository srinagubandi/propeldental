import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import IntakeForm from "@/components/IntakeForm";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
                Let's Talk About{" "}
                <span className="text-primary">Your Practice</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Whether you're exploring your options, frustrated with your current agency, or
                ready to build a real full-arch marketing program  - we're here to have an honest
                conversation. No pressure. No pitch deck. Just a real talk about what's possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <a href="tel:9292226167" className="text-primary hover:underline text-lg font-medium">
                      (929) 222-6167
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Talk to a real person who understands implant dentistry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <a href="mailto:hello@propel.dental" className="text-primary hover:underline text-lg font-medium">
                      hello@propel.dental
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We respond within 24 hours. Usually much faster.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">We Come to You</h3>
                    <p className="text-muted-foreground">
                      We serve practices across all 50 states. Our P90 Protocol includes
                      in-office visits wherever you are.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday – Friday: 8:00 AM – 6:00 PM EST
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      After-hours? Leave a message. We'll call you back first thing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE  - INTAKE FORM CTA */}
            <div className="bg-card border border-border rounded-lg p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-4">Request a Strategy Call</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tell us about your practice and we'll schedule a no-obligation strategy call
                to discuss your goals, your market, and how we'd approach your growth.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "30-minute call with a full-arch marketing specialist",
                  "Preliminary competitive analysis of your market",
                  "Honest assessment of your current marketing",
                  "No contracts, no commitments, no pressure",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      {i + 1}
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <IntakeForm
                trigger={
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 text-lg">
                    Book Your Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                }
              />

              <p className="text-xs text-muted-foreground text-center mt-4">
                Or call us directly at{" "}
                <a href="tel:9292226167" className="text-primary hover:underline">
                  (929) 222-6167
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-STYLE SECTION */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-10 text-center">Common Questions Before Your First Call</h2>

            <div className="space-y-6">
              {[
                {
                  q: "How much does it cost?",
                  a: "Every engagement is custom, so pricing varies based on your market, your goals, and the scope of work. We'll give you a transparent breakdown on our strategy call  - no hidden fees, no surprises.",
                },
                {
                  q: "Do you require long-term contracts?",
                  a: "We don't lock you into long-term contracts. We believe in earning your business every month. That said, the P90 Protocol is a 90-day commitment because meaningful results take time to build properly.",
                },
                {
                  q: "Do you work with practices outside the USA?",
                  a: "Currently, we focus exclusively on dental practices in the United States. This allows us to maintain deep expertise in the regulatory, competitive, and patient dynamics of the US market.",
                },
                {
                  q: "What if I'm already working with another agency?",
                  a: "That's fine. Many of our partners came to us from other agencies. We'll give you an honest assessment of what's working and what's not  - and if we think your current agency is doing a good job, we'll tell you that too.",
                },
                {
                  q: "How quickly can we start?",
                  a: "We limit the number of new partners we onboard each quarter to ensure quality. After your strategy call, if we're a mutual fit, we can typically begin the P90 Protocol within 2-3 weeks.",
                },
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-lg border border-border bg-background">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
