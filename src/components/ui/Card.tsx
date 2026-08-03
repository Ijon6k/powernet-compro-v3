import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  borderColor = "border-[#D9D9D9]",
}) => {
  return (
    <div
      className={`bg-white rounded-xl border ${borderColor} overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};
