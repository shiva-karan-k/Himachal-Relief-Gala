import { Truck, Users, BarChart3 } from 'lucide-react';

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

export default function WhyMatters() {
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
              Our <strong className="text-white">₹20 lakh crowdfunding campaign</strong> will provide essential relief kits to <strong className="text-white">800-1000 families</strong> across affected regions. Each kit, valued at <strong className="text-white">₹2,000-₹2,500</strong>, contains rice, dal, oil, salt, milk powder, and hygiene essentials—ensuring families have dignified support for weeks.
            </p>
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