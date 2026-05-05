import React from "react";
import HeroSection from "../components/home/HeroSection";
import PainSection from "../components/home/PainSection";
import HowWeWork from "../components/home/HowWeWork";
import CaseStudiesPreview from "../components/home/CaseStudiesPreview";
import FounderSection from "../components/home/FounderSection";
import CTAFooter from "../components/home/CTAFooter";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PainSection />
      <HowWeWork />
      <CaseStudiesPreview />
      <FounderSection />
      <CTAFooter />
    </div>
  );
}