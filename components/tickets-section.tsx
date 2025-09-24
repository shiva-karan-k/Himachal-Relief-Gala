"use client";

import { useState } from 'react';
import { Star, Users, Crown, Building2, QrCode, X, Copy, Smartphone } from 'lucide-react';
import { siteConfig } from '@/app/config/site';
import QRCode from 'qrcode';

const ticketIcons = [Users, Star, Crown, Building2];
const ticketColors = ['text-[#6DE1FF]', 'text-[#00E0C6]', 'text-[#FF9A1F]', 'text-[#B31E2B]'];

export default function TicketsSection() {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [showQRModal, setShowQRModal] = useState(false);
  const [modalData, setModalData] = useState<{
    amount: number;
    ticketType: string;
    quantity: number;
  }>({ amount: 0, ticketType: '', quantity: 1 });
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');

  const handleQuantityChange = (tier: string, quantity: number) => {
    setQuantities(prev => ({ ...prev, [tier]: quantity }));
  };

  const generateTicketQRCode = async (amount: number, ticketInfo: string) => {
    try {
      const upiId = 'getepay.hpscbank228371';
      const name = 'Himachal Relief Fund';
      const note = `Gala Ticket - ${ticketInfo} - Amount: ₹${amount}`;
      
      // UPI URL format
      const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&tn=${encodeURIComponent(note)}`;
      
      // Generate QR code
      const qrDataUrl = await QRCode.toDataURL(upiUrl, {
        width: 200,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      
      setQrCodeDataUrl(qrDataUrl);
    } catch (error) {
      console.error('Error generating ticket QR code:', error);
      setQrCodeDataUrl('');
    }
  };

  const handleBuyTicket = (ticket: any) => {
    console.log('Ticket purchase clicked!');
    const quantity = quantities[ticket.tier] || 1;
    const totalAmount = ticket.price * quantity;
    
    console.log('Ticket:', ticket.tier, 'Quantity:', quantity, 'Total:', totalAmount);
    
    const upiId = 'getepay.hpscbank228371@icici';
    const name = 'Himachal Relief Fund';
    const note = `Gala Ticket - ${ticket.tier} x${quantity} - Amount: ₹${totalAmount}`;
    
    // PhonePe deep link format
    const phonePeUrl = `phonepe://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${totalAmount}&tn=${encodeURIComponent(note)}`;
    
    // Fallback to generic UPI link
    const genericUpiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${totalAmount}&tn=${encodeURIComponent(note)}`;
    
    console.log('Ticket PhonePe URL:', phonePeUrl);
    
    // Try opening UPI link
    try {
      // For desktop, show QR code modal
      if (!navigator.userAgent.match(/iPhone|iPad|iPod|Android/i)) {
        const ticketInfo = `${ticket.tier} x${quantity}`;
        setModalData({
          amount: totalAmount,
          ticketType: ticketInfo,
          quantity: quantity
        });
        generateTicketQRCode(totalAmount, ticketInfo);
        setShowQRModal(true);
        return;
      }
      
      // For mobile, try UPI deep link
      window.location.href = genericUpiUrl;
      
      // Fallback to PhonePe specifically after delay
      setTimeout(() => {
        window.location.href = phonePeUrl;
      }, 1000);
      
    } catch (error) {
      console.error('Ticket UPI link error:', error);
      const ticketInfo = `${ticket.tier} x${quantity}`;
      setModalData({
        amount: totalAmount,
        ticketType: ticketInfo,
        quantity: quantity
      });
      generateTicketQRCode(totalAmount, ticketInfo);
      setShowQRModal(true);
    }
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
                  onClick={() => handleBuyTicket(ticket)}
                  className="w-full bg-gradient-to-r from-[#6A0EDD] to-[#9747FF] hover:from-[#7B1EEE] hover:to-[#A858FF] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 focus-ring hover:scale-105 flex items-center justify-center"
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Buy via PhonePe/UPI
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

      {/* Ticket QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass rounded-2xl p-8 max-w-md w-full relative">
            {/* Close Button */}
            <button 
              onClick={() => setShowQRModal(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white focus-ring rounded p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="text-center">
              <h3 className="font-saira text-xl font-semibold mb-2 text-white">
                Gala Ticket Payment
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {modalData.ticketType}
              </p>

              {/* QR Code */}
              <div className="w-48 h-48 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center p-2">
                <img 
                  src="/upi-qr-code.png" 
                  alt="Himachal Pradesh State Cooperative Bank UPI QR Code for Tickets" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to generated QR if image not found
                    if (qrCodeDataUrl) {
                      e.currentTarget.src = qrCodeDataUrl;
                    }
                  }}
                />
              </div>

              {/* Payment Details */}
              <div className="space-y-3 mb-6">
                <div className="glass-dark rounded-lg p-3 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">UPI ID:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm font-mono">getepay.hpscbank228371</span>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText('getepay.hpscbank228371');
                          alert('UPI ID copied!');
                        }}
                        className="text-[#6DE1FF] hover:text-[#00E0C6] focus-ring rounded p-1"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="glass-dark rounded-lg p-3 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Total Amount:</span>
                    <span className="text-[#FF9A1F] font-semibold">₹{modalData.amount.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="glass-dark rounded-lg p-3 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Recipient:</span>
                    <span className="text-white text-sm">Himachal Relief Fund</span>
                  </div>
                </div>

                <div className="glass-dark rounded-lg p-3 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Note:</span>
                    <span className="text-white text-sm">Gala Ticket Purchase</span>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="text-sm text-white/70 mb-4">
                <p className="mb-2">🎫 Scan QR or pay via UPI ID</p>
                <p>After payment, keep receipt for ticket collection</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowQRModal(false)}
                  className="flex-1 btn-secondary"
                >
                  Close
                </button>
                <button 
                  onClick={() => {
                    const upiId = 'getepay.hpscbank228371';
                    const name = 'Himachal Relief Fund';
                    const note = `Gala Ticket - ${modalData.ticketType} - Amount: ₹${modalData.amount}`;
                    
                    // Try multiple UPI link formats
                    const genericUpiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${modalData.amount}&tn=${encodeURIComponent(note)}`;
                    const phonePeUrl = `phonepe://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${modalData.amount}&tn=${encodeURIComponent(note)}`;
                    const paytmUrl = `paytmmp://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${modalData.amount}&tn=${encodeURIComponent(note)}`;
                    
                    console.log('Trying to open UPI app for ticket with:', genericUpiUrl);
                    
                    // Try to open UPI apps in sequence
                    try {
                      // First try generic UPI
                      window.location.href = genericUpiUrl;
                      
                      // Fallback attempts after delays
                      setTimeout(() => {
                        console.log('Trying PhonePe...');
                        window.open(phonePeUrl, '_blank');
                      }, 500);
                      
                      setTimeout(() => {
                        console.log('Trying Paytm...');
                        window.open(paytmUrl, '_blank');
                      }, 1000);
                      
                      // If nothing works, show instructions
                      setTimeout(() => {
                        alert(`If no UPI app opened, manually pay using:\n\nUPI ID: ${upiId}\nAmount: ₹${modalData.amount.toLocaleString('en-IN')}\nNote: ${note}`);
                      }, 2000);
                      
                    } catch (error) {
                      console.error('Error opening UPI app:', error);
                      alert(`Please pay manually using:\n\nUPI ID: ${upiId}\nAmount: ₹${modalData.amount.toLocaleString('en-IN')}\nNote: ${note}`);
                    }
                  }}
                  className="flex-1 bg-gradient-to-r from-[#6A0EDD] to-[#9747FF] hover:from-[#7B1EEE] hover:to-[#A858FF] text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 focus-ring"
                >
                  Open UPI App
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}