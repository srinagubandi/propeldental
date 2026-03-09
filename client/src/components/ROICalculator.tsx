/**
 * =============================================================================
 * ROICALCULATOR.TSX - Propel.Dental ROI / Growth Calculator
 * =============================================================================
 *
 * This interactive calculator lets dental practices estimate their potential
 * revenue growth with Propel Dental's performance-based marketing.
 *
 * HOW IT WORKS:
 *   1. User selects their dental specialty
 *   2. User sets their current monthly new patient count
 *   3. User sets their average revenue per patient
 *   4. User enters email to get results
 *   5. Calculator shows projected additional patients and revenue
 *
 * TO CHANGE GROWTH RATES: Edit the DENTAL_SPECIALTIES object below
 * TO CHANGE AVERAGE VALUES: Edit the avgValue field for each specialty
 *
 * =============================================================================
 */

import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Calculator, DollarSign, TrendingUp, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// -----------------------------------------------------------------------------
// DENTAL SPECIALTIES CONFIGURATION
// growth = conservative growth rate (e.g., 0.35 = 35% more patients)
// avgValue = average revenue per patient/case for this specialty
// -----------------------------------------------------------------------------
const DENTAL_SPECIALTIES = {
  "general": { label: "General Dentistry", growth: 0.30, avgValue: 800 },
  "orthodontics": { label: "Orthodontics", growth: 0.40, avgValue: 5500 },
  "cosmetic": { label: "Cosmetic Dentistry", growth: 0.35, avgValue: 3500 },
  "implants": { label: "Dental Implants", growth: 0.45, avgValue: 4500 },
  "oral_surgery": { label: "Oral Surgery", growth: 0.35, avgValue: 2000 },
  "periodontics": { label: "Periodontics", growth: 0.30, avgValue: 1800 },
  "endodontics": { label: "Endodontics", growth: 0.28, avgValue: 1200 },
  "pediatric": { label: "Pediatric Dentistry", growth: 0.35, avgValue: 900 },
  "prosthodontics": { label: "Prosthodontics", growth: 0.25, avgValue: 6000 },
  "sedation": { label: "Sedation Dentistry", growth: 0.30, avgValue: 2500 },
};

export default function ROICalculator() {
  const [specialty, setSpecialty] = useState("general");
  const [monthlyPatients, setMonthlyPatients] = useState(30);
  const [patientValue, setPatientValue] = useState(800);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update default patient value when specialty changes
  const handleSpecialtyChange = (value: string) => {
    setSpecialty(value);
    setPatientValue(DENTAL_SPECIALTIES[value as keyof typeof DENTAL_SPECIALTIES].avgValue);
  };

  // Calculate projections
  const growthRate = DENTAL_SPECIALTIES[specialty as keyof typeof DENTAL_SPECIALTIES].growth;
  const additionalPatients = Math.round(monthlyPatients * growthRate);
  const monthlyRevenueIncrease = additionalPatients * patientValue;
  const annualRevenueIncrease = monthlyRevenueIncrease * 12;

  const submitLead = trpc.calculator.submitLead.useMutation({
    onSuccess: () => {
      toast.success("Your personalized dental growth report is on its way!");
    },
    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
  });

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      try {
        await submitLead.mutateAsync({
          email,
          specialty: DENTAL_SPECIALTIES[specialty as keyof typeof DENTAL_SPECIALTIES].label,
          monthlyPatients,
          patientValue,
          projectedGrowth: growthRate,
          projectedAnnualRevenue: annualRevenueIncrease,
        });
        setShowResults(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden shadow-2xl border-t-4 border-t-secondary">
      <div className="grid md:grid-cols-2">

        {/* ===================================================================
            INPUT SECTION (Left Side)
        =================================================================== */}
        <div className="p-6 md:p-8 bg-background">
          <CardHeader className="px-0 pt-0">
            <div className="flex items-center gap-2 text-secondary mb-2">
              <Calculator className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-wider">Dental Growth Calculator</span>
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-primary">
              Calculate Your Potential
            </CardTitle>
            <CardDescription className="text-base mt-2">
              See how much revenue your dental practice could be missing. Enter your current metrics below.
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleCalculate} className="space-y-8 mt-6">

            {/* Dental Specialty Selector */}
            <div className="space-y-4">
              <Label htmlFor="specialty" className="text-base font-medium">Dental Specialty</Label>
              <Select value={specialty} onValueChange={handleSpecialtyChange}>
                <SelectTrigger id="specialty" className="h-12 text-lg">
                  <SelectValue placeholder="Select your dental specialty" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(DENTAL_SPECIALTIES).map(([key, data]) => (
                    <SelectItem key={key} value={key}>{data.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Monthly New Patients Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="patients" className="text-base font-medium">
                  Monthly New Patients
                </Label>
                <span className="text-xl font-bold text-primary bg-blue-50 px-3 py-1 rounded">
                  {monthlyPatients}
                </span>
              </div>
              <Slider
                id="patients"
                min={5}
                max={200}
                step={1}
                value={[monthlyPatients]}
                onValueChange={(vals) => setMonthlyPatients(vals[0])}
                className="py-2"
              />
              <p className="text-xs text-muted-foreground">
                Average number of new patients you see per month currently.
              </p>
            </div>

            {/* Average Revenue Per Patient Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="value" className="text-base font-medium">
                  Avg. Revenue per Patient ($)
                </Label>
                <span className="text-xl font-bold text-primary bg-blue-50 px-3 py-1 rounded">
                  ${patientValue.toLocaleString()}
                </span>
              </div>
              <Slider
                id="value"
                min={100}
                max={15000}
                step={100}
                value={[patientValue]}
                onValueChange={(vals) => setPatientValue(vals[0])}
                className="py-2"
              />
              <p className="text-xs text-muted-foreground">
                Average revenue per new patient or case (first visit / treatment plan).
              </p>
            </div>

            {/* Email Input & Submit */}
            <div className="pt-4">
              <Label htmlFor="email" className="text-base font-medium mb-2 block">
                Where should we send your detailed dental growth report?
              </Label>
              <div className="flex gap-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="doctor@practice.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-lg"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 px-6 bg-secondary hover:bg-secondary/90 text-white font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Calculating..." : "Calculate"} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                🔒 HIPAA compliant. Your data is secure. No spam.
              </p>
            </div>
          </form>
        </div>

        {/* ===================================================================
            RESULTS SECTION (Right Side)
        =================================================================== */}
        <div className="bg-primary text-white p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <AnimatePresence mode="wait">
            {!showResults ? (
              /* Placeholder state before calculation */
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-6 relative z-10"
              >
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Ready to see your dental practice growth?</h3>
                <p className="text-blue-100 text-lg">
                  Enter your metrics to unlock a personalized projection of your practice's potential revenue growth with Propel Dental.
                </p>
                {/* Blurred placeholder cards */}
                <div className="grid grid-cols-2 gap-4 mt-8 opacity-50 blur-[2px]">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="h-4 w-16 bg-white/20 rounded mb-2"></div>
                    <div className="h-8 w-24 bg-white/40 rounded"></div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="h-4 w-16 bg-white/20 rounded mb-2"></div>
                    <div className="h-8 w-24 bg-white/40 rounded"></div>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Results state after calculation */
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.4 }}
                className="space-y-8 relative z-10"
              >
                {/* Annual Revenue Projection */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-medium text-blue-100 mb-1">Projected Annual Growth</h3>
                  <div className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                    +${annualRevenueIncrease.toLocaleString()}
                  </div>
                </div>

                {/* Metric Cards */}
                <div className="grid gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-secondary/20 rounded-full">
                        <Users className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="font-medium">New Patients / Year</span>
                    </div>
                    <span className="text-2xl font-bold">+{additionalPatients * 12}</span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-500/20 rounded-full">
                        <DollarSign className="w-5 h-5 text-green-400" />
                      </div>
                      <span className="font-medium">Monthly Revenue</span>
                    </div>
                    <span className="text-2xl font-bold text-green-400">
                      +${monthlyRevenueIncrease.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-blue-900/50 p-4 rounded-lg text-sm text-blue-100 border border-blue-800">
                  <p>
                    <strong>Note:</strong> This projection is based on a conservative{" "}
                    <strong>{Math.round(growthRate * 100)}% growth rate</strong>, typical for{" "}
                    {DENTAL_SPECIALTIES[specialty as keyof typeof DENTAL_SPECIALTIES].label} practices in their first 6 months with Propel Dental.
                  </p>
                </div>

                <Button className="w-full bg-white text-primary hover:bg-blue-50 font-bold h-12 text-lg">
                  Start Your Dental Growth Plan
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Card>
  );
}
