"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, Shield, Heart, Droplets } from 'lucide-react';
import { siteConfig } from '@/app/config/site';
import DonationModal from './donation-modal';

export default function HeroSection() {
  const [counters, setCounters] = useState({
    raised: 0,
    donors: 0,
    tickets: 0
  });
  const [showDonationModal, setShowDonationModal] = useState(false);

  useEffect(() => {
    // Animate counters on mount
    const animateCounter = (target: number, key: keyof typeof counters) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 20);
    };

    animateCounter(siteConfig.raised, 'raised');
    animateCounter(siteConfig.donors, 'donors');
    animateCounter(siteConfig.ticketsSold, 'tickets');
  }, []);

  const progressPercentage = (counters.raised / siteConfig.goal) * 100;

  const handleDonate = () => {
    setShowDonationModal(true);
  };

  const scrollToTickets = () => {
    document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBloodDonate = () => {
    document.getElementById('blood-donate')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img 
          src="/rath-processsion.jpg"
          alt="Kullu Dussehra rath procession celebration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#070C14]/80 via-[#0A1018]/70 to-[#0E1826]/80"></div>
        <div className="absolute inset-0 himalayan-rivers opacity-20"></div>
      </div>
      
      {/* Parallax Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6DE1FF] rounded-full opacity-5 blur-3xl parallax"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF9A1F] rounded-full opacity-5 blur-3xl parallax"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center pt-20">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="font-saira text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-glow">
            <span className="text-[#6DE1FF]">Yuva</span>
            <span className="text-[#FF9A1F]">thon</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-[#00E0C6] mb-2">
            Kullu Dussehra • 4–7 Oct
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Immediate groceries & essentials for families affected by floods & landslides.
          </p>
        </div>

        {/* Progress Section */}
        <div className="mb-8">
          <div className="glass rounded-2xl p-6 max-w-4xl mx-auto mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
              {/* Counter Cards */}
              <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
                <div className="glass-dark rounded-xl p-4 flex-1 counter-animate">
                  <div className="text-2xl md:text-3xl font-bold text-[#6DE1FF] mb-1">
                    ₹{counters.raised.toLocaleString('en-IN')}
                  </div>
                  <div className="text-sm text-white/70">Raised</div>
                </div>
                <div className="glass-dark rounded-xl p-4 flex-1 counter-animate">
                  <div className="text-2xl md:text-3xl font-bold text-[#00E0C6] mb-1">
                    {counters.donors}
                  </div>
                  <div className="text-sm text-white/70">Donors</div>
                </div>
                <div className="glass-dark rounded-xl p-4 flex-1 counter-animate">
                  <div className="text-2xl md:text-3xl font-bold text-[#FF9A1F] mb-1">
                    {counters.tickets}
                  </div>
                  <div className="text-sm text-white/70">Tickets Sold</div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/80">Goal Progress</span>
                <span className="text-[#6DE1FF] font-semibold">
                  ₹{siteConfig.goal.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#6DE1FF] to-[#00E0C6] progress-fill"
                  style={{ '--progress-width': `${progressPercentage}%` } as any}
                ></div>
              </div>
            </div>
          </div>

          {/* Microcopy */}
          <p className="text-white/70 text-sm max-w-2xl mx-auto mb-4">
            Every ₹2,000–₹2,500 funds one family grocery kit (rice, dal, oil, salt, milk powder, hygiene).
          </p>
          <div className="glass-dark rounded-lg px-4 py-2 inline-block mb-4">
            <p className="text-white/80 text-sm">
              <span className="text-[#00E0C6] font-semibold">Samarthya Foundation</span> • 
              <span className="text-[#6DE1FF]"> 80G Tax Exempt</span> • 
              <span className="text-[#FF9A1F]">Transparent Distribution</span>
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-8 w-full">
          <button 
            onClick={handleDonate}
            className="btn-primary text-lg px-8 py-4 glow-saffron hover:scale-105 transition-all duration-300 flex items-center justify-center"
          >
            <Heart className="w-5 h-5 mr-2" />
            Donate Now
          </button>
          <button 
            onClick={scrollToTickets}
            className="btn-secondary text-lg px-8 py-4 flex items-center justify-center"
          >
            Buy Pahadi Night Tickets
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button 
            onClick={scrollToBloodDonate}
            className="bg-gradient-to-r from-[#B31E2B] to-[#FF4444] hover:from-[#A01A26] hover:to-[#FF3333] text-white text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 glow-red flex items-center justify-center"
          >
            <Droplets className="w-5 h-5 mr-2" />
            Donate Blood
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* Trust Strip */}
        <div className="glass-dark rounded-xl px-6 py-3 inline-flex items-center space-x-4 text-sm text-white/70 mx-auto">
          <Shield className="w-4 h-4 text-[#00E0C6]" />
          <span>Cards • Net-banking • Razorpay • 256-bit SSL</span>
        </div>
      </div>

      {/* Donation Modal */}
      <DonationModal 
        isOpen={showDonationModal} 
        onClose={() => setShowDonationModal(false)} 
      />
    </section>
  );
}