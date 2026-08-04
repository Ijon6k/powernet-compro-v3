import React from "react";

export const BuiltOnUnderstanding: React.FC = () => {
  return (
    <section id="service" className="bg-white py-12 sm:py-16 lg:py-20 border-b border-[#D9D9D9]/50 w-full">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 flex flex-col gap-10 lg:gap-14">
        {/* Section Header */}
        <div className="max-w-[1304px] flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight sm:leading-[1.2] font-inter-tight tracking-tight">
            Built on That Understanding
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#262626] leading-relaxed sm:leading-[36px] font-inter-tight">
            Everything we deliver begins the same way, with your operations in mind. Here is where it applies.
          </p>
        </div>

        {/* 2-Column Grid for Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Pillar 1: Server & Infrastructure */}
          <article className="flex flex-col gap-5">
            <div className="relative w-full h-[280px] sm:h-[331px] rounded-[20px] overflow-hidden border border-[#D9D9D9]">
              <img
                src="/photos/server-infrastructure.webp"
                alt="Server Infrastructure Monitoring and Cloud Uptime"
                className="w-full h-full object-cover"
              />

              {/* Floating Overlay Cards - Positioned on the Right */}
              <div className="absolute right-3 sm:right-[24px] bottom-4 sm:bottom-[24px] flex flex-col gap-2.5 w-[85%] max-w-[290px] z-10 p-2 bg-white rounded-[16px] border-[3.5px] border-[#F0D5D7] transition-all duration-300 hover:scale-[1.02] animate-float-subtle">
                <div className="bg-white rounded-[10px] border-2 border-[#C02026] p-2.5 sm:p-3 flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FDE8E8] flex items-center justify-center text-[#C02026] flex-shrink-0">
                    <i className="fi fi-rr-time-twenty-four text-sm sm:text-base" />
                  </div>
                  <p className="text-xs sm:text-[13px] font-medium text-black leading-tight font-inter-tight">
                    Built for uptime, so your operations never stall
                  </p>
                </div>

                <div className="bg-white rounded-[10px] border-2 border-[#C02026] p-2.5 sm:p-3 flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FDE8E8] flex items-center justify-center text-[#C02026] flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#C02026]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-5 5" />
                      <path d="M14 9h5v5" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-[13px] font-medium text-black leading-tight font-inter-tight">
                    Infrastructure that scales with you, without slowing down
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-black font-inter-tight">
                Server &amp; Infrastructure
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#262626] leading-relaxed sm:leading-[36px] font-inter-tight">
                Infrastructure that keeps your systems running reliably, so operations never wait on downtime.
              </p>
            </div>
          </article>

          {/* Pillar 2: Drone Solutions */}
          <article className="flex flex-col gap-5">
            <div className="relative w-full h-[280px] sm:h-[331px] rounded-[20px] overflow-hidden border border-[#D9D9D9]">
              <img
                src="/photos/drone-solutions.webp"
                alt="Aerial Drone Surveillance and Data Collection"
                className="w-full h-full object-cover"
              />

              {/* Floating Overlay Card - Positioned on the Right */}
              <div className="absolute right-3 sm:right-[24px] bottom-4 sm:bottom-[24px] w-[85%] max-w-[338px] z-10 p-2 bg-white rounded-[16px] border-[3.5px] border-[#F0D5D7] transition-all duration-300 hover:scale-[1.02] animate-float-subtle">
                <div className="bg-white rounded-[10px] border-2 border-[#C02026] p-2.5 sm:p-3 flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FDE8E8] flex items-center justify-center text-[#C02026] flex-shrink-0">
                    <i className="fi fi-rr-stats text-sm sm:text-base" />
                  </div>
                  <p className="text-xs sm:text-[13px] font-medium text-black leading-tight font-inter-tight">
                    Actionable insight from the field, without sending teams into hard-to-reach areas
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-black font-inter-tight">
                Drone Solutions
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#262626] leading-relaxed sm:leading-[36px] font-inter-tight">
                Aerial data and monitoring that turn field conditions into decisions you can act on.
              </p>
            </div>
          </article>

          {/* Pillar 3: Custom Software */}
          <article className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-4">
            <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[331px] rounded-[20px] overflow-hidden border border-[#D9D9D9]">
              <img
                src="/photos/custom-software.webp"
                alt="Custom Software Development Architecture"
                className="w-full h-full object-cover"
              />

              {/* Floating Cards - Positioned on the Right */}
              <div className="absolute right-3 sm:right-[24px] bottom-4 sm:bottom-[24px] flex flex-col gap-2.5 w-[85%] max-w-[270px] z-10 p-2 bg-white rounded-[16px] border-[3.5px] border-[#F0D5D7] transition-all duration-300 hover:scale-[1.02] animate-float-subtle">
                <div className="bg-white rounded-[10px] border-2 border-[#C02026] p-2.5 sm:p-3 flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FDE8E8] flex items-center justify-center text-[#C02026] flex-shrink-0">
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.3898 9.65345L10.1083 10.935L11.9057 12.7323L13.1872 11.4508C13.1545 11.1191 13.0322 10.6949 12.589 10.2517C12.1457 9.80855 11.7215 9.68616 11.3898 9.65345ZM14.9187 12.1566L14.9217 11.8039C14.9258 11.3055 14.9166 10.142 13.8076 9.03304C12.6986 7.92413 11.5353 7.91482 11.0368 7.91899L10.6841 7.92194L3.63662 14.9694L3.7402 15.4319L4.58109 15.2436C3.7402 15.4319 3.7402 15.4319 3.7402 15.4319L3.74066 15.4339L3.74121 15.4363L3.74262 15.4425L3.74669 15.4595C3.74997 15.473 3.7544 15.4907 3.76006 15.5122C3.77138 15.5552 3.7877 15.6138 3.80976 15.685C3.85375 15.827 3.92131 16.0219 4.01874 16.2459C4.21092 16.6879 4.53341 17.2763 5.04891 17.7918C5.56441 18.3073 6.15274 18.6297 6.59474 18.8219C6.8188 18.9193 7.01367 18.9869 7.15566 19.0309C7.22688 19.053 7.28542 19.0693 7.32842 19.0806C7.34993 19.0863 7.36762 19.0907 7.38112 19.094L7.3982 19.098L7.40431 19.0995L7.40675 19.1L7.40782 19.1002C7.40782 19.1002 7.40878 19.1005 7.5971 18.2596L7.40878 19.1005L7.50179 19.1213H15.7834V17.3979H9.67747L14.9187 12.1566ZM10.687 13.951L8.88968 12.1536L5.56523 15.4781C5.5759 15.5042 5.58723 15.5311 5.59924 15.5587C5.73851 15.879 5.9546 16.2601 6.26756 16.5731C6.58052 16.8861 6.96162 17.1021 7.28194 17.2414C7.30956 17.2534 7.33647 17.2648 7.36259 17.2754L10.687 13.951Z" fill="#C02026"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M2.82269 3.57541L3.76359 0.752718H5.39858L6.33948 3.57541L9.16218 4.51631V6.1513L6.33948 7.0922L5.39858 9.91489H3.76359L2.82269 7.0922L0 6.1513V4.51631L2.82269 3.57541ZM4.58109 3.75021L4.32144 4.52916L3.77644 5.07416L2.99749 5.33381L3.77644 5.59346L4.32144 6.13845L4.58109 6.9174L4.84074 6.13845L5.38574 5.59346L6.16469 5.33381L5.38574 5.07416L4.84074 4.52916L4.58109 3.75021Z" fill="#C02026"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M13.3281 2.01676L14.0003 0H14.9813L15.6536 2.01676L17.6704 2.68901V3.67001L15.6536 4.34226L14.9813 6.35902H14.0003L13.3281 4.34226L11.3113 3.67001V2.68901L13.3281 2.01676Z" fill="#C02026"/>
                    </svg>
                  </div>
                  <p className="text-xs sm:text-[13px] font-semibold text-[#262626] leading-tight font-inter-tight">
                    Tailored to your organization needs
                  </p>
                </div>

                <div className="bg-white rounded-[10px] border-2 border-[#C02026] p-2.5 sm:p-3 flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FDE8E8] flex items-center justify-center text-[#C02026] flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M3.79213 7.13L5.05617 3.33787H6.69116L7.9552 7.13L11.7473 8.39404V10.029L7.9552 11.2931L6.69116 15.0852H5.05617L3.79213 11.2931L0 10.029V8.39404L3.79213 7.13ZM5.87366 6.33536L5.29087 8.08374L4.74587 8.62874L2.99749 9.21154L4.74587 9.79433L5.29087 10.3393L5.87366 12.0877L6.45646 10.3393L7.00146 9.79433L8.74984 9.21154L7.00146 8.62874L6.45646 8.08374L5.87366 6.33536Z" fill="#C02026"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.6047 2.01676L12.2769 0H13.2579L13.9302 2.01676L15.9469 2.68901V3.67001L13.9302 4.34226L13.2579 6.35902H12.2769L11.6047 4.34226L9.58789 3.67001V2.68901L11.6047 2.01676Z" fill="#C02026"/>
                    </svg>
                  </div>
                  <p className="text-xs sm:text-[13px] font-semibold text-[#262626] leading-tight font-inter-tight">
                    Accelerate operational excellence
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl sm:text-3xl font-semibold text-black font-inter-tight">
                  Custom Software
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#262626] leading-relaxed sm:leading-[36px] font-inter-tight">
                  Operational software shaped around how your organization works, built to remove the manual load that slows it down.
                </p>
              </div>

              {/* Blockchain Application Block */}
              <div className="flex flex-col gap-2 pt-2">
                <h3 className="text-2xl sm:text-3xl font-semibold text-black font-inter-tight">
                  Blockchain Application
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#262626] leading-relaxed sm:leading-[36px] font-inter-tight">
                  Blockchain solutions built to trace your operations end to end, securing every transaction and keeping your data transparent, verifiable, and tamper-resistant.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
