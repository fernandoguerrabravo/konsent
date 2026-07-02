import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import IndustryTabs from "@/components/sections/IndustryTabs";
import ChallengeSection from "@/components/sections/ChallengeSection";
import SolutionSection from "@/components/sections/SolutionSection";
import BlockchainSection from "@/components/sections/BlockchainSection";
import ModulesSection from "@/components/sections/ModulesSection";
import CTASection from "@/components/sections/CTASection";
import DemoModal from "@/components/DemoModal";

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />
      <main>
        <HeroSection onOpenDemo={() => setIsDemoOpen(true)} />
        <IndustryTabs />
        <ChallengeSection />
        <SolutionSection />
        <BlockchainSection />
        <ModulesSection />
        <CTASection onOpenDemo={() => setIsDemoOpen(true)} />
      </main>
      <Footer />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
}
