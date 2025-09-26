'use client';

import { MapPin, Calendar, ExternalLink } from 'lucide-react';


export default function PartnersVenue() {
  const handleAddToCalendar = () => {
    const startDate = '20251004T060000Z';
    const endDate = '20251007T220000Z';
    const title = encodeURIComponent('Yuvathon - Kullu Dussehra');
    const details = encodeURIComponent('4-day charity gala for Himachal flood relief during Kullu Dussehra celebration');
    const location = encodeURIComponent('Kullu, Himachal Pradesh, India');
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Yuvathon//EN
BEGIN:VEVENT
UID:himachal-relief-gala-2025@example.com
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${decodeURIComponent(title)}
DESCRIPTION:${decodeURIComponent(details)}
LOCATION:${decodeURIComponent(location)}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'himachal-relief-gala.ics';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">

        {/* Venue Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Venue Info */}
          <div className="glass rounded-2xl p-8">
            <h3 className="font-saira text-2xl font-semibold mb-6 text-white">
              Event Venue
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#6DE1FF] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Kullu Dussehra Ground</div>
                  <div className="text-white/70">Dhalpur Maidan, Kullu, Himachal Pradesh</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-[#00E0C6] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">October 4-7, 2025</div>
                  <div className="text-white/70">4 days of celebration and giving</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleAddToCalendar}
                className="btn-secondary flex items-center justify-center"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Add to Calendar
              </button>
              
              <a 
                href="https://maps.google.com/?q=Dhalpur+Maidan,+Kullu,+Himachal+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View on Maps
              </a>
            </div>

            {/* Venue Details */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <h4 className="font-semibold text-white mb-3">Venue Highlights</h4>
              <ul className="text-white/70 space-y-2 text-sm">
                <li>• Historic Dussehra celebration ground</li>
                <li>• Capacity for 5,000+ attendees</li>
                <li>• Traditional Himachali architecture</li>
                <li>• Accessible by road from major cities</li>
                <li>• Parking available for 1,000+ vehicles</li>
              </ul>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="glass rounded-2xl p-2">
            <div className="w-full h-64 lg:h-full rounded-xl bg-white/5 flex items-center justify-center relative overflow-hidden">
              {/* Map Background */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23070C14"/><path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="%236DE1FF" stroke-width="1"/><circle cx="50" cy="50" r="3" fill="%23FF9A1F"/><path d="M30,30 L70,30 M30,40 L60,40 M30,50 L65,50 M30,60 L55,60" stroke="%2300E0C6" stroke-width="0.5"/></svg>')`,
                  backgroundSize: 'cover'
                }}
              ></div>
              
              {/* Map Content */}
              <div className="relative z-10 text-center">
                <MapPin className="w-8 h-8 text-[#FF9A1F] mx-auto mb-2" />
                <div className="font-semibold text-white">Kullu Dussehra Ground</div>
                <div className="text-white/70 text-sm">Dhalpur Maidan</div>
                <div className="mt-4">
                  <a 
                    href="https://maps.google.com/?q=Dhalpur+Maidan,+Kullu,+Himachal+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#6DE1FF] hover:text-[#00E0C6] transition-colors focus-ring rounded px-3 py-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Measures */}
        <div className="mt-16">
          <h3 className="font-saira text-2xl font-bold text-white mb-8 text-center">
            🛡️ Safety & Security Measures
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#6DE1FF]/20 to-[#00E0C6]/20 rounded-full flex items-center justify-center border border-[#6DE1FF]/30">
                <span className="text-2xl">🏥</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Medical Support</h4>
              <p className="text-white/70 text-sm">On-site medical staff from Kullu hospital with emergency response team</p>
            </div>
            
            <div className="glass rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#FF9A1F]/20 to-[#B31E2B]/20 rounded-full flex items-center justify-center border border-[#FF9A1F]/30">
                <span className="text-2xl">🧼</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Health Protocols</h4>
              <p className="text-white/70 text-sm">Masks, sanitizer, and basic first aid available throughout the venue</p>
            </div>
            
            <div className="glass rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#00E0C6]/20 to-[#6DE1FF]/20 rounded-full flex items-center justify-center border border-[#00E0C6]/30">
                <span className="text-2xl">👮</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Security</h4>
              <p className="text-white/70 text-sm">Local police support for comprehensive security and crowd management</p>
            </div>
          </div>
        </div>

        {/* Media & Communication */}
        <div className="mt-12 glass rounded-2xl p-8 text-center">
          <h3 className="font-saira text-xl font-bold text-white mb-4">
            📺 Media & Communication
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-[#6DE1FF] font-semibold mb-2">📰 Press Coverage</div>
              <div className="text-white/70">Local Himachali newspapers and radio stations invited for coverage</div>
            </div>
            <div>
              <div className="text-[#FF9A1F] font-semibold mb-2">📸 Transparency</div>
              <div className="text-white/70">Daily posts with images from affected villages and distribution updates</div>
            </div>
            <div>
              <div className="text-[#00E0C6] font-semibold mb-2">🏆 Recognition</div>
              <div className="text-white/70">Donor and guest names acknowledged during Pahadi Night (optional)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}