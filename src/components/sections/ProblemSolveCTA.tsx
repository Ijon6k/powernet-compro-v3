import React from "react";
import { Button } from "@/components/ui/Button";

export const ProblemSolveCTA: React.FC = () => {
  return (
    <section id="contact-cta" className="bg-white py-10 sm:py-16 w-full">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="bg-[#FEF8E6] rounded-[20px] p-6 sm:p-10 lg:p-12 border border-[#FEF8E6] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
          {/* Left Text */}
          <div className="max-w-[868px] flex flex-col gap-2.5 sm:gap-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black leading-tight font-inter-tight">
              Could One of These Solve Your Problem?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-normal text-[#262626] leading-relaxed sm:leading-[32px] font-inter-tight">
              The solutions above were built for real operational challenges. If your organization faces something similar, we can build one shaped around how you work.
            </p>
          </div>

          {/* Right Button */}
          <div className="flex-shrink-0 w-full lg:w-auto pt-2 lg:pt-0">
            <a href="mailto:marketing@powernet.co.id" aria-label="Contact Our Team">
              <Button
                variant="outline-primary"
                size="large"
                className="!w-full sm:!w-auto !px-8 !h-[56px] !bg-white !rounded-[8px] !text-lg sm:!text-[20px] !font-medium justify-center"
                iconRight={
                  <i className="fi fi-rr-arrow-up-right text-[#C02026] text-lg ml-1 inline-flex items-center" />
                }
              >
                Contact Our Team
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
