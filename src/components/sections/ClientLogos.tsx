import React from "react";

interface ClientLogo {
  name: string;
  src: string;
}

export const ClientLogos: React.FC = () => {
  const logos: ClientLogo[] = [
    { name: "BCA", src: "/logo/Property 1=BCAlogo.svg" },
    { name: "BERCA", src: "/logo/Property 1=BERCAlogo.svg" },
    { name: "Bank JAKARTA", src: "/logo/Property 1=Bank JAKARTAlogo.svg" },
    { name: "HUAWEI", src: "/logo/Property 1=HUAWEIlogo.svg" },
    { name: "ISS", src: "/logo/Property 1=ISSlogo.svg" },
    { name: "KPI", src: "/logo/Property 1=KPIlogo.svg" },
    { name: "Kemenkes", src: "/logo/Property 1=Kemenkeslogo.svg" },
    { name: "SDM POLRI", src: "/logo/Property 1=SDM POLRIlogo.svg" },
    { name: "Unilever", src: "/logo/Property 1=Unileverlogo.svg" },
    { name: "WIKA", src: "/logo/Property 1=WIKAlogo.svg" },
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
