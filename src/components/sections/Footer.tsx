import React from "react";
import { ProblemSolveCTA } from "@/components/sections/ProblemSolveCTA";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full font-inter-tight bg-white">
      {/* CTA Section */}
      <ProblemSolveCTA />

      {/* Main Footer Container */}
      <div className="bg-white pt-16 sm:pt-20 pb-10 border-t border-[#D9D9D9]">
        <div className="mx-auto px-5 sm:px-10 lg:px-16 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-0 mb-16 sm:mb-20">
            {/* LEFT: Contact Information with vertical divider on desktop */}
            <address className="not-italic w-full lg:w-1/2 lg:border-r lg:border-[#D9D9D9] lg:pr-12 xl:pr-20 lg:mr-8 xl:mr-12 flex flex-col justify-start items-start">
              <h3 className="text-2xl font-semibold text-[#B82E59] mb-6 sm:mb-8 font-inter-tight leading-[36px]">
                Get in Touch With Us
              </h3>

              <div className="space-y-6 sm:space-y-[28px] font-normal text-xl font-inter-tight">
                <div className="flex items-center gap-4 text-[#262626]">
                  <i className="fi fi-rr-phone-call text-[#262626] text-xl flex-shrink-0"></i>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-normal text-[#262626] hover:text-[#C02026] transition-colors font-inter-tight leading-[30px]"
                  >
                    +62 812-9819-2099
                  </a>
                </div>

                <div className="flex items-center gap-4 text-[#262626]">
                  <i className="fi fi-rr-envelope text-[#262626] text-xl flex-shrink-0"></i>
                  <a
                    href="mailto:marketing@powernet.co.id"
                    className="text-xl font-normal text-[#262626] hover:text-[#C02026] transition-colors font-inter-tight leading-[30px]"
                  >
                    marketing@powernet.co.id
                  </a>
                </div>

                <div className="flex items-start gap-4 w-full text-[#262626]">
                  <i className="fi fi-rr-marker text-[#262626] mt-1 text-xl flex-shrink-0"></i>
                  <p className="text-xl font-normal text-[#262626] font-inter-tight leading-[30px]">
                    Jl. Margonda Raya, Kota Depok, Jawa Barat
                  </p>
                </div>
              </div>
            </address>

            {/* RIGHT: Navigation Links matching Reference Design */}
            <nav
              aria-label="Footer Navigation"
              className="w-full lg:w-1/2 flex flex-row flex-wrap items-start justify-start gap-12 sm:gap-16 lg:gap-[70px] lg:pl-6 xl:pl-10"
            >
              {/* Service Column */}
              <div className="w-fit flex flex-col justify-start items-start">
                <h4 className="text-2xl font-semibold text-black mb-6 sm:mb-8 font-inter-tight leading-[36px]">
                  Service
                </h4>
                <ul className="space-y-6 sm:space-y-[35px] text-xl font-normal text-black font-inter-tight">
                  <li>
                    <a
                      href="/#service"
                      className="text-xl font-normal text-black hover:text-[#C02026] transition-colors leading-[30px]"
                    >
                      Software Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#service"
                      className="text-xl font-normal text-black hover:text-[#C02026] transition-colors leading-[30px]"
                    >
                      Drone Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#service"
                      className="text-xl font-normal text-black hover:text-[#C02026] transition-colors leading-[30px]"
                    >
                      Server &amp; Infrastructure
                    </a>
                  </li>
                </ul>
              </div>

              {/* Products Column */}
              <div className="w-fit flex flex-col justify-start items-start">
                <h4 className="text-2xl font-semibold text-black mb-6 sm:mb-8 font-inter-tight leading-[36px]">
                  Products
                </h4>
                <ul className="space-y-6 sm:space-y-[35px] text-xl font-normal text-black font-inter-tight">
                  <li>
                    <a
                      href="/#products"
                      className="text-xl font-normal text-black hover:text-[#C02026] transition-colors leading-[30px]"
                    >
                      Waste Management Supply Chain
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#products"
                      className="text-xl font-normal text-black hover:text-[#C02026] transition-colors leading-[30px]"
                    >
                      Containo
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#products"
                      className="text-xl font-normal text-black hover:text-[#C02026] transition-colors leading-[30px]"
                    >
                      Learning Management System
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* COPYRIGHT */}
          <div className="pt-6 border-t border-[#D9D9D9] text-center font-inter-tight">
            <p className="text-xl font-medium text-[#595959] leading-[30px]">
              Copyright @ PowerNET 2026. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
