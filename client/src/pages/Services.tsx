/**
 * =============================================================================
 * SERVICES.TSX - Propel.Dental Services Page
 * =============================================================================
 *
 * This page describes all the growth services offered by Propel Dental,
 * tailored specifically for dental practices.
 *
 * SECTIONS:
 *   1. Hero             - Page headline and specialty badges
 *   2. Services Grid    - 6 core service cards
 *   3. Specialty Benefits - Specific benefits for each dental specialty
 *   4. CTA              - Final call-to-action
 *
 * =============================================================================
 */

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import IntakeForm from "@/components/IntakeForm";

const IconImage = ({ src, alt, size = 48 }: { src: string; alt: string; size?: number }) => (
  <img src={src} alt={alt} className="object-contain" style={{ width: size, height: size }} />
);

export default function Services() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // ---------------------------------------------------------------------------
  // CORE SERVICES - Edit service titles, descriptions, and specialty tags here
  // ---------------------------------------------------------------------------
  const services = [
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/qANZOjHlFCcayAsG.png",
      title: "Dental SEO",
      desc: "Dominate local search results when patients are actively looking for a dentist, orthodontist, or specialist in your area. We focus on high-intent keywords that drive appointments, not just traffic.",
      specialties: ["General Dentistry", "Orthodontics", "Oral Surgery", "Periodontics", "Endodontics", "Pediatric Dentistry"]
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/WBhDloOVGpaxRdbW.png",
      title: "Paid Search & PPC",
      desc: "Create immediate patient demand and convert search intent into booked appointments. We manage your Google Ads and dental PPC campaigns to maximize ROI and eliminate wasted spend.",
      specialties: ["Cosmetic Dentistry", "Dental Implants", "Orthodontics", "Oral Surgery"]
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/fkeHVnQjUJXtKRvn.png",
      title: "AI-Powered Website",
      desc: "A dental website built for trust, HIPAA compliance, and patient conversion — not just aesthetics. Includes 24/7 AI chat to capture patient inquiries and book appointments around the clock.",
      specialties: ["All Dental Specialties"]
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/qMFufdufqNeqWknO.png",
      title: "Reputation Management",
      desc: "Systematically build 5-star reviews on Google, Healthgrades, and Zocdoc. We help you generate more positive reviews and professionally manage your online reputation to attract new patients.",
      specialties: ["All Dental Specialties"]
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/EtYMzJocxPYxMecb.png",
      title: "Patient Reactivation",
      desc: "Smart automated campaigns identify patients who haven't returned in 12-18 months and re-engage them with personalized outreach — filling your hygiene schedule and treatment chairs automatically.",
      specialties: ["General Dentistry", "Orthodontics", "Pediatric Dentistry", "Periodontics"]
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/woFUFmSxhgHLUyTo.png",
      title: "Practice Growth Brief",
      desc: "A comprehensive, insight-led review of your practice's digital ecosystem, local competition, and growth opportunities. Identify exactly where you're losing patients and how to win them back.",
      specialties: ["All Dental Specialties"],
      cta: "Request a Free Growth Brief"
    }
  ];

  // ---------------------------------------------------------------------------
  // SPECIALTY BENEFITS - Specific outcomes for each dental specialty
  // ---------------------------------------------------------------------------
  const specialtyBenefits = [
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/xUduvXxBKpcYHKDu.png",
      title: "For General Dentists",
      benefits: [
        "Fill hygiene schedules with recurring family patients",
        "Reduce no-shows and cancellations with automated reminders",
        "Compete effectively against DSOs and corporate chains",
        "Build a loyal patient base with reputation management"
      ]
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/hgeCYmgWdFOTQFeJ.png",
      title: "For Orthodontists",
      benefits: [
        "Attract high-value Invisalign and braces cases",
        "Dominate local search for orthodontic keywords",
        "Convert website visitors into consultation bookings",
        "Build referral networks with general dentists"
      ]
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/qMFufdufqNeqWknO.png",
      title: "For Cosmetic Dentists",
      benefits: [
        "Attract high-value veneer and smile makeover cases",
        "Showcase before/after results to convert prospects",
        "Target patients actively searching for cosmetic procedures",
        "Build premium brand positioning in your market"
      ]
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/WBhDloOVGpaxRdbW.png",
      title: "For Implant Specialists",
      benefits: [
        "Attract high-value All-on-4 and full-arch cases",
        "Target patients who have lost teeth or wear dentures",
        "Build referral relationships with general dentists",
        "Convert implant consultations to accepted treatment plans"
      ]
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/fkeHVnQjUJXtKRvn.png",
      title: "For Oral Surgeons",
      benefits: [
        "Capture direct-access patients for extractions and wisdom teeth",
        "Build strong referral networks with general dentists",
        "Attract implant placement cases from prosthodontists",
        "Dominate local search for oral surgery keywords"
      ]
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/qANZOjHlFCcayAsG.png",
      title: "For Pediatric Dentists",
      benefits: [
        "Attract families with young children in your area",
        "Build a reputation as the trusted kids' dentist",
        "Reduce patient drop-off as children grow",
        "Expand to multiple locations with proven playbooks"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-blue-50/30 border-b border-border">
        <div className="container">
          <motion.div className="text-center max-w-3xl mx-auto" {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-wider uppercase mb-6">
              Full-Service Dental Growth
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">One Growth System. Built for Dentistry.</h1>
            <p className="text-xl text-muted-foreground mb-8">
              You don't need multiple vendors or complex contracts. We manage your entire dental practice growth ecosystem under one performance-based model — tailored for every dental specialty across the USA.
            </p>
            {/* Specialty Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {["General Dentistry", "Orthodontics", "Cosmetic", "Implants", "Oral Surgery", "Periodontics", "Endodontics", "Pediatric"].map((s) => (
                <span key={s} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border text-sm font-medium rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="p-8 flex flex-col flex-grow text-center md:text-left">
                  <div className="mb-4 flex justify-center md:justify-start">
                    <IconImage src={service.icon} alt={service.title} size={56} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{service.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                    {service.specialties.map((spec, j) => (
                      <span key={j} className="text-xs bg-primary/5 text-primary px-2 py-1 rounded font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>

                  {service.cta ? (
                    <IntakeForm trigger={
                      <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white font-bold uppercase tracking-wide rounded-none mt-auto">
                        {service.cta}
                      </Button>
                    } />
                  ) : (
                    <div className="inline-flex items-center justify-center md:justify-start text-sm font-bold text-secondary uppercase tracking-wide mt-auto">
                      Included <Check className="ml-1 h-4 w-4" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Tailored for Your Dental Specialty</h2>
            <p className="text-lg text-muted-foreground">
              Every dental specialty has unique patient acquisition challenges. Our strategies are customized to address the specific growth opportunities in your field.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialtyBenefits.map((specialty, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 border-l-4 border-secondary shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <IconImage src={specialty.icon} alt={specialty.title} size={48} />
                  <h3 className="text-lg font-bold text-primary">{specialty.title}</h3>
                </div>
                <ul className="space-y-3">
                  {specialty.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to grow your dental practice?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a general dentist, orthodontist, oral surgeon, or any dental specialist — we have a proven playbook for your practice.
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
