'use client';

import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const leadPartner = {
  name: "Cyber Cubes",
  description: "Leading technology partner powering our digital initiatives",
  website: "https://cybercubes.tech"
};

const partners = [
  { 
    name: "STED Studio", 
    description: "Creative design and development",
    website: "https://studio.sted.space"
  },
  { 
    name: "Local Relief Foundation", 
    description: "Ground-level distribution network"
  },
  { 
    name: "Himachal Tourism Board", 
    description: "Event coordination and logistics"
  },
  { 
    name: "Kullu District Administration", 
    description: "Official support and permissions"
  }
];

export default function PartnersVenue() {
  const handleAddToCalendar = () => {
    const startDate = '20251004T060000Z';
    const endDate = '20251007T220000Z';
    const title = encodeURIComponent('Himachal Relief & Gala - Kullu Dussehra');
    const details = encodeURIComponent('4-day charity gala for Himachal flood relief during Kullu Dussehra celebration');
    const location = encodeURIComponent('Kullu, Himachal Pradesh, India');
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Himachal Relief Gala//EN
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
        {/* Partners Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-saira text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Partners
            </h2>
            <p className="text-lg text-white/70">
              Supporting our mission together
            </p>
          </div>

          {/* Lead Partner */}
          <div className="text-center mb-12">
            <h3 className="font-saira text-xl font-semibold mb-6 text-[#6DE1FF]">
              Headed by
            </h3>
            <div className="glass rounded-2xl p-8 max-w-md mx-auto hover-lift">
              <div className="mb-4">
                <h4 className="font-saira text-2xl font-bold text-white mb-2">
                  {leadPartner.name}
                </h4>
                <p className="text-white/70 mb-4">{leadPartner.description}</p>
                <a 
                  href={leadPartner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#6DE1FF] hover:text-[#00E0C6] transition-colors focus-ring rounded px-3 py-1"
                >
                  Visit Website <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Supporting Partners */}
          <div>
            <h3 className="font-saira text-xl font-semibold mb-6 text-white text-center">
              Supporting Partners
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="glass rounded-xl p-6 hover-lift text-center">
                  <h4 className="font-semibold text-white mb-2">{partner.name}</h4>
                  <p className="text-white/70 text-sm mb-3">{partner.description}</p>
                  {partner.website && (
                    <a 
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#6DE1FF] hover:text-[#00E0C6] transition-colors focus-ring rounded text-sm"
                    >
                      Visit <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

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
      </div>
    </section>
  );
}