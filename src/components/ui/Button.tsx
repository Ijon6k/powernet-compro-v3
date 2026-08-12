import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline-primary" | "outline-accent" | "ghost";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
  iconRight,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-archivo font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    small: "px-3 py-1.5 text-xs rounded-md gap-1.5",
    medium: "px-4 py-2.5 text-base rounded-lg gap-2",
    large: "px-4 py-3 text-lg sm:text-xl rounded-lg gap-2.5 min-h-[54px]",
  };

  const variantStyles = {
    primary:
      "bg-[#C02026] text-white hover:bg-[#a81b20] border border-[#C02026]",
    "outline-primary":
      "bg-white text-[#C02026] border border-[#C02026] hover:bg-[#fff5f5]",
    "outline-accent":
      "bg-transparent text-[#C02026] border border-[#C02026] hover:bg-[#C02026]/10",
    ghost:
      "bg-transparent text-[#262626] hover:bg-gray-100 border border-transparent",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {iconRight ? (
        iconRight
      ) : (
        <i className="fi fi-rr-angle-small-right text-current text-lg inline-flex items-center" />
      )}
    </button>
  );
};
