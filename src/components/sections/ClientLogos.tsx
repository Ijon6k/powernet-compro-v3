import React from "react";

interface ClientLogo {
  name: string;
  src: string;
}

export const ClientLogos: React.FC = () => {
  const logos: ClientLogo[] = [
    { name: "BCA", src: "/logo/bca.svg" },
    { name: "BERCA", src: "/logo/berca.svg" },
    { name: "Bank DKI", src: "/logo/bank-jakarta.svg" },
    { name: "HUAWEI", src: "/logo/huawei.svg" },
    { name: "ISS", src: "/logo/iss.svg" },
    { name: "KPI", src: "/logo/kpi.svg" },
    { name: "Kemenkes", src: "/logo/kemenkes.svg" },
    { name: "Mulia Industry Group", src: "/logo/mulia-industry-group.svg" },
    { name: "SDM POLRI", src: "/logo/sdm-polri.svg" },
    { name: "Unilever", src: "/logo/unilever.svg" },
    { name: "WIKA", src: "/logo/wika.svg" },
  ];

  // Duplicate logos array twice for seamless infinite scrolling loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="bg-white py-10 sm:py-14 w-full overflow-hidden">
      {/* Edge-to-edge full width container without left/right padding */}
      <div className="w-full overflow-hidden flex relative">
        <div className="animate-marquee flex items-center gap-14 sm:gap-20 lg:gap-24">
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-2 flex-shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={logo.src}
                alt={`${logo.name} Partner Logo`}
                className="h-12 sm:h-16 lg:h-20 w-auto object-contain max-w-[160px] sm:max-w-[220px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
