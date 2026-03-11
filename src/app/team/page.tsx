"use client";

import { HeroSection } from "@/components/HeroSection";
import { TeamMember } from "@/components/TeamMember";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { Users, Crown, Star } from "lucide-react";

const teamMembers = [
  {
    name: "King Arius",
    role: "Founder & Managing Director",
    bio: "Visionary leader with 15+ years in financial markets. Established Infinity Algo as the premier trading ecosystem, combining institutional expertise with cutting-edge AI technology.",
    expertise: ["Strategic Vision", "Market Analysis", "Portfolio Management", "Leadership"],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Jeremy",
    role: "Co-Founder & Chief Trading Strategist",
    bio: "Master trader with proven track record across forex, crypto, and indices. Developed proprietary trading strategies that have generated consistent returns for our community.",
    expertise: ["Technical Analysis", "Risk Management", "Strategy Development", "Market Research"],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Milano",
    role: "Head of AI Development & Signals",
    bio: "AI pioneer specializing in predictive market modeling. Leads the development of our advanced signal algorithms and automated trading systems.",
    expertise: ["Machine Learning", "Algorithm Development", "Data Science", "Signal Processing"],
    social: {
      linkedin: "#",
    },
  },
  {
    name: "Samiha",
    role: "Director of Education & Fundamental Analysis",
    bio: "Former institutional analyst with expertise in macroeconomic analysis. Creates comprehensive educational content and guides traders through complex market dynamics.",
    expertise: ["Fundamental Analysis", "Economics", "Education Design", "Content Strategy"],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Pawer",
    role: "Creative Director & Brand Designer",
    bio: "Award-winning designer responsible for the Infinity Algo visual identity. Transforms complex trading concepts into intuitive, elegant user experiences.",
    expertise: ["Brand Design", "UI/UX", "Visual Identity", "Creative Strategy"],
    social: {
      linkedin: "#",
    },
  },
  {
    name: "Mizo",
    role: "Technical Director & MT4/MT5 Platform Architect",
    bio: "Expert developer specializing in MetaTrader platforms. Architects our suite of custom indicators, expert advisors, and trading automation tools.",
    expertise: ["MQL4/MQL5", "Platform Architecture", "Trading Automation", "Technical Implementation"],
    social: {
      linkedin: "#",
    },
  },
];

export default function TeamPage() {
  return (
    <>
      <HeroSection
        subtitle="Our Leadership"
        title="Meet the Minds Behind the Mastery"
        description="A team of seasoned professionals united by a passion for trading excellence and innovation."
        size="md"
        showLogo={false}
        showParticles={true}
      />

      {/* Team Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <TeamMember {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-b from-navy-900/20 to-onyx">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Values"
            title="The Pillars of Excellence"
          />

          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-onyx" />
              </div>
              <h3 className="text-xl font-serif text-gold-400 mb-2">Excellence</h3>
              <p className="text-gold-200/60 text-sm">
                We pursue excellence in every aspect, from our trading tools to our educational content.
              </p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-onyx" />
              </div>
              <h3 className="text-xl font-serif text-gold-400 mb-2">Innovation</h3>
              <p className="text-gold-200/60 text-sm">
                Continuously pushing boundaries with AI, automation, and cutting-edge trading technology.
              </p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-onyx" />
              </div>
              <h3 className="text-xl font-serif text-gold-400 mb-2">Community</h3>
              <p className="text-gold-200/60 text-sm">
                Building a global family of traders who support and elevate each other.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <GlassCard glow>
            <h2 className="text-2xl md:text-3xl font-serif font-bold gold-gradient-text mb-4">
              Join Our Elite Team
            </h2>
            <p className="text-gold-200/70 mb-6">
              We're always looking for exceptional talent to join our mission. 
              If you share our passion for trading excellence, we want to hear from you.
            </p>
            <a
              href="/contact"
              className="gold-button px-8 py-3 rounded-full font-semibold inline-block"
            >
              Contact Us
            </a>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
