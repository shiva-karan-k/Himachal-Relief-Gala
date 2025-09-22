'use client';

import { Phone, Mail, MessageCircle, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-saira text-xl font-semibold mb-6 text-white">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a 
                href="tel:+91XXXXXXXXXX"
                className="flex items-center space-x-3 text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded"
              >
                <Phone className="w-4 h-4" />
                <span>+91-XXXXX-XXXXX</span>
              </a>
              <a 
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-[#00E0C6] transition-colors focus-ring rounded"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Support</span>
              </a>
              <a 
                href="mailto:relief@himachalgala.org"
                className="flex items-center space-x-3 text-white/80 hover:text-[#FF9A1F] transition-colors focus-ring rounded"
              >
                <Mail className="w-4 h-4" />
                <span>relief@himachalgala.org</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-saira text-xl font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <div className="space-y-3">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded text-left"
              >
                About the Cause
              </button>
              <button 
                onClick={() => document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded text-left"
              >
                Event Tickets
              </button>
              <button 
                onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded text-left"
              >
                Make a Donation
              </button>
              <a 
                href="/thank-you"
                className="block text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded"
              >
                Thank You Page
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-saira text-xl font-semibold mb-6 text-white">
              Legal
            </h3>
            <div className="space-y-3">
              <a 
                href="/legal#privacy"
                className="block text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded"
              >
                Privacy Policy
              </a>
              <a 
                href="/legal#refunds"
                className="block text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded"
              >
                Refund Policy
              </a>
              <a 
                href="/legal#terms"
                className="block text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded"
              >
                Terms of Service
              </a>
              <a 
                href="/legal#tax"
                className="block text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded"
              >
                Tax Information
              </a>
            </div>
          </div>

          {/* Social & Updates */}
          <div>
            <h3 className="font-saira text-xl font-semibold mb-6 text-white">
              Stay Connected
            </h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-[#6DE1FF]/20 transition-colors focus-ring"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-[#6DE1FF]" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-[#00E0C6]/20 transition-colors focus-ring"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-[#00E0C6]" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-[#FF9A1F]/20 transition-colors focus-ring"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-[#FF9A1F]" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-[#B31E2B]/20 transition-colors focus-ring"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-[#B31E2B]" />
              </a>
            </div>
            <p className="text-white/70 text-sm">
              Follow us for real-time updates and behind-the-scenes content from the relief efforts.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/70 text-sm">
              © 2025 Himachal Relief & Gala. All rights reserved.
            </div>
            <div className="text-white/70 text-sm">
              Built with ❤️ by <a 
                href="https://studio.sted.space" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#6DE1FF] hover:text-[#00E0C6] transition-colors focus-ring rounded px-1"
              >
                STED Studio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}