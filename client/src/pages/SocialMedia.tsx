/**
 * =============================================================================
 * SOCIALMEDIA.TSX - Propel.Dental Social Media & Video Production Page
 * =============================================================================
 *
 * This page covers all consumer-facing social media channels and video/TV
 * production services offered by Propel Dental for dental practices.
 *
 * SECTIONS:
 *   1. Hero             - Page headline and intro
 *   2. Social Platforms - All 8 consumer-facing platforms with detail
 *   3. Video Production - Practice videos, patient stories, explainers
 *   4. TV & Streaming Ads - Broadcast TV, connected TV, OTT/streaming
 *   5. Content Strategy - How we build a unified content calendar
 *   6. CTA              - Final call-to-action
 *
 * PLATFORMS COVERED:
 *   Facebook, Instagram, TikTok, YouTube, X (Twitter), Reddit, Snapchat, Nextdoor
 *
 * =============================================================================
 */

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, Play, Tv, Film, Video, Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import IntakeForm from "@/components/IntakeForm";

// -----------------------------------------------------------------------------
// ICON IMAGE HELPER
// -----------------------------------------------------------------------------
const IconImage = ({ src, alt, size = 48 }: { src: string; alt: string; size?: number }) => (
  <img src={src} alt={alt} className="object-contain" style={{ width: size, height: size }} />
);

export default function SocialMedia() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // ---------------------------------------------------------------------------
  // SOCIAL MEDIA PLATFORMS
  // Each platform includes: name, color, audience, dental use case, content types
  // ---------------------------------------------------------------------------
  const platforms = [
    {
      name: "Facebook",
      color: "border-[#1877F2]",
      bgColor: "bg-[#1877F2]/5",
      badgeColor: "bg-[#1877F2]/10 text-[#1877F2]",
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/xUduvXxBKpcYHKDu.png",
      users: "3.0B+ monthly active users",
      audience: "Adults 25–65, families, local community members",
      dentalUse: "The largest platform for local dental advertising. Ideal for targeting families, adults with dental anxiety, and patients researching cosmetic procedures. Facebook Groups and local community pages drive organic trust.",
      contentTypes: [
        "Before & after smile transformations",
        "Patient testimonial videos",
        "Educational posts on dental health",
        "Local community engagement & events",
        "Targeted ad campaigns by zip code",
        "Appointment booking via Facebook Lead Ads"
      ]
    },
    {
      name: "Instagram",
      color: "border-[#E1306C]",
      bgColor: "bg-[#E1306C]/5",
      badgeColor: "bg-[#E1306C]/10 text-[#E1306C]",
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/hgeCYmgWdFOTQFeJ.png",
      users: "2.0B+ monthly active users",
      audience: "Adults 18–45, cosmetic-minded patients, Millennials & Gen Z",
      dentalUse: "The premier visual platform for cosmetic dentistry, orthodontics, and smile makeovers. High-quality before/after photos and Reels drive significant new patient inquiries, especially for Invisalign, veneers, and whitening.",
      contentTypes: [
        "High-resolution before & after photos",
        "Short Reels of procedures and results",
        "Behind-the-scenes office culture content",
        "Instagram Stories with polls and Q&As",
        "Influencer partnerships with local creators",
        "Shoppable posts for whitening products"
      ]
    },
    {
      name: "TikTok",
      color: "border-[#010101]",
      bgColor: "bg-gray-50",
      badgeColor: "bg-gray-100 text-gray-800",
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/qMFufdufqNeqWknO.png",
      users: "1.7B+ monthly active users",
      audience: "Gen Z & Millennials (13–34), dental anxiety sufferers, cosmetic-curious patients",
      dentalUse: "The fastest-growing platform for dental content. 'DentalTok' is a thriving community where educational and entertaining dental videos go viral. Ideal for humanizing your practice, busting dental myths, and reaching younger patients who avoid the dentist.",
      contentTypes: [
        "Myth-busting dental education videos",
        "Day-in-the-life of a dentist content",
        "Smile transformation reveals",
        "Trending audio + dental humor",
        "TikTok Live Q&A sessions with doctors",
        "Paid TikTok ads targeting local zip codes"
      ]
    },
    {
      name: "YouTube",
      color: "border-[#FF0000]",
      bgColor: "bg-[#FF0000]/5",
      badgeColor: "bg-[#FF0000]/10 text-[#FF0000]",
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/WBhDloOVGpaxRdbW.png",
      users: "2.7B+ monthly active users",
      audience: "All age groups, patients researching procedures, dental anxiety sufferers",
      dentalUse: "The world's second-largest search engine. Patients research dental procedures on YouTube before booking. Long-form procedure explainers, patient testimonials, and 'what to expect' videos build trust and drive high-intent appointment requests.",
      contentTypes: [
        "Procedure explainer videos (implants, Invisalign, root canals)",
        "Patient testimonial & journey videos",
        "'What to expect' appointment walkthroughs",
        "Doctor introduction & practice tour videos",
        "YouTube Shorts for quick tips",
        "Pre-roll ads targeting dental search intent"
      ]
    },
    {
      name: "X (Twitter)",
      color: "border-[#000000]",
      bgColor: "bg-gray-50",
      badgeColor: "bg-gray-100 text-gray-800",
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/fkeHVnQjUJXtKRvn.png",
      users: "600M+ monthly active users",
      audience: "News-aware adults, health-conscious patients, local community members",
      dentalUse: "Effective for real-time community engagement, dental health awareness campaigns, and positioning your practice as a trusted local authority. Trending health topics and dental awareness months (e.g., National Children's Dental Health Month) drive organic reach.",
      contentTypes: [
        "Dental health tips and quick facts",
        "Participation in trending health conversations",
        "Dental awareness month campaigns",
        "Practice news and community involvement",
        "Responding to patient questions publicly",
        "Promoted posts targeting local audiences"
      ]
    },
    {
      name: "Reddit",
      color: "border-[#FF4500]",
      bgColor: "bg-[#FF4500]/5",
      badgeColor: "bg-[#FF4500]/10 text-[#FF4500]",
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/EtYMzJocxPYxMecb.png",
      users: "1.5B+ monthly active users",
      audience: "Research-driven adults, dental anxiety sufferers, patients comparing treatment options",
      dentalUse: "Reddit is where patients go to research dental procedures honestly — subreddits like r/Dentistry, r/braces, r/Invisalign, and r/DentalFear have millions of members. Authentic participation builds trust, and Reddit Ads allow precise targeting by interest and geography.",
      contentTypes: [
        "AMA (Ask Me Anything) sessions with dentists",
        "Educational posts in r/Dentistry and specialty subreddits",
        "Answering patient questions authentically",
        "Reddit Ads targeting dental interest communities",
        "Local subreddit community engagement",
        "Content seeding for dental anxiety resources"
      ]
    },
    {
      name: "Snapchat",
      color: "border-[#FFFC00]",
      bgColor: "bg-yellow-50",
      badgeColor: "bg-yellow-100 text-yellow-800",
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/woFUFmSxhgHLUyTo.png",
      users: "800M+ monthly active users",
      audience: "Gen Z & young Millennials (13–30), orthodontic patients, cosmetic-curious teens",
      dentalUse: "Highly effective for orthodontic practices and pediatric dentists reaching teens and young adults. Snapchat's AR lenses allow patients to 'try on' a new smile virtually. Snap Ads deliver strong local reach with geo-targeting by zip code.",
      contentTypes: [
        "AR smile try-on lenses for cosmetic dentistry",
        "Behind-the-scenes Snaps from the practice",
        "Fun, relatable content for teen orthodontic patients",
        "Snap Ads with local geo-targeting",
        "Appointment reminders via Snap Stories",
        "Braces reveal and Invisalign transformation content"
      ]
    },
    {
      name: "Nextdoor",
      color: "border-[#00B246]",
      bgColor: "bg-[#00B246]/5",
      badgeColor: "bg-[#00B246]/10 text-[#00B246]",
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/qANZOjHlFCcayAsG.png",
      users: "45M+ verified neighborhood members (USA)",
      audience: "Local homeowners, families, community-oriented adults seeking trusted local providers",
      dentalUse: "The most hyperlocal platform available. Nextdoor is where neighbors ask each other 'who's a good dentist nearby?' — and your practice can be the answer. Neighborhood Sponsorships and verified business profiles drive highly qualified local patient referrals.",
      contentTypes: [
        "Neighborhood Sponsorship ads",
        "Verified business profile with reviews",
        "Local community posts and dental tips",
        "New patient special offers for neighbors",
        "Responding to neighbor recommendations",
        "Community event sponsorships and announcements"
      ]
    }
  ];

  // ---------------------------------------------------------------------------
  // VIDEO PRODUCTION SERVICES
  // ---------------------------------------------------------------------------
  const videoServices = [
    {
      icon: <Film className="h-8 w-8 text-secondary" />,
      title: "Practice Introduction Videos",
      desc: "Professional, cinematic videos that introduce your practice, your team, and your philosophy of care. These are the most-watched videos on dental websites and Google Business Profiles — and the single best tool for converting anxious first-time patients.",
      includes: ["Doctor & team introductions", "Office tour and technology showcase", "Patient experience walkthroughs", "HIPAA-compliant patient testimonials"]
    },
    {
      icon: <Video className="h-8 w-8 text-secondary" />,
      title: "Procedure Explainer Videos",
      desc: "Clear, reassuring videos that explain dental procedures in plain language — reducing patient anxiety and dramatically increasing treatment acceptance rates. Ideal for implants, Invisalign, root canals, veneers, and All-on-4.",
      includes: ["Animated procedure explainers", "Doctor-narrated walkthrough videos", "Before & after case presentations", "FAQ video series by specialty"]
    },
    {
      icon: <Play className="h-8 w-8 text-secondary" />,
      title: "Patient Testimonial Videos",
      desc: "Authentic, professionally produced patient stories that build trust and social proof. Nothing converts a prospective patient faster than hearing a real patient describe their experience — especially for high-value procedures like implants and smile makeovers.",
      includes: ["Full-length patient journey stories", "Short-form testimonial clips for social", "Before & after reveal videos", "Specialty-specific case studies"]
    },
    {
      icon: <Megaphone className="h-8 w-8 text-secondary" />,
      title: "Social Media Video Content",
      desc: "A steady stream of short-form video content optimized for TikTok, Instagram Reels, YouTube Shorts, and Facebook — keeping your practice visible, relevant, and engaging across every platform your patients use daily.",
      includes: ["Monthly short-form video packages", "Platform-optimized editing (9:16, 1:1, 16:9)", "Captions, music, and graphics included", "Content calendar and scheduling"]
    }
  ];

  // ---------------------------------------------------------------------------
  // TV & STREAMING AD SERVICES
  // ---------------------------------------------------------------------------
  const tvServices = [
    {
      icon: <Tv className="h-8 w-8 text-primary" />,
      title: "Broadcast TV Commercials",
      desc: "Full-production 30-second and 60-second dental TV commercials for local broadcast television. We handle everything from scripting and filming to post-production and media buying — placing your practice in front of hundreds of thousands of local viewers.",
      includes: ["Full script development", "Professional on-location filming", "Motion graphics and post-production", "Local broadcast media buying & placement"]
    },
    {
      icon: <Tv className="h-8 w-8 text-primary" />,
      title: "Connected TV & Streaming Ads (CTV/OTT)",
      desc: "Reach cord-cutters and streaming audiences on Hulu, Peacock, Paramount+, Roku, and Amazon Fire TV with targeted dental ads. CTV allows precise demographic and geographic targeting — your commercial only plays to households in your target zip codes.",
      includes: ["Hulu, Peacock, Roku, Amazon Fire TV placement", "Zip code and demographic targeting", "Household-level frequency capping", "Real-time impression and completion reporting"]
    },
    {
      icon: <Play className="h-8 w-8 text-primary" />,
      title: "YouTube Pre-Roll & Video Ads",
      desc: "YouTube is the second-largest search engine in the world — and patients actively research dental procedures there before booking. We produce and place targeted pre-roll ads that appear when patients search for dental procedures, reaching them at the exact moment of intent.",
      includes: ["Skippable and non-skippable pre-roll ads", "Targeting by dental search keywords", "Geo-targeting by zip code and radius", "Full production and campaign management"]
    }
  ];

  return (
    <Layout>
      {/* =====================================================================
          SECTION 1: HERO
          ===================================================================== */}
      <section className="py-20 bg-gradient-to-br from-background to-blue-50/30 border-b border-border">
        <div className="container">
          <motion.div className="text-center max-w-3xl mx-auto" {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-wider uppercase mb-6">
              Social Media & Video Production
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Meet Your Patients Where They Actually Are.
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your patients are on Facebook, Instagram, TikTok, YouTube, Reddit, Snapchat, X, and Nextdoor — every single day. Propel Dental manages your presence across every consumer-facing platform, plus produces professional video content and TV commercials that build trust and drive appointments.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Facebook", "Instagram", "TikTok", "YouTube", "X (Twitter)", "Reddit", "Snapchat", "Nextdoor"].map((p) => (
                <span key={p} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border text-sm font-medium rounded-full shadow-sm">
                  {p}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: SOCIAL MEDIA PLATFORMS
          ===================================================================== */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div className="max-w-3xl mx-auto text-center mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Every Platform. Fully Managed. Fully Transparent.</h2>
            <p className="text-lg text-muted-foreground">
              We don't pick one platform and ignore the rest. We build and manage a coordinated presence across every consumer-facing social channel — with clear reporting on what each platform is delivering for your practice.
            </p>
          </motion.div>

          <div className="space-y-8">
            {platforms.map((platform, i) => (
              <motion.div
                key={i}
                className={`border-l-4 ${platform.color} ${platform.bgColor} p-8 shadow-sm hover:shadow-md transition-shadow`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Platform Name & Overview */}
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-4 mb-4">
                      <IconImage src={platform.icon} alt={platform.name} size={48} />
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{platform.name}</h3>
                        <span className={`inline-block text-xs font-bold px-2 py-1 rounded-full mt-1 ${platform.badgeColor}`}>
                          {platform.users}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Audience:</p>
                    <p className="text-sm text-muted-foreground">{platform.audience}</p>
                  </div>

                  {/* Dental Use Case */}
                  <div className="md:col-span-1">
                    <h4 className="font-bold text-primary mb-3">Why It Matters for Dental</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{platform.dentalUse}</p>
                  </div>

                  {/* Content Types */}
                  <div className="md:col-span-1">
                    <h4 className="font-bold text-primary mb-3">What We Create & Manage</h4>
                    <ul className="space-y-2">
                      {platform.contentTypes.map((ct, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                          {ct}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: VIDEO PRODUCTION
          ===================================================================== */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container">
          <motion.div className="max-w-3xl mx-auto text-center mb-16" {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-wider uppercase mb-4">
              Video Production
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Professional Video That Builds Trust and Drives Appointments.</h2>
            <p className="text-lg text-muted-foreground">
              Video is the single most powerful tool for converting anxious dental patients into booked appointments. We produce everything from cinematic practice introduction films to short-form social content — all designed specifically for dental patient acquisition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {videoServices.map((service, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 border border-border shadow-sm hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.includes.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-secondary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: TV & STREAMING ADS
          ===================================================================== */}
      <section className="py-20 bg-white border-t border-border">
        <div className="container">
          <motion.div className="max-w-3xl mx-auto text-center mb-16" {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
              TV & Streaming Ads
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">From Your Local TV Screen to Every Streaming Device.</h2>
            <p className="text-lg text-muted-foreground">
              Television advertising for dental practices has evolved. Beyond traditional broadcast TV, we place your practice's commercials on Hulu, Roku, Amazon Fire TV, and YouTube — reaching patients in their living rooms with precise geographic and demographic targeting.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {tvServices.map((service, i) => (
              <motion.div
                key={i}
                className="bg-white border border-border p-8 shadow-sm hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{service.desc}</p>
                <ul className="space-y-2">
                  {service.includes.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: CONTENT STRATEGY
          ===================================================================== */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">One Unified Content Strategy. Zero Guesswork.</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Managing eight social platforms, producing video content, and running TV ads sounds overwhelming — but with Propel Dental, it isn't. We build a single unified content calendar that coordinates every platform, every post, and every video into a cohesive patient acquisition strategy.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                And because we believe in transparency over black-box reporting, you always know exactly what's being published, when, on which platform, and what results it's driving for your practice.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Monthly content calendar across all platforms",
                  "Platform-native content formats (Reels, TikToks, Shorts, Stories)",
                  "Consistent brand voice and visual identity",
                  "HIPAA-compliant content review process",
                  "Real-time performance reporting per platform",
                  "Monthly strategy review with your growth specialist"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="h-5 w-5 text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <IntakeForm trigger={
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-none px-8 h-12">
                  Request a Social Media Brief
                </Button>
              } />
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {[
                { label: "Platforms Managed", value: "8", sub: "Consumer-facing channels" },
                { label: "Content Types", value: "20+", sub: "Videos, posts, stories, ads" },
                { label: "Reporting", value: "Real-Time", sub: "No black-box dashboards" },
                { label: "Compliance", value: "HIPAA", sub: "Every piece of content" }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 shadow-lg border-t-4 border-secondary text-center">
                  <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                  <div className="font-bold text-primary text-sm mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: FINAL CTA
          ===================================================================== */}
      <section className="py-24 bg-primary">
        <div className="container">
          <div className="relative overflow-hidden text-center max-w-3xl mx-auto">
            <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Own Every Screen Your Patients Use?</h2>
              <p className="text-xl text-blue-100 mb-10">
                Get a clear, honest review of your practice's social media presence and video opportunities — no black box, no agency spin.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <IntakeForm trigger={
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-10 h-16 rounded-none shadow-xl">
                    Request a Social Media Brief
                  </Button>
                } />
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-10 h-16 rounded-none"
                  asChild
                >
                  <a href="tel:1-800-362-7767">Call 1-800-DOC-PROPEL</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
