"use client";

import { HeroSection } from "@/components/HeroSection";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { SectionHeading } from "@/components/SectionHeading";
import { Logo3D } from "@/components/Logo3D";
import { 
  TrendingUp, 
  BarChart3, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  BookOpen,
  Bot,
  LineChart,
  Target,
  Award,
  ExternalLink,
  ChevronRight,
  Activity,
  DollarSign,
  Clock
} from "lucide-react";
import { useState, useEffect } from "react";

// Rotating signals for live display
const liveSignals = [
  { pair: "XAU/USD", type: "BUY", entry: "2342.50", target: "2368.00", stop: "2330.00", profit: "+$2,550" },
  { pair: "EUR/USD", type: "SELL", entry: "1.0892", target: "1.0820", stop: "1.0920", profit: "+$720" },
  { pair: "BTC/USD", type: "BUY", entry: "67,450", target: "71,200", stop: "65,800", profit: "+$3,750" },
  { pair: "GBP/JPY", type: "BUY", entry: "192.45", target: "194.80", stop: "191.20", profit: "+$1,180" },
  { pair: "ETH/USD", type: "SELL", entry: "3,420", target: "3,180", stop: "3,520", profit: "+$2,400" },
];

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms analyze markets 24/7 for high-probability setups",
  },
  {
    icon: Bot,
    title: "Automated Trading",
    description: "Deploy expert advisors and bots that execute trades with precision timing",
  },
  {
    icon: BookOpen,
    title: "Elite Education",
    description: "Master institutional trading concepts, SMC, ICT, and proprietary strategies",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Protect your capital with proven position sizing and drawdown management",
  },
  {
    icon: LineChart,
    title: "Real-Time Signals",
    description: "Receive instant alerts on premium setups across forex, crypto, and indices",
  },
  {
    icon: Users,
    title: "VIP Community",
    description: "Join an exclusive network of professional traders and analysts",
  },
];

const externalPlatforms = [
  {
    name: "Infinity Algo Academy",
    href: "https://infinityalgoacademy.net",
    description: "MT4/MT5 Indicators, Expert Advisors, Courses & Trading Bots",
    features: ["Professional Courses", "Custom Indicators", "Expert Advisors", "Trading Tools"],
    icon: BookOpen,
  },
  {
    name: "Infinity Signals",
    href: "https://infinitysignals.net",
    description: "AI Signals, Crypto Scanner & Automated Trading Solutions",
    features: ["AI Signal Scanner", "Crypto Analysis", "Auto Trading", "Live Alerts"],
    icon: Activity,
  },
];

export default function HomePage() {
  const [currentSignal, setCurrentSignal] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSignal((prev) => (prev + 1) % liveSignals.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        subtitle="Welcome to the Elite"
        title="Where Mathematical Precision Meets Trading Mastery"
        description="Join the world's most exclusive trading ecosystem. AI-powered signals, institutional-grade education, and a community of elite traders await you."
        size="xl"
        actions={{
          primary: { label: "Start Trading Now", href: "https://infinitysignals.net", external: true },
          secondary: { label: "Explore Academy", href: "https://infinityalgoacademy.net", external: true },
        }}
        stats={[
          { label: "Active Traders", value: "15,000+", icon: <Users className="w-5 h-5" /> },
          { label: "Success Rate", value: "87%", icon: <Target className="w-5 h-5" /> },
          { label: "Monthly Pips", value: "2,500+", icon: <TrendingUp className="w-5 h-5" /> },
          { label: "Courses", value: "50+", icon: <BookOpen className="w-5 h-5" /> },
        ]}
      >
        {/* Live Signal Display */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-6 border border-gold-400/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-gold-400 text-sm font-medium">LIVE SIGNAL</span>
              </div>
              <div className="flex items-center gap-2 text-gold-300/60 text-xs">
                <Clock className="w-3 h-3" />
                <span>Updates every 4s</span>
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-4 text-center transition-all duration-500">
              <div>
                <span className="text-gold-300/50 text-xs">Pair</span>
                <p className="text-gold-100 font-semibold">{liveSignals[currentSignal].pair}</p>
              </div>
              <div>
                <span className="text-gold-300/50 text-xs">Type</span>
                <p className={`font-semibold ${liveSignals[currentSignal].type === 'BUY' ? 'text-emerald-500' : 'text-red-500'}`}>
                  {liveSignals[currentSignal].type}
                </p>
              </div>
              <div>
                <span className="text-gold-300/50 text-xs">Entry</span>
                <p className="text-gold-100 font-semibold">{liveSignals[currentSignal].entry}</p>
              </div>
              <div>
                <span className="text-gold-300/50 text-xs">Target</span>
                <p className="text-emerald-500 font-semibold">{liveSignals[currentSignal].target}</p>
              </div>
              <div>
                <span className="text-gold-300/50 text-xs">Profit</span>
                <p className="text-emerald-400 font-bold">{liveSignals[currentSignal].profit}</p>
              </div>
            </div>

            {/* Signal dots */}
            <div className="flex justify-center gap-2 mt-4">
              {liveSignals.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSignal ? "bg-gold-400 w-4" : "bg-gold-400/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </HeroSection>

      {/* Platform Links Section */}
      <section className="section-padding bg-gradient-to-b from-onyx to-navy-900/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Platforms"
            title="Two Powerful Ecosystems, One Mission"
            description="Access our comprehensive suite of trading tools and education through our dedicated platforms."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {externalPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-3xl p-8 group cursor-pointer block"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                    <platform.icon className="w-8 h-8 text-onyx" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-gold-400/50 group-hover:text-gold-400 transition-colors" />
                </div>

                <h3 className="text-2xl font-serif text-gold-400 mb-3">{platform.name}</h3>
                <p className="text-gold-200/60 mb-6">{platform.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {platform.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs bg-navy-900/50 border border-gold-400/20 rounded-full text-gold-300/80"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-gold-400 font-medium">
                  <span>Visit Platform</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Why Choose Us"
            title="The Infinity Algo Advantage"
            description="Experience the difference of institutional-grade trading tools and education."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <GlassCard key={feature.title} className="group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400/20 to-navy-900/50 flex items-center justify-center mb-4 border border-gold-400/20 group-hover:border-gold-400/40 transition-colors">
                  <feature.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-xl font-serif text-gold-400 mb-2">{feature.title}</h3>
                <p className="text-gold-200/60 text-sm leading-relaxed">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-navy-900/30 via-onyx to-navy-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "$50M+", label: "Trading Volume", icon: DollarSign },
              { value: "15+", label: "Years Experience", icon: Award },
              { value: "98%", label: "Client Satisfaction", icon: Target },
              { value: "24/7", label: "Support Available", icon: Clock },
            ].map((stat) => (
              <div key={stat.label} className="relative">
                <stat.icon className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-bold gold-gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gold-300/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard glow className="border border-gold-400/30">
            <Logo3D size="lg" className="mb-6 justify-center" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold gold-gradient-text mb-4">
              Ready to Join the Elite?
            </h2>
            <p className="text-gold-200/70 text-lg mb-8 max-w-2xl mx-auto">
              Take the first step towards trading mastery. Access our premium tools, education, 
              and community today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GoldButton
                href="https://infinitysignals.net"
                external
                size="lg"
                icon={<ExternalLink className="w-5 h-5" />}
              >
                Get AI Signals
              </GoldButton>
              <GoldButton
                href="https://infinityalgoacademy.net"
                external
                size="lg"
                variant="outline"
                icon={<ExternalLink className="w-5 h-5" />}
              >
                Join Academy
              </GoldButton>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
