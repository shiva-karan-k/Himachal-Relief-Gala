"use client";

import { Truck, Users, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const reasons = [
  {
    icon: Truck,
    title: "Groceries & essentials delivered nightly",
    description: "Immediate relief first. Sustainability next.",
    color: "text-[#6DE1FF]"
  },
  {
    icon: Users,
    title: "Local kirana partners + panchayats",
    description: "Local procurement = faster, cheaper, dignified help.",
    color: "text-[#00E0C6]"
  },
  {
    icon: BarChart3,
    title: "Transparency posts every 24h",
    description: "Nightly updates you can verify.",
    color: "text-[#FF9A1F]"
  }
];

// Images from the flood and relief efforts
const floodImages = [
  {
    src: '/kullu-F1.jpg',
    alt: 'Kullu flood damage - families affected by heavy rains',
    caption: 'Kullu district flood damage from July-August heavy rains'
  },
  {
    src: '/Patlikuhal bridge Kullu.webp',
    alt: 'Patlikuhal bridge damaged in Kullu floods',
    caption: 'Patlikuhal bridge affected by flash floods'
  },
  {
    src: '/hp.webp',
    alt: 'Himachal Pradesh flood relief efforts',
    caption: 'Relief efforts across affected regions'
  },
  {
    src: '/hp2.webp',
    alt: 'Himachal Pradesh communities coming together',
    caption: 'Communities supporting each other during crisis'
  },
  {
    src: '/hp3.avif',
    alt: 'Himachal Pradesh recovery and rebuilding',
    caption: 'Recovery and rebuilding efforts in progress'
  },
  {
    src: '/ezgif.com-optimize_2.gif',
    alt: 'Dynamic view of relief operations',
    caption: 'Ongoing relief operations and support efforts'
  }
];

export default function WhyMatters() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % floodImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % floodImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + floodImages.length) % floodImages.length);
  };
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-saira text-3xl md:text-4xl font-bold mb-4 text-white">
            Why It Matters Now
          </h2>
          <div className="glass rounded-2xl p-6 max-w-4xl mx-auto mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#6DE1FF]">₹20 Lakhs</div>
                <div className="text-white/80">Crowdfunding Goal</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#00E0C6]">800-1000</div>
                <div className="text-white/80">Families to Support</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#FF9A1F]">₹2,000-₹2,500</div>
                <div className="text-white/80">Per Family Kit</div>
              </div>
            </div>
            <p className="text-white/70 text-center mt-4 leading-relaxed">
              Our <strong className="text-white">₹20 lakh crowdfunding campaign</strong> will provide essential relief kits to <strong className="text-white">800-1000 families</strong> across <strong className="text-[#FF9A1F]">Kullu district</strong>. Each kit, valued at <strong className="text-white">₹2,000-₹2,500</strong>, contains rice, dal, oil, salt, milk powder, and hygiene essentials—ensuring families have dignified support for weeks.
            </p>
            <div className="mt-4 p-4 glass-dark rounded-xl">
              <p className="text-white/80 text-sm text-center">
                <span className="text-[#00E0C6] font-semibold">Samarthya Foundation</span> is a registered charitable organization working for community welfare and disaster relief. All donations are eligible for <span className="text-[#6DE1FF]">80G tax exemption</span>.
              </p>
            </div>
          </div>

          {/* Kullu-Specific Relief Information */}
          <div className="glass rounded-2xl p-8 max-w-6xl mx-auto mb-8">
            <h3 className="font-saira text-2xl font-bold text-[#FF9A1F] mb-6 text-center">
              🏔️ Why Kullu Needs Your Support
            </h3>
            <p className="text-white/80 text-center mb-6 leading-relaxed">
              In July–August, heavy rains and flash floods disrupted lives across Himachal Pradesh. 
              <strong className="text-white"> Kullu district was one of the worst affected</strong>; many families lost homes, 
              belongings, and livelihoods. Relief is still urgent, especially in 
              <strong className="text-[#6DE1FF]"> interior valleys where access is limited</strong>.
            </p>

            {/* Image Carousel */}
            <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={floodImages[currentImageIndex].src}
                  alt={floodImages[currentImageIndex].alt}
                  className="w-full h-full object-cover transition-all duration-500"
                  style={{ objectPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-white text-sm font-medium">
                    {floodImages[currentImageIndex].caption}
                  </p>
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-2">
                  {floodImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Relief Kit Details */}
              <div>
                <h4 className="font-semibold text-[#6DE1FF] mb-4 flex items-center">
                  📦 Relief Kit Details (Kullu-Specific)
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="glass-dark rounded-lg p-3">
                    <div className="text-white font-medium mb-2">Local Staples:</div>
                    <div className="text-white/70">Rice, rajma, atta, pulses, and cooking oil</div>
                  </div>
                  <div className="glass-dark rounded-lg p-3">
                    <div className="text-white font-medium mb-2">Hygiene Essentials:</div>
                    <div className="text-white/70">Soap, detergent, sanitary pads, masks, sanitiser</div>
                  </div>
                  <div className="glass-dark rounded-lg p-3">
                    <div className="text-white font-medium mb-2">Winter Support:</div>
                    <div className="text-white/70">Warm blankets for high-altitude households</div>
                  </div>
                </div>
              </div>

              {/* Transparency Promise */}
              <div>
                <h4 className="font-semibold text-[#00E0C6] mb-4 flex items-center">
                  🤝 Transparency Promise
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="glass-dark rounded-lg p-3">
                    <div className="text-white font-medium mb-2">Daily Updates:</div>
                    <div className="text-white/70">Distribution updates from Kullu villages with photos/videos</div>
                  </div>
                  <div className="glass-dark rounded-lg p-3">
                    <div className="text-white font-medium mb-2">Verified Distribution:</div>
                    <div className="text-white/70">Signed receipts from each family</div>
                  </div>
                  <div className="glass-dark rounded-lg p-3">
                    <div className="text-white font-medium mb-2">Official Partnership:</div>
                    <div className="text-white/70">Kullu District Administration & local volunteers</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-6 p-4 glass-dark rounded-xl">
              <div className="text-[#FF9A1F] font-semibold mb-2">🎯 Focus Areas</div>
              <div className="text-white/80">
                <strong className="text-white">Grocery and hygiene security for one month</strong> across 
                Kullu valley and nearby villages where families have minimal access to markets.
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl p-6 hover-lift group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${reason.color} bg-current/10`}>
                <reason.icon className={`w-6 h-6 ${reason.color}`} />
              </div>
              
              <h3 className="font-saira text-xl font-semibold mb-3 text-white group-hover:text-[#6DE1FF] transition-colors">
                {reason.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}