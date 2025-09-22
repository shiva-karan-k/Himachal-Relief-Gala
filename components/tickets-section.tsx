"use client";

import { useState } from 'react';
import { Star, Users, Crown, Building2 } from 'lucide-react';
import { siteConfig } from '@/app/config/site';

const ticketIcons = [Users, Star, Crown, Building2];
const ticketColors = ['text-[#6DE1FF]', 'text-[#00E0C6]', 'text-[#FF9A1F]', 'text-[#B31E2B]'];

export default function TicketsSection() {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const handleQuantityChange = (tier: string, quantity: number) => {
    setQuantities(prev => ({ ...prev, [tier]: quantity }));
  };

  const handleBuyTicket = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section id="tickets" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-saira text-3xl md:text-4xl font-bold mb-4 text-white">
            Join the Gala Night Dinner
          </h2>
          <p className="text-lg text-white/70 mb-2">
            Culture, community, gratitude.
          </p>
          <div className="glass-dark rounded-lg px-4 py-2 inline-block">
            <span className="text-[#FF9A1F] text-sm font-semibold">Limited seats</span>
          </div>
        </div>

        {/* Tickets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.tickets.map((ticket, index) => {
            const Icon = ticketIcons[index];
            const colorClass = ticketColors[index];
            
            return (
              <div 
                key={ticket.tier} 
                className="glass rounded-2xl p-6 hover-lift group relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${colorClass.replace('text-', 'bg-').replace('[', '').replace(']', '')} opacity-5 rounded-full blur-2xl`}></div>
                
                {/* Badge for Premium Tiers */}
                {index >= 2 && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-[#FF9A1F] to-[#B31E2B] text-white text-xs px-2 py-1 rounded-full font-semibold">
                      PREMIUM
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${colorClass} bg-current/10`}>
                  <Icon className={`w-6 h-6 ${colorClass}`} />
                </div>

                {/* Tier Name */}
                <h3 className="font-saira text-xl font-semibold mb-2 text-white group-hover:text-[#6DE1FF] transition-colors">
                  {ticket.tier}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#FF9A1F]">
                    ₹{ticket.price.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-6 text-sm text-white/70 space-y-1">
                  {index === 0 && (
                    <>
                      <p>• Standing/commons area</p>
                      <p>• Cultural performances</p>
                      <p>• Light refreshments</p>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <p>• Priority seating</p>
                      <p>• Full dinner included</p>
                      <p>• Welcome drink</p>
                      <p>• Cultural performances</p>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <p>• Reserved table for 4</p>
                      <p>• Premium dinner menu</p>
                      <p>• Complimentary beverages</p>
                      <p>• Meet & greet with guests</p>
                      <p>• Certificate of appreciation</p>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <p>• Corporate table for 10</p>
                      <p>• Premium dinner & beverages</p>
                      <p>• Brand visibility opportunities</p>
                      <p>• Stage acknowledgment</p>
                      <p>• CSR certificate</p>
                    </>
                  )}
                </div>

                {/* Quantity Selector */}
                <div className="mb-4">
                  <label className="block text-sm text-white/70 mb-2">Quantity</label>
                  <select 
                    className="w-full glass-dark rounded-lg px-3 py-2 text-white focus-ring"
                    value={quantities[ticket.tier] || 1}
                    onChange={(e) => handleQuantityChange(ticket.tier, parseInt(e.target.value))}
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>

                {/* Buy Button */}
                <button 
                  onClick={() => handleBuyTicket(ticket.link)}
                  className="w-full btn-primary text-center"
                >
                  Buy Now
                </button>
              </div>
            );
          })}
        </div>

        {/* Corporate Support Note */}
        <div className="mt-12 text-center">
          <div className="glass rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-white/80 mb-2">
              <strong>Want to support on stage?</strong>
            </p>
            <p className="text-white/70">
              Get a Patron/Corporate table and join our acknowledgment ceremony.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}