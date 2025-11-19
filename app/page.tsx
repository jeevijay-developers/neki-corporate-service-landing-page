import { HeroSection } from '@/components/hero-section'
import { WhoWeAre } from '@/components/who-we-are'
import { FourVerticals } from '@/components/four-verticals'
import { Achievements } from '@/components/achievements'
import { TrainingDevelopment } from '@/components/training-development'
import { FinancialAdvisory } from '@/components/financial-advisory'
import { RealEstateServices } from '@/components/real-estate-services'
import { NekiMart } from '@/components/neki-mart'
import { MeetTheTeam } from '@/components/meet-the-team'
import { WhyChooseUs } from '@/components/why-choose-us'
import { ContactUs } from '@/components/contact-us'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <WhoWeAre />
      <FourVerticals />
      <Achievements />
      <TrainingDevelopment />
      <FinancialAdvisory />
      <RealEstateServices />
      <NekiMart />
      <MeetTheTeam />
      <WhyChooseUs />
      <ContactUs />
    </main>
  )
}
