"use client";

import { Heart, Shield, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0A1018] to-[#070C14] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/samart-logo.jpg" 
                alt="Samarthya Foundation" 
                className="w-10 h-10 rounded-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'w-10 h-10 rounded-full bg-gradient-to-br from-[#00E0C6] to-[#6DE1FF] flex items-center justify-center text-white font-bold text-sm';
                    fallback.textContent = 'SF';
                    parent.appendChild(fallback);
                  }
                }}
              />
              <div>
                <h3 className="font-saira text-xl font-bold text-white">Yuvathon</h3>
                <p className="text-sm text-white/70">Samarthya Foundation</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Committed to community welfare, disaster relief, and social empowerment through transparent, accountable giving.
            </p>
            <div className="flex items-center space-x-2 text-sm text-white/60">
              <Shield className="w-4 h-4" />
              <span>80G Tax Exempt • Est. 2021</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-saira text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('donate')}
                  className="text-white/70 hover:text-[#6DE1FF] transition-colors text-sm"
                >
                  Donate Now
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('tickets')}
                  className="text-white/70 hover:text-[#6DE1FF] transition-colors text-sm"
                >
                  Pahadi Night Tickets
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('blood-donate')}
                  className="text-white/70 hover:text-[#6DE1FF] transition-colors text-sm"
                >
                  Blood Donation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('schedule')}
                  className="text-white/70 hover:text-[#6DE1FF] transition-colors text-sm"
                >
                  4-Day Schedule
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="space-y-4">
            <h4 className="font-saira text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/pricing" className="text-white/70 hover:text-[#6DE1FF] transition-colors text-sm">
                  Pricing & Options
                </a>
              </li>
              <li>
                <a href="/pricing-policy" className="text-white/70 hover:text-[#6DE1FF] transition-colors text-sm">
                  Pricing Policy
                </a>
              </li>
              <li>
                <a href="/shipping-policy" className="text-white/70 hover:text-[#6DE1FF] transition-colors text-sm">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="/terms-conditions" className="text-white/70 hover:text-[#6DE1FF] transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-white/70 hover:text-[#6DE1FF] transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/refund-policy" className="text-white/70 hover:text-[#6DE1FF] transition-colors text-sm">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & About */}
          <div className="space-y-4">
            <h4 className="font-saira text-lg font-semibold text-white">Contact & About</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about-us" className="text-white/70 hover:text-[#6DE1FF] transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/70 hover:text-[#6DE1FF] transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/legal" className="text-white/70 hover:text-[#6DE1FF] transition-colors text-sm">
                  Legal Information
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <div className="flex items-center space-x-2 text-sm text-white/60">
                <Phone className="w-4 h-4" />
                <a href="tel:+919258729273" className="hover:text-[#6DE1FF] transition-colors">
                  +91 92587 29273
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2025 Yuvathon by Samarthya Foundation. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-sm text-white/60">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by</span>
              <a
                href="https://studio.sted.space"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6DE1FF] hover:text-[#00E0C6] transition-colors"
              >
                STED Studio
              </a>
              <span>&</span>
              <span className="text-[#00E0C6]">Cyber Cubes</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
