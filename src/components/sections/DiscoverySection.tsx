import React from "react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const DiscoverySection: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-[#D9D9D9]/50 w-full">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-4 sm:gap-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight sm:leading-[1.2] font-inter-tight tracking-tight">
                Starting With Discovery and Planning, at No Upfront Cost
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#262626] leading-relaxed sm:leading-[36px] font-inter-tight">
                Before anything is built, we map how your organization actually
                works and turn it into a clear roadmap, so you see exactly where
                the project is heading before any commitment.
              </p>
            </div>

            <div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Explore Solutions via WhatsApp"
              >
                <Button
                  variant="outline-primary"
                  size="large"
                  className="!w-full sm:!w-auto !px-8 !h-[56px] !rounded-[8px] !text-xl !font-medium justify-center"
                  iconRight={
                    <i className="fi fi-rr-info text-[#C02026] text-lg ml-1 inline-flex items-center" />
                  }
                >
                  Explore Solutions
                </Button>
              </a>
            </div>
          </div>

          {/* Right Visual Graphic Column */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end pl-8 sm:pl-16 lg:pl-24">
            <div className="relative w-full max-w-[702px] min-h-[340px] sm:h-[445px] rounded-[20px] border border-[#D9D9D9]">
              <img
                src="/photos/discovery-session.webp"
                alt="Discovery and Planning Session"
                className="w-full h-full object-cover rounded-[20px] overflow-hidden"
              />

              {/* Floating Requirement Document Card - Centered Vertically, Offset Left & Subtle Float */}
              <div className="absolute -left-8 sm:-left-16 lg:-left-24 top-1/2 -translate-y-1/2 w-[85%] max-w-[280px] sm:max-w-[310px] bg-white rounded-[16px] border-[3.5px] border-[#F0D5D7] p-4 sm:p-5 flex flex-col gap-3.5 z-10 transition-all duration-300 hover:scale-[1.02] animate-float-subtle">
                <div className="flex flex-col gap-1">
                  <h4 className="text-base sm:text-lg font-semibold text-[#262626] font-inter-tight leading-snug">
                    Requirement document
                  </h4>
                  <p className="text-xs sm:text-[13.5px] font-normal text-[#595959] font-inter-tight leading-snug">
                    Turning business needs into clear technical requirements
                  </p>
                </div>

                {/* Badges & Dots - Matching Figma Screenshot */}
                <div className="flex flex-col gap-2.5">
                  <div className="bg-[#E6FEE7] rounded-full px-3.5 py-1.5 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00AA0B] flex-shrink-0 animate-pulse-dot" />
                    <span className="text-[11px] sm:text-xs font-semibold text-[#00AA0B] font-inter-tight truncate">
                      Discovery with no upfront cost
                    </span>
                  </div>

                  <div className="bg-[#F9E9E9] rounded-full px-3.5 py-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C02026] flex-shrink-0" />
                  </div>

                  <div className="bg-[#F9E9E9] rounded-full px-3.5 py-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C02026] flex-shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
