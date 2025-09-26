import FloatingNav from '@/components/floating-nav';
import HeroSection from '@/components/hero-section';
import WhyMatters from '@/components/why-matters';
import WhosComing from '@/components/whos-coming';
import TicketsSection from '@/components/tickets-section';
import DonationSection from '@/components/donation-section';
import BloodDonationSection from '@/components/blood-donation-section';
import EventSchedule from '@/components/event-schedule';
import PartnersVenue from '@/components/partners-venue';

export default function Home() {
  return (
    <main className="relative">
      {/* Navigation */}
      <FloatingNav />
      
      {/* Main Sections */}
      <HeroSection />
      <DonationSection />
      <BloodDonationSection />
      <WhyMatters />
      <WhosComing />
      <TicketsSection />
      <EventSchedule />
      <PartnersVenue />
    </main>
  );
}