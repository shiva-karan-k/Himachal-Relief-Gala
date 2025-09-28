// Razorpay configuration and payment handling
export interface RazorpayOptions {
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id?: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color: string;
  };
}

export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && (window as any).Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const openRazorpayPayment = async (options: RazorpayOptions) => {
  const scriptLoaded = await loadRazorpayScript();
  
  if (!scriptLoaded) {
    throw new Error('Failed to load Razorpay script');
  }

  const Razorpay = (window as any).Razorpay;

  // Using Samarthya Foundation's Razorpay key
  const razorpayOptions = {
    key: 'rzp_live_RN4W4biyltp24h', // Samarthya Foundation's live key
    amount: options.amount * 100, // Convert to paise
    currency: options.currency || 'INR',
    name: 'Samarthya Foundation',
    description: options.description,
    order_id: options.order_id,
    prefill: {
      name: options.prefill?.name || '',
      email: options.prefill?.email || '',
      contact: options.prefill?.contact || '',
    },
    notes: {
      ...options.notes,
      foundation: 'Samarthya Foundation',
      '80g_eligible': 'true',
      'route_to': 'samarthyafoundationjankalyans'
    },
    theme: {
      color: '#6DE1FF',
    },
    handler: function (response: any) {
      console.log('Payment successful:', response);
      // Handle successful payment
      alert('Payment successful! Thank you for your donation to Samarthya Foundation. You will receive an 80G tax receipt.');
      
      // Redirect to success page or show success message
      // You can also send payment data to your backend here
    },
    modal: {
      ondismiss: function() {
        console.log('Payment modal dismissed');
      }
    }
  };

  const razorpay = new Razorpay(razorpayOptions);
  razorpay.open();
};

// Helper function to create donation payment
export const createDonationPayment = (amount: number, donorName?: string) => {
  // Use the full Razorpay integration with live key
  return openRazorpayPayment({
    amount,
    currency: 'INR',
    name: 'Samarthya Foundation',
    description: `Donation for Himachal Relief - ₹${amount}`,
    prefill: {
      name: donorName || '',
      email: '',
      contact: '',
    },
    notes: {
      purpose: 'Himachal Relief Fund',
      event: 'Yuvathon 2025',
      foundation: 'Samarthya Foundation',
      '80g_eligible': 'true'
    }
  });
};

// Helper function to create ticket payment
export const createTicketPayment = (amount: number, ticketType: string, quantity: number) => {
  // Use the full Razorpay integration for tickets
  return openRazorpayPayment({
    amount,
    currency: 'INR',
    name: 'Samarthya Foundation',
    description: `Pahadi Night Ticket - ${ticketType} x${quantity} - ₹${amount}`,
    prefill: {
      name: '',
      email: '',
      contact: '',
    },
    notes: {
      purpose: 'Pahadi Night Ticket',
      ticket_type: ticketType,
      quantity: quantity.toString(),
      event: 'Yuvathon 2025',
      foundation: 'Samarthya Foundation'
    }
  });
};
