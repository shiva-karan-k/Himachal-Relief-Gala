"use client";

import { useRouter } from 'next/navigation';
import FloatingNav from '@/components/floating-nav';

export default function AboutUs() {
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
                About Samarthya Foundation
              </h1>
            </div>
            <p className="text-white/70 text-lg">
              Jan Kalyan Sanstha • Established 2021
            </p>
          </div>
          
          <div className="space-y-6 text-white/80">
            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                Our Mission
              </h2>
              <p className="mb-4">
                Samarthya Foundation is a registered charitable organization committed to community welfare, 
                disaster relief, and social empowerment. We believe in transparent, accountable, and impactful giving 
                that creates lasting positive change in communities across India.
              </p>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                Our Vision
              </h2>
              <p className="mb-4">
                To build resilient communities through timely disaster response, sustainable development initiatives, 
                and empowering vulnerable populations with dignity and hope.
              </p>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                Key Focus Areas
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-dark rounded-xl p-4">
                  <h3 className="font-semibold text-[#00E0C6] mb-2">Disaster Relief</h3>
                  <p className="text-sm">Emergency response and rehabilitation support for communities affected by natural disasters</p>
                </div>
                <div className="glass-dark rounded-xl p-4">
                  <h3 className="font-semibold text-[#FF9A1F] mb-2">Community Welfare</h3>
                  <p className="text-sm">Essential supplies, healthcare support, and infrastructure development</p>
                </div>
                <div className="glass-dark rounded-xl p-4">
                  <h3 className="font-semibold text-[#6DE1FF] mb-2">Education Support</h3>
                  <p className="text-sm">Educational resources and scholarship programs for underprivileged children</p>
                </div>
                <div className="glass-dark rounded-xl p-4">
                  <h3 className="font-semibold text-[#B31E2B] mb-2">Healthcare Access</h3>
                  <p className="text-sm">Medical camps, blood donation drives, and health awareness programs</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                Legal Status & Compliance
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Registered charitable organization under Indian law</li>
                <li>80G registration for tax-exempt donations</li>
                <li>FCRA compliance for international funding</li>
                <li>Transparent financial reporting and audits</li>
                <li>Governed by a board of trustees</li>
              </ul>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                Yuvathon Initiative
              </h2>
              <p className="mb-4">
                Yuvathon is our flagship initiative during the Kullu Dussehra festival, combining cultural celebration 
                with social impact. Through this 4-day event, we raise funds for immediate relief to families affected 
                by floods and landslides in Himachal Pradesh.
              </p>
              <div className="glass-dark rounded-xl p-4">
                <h3 className="font-semibold text-[#FF9A1F] mb-2">Impact Goals</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>₹20 lakh crowdfunding target</li>
                  <li>800-1000 families to support</li>
                  <li>₹2,000-₹2,500 relief kits per family</li>
                  <li>Essential supplies: rice, dal, oil, hygiene items</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-4">
                Contact Information
              </h2>
              <div className="glass-dark rounded-xl p-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-white mb-2">Phone</h3>
                    <a href="tel:+919258729273" className="text-[#6DE1FF] hover:underline">
                      +91 92587 29273
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Established</h3>
                    <p className="text-white/70">2021</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
