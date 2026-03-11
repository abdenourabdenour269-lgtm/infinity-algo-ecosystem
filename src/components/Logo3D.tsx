"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Logo3DProps {
  size?: "sm" | "md" | "lg" | "xl";
  showSignature?: boolean;
  className?: string;
  interactive?: boolean;
}

export function Logo3D({ 
  size = "md", 
  showSignature = true, 
  className = "",
  interactive = true 
}: Logo3DProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "w-12 h-8",
    md: "w-20 h-14",
    lg: "w-32 h-20",
    xl: "w-48 h-32"
  };

  const textSize = {
    sm: "text-[8px]",
    md: "text-[10px]",
    lg: "text-xs",
    xl: "text-sm"
  };

  return (
    <div 
      className={cn("logo-3d-container relative", className)}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
    >
      <div 
        className={cn(
          "relative flex items-center justify-center",
          sizeClasses[size]
        )}
      >
        {/* Main Logo with 3D Effect */}
        <div 
          className={cn(
            "relative transition-all duration-500",
            isHovered ? "logo-3d" : "logo-3d"
          )}
          style={{
            animationDuration: isHovered ? "3s" : "20s"
          }}
        >
          {/* Infinity Symbol */}
          <svg
            viewBox="0 0 200 80"
            className={cn(
              "w-full h-full",
              sizeClasses[size]
            )}
            style={{
              filter: isHovered 
                ? "drop-shadow(0 0 30px rgba(212, 175, 55, 0.8)) drop-shadow(0 0 60px rgba(212, 175, 55, 0.4))" 
                : "drop-shadow(0 0 20px rgba(212, 175, 55, 0.5))"
            }}
          >
            {/* Gradient Definitions */}
            <defs>
              {/* Main Gold Gradient */}
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F3D999">
                  <animate attributeName="stop-color" values="#F3D999;#D4AF37;#EBC76A;#F3D999" dur="3s" repeatCount="indefinite"/>
                </stop>
                <stop offset="25%" stopColor="#D4AF37">
                  <animate attributeName="stop-color" values="#D4AF37;#EBC76A;#C9A227;#D4AF37" dur="3s" repeatCount="indefinite"/>
                </stop>
                <stop offset="50%" stopColor="#C9A227">
                  <animate attributeName="stop-color" values="#C9A227;#D4AF37;#EBC76A;#C9A227" dur="3s" repeatCount="indefinite"/>
                </stop>
                <stop offset="75%" stopColor="#EBC76A">
                  <animate attributeName="stop-color" values="#EBC76A;#C9A227;#D4AF37;#EBC76A" dur="3s" repeatCount="indefinite"/>
                </stop>
                <stop offset="100%" stopColor="#D4AF37">
                  <animate attributeName="stop-color" values="#D4AF37;#F3D999;#C9A227;#D4AF37" dur="3s" repeatCount="indefinite"/>
                </stop>
              </linearGradient>

              {/* Metallic Highlight */}
              <linearGradient id="metallicHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)"/>
                <stop offset="30%" stopColor="rgba(255, 255, 255, 0.2)"/>
                <stop offset="50%" stopColor="rgba(0, 0, 0, 0.1)"/>
                <stop offset="70%" stopColor="rgba(255, 255, 255, 0.1)"/>
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.3)"/>
              </linearGradient>

              {/* Glow Filter */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              {/* 3D Effect Filter */}
              <filter id="metal3d" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.5"/>
                <feDropShadow dx="-1" dy="-1" stdDeviation="1" floodColor="#D4AF37" floodOpacity="0.3"/>
              </filter>
            </defs>

            {/* Background Glow */}
            <ellipse 
              cx="100" 
              cy="40" 
              rx="90" 
              ry="35" 
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="1"
              opacity="0.3"
              filter="url(#glow)"
            />

            {/* Main Infinity Path */}
            <path
              d="M50 40 
                 C50 20, 20 20, 20 40 
                 C20 60, 50 60, 50 40 
                 C50 20, 80 20, 100 40 
                 C120 60, 150 60, 150 40 
                 C150 20, 120 20, 100 40 
                 C80 60, 50 60, 50 40"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              filter="url(#metal3d)"
              className="transition-all duration-300"
            />

            {/* Metallic Overlay */}
            <path
              d="M50 40 
                 C50 20, 20 20, 20 40 
                 C20 60, 50 60, 50 40 
                 C50 20, 80 20, 100 40 
                 C120 60, 150 60, 150 40 
                 C150 20, 120 20, 100 40 
                 C80 60, 50 60, 50 40"
              fill="none"
              stroke="url(#metallicHighlight)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.6"
            />

            {/* Diamond Reflections */}
            <circle cx="30" cy="35" r="2" fill="rgba(255, 255, 255, 0.9)">
              <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="140" cy="45" r="1.5" fill="rgba(255, 255, 255, 0.8)">
              <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="100" cy="38" r="2.5" fill="rgba(255, 255, 255, 0.7)">
              <animate attributeName="opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>

        {/* Particle Effect on Hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: "radial-gradient(circle, #F3D999 0%, #D4AF37 50%, transparent 70%)",
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animation: `particleExplode 1s ease-out ${i * 0.05}s forwards`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Signature */}
      {showSignature && (
        <div className={cn(
          "mt-1 text-center font-serif italic gold-gradient-text",
          textSize[size]
        )}>
          <span className="tracking-widest opacity-80">by Pawer</span>
        </div>
      )}

      <style jsx>{`
        @keyframes particleExplode {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(
              ${(Math.random() - 0.5) * 100}px,
              ${(Math.random() - 0.5) * 100}px
            ) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
