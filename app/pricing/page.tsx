"use client";

import { Heart, Ticket, Shield, Users, Star, Crown, Building2, X } from 'lucide-react';
import { siteConfig } from '@/app/config/site';
import { createDonationPayment, createTicketPayment } from '@/lib/razorpay';
import { useRouter } from 'next/navigation';
import FloatingNav from '@/components/floating-nav';
import { useState } from 'react';

export default function Pricing() {
  const router = useRouter();
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCustomDonation = () => {
    setShowCustomModal(true);
  };

  const handleCustomPayment = async () => {
    const amount = parseInt(customAmount);
    if (amount && amount >= 100) {
      try {
        await createDonationPayment(amount);
        setShowCustomModal(false);
        setCustomAmount('');
      } catch (error) {
        console.error('Payment error:', error);
        alert('Payment failed. Please try again.');
      }
    } else {
      alert('Please enter a valid amount (minimum ₹100)');
    }
  };

  const handleDonate = async (amount: number) => {
    try {
      await createDonationPayment(amount);
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    }
  };

  const handleBuyTicket = async (ticket: any) => {
    try {
      await createTicketPayment(ticket.price, ticket.tier, 1);
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070C14] via-[#0A1018] to-[#0E1826]">
      <FloatingNav />
      <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img 
              src="/samart-logo.jpg" 
              alt="Samarthya Foundation" 
              className="w-16 h-16 rounded-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'w-16 h-16 rounded-full bg-gradient-to-br from-[#00E0C6] to-[#6DE1FF] flex items-center justify-center text-white font-bold text-lg';
                  fallback.textContent = 'SF';
                  parent.appendChild(fallback);
                }
              }}
            />
            <h1 className="font-saira text-4xl font-bold text-white">
              Pricing & Donation Options
            </h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            All proceeds go to Samarthya Foundation for Himachal Relief Fund. 
            All donations are eligible for 80G tax exemption.
          </p>
        </div>

        {/* Donation Options */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-saira text-3xl font-bold text-[#6DE1FF] mb-4">
              Donation Options
            </h2>
            <p className="text-white/70 text-lg">
              Support families affected by floods and landslides in Himachal Pradesh
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Small Donations */}
            <div className="glass rounded-2xl p-6 border-2 border-[#6DE1FF]/20">
              <div className="text-center mb-4">
                <Heart className="w-12 h-12 text-[#6DE1FF] mx-auto mb-3" />
                <h3 className="font-saira text-xl font-semibold text-white">Small Donations</h3>
                <p className="text-white/70 text-sm">Support the cause</p>
              </div>
              <div className="space-y-3">
                {siteConfig.donationPresets.filter(amount => amount < 2000).map((amount) => (
                  <div key={amount} className="flex justify-between items-center p-3 glass-dark rounded-lg">
                    <span className="text-white font-semibold">₹{amount}</span>
                    <button
                      onClick={() => handleDonate(amount)}
                      className="bg-gradient-to-r from-[#6DE1FF] to-[#00E0C6] hover:from-[#5BC5E6] hover:to-[#00C7B8] text-white text-xs px-3 py-1 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      Donate
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Family Relief Kits */}
            <div className="glass rounded-2xl p-6 border-2 border-[#00E0C6]/20">
              <div className="text-center mb-4">
                <Users className="w-12 h-12 text-[#00E0C6] mx-auto mb-3" />
                <h3 className="font-saira text-xl font-semibold text-white">Relief Kits</h3>
                <p className="text-white/70 text-sm">Essential family supplies</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 glass-dark rounded-lg">
                  <div>
                    <span className="text-white font-semibold">₹2,000</span>
                    <div className="text-white/70 text-xs">Standard Family Kit</div>
                  </div>
                  <button
                    onClick={() => handleDonate(2000)}
                    className="bg-gradient-to-r from-[#00E0C6] to-[#6DE1FF] hover:from-[#00C7B8] hover:to-[#5BC5E6] text-white text-xs px-3 py-1 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Donate
                  </button>
                </div>
                <div className="flex justify-between items-center p-3 glass-dark rounded-lg">
                  <div>
                    <span className="text-white font-semibold">₹2,500</span>
                    <div className="text-white/70 text-xs">Larger Family Kit</div>
                  </div>
                  <button
                    onClick={() => handleDonate(2500)}
                    className="bg-gradient-to-r from-[#00E0C6] to-[#6DE1FF] hover:from-[#00C7B8] hover:to-[#5BC5E6] text-white text-xs px-3 py-1 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Donate
                  </button>
                </div>
                <div className="text-xs text-white/60 mt-3 p-3 glass-dark rounded-lg">
                  <p>Kit Contents:</p>
                  <p>Rice, Dal, Oil, Salt, Milk Powder, Hygiene Items</p>
                </div>
              </div>
            </div>

            {/* Bulk Donations */}
            <div className="glass rounded-2xl p-6 border-2 border-[#FF9A1F]/20">
              <div className="text-center mb-4">
                <Shield className="w-12 h-12 text-[#FF9A1F] mx-auto mb-3" />
                <h3 className="font-saira text-xl font-semibold text-white">Bulk Donations</h3>
                <p className="text-white/70 text-sm">Maximum impact</p>
              </div>
              <div className="space-y-3">
                {siteConfig.donationPresets.filter(amount => amount >= 5000).map((amount) => (
                  <div key={amount} className="flex justify-between items-center p-3 glass-dark rounded-lg">
                    <div>
                      <span className="text-white font-semibold">₹{amount}</span>
                      <div className="text-white/70 text-xs">
                        {amount === 5000 ? '2 Kits' : amount === 10000 ? '4 Kits' : 'Multiple Kits'}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDonate(amount)}
                      className="bg-gradient-to-r from-[#FF9A1F] to-[#B31E2B] hover:from-[#E08A1C] hover:to-[#A01A26] text-white text-xs px-3 py-1 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      Donate
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <button 
              onClick={handleCustomDonation}
              className="bg-gradient-to-r from-[#6DE1FF] to-[#00E0C6] hover:from-[#5BC5E6] hover:to-[#00C7B8] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Custom Amount Donation
            </button>
            <p className="text-white/60 text-sm">
              Or choose any of the preset amounts above for instant donation
            </p>
          </div>
        </div>

        {/* Event Tickets */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-saira text-3xl font-bold text-[#FF9A1F] mb-4">
              Pahadi Night Tickets
            </h2>
            <p className="text-white/70 text-lg">
              Join us for the cultural celebration and fundraising event
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {siteConfig.tickets.map((ticket, index) => {
              const icons = [Users, Star, Crown, Building2];
              const colors = ['text-[#6DE1FF]', 'text-[#00E0C6]', 'text-[#FF9A1F]', 'text-[#B31E2B]'];
              const Icon = icons[index];
              const colorClass = colors[index];

              return (
                <div key={ticket.tier} className="glass rounded-2xl p-6 border-2 border-white/10 hover:border-[#FF9A1F]/50 transition-all duration-300">
                  <div className="text-center mb-6">
                    <Icon className={`w-12 h-12 ${colorClass} mx-auto mb-3`} />
                    <h3 className="font-saira text-xl font-semibold text-white">{ticket.tier}</h3>
                    <div className="text-2xl font-bold text-[#FF9A1F] mt-2">₹{ticket.price}</div>
                    <p className="text-white/70 text-sm mt-2">{ticket.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-white text-sm">Includes:</h4>
                    {ticket.includes.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#FF9A1F]"></div>
                        <span className="text-white/70 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => handleBuyTicket(ticket)}
                    className="w-full bg-gradient-to-r from-[#FF9A1F] to-[#B31E2B] hover:from-[#E08A1C] hover:to-[#A01A26] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Buy {ticket.tier} Ticket
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Payment Information */}
        <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="font-saira text-2xl font-bold text-white mb-4">
              Payment Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-[#6DE1FF] mb-3">Accepted Payment Methods</h3>
              <ul className="space-y-2 text-white/70">
                <li>• Credit/Debit Cards (Visa, MasterCard, RuPay)</li>
                <li>• UPI (PhonePe, Google Pay, Paytm, BHIM)</li>
                <li>• Net Banking</li>
                <li>• Digital Wallets</li>
                <li>• Razorpay Payment Gateway</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#00E0C6] mb-3">Important Notes</h3>
              <ul className="space-y-2 text-white/70">
                <li>• All prices in Indian Rupees (INR)</li>
                <li>• 80G tax exemption certificates provided</li>
                <li>• Secure payment processing via Razorpay</li>
                <li>• Digital receipts issued immediately</li>
                <li>• No additional processing fees</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 glass-dark rounded-xl text-center">
            <p className="text-white/80 mb-2">
              <strong className="text-[#6DE1FF]">Samarthya Foundation</strong> is a registered charitable organization
            </p>
            <p className="text-white/70 text-sm">
              Registration: 80G Tax Exempt • Est. 2021 • Transparent & Accountable
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-12">
          <h3 className="font-saira text-xl font-semibold text-white mb-4">
            Need Help with Pricing?
          </h3>
          <p className="text-white/70 mb-4">
            Contact us for custom donation amounts or bulk ticket purchases
          </p>
          <a 
            href="tel:+919258729273" 
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#6DE1FF] to-[#00E0C6] hover:from-[#5BC5E6] hover:to-[#00C7B8] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <span>📞 +91 92587 29273</span>
          </a>
        </div>
      </div>
      </div>

      {/* Custom Amount Modal */}
      {showCustomModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="glass rounded-2xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowCustomModal(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="font-saira text-2xl font-bold text-white mb-6 text-center">
              Custom Amount Donation
            </h2>

            <div className="mb-6">
              <label htmlFor="custom-amount" className="block text-white/70 text-sm mb-2">
                Enter donation amount (₹)
              </label>
              <input
                type="number"
                id="custom-amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="e.g., 1500"
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#6DE1FF] transition-colors"
                min="100"
              />
              <p className="text-white/60 text-xs mt-2">
                Minimum amount: ₹100
              </p>
            </div>

            <div className="mb-6">
              <div className="glass-dark rounded-xl p-4 text-sm">
                <h3 className="font-semibold text-white mb-2">What your donation supports:</h3>
                <ul className="text-white/70 space-y-1">
                  <li>• Essential relief kits for families</li>
                  <li>• Rice, dal, oil, hygiene supplies</li>
                  <li>• Direct distribution in Himachal Pradesh</li>
                  <li>• 80G tax exemption certificate</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setShowCustomModal(false)}
                className="flex-1 px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCustomPayment}
                disabled={!customAmount || parseInt(customAmount) < 100}
                className={`flex-1 px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center ${
                  customAmount && parseInt(customAmount) >= 100
                    ? 'bg-gradient-to-r from-[#6DE1FF] to-[#00E0C6] hover:from-[#5BC5E6] hover:to-[#00C7B8] text-white font-semibold'
                    : 'bg-white/10 text-white/50 cursor-not-allowed'
                }`}
              >
                <Heart className="w-4 h-4 mr-2" />
                Donate ₹{customAmount || '0'}
              </button>
            </div>

            <div className="mt-4 p-3 glass-dark rounded-xl text-xs text-white/70 text-center">
              <Shield className="w-4 h-4 inline-block mr-2 text-[#00E0C6]" />
              Secure payment via Razorpay • 80G tax exemption available
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
