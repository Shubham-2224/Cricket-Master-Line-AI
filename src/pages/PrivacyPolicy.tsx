import React from 'react';
import { ArrowLeft, Shield, AlertTriangle, Mail } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#10091F] text-[#FFFFFF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-[#BDB4C9] hover:text-white hover:bg-white/10 transition-colors mb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E879F9]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Header */}
        <div className="space-y-3 mb-10 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-xs font-semibold text-[#E879F9] border border-white/10">
            <Shield className="w-3.5 h-3.5" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#8E83A2]">
            Application: {siteConfig.appName} • Last Updated: {siteConfig.legal.lastUpdated}
          </p>
        </div>

        {/* Pre-publication Draft Notice */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm leading-relaxed mb-10 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="block text-amber-300 font-semibold mb-1">
              Draft Legal Notice for Pre-Launch Review:
            </strong>
            The following policy serves as an initial structural template for Cricket Master Line AI. Specific
            data collection routines, analytics SDK configurations, and legal entity details must be verified
            by legal counsel before commercial release on app marketplaces.
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-[#BDB4C9] text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">1. Introduction &amp; Purpose</h2>
            <p>
              This Privacy Policy explains how {siteConfig.appName} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the application&rdquo;)
              handles user information when you use our mobile application and related introductory website.
              We are committed to respecting user privacy and maintaining transparency regarding any data processed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">2. Scope: Introductory Website vs. Mobile App</h2>
            <p>
              This website serves exclusively as an informational presentation for the {siteConfig.appName} mobile application.
              This website does not require account creation, does not process payments, and does not maintain user databases.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">3. Information That May Be Collected Inside the Mobile App</h2>
            <p>
              Depending on the released version of the mobile application, the following categories of information may be processed:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li><strong className="text-white">Technical &amp; Device Identifiers:</strong> Device model, operating system version, crash diagnostics, and anonymous session statistics to maintain stability.</li>
              <li><strong className="text-white">App Preferences:</strong> Selected favorite teams, notification toggles, or analysis view configurations stored locally on your device.</li>
              <li><strong className="text-white">Non-personal Analytics:</strong> Anonymous aggregated telemetry to understand which features are utilized.</li>
            </ul>
            <p className="text-xs text-[#8E83A2] italic pt-1">
              [Confirmation Required: Specify exact third-party analytics libraries such as Firebase Analytics before store submission.]
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">4. Artificial Intelligence &amp; Analytical Processing</h2>
            <p>
              The AI analytical features within Cricket Master Line AI evaluate match patterns, momentum dynamics, and cricket performance telemetry.
              These models operate on cricket-related information and do not ingest, profile, or sell your private personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">5. Third-Party Services &amp; Distribution Stores</h2>
            <p>
              When you download the application through official stores (such as Google Play Store or Apple App Store),
              your installation is subject to the respective store terms and policies. We do not sell or monetize personal user data with third-party data brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">6. Data Security and Retention</h2>
            <p>
              We implement reasonable security practices to safeguard any telemetry or settings information. Data stored locally on your device can be removed at any time by uninstalling the application or clearing app data in your device settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">7. Children&apos;s Privacy</h2>
            <p>
              Cricket Master Line AI is designed as a sports companion and informational resource for general audiences.
              We do not knowingly collect personal information from children under the age of 13.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">8. Contact &amp; Inquiries</h2>
            <p>
              For questions, clarifications, or feedback regarding this Privacy Policy, please reach out via our contact email:
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#E879F9]" />
              <span className="text-white font-medium">{siteConfig.contact.email}</span>
            </div>
            <p className="text-xs text-[#8E83A2]">
              Entity: {siteConfig.legal.entityName} (Draft placeholder)
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
