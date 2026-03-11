"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  padding?: "sm" | "md" | "lg" | "xl";
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
  padding = "md",
}: GlassCardProps) {
  const paddingSizes = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  return (
    <div
      className={cn(
        "glass-card rounded-2xl",
        hover && "glass-card-hover",
        glow && "luxury-glow",
        paddingSizes[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
