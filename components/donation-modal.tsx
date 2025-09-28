"use client";

import { useState } from 'react';
import { X, Heart, Shield } from 'lucide-react';
import { siteConfig } from '@/app/config/site';
import { createDonationPayment } from '@/lib/razorpay';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleDonate = async () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (amount && amount >= 1) {
      try {
        await createDonationPayment(amount);
        onClose();
      } catch (error) {
        console.error('Payment error:', error);
        alert('Payment failed. Please try again.');
      }
    } else {
      alert('Please select or enter a valid amount first!');
    }
  };

  const isValidAmount = selectedAmount || (customAmount && parseInt(customAmount) >= 1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="glass rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-saira text-2xl font-bold text-white">
            Make a Donation
          </h2>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Impact Image */}
        <div className="mb-6">
          <h3 className="font-saira text-lg font-semibold mb-3 text-white text-center">
            Your Impact in Action
          </h3>
          <div className="w-full h-32 rounded-xl overflow-hidden mb-3">
            <img 
              src="/kullu-F1.jpg" 
              alt="Kullu district flood damage - families needing relief support" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-white/70 text-center">
            Your donation directly provides essential relief kits to families affected by the floods in Kullu district.
          </p>
        </div>

        {/* Amount Selection */}
        <div className="mb-6">
          <h3 className="font-saira text-lg font-semibold mb-4 text-white">
            Select Amount
          </h3>

          {/* Preset Amounts */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-4">
            {siteConfig.donationPresets.map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount('');
                }}
                className={`p-3 rounded-xl transition-all duration-300 border-2 focus-ring min-h-[70px] flex flex-col justify-center items-center text-center ${
                  selectedAmount === amount
                    ? 'border-[#6DE1FF] bg-[#6DE1FF]/10 text-[#6DE1FF]'
                    : 'border-white/20 glass-dark hover:border-[#6DE1FF]/50'
                }`}
              >
                <div className="text-sm font-bold">₹{amount}</div>
                <div className="text-xs text-white/70 mt-1 leading-tight">
                  {amount < 2000 ? 'Support' :
                   amount === 2000 ? '1 Kit' : 
                   amount === 2500 ? '1 Kit (Big)' :
                   amount === 5000 ? '2 Kits' : 
                   amount === 10000 ? '4 Kits' : 'Multiple'}
                </div>
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="space-y-2">
            <label className="text-white/80 text-sm">Or enter custom amount</label>
            <div className="flex gap-3">
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                placeholder="Enter amount"
                className="flex-1 px-4 py-3 rounded-xl glass-dark border border-white/20 text-white placeholder-white/50 focus:border-[#6DE1FF] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Kit Breakdown */}
        <div className="glass rounded-xl p-4 mb-6">
          <h4 className="font-semibold text-white mb-3 text-center">
            What Your Donation Funds
          </h4>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-white/80">
              <span>₹2,000 Kit (Standard Family):</span>
              <span className="text-[#6DE1FF]">Rice, Dal, Oil, Spices, Soap</span>
            </div>
            <div className="flex justify-between text-white/80">
              <span>₹2,500 Kit (Bigger Family):</span>
              <span className="text-[#FF9A1F]">Extra essentials + Baby items</span>
            </div>
            <div className="text-center text-xs text-white/60 mt-3">
              All kits distributed through local panchayats
            </div>
          </div>
        </div>

        {/* 80G Information */}
        <div className="glass rounded-xl p-4 mb-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-[#00E0C6] mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-white mb-2">
                80G Tax Exemption Available
              </h4>
              <p className="text-sm text-white/70">
                Donations to Samarthya Foundation are eligible for 80G tax deduction. 
                You'll receive a tax receipt for your contribution.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleDonate}
            disabled={!isValidAmount}
            className={`flex-1 px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center ${
              isValidAmount
                ? 'bg-gradient-to-r from-[#6DE1FF] to-[#00E0C6] hover:from-[#5BC5E6] hover:to-[#00C7B8] text-white font-semibold'
                : 'bg-white/10 text-white/50 cursor-not-allowed'
            }`}
          >
            <Heart className="w-4 h-4 mr-2" />
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}
