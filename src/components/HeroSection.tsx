"use client";

import { Logo3D } from "./Logo3D";
import { GoldParticles } from "./GoldParticles";
import { GoldButton } from "./GoldButton";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  showParticles?: boolean;
  showLogo?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  actions?: {
    primary?: { label: string; href: string; external?: boolean };
    secondary?: { label: string; href: string; external?: boolean };
  };
  stats?: { label: string; value: string; icon?: React.ReactNode }[];
  className?: string;
  children?: React.ReactNode;
}

export function HeroSection({
  title,
  subtitle,
  description,
  showParticles = true,
  showLogo = true,
  size = "lg",
  actions,
  stats,
  className = "",
  children,
}: HeroSectionProps) {
  const { direction } = useLanguage();
  
  const heights = {
    sm: "min-h-[40vh]",
    md: "min-h-[60vh]",
    lg: "min-h-[85vh]",
    xl: "min-h-screen",
  };

  // Use appropriate arrow based on direction
  const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        heights[size],
        className
      )}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 via-onyx to-onyx" />

      {/* Gold Particles */}
      {showParticles && <GoldParticles />}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Logo */}
        {showLogo && (
          <div className="flex justify-center mb-8">
            <Logo3D size="xl" />
          </div>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p className="text-gold-400 text-sm md:text-base font-medium tracking-widest uppercase mb-4">
            {subtitle}
          </p>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold gold-gradient-text leading-tight mb-6">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-gold-200/70 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>
        )}

        {/* Action Buttons */}
        {actions && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {actions.primary && (
              <GoldButton
                href={actions.primary.href}
                external={actions.primary.external}
                size="lg"
                icon={<ArrowIcon className="w-5 h-5 rtl-icon" />}
              >
                {actions.primary.label}
              </GoldButton>
            )}
            {actions.secondary && (
              <GoldButton
                href={actions.secondary.href}
                external={actions.secondary.external}
                variant="outline"
                size="lg"
              >
                {actions.secondary.label}
              </GoldButton>
            )}
          </div>
        )}

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-4 text-center"
              >
                {stat.icon && (
                  <div className="text-gold-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                )}
                <div className="text-2xl md:text-3xl font-bold gold-gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-gold-300/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Additional Content */}
        {children}
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-onyx to-transparent" />
    </section>
  );
}
