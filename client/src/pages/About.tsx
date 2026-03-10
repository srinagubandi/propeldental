import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import IntakeForm from "@/components/IntakeForm";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Shield,
  Eye,
  Target,
  Heart,
} from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              We're Not an Agency.{" "}
              <span className="text-primary">We're Your Growth Partner.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Propel Dental was born from frustration  - the same frustration you've probably
              felt. Too many marketing companies treat dental practices like a number. They
              sell you a package, run some generic ads, send you a dashboard full of vanity
              metrics, and move on to the next client. We built Propel to be the opposite.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why We Exist</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  We've spent years inside the implant dentistry industry  - not on the sidelines,
                  but in the trenches. We've seen what happens when a marketing company promises
                  the world and delivers a template. We've watched practices burn through tens of
                  thousands of dollars on ads that look exactly like their competitor's ads down
                  the street.
                </p>
                <p>
                  We've heard doctors say the same things over and over: "I don't know where my
                  money is going." "The leads are garbage." "They don't understand my practice."
                  "I feel like just another account number."
                </p>
                <p>
                  So we built something different. Propel Dental is a tailor-fit marketing and
                  consulting firm  - not an ad agency. Our mission is to work hand-in-hand with
                  each client to develop and strengthen your practice identity and brand notoriety
                  within the community, while emphasizing and leveraging your competitive
                  advantages in an ever-growing market.
                </p>
                <p>
                  We don't do cookie-cutter. We don't do churn. We don't hide behind dashboards.
                  We show up at your office, learn your team's names, understand your patients,
                  and build marketing that sounds like you  - because it comes from you.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Eye className="w-6 h-6" />,
                  title: "Transparency Is Non-Negotiable",
                  desc: "You'll see every dollar spent, every lead generated, every decision made. We operate in full daylight because we have nothing to hide.",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "We Limit Our Client List",
                  desc: "We prioritize retention over churn. That means a limited client list and full focus on the partners we already serve. When we take you on, you get our best.",
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Custom Is the Only Option",
                  desc: "We don't have a 'package.' Every strategy, every ad, every video is built from scratch based on your practice, your market, and your competitive advantages.",
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Experience, Not Experiments",
                  desc: "Our team brings deep experience in implant dentistry marketing. We're not learning on your dime  - we've been here before and we know what works.",
                },
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: "Relationships Over Revenue",
                  desc: "We measure success by partner longevity, not new client acquisition. Our best marketing is the results we deliver to the partners we already have.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-lg border border-border bg-card">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="py-20 md:py-28 border-b border-border bg-card">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Believe</h2>
            <p className="text-lg text-muted-foreground">
              These aren't marketing slogans. They're the principles that guide every decision
              we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Your practice has a unique voice  - your marketing should too.",
              "Transparency builds trust. Trust builds partnerships. Partnerships build empires.",
              "The first 90 days determine the next 5 years.",
              "A limited client list isn't a weakness  - it's a commitment.",
              "Generic ads are a waste of your money and an insult to your practice.",
              "We'd rather lose a deal than take on a client we can't fully serve.",
              "Case acceptance training is as important as the ads themselves.",
              "If we wouldn't recommend it for our own practice, we won't recommend it for yours.",
            ].map((belief, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-border bg-background">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground leading-relaxed">{belief}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PLACEHOLDER */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Behind Propel Dental is a team of industry veterans who've spent their careers
              in implant dentistry marketing, practice consulting, and creative production.
              We're not generalists who stumbled into dental  - this is all we do.
            </p>
            <p className="text-muted-foreground italic">
              Team profiles coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to See If We're the Right Fit?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We're selective about who we work with  - and we think you should be too. Let's
              have an honest conversation about your practice, your goals, and whether Propel
              is the right partner for you.
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
