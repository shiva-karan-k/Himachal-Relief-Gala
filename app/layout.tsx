import './globals.css';
import type { Metadata } from 'next';
import { Inter, Saira_Extra_Condensed } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sairaExtraCondensed = Saira_Extra_Condensed({ 
  subsets: ['latin'], 
  variable: '--font-saira',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Yuvathon • Kullu Dussehra 4–7 Oct',
  description: 'Join us for a 4-day charity gala during Kullu Dussehra to raise ₹20,00,000 for groceries & essential supplies to families impacted by floods/landslides in Himachal Pradesh.',
  keywords: 'Himachal Pradesh, relief fund, charity gala, Kullu Dussehra, flood relief, landslide relief, donation',
  openGraph: {
    title: 'Yuvathon • Kullu Dussehra 4–7 Oct',
    description: 'Immediate groceries & essentials for families affected by floods & landslides.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Yuvathon',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuvathon • Kullu Dussehra 4–7 Oct',
    description: 'Immediate groceries & essentials for families affected by floods & landslides.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sairaExtraCondensed.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Yuvathon • Kullu Dussehra 4–7 Oct",
              "startDate": "2025-10-04",
              "endDate": "2025-10-07",
              "location": {
                "@type": "Place",
                "name": "Kullu, Himachal Pradesh, India"
              },
              "description": "4-day charity gala to raise funds for flood and landslide relief in Himachal Pradesh",
              "organizer": {
                "@type": "Organization",
                "name": "Himachal Relief Foundation"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-[#070C14] via-[#0A1018] to-[#0E1826] text-white antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}