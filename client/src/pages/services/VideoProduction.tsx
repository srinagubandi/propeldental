import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import IntakeForm from "@/components/IntakeForm";
import { ArrowRight, Film, Tv, Clapperboard, Camera, Play, Monitor } from "lucide-react";

export default function VideoProduction() {
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
              Video Production &{" "}
              <span className="text-primary">TV Advertising</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
              Full-arch is a visual story. Before-and-after transformations, patient testimonials,
              and doctor introductions are the most powerful tools in implant marketing. We produce
              broadcast-quality video  - from social clips to TV commercials.
            </p>
            <IntakeForm
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-8 text-lg">
                  Discuss Video Strategy <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* VIDEO TYPES */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Video Content We Produce</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            From 15-second TikToks to 30-second TV spots, we handle every aspect of video
            production  - scripting, filming, editing, and distribution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Camera className="w-5 h-5" />,
                title: "Patient Transformation Films",
                desc: "Cinematic before-and-after stories that showcase the life-changing impact of full-arch treatment. The single most effective content type in implant marketing.",
              },
              {
                icon: <Film className="w-5 h-5" />,
                title: "Patient Testimonials",
                desc: "Authentic, emotionally compelling interviews with real patients sharing their journey  - from fear and frustration to confidence and gratitude.",
              },
              {
                icon: <Clapperboard className="w-5 h-5" />,
                title: "Doctor Introduction Videos",
                desc: "Professional profiles that build trust before the first appointment. Showcase your expertise, your philosophy, and the human side of your practice.",
              },
              {
                icon: <Play className="w-5 h-5" />,
                title: "Short-Form Social Content",
                desc: "TikTok, Instagram Reels, YouTube Shorts  - scroll-stopping clips optimized for each platform's algorithm and audience behavior.",
              },
              {
                icon: <Monitor className="w-5 h-5" />,
                title: "Procedure Explainers",
                desc: "Educational walkthroughs of All-on-4, full-arch, and implant procedures that demystify the process and reduce patient anxiety.",
              },
              {
                icon: <Tv className="w-5 h-5" />,
                title: "Practice Brand Films",
                desc: "Comprehensive brand stories that capture your practice culture, team, technology, and patient experience in a single powerful piece.",
              },
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

      {/* TV & STREAMING */}
      <section className="py-20 md:py-28 border-b border-border bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">TV & Connected TV Advertising</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Television isn't dead  - it's evolved. Connected TV (CTV) and Over-the-Top (OTT)
                  streaming platforms now offer the targeting precision of digital with the
                  credibility and impact of broadcast television.
                </p>
                <p>
                  We produce and place TV commercials across broadcast, cable, and streaming
                  platforms  - reaching implant candidates in your market with the production
                  quality that builds instant credibility.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { name: "Broadcast & Cable TV", desc: "Local network and cable placements targeting your DMA with professionally produced 30-second and 60-second spots." },
                { name: "Hulu, Peacock, Paramount+", desc: "Premium streaming placements with demographic and geographic targeting that reaches cord-cutters." },
                { name: "Roku & Amazon Fire TV", desc: "CTV advertising on the two largest streaming device platforms with household-level targeting." },
                { name: "YouTube Pre-Roll", desc: "Targeted video ads before dental, health, and lifestyle content  - reaching patients already in a research mindset." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-lg border border-border bg-background">
                  <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTION PROCESS */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Production Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Strategy & Scripting", desc: "We develop the creative concept, script, and shot list based on your goals, your patients, and your market." },
              { step: "02", title: "On-Location Filming", desc: "Our production team comes to your practice with professional equipment  - cameras, lighting, audio, and direction." },
              { step: "03", title: "Post-Production", desc: "Professional editing, color grading, motion graphics, music licensing, and platform-specific formatting." },
              { step: "04", title: "Distribution & Placement", desc: "We handle media buying and placement across social, streaming, YouTube, and broadcast channels." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg border border-border bg-card">
                <div className="text-3xl font-bold text-primary/30 mb-3">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Let's Tell Your Practice's Story</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Video is the most powerful tool in implant marketing. Let's discuss how
              professional video production can transform your patient pipeline.
            </p>
            <IntakeForm
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-8 text-lg">
                  Discuss Video Production <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
