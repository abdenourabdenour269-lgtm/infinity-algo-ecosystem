"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignments = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-3xl mb-12", alignments[align], className)}>
      {label && (
        <span className="text-gold-400 text-sm font-medium tracking-widest uppercase mb-3 block">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold gold-gradient-text mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gold-200/60 text-lg leading-relaxed">
          {description}
        </p>
      )}
      <div className={cn(
        "w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded mt-6",
        align === "center" && "mx-auto",
        align === "right" && "ml-auto"
      )} />
    </div>
  );
}
