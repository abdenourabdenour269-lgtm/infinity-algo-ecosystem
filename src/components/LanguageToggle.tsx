"use client";

import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
      className={cn(
        "group flex items-center gap-2 px-3 py-2 rounded-full",
        "bg-gold-400/10 border border-gold-400/20",
        "hover:bg-gold-400/20 hover:border-gold-400/40",
        "transition-all duration-300",
        className
      )}
    >
      <Globe className="w-4 h-4 text-gold-400" />
      <span className="text-gold-400 text-sm font-medium">
        {language === "en" ? "العربية" : "English"}
      </span>
    </button>
  );
}
