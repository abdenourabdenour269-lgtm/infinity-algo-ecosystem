"use client";

import { HeroSection } from "@/components/HeroSection";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { SectionHeading } from "@/components/SectionHeading";
import { 
  Users,
  MessageCircle,
  Video,
  Calendar,
  Crown,
  Star,
  ExternalLink,
  CheckCircle,
  Clock,
  Zap,
  Globe,
  Lock
} from "lucide-react";

const communityFeatures = [
  {
    icon: MessageCircle,
    title: "Private Discord Server",
    description: "24/7 active community with dedicated channels for each market, strategy discussions, and real-time trade ideas.",
  },
  {
    icon: Video,
    title: "Live Trading Sessions",
    description: "Join our professional traders during London and New York sessions for live analysis and trade execution.",
  },
  {
    icon: Calendar,
    title: "Weekly Analysis Calls",
    description: "Every Sunday, we host comprehensive market outlook sessions covering forex, crypto, and indices.",
  },
  {
    icon: Users,
    title: "Mentorship Program",
    description: "Get paired with experienced traders for personalized guidance and accelerated learning.",
  },
];

const vipBenefits = [
  "Private VIP channel with direct access to analysts",
  "Priority signal delivery (5 minutes before public)",
  "Monthly 1-on-1 strategy sessions",
  "Exclusive advanced workshops",
  "Early access to new tools and features",
  "VIP-only trading competitions with prizes",
  "Personal trading plan development",
  "Direct message access to the team",
];

const rooms = [
  {
    name: "Forex Analysis Room",
    members: "2,400+",
    activity: "Very Active",
    description: "Real-time forex analysis, major pair discussions, and SMC setups.",
    schedule: "24/7 with peak hours during London/NY",
  },
  {
    name: "Crypto Trading Hub",
    members: "1,800+",
    activity: "Active",
    description: "Altcoin opportunities, DeFi discussions, and crypto-specific strategies.",
    schedule: "24/7 - Crypto never sleeps",
  },
  {
    name: "Beginner Support",
    members: "3,200+",
    activity: "Very Active",
    description: "New trader support, Q&A sessions, and foundational learning.",
    schedule: "Daily Q&A at 2 PM EST",
  },
  {
    name: "EA & Automation",
    members: "900+",
    activity: "Active",
    description: "Expert advisor discussions, optimization tips, and bot configuration help.",
    schedule: "Weekly setup reviews",
  },
];

const events = [
  { name: "Weekly Market Outlook", day: "Sunday", time: "6 PM EST", type: "Live Stream" },
  { name: "London Session Live", day: "Monday-Friday", time: "8 AM EST", type: "Live Trading" },
  { name: "SMC Deep Dive Workshop", day: "Wednesday", time: "3 PM EST", type: "Workshop" },
  { name: "Community Q&A", day: "Thursday", time: "5 PM EST", type: "Interactive" },
  { name: "New York Session Live", day: "Monday-Friday", time: "9 AM EST", type: "Live Trading" },
];

export default function CommunityPage() {
  return (
    <>
      <HeroSection
        subtitle="Join the Elite"
        title="VIP Trading Community"
        description="Connect with professional traders, access live sessions, and accelerate your learning in our exclusive community."
        size="md"
        showLogo={false}
        actions={{
          primary: { label: "Join Community", href: "https://infinityalgoacademy.net", external: true },
        }}
      />

      {/* Community Features */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="What We Offer"
            title="Community Benefits"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityFeatures.map((feature) => (
              <GlassCard key={feature.title} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400/20 to-navy-900/50 flex items-center justify-center mx-auto mb-4 border border-gold-400/20">
                  <feature.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-lg font-serif text-gold-400 mb-2">{feature.title}</h3>
                <p className="text-gold-200/60 text-sm">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Rooms */}
      <section className="section-padding bg-gradient-to-b from-navy-900/20 to-onyx">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Active Discussions"
            title="Trading Rooms"
            description="Specialized channels for every trading style and interest"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {rooms.map((room) => (
              <GlassCard key={room.name} className="border border-gold-400/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-serif text-gold-400">{room.name}</h3>
                  <span className="flex items-center gap-1 px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {room.activity}
                  </span>
                </div>
                <p className="text-gold-200/60 text-sm mb-4">{room.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gold-300/50">
                    <Users className="w-4 h-4 inline mr-1" />
                    {room.members} members
                  </span>
                  <span className="text-gold-300/50">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {room.schedule}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Access */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Exclusive Access"
            title="VIP Membership"
            description="Unlock premium community features and direct access to our team"
          />

          <GlassCard className="border-2 border-gold-400/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <Crown className="w-8 h-8 text-onyx" />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-gold-400">VIP Access</h3>
                <p className="text-gold-300/60">The ultimate community experience</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {vipBenefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gold-200/80">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gold-400/20">
              <div>
                <span className="text-3xl font-bold gold-gradient-text">$197/month</span>
                <span className="text-gold-300/50 ml-2">or included with Elite plan</span>
              </div>
              <GoldButton
                href="https://infinityalgoacademy.net"
                external
                size="lg"
                icon={<Crown className="w-5 h-5" />}
              >
                Get VIP Access
              </GoldButton>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Events Schedule */}
      <section className="section-padding bg-gradient-to-r from-navy-900/30 via-onyx to-navy-900/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Weekly Schedule"
            title="Live Events Calendar"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event, index) => (
              <GlassCard key={index} className="border border-gold-400/20">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gold-100 font-medium">{event.name}</h3>
                  <span className="px-2 py-1 text-xs bg-gold-400/10 text-gold-400 rounded">
                    {event.type}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gold-300/60">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {event.day}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <GlassCard glow className="border border-gold-400/30">
            <Globe className="w-16 h-16 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold gold-gradient-text mb-4">
              Join 15,000+ Active Traders
            </h2>
            <p className="text-gold-200/70 mb-6">
              Connect, learn, and grow with our global community of dedicated traders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GoldButton
                href="https://infinityalgoacademy.net"
                external
                size="lg"
                icon={<ExternalLink className="w-5 h-5" />}
              >
                Join Community
              </GoldButton>
              <GoldButton
                href="https://infinitysignals.net"
                external
                size="lg"
                variant="outline"
                icon={<ExternalLink className="w-5 h-5" />}
              >
                Signal Group Access
              </GoldButton>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
