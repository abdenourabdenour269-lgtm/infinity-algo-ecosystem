"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface GoldButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  external?: boolean;
  icon?: React.ReactNode;
}

export function GoldButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  icon,
}: GoldButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-semibold transition-all duration-300 overflow-hidden";

  const variants = {
    primary: "gold-button",
    secondary: "bg-navy-900 text-gold-400 border border-gold-400/30 hover:border-gold-400 hover:bg-navy-800",
    outline: "bg-transparent text-gold-400 border-2 border-gold-400 hover:bg-gold-400 hover:text-onyx",
    ghost: "bg-transparent text-gold-400 hover:bg-gold-400/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs rounded-full gap-1.5",
    md: "px-6 py-2.5 text-sm rounded-full gap-2",
    lg: "px-8 py-3 text-base rounded-full gap-2",
    xl: "px-10 py-4 text-lg rounded-full gap-3",
  };

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
      {icon}
    </button>
  );
}
