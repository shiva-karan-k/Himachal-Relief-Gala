"use client";

import { useState } from 'react';
import { Heart, Shield, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/app/config/site';

export default function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (amount && amount >= 1) {
      window.open(siteConfig.razorpay.donationLink, '_blank');
    }
  };

  const isValidAmount = selectedAmount || (customAmount && parseInt(customAmount) >= 1);

  return (
    <section id="donate" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-saira text-3xl md:text-4xl font-bold mb-4 text-white">
              Make a Donation
            </h2>
            <p className="text-lg text-white/70">
              Every contribution directly funds grocery kits for affected families.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Donation Panel */}
            <div className="lg:col-span-2">
              <div className="glass rounded-2xl p-8">
                <h3 className="font-saira text-xl font-semibold mb-6 text-white">
                  Select Amount
                </h3>

                {/* Preset Amounts */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {siteConfig.donationPresets.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`p-4 rounded-xl transition-all duration-300 border-2 focus-ring ${
                        selectedAmount === amount
                          ? 'border-[#6DE1FF] bg-[#6DE1FF]/10 text-[#6DE1FF]'
                          : 'border-white/20 glass-dark hover:border-[#6DE1FF]/50'
                      }`}
                    >
                      <div className="text-xl font-bold">₹{amount}</div>
                      <div className="text-xs text-white/70 mt-1">
                        {amount === 2000 ? '1 Kit (Standard)' : 
                         amount === 2500 ? '1 Kit (Bigger Family)' :
                         amount === 5000 ? '2 Kits Fund' : 
                         '4 Kits Fund'}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-6">
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Custom Amount (₹)
                  </label>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full glass-dark rounded-lg px-4 py-3 text-white placeholder-white/50 focus-ring"
                    min="1"
                  />
                </div>

                {/* Donate Button */}
                <button
                  onClick={handleDonate}
                  disabled={!isValidAmount}
                  className={`w-full text-lg px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center ${
                    isValidAmount
                      ? 'btn-primary glow-saffron hover:scale-105'
                      : 'bg-white/10 text-white/50 cursor-not-allowed'
                  }`}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Donate {selectedAmount ? `₹${selectedAmount}` : customAmount ? `₹${customAmount}` : 'Now'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              {/* Transparency Note */}
              <div className="glass rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-[#00E0C6] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      100% Direct Impact
                    </h4>
                    <p className="text-sm text-white/70">
                      We publish collections → kits → locations every night during 4–7 Oct.
                    </p>
                  </div>
                </div>
              </div>

              {/* Kit Breakdown */}
              <div className="glass rounded-xl p-6">
                <h4 className="font-semibold text-white mb-3">
                  What Your Donation Funds
                </h4>
                
                {/* Standard Kit */}
                <div className="mb-4">
                  <h5 className="text-[#6DE1FF] font-medium mb-2">Standard Kit (₹2,000)</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">Rice (10kg)</span>
                      <span className="text-[#6DE1FF]">₹600</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Dal (3kg)</span>
                      <span className="text-[#6DE1FF]">₹450</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Cooking Oil (2L)</span>
                      <span className="text-[#6DE1FF]">₹300</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Salt, Spices, Milk Powder</span>
                      <span className="text-[#6DE1FF]">₹350</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Hygiene Essentials</span>
                      <span className="text-[#6DE1FF]">₹300</span>
                    </div>
                  </div>
                </div>

                {/* Bigger Family Kit */}
                <div className="mb-4">
                  <h5 className="text-[#00E0C6] font-medium mb-2">Bigger Family Kit (₹2,500)</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">Rice (15kg)</span>
                      <span className="text-[#00E0C6]">₹900</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Dal (4kg)</span>
                      <span className="text-[#00E0C6]">₹600</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Cooking Oil (3L)</span>
                      <span className="text-[#00E0C6]">₹450</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Salt, Spices, Milk Powder</span>
                      <span className="text-[#00E0C6]">₹350</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Hygiene + Baby Essentials</span>
                      <span className="text-[#00E0C6]">₹200</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-white/60 text-center">
                  Both kits support families for 2-3 weeks
                </div>
              </div>

              {/* Tax Benefits */}
              <div className="glass rounded-xl p-6">
                <h4 className="font-semibold text-white mb-2">
                  Tax Benefits
                </h4>
                <p className="text-sm text-white/70">
                  80G tax exemption certificate provided for all donations above ₹500.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}