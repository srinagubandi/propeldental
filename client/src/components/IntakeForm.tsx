/**
 * =============================================================================
 * INTAKEFORM.TSX - Propel.Dental Practice Growth Brief Request Form
 * =============================================================================
 *
 * This is the main lead capture form that appears as a popup dialog when
 * users click "Request a Practice Growth Brief" buttons throughout the site.
 *
 * TO CHANGE FORM FIELDS: Edit the form elements below
 * TO CHANGE SPECIALTY OPTIONS: Edit the SelectItem values in the specialty dropdown
 * TO CHANGE FORM TITLE: Edit the DialogTitle text
 *
 * =============================================================================
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export default function IntakeForm({ trigger }: { trigger?: React.ReactNode }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          {trigger || <Button>Request Brief</Button>}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <div className="text-center py-10">
            <div className="text-5xl mb-4">🦷</div>
            <h3 className="text-2xl font-bold text-primary mb-4">Thank you.</h3>
            <p className="text-muted-foreground">
              We'll review your dental practice information and follow up within 1 business day if there's a clear opportunity where our performance-based model can add value.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button>Request Brief</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Practice Growth Brief Request</DialogTitle>
          <DialogDescription className="text-base pt-2">
            This brief helps us understand your dental practice, local market, and growth goals so we can determine whether our performance-based model is a fit. There is no obligation and no sales pressure.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-6">
          {/* Practice Name & Specialty */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="practiceName">Practice Name</Label>
              <Input id="practiceName" required placeholder="e.g. Smile Orthodontics" />
            </div>
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
                  <SelectItem value="multi">Multi-Specialty / DSO</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Location & Patient Volume */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="locations">Practice Location(s)</Label>
              <Input id="locations" required placeholder="City, State" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="volume">Current New Patient Volume (Optional)</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="New patients per month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-20">1–20 / month</SelectItem>
                  <SelectItem value="21-50">21–50 / month</SelectItem>
                  <SelectItem value="51-100">51–100 / month</SelectItem>
                  <SelectItem value="100+">100+ / month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Growth Goal */}
          <div className="space-y-2">
            <Label htmlFor="goal">Primary Growth Goal or Challenge</Label>
            <Textarea id="goal" required placeholder="e.g. We want to attract more implant cases and fill our hygiene schedule..." />
          </div>

          {/* Website & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="website">Practice Website (Optional)</Label>
              <Input id="website" type="url" placeholder="https://yourpractice.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Best Contact Email</Label>
              <Input id="email" type="email" required placeholder="doctor@practice.com" />
            </div>
          </div>

          {/* Additional Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Information (Optional)</Label>
            <Textarea id="notes" placeholder="Any additional details, questions, or context you'd like to share..." rows={3} />
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 text-lg rounded-none">
              Submit Request
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-3">
              HIPAA compliant. No spam. No obligation. We'll follow up within 1 business day.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
