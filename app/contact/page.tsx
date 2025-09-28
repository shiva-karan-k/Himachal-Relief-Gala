"use client";

import { useRouter } from 'next/navigation';
import FloatingNav from '@/components/floating-nav';

export default function Contact() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070C14] via-[#0A1018] to-[#0E1826]">
      <FloatingNav />
      <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <img 
                src="/samart-logo.jpg" 
                alt="Samarthya Foundation" 
                className="w-16 h-16 rounded-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'w-16 h-16 rounded-full bg-gradient-to-br from-[#00E0C6] to-[#6DE1FF] flex items-center justify-center text-white font-bold text-lg';
                    fallback.textContent = 'SF';
                    parent.appendChild(fallback);
                  }
                }}
              />
              <h1 className="font-saira text-3xl font-bold text-white">
                Contact Us
              </h1>
            </div>
            <p className="text-white/70 text-lg">
              Get in touch with Samarthya Foundation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="glass-dark rounded-xl p-6">
                <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                  Contact Information
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#6DE1FF]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#6DE1FF]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <a href="tel:+919258729273" className="text-[#6DE1FF] hover:underline">
                        +91 92587 29273
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#00E0C6]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#00E0C6]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Location</h3>
                      <p className="text-white/70">Himachal Pradesh, India</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF9A1F]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#FF9A1F]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Established</h3>
                      <p className="text-white/70">2021</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-dark rounded-xl p-6">
                <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                  Quick Links
                </h2>
                <div className="space-y-2">
                  <a href="/about-us" className="block text-white/70 hover:text-[#6DE1FF] transition-colors">
                    About Samarthya Foundation
                  </a>
                  <a href="/pricing-policy" className="block text-white/70 hover:text-[#6DE1FF] transition-colors">
                    Pricing Policy
                  </a>
                  <a href="/privacy-policy" className="block text-white/70 hover:text-[#6DE1FF] transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/terms-conditions" className="block text-white/70 hover:text-[#6DE1FF] transition-colors">
                    Terms & Conditions
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-dark rounded-xl p-6">
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                Send us a Message
              </h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white/70 text-sm mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#6DE1FF] transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/70 text-sm mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#6DE1FF] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white/70 text-sm mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#6DE1FF] transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white/70 text-sm mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#6DE1FF] transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="event">Event Information</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/70 text-sm mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#6DE1FF] transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#6DE1FF] to-[#00E0C6] hover:from-[#5BC5E6] hover:to-[#00C7B8] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
