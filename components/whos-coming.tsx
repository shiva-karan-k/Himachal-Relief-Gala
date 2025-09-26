"use client";

import { useEffect, useState } from 'react';
import { Users, Star, Briefcase, Heart } from 'lucide-react';

const disasterHeroes = [
  "NDRF Personnel", "Police Officers", "Local Administration", "Ronid Pundir", 
  "Sahil Thakur", "Sarbjeet Singh Bobby"
];

const communityLeaders = [
  "Local Singers", "Natti Folk Dancers", "Kullu Dhol Performers", "Village Elders",
  "Women's Empowerment Leaders", "Community Volunteers", "Relief Coordinators"
];

const distinguishedGuests = [
  "Kullu District Administration", "Himachal Tourism Board", "Local Relief Foundation",
  "Blood Camp Organizers", "Medical Staff", "Cultural Artists"
];

const ScrollingNames = ({ names, icon: Icon, color, delay = 0 }: { 
  names: string[], 
  icon: any, 
  color: string, 
  delay?: number 
}) => {
  return (
    <div className="flex items-center space-x-4 overflow-hidden">
      <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${color} bg-current/10 flex items-center justify-center`}>
        <Icon className={`w-4 h-4 ${color}`} />
      </div>
      <div className="flex-1 overflow-hidden">
        <div 
          className="flex space-x-8 animate-scroll whitespace-nowrap"
          style={{ animationDelay: `${delay}s` }}
        >
          {[...names, ...names].map((name, index) => (
            <span key={index} className="text-white/80 font-medium">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function WhosComing() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-saira text-3xl md:text-4xl font-bold mb-4 text-white">
            Who's Coming
          </h2>
          <p className="text-lg text-white/70">
            Divine blessings, distinguished guests, and communities united for relief
          </p>
        </div>

        {/* Divine Gathering */}
        <div className="glass rounded-2xl p-8 mb-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-saira text-2xl font-bold mb-4 text-[#FF9A1F]">
              🙏 Divine Gathering 🙏
            </h3>
            <p className="text-xl text-white mb-4 leading-relaxed">
              <strong className="text-[#6DE1FF]">Devis from 200+ local villages</strong> arrive to meet <strong className="text-[#FF9A1F]">Lord Raghunathji</strong>
            </p>
            <p className="text-white/70 leading-relaxed">
              This sacred event brings together the divine presence of village deities with Lord Raghunathji, 
              creating a spiritually charged atmosphere where tradition meets compassion. The blessings of 
              these divine entities will grace our relief efforts, making this gala not just a fundraiser, 
              but a sacred mission of service.
            </p>
          </div>
        </div>

        {/* Scrolling Names */}
        <div className="glass rounded-2xl p-8 space-y-6">
          <div className="mb-4">
            <h4 className="font-saira text-lg font-semibold text-[#B31E2B] mb-2 flex items-center">
              🏆 Disaster Heroes Being Honored
            </h4>
            <ScrollingNames 
              names={disasterHeroes} 
              icon={Heart} 
              color="text-[#B31E2B]"
              delay={0}
            />
          </div>
          
          <div className="mb-4">
            <h4 className="font-saira text-lg font-semibold text-[#FF9A1F] mb-2 flex items-center">
              🎭 Community Performers & Leaders
            </h4>
            <ScrollingNames 
              names={communityLeaders} 
              icon={Star} 
              color="text-[#FF9A1F]"
              delay={1}
            />
          </div>

          <div className="mb-4">
            <h4 className="font-saira text-lg font-semibold text-[#6DE1FF] mb-2 flex items-center">
              🤝 Distinguished Guests & Supporters
            </h4>
            <ScrollingNames 
              names={distinguishedGuests} 
              icon={Briefcase} 
              color="text-[#6DE1FF]"
              delay={2}
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="glass rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-white/80 mb-2">
              <strong>Want to join them on stage?</strong>
            </p>
            <p className="text-white/70">
              Get a Patron or Corporate table and be part of our acknowledgment ceremony.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}