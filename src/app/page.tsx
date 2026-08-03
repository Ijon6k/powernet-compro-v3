import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { DiscoverySection } from "@/components/sections/DiscoverySection";
import { BuiltOnUnderstanding } from "@/components/sections/BuiltOnUnderstanding";
import { OperationalSoftwareTabs } from "@/components/sections/OperationalSoftwareTabs";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Navigation Header */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Client & Partner Logos */}
      <ClientLogos />

      {/* 4. Feature Spotlight: Discovery & Planning */}
      <DiscoverySection />

      {/* 5. 3 Core Pillars: Built on That Understanding */}
      <BuiltOnUnderstanding />

      {/* 6. Product Showcase: Operational Software Tabs */}
      <OperationalSoftwareTabs />

      {/* 7. Footer (includes CTA Banner & Contact Details) */}
      <Footer />
    </main>
  );
}
