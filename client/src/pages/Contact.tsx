/**
 * =============================================================================
 * CONTACT.TSX - Propel.Dental Contact Page
 * =============================================================================
 *
 * This page provides contact information and a contact form for dental
 * practices to get in touch with Propel Dental.
 *
 * TO CHANGE CONTACT INFO: Edit the contact details in the left column below
 * TO CHANGE FORM FIELDS: Edit the form in the right column below
 *
 * =============================================================================
 */

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-background to-blue-50/30 border-b border-border">
        <div className="container">
          <motion.div className="text-center max-w-2xl mx-auto" {...fadeIn}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Contact Propel Dental</h1>
            <p className="text-xl text-muted-foreground">
              Ready to grow your dental practice? Get in touch and we'll show you exactly how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">

            {/* Left Column: Contact Info */}
            <motion.div {...fadeIn}>
              <h2 className="text-2xl font-bold text-primary mb-8">Get in Touch</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Phone</h3>
                    <a href="tel:8887767735" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                      (888) PROPEL-5
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Mon–Fri, 9am–6pm EST</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Email</h3>
                    <a href="mailto:hello@propel.dental" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                      hello@propel.dental
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">We respond within 1 business day</p>
                  </div>
                </div>

                {/* Coverage */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Coverage</h3>
                    <p className="text-lg text-muted-foreground">All 50 States</p>
                    <p className="text-sm text-muted-foreground mt-1">Serving dental practices nationwide</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">Monday – Friday: 9:00 AM – 6:00 PM EST</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM – 2:00 PM EST</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="mt-10 p-6 bg-muted/30 border-l-4 border-secondary">
                <h3 className="font-bold text-primary mb-3">What Happens After You Contact Us?</h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="font-bold text-secondary">1.</span> A dental growth specialist reviews your practice information</li>
                  <li className="flex gap-2"><span className="font-bold text-secondary">2.</span> We research your local market and competition</li>
                  <li className="flex gap-2"><span className="font-bold text-secondary">3.</span> We schedule a brief call to share your Practice Growth Brief</li>
                  <li className="flex gap-2"><span className="font-bold text-secondary">4.</span> No obligation, no sales pressure — just honest insights</li>
                </ol>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {submitted ? (
                <div className="text-center py-20 border border-border p-12">
                  <div className="text-5xl mb-6">🦷</div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Thank you for reaching out!</h3>
                  <p className="text-muted-foreground text-lg">
                    A Propel Dental growth specialist will review your information and follow up within 1 business day.
                  </p>
                </div>
              ) : (
                <div className="border border-border p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-primary mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground mb-8">
                    Tell us about your dental practice and growth goals. We'll get back to you within 1 business day.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" required placeholder="Dr. Jane Smith" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="practiceName">Practice Name</Label>
                        <Input id="practiceName" required placeholder="Smith Family Dental" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" required placeholder="doctor@practice.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="specialty">Dental Specialty</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select specialty" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Dentistry</SelectItem>
                            <SelectItem value="orthodontics">Orthodontics</SelectItem>
                            <SelectItem value="cosmetic">Cosmetic Dentistry</SelectItem>
                            <SelectItem value="implants">Dental Implants</SelectItem>
                            <SelectItem value="oral-surgery">Oral Surgery</SelectItem>
                            <SelectItem value="periodontics">Periodontics</SelectItem>
                            <SelectItem value="endodontics">Endodontics</SelectItem>
                            <SelectItem value="pediatric">Pediatric Dentistry</SelectItem>
                            <SelectItem value="prosthodontics">Prosthodontics</SelectItem>
                            <SelectItem value="sedation">Sedation Dentistry</SelectItem>
                            <SelectItem value="other">Other / Multi-Specialty</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Practice Location</Label>
                        <Input id="location" required placeholder="City, State" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">How Can We Help?</Label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Tell us about your practice and what you're looking to achieve..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 text-lg rounded-none">
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      No spam. No obligation. HIPAA-compliant communication.
                    </p>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
