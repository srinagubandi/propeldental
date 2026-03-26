import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import IntakeForm from "./IntakeForm";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/full-arch-marketing", label: "Full-Arch Marketing" },
    { href: "/p90-protocol", label: "P90 Protocol" },
    { href: "/results", label: "Results" },
    { href: "/calculator", label: "ROI Estimator" },
    { href: "/about", label: "About" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex items-center">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                PROPEL
              </span>
              <span className="text-xl md:text-2xl font-light tracking-tight text-primary ml-1">
                DENTAL
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  location === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            {/* Header phone number — tap-to-call on mobile */}
            <a
              href="tel:9549450011"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(954) 945-0011</span>
            </a>
            <IntakeForm
              trigger={
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5">
                  Book a Strategy Call
                </Button>
              }
            />
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="container mx-auto py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${
                    location === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-4 space-y-3">
                {/* Mobile menu phone number — tap-to-call */}
                <a
                  href="tel:9549450011"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(954) 945-0011</span>
                </a>
                <IntakeForm
                  trigger={
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      Book a Strategy Call
                    </Button>
                  }
                />
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <span className="text-xl font-bold tracking-tight text-foreground">PROPEL</span>
                <span className="text-xl font-light tracking-tight text-primary ml-1">DENTAL</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The full-arch growth partner built for implant practices that refuse to settle for generic marketing.
              </p>
              <a
                href="tel:8887767735"
                className="flex items-center gap-2 mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (888) PROPEL-5
              </a>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/full-arch-marketing" className="hover:text-primary transition-colors">Full-Arch Marketing</Link></li>
                <li><Link href="/p90-protocol" className="hover:text-primary transition-colors">P90 Success Protocol</Link></li>
                <li><Link href="/services/dental-seo" className="hover:text-primary transition-colors">Dental SEO</Link></li>
                <li><Link href="/services/paid-search" className="hover:text-primary transition-colors">Paid Search & PPC</Link></li>
                <li><Link href="/services/social-media" className="hover:text-primary transition-colors">Social Media Marketing</Link></li>
                <li><Link href="/services/video-production" className="hover:text-primary transition-colors">Video Production & TV</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/results" className="hover:text-primary transition-colors">Results & Case Studies</Link></li>
                <li><Link href="/calculator" className="hover:text-primary transition-colors">ROI Estimator</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services/aeo" className="hover:text-primary transition-colors">AEO Best Practices</Link></li>
                <li><Link href="/services/geo" className="hover:text-primary transition-colors">GEO Best Practices</Link></li>
                <li><Link href="/calculator" className="hover:text-primary transition-colors">ROI Estimator</Link></li>
              </ul>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 mt-6">Also Serving</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>General Dentistry</li>
                <li>Orthodontics</li>
                <li>Cosmetic Dentistry</li>
                <li>Oral Surgery</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Propel Dental. All rights reserved. HIPAA Compliant.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
