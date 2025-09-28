export const siteConfig = {
  goal: 2000000,
  raised: 120000,
  donors: 79,
  ticketsSold: 0,
  foundation: {
    name: 'Samarthya Foundation',
    registration: 'Registered under Section 80G of Income Tax Act, 1961',
    taxExemption: 'Donations are eligible for tax deduction under 80G',
    contact: '+91 92587 29273'
  },
  tickets: [
    {"tier": "General", "price": 200, "link": "RAZORPAY_TICKET_GENERAL_LINK", "description": "Entry to Pahadi Night", "includes": ["Entry to Pahadi Night", "Cultural performances", "Himachali cuisine dinner"]},
    {"tier": "Patron Table", "price": 2000, "link": "RAZORPAY_TICKET_PATRON_LINK", "description": "Reserved table for 10 guests", "includes": ["Reserved table for 10", "Recognition on stage", "Brochure acknowledgment", "Premium seating"]},
    {"tier": "Corporate Table", "price": 5000, "link": "RAZORPAY_TICKET_CORP_LINK", "description": "Branding space at venue", "includes": ["Table for 10 guests", "Branding space at venue", "On-stage acknowledgment", "Corporate logo display"]}
  ],
  donationPresets: [100, 200, 500, 800, 1000, 2000, 2500, 5000, 10000],
  razorpay: {
    donationLink: "RAZORPAY_DONATION_LINK",
    ticketGeneralLink: "RAZORPAY_TICKET_GENERAL_LINK",
    ticketVipLink: "RAZORPAY_TICKET_VIP_LINK",
    ticketPatronLink: "RAZORPAY_TICKET_PATRON_LINK",
    ticketCorpLink: "RAZORPAY_TICKET_CORP_LINK"
  },
  analytics: {
    ga4Id: "GA4_MEASUREMENT_ID"
  }
};