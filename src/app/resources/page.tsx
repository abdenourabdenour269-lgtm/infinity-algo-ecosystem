"use client";

import { HeroSection } from "@/components/HeroSection";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { SectionHeading } from "@/components/SectionHeading";
import { 
  Download,
  FileText,
  BookOpen,
  Calculator,
  Video,
  ExternalLink,
  CheckCircle,
  Clock,
  Archive,
  TrendingUp
} from "lucide-react";

const resources = [
  {
    category: "Trading Guides",
    icon: BookOpen,
    items: [
      { name: "Complete Trading Beginner's Guide", type: "PDF", size: "2.4 MB", description: "Everything you need to know to start trading" },
      { name: "SMC & ICT Quick Reference", type: "PDF", size: "1.8 MB", description: "Key concepts and patterns cheat sheet" },
      { name: "Elliott Wave Pattern Guide", type: "PDF", size: "3.2 MB", description: "Complete wave pattern identification guide" },
      { name: "Risk Management Framework", type: "PDF", size: "1.2 MB", description: "Professional risk management templates" },
    ],
  },
  {
    category: "Mathematical Tools",
    icon: Calculator,
    items: [
      { name: "Position Size Calculator", type: "Excel", size: "245 KB", description: "Calculate lot sizes based on risk percentage" },
      { name: "Risk of Ruin Calculator", type: "Excel", size: "180 KB", description: "Determine probability of account depletion" },
      { name: "Compounding Projection Tool", type: "Excel", size: "210 KB", description: "Project account growth over time" },
      { name: "Trade Statistics Dashboard", type: "Excel", size: "320 KB", description: "Track and analyze your trading performance" },
    ],
  },
  {
    category: "Video Tutorials",
    icon: Video,
    items: [
      { name: "Platform Setup Guide", type: "Video", size: "45 min", description: "Complete MT4/MT5 setup walkthrough" },
      { name: "Order Block Identification", type: "Video", size: "32 min", description: "How to spot and trade order blocks" },
      { name: "Fibonacci Mastery", type: "Video", size: "28 min", description: "Advanced Fibonacci techniques" },
      { name: "Psychology Masterclass", type: "Video", size: "55 min", description: "Build the winning trader mindset" },
    ],
  },
  {
    category: "Trading Tools",
    icon: TrendingUp,
    items: [
      { name: "Trading Journal Template", type: "PDF", size: "890 KB", description: "Professional trade logging system" },
      { name: "Daily Checklist", type: "PDF", size: "120 KB", description: "Pre-market preparation checklist" },
      { name: "Session Timing Map", type: "PDF", size: "340 KB", description: "Global trading session overlap times" },
      { name: "News Impact Guide", type: "PDF", size: "560 KB", description: "How economic news affects markets" },
    ],
  },
];

const formulas = [
  { name: "Expectancy Formula", formula: "E = (Win% × Avg Win) − (Loss% × Avg Loss)", description: "Calculate expected profit per trade" },
  { name: "Kelly Criterion", formula: "f* = (bp − q) / b", description: "Optimal position size for growth" },
  { name: "Position Sizing", formula: "Lots = Risk ÷ (Stop Distance × Pip Value)", description: "Calculate proper lot size" },
  { name: "Risk of Ruin", formula: "RoR = [(1 − Edge) ÷ (1 + Edge)]^Capital", description: "Probability of losing account" },
  { name: "Compounding", formula: "FV = PV × (1 + r)^n", description: "Future value calculation" },
  { name: "Sharpe Ratio", formula: "Sharpe = (Rp − Rf) ÷ σp", description: "Risk-adjusted return measure" },
];

export default function ResourcesPage() {
  return (
    <>
      <HeroSection
        subtitle="Free Resources"
        title="Trading Resources Library"
        description="Download free guides, calculators, templates, and educational materials to accelerate your trading journey."
        size="md"
        showLogo={false}
        actions={{
          primary: { label: "Access All Resources", href: "https://infinityalgoacademy.net", external: true },
        }}
      />

      {/* Resources Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {resources.map((category) => (
            <div key={category.category} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-navy-900/50 flex items-center justify-center border border-gold-400/20">
                  <category.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h2 className="text-2xl font-serif text-gold-400">{category.category}</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item) => (
                  <GlassCard key={item.name} className="group hover:border-gold-400/40 transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-gold-100 font-medium">{item.name}</h3>
                          <span className="px-2 py-0.5 text-xs bg-gold-400/10 text-gold-400 rounded">
                            {item.type}
                          </span>
                        </div>
                        <p className="text-gold-200/60 text-sm mb-2">{item.description}</p>
                        <span className="text-gold-300/50 text-xs">{item.size}</span>
                      </div>
                      <button className="p-2 rounded-lg bg-gold-400/10 text-gold-400 hover:bg-gold-400/20 transition-all">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formula Reference */}
      <section className="section-padding bg-gradient-to-b from-navy-900/20 to-onyx">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Quick Reference"
            title="Essential Trading Formulas"
            description="Mathematical formulas every trader should know"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formulas.map((item) => (
              <GlassCard key={item.name} className="border border-gold-400/20">
                <div className="flex items-center gap-2 mb-3">
                  <Calculator className="w-5 h-5 text-gold-400" />
                  <h3 className="text-gold-400 font-medium">{item.name}</h3>
                </div>
                <div className="formula-display mb-3">
                  <code className="text-gold-100 text-sm">{item.formula}</code>
                </div>
                <p className="text-gold-300/60 text-sm">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Access */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <GlassCard glow className="border border-gold-400/30 text-center">
            <Archive className="w-16 h-16 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold gold-gradient-text mb-4">
              Access Premium Resources
            </h2>
            <p className="text-gold-200/70 mb-6 max-w-2xl mx-auto">
              Get full access to our complete resource library, including advanced courses, 
              premium tools, and exclusive content at Infinity Algo Academy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GoldButton
                href="https://infinityalgoacademy.net"
                external
                size="lg"
                icon={<ExternalLink className="w-5 h-5" />}
              >
                Join Academy
              </GoldButton>
              <GoldButton
                href="https://infinitysignals.net"
                external
                size="lg"
                variant="outline"
                icon={<ExternalLink className="w-5 h-5" />}
              >
                Get Signal Tools
              </GoldButton>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
