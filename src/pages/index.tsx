import { useState } from "react";
import Head from "next/head";
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
      <Head>
        <title>Konsent — Cumplimiento Ley 21.719 sin fricción</title>
        <meta
          name="description"
          content="Sistema integral de gestión de consentimiento y derechos de datos personales para empresas en Chile. Conforme a la Ley 21.719, con trazabilidad blockchain y validez legal."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph / brand continuity */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Konsent" />
        <meta
          property="og:title"
          content="Konsent — Cumplimiento Ley 21.719 sin fricción"
        />
        <meta
          property="og:description"
          content="Gestión de consentimiento y derechos de datos personales con trazabilidad blockchain. Conforme a la Ley 21.719."
        />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo.png" />
      </Head>
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
      <Footer onOpenDemo={() => setIsDemoOpen(true)} />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
}
