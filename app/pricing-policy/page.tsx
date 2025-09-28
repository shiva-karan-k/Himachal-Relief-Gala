"use client";

import { useRouter } from 'next/navigation';
import FloatingNav from '@/components/floating-nav';

export default function PricingPolicy() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070C14] via-[#0A1018] to-[#0E1826]">
      <FloatingNav />
      <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass rounded-2xl p-8">
          <h1 className="font-saira text-3xl font-bold text-white mb-8 text-center">
            Pricing Policy
          </h1>
          
          <div className="space-y-6 text-white/80">
            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                1. Donation Pricing
              </h2>
              <p className="mb-4">
                All donations are voluntary contributions to Samarthya Foundation for the Himachal Relief Fund. 
                There are no mandatory fees or charges for donations.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Small donations: ₹100, ₹200, ₹500, ₹800, ₹1000</li>
                <li>Family relief kits: ₹2,000 (standard) and ₹2,500 (larger families)</li>
                <li>Custom amounts: Any amount above ₹100</li>
                <li>All donations are eligible for 80G tax exemption</li>
              </ul>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                2. Event Ticket Pricing
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>General Entry:</strong> ₹200 per person</li>
                <li><strong>Patron Table:</strong> ₹2,000 for 10 guests</li>
                <li><strong>Corporate Table:</strong> ₹5,000 for 10 guests with branding</li>
              </ul>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                3. Payment Processing
              </h2>
              <p className="mb-4">
                All payments are processed securely through Razorpay. No additional processing fees are charged to donors.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accepted payment methods: Credit/Debit cards, UPI, Net Banking, Wallets</li>
                <li>All transactions are secure and encrypted</li>
                <li>Payment receipts are provided immediately</li>
                <li>80G tax certificates issued within 30 days</li>
              </ul>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                4. Currency and Taxes
              </h2>
              <p className="mb-4">
                All prices are in Indian Rupees (INR). Donations to Samarthya Foundation are eligible for tax deduction under Section 80G of the Income Tax Act, 1961.
              </p>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                5. Contact Information
              </h2>
              <p>
                For pricing inquiries, contact us at: <a href="tel:+919258729273" className="text-[#6DE1FF] hover:underline">+91 92587 29273</a>
              </p>
            </section>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
