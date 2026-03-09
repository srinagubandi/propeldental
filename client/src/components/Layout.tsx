/**
 * =============================================================================
 * LAYOUT.TSX - Propel.Dental Main Website Layout Component
 * =============================================================================
 *
 * This file controls the overall structure of every page on the website:
 *   - HEADER: Logo, navigation menu, and call-to-action button
 *   - MAIN CONTENT: Where each page's content is displayed
 *   - FOOTER: Company info, links, contact details
 *
 * HOW TO EDIT:
 *   - To change the LOGO: Update the image path in the <img> tags (search for "/images/logo.png")
 *   - To change NAV LINKS: Edit the NavLinks component below
 *   - To change FOOTER TEXT: Edit the footer section at the bottom
 *   - To change COLORS: Edit the className properties (bg-*, text-*, border-*)
 *
 * COLOR REFERENCE:
 *   - primary = Blue (#1E73BE) - Used for main headings, links
 *   - secondary = Orange (#F58220) - Used for buttons, accents
 *   - muted-foreground = Gray text for descriptions
 *   - background = White background
 *   - border = Light gray borders
 *
 * =============================================================================
 */

// -----------------------------------------------------------------------------
// IMPORTS
// -----------------------------------------------------------------------------
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import IntakeForm from "@/components/IntakeForm";

// -----------------------------------------------------------------------------
// MAIN LAYOUT COMPONENT
// -----------------------------------------------------------------------------
export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  // ---------------------------------------------------------------------------
  // NAVIGATION LINKS
  // TO ADD A NEW PAGE: Add a new <Link> element below
  // TO REMOVE A PAGE: Delete the entire <Link>...</Link> line
  // ---------------------------------------------------------------------------
  const NavLinks = () => (
    <>
      {/* Specialties Page */}
      <Link href="/specialties" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
        Specialties
      </Link>

      {/* Services Page */}
      <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
        Services
      </Link>

      {/* Social Media & Video Page */}
      <Link href="/social-media" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
        Social & Video
      </Link>

      {/* How It Works Page */}
      <Link href="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
        How It Works
      </Link>

      {/* ROI Calculator Page */}
      <Link href="/calculator" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
        ROI Calculator
      </Link>

      {/* About Us Page */}
      <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
        About Us
      </Link>

      {/* Contact Us Page */}
      <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
        Contact Us
      </Link>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">

      {/* =====================================================================
          HEADER SECTION
          Contains: Logo, Navigation Links, CTA Button
          TO CHANGE HEADER HEIGHT: Edit "h-20" (h-16 = shorter, h-24 = taller)
      ===================================================================== */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">

          {/* -----------------------------------------------------------------
              LOGO
              TO CHANGE LOGO: Replace "/images/logo.png" with your new logo path
              Upload new logo to: client/public/images/
              NOTE: A new propel.dental logo is being designed — replace when ready
          ----------------------------------------------------------------- */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="/images/logo.svg"
                alt="Propel Dental"
                className="h-10 w-auto"
              />
            </div>
          </Link>

          {/* -----------------------------------------------------------------
              PHONE NUMBER - Click-to-call
              TO CHANGE PHONE NUMBER: Edit both the tel: link and display text
          ----------------------------------------------------------------- */}
          <a
            href="tel:1-800-362-7767"
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors"
          >
            <Phone className="h-4 w-4" />
            1-800-DOC-PROPEL
          </a>

          {/* -----------------------------------------------------------------
              DESKTOP NAVIGATION (visible on screens md and larger)
          ----------------------------------------------------------------- */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLinks />
            <IntakeForm trigger={
              <Button
                variant="default"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-none px-6"
              >
                Request a Practice Growth Brief
              </Button>
            } />
          </nav>

          {/* -----------------------------------------------------------------
              MOBILE NAVIGATION (hamburger menu, visible on small screens)
          ----------------------------------------------------------------- */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-full p-0">
              <nav className="flex flex-col items-center justify-center h-full gap-8 py-16">
                {/* Click-to-call phone number */}
                <a
                  href="tel:1-800-362-7767"
                  className="flex items-center gap-2 text-xl font-bold text-secondary hover:text-secondary/80 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="h-5 w-5" />
                  1-800-DOC-PROPEL
                </a>

                <div className="w-16 h-px bg-border" />

                <Link href="/specialties" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  Specialties
                </Link>
                <Link href="/services" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
                <Link href="/social-media" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  Social & Video
                </Link>
                <Link href="/how-it-works" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  How It Works
                </Link>
                <Link href="/calculator" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  ROI Calculator
                </Link>
                <Link href="/about" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  About Us
                </Link>
                <Link href="/contact" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>

                <div className="w-16 h-px bg-border" />

                <IntakeForm trigger={
                  <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-none px-8 h-12 text-base">
                    Request a Practice Growth Brief
                  </Button>
                } />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* =====================================================================
          MAIN CONTENT AREA
          Each page's content is rendered here via the {children} prop
      ===================================================================== */}
      <main className="flex-1">
        {children}
      </main>

      {/* =====================================================================
          FOOTER SECTION
          TO CHANGE FOOTER CONTENT: Edit the sections below
          TO CHANGE FOOTER BACKGROUND: Edit "bg-primary" class
      ===================================================================== */}
      <footer className="bg-primary text-white">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* -----------------------------------------------------------------
                FOOTER COLUMN 1: Brand & Description
            ----------------------------------------------------------------- */}
            <div className="md:col-span-1">
              {/* Logo in footer — replace with propel.dental logo when ready */}
              <img src="/images/logo.svg" alt="Propel Dental" className="h-8 w-auto mb-4 brightness-0 invert" />
              <p className="text-blue-200 text-sm leading-relaxed mb-4">
                Transparent, accountable growth for dental practices across the USA. No black box. No guesswork. Just clear results.
              </p>
              <p className="text-blue-300 text-xs">
                HIPAA Compliant · All 50 States
              </p>
            </div>

            {/* -----------------------------------------------------------------
                FOOTER COLUMN 2: Dental Specialties
            ----------------------------------------------------------------- */}
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Dental Specialties</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><Link href="/specialties" className="hover:text-white transition-colors">General Dentistry</Link></li>
                <li><Link href="/specialties" className="hover:text-white transition-colors">Orthodontics</Link></li>
                <li><Link href="/specialties" className="hover:text-white transition-colors">Cosmetic Dentistry</Link></li>
                <li><Link href="/specialties" className="hover:text-white transition-colors">Dental Implants</Link></li>
                <li><Link href="/specialties" className="hover:text-white transition-colors">Oral Surgery</Link></li>
                <li><Link href="/specialties" className="hover:text-white transition-colors">Periodontics</Link></li>
                <li><Link href="/specialties" className="hover:text-white transition-colors">Endodontics</Link></li>
                <li><Link href="/specialties" className="hover:text-white transition-colors">Pediatric Dentistry</Link></li>
              </ul>
            </div>

            {/* -----------------------------------------------------------------
                FOOTER COLUMN 3: Services & Resources
            ----------------------------------------------------------------- */}
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Services</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><Link href="/services" className="hover:text-white transition-colors">Dental SEO</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Paid Search & PPC</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">AI-Powered Website</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Reputation Management</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Patient Reactivation</Link></li>
                <li><Link href="/social-media" className="hover:text-white transition-colors">Social Media Management</Link></li>
                <li><Link href="/social-media" className="hover:text-white transition-colors">Video Production</Link></li>
                <li><Link href="/social-media" className="hover:text-white transition-colors">TV & Streaming Ads</Link></li>
                <li><Link href="/calculator" className="hover:text-white transition-colors">ROI Calculator</Link></li>
                <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              </ul>
            </div>

            {/* -----------------------------------------------------------------
                FOOTER COLUMN 4: Contact & CTA
            ----------------------------------------------------------------- */}
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Get Started</h4>
              <div className="space-y-4 text-sm text-blue-200 mb-6">
                <p>
                  <a href="tel:1-800-362-7767" className="hover:text-white transition-colors font-semibold text-white">
                    1-800-DOC-PROPEL
                  </a>
                </p>
                <p>
                  <a href="mailto:hello@propel.dental" className="hover:text-white transition-colors">
                    hello@propel.dental
                  </a>
                </p>
                <p className="text-blue-300">
                  Serving dental practices<br />across all 50 states
                </p>
              </div>
              <IntakeForm trigger={
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-none w-full">
                  Request a Growth Brief
                </Button>
              } />
            </div>
          </div>

          {/* Footer Bottom Bar */}
          <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
            <p>© {new Date().getFullYear()} Propel Dental. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
