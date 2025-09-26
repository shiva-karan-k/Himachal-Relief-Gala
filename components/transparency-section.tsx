import { Clock, MapPin, Package, CheckCircle } from 'lucide-react';

const updates = [
  {
    time: "6:30 PM Today",
    action: "₹45,000 raised → 20 kits dispatched",
    location: "Kullu Valley villages",
    status: "completed",
    image: "/hp.webp"
  },
  {
    time: "5:15 PM Today", 
    action: "₹32,500 raised → 15 kits prepared",
    location: "Manali relief center",
    status: "in-progress",
    image: "/hp2.webp"
  },
  {
    time: "2:00 PM Today",
    action: "₹28,000 raised → 12 kits dispatched", 
    location: "Bhuntar area families",
    status: "completed",
    image: "/kullu-F1.jpg"
  },
  {
    time: "11:30 AM Today",
    action: "Local procurement complete",
    location: "Kullu market vendors", 
    status: "completed",
    image: "/Patlikuhal bridge Kullu.webp"
  }
];

export default function TransparencySection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-saira text-3xl md:text-4xl font-bold mb-4 text-white">
            Where your money went—every 24 hours
          </h2>
          <p className="text-lg text-white/70">
            Live updates from our relief operations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Live Updates Feed */}
          <div className="space-y-6">
            {updates.map((update, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <Clock className="w-4 h-4 text-[#6DE1FF]" />
                      <span className="text-sm text-[#6DE1FF] font-medium">
                        {update.time}
                      </span>
                      <div className={`w-2 h-2 rounded-full ${
                        update.status === 'completed' ? 'bg-[#00E0C6]' : 'bg-[#FF9A1F]'
                      }`}></div>
                    </div>

                    <h3 className="font-saira text-lg font-semibold text-white mb-2">
                      {update.action}
                    </h3>

                    <div className="flex items-center space-x-2 text-white/70">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{update.location}</span>
                    </div>

                    <div className="mt-3 flex items-center space-x-2">
                      {update.status === 'completed' ? (
                        <CheckCircle className="w-4 h-4 text-[#00E0C6]" />
                      ) : (
                        <Package className="w-4 h-4 text-[#FF9A1F]" />
                      )}
                      <span className={`text-sm font-medium ${
                        update.status === 'completed' ? 'text-[#00E0C6]' : 'text-[#FF9A1F]'
                      }`}>
                        {update.status === 'completed' ? 'Completed' : 'In Progress'}
                      </span>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="lg:w-48 h-32 rounded-xl overflow-hidden">
                    <img 
                      src={update.image}
                      alt={`Relief operation: ${update.action}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Summary */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="glass-dark rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-[#6DE1FF] mb-2">67</div>
              <div className="text-white/70">Kits Distributed</div>
            </div>
            <div className="glass-dark rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-[#00E0C6] mb-2">12</div>
              <div className="text-white/70">Villages Reached</div>
            </div>
            <div className="glass-dark rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-[#FF9A1F] mb-2">334</div>
              <div className="text-white/70">People Helped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}