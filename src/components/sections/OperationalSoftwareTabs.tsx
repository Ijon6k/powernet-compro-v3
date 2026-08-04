"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface TabItem {
  id: string;
  title: string;
  imageSrc: string;
  features: {
    title: string;
    description: string;
  }[];
  ctaText: string;
}

export const OperationalSoftwareTabs: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState("waste-management");

  const tabs: TabItem[] = [
    {
      id: "waste-management",
      title: "Waste Management Supply Chain",
      imageSrc: "/photos/waste-management-dashboard.webp",
      features: [
        {
          title: "End-to-End Waste Traceability",
          description:
            "Track every kilogram of hazardous (B3) and domestic waste in real time, from collection all the way to final processing.",
        },
        {
          title: "Waste Reporting, Digitized",
          description:
            "Replace fragmented spreadsheets and manual records with one accurate system, cutting the human error that regulatory reporting can't afford.",
        },
        {
          title: "Audit-Ready Compliance Reporting",
          description:
            "Generate validated, regulator-ready documentation aligned with PP 22/2021 and UU 18/2008, built for KLHK audits and waste disclosure.",
        },
      ],
      ctaText: "Ask for Pilot Project",
    },
    {
      id: "lms",
      title: "Class Learning Management System",
      imageSrc: "/photos/lms-dashboard.webp",
      features: [
        {
          title: "AI-Powered Integrity Scoring",
          description:
            "An automatic Integrity Score flags plagiarism, AI-generated text, and unnatural quiz behavior, so every grade reflects real work.",
        },
        {
          title: "Student Profile Analytics",
          description:
            "A clear dashboard turns scattered scores into a profile of each student's progress, showing who's thriving and who needs support.",
        },
        {
          title: "AI-Assisted Assessment",
          description:
            "Automated evaluation checks essays and quizzes in seconds, freeing teachers from hours of manual grading.",
        },
      ],
      ctaText: "Ask for Pilot Project",
    },
    {
      id: "docker-management",
      title: "Open Source Docker Management",
      imageSrc: "/photos/blockchain-container-dashboard.webp",
      features: [
        {
          title: "Visual Docker Workflows",
          description:
            "Manage containers and deploy Docker Compose projects using guided forms instead of repetitive terminal commands.",
        },
        {
          title: "Storage Insights & Cleanup",
          description:
            "Monitor host and Docker storage usage, then reclaim disk space with integrated cleanup tools.",
        },
        {
          title: "Volume Backup & Recovery",
          description:
            "Protect persistent data with built-in Docker volume backup and restore for quick recovery when needed.",
        },
      ],
      ctaText: "Ask for Pilot Project",
    },
  ];

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section id="products" className="bg-white py-12 sm:py-16 lg:py-20 border-b border-[#D9D9D9]/50 w-full">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 flex flex-col gap-10 lg:gap-14">
        {/* Section Header */}
        <div className="max-w-[1117px] flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight sm:leading-[1.2] font-inter-tight tracking-tight">
            Operational Software, Built for the Way You Work
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#262626] leading-relaxed sm:leading-[36px] font-inter-tight">
            A look at the custom systems we design to remove manual load and keep operations moving.
          </p>
        </div>

        {/* Tab Buttons Container - Single line text, clean height matching Figma */}
        <div
          role="tablist"
          aria-label="Operational Software Categories"
          className="bg-[#FCFCFC] p-2 rounded-xl border border-[#D9D9D9] flex flex-row items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {tabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`tabpanel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex-1 min-w-[280px] lg:min-w-0 py-3.5 px-4 rounded-lg text-lg sm:text-xl lg:text-2xl font-normal font-inter-tight transition-all duration-200 text-center whitespace-nowrap leading-snug flex items-center justify-center ${
                  isActive
                    ? "bg-[#F9E9E9] text-[#C02026]"
                    : "bg-[#FCFCFC] text-[#262626] hover:bg-gray-100"
                }`}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Area */}
        <div
          role="tabpanel"
          id={`tabpanel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-2"
        >
          {/* Left Column: Dashboard Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[614px] h-[320px] sm:h-[443px] rounded-xl overflow-hidden border border-[#D9D9D9]">
              <img
                src={activeTab.imageSrc}
                alt={`${activeTab.title} Operational Dashboard Software Interface`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right Column: Points Features */}
          <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-6">
              {activeTab.features.map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <h3 className="text-2xl sm:text-[28px] lg:text-3xl font-semibold text-black font-inter-tight leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#262626] leading-relaxed sm:leading-[36px] font-inter-tight">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={activeTab.ctaText}
              >
                <Button
                  variant="outline-primary"
                  size="large"
                  className="!w-full sm:!w-auto !px-8 !h-[56px] !rounded-[8px] !text-xl !font-medium justify-center"
                  iconRight={
                    <i className="fi fi-rr-angle-small-right text-[#C02026] text-xl ml-1 inline-flex items-center" />
                  }
                >
                  {activeTab.ctaText}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
