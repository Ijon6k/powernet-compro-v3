import React from "react";

interface ClientLogo {
  name: string;
  width: number;
  height: number;
}

export const ClientLogos: React.FC = () => {
  const logos: ClientLogo[] = [
    { name: "SBI", width: 140, height: 44 },
    { name: "Huawei", width: 94, height: 70 },
    { name: "Kalbe", width: 181, height: 45 },
    { name: "Bank Jakarta", width: 127, height: 103 },
    { name: "WIKA", width: 73, height: 75 },
    { name: "Manulife", width: 157, height: 29 },
    { name: "ISS", width: 94, height: 94 },
    { name: "BERCA", width: 76, height: 76 },
    { name: "KPI", width: 83, height: 56 },
    { name: "POLRI", width: 85, height: 74 },
  ];

  // Duplicate logos array twice for seamless infinite scrolling loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="bg-white py-8 border-b border-[#D9D9D9]/60 w-full overflow-hidden">
      {/* Edge-to-edge full width container without left/right padding */}
      <div className="w-full overflow-hidden flex relative">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 lg:gap-20">
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-2 grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
            >
              <img
                src={`https://placehold.co/${logo.width}x${logo.height}?text=${encodeURIComponent(
                  logo.name
                )}`}
                alt={`${logo.name} Partner Logo`}
                width={logo.width}
                height={logo.height}
                className="max-h-10 sm:max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
