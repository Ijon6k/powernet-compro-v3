"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface DropdownItem {
  title: string;
  desc: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { label: "About Us", href: "/#about" },
    {
      label: "Service",
      href: "/#service",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "Server & Infrastructure",
          desc: "High uptime hardware monitoring & cloud scaling",
          href: "/#service",
        },
        {
          title: "Drone Solutions",
          desc: "Aerial mapping & field monitoring data collection",
          href: "/#service",
        },
        {
          title: "Custom Software",
          desc: "Operational software shaped around your workflow",
          href: "/#service",
        },
        {
          title: "Blockchain Application",
          desc: "End-to-end transparent & tamper-resistant tracking",
          href: "/#service",
        },
      ],
    },
    {
      label: "Products",
      href: "/#products",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "Waste Management Supply Chain",
          desc: "Real-time B3 waste tracking & KLHK compliance",
          href: "/#products",
        },
        {
          title: "Class Learning Management System",
          desc: "AI-powered integrity scoring & LMS suite",
          href: "/#products",
        },
        {
          title: "Open Source Docker Management",
          desc: "Container management platform for IT ops",
          href: "/#products",
        },
      ],
    },
    { label: "Portofolio", href: "/#portfolio" },
    { label: "Case Study", href: "/case-study" },
  ];

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-white/95 backdrop-blur-md border-b border-[#D9D9D9]/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 h-[80px] lg:h-[100px] flex items-center justify-between">
        {/* Left Brand Container */}
        <div className="flex items-center gap-8 lg:gap-12 xl:gap-14">
          {/* Logo Container with vertical divider */}
          <div className={`pr-8 lg:pr-12 border-r flex items-center h-9 lg:h-[44px] transition-colors ${
            isScrolled || mobileMenuOpen ? "border-[#D9D9D9]" : "border-white/30"
          }`}>
            {/* POWERNET Official SVG Logo */}
            <a href="/" aria-label="POWERNET Home">
              <img
                src="/logo/LOGO.svg"
                alt="POWERNET Logo"
                width={181}
                height={44}
                className="h-9 lg:h-[44px] w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-8 xl:gap-10 2xl:gap-[48px]">
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative group py-6">
                <a
                  href={link.href}
                  className={`text-base sm:text-lg lg:text-xl font-normal font-inter-tight flex items-center gap-2 transition-colors whitespace-nowrap ${
                    isScrolled || mobileMenuOpen
                      ? "text-[#262626] hover:text-[#C02026]"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ease-out origin-center group-hover:rotate-180 ${
                        isScrolled || mobileMenuOpen
                          ? "text-[#262626] group-hover:text-[#C02026]"
                          : "text-white group-hover:text-white/80"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </a>

                {/* White Rounded Dropdown Menu */}
                {link.hasDropdown && link.dropdownItems && (
                  <div className="absolute top-full -left-4 mt-1 w-[320px] sm:w-[350px] bg-white rounded-2xl border border-[#D9D9D9] p-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                    <div className="flex flex-col gap-1.5">
                      {link.dropdownItems.map((item, itemIdx) => (
                        <a
                          key={itemIdx}
                          href={item.href}
                          className="p-3 rounded-xl hover:bg-[#F9E9E9]/60 flex flex-col gap-0.5 transition-colors group/item"
                        >
                          <span className="text-base font-semibold text-[#262626] group-hover/item:text-[#C02026] font-inter-tight transition-colors">
                            {item.title}
                          </span>
                          <span className="text-xs font-normal text-[#595959] font-inter-tight leading-snug">
                            {item.desc}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right CTA Container */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Us via WhatsApp"
          >
            <Button
              variant="outline-accent"
              size="large"
              className="!h-[54px] !px-6 !rounded-full !text-[20px] !font-medium !bg-transparent !border-[#C02026] !text-[#C02026] hover:!bg-[#C02026]/10"
              iconRight={<i className="fi fi-rr-call-outgoing text-[#C02026] text-lg ml-1" />}
            >
              Contact Us
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`xl:hidden p-2 focus:outline-none transition-colors ${
            isScrolled || mobileMenuOpen
              ? "text-[#262626] hover:text-[#C02026]"
              : "text-white hover:text-white/80"
          }`}
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
        <div className="xl:hidden bg-white border-t border-[#D9D9D9] px-6 py-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link, idx) => (
              <div key={idx} className="border-b border-gray-100 py-2">
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown(link.label)}
                      className="w-full text-lg font-medium text-[#262626] hover:text-[#C02026] flex items-center justify-between py-1"
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`w-4.5 h-4.5 text-[#262626] transition-transform duration-200 ease-out origin-center ${
                          openMobileDropdown === link.label ? "rotate-180 text-[#C02026]" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    {/* Mobile Dropdown Sub-Items */}
                    {openMobileDropdown === link.label && link.dropdownItems && (
                      <div className="mt-2 pl-2 space-y-2 bg-[#FAF9F9] rounded-xl p-3 border border-[#D9D9D9]/70">
                        {link.dropdownItems.map((item, itemIdx) => (
                          <a
                            key={itemIdx}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex flex-col gap-0.5 py-2 px-2.5 rounded-lg hover:bg-white text-sm font-medium text-[#262626] hover:text-[#C02026]"
                          >
                            <span className="font-semibold text-sm">{item.title}</span>
                            <span className="text-xs text-[#595959] font-normal">{item.desc}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-[#262626] hover:text-[#C02026] block py-1"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Us via WhatsApp"
            >
              <Button
                variant="outline-accent"
                size="medium"
                className="w-full !rounded-full !text-xl justify-center !bg-transparent !border-[#C02026] !text-[#C02026] hover:!bg-[#C02026]/10"
                iconRight={<i className="fi fi-rr-call-outgoing text-[#C02026] text-lg ml-1" />}
              >
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
