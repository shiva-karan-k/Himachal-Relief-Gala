import Link from 'next/link';
import { ArrowLeft, Shield, RefreshCw, FileText, Receipt } from 'lucide-react';

export default function Legal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070C14] via-[#0A1018] to-[#0E1826] text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-[#6DE1FF] hover:text-[#00E0C6] transition-colors mb-6 focus-ring rounded"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="font-saira text-3xl md:text-4xl font-bold text-white">
            Legal Information
          </h1>
        </div>

        {/* Privacy Policy */}
        <section id="privacy" className="mb-12">
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-6 h-6 text-[#6DE1FF]" />
              <h2 className="font-saira text-2xl font-semibold text-white">
                Privacy Policy
              </h2>
            </div>
            
            <div className="space-y-4 text-white/80">
              <p>
                <strong>Last updated:</strong> January 2025
              </p>
              
              <h3 className="text-white font-semibold text-lg mt-6">Information We Collect</h3>
              <p>
                We collect information you provide directly to us, such as when you make a donation, purchase tickets, or contact us. This may include your name, email address, phone number, payment information, and correspondence.
              </p>
              
              <h3 className="text-white font-semibold text-lg mt-6">How We Use Your Information</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Process donations and ticket purchases</li>
                <li>Send confirmation emails and donation receipts</li>
                <li>Provide customer support</li>
                <li>Send updates about our relief efforts (with consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h3 className="text-white font-semibold text-lg mt-6">Information Security</h3>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All payment processing is handled securely through Razorpay.
              </p>
              
              <h3 className="text-white font-semibold text-lg mt-6">Contact Us</h3>
              <p>
                If you have questions about this Privacy Policy, please contact us at privacy@himachalgala.org
              </p>
            </div>
          </div>
        </section>

        {/* Refund Policy */}
        <section id="refunds" className="mb-12">
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <RefreshCw className="w-6 h-6 text-[#00E0C6]" />
              <h2 className="font-saira text-2xl font-semibold text-white">
                Refund Policy
              </h2>
            </div>
            
            <div className="space-y-4 text-white/80">
              <h3 className="text-white font-semibold text-lg">Donations</h3>
              <p>
                All donations are final and non-refundable. Donated funds are immediately allocated to relief efforts and cannot be returned. However, if you believe there has been an error in processing your donation, please contact us within 48 hours.
              </p>
              
              <h3 className="text-white font-semibold text-lg mt-6">Event Tickets</h3>
              <p>
                Ticket refunds are available under the following conditions:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Refund requests must be made at least 48 hours before the event date</li>
                <li>A processing fee of ₹50 per ticket will be deducted</li>
                <li>Refunds will be processed within 7-10 business days</li>
                <li>In case of event cancellation, full refunds will be provided</li>
              </ul>
              
              <h3 className="text-white font-semibold text-lg mt-6">How to Request a Refund</h3>
              <p>
                To request a ticket refund, please contact us at refunds@himachalgala.org with your order ID and reason for cancellation.
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Service */}
        <section id="terms" className="mb-12">
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-6 h-6 text-[#FF9A1F]" />
              <h2 className="font-saira text-2xl font-semibold text-white">
                Terms of Service
              </h2>
            </div>
            
            <div className="space-y-4 text-white/80">
              <h3 className="text-white font-semibold text-lg">Acceptance of Terms</h3>
              <p>
                By accessing and using our website and services, you accept and agree to be bound by these terms and conditions.
              </p>
              
              <h3 className="text-white font-semibold text-lg mt-6">Use of Services</h3>
              <p>
                Our services are provided for charitable purposes. You agree to use our services only for lawful purposes and in accordance with these terms.
              </p>
              
              <h3 className="text-white font-semibold text-lg mt-6">Event Attendance</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Valid tickets are required for event entry</li>
                <li>Government-issued ID must be presented at the venue</li>
                <li>We reserve the right to refuse entry or remove individuals who violate event policies</li>
                <li>Photography and videography may occur during the event</li>
              </ul>
              
              <h3 className="text-white font-semibold text-lg mt-6">Limitation of Liability</h3>
              <p>
                We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </div>
          </div>
        </section>

        {/* Tax Information */}
        <section id="tax" className="mb-12">
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Receipt className="w-6 h-6 text-[#B31E2B]" />
              <h2 className="font-saira text-2xl font-semibold text-white">
                Tax Information
              </h2>
            </div>
            
            <div className="space-y-4 text-white/80">
              <h3 className="text-white font-semibold text-lg">80G Tax Exemption</h3>
              <p>
                Himachal Relief Foundation is registered under Section 80G of the Income Tax Act, 1961. Donors are eligible for tax deduction benefits as per the following:
              </p>
              
              <ul className="list-disc list-inside space-y-2">
                <li>50% of the donated amount is eligible for tax deduction</li>
                <li>Minimum donation amount for tax certificate: ₹500</li>
                <li>Tax exemption certificates are issued within 48 hours of donation</li>
                <li>Certificates are sent via email to the registered email address</li>
              </ul>
              
              <h3 className="text-white font-semibold text-lg mt-6">Required Information</h3>
              <p>
                To receive your tax exemption certificate, please ensure you provide:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Full name as per PAN card</li>
                <li>Valid email address</li>
                <li>Phone number</li>
                <li>Complete address</li>
              </ul>
              
              <h3 className="text-white font-semibold text-lg mt-6">Corporate Donations</h3>
              <p>
                Corporate donors can claim donations as CSR expenditure under Section 135 of the Companies Act, 2013. Additional documentation will be provided for corporate donors.
              </p>
              
              <div className="bg-[#FF9A1F]/10 rounded-lg p-4 mt-6">
                <p className="text-[#FF9A1F] font-medium">
                  <strong>Note:</strong> Please consult your tax advisor for specific guidance on claiming tax benefits. Regulations may vary based on individual circumstances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <div className="text-center">
          <div className="glass rounded-xl p-6">
            <h3 className="font-saira text-lg font-semibold text-white mb-2">
              Questions?
            </h3>
            <p className="text-white/70 mb-4">
              For any legal queries or clarifications, please contact our support team.
            </p>
            <a 
              href="mailto:legal@himachalgala.org"
              className="btn-secondary inline-flex items-center"
            >
              Contact Legal Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}