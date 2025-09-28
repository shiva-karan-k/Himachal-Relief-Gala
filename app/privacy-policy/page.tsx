"use client";

import { useRouter } from 'next/navigation';
import FloatingNav from '@/components/floating-nav';

export default function PrivacyPolicy() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070C14] via-[#0A1018] to-[#0E1826]">
      <FloatingNav />
      <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass rounded-2xl p-8">
          <h1 className="font-saira text-3xl font-bold text-white mb-8 text-center">
            Privacy Policy
          </h1>
          
          <div className="space-y-6 text-white/80">
            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-4">We collect information you provide directly to us, such as:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, and phone number for donations</li>
                <li>Payment information (processed securely by Razorpay)</li>
                <li>Event ticket purchase details</li>
                <li>Communication preferences</li>
                <li>Website usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process donations and issue tax certificates</li>
                <li>Send event tickets and updates</li>
                <li>Provide customer support</li>
                <li>Improve our website and services</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Send periodic updates about our charitable activities (with consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                3. Information Sharing
              </h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information only:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With payment processors (Razorpay) for transaction processing</li>
                <li>With government authorities for tax compliance</li>
                <li>With legal requirements or court orders</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                4. Data Security
              </h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. All payment transactions are encrypted and processed securely.
              </p>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                5. Cookies and Tracking
              </h2>
              <p className="mb-4">
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, 
                and understand user preferences. You can control cookie settings through your browser.
              </p>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                6. Your Rights
              </h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                7. Contact Us
              </h2>
              <p>
                For privacy-related queries or requests, contact us at: <a href="tel:+919258729273" className="text-[#6DE1FF] hover:underline">+91 92587 29273</a>
              </p>
            </section>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
