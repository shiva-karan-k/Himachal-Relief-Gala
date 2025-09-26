"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Heart, Ticket, Droplets } from 'lucide-react';

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className={`glass rounded-2xl px-6 py-3 transition-all duration-300 ${
            scrolled ? 'bg-black/40' : ''
          }`}>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="font-saira font-bold text-xl text-[#6DE1FF] tracking-wide">
                Himachal Relief & Gala
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('tickets')}
                  className="text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded"
                >
                  Tickets
                </button>
                <button 
                  onClick={() => scrollToSection('donate')}
                  className="text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded"
                >
                  Donate
                </button>
                <button 
                  onClick={() => scrollToSection('schedule')}
                  className="text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded"
                >
                  4-Days
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded"
                >
                  FAQ
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded"
                >
                  Contact
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white focus-ring rounded p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-white/20">
                <div className="flex flex-col space-y-4">
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded text-left"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection('tickets')}
                    className="text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded text-left"
                  >
                    Tickets
                  </button>
                  <button 
                    onClick={() => scrollToSection('donate')}
                    className="text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded text-left"
                  >
                    Donate
                  </button>
                  <button 
                    onClick={() => scrollToSection('schedule')}
                    className="text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded text-left"
                  >
                    4-Days
                  </button>
                  <button 
                    onClick={() => scrollToSection('faq')}
                    className="text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded text-left"
                  >
                    FAQ
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-white/80 hover:text-[#6DE1FF] transition-colors focus-ring rounded text-left"
                  >
                    Contact
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Sticky Action Buttons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-3">
        {/* Donate Button */}
        <button 
          onClick={() => scrollToSection('donate')}
          className="btn-primary px-4 py-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 glow-saffron"
          aria-label="Donate Now"
        >
          <Heart className="w-5 h-5 md:mr-2" />
          <span className="hidden md:inline">Donate Now</span>
        </button>
        
        {/* Gala Seat Button */}
        <button 
          onClick={() => scrollToSection('tickets')}
          className="btn-secondary px-4 py-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 glow-blue"
          aria-label="Get a seat at Gala Night"
        >
          <Ticket className="w-5 h-5 md:mr-2" />
          <span className="hidden md:inline">Get a seat at Gala Night</span>
        </button>

        {/* Blood Donation Button */}
        <button 
          onClick={() => scrollToSection('blood-donate')}
          className="bg-gradient-to-r from-[#B31E2B] to-[#FF4444] hover:from-[#A01A26] hover:to-[#FF3333] text-white px-4 py-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 glow-red"
          aria-label="Donate Blood"
        >
          <Droplets className="w-5 h-5 md:mr-2" />
          <span className="hidden md:inline">Donate Blood</span>
        </button>
      </div>
    </>
  );
}