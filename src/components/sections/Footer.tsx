import React from "react";
import { ProblemSolveCTA } from "@/components/sections/ProblemSolveCTA";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full font-inter-tight bg-white">
      {/* CTA Section */}
      <ProblemSolveCTA />

      {/* Main Footer Container */}
      <div className="bg-white pt-16 sm:pt-20 pb-10 border-t border-gray-100">
        <div className="mx-auto px-5 sm:px-10 max-w-screen-2xl">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 mb-16">
            {/* LEFT: Contact Information */}
            <address className="not-italic flex-1 w-full lg:w-fit lg:border-r lg:border-gray-200 lg:mr-20 xl:mr-24">
              <h3 className="text-xl md:text-2xl font-semibold text-[#C02026] mb-6 sm:mb-8 font-inter-tight">
                Get in Touch With Us
              </h3>

              <div className="space-y-5 pl-1 sm:pl-3 font-medium text-lg sm:text-2xl">
                <div className="flex items-center gap-4 text-gray-700">
                  <i className="fi fi-rr-phone-call text-gray-900 text-lg sm:text-xl"></i>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base hover:text-[#C02026] transition-colors"
                  >
                    +62 812-9819-2099
                  </a>
                </div>

                <div className="flex items-center gap-4 text-gray-700">
                  <i className="fi fi-rr-envelope text-gray-900 text-lg sm:text-xl"></i>
                  <a
                    href="mailto:marketing@powernet.co.id"
                    className="text-sm md:text-base hover:text-[#C02026] transition-colors"
                  >
                    marketing@powernet.co.id
                  </a>
                </div>

                <div className="flex items-start gap-4 w-full sm:w-3/4 text-gray-700">
                  <i className="fi fi-rr-marker text-gray-900 mt-1 text-lg sm:text-xl flex-shrink-0"></i>
                  <p className="text-sm md:text-base leading-relaxed font-inter-tight">
                    Menara Kadin Indonesia Jl. H.R. Rasuna Said Blok X-5 KAV. 2-3,
                    Jakarta Selatan, DKI Jakarta
                  </p>
                </div>
              </div>
            </address>

            {/* RIGHT: Navigation Links matching POWERNET Context */}
            <nav
              aria-label="Footer Navigation"
              className="flex-1 flex flex-wrap items-start justify-between gap-x-8 sm:gap-x-10 lg:gap-x-16 gap-y-8 lg:pl-12"
            >
              <div className="w-fit">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-6 font-inter-tight">
                  Services
                </h4>
                <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg font-medium text-gray-500 font-inter-tight">
                  <li>
                    <a href="#service" className="hover:text-[#C02026] transition-colors">
                      Server &amp; Infrastructure
                    </a>
                  </li>
                  <li>
                    <a href="#service" className="hover:text-[#C02026] transition-colors">
                      Drone Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#service" className="hover:text-[#C02026] transition-colors">
                      Custom Software
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-fit">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-6 font-inter-tight">
                  Products
                </h4>
                <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg font-medium text-gray-500 font-inter-tight">
                  <li>
                    <a href="#products" className="hover:text-[#C02026] transition-colors">
                      Waste Management Supply Chain
                    </a>
                  </li>
                  <li>
                    <a href="#products" className="hover:text-[#C02026] transition-colors">
                      Class Learning Management System
                    </a>
                  </li>
                  <li>
                    <a href="#products" className="hover:text-[#C02026] transition-colors">
                      Open Source Docker Management
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-fit">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-6 font-inter-tight">
                  Social Media
                </h4>
                <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg font-medium text-gray-500 font-inter-tight">
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#C02026] transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#C02026] transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* COPYRIGHT */}
          <div className="pt-6 border-t border-gray-100 text-center font-inter-tight">
            <p className="text-base sm:text-lg text-gray-900 font-medium">
              Copyright @ PowerNET {new Date().getFullYear()}. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
