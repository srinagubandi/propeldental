import Layout from "@/components/Layout";
import ROICalculator from "@/components/ROICalculator";

export default function Calculator() {
  return (
    <Layout>
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              Growth Estimator
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
              Full-Arch{" "}
              <span className="text-primary">ROI Estimator</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              See what a transparent, custom-built marketing program could mean for your
              implant practice. Adjust the inputs below to model your potential growth.
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>
    </Layout>
  );
}
