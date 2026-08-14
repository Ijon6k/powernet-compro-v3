import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { PortoProjectsSection } from "@/components/sections/PortoProjectsSection";
import { Footer } from "@/components/sections/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Portofolio - Our Latest Projects",
  description:
    "Explore digital systems, platforms, and custom software experiences designed and built by POWERNET to solve real business challenges.",
  openGraph: {
    title: "Portofolio - Our Latest Projects | POWERNET",
    description:
      "Digital systems, platforms, and experiences designed and built by POWERNET.",
    url: "https://powernet.co.id/porto",
  },
  alternates: {
    canonical: "/porto",
  },
};

export default function PortoPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Navigation Header */}
      <Navbar />

      {/* 2. Portfolio Projects List */}
      <ScrollReveal>
        <PortoProjectsSection />
      </ScrollReveal>

      {/* 3. Footer Section (includes CTA & Contact info) */}
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </main>
  );
}
