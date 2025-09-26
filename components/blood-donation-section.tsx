"use client";

import { useState } from 'react';
import { Heart, Clock, MapPin, Users, Phone, ArrowRight, ExternalLink, Shield } from 'lucide-react';

export default function BloodDonationSection() {
  const handleRegister = (bloodGroup?: string) => {
    let formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfhwRCYSYrJTp0Vof6Eam7UeFAdtW_Z2CwiKYCpO37aG7wJwQ/viewform';
    
    // Pre-fill blood group if provided
    if (bloodGroup) {
      // Google Forms pre-fill format: ?entry.FIELD_ID=VALUE
      // You'll need to replace 'entry.123456789' with the actual field ID from your form
      formUrl += `?entry.123456789=${encodeURIComponent(bloodGroup)}`;
    }
    
    window.open(formUrl, '_blank');
  };

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <section id="blood-donate" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-saira text-3xl md:text-4xl font-bold mb-4 text-white">
            🩸 Donate Blood, Save Lives
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-6">
            Join us for the <strong className="text-[#B31E2B]">Blood Donation Camp</strong> during the world-famous 
            <strong className="text-[#FF9A1F]"> Kullu Dussehra Festival 2025</strong> - a UNESCO-recognised cultural celebration. 
            Your donation honors our <strong className="text-[#6DE1FF]">disaster heroes</strong> and saves lives!
          </p>
          
          {/* Disaster Heroes Tribute */}
          <div className="glass rounded-2xl p-6 max-w-4xl mx-auto mt-8">
            <h3 className="font-saira text-xl font-bold text-[#FF9A1F] mb-4 flex items-center justify-center">
              🏆 Honoring Our Disaster Heroes
            </h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              This blood donation drive honors the heroes who responded during Kullu's recent floods. Join us in continuing their spirit of service.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="glass-dark rounded-lg p-4">
                <div className="text-[#6DE1FF] font-semibold mb-2">🚨 NDRF & Police</div>
                <div className="text-white/70">Rescue operations during Akhada Bazaar landslide</div>
              </div>
              <div className="glass-dark rounded-lg p-4">
                <div className="text-[#00E0C6] font-semibold mb-2">🎓 Student Heroes</div>
                <div className="text-white/70">Ronid Pundir & Sahil Thakur - Flash flood rescues</div>
              </div>
              <div className="glass-dark rounded-lg p-4">
                <div className="text-[#FF9A1F] font-semibold mb-2">❤️ Community Leader</div>
                <div className="text-white/70">Sarbjeet Singh Bobby - Rebuilding communities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Event Details */}
          <div className="space-y-8">
            {/* Event Info Card */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-[#B31E2B] mr-3" />
                <div>
                  <h3 className="font-saira text-2xl font-bold text-white">
                    Yuvathon @ Kullu Dussehra 2025
                  </h3>
                  <p className="text-[#FF9A1F] font-semibold">Blood Donation Camp</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-white">
                  <Clock className="w-5 h-5 text-[#6DE1FF] mr-3" />
                  <div>
                    <div className="font-semibold">October 7th, 2025</div>
                    <div className="text-white/70 text-sm">Starting at 09:00 AM</div>
                  </div>
                </div>

                <div className="flex items-center text-white">
                  <MapPin className="w-5 h-5 text-[#00E0C6] mr-3" />
                  <div>
                    <div className="font-semibold">Kullu Dussehra Ground</div>
                    <div className="text-white/70 text-sm">Kullu, Himachal Pradesh</div>
                  </div>
                </div>

                <div className="flex items-center text-white">
                  <Users className="w-5 h-5 text-[#FF9A1F] mr-3" />
                  <div>
                    <div className="font-semibold">All Blood Groups Welcome</div>
                    <div className="text-white/70 text-sm">Age 18-65, Good Health Required</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Eligibility Requirements */}
            <div className="glass rounded-2xl p-6">
              <h4 className="font-saira text-xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-5 h-5 text-[#6DE1FF] mr-2" />
                Donation Requirements
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-[#00E0C6] rounded-full mr-2"></div>
                    Age: 18-65 years
                  </div>
                  <div className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-[#00E0C6] rounded-full mr-2"></div>
                    Weight: Minimum 50kg
                  </div>
                  <div className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-[#00E0C6] rounded-full mr-2"></div>
                    Good overall health
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-[#FF9A1F] rounded-full mr-2"></div>
                    No major illness
                  </div>
                  <div className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-[#FF9A1F] rounded-full mr-2"></div>
                    No recent medications
                  </div>
                  <div className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-[#FF9A1F] rounded-full mr-2"></div>
                    Valid ID required
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Registration & Blood Groups */}
          <div className="space-y-8">
            {/* Registration Card */}
            <div className="glass rounded-2xl p-8 text-center">
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#B31E2B] to-[#FF4444] rounded-full flex items-center justify-center">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h3 className="font-saira text-2xl font-bold text-white mb-2">
                  Register Now
                </h3>
                <p className="text-white/70 mb-6">
                  Pre-register for the blood donation camp to help us organize better and save time on the day.
                </p>
              </div>

                <button
                  onClick={() => handleRegister()}
                  className="w-full bg-gradient-to-r from-[#B31E2B] to-[#FF4444] hover:from-[#A01A26] hover:to-[#FF3333] text-white text-lg px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center hover:scale-105 glow-red"
                >
                <ExternalLink className="w-5 h-5 mr-2" />
                Register for Blood Donation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>

              <p className="text-xs text-white/60 mt-4">
                Opens in a new window • Secure Google Forms
              </p>
            </div>

            {/* Blood Groups */}
            <div className="glass rounded-2xl p-6">
              <h4 className="font-saira text-xl font-bold text-white mb-4 text-center">
                All Blood Groups Needed
              </h4>
              <div className="grid grid-cols-4 gap-3">
                {bloodGroups.map((group, index) => (
                  <button 
                    key={group}
                    onClick={() => handleRegister(group)}
                    className={`text-center p-3 rounded-xl bg-gradient-to-br hover:scale-105 transition-all duration-300 cursor-pointer ${
                      index % 4 === 0 ? 'from-[#B31E2B]/20 to-[#FF4444]/20 border border-[#B31E2B]/30 hover:from-[#B31E2B]/30 hover:to-[#FF4444]/30' :
                      index % 4 === 1 ? 'from-[#FF9A1F]/20 to-[#FFB84D]/20 border border-[#FF9A1F]/30 hover:from-[#FF9A1F]/30 hover:to-[#FFB84D]/30' :
                      index % 4 === 2 ? 'from-[#6DE1FF]/20 to-[#87E8FF]/20 border border-[#6DE1FF]/30 hover:from-[#6DE1FF]/30 hover:to-[#87E8FF]/30' :
                      'from-[#00E0C6]/20 to-[#33E8D0]/20 border border-[#00E0C6]/30 hover:from-[#00E0C6]/30 hover:to-[#33E8D0]/30'
                    }`}
                    title={`Register for blood donation with ${group} blood group`}
                  >
                    <div className={`text-lg font-bold ${
                      index % 4 === 0 ? 'text-[#FF4444]' :
                      index % 4 === 1 ? 'text-[#FF9A1F]' :
                      index % 4 === 2 ? 'text-[#6DE1FF]' :
                      'text-[#00E0C6]'
                    }`}>
                      {group}
                    </div>
                    <div className="text-xs text-white/60 mt-1">
                      {group.includes('+') ? 'Positive' : 'Negative'}
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-sm text-center text-white/70 mt-4">
                Don't know your blood group? We'll test it for free!
              </p>
            </div>

            {/* Impact Stats */}
            <div className="glass rounded-2xl p-6">
              <h4 className="font-saira text-xl font-bold text-white mb-4 text-center">
                Your Impact
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#B31E2B] mb-1">1</div>
                  <div className="text-xs text-white/70">Donation</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#FF9A1F] mb-1">3</div>
                  <div className="text-xs text-white/70">Lives Saved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#00E0C6] mb-1">120</div>
                  <div className="text-xs text-white/70">Days Supply</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <div className="glass rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Phone className="w-5 h-5 text-[#6DE1FF] mr-2" />
              <h4 className="font-semibold text-white">Need Help or Have Questions?</h4>
            </div>
            <p className="text-white/70 text-sm">
              Contact the organizing team for any queries about the blood donation camp or registration process.
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#B31E2B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#FF9A1F]/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
