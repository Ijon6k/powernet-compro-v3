import React from "react";

export const BuiltOnUnderstanding: React.FC = () => {
  const techLogos = [
    { name: "Python", width: 41, height: 41 },
    { name: "Go", width: 92, height: 41 },
    { name: "Docker", width: 141, height: 41 },
    { name: "TypeScript", width: 60, height: 37 },
    { name: "PHP", width: 141, height: 32 },
    { name: "Laravel", width: 120, height: 30 },
    { name: "Next.js", width: 41, height: 41 },
    { name: "JS", width: 105, height: 21 },
  ];

  return (
    <section id="service" className="bg-white py-12 sm:py-16 lg:py-20 border-b border-[#D9D9D9]/50 w-full">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 flex flex-col gap-10 lg:gap-14">
        {/* Section Header */}
        <div className="max-w-[1304px] flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight sm:leading-[1.2] font-inter-tight tracking-tight">
            Built on That Understanding
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-normal text-[#262626] leading-relaxed sm:leading-[32px] font-inter-tight">
            Everything we deliver begins the same way, with your operations in mind. Here is where it applies.
          </p>
        </div>

        {/* 2-Column Grid for Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Pillar 1: Server & Infrastructure */}
          <article className="flex flex-col gap-5">
            <div className="relative w-full h-[280px] sm:h-[331px] rounded-[20px] overflow-hidden border border-[#D9D9D9] bg-gradient-to-tr from-purple-50 to-indigo-50">
              <img
                src="https://placehold.co/605x331?text=Server+Infrastructure+Background"
                alt="Server Infrastructure Monitoring and Cloud Uptime"
                className="w-full h-full object-cover"
              />
              <div className="absolute right-3 sm:right-[36px] top-4 sm:top-[40px] w-[55%] max-w-[363px] h-[65%] max-h-[233px] rounded-xl overflow-hidden border border-white/60">
                <img
                  src="https://placehold.co/363x233?text=Server+Rack+Preview"
                  alt="Server Rack Hardware Setup"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Overlay Cards */}
              <div className="absolute left-3 sm:left-[37px] bottom-4 sm:bottom-[30px] flex flex-col gap-2.5 w-[80%] max-w-[281px] z-10">
                <div className="bg-white rounded-lg border border-[#A9ADF8] p-2.5 sm:p-3 flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-[#F2F3FE] flex items-center justify-center text-[#7F85F5] flex-shrink-0">
                    <i className="fi fi-rr-server text-sm sm:text-base" />
                  </div>
                  <p className="text-xs sm:text-[13px] font-medium text-black leading-tight font-inter-tight">
                    Built for uptime, so your operations never stall
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-[#A9ADF8] p-2.5 sm:p-3 flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-[#F2F3FE] flex items-center justify-center text-[#7F85F5] flex-shrink-0">
                    <i className="fi fi-rr-expand-arrows text-sm sm:text-base" />
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
              <p className="text-base sm:text-lg lg:text-xl font-normal text-[#262626] leading-relaxed sm:leading-[32px] font-inter-tight">
                Infrastructure that keeps your systems running reliably, so operations never wait on downtime.
              </p>
            </div>
          </article>

          {/* Pillar 2: Drone Solutions */}
          <article className="flex flex-col gap-5">
            <div className="relative w-full h-[280px] sm:h-[331px] rounded-[20px] overflow-hidden border border-[#D9D9D9] bg-gradient-to-tr from-sky-50 to-blue-50">
              <img
                src="https://placehold.co/605x331?text=Drone+Solutions+Background"
                alt="Aerial Drone Surveillance and Data Collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute right-3 sm:right-[36px] top-4 sm:top-[41px] w-[55%] max-w-[363px] h-[65%] max-h-[233px] rounded-xl overflow-hidden border border-white/60">
                <img
                  src="https://placehold.co/363x233?text=Drone+Field+Monitoring"
                  alt="Drone Field Monitoring Equipment"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Overlay Card */}
              <div className="absolute left-3 sm:left-[50px] bottom-4 sm:bottom-[40px] w-[85%] max-w-[338px] z-10">
                <div className="bg-white rounded-lg border-2 border-[#A9ADF8] p-2.5 sm:p-3 flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-[#F2F3FE] flex items-center justify-center text-[#7F85F5] flex-shrink-0">
                    <i className="fi fi-rr-crosshair text-sm sm:text-base" />
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
              <p className="text-base sm:text-lg lg:text-xl font-normal text-[#262626] leading-relaxed sm:leading-[32px] font-inter-tight">
                Aerial data and monitoring that turn field conditions into decisions you can act on.
              </p>
            </div>
          </article>

          {/* Pillar 3: Custom Software */}
          <article className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-4">
            <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[331px] rounded-[20px] overflow-hidden border border-[#D9D9D9] bg-gradient-to-tr from-rose-50 to-pink-50">
              <img
                src="https://placehold.co/605x331?text=Custom+Software+Background"
                alt="Custom Software Development Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute right-3 sm:right-[36px] top-4 sm:top-[49px] w-[55%] max-w-[363px] h-[65%] max-h-[233px] rounded-xl overflow-hidden border border-white/60">
                <img
                  src="https://placehold.co/363x233?text=Software+Development+Screen"
                  alt="Enterprise Application Code Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute left-3 sm:left-[36px] bottom-4 sm:bottom-[30px] flex flex-col gap-2.5 w-[80%] max-w-[241px] z-10">
                <div className="bg-white rounded-lg border-2 border-[#A9ADF8] p-2.5 sm:p-3 flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-[#F2F3FE] flex items-center justify-center text-[#7F85F5] flex-shrink-0">
                    <i className="fi fi-rr-bolt text-sm sm:text-base" />
                  </div>
                  <p className="text-xs sm:text-[13px] font-medium text-black leading-tight font-inter-tight">
                    Tailored to your organization needs
                  </p>
                </div>

                <div className="bg-white rounded-lg border-2 border-[#A9ADF8] p-2.5 sm:p-3 flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-[#F2F3FE] flex items-center justify-center text-[#7F85F5] flex-shrink-0">
                    <i className="fi fi-rr-stats text-sm sm:text-base" />
                  </div>
                  <p className="text-xs sm:text-[13px] font-medium text-black leading-tight font-inter-tight">
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
                <p className="text-base sm:text-lg lg:text-xl font-normal text-[#262626] leading-relaxed sm:leading-[32px] font-inter-tight">
                  Operational software shaped around how your organization works, built to remove the manual load that slows it down.
                </p>
              </div>

              {/* Tech Stack Logo Placeholders */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                {techLogos.map((tech, idx) => (
                  <img
                    key={idx}
                    src={`https://placehold.co/${tech.width}x${tech.height}?text=${encodeURIComponent(
                      tech.name
                    )}`}
                    alt={`${tech.name} Programming Technology`}
                    width={tech.width}
                    height={tech.height}
                    className="h-7 sm:h-9 w-auto object-contain flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
