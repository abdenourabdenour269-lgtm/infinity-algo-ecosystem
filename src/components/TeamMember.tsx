"use client";

import { cn } from "@/lib/utils";
import { Logo3D } from "./Logo3D";
import { Linkedin, Twitter, Mail } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  expertise: string[];
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  className?: string;
}

export function TeamMember({
  name,
  role,
  bio,
  expertise,
  social,
  className = "",
}: TeamMemberProps) {
  // Generate initials for avatar
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className={cn("glass-card glass-card-hover rounded-3xl p-8 text-center", className)}>
      {/* Personal 3D Logo */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          {/* Avatar placeholder with initials */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 flex items-center justify-center text-onyx text-3xl font-serif font-bold shadow-2xl">
            {initials}
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gold-400/20 blur-xl animate-pulse" />
          {/* Rotating ring */}
          <div className="absolute inset-[-4px] rounded-full border-2 border-gold-400/30 animate-spin" style={{ animationDuration: "10s" }} />
        </div>
      </div>

      {/* Name & Role */}
      <h3 className="text-2xl font-serif text-gold-400 mb-1">{name}</h3>
      <p className="text-gold-300/80 text-sm font-medium mb-4">{role}</p>

      {/* Bio */}
      <p className="text-gold-300/60 text-sm leading-relaxed mb-6">{bio}</p>

      {/* Expertise Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {expertise.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-xs bg-navy-900/50 border border-gold-400/20 rounded-full text-gold-300/80"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Social Links */}
      {social && (
        <div className="flex justify-center gap-3">
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400 hover:bg-gold-400/20 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400 hover:bg-gold-400/20 transition-all"
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
          {social.email && (
            <a
              href={`mailto:${social.email}`}
              className="w-10 h-10 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400 hover:bg-gold-400/20 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
