import React from "react";

import Hero from "@/components/hero";
import Nav from "@/components/nav";
import AboutSection from "@/components/aboutSection";
import FeaturesSection from "@/components/featuresSection";
import StatsSection from "@/components/statsSection";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%)]">
        <Nav />
        <Hero />
      </div>
      <AboutSection />
      <StatsSection />
      <FeaturesSection />
    </>
  );
}
