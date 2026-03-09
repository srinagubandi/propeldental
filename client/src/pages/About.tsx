/**
 * =============================================================================
 * ABOUT.TSX - Propel.Dental About Us Page
 * =============================================================================
 *
 * This page describes the Propel Dental mission, values, and approach.
 *
 * =============================================================================
 */

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import IntakeForm from "@/components/IntakeForm";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      {/* Main About Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Built for Dental Practices. Without the Agency Black Box.</h1>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We built Propel Dental specifically for dental practices — dentists, orthodontists, oral surgeons, periodontists, endodontists, and pediatric dentists — that are tired of paying agencies for reports full of impressions, clicks, and vanity metrics that never translate to a busier schedule.
                </p>
                <p>
                  Traditional dental marketing agencies operate behind a black box. You sign a retainer, get a monthly PDF, and are left guessing whether any of it is actually working. The incentives are completely misaligned — they get paid whether your practice grows or not.
                </p>
                <p>
                  We built Propel Dental to be the opposite. Every campaign we run is fully visible to you. Every channel, every metric, every patient inquiry is tracked and reported in plain language. We move away from the traditional agency model and toward a true growth partnership built on transparency and accountability.
                </p>
                <p>
                  We serve dental practices across all 50 states, from solo general dentists to multi-location specialty groups. Our AI-powered platform is built specifically for the dental industry, with HIPAA-compliant tools and dental-specific patient acquisition strategies.
                </p>
              </div>
              <div className="mt-10">
                <IntakeForm trigger={
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-none px-8 h-14 text-lg">
                    Request a Digital Brief
                  </Button>
                } />
              </div>
            </motion.div>

            <motion.div
              className="relative bg-gradient-to-br from-primary/10 to-secondary/10 p-12 rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div className="bg-white p-8 shadow-lg border-l-4 border-primary">
                  <h3 className="text-2xl font-bold text-primary mb-3">Fully Transparent</h3>
                  <p className="text-muted-foreground">Every campaign, every channel, every dollar — reported clearly in real time. No black-box dashboards, no mystery metrics, no agency spin.</p>
                </div>
                <div className="bg-white p-8 shadow-lg border-l-4 border-secondary">
                  <h3 className="text-2xl font-bold text-primary mb-3">Dental-First</h3>
                  <p className="text-muted-foreground">HIPAA-compliant, specialty-specific strategies built exclusively for dentists, orthodontists, oral surgeons, periodontists, endodontists, and pediatric dentists.</p>
                </div>
                <div className="bg-white p-8 shadow-lg border-l-4 border-primary">
                  <h3 className="text-2xl font-bold text-primary mb-3">AI-Powered</h3>
                  <p className="text-muted-foreground">Cutting-edge dental AI and automation for real-time optimization, 24/7 patient capture, and automated reactivation campaigns.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "500+", label: "Dental Practices Served" },
              { stat: "All 50", label: "States Covered" },
              { stat: "35%", label: "Avg. Patient Growth" },
              { stat: "100%", label: "HIPAA Compliant" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl font-black text-primary mb-2">{item.stat}</div>
                <div className="text-muted-foreground font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            To empower dental practices across the USA to grow through fully transparent, accountable marketing — giving dentists and dental specialists complete visibility into every campaign, every channel, and every result, so they can focus on what they do best: delivering exceptional patient care.
          </p>
        </div>
      </section>
    </Layout>
  );
}
