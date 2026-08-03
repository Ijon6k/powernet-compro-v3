import React from "react";

interface BadgeProps {
  variant?: "success" | "info" | "purple" | "neutral" | "active";
  children: React.ReactNode;
  dotColor?: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "info",
  children,
  dotColor,
  className = "",
}) => {
  const variantStyles = {
    success: "bg-[#E6FEE7] text-[#00AA0B]",
    info: "bg-[#E6EEFE]/70 text-[#7F85F5]",
    purple: "bg-[#F5E6FE] text-[#CB30E0]",
    neutral: "bg-gray-100 text-gray-700 border border-gray-200",
    active: "bg-[#F9E9E9] text-[#C02026]",
  };

  const defaultDots = {
    success: "#00AA0B",
    info: "#7F85F5",
    purple: "#CB30E0",
    neutral: "#6B7280",
    active: "#C02026",
  };

  const finalDotColor = dotColor || defaultDots[variant];

  return (
    <span
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium font-inter-tight ${variantStyles[variant]} ${className}`}
    >
      {finalDotColor && (
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ backgroundColor: finalDotColor }}
        />
      )}
      <span>{children}</span>
    </span>
  );
};
