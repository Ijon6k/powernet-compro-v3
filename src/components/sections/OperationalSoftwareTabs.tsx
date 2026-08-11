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

        {/*
          AI NOTE FOR FUTURE SESSIONS / PM REVIEW:
          - CURRENT DESIGN (HYBRID):
            1. Desktop (lg:flex / lg:grid): Uses original horizontal tab bar + side-by-side dashboard image & feature list.
            2. Mobile (lg:hidden): Uses Accordion Card List for intuitive vertical scrolling on mobile.
          - IF USER / PM WANTS TO REVERT MOBILE BACK TO ORIGINAL HORIZONTAL TAB BAR (SLIDE LIKE INITIAL DESIGN):
            1. Remove "hidden lg:flex" from the Desktop Tab Buttons Container (change to "flex").
            2. Remove "hidden lg:grid" from the Desktop Content Display Area (change to "grid").
            3. Delete or hide the Mobile Accordion View div ("lg:hidden").
        */}

        {/* Desktop Tab Buttons Container (hidden on mobile, visible lg:flex) */}
        <div
          role="tablist"
          aria-label="Operational Software Categories"
          className="hidden lg:flex bg-[#FCFCFC] p-2 rounded-xl border border-[#D9D9D9] flex-row items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth"
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

        {/* Desktop Active Tab Content Display Area (hidden on mobile, visible lg:grid) */}
        <div
          role="tabpanel"
          id={`tabpanel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
          className="hidden lg:grid grid-cols-12 gap-16 items-center pt-2"
        >
          {/* Left Column: Dashboard Image */}
          <div className="col-span-6 flex justify-center">
            <div className="relative w-full max-w-[614px] h-[443px] rounded-xl overflow-hidden border border-[#D9D9D9] bg-[#FAF9F9] flex items-center justify-center">
              <img
                src={activeTab.imageSrc}
                alt={`${activeTab.title} Operational Dashboard Software Interface`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right Column: Points Features */}
          <div className="col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              {activeTab.features.map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <h3 className="text-3xl font-semibold text-black font-inter-tight leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-2xl font-normal text-[#262626] leading-[36px] font-inter-tight">
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
                  className="!px-8 !h-[56px] !rounded-[8px] !text-xl !font-medium justify-center"
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

        {/* Mobile Accordion View (visible on mobile lg:hidden, intuition-focused UX) */}
        <div className="flex flex-col gap-4 lg:hidden">
          {tabs.map((tab) => {
            const isOpen = activeTabId === tab.id;
            return (
              <div
                key={tab.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-[#C02026] bg-[#FCFCFC]" : "border-[#D9D9D9] bg-white"
                }`}
              >
                {/* Accordion Title Header */}
                <button
                  onClick={() => setActiveTabId(isOpen ? "" : tab.id)}
                  className={`w-full p-4 sm:p-5 flex items-center justify-between text-left transition-colors ${
                    isOpen ? "bg-[#F9E9E9] text-[#C02026]" : "text-[#262626] hover:bg-gray-50"
                  }`}
                >
                  <span className="text-lg sm:text-xl font-semibold font-inter-tight pr-3">
                    {tab.title}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-[#C02026] text-white" : "bg-gray-100 text-[#262626]"
                  }`}>
                    <i className="fi fi-rr-angle-small-down text-base" />
                  </div>
                </button>

                {/* Accordion Content Details */}
                {isOpen && (
                  <div className="p-4 sm:p-6 flex flex-col gap-6 border-t border-[#D9D9D9]/60">
                    {/* Uncropped Fit Image */}
                    <div className="relative w-full rounded-xl overflow-hidden border border-[#D9D9D9] bg-[#FAF9F9] p-1.5 flex items-center justify-center">
                      <img
                        src={tab.imageSrc}
                        alt={`${tab.title} Interface`}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>

                    {/* Features List */}
                    <div className="flex flex-col gap-5">
                      {tab.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex flex-col gap-1.5">
                          <h3 className="text-xl font-semibold text-black font-inter-tight leading-snug">
                            {feature.title}
                          </h3>
                          <p className="text-base font-normal text-[#262626] leading-relaxed font-inter-tight">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div>
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={tab.ctaText}
                      >
                        <Button
                          variant="outline-primary"
                          size="large"
                          className="!w-full !px-6 !h-[52px] !rounded-[8px] !text-lg !font-medium justify-center"
                          iconRight={
                            <i className="fi fi-rr-angle-small-right text-[#C02026] text-lg ml-1 inline-flex items-center" />
                          }
                        >
                          {tab.ctaText}
                        </Button>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
