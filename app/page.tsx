import Hero from "@/components/Hero";
import ZeroFrictionSection from "@/components/ZeroFrictionSection";
import AIJourneySection from "@/components/AIJourneySection";
import ChallengeMissionSection from "@/components/ChallengeMissionSection";
import AwardsSection from "@/components/AwardsSection";
import GlanceSection from "@/components/GlanceSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import HexawareNewsSection from "@/components/HexawareNewsSection";
import ConnectFormSection from "@/components/ConnectFormSection";
import TechnicalCompetenciesSection from "@/components/TechnicalCompetenciesSection";

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
      <HexawareNewsSection />
      <ConnectFormSection />
      {/* <TechnicalCompetenciesSection></TechnicalCompetenciesSection> */}
      {/* rest of your page sections go here */}
    </main>
  );
}