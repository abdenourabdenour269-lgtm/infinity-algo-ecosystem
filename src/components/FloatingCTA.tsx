"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Zap } from "lucide-react";

const links = [
  { 
    label: "Get Academy Access", 
    href: "https://infinityalgoacademy.net",
    description: "Courses, Indicators & Expert Advisors"
  },
  { 
    label: "Get AI Signals", 
    href: "https://infinitysignals.net",
    description: "Real-time AI Trading Signals"
  },
];

export function FloatingCTA() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % links.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  if (!isVisible) return null;

  const currentLink = links[currentIndex];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={currentLink.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 gold-button px-6 py-4 rounded-full shadow-2xl pulse-glow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <Zap className="w-5 h-5 animate-pulse" />
        </div>
        <div className="flex flex-col items-start">
          <span className="font-semibold text-sm whitespace-nowrap transition-all duration-300">
            {currentLink.label}
          </span>
          <span className="text-xs opacity-70 whitespace-nowrap">
            {currentLink.description}
          </span>
        </div>
        <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
      </a>

      {/* Indicator dots */}
      <div className="flex justify-center gap-2 mt-3">
        {links.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-gold-400 w-4" 
                : "bg-gold-400/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
