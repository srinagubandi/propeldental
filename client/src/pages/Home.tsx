/**
 * =============================================================================
 * HOME.TSX - Propel.Dental Homepage
 * =============================================================================
 *
 * This is the main landing page for propel.dental — a transparent,
 * performance-accountable growth platform exclusively for dental practices across the USA.
 *
 * SECTIONS ON THIS PAGE:
 *   1. Hero           - Main headline, subtext, and CTA buttons
 *   2. Specialties    - 10 dental specialty categories we serve
 *   3. AI Advantage   - AI-powered marketing features
 *   4. How It Works   - 3-step process overview
 *   5. ROI Calculator - Interactive revenue growth estimator
 *   6. Testimonials   - Social proof from dental practices
 *   7. About Us       - Brief about section with value props
 *   8. CTA            - Final call-to-action section
 *
 * =============================================================================
 */

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Zap, Star } from "lucide-react";
import { motion } from "framer-motion";
import IntakeForm from "@/components/IntakeForm";
import ROICalculator from "@/components/ROICalculator";

// -----------------------------------------------------------------------------
// ICON IMAGE HELPER - Renders image-based icons consistently
// -----------------------------------------------------------------------------
const IconImage = ({ src, alt, size = 64 }: { src: string; alt: string; size?: number }) => (
  <img src={src} alt={alt} className="object-contain" style={{ width: size, height: size }} />
);

export default function Home() {
  // Reusable fade-in animation config for scroll-triggered sections
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // ---------------------------------------------------------------------------
  // DENTAL SPECIALTIES - Edit names, descriptions, and sub-items here
  // Each specialty card shows on the homepage grid
  // ---------------------------------------------------------------------------
  const specialties = [
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/xUduvXxBKpcYHKDu.png",
      title: "General Dentistry",
      items: ["Preventive Care", "Fillings & Crowns", "Cleanings", "Family Dentistry"],
      color: "bg-blue-50 border-primary"
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/hgeCYmgWdFOTQFeJ.png",
      title: "Orthodontics",
      items: ["Braces", "Invisalign & Clear Aligners", "Retainers", "Bite Correction"],
      color: "bg-orange-50 border-secondary"
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/qMFufdufqNeqWknO.png",
      title: "Cosmetic Dentistry",
      items: ["Veneers", "Teeth Whitening", "Smile Makeovers", "Dental Bonding"],
      color: "bg-blue-50 border-primary"
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/WBhDloOVGpaxRdbW.png",
      title: "Dental Implants",
      items: ["Single Implants", "All-on-4 / All-on-6", "Implant-Supported Dentures", "Full Arch Restoration"],
      color: "bg-orange-50 border-secondary"
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/fkeHVnQjUJXtKRvn.png",
      title: "Oral Surgery",
      items: ["Tooth Extractions", "Wisdom Teeth", "Jaw Surgery", "Bone Grafting"],
      color: "bg-blue-50 border-primary"
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/EtYMzJocxPYxMecb.png",
      title: "Periodontics",
      items: ["Gum Disease Treatment", "Scaling & Root Planing", "Gum Surgery", "Implant Placement"],
      color: "bg-orange-50 border-secondary"
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/woFUFmSxhgHLUyTo.png",
      title: "Endodontics",
      items: ["Root Canal Therapy", "Retreatment", "Apicoectomy", "Cracked Teeth"],
      color: "bg-blue-50 border-primary"
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/qANZOjHlFCcayAsG.png",
      title: "Pediatric Dentistry",
      items: ["Children's Cleanings", "Sealants", "Early Orthodontics", "Fluoride Treatments"],
      color: "bg-orange-50 border-secondary"
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/iTgceqtSLqLOWeyy.png",
      title: "Prosthodontics",
      items: ["Dentures", "Dental Bridges", "Full-Mouth Reconstruction", "Implant Restorations"],
      color: "bg-blue-50 border-primary"
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/vTEcNtMTylllVefa.png",
      title: "Sedation Dentistry",
      items: ["Nitrous Oxide", "Oral Sedation", "IV Sedation", "Anxiety Management"],
      color: "bg-orange-50 border-secondary"
    }
  ];

  // ---------------------------------------------------------------------------
  // TESTIMONIALS - Edit patient/practice testimonials here
  // ---------------------------------------------------------------------------
  const testimonials = [
    {
      quote: "Propel Dental helped us fill our orthodontic schedule in just 90 days. We went from 18 new patients a month to over 45. The ROI has been incredible.",
      name: "Dr. Sarah Chen",
      practice: "Bright Smiles Orthodontics",
      location: "Austin, TX",
      rating: 5,
      growth: "+150%"
    },
    {
      quote: "We had been burned by agencies who hid behind dashboards full of impressions and clicks. Propel Dental showed us exactly what was happening at every stage. Our implant case volume doubled within 6 months.",
      name: "Dr. Marcus Williams",
      practice: "Premier Dental Implants",
      location: "Atlanta, GA",
      rating: 5,
      growth: "+200%"
    },
    {
      quote: "As a pediatric dentist, I needed a partner who understood HIPAA and how families search for care. Propel Dental nailed it. Our new patient flow is the best it's ever been.",
      name: "Dr. Emily Rodriguez",
      practice: "Happy Kids Dental",
      location: "Phoenix, AZ",
      rating: 5,
      growth: "+85%"
    }
  ];

  return (
    <Layout>
      {/* =====================================================================
          SECTION 1: HERO
          ===================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-blue-50/30 pt-10 pb-20 md:pt-20 md:pb-32">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-wider uppercase">
                <Zap className="w-3 h-3 fill-current" />
                Exclusively for Dental Practices
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-primary">
                Grow Your Dental Practice.<br />
                <span className="text-foreground">No Black Box. No Guesswork.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Propel Dental is the transparent growth partner built exclusively for{" "}
                <strong>dentists, orthodontists, oral surgeons, periodontists, endodontists, and all dental specialists</strong>{" "}
                across the USA. We replace the traditional agency black box with full visibility, clear performance metrics, and a model built around your practice's actual growth.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <IntakeForm trigger={
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-8 h-14 rounded-none shadow-lg shadow-secondary/20 transition-all hover:translate-y-[-2px]">
                    Request a Practice Growth Brief <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                } />
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary/20 text-primary font-semibold text-lg px-8 h-14 rounded-none hover:bg-primary/5"
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See How It Works
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-secondary" /> HIPAA Compliant</span>
                <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-secondary" /> Full Transparency</span>
                <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-secondary" /> No Black Box Reporting</span>
                <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-secondary" /> All 50 States</span>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Decorative Pulse Line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
      </section>

      {/* =====================================================================
          SECTION 2: DENTAL SPECIALTIES WE SERVE
          ===================================================================== */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container">
          <motion.div className="max-w-3xl mx-auto text-center mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Every Dental Specialty. One Growth Partner.</h2>
            <p className="text-lg text-muted-foreground">
              From general family dentistry to complex implant centers — we have a proven playbook for every dental specialty in the USA. Our AI-powered platform is tailored to your specific patient acquisition needs.
            </p>
          </motion.div>

          {/* 5-column grid on large screens, 2-column on medium, 1-column on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {specialties.map((specialty, i) => (
              <motion.div
                key={i}
                className={`p-5 border-t-4 ${specialty.color} shadow-sm hover:shadow-lg transition-shadow`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <IconImage src={specialty.icon} alt={specialty.title} size={48} />
                <h3 className="text-base font-bold mb-3 mt-3 text-primary">{specialty.title}</h3>
                <ul className="space-y-1.5">
                  {specialty.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="h-3 w-3 text-secondary shrink-0" />
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
          SECTION 3: AI ADVANTAGE
          ===================================================================== */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container">
          <motion.div className="max-w-3xl mx-auto text-center mb-16" {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-4">
              <Zap className="w-3 h-3 fill-current" />
              Powered by Dental AI
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">AI-Driven Dental Marketing</h2>
            <p className="text-lg text-muted-foreground">
              We leverage cutting-edge AI and automation to make growing your dental practice effortless — while you focus on patient care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/qANZOjHlFCcayAsG.png",
                title: "Zero Wasted Ad Spend",
                desc: "Predictive algorithms optimize your budget in real-time, targeting patients actively searching for dental care in your area. No more paying for clicks that don't convert to booked appointments."
              },
              {
                icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/fkeHVnQjUJXtKRvn.png",
                title: "24/7 Patient Capture",
                desc: "HIPAA-compliant AI chatbots engage dental patients instantly — even while you sleep — converting website traffic into booked appointments without adding front desk staff."
              },
              {
                icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/WBhDloOVGpaxRdbW.png",
                title: "Automated Reactivation",
                desc: "Smart campaigns identify patients who haven't returned in 12-18 months and re-engage them automatically, filling your hygiene schedule and treatment chairs without lifting a finger."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 border-l-4 border-secondary shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <IconImage src={item.icon} alt={item.title} size={64} />
                <h3 className="text-xl font-bold mb-3 mt-4 text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: HOW IT WORKS
          ===================================================================== */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container">
          <motion.div className="max-w-3xl mx-auto text-center mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Simple. Transparent. Fully Accountable.</h2>
            <p className="text-lg text-muted-foreground">
              We begin with a clear-eyed review of your practice's current online presence, local market demand, and growth potential — then we execute with complete visibility at every step.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/woFUFmSxhgHLUyTo.png",
                step: "01",
                title: "Practice Growth Brief",
                desc: "We analyze your practice's digital footprint, local competition, and patient demand to identify the highest-value growth opportunities specific to your dental specialty."
              },
              {
                icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/EtYMzJocxPYxMecb.png",
                step: "02",
                title: "Deploy & Optimize",
                desc: "We deploy the right mix of dental SEO, paid search, reputation management, and AI-powered patient capture — continuously optimized for your specialty and geography."
              },
              {
                icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/qANZOjHlFCcayAsG.png",
                step: "03",
                title: "Measure & Report",
                desc: "Every campaign, every channel, every dollar — tracked in real-time and reported clearly. You always know exactly what's working, what's driving growth, and where your investment is going. No vanity metrics, no mystery." 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white border border-border p-8 shadow-sm hover:shadow-md transition-shadow h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="text-6xl font-black text-primary/10 mb-4">{item.step}</div>
                <IconImage src={item.icon} alt={item.title} size={56} />
                <h3 className="text-xl font-bold mb-3 mt-4 text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: ROI CALCULATOR
          ===================================================================== */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container">
          <motion.div className="max-w-3xl mx-auto text-center mb-12" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Calculate Your Practice's Growth Potential</h2>
            <p className="text-lg text-muted-foreground">
              Use our dental-specific ROI estimator to see how much additional revenue your practice could generate with Propel Dental.
            </p>
          </motion.div>
          <ROICalculator />
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: TESTIMONIALS
          ===================================================================== */}
      <section className="py-20 bg-white border-t border-border">
        <div className="container">
          <motion.div className="max-w-3xl mx-auto text-center mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Dental Practices That Have Propelled Their Growth</h2>
            <p className="text-lg text-muted-foreground">Real results from real dental practices across the USA.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-white border border-border p-8 shadow-sm hover:shadow-lg transition-shadow flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                {/* Growth Badge */}
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary text-sm font-bold rounded-full mb-4 self-start">
                  {t.growth} New Patients
                </div>
                {/* Quote */}
                <blockquote className="text-muted-foreground leading-relaxed flex-grow mb-6">
                  "{t.quote}"
                </blockquote>
                {/* Attribution */}
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-primary">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.practice}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: ABOUT US
          ===================================================================== */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Built for Dental. Without the Agency Black Box.</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Traditional dental marketing agencies operate behind a black box — you pay a retainer, get a PDF of impressions, and hope for the best. We built Propel Dental to be the opposite: fully transparent, deeply accountable, and built exclusively for dental practices.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We understand HIPAA compliance, respect how dental offices actually operate, and give you clear visibility into every campaign, every channel, and every patient inquiry we generate for your practice.
              </p>
              <IntakeForm trigger={
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-none px-8 h-12">
                  Request a Digital Brief
                </Button>
              } />
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 shadow-lg border-t-4 border-primary">
                  <IconImage src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/iTgceqtSLqLOWeyy.png" alt="Partnership" size={48} />
                  <h4 className="font-bold text-primary mt-3">True Partnership</h4>
                  <p className="text-sm text-muted-foreground mt-2">We succeed when your practice succeeds</p>
                </div>
                <div className="bg-white p-6 shadow-lg border-t-4 border-secondary">
                  <IconImage src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/qMFufdufqNeqWknO.png" alt="Trust" size={48} />
                  <h4 className="font-bold text-primary mt-3">HIPAA Compliant</h4>
                  <p className="text-sm text-muted-foreground mt-2">Dental-first compliance approach</p>
                </div>
                <div className="bg-white p-6 shadow-lg border-t-4 border-secondary">
                  <IconImage src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/fkeHVnQjUJXtKRvn.png" alt="AI" size={48} />
                  <h4 className="font-bold text-primary mt-3">AI-Powered</h4>
                  <p className="text-sm text-muted-foreground mt-2">Dental-specific AI technology</p>
                </div>
                <div className="bg-white p-6 shadow-lg border-t-4 border-primary">
                  <IconImage src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/WBhDloOVGpaxRdbW.png" alt="Results" size={48} />
                  <h4 className="font-bold text-primary mt-3">Fully Accountable</h4>
                  <p className="text-sm text-muted-foreground mt-2">Clear metrics, real outcomes, zero guesswork</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: SOCIAL MEDIA & VIDEO TEASER
          Brief overview section linking to the full Social & Video page
          ===================================================================== */}
      <section className="py-20 bg-primary/5 border-t border-border">
        <div className="container">
          <motion.div className="max-w-3xl mx-auto text-center mb-12" {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-wider uppercase mb-4">
              Social Media & Video
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Own Every Screen. Every Platform. Every Day.</h2>
            <p className="text-lg text-muted-foreground">
              Your patients are on Facebook, Instagram, TikTok, YouTube, Reddit, Snapchat, X, and Nextdoor. We manage your presence across all of them — plus produce professional video content and TV commercials that build trust and drive appointments.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { platform: "Facebook", desc: "Local community targeting & lead ads" },
              { platform: "Instagram", desc: "Before/after photos & Reels" },
              { platform: "TikTok", desc: "Viral dental content & DentalTok" },
              { platform: "YouTube", desc: "Procedure explainers & pre-roll ads" },
              { platform: "Reddit", desc: "Community trust & AMA sessions" },
              { platform: "Snapchat", desc: "AR smile try-ons & teen outreach" },
              { platform: "X (Twitter)", desc: "Health awareness & community" },
              { platform: "Nextdoor", desc: "Hyperlocal neighborhood referrals" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white border border-border p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <div className="font-bold text-primary text-sm mb-1">{item.platform}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Video Production", desc: "Practice intro films, patient testimonials, procedure explainers, and social short-form content." },
              { title: "TV Commercials", desc: "Full-production 30 and 60-second broadcast TV commercials for local markets." },
              { title: "Streaming Ads (CTV/OTT)", desc: "Targeted ads on Hulu, Roku, Peacock, and Amazon Fire TV reaching patients in their homes." }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white border-l-4 border-secondary p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-none px-10 h-14"
              asChild
            >
              <a href="/social-media">Explore Social Media & Video Services →</a>
            </Button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: FINAL CTA
          ===================================================================== */}
      <section className="py-24 bg-muted/50 border-t border-border">
        <div className="container">
          <div className="bg-primary rounded-none p-12 md:p-20 text-center relative overflow-hidden">
            {/* Background dot pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Propel Your Dental Practice?</h2>
              <p className="text-xl text-blue-100 mb-10">
                Get a clear, honest review of your practice's growth opportunities and local patient demand — no black box, no obligation, no agency spin.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <IntakeForm trigger={
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-10 h-16 rounded-none shadow-xl">
                    Request a Practice Growth Brief
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
