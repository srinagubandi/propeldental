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
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Built for Dental Practices. Without the Agency Games.</h1>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We built Propel Dental specifically for dental practices — dentists, orthodontists, oral surgeons, periodontists, endodontists, and pediatric dentists — that want growth without the hype. We understand HIPAA compliance, respect how dental offices actually operate, and avoid agency theatrics.
                </p>
                <p>
                  Our founders saw a clear gap in the market: great dental practices were struggling to grow because traditional marketing agencies were focused on selling retainers, not delivering patients. The incentives were completely misaligned.
                </p>
                <p>
                  We changed that. With Propel Dental, you only pay when we deliver qualified patient inquiries and booked appointments. Our success is directly tied to yours — and that's exactly how it should be.
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
                  <h3 className="text-2xl font-bold text-primary mb-3">Performance-Based</h3>
                  <p className="text-muted-foreground">You only pay when we deliver qualified patient inquiries and booked appointments. No retainers, no wasted spend, no risk on your end.</p>
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
            To empower dental practices across the USA to grow through transparent, performance-based marketing — allowing dentists and dental specialists to focus on what they do best: delivering exceptional patient care.
          </p>
        </div>
      </section>
    </Layout>
  );
}
