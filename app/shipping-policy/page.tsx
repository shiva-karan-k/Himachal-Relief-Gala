"use client";

import { useRouter } from 'next/navigation';
import FloatingNav from '@/components/floating-nav';

export default function ShippingPolicy() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070C14] via-[#0A1018] to-[#0E1826]">
      <FloatingNav />
      <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass rounded-2xl p-8">
          <h1 className="font-saira text-3xl font-bold text-white mb-8 text-center">
            Shipping & Delivery Policy
          </h1>
          
          <div className="space-y-6 text-white/80">
            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                1. Relief Kit Distribution
              </h2>
              <p className="mb-4">
                As this is a charitable relief fund, we do not ship physical products. Instead, your donations fund relief kits that are distributed directly to affected families in Himachal Pradesh.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Relief kits are distributed through local panchayats</li>
                <li>Distribution happens within 15-30 days of fund collection</li>
                <li>Real-time updates provided on our website</li>
                <li>Photographic evidence of distribution shared with donors</li>
              </ul>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                2. Event Tickets
              </h2>
              <p className="mb-4">
                Event tickets are digital and delivered via email immediately after payment confirmation.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Digital tickets sent to registered email within 5 minutes</li>
                <li>No physical delivery required</li>
                <li>Mobile-friendly ticket format</li>
                <li>Entry verification at venue using mobile ticket</li>
              </ul>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                3. Tax Certificates
              </h2>
              <p className="mb-4">
                80G tax exemption certificates are delivered digitally.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Digital certificates sent via email within 30 days</li>
                <li>Printable format for tax filing</li>
                <li>Valid for current financial year</li>
                <li>No physical delivery required</li>
              </ul>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                4. Geographic Coverage
              </h2>
              <p className="mb-4">
                Relief distribution is focused on flood and landslide affected areas in Himachal Pradesh, specifically Kullu district.
              </p>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                5. Contact Information
              </h2>
              <p>
                For delivery-related inquiries, contact us at: <a href="tel:+919258729273" className="text-[#6DE1FF] hover:underline">+91 92587 29273</a>
              </p>
            </section>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
