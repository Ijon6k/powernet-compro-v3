"use client";

import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export interface ChipItem {
  icon?: React.ReactNode;
  text: string;
}

export interface FloatingGlowCardProps {
  items: ChipItem[];
  className?: string;
  glowSpread?: number;
  glowProximity?: number;
  glowDisabled?: boolean;
}

export const FloatingGlowCard: React.FC<FloatingGlowCardProps> = ({
  items,
  className = "",
  glowSpread = 70,
  glowProximity = 140,
  glowDisabled = false,
}) => {
  const isAbsolute = className.includes("absolute");

  return (
    <div
      className={`flex flex-col gap-2.5 p-2 bg-white rounded-[12px] border-[2px] border-[#C02026] shadow-lg animate-float-subtle ${
        isAbsolute ? "" : "relative"
      } ${className}`}
    >
      <GlowingEffect
        spread={glowSpread || 70}
        glow={!glowDisabled}
        disabled={glowDisabled}
        proximity={glowProximity || 140}
        inactiveZone={0.01}
        borderWidth={2}
        movementDuration={3.5}
        variant="pink"
      />

      {items.map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-[8px] border border-[#C02026] p-2.5 sm:p-3 flex items-center gap-2.5 relative z-10"
        >
          {item.icon && (
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-[6px] bg-[#FDE8E8] flex items-center justify-center text-[#C02026] flex-shrink-0">
              {item.icon}
            </div>
          )}
          <p className="text-xs sm:text-[13px] font-medium text-black leading-tight font-inter-tight">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};
