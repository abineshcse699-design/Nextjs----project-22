import Hero from "@/app/components/Sections/Hero";
import ZeroFrictionSection from "@/app/components/Sections/ZeroFrictionSection";
import AIJourneySection from "@/app/components/Sections/AIJourneySection";
import ChallengeMissionSection from "@/app/components/Sections/ChallengeMissionSection";
import AwardsSection from "@/app/components/Sections/AwardsSection";
import GlanceSection from "@/app/components/Sections/GlanceSection";
import CaseStudiesSection from "@/app/components/Sections/CaseStudiesSection";
import HexawareNewsSection from "@/app/components/Sections/HexawareNewsSection";
import ConnectFormSection from "@/app/components/Sections/ConnectFormSection";
import TechnicalCompetenciesSection from "@/app/components/Sections/TechnicalCompetenciesSection";

export default function Home() {
  
  return (

    <main>
      <Hero />
      <ZeroFrictionSection />
      <AIJourneySection />
      <ChallengeMissionSection />
      <AwardsSection />
      <GlanceSection />
      <CaseStudiesSection />
      {/* <Casestude></Casestude> */}
      {/* <HexawareNewsSection /> */}
      <ConnectFormSection />
      {/* <TechnicalCompetenciesSection></TechnicalCompetenciesSection> */}
      {/* rest of your page sections go here */}
    </main>

    
  );

}
