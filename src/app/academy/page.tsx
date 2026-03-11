"use client";

import { HeroSection } from "@/components/HeroSection";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { SectionHeading } from "@/components/SectionHeading";
import { 
  BookOpen,
  Video,
  Download,
  Award,
  Clock,
  Users,
  Star,
  ExternalLink,
  CheckCircle,
  PlayCircle,
  FileText,
  Code,
  BarChart3,
  TrendingUp,
  Zap
} from "lucide-react";

const courses = [
  {
    title: "SMC Masterclass",
    category: "Advanced",
    duration: "24 Hours",
    lessons: 48,
    description: "Master Smart Money Concepts and institutional trading strategies. Learn to identify order blocks, liquidity zones, and market structure.",
    features: ["Order Block Identification", "Liquidity Analysis", "Market Structure", "Entry & Exit Strategies"],
    level: "Advanced",
  },
  {
    title: "ICT Concepts Complete",
    category: "Advanced",
    duration: "32 Hours",
    lessons: 64,
    description: "Complete ICT methodology including optimal trade entry, fair value gaps, and the dealing range concept.",
    features: ["Optimal Trade Entry", "Fair Value Gaps", "Dealing Range", "Kill Zones"],
    level: "Advanced",
  },
  {
    title: "Elliott Wave Mastery",
    category: "Intermediate",
    duration: "18 Hours",
    lessons: 36,
    description: "Deep dive into Elliott Wave Theory with practical application strategies for all market conditions.",
    features: ["Wave Patterns", "Fibonacci Integration", "Wave Degrees", "Complex Corrections"],
    level: "Intermediate",
  },
  {
    title: "Forex Fundamentals",
    category: "Beginner",
    duration: "12 Hours",
    lessons: 24,
    description: "Complete foundation course for forex trading. Perfect for those starting their trading journey.",
    features: ["Market Basics", "Chart Reading", "Order Types", "Risk Management"],
    level: "Beginner",
  },
  {
    title: "Risk Management Pro",
    category: "Essential",
    duration: "8 Hours",
    lessons: 16,
    description: "Professional risk management strategies used by institutional traders to protect and grow capital.",
    features: ["Position Sizing", "Drawdown Control", "Portfolio Balance", "Psychology"],
    level: "All Levels",
  },
  {
    title: "Crypto Trading Essentials",
    category: "Specialized",
    duration: "16 Hours",
    lessons: 32,
    description: "Navigate the cryptocurrency markets with confidence. From blockchain basics to advanced DeFi trading.",
    features: ["Market Analysis", "DeFi Protocols", "Risk Assessment", "Portfolio Management"],
    level: "Intermediate",
  },
];

const mt4Tools = [
  {
    name: "Infinity Order Block Detector",
    type: "Indicator",
    description: "Automatically identifies and highlights institutional order blocks with precision accuracy.",
    features: ["Auto-detection", "Multi-timeframe", "Alert System", "Customizable"],
  },
  {
    name: "Smart Money Dashboard",
    type: "Indicator Suite",
    description: "Comprehensive dashboard showing market structure, liquidity, and key levels across multiple pairs.",
    features: ["Multi-pair Analysis", "Structure Mapping", "Liquidity Levels", "Real-time Updates"],
  },
  {
    name: "Infinity Auto Trader Pro",
    type: "Expert Advisor",
    description: "Fully automated trading system based on our proprietary SMC algorithms.",
    features: ["24/7 Trading", "Risk Management", "Multiple Strategies", "Backtested"],
  },
  {
    name: "Fibonacci Golden Ratio Tool",
    type: "Indicator",
    description: "Advanced Fibonacci tool with golden ratio confluence detection and auto-projection.",
    features: ["Golden Ratios", "Confluence Zones", "Entry Signals", "TP/SL Suggestions"],
  },
];

export default function AcademyPage() {
  return (
    <>
      <HeroSection
        subtitle="Infinity Algo Academy"
        title="Master the Markets with Elite Education"
        description="Access professional trading courses, MT4/MT5 indicators, Expert Advisors, and comprehensive trading tools designed for serious traders."
        size="md"
        showLogo={false}
        actions={{
          primary: { label: "Visit Academy Portal", href: "https://infinityalgoacademy.net", external: true },
        }}
      />

      {/* Main Platform CTA */}
      <section className="section-padding bg-gradient-to-r from-navy-900/30 via-onyx to-navy-900/30">
        <div className="max-w-4xl mx-auto">
          <GlassCard glow className="border border-gold-400/30 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-onyx" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold gold-gradient-text mb-4">
              Access the Full Academy
            </h2>
            <p className="text-gold-200/70 mb-6 max-w-2xl mx-auto">
              Visit our dedicated Academy platform for the complete learning experience, 
              including all courses, downloadable tools, and community access.
            </p>
            <GoldButton
              href="https://infinityalgoacademy.net"
              external
              size="lg"
              icon={<ExternalLink className="w-5 h-5" />}
            >
              Visit Infinity Algo Academy
            </GoldButton>
          </GlassCard>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Professional Courses"
            title="Comprehensive Trading Education"
            description="From beginner fundamentals to advanced institutional strategies, our courses cover every aspect of professional trading."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <GlassCard key={course.title} className="group">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    course.level === "Beginner" ? "bg-emerald-500/20 text-emerald-400" :
                    course.level === "Intermediate" ? "bg-gold-400/20 text-gold-400" :
                    course.level === "Advanced" ? "bg-navy-900/50 text-navy-200 border border-navy-400/30" :
                    "bg-gold-400/10 text-gold-400"
                  }`}>
                    {course.level}
                  </span>
                  <span className="text-gold-300/50 text-sm">{course.duration}</span>
                </div>

                <h3 className="text-xl font-serif text-gold-400 mb-2">{course.title}</h3>
                <p className="text-gold-200/60 text-sm mb-4">{course.description}</p>

                <div className="flex items-center gap-4 text-sm text-gold-300/50 mb-4">
                  <span className="flex items-center gap-1">
                    <Video className="w-4 h-4" />
                    {course.lessons} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.features.slice(0, 2).map((feature) => (
                    <span key={feature} className="px-2 py-1 text-xs bg-navy-900/50 rounded text-gold-300/70">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-gold-400 text-sm font-medium">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* MT4/MT5 Tools Section */}
      <section className="section-padding bg-gradient-to-b from-navy-900/20 to-onyx">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Trading Tools"
            title="MT4/MT5 Indicators & Expert Advisors"
            description="Professional-grade tools designed to give you an edge in the markets."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {mt4Tools.map((tool) => (
              <GlassCard key={tool.name} className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-navy-900/50 flex items-center justify-center border border-gold-400/20 flex-shrink-0">
                    {tool.type === "Indicator" ? (
                      <BarChart3 className="w-6 h-6 text-gold-400" />
                    ) : tool.type === "Expert Advisor" ? (
                      <Zap className="w-6 h-6 text-gold-400" />
                    ) : (
                      <Code className="w-6 h-6 text-gold-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-serif text-gold-400">{tool.name}</h3>
                      <span className="px-2 py-0.5 text-xs bg-gold-400/10 rounded text-gold-300/70">
                        {tool.type}
                      </span>
                    </div>
                    <p className="text-gold-200/60 text-sm mb-3">{tool.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tool.features.map((feature) => (
                        <span key={feature} className="flex items-center gap-1 text-xs text-gold-300/60">
                          <CheckCircle className="w-3 h-3 text-emerald-500" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-8">
            <GoldButton
              href="https://infinityalgoacademy.net"
              external
              size="lg"
              icon={<Download className="w-5 h-5" />}
            >
              Browse All Tools
            </GoldButton>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Your Journey"
            title="The Path to Trading Mastery"
          />

          <div className="relative">
            {[
              { step: 1, title: "Foundation", desc: "Learn market basics, chart reading, and trading terminology" },
              { step: 2, title: "Strategy", desc: "Master technical analysis and develop your trading approach" },
              { step: 3, title: "Advanced", desc: "Learn institutional concepts: SMC, ICT, Elliott Wave" },
              { step: 4, title: "Automation", desc: "Deploy EAs and automated systems for consistent results" },
            ].map((item, index) => (
              <div key={item.step} className="flex items-center gap-6 mb-8 last:mb-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-onyx font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <GlassCard className="flex-1">
                  <h3 className="text-xl font-serif text-gold-400 mb-1">{item.title}</h3>
                  <p className="text-gold-200/60">{item.desc}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
