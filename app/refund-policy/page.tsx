"use client";

import { useRouter } from 'next/navigation';
import FloatingNav from '@/components/floating-nav';

export default function RefundPolicy() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070C14] via-[#0A1018] to-[#0E1826]">
      <FloatingNav />
      <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass rounded-2xl p-8">
          <h1 className="font-saira text-3xl font-bold text-white mb-8 text-center">
            Cancellation & Refund Policy
          </h1>
          
          <div className="space-y-6 text-white/80">
            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                1. Donation Refunds
              </h2>
              <p className="mb-4">
                Donations to Samarthya Foundation are generally non-refundable as they are charitable contributions. 
                However, we may consider refunds in the following exceptional circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Technical errors resulting in duplicate payments</li>
                <li>Unauthorized transactions on your account</li>
                <li>Processing errors on our end</li>
                <li>Donations made by mistake within 24 hours (case-by-case basis)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                2. Event Ticket Cancellations
              </h2>
              <p className="mb-4">Event tickets are generally non-refundable, but exceptions include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Event cancellation by organizers (full refund)</li>
                <li>Event postponement (refund or ticket transfer)</li>
                <li>Venue changes making attendance impossible (partial refund)</li>
                <li>Technical errors in ticket purchase (within 2 hours)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                3. Refund Process
              </h2>
              <p className="mb-4">To request a refund:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Contact us within 48 hours of the transaction</li>
                <li>Provide transaction ID and reason for refund</li>
                <li>Submit required documentation if applicable</li>
                <li>Allow 7-14 business days for processing</li>
                <li>Refunds will be credited to the original payment method</li>
              </ol>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                4. Processing Time
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Approved refunds: 7-14 business days</li>
                <li>Bank transfers: 3-5 additional business days</li>
                <li>Credit card refunds: 5-10 business days</li>
                <li>UPI refunds: 1-3 business days</li>
              </ul>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                5. Non-Refundable Items
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Donations to charitable causes (except technical errors)</li>
                <li>Event tickets after the event date</li>
                <li>Digital certificates and receipts</li>
                <li>Processing fees (if any)</li>
                <li>Third-party service charges</li>
              </ul>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                6. Dispute Resolution
              </h2>
              <p className="mb-4">
                If you are not satisfied with our refund decision, you may:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request a review with additional documentation</li>
                <li>Escalate to our management team</li>
                <li>Contact relevant consumer protection authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                7. Contact for Refunds
              </h2>
              <p>
                For refund requests and queries, contact us at: <a href="tel:+919258729273" className="text-[#6DE1FF] hover:underline">+91 92587 29273</a>
              </p>
            </section>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
