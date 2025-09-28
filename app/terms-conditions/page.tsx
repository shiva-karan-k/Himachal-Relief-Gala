"use client";

import { useRouter } from 'next/navigation';
import FloatingNav from '@/components/floating-nav';

export default function TermsConditions() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070C14] via-[#0A1018] to-[#0E1826]">
      <FloatingNav />
      <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass rounded-2xl p-8">
          <h1 className="font-saira text-3xl font-bold text-white mb-8 text-center">
            Terms & Conditions
          </h1>
          
          <div className="space-y-6 text-white/80">
            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                2. Donation Terms
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All donations are voluntary and non-refundable unless specified otherwise</li>
                <li>Donations are used exclusively for the stated charitable purposes</li>
                <li>Samarthya Foundation reserves the right to refuse donations</li>
                <li>Donors will receive 80G tax exemption certificates within 30 days</li>
                <li>Donation amounts are in Indian Rupees (INR)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                3. Event Ticket Terms
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Event tickets are non-transferable and non-refundable</li>
                <li>Entry to events is subject to venue capacity and safety regulations</li>
                <li>Event organizers reserve the right to refuse entry</li>
                <li>Tickets must be presented at the venue for entry</li>
                <li>Event details may be subject to change with prior notice</li>
              </ul>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                4. Privacy and Data Protection
              </h2>
              <p className="mb-4">
                We collect and process personal data in accordance with our Privacy Policy and applicable data protection laws. 
                Your personal information is used solely for processing donations, issuing tax certificates, and event management.
              </p>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                5. Limitation of Liability
              </h2>
              <p className="mb-4">
                Samarthya Foundation shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                resulting from your use of this website or services.
              </p>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                6. Governing Law
              </h2>
              <p className="mb-4">
                These terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes shall be subject to the jurisdiction of courts in Himachal Pradesh.
              </p>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                7. Contact Information
              </h2>
              <p>
                For any queries regarding these terms, contact us at: <a href="tel:+919258729273" className="text-[#6DE1FF] hover:underline">+91 92587 29273</a>
              </p>
            </section>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
