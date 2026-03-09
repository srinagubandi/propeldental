import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import ROICalculator from "@/components/ROICalculator";

export default function Calculator() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-background to-blue-50/30 border-b border-border">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Dental Practice ROI Calculator</h1>
            <p className="text-xl text-muted-foreground">
              See how much additional revenue your dental practice could generate with Propel Dental's performance-based growth system. Select your specialty and enter your current metrics to get a personalized projection.
            </p>
          </motion.div>
          <ROICalculator />
        </div>
      </section>
    </Layout>
  );
}
