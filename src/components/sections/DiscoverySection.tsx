import React from "react";
import { Button } from "@/components/ui/Button";

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
              <p className="text-base sm:text-lg lg:text-xl font-normal text-[#262626] leading-relaxed sm:leading-[32px] font-inter-tight">
                Before anything is built, we map how your organization actually
                works and turn it into a clear roadmap, so you see exactly where
                the project is heading before any commitment.
              </p>
            </div>

            <div>
              <Button
                variant="outline-primary"
                size="large"
                className="!w-full sm:!w-auto !px-8 !h-[56px] !rounded-[8px] !text-lg sm:!text-[20px] !font-medium justify-center"
                iconRight={
                  <i className="fi fi-rr-arrow-up-right text-[#C02026] text-lg ml-1 inline-flex items-center" />
                }
              >
                Explore Solutions
              </Button>
            </div>
          </div>

          {/* Right Visual Graphic Column */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[702px] min-h-[340px] sm:h-[445px] rounded-[20px] overflow-hidden border border-[#D9D9D9] bg-gradient-to-br from-slate-100 to-slate-200 p-4 sm:p-0">
              {/* Outer image placeholder (702x445) */}
              <img
                src="https://placehold.co/702x445?text=Discovery+Visual+Background"
                alt="Discovery Background"
                className="w-full h-full object-cover rounded-[16px] sm:rounded-[20px]"
              />

              {/* Inner team image mockup */}
              <div className="absolute right-3 sm:right-[32px] top-4 sm:top-[41px] w-[70%] max-w-[544px] h-[65%] max-h-[363px] rounded-xl overflow-hidden border border-white/60">
                <img
                  src="https://placehold.co/544x363?text=Discovery+Planning+Session"
                  alt="Discovery Session"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Requirement Document Card - NO SHADOW */}
              <div className="absolute left-3 sm:left-[29px] bottom-4 sm:bottom-[40px] w-[85%] max-w-[241px] min-h-[160px] sm:h-[188px] bg-white rounded-xl border-2 sm:border-3 border-[#A9ADF8] p-3 sm:p-[14px] flex flex-col justify-between z-10">
                <div className="flex flex-col gap-1">
                  <h4 className="text-xs sm:text-[16px] font-medium text-[#262626] font-inter-tight leading-snug">
                    Requirement document
                  </h4>
                  <p className="text-[10px] sm:text-[13px] font-normal text-[#262626] font-inter-tight leading-snug">
                    Turning business needs into clear technical requirements
                  </p>
                </div>

                {/* Badges & Dots */}
                <div className="flex flex-col gap-1.5 pt-2">
                  <div className="bg-[#E6FEE7] rounded-full px-2 py-0.5 sm:py-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00AA0B] flex-shrink-0" />
                    <span className="text-[9px] sm:text-[10px] font-medium text-[#00AA0B] font-inter-tight truncate">
                      Discovery with no upfront cost
                    </span>
                  </div>

                  <div className="bg-[#E6EEFE]/70 rounded-full px-2 py-0.5 sm:py-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#7F85F5] flex-shrink-0" />
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
