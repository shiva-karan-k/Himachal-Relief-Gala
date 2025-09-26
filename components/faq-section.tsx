"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is the refund policy for donations and tickets?",
    answer: "Donations are non-refundable as they directly support relief efforts. Ticket refunds are available up to 48 hours before the event date. Please contact our support team for assistance."
  },
  {
    question: "What are the entry rules and dress code for the gala?",
    answer: "Entry requires valid tickets. Traditional or formal attire is encouraged but not mandatory. Please carry a government-issued ID for verification."
  },
  {
    question: "How can I contact the organizers?",
    answer: "You can reach us via phone: +91-XXXXX-XXXXX, WhatsApp: +91-XXXXX-XXXXX, or email: relief@himachalgala.org"
  },
  {
    question: "Are media passes available?",
    answer: "Yes, accredited media personnel can apply for press passes. Please contact our media team at media@himachalgala.org with your credentials and assignment details."
  },
  {
    question: "How is the relief fund being distributed?",
    answer: "Funds are converted to grocery kits and distributed nightly through local panchayats and kirana partners. We publish detailed reports every 24 hours during the event period."
  },
  {
    question: "Can I volunteer during the event?",
    answer: "Absolutely! We welcome volunteers for various activities including registration, distribution, and event coordination. Please fill out our volunteer form or contact us directly."
  },
  {
    question: "What safety measures are in place?",
    answer: "We follow all local safety guidelines, provide sanitization stations, have medical support on-site, and maintain crowd management protocols throughout the event."
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-saira text-3xl md:text-4xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/70">
            Everything you need to know about the event
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors focus-ring"
              >
                <h3 className="font-saira text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems[index] ? (
                    <ChevronUp className="w-5 h-5 text-[#6DE1FF]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#6DE1FF]" />
                  )}
                </div>
              </button>
              
              {openItems[index] && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="glass rounded-xl p-6">
            <p className="text-white/80 mb-4">
              Have a question that's not answered here?
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}