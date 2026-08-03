"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

interface TabItem {
  id: string;
  title: string;
  imageText: string;
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
      imageText: "Waste+Management+Supply+Chain+Dashboard",
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
      imageText: "Class+Learning+Management+System+Dashboard",
      features: [
        {
          title: "Automated Curriculum & Class Tracking",
          description:
            "Seamlessly organize course modules, student attendance, and instructor schedules in one centralized platform.",
        },
        {
          title: "Interactive Progress & Analytics",
          description:
            "Monitor student performance with real-time grading, automated assessment feedback, and learning velocity insights.",
        },
        {
          title: "Enterprise LMS Integration",
          description:
            "Integrate effortlessly with internal HR systems, Zoom, and single sign-on (SSO) authentication providers.",
        },
      ],
      ctaText: "Request LMS Demo",
    },
    {
      id: "docker-management",
      title: "Open Source Docker Management",
      imageText: "Open+Source+Docker+Management+Dashboard",
      features: [
        {
          title: "Centralized Container Orchestration",
          description:
            "Manage microservices, container deployments, and cluster health from an intuitive visual dashboard.",
        },
        {
          title: "Automated CI/CD Deployment Pipelines",
          description:
            "Trigger zero-downtime rollouts, automated health checks, and quick environment rollbacks upon Git commits.",
        },
        {
          title: "Resource Utilization & Cost Control",
          description:
            "Optimize CPU, memory, and storage allocation to eliminate infrastructure waste across dev and production.",
        },
      ],
      ctaText: "Explore Platform",
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
          <p className="text-base sm:text-lg lg:text-xl font-normal text-[#262626] leading-relaxed sm:leading-[32px] font-inter-tight">
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
                className={`flex-1 min-w-[260px] lg:min-w-0 py-3 px-4 rounded-lg text-base sm:text-lg lg:text-[20px] xl:text-[22px] font-normal font-inter-tight transition-all duration-200 text-center whitespace-nowrap leading-snug flex items-center justify-center ${
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
          {/* Left Column: Dashboard Image Placeholder */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[614px] h-[320px] sm:h-[443px] rounded-xl overflow-hidden border border-[#D9D9D9]">
              <img
                src={`https://placehold.co/614x443?text=${activeTab.imageText}`}
                alt={`${activeTab.title} Operational Dashboard Software Interface`}
                width={614}
                height={443}
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
                  <p className="text-base sm:text-lg lg:text-xl font-normal text-[#262626] leading-relaxed sm:leading-[32px] font-inter-tight">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <a href="#contact-cta" aria-label={activeTab.ctaText}>
                <Button
                  variant="outline-primary"
                  size="large"
                  className="!w-full sm:!w-auto !px-8 !h-[56px] !rounded-[8px] !text-lg sm:!text-[20px] !font-medium justify-center"
                  iconRight={
                    <i className="fi fi-rr-arrow-up-right text-[#C02026] text-lg ml-1 inline-flex items-center" />
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
