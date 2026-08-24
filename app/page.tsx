import Hero from "@/components/Sections/Hero";
import ZeroFrictionSection from "@/components/Sections/ZeroFrictionSection";
import AIJourneySection from "@/components/Sections/AIJourneySection";
import ChallengeMissionSection from "@/components/Sections/ChallengeMissionSection";
import AwardsSection from "@/components/Sections/AwardsSection";
import GlanceSection from "@/components/Sections/GlanceSection";
import CaseStudiesSection from "@/components/Sections/CaseStudiesSection";
import HexawareNewsSection from "@/components/Sections/HexawareNewsSection";
import ConnectFormSection from "@/components/Sections/ConnectFormSection";
import TechnicalCompetenciesSection from "@/components/Sections/TechnicalCompetenciesSection";

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
