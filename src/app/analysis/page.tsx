"use client";

import { HeroSection } from "@/components/HeroSection";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { SectionHeading } from "@/components/SectionHeading";
import { 
  BarChart3,
  TrendingUp,
  Calculator,
  BookOpen,
  Lightbulb,
  ExternalLink,
  CheckCircle,
  Target,
  Activity,
  LineChart,
  PieChart,
  Layers,
  Brain,
  Zap,
  Eye
} from "lucide-react";

const analysisTypes = [
  {
    icon: BarChart3,
    title: "Technical Analysis",
    description: "Chart patterns, support/resistance, trend analysis, and price action strategies for precise entries.",
    topics: ["Chart Patterns", "Support & Resistance", "Trend Analysis", "Price Action", "Candlestick Patterns", "Multi-Timeframe"],
  },
  {
    icon: Activity,
    title: "Fundamental Analysis",
    description: "Economic indicators, central bank policies, and macro events that drive market movements.",
    topics: ["Economic Calendar", "Central Bank Policy", "GDP & Employment", "Inflation Data", "Interest Rates", "Geopolitical Events"],
  },
  {
    icon: Layers,
    title: "Elliott Wave Theory",
    description: "Advanced wave counting, Fibonacci relationships, and market cycle identification.",
    topics: ["Wave Patterns", "Fibonacci Ratios", "Wave Degrees", "Corrective Patterns", "Impulse Waves", "Wave Validation"],
  },
  {
    icon: Brain,
    title: "Smart Money Concepts",
    description: "Institutional trading strategies including order blocks, liquidity, and market structure.",
    topics: ["Order Blocks", "Liquidity Zones", "Market Structure", "Break of Structure", "CHoCH", "Fair Value Gaps"],
  },
];

const mathFormulas = [
  {
    name: "Expectancy",
    formula: "E = (Win% × Avg Win) − (Loss% × Avg Loss)",
    application: "Calculate expected profit per trade over time",
    example: "E = (0.65 × $500) − (0.35 × $200) = $255",
  },
  {
    name: "Kelly Criterion",
    formula: "f* = (bp − q) / b",
    application: "Determine optimal position size for maximum growth",
    example: "f* = (2 × 0.65 − 0.35) / 2 = 0.475",
  },
  {
    name: "Position Sizing",
    formula: "Position = Risk ÷ (Entry − Stop) × Pip Value",
    application: "Calculate correct lot size based on risk percentage",
    example: "Position = $100 ÷ 50 pips × $10 = 0.2 lots",
  },
  {
    name: "Risk of Ruin",
    formula: "RoR = [(1 − Edge) ÷ (1 + Edge)]^Capital Units",
    application: "Calculate probability of losing entire account",
    example: "RoR with 5% edge and 100 units ≈ 0.002%",
  },
  {
    name: "Compounding",
    formula: "FV = PV × (1 + r)^n",
    application: "Project account growth with consistent returns",
    example: "$10,000 × (1.05)^12 = $17,958",
  },
  {
    name: "Sharpe Ratio",
    formula: "Sharpe = (Rp − Rf) ÷ σp",
    application: "Measure risk-adjusted return performance",
    example: "(15% − 2%) ÷ 10% = 1.3",
  },
];

const tradingSecrets = [
  {
    title: "Institutional Order Flow",
    description: "Understand how large players move markets and learn to follow their footprint through volume analysis and order block identification.",
    keyPoints: ["Volume Profile Analysis", "Order Block Detection", "Liquidity Sweeps", "Stop Hunts Recognition"],
  },
  {
    title: "ICT Concepts Revealed",
    description: "Master the ICT methodology including optimal trade entries, fair value gaps, and the concept of dealing ranges.",
    keyPoints: ["Optimal Trade Entry (OTE)", "Fair Value Gaps (FVG)", "Dealing Range Concept", "Kill Zone Timing"],
  },
  {
    title: "Elliott Wave Hidden Rules",
    description: "Go beyond basic wave counting and learn the nuanced rules that professional wave analysts use for high-probability predictions.",
    keyPoints: ["Wave Personality Traits", "Alternation Principle", "Channeling Techniques", "Wave Equality Rules"],
  },
  {
    title: "Fibonacci Secrets",
    description: "Unlock the power of Fibonacci ratios beyond basic retracements, including extensions, clusters, and time projections.",
    keyPoints: ["Extension Targets", "Fibonacci Clusters", "Time Projections", "Confluence Zones"],
  },
  {
    title: "Volume Profile Mastery",
    description: "Learn to read volume profile like institutional traders, identifying key price levels and value areas.",
    keyPoints: ["Point of Control (POC)", "Value Area High/Low", "Volume Nodes", "Profile Shapes"],
  },
  {
    title: "Psychology & Discipline",
    description: "Master the mental game of trading with proven psychological frameworks and discipline strategies.",
    keyPoints: ["Emotional Control", "Trade Journaling", "Routine Building", "Loss Acceptance"],
  },
];

const currentAnalysis = [
  {
    pair: "XAU/USD",
    bias: "Bullish",
    timeframe: "H4",
    keyLevels: { support: "2,330", resistance: "2,385" },
    analysis: "Gold showing strong bullish momentum after liquidity grab below 2,330. Looking for continuation toward 2,400.",
    confidence: 85,
  },
  {
    pair: "EUR/USD",
    bias: "Bearish",
    timeframe: "H1",
    keyLevels: { support: "1.0800", resistance: "1.0920" },
    analysis: "Euro under pressure from divergent central bank policies. Targeting 1.0800 zone.",
    confidence: 78,
  },
  {
    pair: "BTC/USD",
    bias: "Bullish",
    timeframe: "Daily",
    keyLevels: { support: "65,000", resistance: "73,000" },
    analysis: "Bitcoin consolidating before next leg up. Accumulation phase near completion.",
    confidence: 72,
  },
];

export default function AnalysisPage() {
  return (
    <>
      <HeroSection
        subtitle="Market Intelligence"
        title="Advanced Market Analysis Hub"
        description="Master the art of market analysis with our comprehensive breakdown of technical, fundamental, and mathematical concepts."
        size="md"
        showLogo={false}
        actions={{
          primary: { label: "Get Live Analysis", href: "https://infinitysignals.net", external: true },
        }}
      />

      {/* Analysis Types */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Analysis Methods"
            title="Comprehensive Market Approach"
            description="Our multi-dimensional analysis framework for high-probability trading"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {analysisTypes.map((type) => (
              <GlassCard key={type.title} className="group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400/20 to-navy-900/50 flex items-center justify-center border border-gold-400/20 flex-shrink-0">
                    <type.icon className="w-7 h-7 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-gold-400 mb-2">{type.title}</h3>
                    <p className="text-gold-200/60 text-sm mb-4">{type.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {type.topics.map((topic) => (
                        <span key={topic} className="px-2 py-1 text-xs bg-navy-900/50 rounded text-gold-300/70">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Current Market Analysis */}
      <section className="section-padding bg-gradient-to-b from-navy-900/20 to-onyx">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Live Analysis"
            title="Current Market Views"
            description="Real-time analysis across major instruments"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {currentAnalysis.map((item) => (
              <GlassCard key={item.pair} className="border border-gold-400/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-serif text-gold-400">{item.pair}</h3>
                  <span className={`px-2 py-1 rounded text-xs ${
                    item.bias === "Bullish" ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
                  }`}>
                    {item.bias}
                  </span>
                </div>

                <div className="flex justify-between mb-4 text-sm">
                  <div>
                    <span className="text-gold-300/50">Support</span>
                    <p className="text-gold-100">{item.keyLevels.support}</p>
                  </div>
                  <div className="text-center">
                    <span className="text-gold-300/50">TF</span>
                    <p className="text-gold-100">{item.timeframe}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-gold-300/50">Resistance</span>
                    <p className="text-gold-100">{item.keyLevels.resistance}</p>
                  </div>
                </div>

                <p className="text-gold-200/70 text-sm mb-4">{item.analysis}</p>

                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-navy-900 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-gold-400 to-emerald-500 rounded-full"
                      style={{ width: `${item.confidence}%` }}
                    />
                  </div>
                  <span className="text-gold-300/60 text-sm">{item.confidence}%</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Mathematical Formulas */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Trading Mathematics"
            title="Essential Mathematical Formulas"
            description="Professional traders rely on these calculations for every decision"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathFormulas.map((item) => (
              <GlassCard key={item.name} className="border border-gold-400/20">
                <div className="flex items-center gap-2 mb-3">
                  <Calculator className="w-5 h-5 text-gold-400" />
                  <h3 className="text-lg font-serif text-gold-400">{item.name}</h3>
                </div>
                
                <div className="formula-display mb-4">
                  <code className="text-gold-100 text-sm">{item.formula}</code>
                </div>

                <p className="text-gold-300/60 text-sm mb-3">{item.application}</p>
                
                <div className="bg-navy-900/30 rounded p-2">
                  <span className="text-gold-300/50 text-xs">Example:</span>
                  <p className="text-gold-200/80 text-sm font-mono">{item.example}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Secrets */}
      <section className="section-padding bg-gradient-to-b from-navy-900/20 to-onyx">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Professional Secrets"
            title="Trading Secrets Revealed"
            description="The hidden knowledge that separates professionals from amateurs"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradingSecrets.map((secret) => (
              <GlassCard key={secret.title} className="group hover:border-gold-400/40 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="w-5 h-5 text-gold-400" />
                  <h3 className="text-lg font-serif text-gold-400">{secret.title}</h3>
                </div>
                <p className="text-gold-200/70 text-sm mb-4">{secret.description}</p>
                <div className="space-y-2">
                  {secret.keyPoints.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-sm text-gold-300/70">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {point}
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <GlassCard glow className="border border-gold-400/30 text-center">
            <Lightbulb className="w-16 h-16 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold gold-gradient-text mb-4">
              Master Professional Analysis
            </h2>
            <p className="text-gold-200/70 mb-6 max-w-2xl mx-auto">
              Get access to our complete analysis courses, live market breakdowns, 
              and professional trading strategies at Infinity Algo Academy.
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
                Get Live Signals
              </GoldButton>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
