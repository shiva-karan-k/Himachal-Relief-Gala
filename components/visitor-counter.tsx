"use client";

import { Users, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Generate a random visitor count between 1000-5000 for demo purposes
    // In a real app, this would come from your analytics API
    const randomVisitors = Math.floor(Math.random() * 4000) + 1000;
    setVisitors(randomVisitors);
    
    // Show counter after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const incrementVisitors = () => {
    setVisitors(prev => prev + 1);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Main Counter Button */}
        <button
          onClick={incrementVisitors}
          className="glass rounded-full p-4 shadow-lg hover:scale-105 transition-all duration-300 group focus-ring"
          aria-label="Visitor Counter"
        >
          <div className="flex items-center space-x-2">
            <Eye className="w-5 h-5 text-[#6DE1FF] group-hover:text-[#00E0C6] transition-colors" />
            <div className="text-right">
              <div className="text-sm font-semibold text-white">
                {visitors.toLocaleString()}
              </div>
              <div className="text-xs text-white/70">
                Visitors
              </div>
            </div>
          </div>
        </button>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-[#6DE1FF]/20 animate-ping"></div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-black/80 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
            Click to add yourself as a visitor!
          </div>
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="mt-3 glass rounded-full px-3 py-2 text-center">
        <div className="flex items-center space-x-1 text-xs text-white/70">
          <Users className="w-3 h-3" />
          <span>Live Now</span>
        </div>
      </div>
    </div>
  );
}
