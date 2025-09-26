"use client";

import { useState, useEffect } from 'react';
import { Heart, Shield, ArrowRight, Smartphone, QrCode, X, Copy } from 'lucide-react';
import { siteConfig } from '@/app/config/site';
import QRCode from 'qrcode';

export default function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [showQRModal, setShowQRModal] = useState(false);
  const [qrAmount, setQrAmount] = useState<number>(0);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');

  const generateQRCode = async (amount: number) => {
    try {
      const upiId = 'getepay.hpscbank228371@icici';
      const name = 'Himachal Relief Fund';
      const note = `Donation for Himachal Relief - Amount: ₹${amount}`;
      
      // UPI URL format
      const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&tn=${encodeURIComponent(note)}`;
      
      // Generate QR code
      const qrDataUrl = await QRCode.toDataURL(upiUrl, {
        width: 200,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      
      setQrCodeDataUrl(qrDataUrl);
    } catch (error) {
      console.error('Error generating QR code:', error);
      setQrCodeDataUrl('');
    }
  };

  const handleDonate = () => {
    console.log('Donate button clicked!');
    const amount = selectedAmount || parseInt(customAmount);
    console.log('Amount:', amount, 'Selected:', selectedAmount, 'Custom:', customAmount);
    
    if (amount && amount >= 1) {
      const upiId = 'getepay.hpscbank228371@icici';
      const name = 'Himachal Relief Fund';
      const note = `Donation for Himachal Relief - Amount: ₹${amount}`;
      
      // PhonePe deep link format
      const phonePeUrl = `phonepe://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&tn=${encodeURIComponent(note)}`;
      
      // Fallback to generic UPI link
      const genericUpiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&tn=${encodeURIComponent(note)}`;
      
      console.log('PhonePe URL:', phonePeUrl);
      console.log('Generic UPI URL:', genericUpiUrl);
      
      // Try opening UPI link directly
      try {
        // For desktop, show QR code modal
        if (!navigator.userAgent.match(/iPhone|iPad|iPod|Android/i)) {
          setQrAmount(amount);
          generateQRCode(amount);
          setShowQRModal(true);
          return;
        }
        
        // For mobile, try UPI deep link
        window.location.href = genericUpiUrl;
        
        // Fallback to PhonePe specifically after delay
        setTimeout(() => {
          window.location.href = phonePeUrl;
        }, 1000);
        
      } catch (error) {
        console.error('UPI link error:', error);
        setQrAmount(amount);
        generateQRCode(amount);
        setShowQRModal(true);
      }
    } else {
      alert('Please select or enter a valid amount first!');
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
                {/* Impact Image - First Thing Users See */}
                <div className="mb-8">
                  <h3 className="font-saira text-xl font-semibold mb-4 text-white text-center">
                    Your Impact in Action
                  </h3>
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                    <img 
                      src="/kullu-F1.jpg" 
                      alt="Kullu district flood damage - families needing relief support" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-white/70 text-center mb-6">
                    Your donation directly provides essential relief kits to families affected by the floods in Kullu district.
                  </p>
                </div>

                <h3 className="font-saira text-xl font-semibold mb-6 text-white">
                  Select Amount
                </h3>

                {/* Preset Amounts */}
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 mb-6">
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
                      <div className="text-lg font-bold">₹{amount}</div>
                      <div className="text-xs text-white/70 mt-1">
                        {amount < 2000 ? 'Support' :
                         amount === 2000 ? '1 Kit (Standard)' : 
                         amount === 2500 ? '1 Kit (Bigger Family)' :
                         amount === 5000 ? '2 Kits Fund' : 
                         amount === 10000 ? '4 Kits Fund' : 'Multiple Kits'}
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

                {/* Payment Button */}
                <button
                  onClick={handleDonate}
                  disabled={!isValidAmount}
                  className={`w-full text-lg px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center ${
                    isValidAmount
                      ? 'bg-gradient-to-r from-[#6A0EDD] to-[#9747FF] hover:from-[#7B1EEE] hover:to-[#A858FF] text-white glow-blue hover:scale-105'
                      : 'bg-white/10 text-white/50 cursor-not-allowed'
                  }`}
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Donate via PhonePe/UPI {selectedAmount ? `₹${selectedAmount}` : customAmount ? `₹${customAmount}` : ''}
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

            </div>
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass rounded-2xl p-8 max-w-md w-full relative">
            {/* Close Button */}
            <button 
              onClick={() => setShowQRModal(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white focus-ring rounded p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="text-center">
              <h3 className="font-saira text-xl font-semibold mb-4 text-white">
                Scan to Pay ₹{qrAmount}
              </h3>

              {/* QR Code */}
              <div className="w-48 h-48 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center p-2">
                <img 
                  src="/upi-qr-code.png" 
                  alt="Himachal Pradesh State Cooperative Bank UPI QR Code" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to generated QR if image not found
                    if (qrCodeDataUrl) {
                      e.currentTarget.src = qrCodeDataUrl;
                    }
                  }}
                />
              </div>

              {/* UPI Details */}
              <div className="space-y-3 mb-6">
                <div className="glass-dark rounded-lg p-3 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">UPI ID:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm font-mono">getepay.hpscbank228371@icici</span>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText('getepay.hpscbank228371@icici');
                          alert('UPI ID copied!');
                        }}
                        className="text-[#6DE1FF] hover:text-[#00E0C6] focus-ring rounded p-1"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="glass-dark rounded-lg p-3 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Amount:</span>
                    <span className="text-[#FF9A1F] font-semibold">₹{qrAmount}</span>
                  </div>
                </div>

                <div className="glass-dark rounded-lg p-3 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Recipient:</span>
                    <span className="text-white text-sm">Himachal Relief Fund</span>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="text-sm text-white/70 mb-4">
                <p className="mb-2">📱 Open any UPI app and scan the QR code</p>
                <p>Or copy the UPI ID and pay manually</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowQRModal(false)}
                  className="flex-1 btn-secondary"
                >
                  Close
                </button>
                <button 
                  onClick={() => {
                    const upiId = 'getepay.hpscbank228371@icici';
                    const name = 'Himachal Relief Fund';
                    const note = `Donation for Himachal Relief - Amount: ₹${qrAmount}`;
                    
                    // Try multiple UPI link formats
                    const genericUpiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${qrAmount}&tn=${encodeURIComponent(note)}`;
                    const phonePeUrl = `phonepe://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${qrAmount}&tn=${encodeURIComponent(note)}`;
                    const paytmUrl = `paytmmp://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${qrAmount}&tn=${encodeURIComponent(note)}`;
                    
                    console.log('Trying to open UPI app with:', genericUpiUrl);
                    
                    // Try to open UPI apps in sequence
                    try {
                      // First try generic UPI
                      window.location.href = genericUpiUrl;
                      
                      // Fallback attempts after delays
                      setTimeout(() => {
                        console.log('Trying PhonePe...');
                        window.open(phonePeUrl, '_blank');
                      }, 500);
                      
                      setTimeout(() => {
                        console.log('Trying Paytm...');
                        window.open(paytmUrl, '_blank');
                      }, 1000);
                      
                      // If nothing works, show instructions
                      setTimeout(() => {
                        alert(`If no UPI app opened, manually pay using:\n\nUPI ID: ${upiId}\nAmount: ₹${qrAmount}\nNote: ${note}`);
                      }, 2000);
                      
                    } catch (error) {
                      console.error('Error opening UPI app:', error);
                      alert(`Please pay manually using:\n\nUPI ID: ${upiId}\nAmount: ₹${qrAmount}\nNote: ${note}`);
                    }
                  }}
                  className="flex-1 bg-gradient-to-r from-[#6A0EDD] to-[#9747FF] hover:from-[#7B1EEE] hover:to-[#A858FF] text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 focus-ring"
                >
                  Open UPI App
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}