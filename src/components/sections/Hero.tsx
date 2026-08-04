import React from "react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const Hero: React.FC = () => {
  return (
    <section id="about" className="bg-[#F5F5F5] w-full min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-100px)] flex flex-col justify-center py-12 sm:py-16">
      <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-10 lg:px-20">
        <div className="max-w-[822px] flex flex-col gap-6 sm:gap-8">
          {/* Main Title - 3 lines on desktop */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight sm:leading-[1.15] font-inter-tight tracking-tight">
            When Operations Run on Manual{" "}
            <br className="hidden lg:block" />
            Work, Organizations Lose More Than{" "}
            <br className="hidden lg:block" />
            Just Time
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#262626] leading-relaxed sm:leading-[36px] font-inter-tight max-w-[800px]">
            POWERNET builds operational technology designed around how your
            organization actually works, reducing manual load, strengthening
            infrastructure, and making operations run more efficiently and reliably.
          </p>

          {/* Primary Action Button */}
          <div className="pt-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discuss Your Needs via WhatsApp"
            >
              <Button
                variant="primary"
                size="large"
                className="!w-full sm:!w-auto !px-8 !h-[61px] !rounded-[10px] !text-xl !font-medium justify-center"
                iconRight={
                  <i className="fi fi-rr-comment text-white text-lg ml-1 inline-flex items-center" />
                }
              >
                Discuss Your Needs
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
