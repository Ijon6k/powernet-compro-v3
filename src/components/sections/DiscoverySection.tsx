import React from "react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export const DiscoverySection: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-[#D9D9D9]/50 w-full">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-4 sm:gap-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight sm:leading-[1.2] font-inter-tight tracking-tight">
                Starting With Discovery and Planning, at{" "}
                <span className="relative inline-block font-bold">
                  <span className="animate-text-shimmer-once inline-block">
                    No Upfront Cost
                  </span>
                  <svg
                    className="absolute -bottom-2.5 -left-[5%] w-[110%] h-3.5 text-[#C02026] overflow-visible pointer-events-none"
                    viewBox="0 0 220 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 9C55 2 165 2 218 9"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#262626] leading-relaxed sm:leading-[36px] font-inter-tight">
                Before anything is built, we map how your organization actually
                works and turn it into a clear roadmap, so you see exactly where
                the project is heading before any commitment.
              </p>
            </div>

            <div>
              <a
                href="#service"
                aria-label="Explore Solutions Section"
              >
                <Button
                  variant="outline-primary"
                  size="large"
                  className="!w-full sm:!w-auto !px-8 !h-[56px] !rounded-[8px] !text-xl !font-medium justify-center"
                  iconRight={
                    <i className="fi fi-rr-arrow-small-down text-[#C02026] text-lg ml-1 inline-flex items-center" />
                  }
                >
                  Explore Solutions
                </Button>
              </a>
            </div>
          </div>

          {/* Right Visual Graphic Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-end sm:pl-16 lg:pl-24">
            <div className="relative w-full max-w-[702px]">
              {/* Photo Container - No Border, rounded 12px */}
              <div className="w-full rounded-[12px] overflow-hidden">
                <img
                  src="/photos/discovery-session.webp"
                  alt="Discovery and Planning Session"
                  className="w-full h-[260px] sm:h-[445px] object-cover rounded-[12px]"
                />
              </div>

              {/* Requirement Document Card - Compact Floating inside Photo on Mobile (Left), Offside Floating on Desktop */}
              <div className="absolute bottom-3 left-3 sm:bottom-auto sm:left-auto sm:-left-16 lg:-left-24 sm:top-1/2 sm:-translate-y-1/2 w-[60%] max-w-[170px] sm:w-[320px] sm:max-w-[340px] bg-white rounded-[16px] border-[2px] border-[#C02026] p-2.5 sm:p-5 flex flex-col gap-1.5 sm:gap-3.5 z-20 shadow-xl transition-all duration-300 hover:scale-[1.02] sm:animate-float-subtle">
                <GlowingEffect
                  spread={70}
                  glow={true}
                  disabled={false}
                  proximity={140}
                  inactiveZone={0.01}
                  borderWidth={2}
                  movementDuration={3.5}
                  variant="pink"
                />
                <div className="flex flex-col gap-0.5 sm:gap-1 relative z-10">
                  <h4 className="text-xs sm:text-xl font-semibold text-[#262626] font-inter-tight leading-snug">
                    Requirement document
                  </h4>
                  <p className=" text-sm font-regular text-[#595959] font-inter-tight leading-tight sm:leading-relaxed">
                    Turning business needs into clear technical requirements
                  </p>
                </div>

                {/* Badges & Dots */}
                <div className="flex flex-col gap-1 sm:gap-2.5 relative z-10">
                  <div className="bg-[#E6FEE7] rounded-full px-2 sm:px-3.5 py-0.5 sm:py-2 flex items-center gap-1.5 sm:gap-2.5">
                    <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-[#00AA0B] flex-shrink-0 animate-pulse-dot" />
                    <span className="text-[8.5px] sm:text-xs font-semibold text-[#00AA0B] font-inter-tight truncate">
                      Discovery with no upfront cost
                    </span>
                  </div>

                  <div className="bg-[#F9E9E9] rounded-full px-2 sm:px-3.5 py-0.5 sm:py-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-[#C02026] flex-shrink-0" />
                  </div>

                  <div className="bg-[#F9E9E9] rounded-full px-2 sm:px-3.5 py-0.5 sm:py-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-[#C02026] flex-shrink-0" />
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
