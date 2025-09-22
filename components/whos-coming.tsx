"use client";

import { useEffect, useState } from 'react';
import { Users, Star, Briefcase, Heart } from 'lucide-react';

const politicians = [
  "Sukhvinder Singh Sukhu", "Jai Ram Thakur", "Vikramaditya Singh", "Harsh Vardhan Chauhan",
  "Mukesh Agnihotri", "Govind Singh Thakur", "Anil Sharma", "Kaul Singh Thakur",
  "Rajesh Dharmani", "Sanjay Awasthi", "Bambar Thakur", "Suresh Kashyap"
];

const actors = [
  "Kangana Ranaut", "Preity Zinta", "Yami Gautam", "Anupam Kher",
  "Pankaj Tripathi", "Rajkummar Rao", "Kriti Sanon", "Ayushmann Khurrana",
  "Taapsee Pannu", "Bhumi Pednekar", "Kartik Aaryan", "Shraddha Kapoor"
];

const influencers = [
  "Ranveer Allahbadia", "Ankur Warikoo", "Raj Shamani", "Tanmay Bhat",
  "Ashish Chanchlani", "Carry Minati", "Bhuvan Bam", "Harsh Beniwal",
  "Prajakta Koli", "Dolly Singh", "Kusha Kapila", "Mostlysane"
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
          <ScrollingNames 
            names={politicians} 
            icon={Briefcase} 
            color="text-[#6DE1FF]"
            delay={0}
          />
          <ScrollingNames 
            names={actors} 
            icon={Star} 
            color="text-[#FF9A1F]"
            delay={1}
          />
          <ScrollingNames 
            names={influencers} 
            icon={Heart} 
            color="text-[#00E0C6]"
            delay={2}
          />
          <ScrollingNames 
            names={[...politicians.slice(6), ...actors.slice(6), ...influencers.slice(6)]} 
            icon={Users} 
            color="text-[#B31E2B]"
            delay={3}
          />
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