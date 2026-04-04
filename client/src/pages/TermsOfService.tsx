/**
 * TermsOfService.tsx
 * ------------------
 * Terms of Service page for Propel Dental (propel.dental).
 * Content sourced from the official Propel Practice Marketing LLC terms and conditions document.
 * Effective Date: Jan 1st, 2026
 *
 * This page covers:
 *  - SMS Messaging Terms & Compliance
 *  - General Terms of Service
 *  - Intellectual Property Rights
 *  - Disclaimers & Indemnification
 *  - Online Commerce
 *  - Registration & Passwords
 *  - Termination
 *  - Governing Law
 *  - Contact information
 */

import Layout from "@/components/Layout";

export default function TermsOfService() {
  return (
    <Layout>
      {/* PAGE HEADER */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-4">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Propel Practice Marketing LLC &mdash; Effective Date: January 1, 2026
            </p>
          </div>
        </div>
      </section>

      {/* TERMS CONTENT */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl prose prose-invert prose-lg leading-relaxed">

            {/* ============================================================
                SMS MESSAGING TERMS & COMPLIANCE
                ============================================================ */}
            <h2 className="text-2xl font-bold text-foreground mt-0 mb-4">
              SMS Messaging Terms &amp; Compliance
            </h2>

            {/* 1. Program Description */}
            <h3 className="text-lg font-semibold text-foreground mt-8 mb-2">
              1. Program Description
            </h3>
            <p className="text-muted-foreground mb-4">
              This messaging program sends appointment confirmation and reminder messages to
              customers who have booked an appointment with Propel Practice Marketing LLC through our
              website at Propel.Dental, or via our scheduling forms, and have explicitly opted in to
              receive SMS notifications. Opt-in is collected via web forms with a dedicated checkbox
              for SMS consent. Messages include scheduling confirmations, appointment reminders,
              rescheduling updates, and customer support communications.
            </p>

            {/* 2. Cancellation Instructions */}
            <h3 className="text-lg font-semibold text-foreground mt-8 mb-2">
              2. Cancellation Instructions
            </h3>
            <p className="text-muted-foreground mb-4">
              You can cancel the SMS service at any time. Simply text "STOP" to the same number that
              sent you messages. Upon sending "STOP," we will confirm your unsubscribe status via
              SMS. Following this confirmation, you will no longer receive SMS messages from us. To
              rejoin, sign up as you did initially, and we will resume sending SMS messages to you.
            </p>

            {/* 3. Support Information */}
            <h3 className="text-lg font-semibold text-foreground mt-8 mb-2">
              3. Support Information
            </h3>
            <p className="text-muted-foreground mb-4">
              If you experience issues with the messaging program, reply with the keyword "HELP" for
              more assistance, or reach out directly to{" "}
              <a href="mailto:Mike@Propel.Dental" className="text-primary hover:underline">
                Mike@Propel.Dental
              </a>{" "}
              or call{" "}
              <a href="tel:9292226167" className="text-primary hover:underline">
                (929) 222-6167
              </a>{" "}
              during business hours.
            </p>

            {/* 4. Carrier Liability */}
            <h3 className="text-lg font-semibold text-foreground mt-8 mb-2">
              4. Carrier Liability
            </h3>
            <p className="text-muted-foreground mb-4">
              Carriers are not liable for delayed or undelivered messages.
            </p>

            {/* 5. Message & Data Rates */}
            <h3 className="text-lg font-semibold text-foreground mt-8 mb-2">
              5. Message &amp; Data Rates
            </h3>
            <p className="text-muted-foreground mb-4">
              Message and data rates may apply for messages sent to you from us and to us from you.
              Message frequency varies based on your service usage and appointment schedule. For
              questions about your text plan or data plan, contact your wireless provider.
            </p>

            {/* 6. Supported Carriers */}
            <h3 className="text-lg font-semibold text-foreground mt-8 mb-2">
              6. Supported Carriers
            </h3>
            <p className="text-muted-foreground mb-4">
              Our SMS program works with all major U.S. wireless carriers, including AT&T, T-Mobile,
              Verizon, Sprint, and most regional carriers.
            </p>

            {/* 7. Age Restriction */}
            <h3 className="text-lg font-semibold text-foreground mt-8 mb-2">
              7. Age Restriction
            </h3>
            <p className="text-muted-foreground mb-4">
              You must be 18 years or older to participate in our SMS program.
            </p>

            {/* 8. Privacy Policy Reference */}
            <h3 className="text-lg font-semibold text-foreground mt-8 mb-2">
              8. Privacy Policy
            </h3>
            <p className="text-muted-foreground mb-4">
              For privacy-related inquiries, please refer to our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>.
            </p>

            <p className="text-muted-foreground mb-4">
              We comply with all applicable laws and regulations, including the Telephone Consumer
              Protection Act (TCPA) and CTIA guidelines, regarding the use of SMS communications.
            </p>

            {/* ============================================================
                GENERAL TERMS
                ============================================================ */}
            <div className="border-t border-border my-12"></div>

            <h2 className="text-2xl font-bold text-foreground mt-0 mb-4">
              General Terms
            </h2>
            <p className="text-muted-foreground mb-4">
              This website (the "Site") is owned and operated by Propel Practice Marketing LLC
              ("COMPANY," "we" or "us"). By using the Site, you agree to be bound by these Terms of
              Service and to use the Site in accordance with these Terms of Service, our Privacy
              Policy, and any additional terms and conditions that may apply to specific sections of
              the Site or to products and services available through the Site or from Propel Practice
              Marketing LLC.
            </p>
            <p className="text-muted-foreground mb-4">
              Accessing the Site, in any manner, whether automated or otherwise, constitutes use of
              the Site and your agreement to be bound by these Terms of Service.
            </p>
            <p className="text-muted-foreground mb-4">
              We reserve the right to change these Terms of Service or to impose new conditions on
              the use of the Site from time to time, in which case we will post the revised Terms of
              Service on this website. By continuing to use the Site after we post any such changes,
              you accept the Terms of Service, as modified.
            </p>

            {/* ============================================================
                INTELLECTUAL PROPERTY RIGHTS
                ============================================================ */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              Intellectual Property Rights
            </h2>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
              Our Limited License to You
            </h3>
            <p className="text-muted-foreground mb-4">
              This Site and all the materials available on the Site are the property of Propel
              Practice Marketing LLC and/or our affiliates or licensors and are protected by
              copyright, trademark, and other intellectual property laws. The Site is provided solely
              for your personal non-commercial use.
            </p>
            <p className="text-muted-foreground mb-4">
              You may not use the Site or the materials available on the Site in a manner that
              constitutes an infringement of our rights or that has not been authorized by us.
            </p>
            <p className="text-muted-foreground mb-4">
              Unless explicitly authorized, you may not modify, copy, reproduce, republish, upload,
              post, transmit, translate, sell, create derivative works, exploit, or distribute in any
              manner or medium any material from the Site. However, you may download and/or print one
              copy of individual pages for your personal, non-commercial use, provided that you keep
              intact all copyright and other proprietary notices.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
              Your License to Us
            </h3>
            <p className="text-muted-foreground mb-4">
              By posting or submitting any material (including comments, blog entries, social media
              posts, photos, and videos) to us via the Site, internet groups, or other digital
              venues, you represent that you own the material or have obtained the necessary
              permissions. You grant us a royalty-free, perpetual, irrevocable, non-exclusive,
              worldwide license to use, modify, transmit, sell, exploit, create derivative works
              from, distribute, and publicly perform or display such material.
            </p>

            {/* ============================================================
                DISCLAIMERS
                ============================================================ */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              Disclaimers
            </h2>
            <p className="text-muted-foreground mb-4">
              Throughout the Site, we may provide links and pointers to Internet sites maintained by
              third parties. Our linking to such third-party sites does not imply an endorsement or
              sponsorship of such sites or the information, products, or services offered on or
              through the sites.
            </p>
            <p className="text-muted-foreground mb-4">
              The information, products, and services offered on or through the Site are provided "as
              is" and without warranties of any kind, either express or implied. To the fullest
              extent permissible pursuant to applicable law, we disclaim all warranties, including
              implied warranties of merchantability and fitness for a particular purpose.
            </p>
            <p className="text-muted-foreground mb-4">
              You agree at all times to indemnify and hold harmless Propel Practice Marketing LLC,
              its affiliates, and their respective officers, directors, agents, and employees from
              any claims, causes of action, damages, liabilities, costs, and expenses arising out of
              or related to your breach of any obligation, warranty, or representation under these
              Terms of Service.
            </p>

            {/* ============================================================
                ONLINE COMMERCE
                ============================================================ */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              Online Commerce
            </h2>
            <p className="text-muted-foreground mb-4">
              Certain sections of the Site may allow you to purchase products and services from
              third-party vendors. We are not responsible for the quality, accuracy, timeliness,
              reliability, or any other aspect of these products and services. If you make a purchase
              from a third party linked through the Site, the information obtained during your visit,
              including payment information, may be collected by both the merchant and us.
            </p>
            <p className="text-muted-foreground mb-4">
              Your participation in any dealings with third-party vendors is solely between you and
              the third party. Propel Practice Marketing LLC shall not be responsible for any loss or
              damage incurred as a result of such dealings.
            </p>

            {/* ============================================================
                REGISTRATION & PASSWORDS
                ============================================================ */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              Registration &amp; Passwords
            </h2>
            <p className="text-muted-foreground mb-4">
              To access certain features of the Site, you may be required to register and create an
              account. You agree to provide accurate, current, and complete information during the
              registration process. You are responsible for maintaining the confidentiality of your
              login credentials and for all activities conducted under your account.
            </p>
            <p className="text-muted-foreground mb-4">
              If you suspect unauthorized use of your account, notify us immediately at{" "}
              <a href="mailto:Mike@Propel.Dental" className="text-primary hover:underline">
                Mike@Propel.Dental
              </a>
              . We are not liable for any loss or damage arising from your failure to comply with
              this obligation.
            </p>

            {/* ============================================================
                TERMINATION
                ============================================================ */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              Termination
            </h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to terminate or suspend your access to the Site, without notice,
              if we determine that you have violated these Terms of Service or engaged in conduct
              that we deem inappropriate or unlawful. Upon termination, you must cease all use of the
              Site and any content obtained from it.
            </p>

            {/* ============================================================
                GOVERNING LAW
                ============================================================ */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              Governing Law
            </h2>
            <p className="text-muted-foreground mb-4">
              These Terms of Service shall be governed by and construed in accordance with the laws
              of the state in which Propel Practice Marketing LLC operates. Any dispute arising under
              these Terms shall be resolved exclusively through binding arbitration in that
              jurisdiction.
            </p>

            {/* ============================================================
                CHANGES TO TERMS
                ============================================================ */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              Changes to Terms of Service
            </h2>
            <p className="text-muted-foreground mb-4">
              We may update these Terms of Service from time to time. The latest version will always
              be available on our website with the effective date.
            </p>

            {/* ============================================================
                CONTACT US
                ============================================================ */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground mb-4">
              For any questions regarding these Terms of Service, please contact us at:
            </p>
            <div className="bg-muted/30 border border-border rounded-lg p-6 mb-8">
              <p className="text-foreground font-semibold mb-2">Propel Practice Marketing LLC</p>
              <p className="text-muted-foreground mb-1">
                Phone:{" "}
                <a href="tel:9292226167" className="text-primary hover:underline">
                  (929) 222-6167
                </a>
              </p>
              <p className="text-muted-foreground mb-1">
                Email:{" "}
                <a href="mailto:Mike@propel.dental" className="text-primary hover:underline">
                  Mike@propel.dental
                </a>
              </p>
              <p className="text-muted-foreground mb-0">
                Website:{" "}
                <a href="https://propel.dental" className="text-primary hover:underline">
                  Propel.Dental
                </a>
              </p>
            </div>

            <p className="text-muted-foreground text-sm italic">
              By using our website and services, you consent to these Terms of Service.
            </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
