/**
 * PrivacyPolicy.tsx
 * -----------------
 * Privacy Policy page for Propel Dental (propel.dental).
 * Content sourced from the official Propel Practice Marketing LLC privacy policy document.
 * Effective Date: Jan 1st, 2026
 *
 * This page covers:
 *  - Information collection practices
 *  - SMS messaging & TCPA compliance
 *  - Data sharing & disclosure policies
 *  - Data security measures
 *  - Cookies & tracking
 *  - User rights & choices
 *  - Contact information
 */

import Layout from "@/components/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      {/* PAGE HEADER */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-4">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Propel Practice Marketing LLC &mdash; Effective Date: January 1, 2026
            </p>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl prose prose-invert prose-lg leading-relaxed">

            {/* IMPORTANT SMS NOTICE */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-10">
              <h2 className="text-xl font-bold text-primary mb-3 mt-0">
                Important Notice Regarding Text Messaging Data
              </h2>
              <p className="text-muted-foreground mb-0">
                Propel Practice Marketing LLC ("we," "us," or "our") <strong>DOES NOT</strong> share
                customer opt-in information, including phone numbers and consent records, with any
                affiliates or third parties for marketing, promotional, or any other purposes
                unrelated to providing our direct services. All text messaging originator opt-in data
                is kept strictly confidential.
              </p>
            </div>

            {/* SECTION 1 — Information We Collect */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground mb-4">
              We collect the following types of information:
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Personal Information</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li>Name, email address, phone number, physical address</li>
              <li>Payment information when you make a purchase or request a quote</li>
              <li>Opt-in records and timestamps for all communication channels (SMS, email, etc.)</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Non-Personal Information</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li>IP address, browser type, device information</li>
              <li>Website usage patterns and analytics</li>
              <li>Cookies and similar technologies</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Customer Communication</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li>Records of inquiries and service requests</li>
              <li>Appointment details and preferences</li>
              <li>Service history and feedback</li>
            </ul>

            {/* SECTION 2 — How We Use Your Information */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-4">
              We use collected data for:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li>Providing and improving our services</li>
              <li>Processing transactions and payments</li>
              <li>Communicating with you about your inquiries, appointments, and promotions</li>
              <li>Enhancing website functionality and user experience</li>
              <li>Ensuring security and fraud prevention</li>
              <li>Maintaining records of your communication preferences and consent</li>
            </ul>

            {/* SECTION 3 — SMS Messaging & Compliance */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              3. SMS Messaging &amp; Compliance
            </h2>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
              Text Message Program Terms &amp; Conditions
            </h3>
            <p className="text-muted-foreground mb-4">
              By opting into our SMS messaging services, you agree to receive text messages related
              to our services, including appointment reminders, customer support, and important updates.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Opt-In &amp; Consent</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li>You will only receive messages if you have explicitly opted in</li>
              <li>We maintain timestamped records of all opt-in actions</li>
              <li>We comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Opt-Out Instructions</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li>You can cancel SMS notifications at any time by replying "STOP"</li>
              <li>You will receive a final confirmation message, and no further messages will be sent unless you re-opt in</li>
              <li>All opt-out requests are processed immediately</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Message Frequency &amp; Content</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li>Message frequency varies based on your interactions with our business</li>
              <li>Messages will be directly related to the services you have requested</li>
              <li>We do not send promotional content without specific consent</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Help &amp; Support</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li>Reply "HELP" for assistance or contact us at{" "}
                <a href="mailto:Mike@Propel.Dental" className="text-primary hover:underline">
                  Mike@Propel.Dental
                </a>
              </li>
              <li>Customer support is available during regular business hours</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Carrier Information</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li>Standard message and data rates may apply</li>
              <li>Carriers are not liable for delayed or undelivered messages</li>
              <li>Supported carriers include AT&T, Verizon, T-Mobile, Sprint, and most regional carriers</li>
            </ul>

            {/* SMS Data Protection Statement */}
            <div className="bg-muted/30 border border-border rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 mt-0">
                SMS Data Protection Statement
              </h3>
              <p className="text-muted-foreground mb-3">
                No mobile information will be shared with third parties/affiliates for
                marketing/promotional purposes. Information sharing to subcontractors in support
                services, such as customer service, is permitted. All other use case categories
                exclude text messaging originator opt-in data and consent; this information will not
                be shared with any third parties.
              </p>
              <p className="text-muted-foreground mb-0">
                We implement strict data protection measures to safeguard your SMS opt-in information
                and consent records.
              </p>
            </div>

            {/* SECTION 4 — Information Sharing & Disclosure */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              4. Information Sharing &amp; Disclosure
            </h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, rent, or trade personal information. We may share information with:
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Service Providers</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li>Third-party vendors who assist in our operations (e.g., payment processing, appointment scheduling)</li>
              <li>SMS aggregators and providers solely for the purpose of delivering messages you've consented to receive</li>
              <li>All service providers are contractually obligated to maintain confidentiality and security</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Legal Compliance</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li>If required by law, legal process, or to protect our rights</li>
              <li>In response to valid law enforcement requests or court orders</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Business Transfers</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li>In case of mergers, acquisitions, or sale of assets</li>
              <li>In such cases, your data remains protected under the terms of this policy</li>
            </ul>

            <p className="text-muted-foreground italic mb-4">
              All the above categories exclude text messaging originator opt-in data and consent;
              this information will not be shared with any third parties, excluding aggregators and
              providers of the Text Message services.
            </p>

            {/* SECTION 5 — Data Security */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              5. Data Security
            </h2>
            <p className="text-muted-foreground mb-4">
              We implement and maintain reasonable security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Secure access controls and authentication mechanisms</li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection</li>
              <li>Breach notification protocols in accordance with applicable laws</li>
              <li>Secure backup systems and disaster recovery procedures</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Despite these measures, no method of transmission over the Internet or electronic
              storage is 100% secure. We strive to use commercially acceptable means to protect your
              personal information but cannot guarantee absolute security.
            </p>

            {/* SECTION 6 — Cookies & Tracking Technologies */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              6. Cookies &amp; Tracking Technologies
            </h2>
            <p className="text-muted-foreground mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li>Analyze site traffic and user behavior</li>
              <li>Remember your preferences</li>
              <li>Improve website functionality and user experience</li>
              <li>Measure the effectiveness of our services</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              You may control cookies through your browser settings. Disabling cookies may limit
              your ability to use certain features of our website.
            </p>

            {/* SECTION 7 — Your Rights & Choices */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              7. Your Rights &amp; Choices
            </h2>
            <p className="text-muted-foreground mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
              <li>Access, update, or delete your personal information</li>
              <li>Opt-out of marketing emails by clicking "unsubscribe" in our emails</li>
              <li>Opt-out of SMS messages by replying "STOP"</li>
              <li>Request information on how we process your data</li>
              <li>Withdraw consent at any time for future communications</li>
              <li>Lodge a complaint with a supervisory authority if you believe your rights have been violated</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              To exercise these rights, please contact us using the information in Section 10.
            </p>

            {/* SECTION 8 — Third-Party Links */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              8. Third-Party Links
            </h2>
            <p className="text-muted-foreground mb-4">
              Our website may contain links to third-party websites. We are not responsible for their
              privacy practices and encourage you to review their policies. This privacy policy
              applies only to information collected by Propel Practice Marketing LLC.
            </p>

            {/* SECTION 9 — Changes to This Privacy Policy */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-muted-foreground mb-4">
              We may update this policy periodically. The latest version will always be available on
              our website with the effective date. For significant changes, we will notify you by
              email or through a notice on our website.
            </p>

            {/* SECTION 10 — Contact Us */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              10. Contact Us
            </h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about this Privacy Policy or how your information is handled,
              contact us at:
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
                <a href="mailto:Mike@Propel.Dental" className="text-primary hover:underline">
                  Mike@Propel.Dental
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
              By using our website and services, you consent to this Privacy Policy.
            </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
