export const siteConfig = {
  goal: 2000000,
  raised: 0,
  donors: 0,
  ticketsSold: 0,
  tickets: [
    {"tier": "General", "price": 999, "link": "RAZORPAY_TICKET_GENERAL_LINK"},
    {"tier": "VIP", "price": 2499, "link": "RAZORPAY_TICKET_VIP_LINK"},
    {"tier": "Patron Table (4)", "price": 7999, "link": "RAZORPAY_TICKET_PATRON_LINK"},
    {"tier": "Corporate Table (10)", "price": 25000, "link": "RAZORPAY_TICKET_CORP_LINK"}
  ],
  donationPresets: [2000, 2500, 5000, 10000],
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