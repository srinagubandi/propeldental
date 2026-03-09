/**
 * =============================================================================
 * SPECIALTIES.TSX - Propel.Dental Specialties Page
 * =============================================================================
 *
 * This page provides detailed information about each dental specialty
 * that Propel Dental serves, including key procedures, patient types,
 * and growth strategies.
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

export default function Specialties() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const specialties = [
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/xUduvXxBKpcYHKDu.png",
      title: "General Dentistry",
      tagline: "The Foundation of Oral Health",
      desc: "General dentists are the primary care providers of oral health, serving patients of all ages. From routine cleanings and preventive care to fillings, crowns, and bridges — general dentists are the backbone of dental care in the USA.",
      procedures: ["Routine Cleanings & Exams", "Fillings & Composite Restorations", "Crowns & Bridges", "Tooth Extractions", "Root Canals (basic)", "Dentures & Partials", "Teeth Whitening", "Dental X-Rays"],
      patientTypes: ["Families with children", "Adults seeking preventive care", "Patients needing restorative work", "Seniors with complex needs"],
      growthFocus: "Fill hygiene schedules, reduce no-shows, compete with DSOs",
      avgPatientValue: "$800"
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/hgeCYmgWdFOTQFeJ.png",
      title: "Orthodontics",
      tagline: "Straightening Smiles, Transforming Lives",
      desc: "Orthodontists specialize in diagnosing and treating dental and facial irregularities. With the rise of clear aligner therapy, orthodontic practices have seen explosive growth in adult patients seeking discreet treatment options.",
      procedures: ["Traditional Braces (Metal & Ceramic)", "Invisalign & Clear Aligners", "Lingual Braces", "Retainers & Appliances", "Early Interceptive Treatment", "Bite Correction & Jaw Alignment", "Space Maintainers", "Surgical Orthodontics"],
      patientTypes: ["Teens seeking braces", "Adults wanting clear aligners", "Children needing early treatment", "Patients referred by general dentists"],
      growthFocus: "Attract high-value Invisalign cases, dominate local search, build GP referral networks",
      avgPatientValue: "$5,500"
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/qMFufdufqNeqWknO.png",
      title: "Cosmetic Dentistry",
      tagline: "Creating Beautiful, Confident Smiles",
      desc: "Cosmetic dentists focus on improving the appearance of teeth, gums, and smiles. This is one of the fastest-growing dental specialties, driven by social media, increased aesthetic awareness, and accessible financing options.",
      procedures: ["Porcelain Veneers", "Teeth Whitening (In-Office & Take-Home)", "Dental Bonding", "Smile Makeovers", "Gum Contouring", "Tooth-Colored Fillings", "Dental Implants (Cosmetic)", "Full Smile Reconstruction"],
      patientTypes: ["Adults seeking smile improvement", "Patients preparing for major life events", "Social media-aware millennials", "Patients with stained or chipped teeth"],
      growthFocus: "Showcase before/after results, target high-intent cosmetic searches, build premium brand positioning",
      avgPatientValue: "$3,500"
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/WBhDloOVGpaxRdbW.png",
      title: "Dental Implants",
      tagline: "Restoring Smiles. Restoring Confidence.",
      desc: "Dental implant specialists offer the gold standard in tooth replacement. With over 3 million Americans getting implants annually — and that number growing by 500,000 per year — this is one of the highest-value dental specialties.",
      procedures: ["Single Tooth Implants", "Multiple Tooth Implants", "All-on-4 Full Arch Restoration", "All-on-6 Full Arch Restoration", "Implant-Supported Dentures", "Mini Dental Implants", "Bone Grafting", "Sinus Lifts"],
      patientTypes: ["Patients with missing teeth", "Denture wearers seeking permanent solutions", "Patients referred by general dentists", "Adults who lost teeth to decay or trauma"],
      growthFocus: "Attract high-value All-on-4 cases, build GP referral networks, target patients actively researching implants",
      avgPatientValue: "$4,500"
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/fkeHVnQjUJXtKRvn.png",
      title: "Oral Surgery",
      tagline: "Expert Surgical Care for Complex Cases",
      desc: "Oral and maxillofacial surgeons are dental specialists who perform complex surgical procedures of the mouth, jaw, and face. They handle everything from wisdom tooth extractions to corrective jaw surgery and facial trauma.",
      procedures: ["Wisdom Tooth Extractions", "Tooth Extractions (Complex)", "Dental Implant Placement", "Bone Grafting", "Corrective Jaw Surgery (Orthognathic)", "Facial Trauma Treatment", "Oral Pathology & Biopsies", "TMJ Surgery"],
      patientTypes: ["Patients needing wisdom tooth removal", "Patients referred for complex extractions", "Implant patients needing bone grafting", "Patients with jaw disorders or facial trauma"],
      growthFocus: "Capture direct-access patients, build strong GP referral networks, attract implant placement cases",
      avgPatientValue: "$2,000"
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/EtYMzJocxPYxMecb.png",
      title: "Periodontics",
      tagline: "Protecting the Foundation of Your Smile",
      desc: "Periodontists specialize in the prevention, diagnosis, and treatment of gum disease, as well as the placement of dental implants. With nearly half of American adults having some form of gum disease, this is a high-demand specialty.",
      procedures: ["Scaling & Root Planing (Deep Cleaning)", "Gum Disease Treatment", "Gum Surgery (Osseous Surgery)", "Gum Grafting", "Crown Lengthening", "Dental Implant Placement", "Bone Regeneration", "Periodontal Maintenance"],
      patientTypes: ["Patients with gum disease", "Patients referred by general dentists", "Patients needing implant placement", "Adults with bleeding or receding gums"],
      growthFocus: "Build GP referral networks, attract direct-access patients, dominate local gum disease searches",
      avgPatientValue: "$1,800"
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/woFUFmSxhgHLUyTo.png",
      title: "Endodontics",
      tagline: "Saving Teeth. Relieving Pain.",
      desc: "Endodontists specialize in diagnosing and treating diseases of the dental pulp and root canal system. Root canal therapy is one of the most commonly performed dental procedures, making endodontics a high-volume referral specialty.",
      procedures: ["Root Canal Therapy", "Root Canal Retreatment", "Apicoectomy (Root-End Surgery)", "Pulp Capping", "Cracked Tooth Treatment", "Traumatic Dental Injury Treatment", "Diagnosis of Tooth Pain", "Internal Bleaching"],
      patientTypes: ["Patients with severe tooth pain", "Patients referred by general dentists", "Patients with infected or abscessed teeth", "Patients needing retreatment of failed root canals"],
      growthFocus: "Build strong GP referral networks, capture emergency pain patients, dominate local root canal searches",
      avgPatientValue: "$1,200"
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/qANZOjHlFCcayAsG.png",
      title: "Pediatric Dentistry",
      tagline: "Building Healthy Smiles from Day One",
      desc: "Pediatric dentists specialize in the oral health of children from infancy through adolescence. Building a loyal patient base of families is the cornerstone of a thriving pediatric dental practice.",
      procedures: ["Baby Teeth Cleanings & Exams", "Fluoride Treatments", "Dental Sealants", "Space Maintainers", "Early Orthodontic Evaluation", "Tooth-Colored Fillings", "Pulpotomy (Baby Root Canal)", "Dental Emergencies for Children"],
      patientTypes: ["Infants and toddlers", "School-age children", "Teenagers", "Children with special needs"],
      growthFocus: "Attract families with young children, build reputation as the trusted kids' dentist, reduce patient drop-off",
      avgPatientValue: "$900"
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/iTgceqtSLqLOWeyy.png",
      title: "Prosthodontics",
      tagline: "Restoring Function and Aesthetics",
      desc: "Prosthodontists are the specialists in the restoration and replacement of teeth. They handle the most complex restorative cases, from full-mouth reconstruction to implant-supported prosthetics.",
      procedures: ["Complete & Partial Dentures", "Dental Bridges", "Dental Crowns", "Full-Mouth Reconstruction", "Implant-Supported Prosthetics", "Veneers & Laminates", "Maxillofacial Prosthetics", "Occlusal (Bite) Rehabilitation"],
      patientTypes: ["Patients with multiple missing teeth", "Patients needing full-mouth reconstruction", "Patients referred for complex restorations", "Patients with congenital dental defects"],
      growthFocus: "Build GP and specialist referral networks, attract high-value full-mouth reconstruction cases",
      avgPatientValue: "$6,000"
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663082775454/vTEcNtMTylllVefa.png",
      title: "Sedation Dentistry",
      tagline: "Comfortable Dentistry for Anxious Patients",
      desc: "Sedation dentistry practices serve the estimated 36% of Americans who experience dental anxiety or phobia. Offering sedation options dramatically expands the patient base and allows for longer, more productive appointments.",
      procedures: ["Nitrous Oxide (Laughing Gas)", "Oral Conscious Sedation", "IV Sedation", "General Anesthesia", "Anxiety Management Consultations", "Sedation for Complex Procedures", "Pediatric Sedation", "Sedation for Special Needs Patients"],
      patientTypes: ["Dental phobia patients", "Patients with severe anxiety", "Patients needing multiple procedures", "Special needs patients"],
      growthFocus: "Target dental anxiety patients actively searching for sedation options, build reputation for gentle care",
      avgPatientValue: "$2,500"
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-background to-blue-50/30 border-b border-border">
        <div className="container">
          <motion.div className="text-center max-w-3xl mx-auto" {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-wider uppercase mb-6">
              10 Dental Specialties
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Every Dental Specialty. One Growth Partner.</h1>
            <p className="text-xl text-muted-foreground">
              From general family dentistry to complex prosthodontic reconstruction — Propel Dental has a proven, transparent growth playbook for every dental specialty in the USA. Full visibility. Clear results. No black box.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialties Detail */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="space-y-16">
            {specialties.map((specialty, i) => (
              <motion.div
                key={i}
                id={specialty.title.toLowerCase().replace(/\s+/g, '-')}
                className={`grid md:grid-cols-2 gap-12 items-start py-12 border-b border-border last:border-0 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Left: Info */}
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <IconImage src={specialty.icon} alt={specialty.title} size={56} />
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-primary">{specialty.title}</h2>
                      <p className="text-secondary font-semibold">{specialty.tagline}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{specialty.desc}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 border-l-4 border-primary">
                      <h4 className="font-bold text-primary text-sm mb-1">Avg. Patient Value</h4>
                      <p className="text-2xl font-black text-primary">{specialty.avgPatientValue}</p>
                    </div>
                    <div className="bg-orange-50 p-4 border-l-4 border-secondary">
                      <h4 className="font-bold text-secondary text-sm mb-1">Growth Focus</h4>
                      <p className="text-sm text-muted-foreground">{specialty.growthFocus}</p>
                    </div>
                  </div>

                  <IntakeForm trigger={
                    <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-none px-6">
                      Get a {specialty.title} Growth Brief <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  } />
                </div>

                {/* Right: Procedures & Patient Types */}
                <div className={`grid grid-cols-1 gap-6 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="bg-white border border-border p-6 shadow-sm">
                    <h3 className="font-bold text-primary mb-4 uppercase tracking-wide text-sm">Key Procedures & Services</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {specialty.procedures.map((proc, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <Check className="h-3.5 w-3.5 text-secondary shrink-0" />
                          <span className="text-muted-foreground">{proc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white border border-border p-6 shadow-sm">
                    <h3 className="font-bold text-primary mb-4 uppercase tracking-wide text-sm">Patient Types We Target</h3>
                    <div className="space-y-2">
                      {specialty.patientTypes.map((patient, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <div className="h-2 w-2 rounded-full bg-secondary shrink-0" />
                          <span className="text-muted-foreground">{patient}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't see your specialty?</h2>
          <p className="text-blue-100 text-lg mb-8">
            We work with all dental specialties and multi-specialty practices. Contact us to discuss your specific needs.
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
