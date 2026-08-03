"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About Us", href: "#about" },
    { label: "Service", href: "#service", hasDropdown: true },
    { label: "Products", href: "#products", hasDropdown: true },
    { label: "Portofolio", href: "#portfolio" },
    { label: "Case Study", href: "#case-study" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#D9D9D9]/50 w-full">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 h-[80px] lg:h-[100px] flex items-center justify-between">
        {/* Left Brand Container */}
        <div className="flex items-center gap-6 lg:gap-8">
          {/* Logo Placeholder */}
          <div className="pr-6 border-r border-[#D9D9D9] flex items-center">
            {/* Logo image with exact dimensions specified by Figma design (181x44) */}
            <img
              src="https://placehold.co/181x44?text=POWERNET"
              alt="POWERNET Logo"
              width={181}
              height={44}
              className="h-9 lg:h-[44px] w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-2">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="px-3 py-2 text-lg lg:text-[20px] font-normal text-[#262626] font-inter-tight hover:text-[#C02026] flex items-center gap-1.5 transition-colors"
              >
                <span>{link.label}</span>
                {link.hasDropdown && (
                  <i className="fi fi-rr-angle-small-down text-base text-[#262626] mt-0.5" />
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* Right CTA Container */}
        <div className="hidden sm:flex items-center gap-4">
          <Button
            variant="outline-accent"
            size="large"
            className="!h-[54px] !px-6 !rounded-[10px] !text-[20px] !font-medium"
            iconRight={<i className="fi fi-rr-phone-call text-[#B82E59] text-lg ml-1" />}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-[#262626] hover:text-[#C02026] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <i
            className={`fi ${
              mobileMenuOpen ? "fi-rr-cross" : "fi-rr-menu-burger"
            } text-2xl`}
          />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-[#D9D9D9] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[#262626] hover:text-[#C02026] py-2 border-b border-gray-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.hasDropdown && (
                  <i className="fi fi-rr-angle-small-down text-base text-[#262626]" />
                )}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <Button
              variant="outline-accent"
              size="medium"
              className="w-full !rounded-[10px] !text-lg justify-center"
              iconRight={<i className="fi fi-rr-phone-call text-[#B82E59] ml-1" />}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
