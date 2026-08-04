import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { DiscoverySection } from "@/components/sections/DiscoverySection";
import { BuiltOnUnderstanding } from "@/components/sections/BuiltOnUnderstanding";
import { OperationalSoftwareTabs } from "@/components/sections/OperationalSoftwareTabs";
import { Footer } from "@/components/sections/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Navigation Header */}
      <Navbar />

      {/* 2. Hero Section */}
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      {/* 3. Client & Partner Logos */}
      <ScrollReveal>
        <ClientLogos />
      </ScrollReveal>

      {/* 4. Feature Spotlight: Discovery & Planning */}
      <ScrollReveal>
        <DiscoverySection />
      </ScrollReveal>

      {/* 5. 3 Core Pillars: Built on That Understanding */}
      <ScrollReveal>
        <BuiltOnUnderstanding />
      </ScrollReveal>

      {/* 6. Product Showcase: Operational Software Tabs */}
      <ScrollReveal>
        <OperationalSoftwareTabs />
      </ScrollReveal>

      {/* 7. Footer (includes CTA Banner & Contact Details) */}
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </main>
  );
}
