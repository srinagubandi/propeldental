import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import IntakeForm from "@/components/IntakeForm";
import { ArrowRight, Video, Users, TrendingUp, Eye, MessageCircle, Smartphone } from "lucide-react";

export default function SocialMedia() {
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
              Social Media for{" "}
              <span className="text-primary">Implant Practices</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
              Full-arch patients don't just Google — they scroll. They watch before-and-after
              transformations on Instagram, research providers on Facebook, and discover practices
              through TikTok. We build social strategies that turn scrollers into consultations.
            </p>
            <IntakeForm
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-8 text-lg">
                  Build My Social Strategy <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Every Platform That Matters</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            We manage your presence across every consumer-facing platform where implant patients
            spend their time — with content tailored to each platform's audience and algorithm.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Facebook",
                desc: "Targeted ads, community building, patient testimonials, and local awareness campaigns. Still the #1 platform for the 45-65 age demographic that drives full-arch cases.",
                stat: "2.9B+ monthly users",
              },
              {
                name: "Instagram",
                desc: "Before-and-after galleries, Reels showcasing procedures, Stories for behind-the-scenes content, and influencer partnerships that build visual trust.",
                stat: "2B+ monthly users",
              },
              {
                name: "TikTok",
                desc: "Short-form video that humanizes your practice — smile reveals, day-in-the-life content, myth-busting, and educational clips that go viral in local markets.",
                stat: "1.5B+ monthly users",
              },
              {
                name: "YouTube",
                desc: "Long-form patient testimonials, procedure walkthroughs, doctor introductions, and educational content that builds deep trust and ranks in search.",
                stat: "#2 search engine globally",
              },
              {
                name: "Reddit",
                desc: "Community engagement in r/dentistry, r/dentalimplants, and local subreddits. Authentic conversations that build credibility with research-heavy patients.",
                stat: "52M+ daily active users",
              },
              {
                name: "X (Twitter)",
                desc: "Industry thought leadership, practice news, and engagement with dental communities. Quick-hit content that positions your doctors as experts.",
                stat: "500M+ monthly users",
              },
              {
                name: "Snapchat",
                desc: "Geo-targeted ads and filters for younger demographics. Ideal for practices offering cosmetic and orthodontic services alongside implants.",
                stat: "750M+ monthly users",
              },
              {
                name: "Nextdoor",
                desc: "Hyper-local community recommendations and neighborhood-level advertising. The most trusted platform for local service recommendations.",
                stat: "1 in 3 US households",
              },
            ].map((platform, i) => (
              <div key={i} className="p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
                <h3 className="font-bold text-lg mb-1">{platform.name}</h3>
                <p className="text-xs text-primary mb-3">{platform.stat}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT TYPES */}
      <section className="py-20 md:py-28 border-b border-border bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Content That Converts Implant Patients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Video className="w-5 h-5" />, title: "Before & After Reveals", desc: "The most powerful content in implant marketing. We produce cinematic smile transformations that stop the scroll and drive inquiries." },
              { icon: <Users className="w-5 h-5" />, title: "Patient Testimonials", desc: "Real patients sharing their journey — from consultation fears to life-changing results. Authentic stories that overcome objections." },
              { icon: <MessageCircle className="w-5 h-5" />, title: "Doctor Thought Leadership", desc: "Position your doctors as the go-to implant experts in your market with educational content, myth-busting, and Q&A sessions." },
              { icon: <Eye className="w-5 h-5" />, title: "Behind the Scenes", desc: "Day-in-the-life content, office tours, team introductions, and procedure prep that humanizes your practice and reduces patient anxiety." },
              { icon: <TrendingUp className="w-5 h-5" />, title: "Paid Social Campaigns", desc: "Targeted ad campaigns on Facebook, Instagram, and TikTok reaching high-intent implant patients in your specific market radius." },
              { icon: <Smartphone className="w-5 h-5" />, title: "Community Management", desc: "Active engagement with comments, DMs, and reviews. We respond in your voice, nurture leads, and turn conversations into consultations." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg border border-border bg-background">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Own Social in Your Market?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Let's build a social media strategy that turns your practice into the most
              visible implant provider in your area.
            </p>
            <IntakeForm
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-8 text-lg">
                  Get My Social Strategy <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
