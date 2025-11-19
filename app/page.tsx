import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { WhoWeAre } from "@/components/who-we-are";
import { FourVerticals } from "@/components/four-verticals";
import { Achievements } from "@/components/achievements";
import { TrainingDevelopment } from "@/components/training-development";
import { FinancialAdvisory } from "@/components/financial-advisory";
import { RealEstateServices } from "@/components/real-estate-services";
import { NekiMart } from "@/components/neki-mart";
import { MeetTheTeam } from "@/components/meet-the-team";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ContactUs } from "@/components/contact-us";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section id="home">
          <HeroSection />
        </section>
        <WhoWeAre />
        <FourVerticals />
        <section id="achievements">
          <Achievements />
        </section>
        <TrainingDevelopment />
        <FinancialAdvisory />
        <RealEstateServices />
        <section id="neki-mart">
          <NekiMart />
        </section>
        <section id="team">
          <MeetTheTeam />
        </section>
        <WhyChooseUs />
        <section id="contact">
          <ContactUs />
        </section>
      </main>
    </>
  );
}
