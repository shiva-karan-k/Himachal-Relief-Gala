"use client";

import { useEffect, useState } from 'react';
import { CheckCircle, Share2, Facebook, Twitter, Copy, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ThankYou() {
  const [orderDetails, setOrderDetails] = useState({
    type: 'donation', // 'donation' or 'ticket'
    amount: 1000,
    orderId: 'HRG' + Date.now(),
    timestamp: new Date().toLocaleString('en-IN')
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // In a real implementation, you would get order details from URL params or API
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type') || 'donation';
    const amount = parseInt(urlParams.get('amount') || '1000');
    const orderId = urlParams.get('order_id') || 'HRG' + Date.now();
    
    setOrderDetails({ type, amount, orderId, timestamp: new Date().toLocaleString('en-IN') });
  }, []);

  const shareText = `I just supported the Himachal Relief & Gala! Join me in helping families affected by floods & landslides. Every contribution makes a difference. #HimachalRelief #KulluDussehra`;
  
  const shareUrl = typeof window !== 'undefined' ? window.location.origin : '';

  const handleShare = (platform: string) => {
    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(shareUrl);
    
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      default:
        return;
    }
    
    window.open(url, '_blank', 'width=600,height=400');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070C14] via-[#0A1018] to-[#0E1826] text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-[#00E0C6] to-[#6DE1FF] rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="font-saira text-3xl md:text-4xl font-bold mb-4 text-white">
            Thank You!
          </h1>
          <p className="text-lg text-white/80">
            Your {orderDetails.type === 'donation' ? 'donation' : 'ticket purchase'} has been confirmed.
          </p>
        </div>

        {/* Order Summary */}
        <div className="glass rounded-2xl p-8 mb-8">
          <h2 className="font-saira text-xl font-semibold mb-6 text-white">
            Order Summary
          </h2>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-white/70">Order ID:</span>
              <span className="text-white font-medium">{orderDetails.orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Type:</span>
              <span className="text-white font-medium capitalize">{orderDetails.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Amount:</span>
              <span className="text-[#FF9A1F] font-bold text-lg">₹{orderDetails.amount.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Date & Time:</span>
              <span className="text-white font-medium">{orderDetails.timestamp}</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="bg-[#00E0C6]/10 rounded-lg p-4">
              <p className="text-[#00E0C6] text-sm font-medium mb-2">
                {orderDetails.type === 'donation' ? '🎯 Impact' : '🎫 Next Steps'}
              </p>
              <p className="text-white/80 text-sm">
                {orderDetails.type === 'donation' 
                  ? `Your donation will help provide ${Math.floor(orderDetails.amount / 500)} family grocery kits to those in need.`
                  : 'Please check your email for ticket details and event instructions. Bring a valid ID on event day.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="glass rounded-2xl p-8 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Share2 className="w-5 h-5 text-[#6DE1FF]" />
            <h3 className="font-saira text-lg font-semibold text-white">
              Spread the Word
            </h3>
          </div>
          
          <p className="text-white/70 text-sm mb-6">
            Help us reach more people by sharing our cause on social media.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleShare('facebook')}
              className="btn-secondary flex items-center px-4 py-2 text-sm"
            >
              <Facebook className="w-4 h-4 mr-2" />
              Facebook
            </button>
            
            <button
              onClick={() => handleShare('twitter')}
              className="btn-secondary flex items-center px-4 py-2 text-sm"
            >
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </button>
            
            <button
              onClick={copyToClipboard}
              className="btn-secondary flex items-center px-4 py-2 text-sm"
            >
              <Copy className="w-4 h-4 mr-2" />
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link 
            href="/"
            className="btn-primary inline-flex items-center px-6 py-3"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Email Note */}
        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">
            A confirmation email has been sent to your registered email address.
            {orderDetails.type === 'donation' && ' Your 80G tax exemption certificate will follow within 48 hours.'}
          </p>
        </div>
      </div>
    </div>
  );
}