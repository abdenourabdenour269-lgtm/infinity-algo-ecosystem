"use client";

import { HeroSection } from "@/components/HeroSection";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { SectionHeading } from "@/components/SectionHeading";
import { 
  Download,
  ExternalLink,
  Star,
  CheckCircle,
  BarChart3,
  Zap,
  Code,
  TrendingUp,
  Shield,
  Clock,
  Users,
  ShoppingCart
} from "lucide-react";

const indicators = [
  {
    name: "Infinity Order Block Pro",
    category: "SMC Indicator",
    price: "$199",
    rating: 4.9,
    reviews: 234,
    description: "Advanced order block detection with multi-timeframe analysis and real-time alerts.",
    features: ["Auto Order Block Detection", "Multi-TF Confluence", "Push Notifications", "Entry Signals"],
    compatibility: "MT4/MT5",
    popular: true,
  },
  {
    name: "Smart Money Dashboard",
    category: "Multi-Pair Tool",
    price: "$299",
    rating: 4.8,
    reviews: 189,
    description: "Monitor market structure and liquidity across 28 pairs simultaneously.",
    features: ["28 Pair Scanner", "Structure Analysis", "Liquidity Mapping", "Dashboard Display"],
    compatibility: "MT4/MT5",
    popular: true,
  },
  {
    name: "Fibonacci Golden Tool",
    category: "Technical Tool",
    price: "$149",
    rating: 4.7,
    reviews: 156,
    description: "Advanced Fibonacci tool with golden ratio confluence detection.",
    features: ["Golden Ratio Detection", "Auto Projection", "TP/SL Levels", "Confluence Zones"],
    compatibility: "MT4/MT5",
    popular: false,
  },
  {
    name: "Market Structure Scanner",
    category: "Analysis Tool",
    price: "$179",
    rating: 4.8,
    reviews: 201,
    description: "Automated market structure analysis with BOS and CHoCH identification.",
    features: ["BOS Detection", "CHoCH Alerts", "Swing Points", "Structure Colors"],
    compatibility: "MT4/MT5",
    popular: false,
  },
];

const expertAdvisors = [
  {
    name: "Infinity AutoTrader Pro",
    category: "Full Automation",
    price: "$499",
    rating: 4.9,
    reviews: 145,
    description: "Fully automated trading system using proprietary SMC algorithms.",
    features: ["24/7 Auto Trading", "SMC Strategy", "Risk Management", "Multi-Pair Support"],
    compatibility: "MT4/MT5",
    featured: true,
  },
  {
    name: "Grid Master EA",
    category: "Grid Trading",
    price: "$349",
    rating: 4.6,
    reviews: 98,
    description: "Intelligent grid trading system with dynamic lot sizing.",
    features: ["Smart Grid", "Dynamic Lots", "Trend Filter", "Recovery Mode"],
    compatibility: "MT4/MT5",
    featured: false,
  },
  {
    name: "Scalper Elite",
    category: "Scalping EA",
    price: "$299",
    rating: 4.7,
    reviews: 167,
    description: "High-frequency scalping EA optimized for major pairs.",
    features: ["Fast Execution", "Spread Filter", "Time Filters", "News Filter"],
    compatibility: "MT4/MT5",
    featured: false,
  },
];

const bundles = [
  {
    name: "Starter Bundle",
    price: "$399",
    value: "$547",
    discount: "27% OFF",
    items: ["Infinity Order Block Pro", "Fibonacci Golden Tool", "Market Structure Scanner"],
    features: ["3 Premium Indicators", "Lifetime Updates", "Email Support", "Video Tutorials"],
  },
  {
    name: "Professional Bundle",
    price: "$799",
    value: "$1,296",
    discount: "38% OFF",
    items: ["All Indicators", "Infinity AutoTrader Pro", "Priority Support"],
    features: ["All Premium Tools", "1 EA Included", "Priority Support", "Private Discord"],
    featured: true,
  },
  {
    name: "Elite Bundle",
    price: "$1,499",
    value: "$2,500+",
    discount: "40% OFF",
    items: ["All Indicators", "All EAs", "Lifetime Academy Access"],
    features: ["Everything Included", "All Future Tools", "1-on-1 Mentoring", "VIP Status"],
  },
];

export default function ToolsPage() {
  return (
    <>
      <HeroSection
        subtitle="Premium Tools"
        title="Professional Trading Arsenal"
        description="Deploy battle-tested indicators, expert advisors, and automated systems designed for consistent profitability."
        size="md"
        showLogo={false}
        actions={{
          primary: { label: "Browse All Tools", href: "https://infinityalgoacademy.net", external: true },
        }}
      />

      {/* Indicators Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Indicators"
            title="Premium MT4/MT5 Indicators"
            description="Professional-grade indicators for precise market analysis and entry timing."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {indicators.map((indicator) => (
              <GlassCard key={indicator.name} className="group relative">
                {indicator.popular && (
                  <div className="absolute -top-3 right-6 px-3 py-1 bg-gold-400 text-onyx text-xs font-semibold rounded-full">
                    Popular
                  </div>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-serif text-gold-400">{indicator.name}</h3>
                    <p className="text-gold-300/50 text-sm">{indicator.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold gold-gradient-text">{indicator.price}</div>
                    <div className="flex items-center gap-1 text-gold-300/50 text-sm">
                      <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                      {indicator.rating} ({indicator.reviews})
                    </div>
                  </div>
                </div>

                <p className="text-gold-200/60 text-sm mb-4">{indicator.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {indicator.features.map((feature) => (
                    <span key={feature} className="flex items-center gap-1 text-xs text-gold-300/70 bg-navy-900/30 px-2 py-1 rounded">
                      <CheckCircle className="w-3 h-3 text-emerald-500" />
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gold-400/10">
                  <span className="text-gold-300/50 text-sm">{indicator.compatibility}</span>
                  <GoldButton href="https://infinityalgoacademy.net" external size="sm" icon={<Download className="w-4 h-4" />}>
                    Get Now
                  </GoldButton>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Advisors Section */}
      <section className="section-padding bg-gradient-to-b from-navy-900/20 to-onyx">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Expert Advisors"
            title="Automated Trading Systems"
            description="Let our battle-tested EAs trade for you 24/7 with precision and discipline."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {expertAdvisors.map((ea) => (
              <GlassCard key={ea.name} className={`relative ${ea.featured ? 'border-gold-400/40' : ''}`}>
                {ea.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-gold-400 to-gold-600 text-onyx text-xs font-bold rounded-full">
                    Featured
                  </div>
                )}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400/20 to-navy-900/50 flex items-center justify-center mb-4 border border-gold-400/20">
                  <Zap className="w-7 h-7 text-gold-400" />
                </div>

                <h3 className="text-lg font-serif text-gold-400 mb-1">{ea.name}</h3>
                <p className="text-gold-300/50 text-sm mb-2">{ea.category}</p>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold gold-gradient-text">{ea.price}</span>
                  <div className="flex items-center gap-1 text-gold-300/50 text-xs">
                    <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                    {ea.rating}
                  </div>
                </div>

                <p className="text-gold-200/60 text-sm mb-4">{ea.description}</p>

                <div className="space-y-2 mb-4">
                  {ea.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs text-gold-300/70">
                      <CheckCircle className="w-3 h-3 text-emerald-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                <GoldButton href="https://infinityalgoacademy.net" external size="sm" className="w-full" icon={<Download className="w-4 h-4" />}>
                  Purchase EA
                </GoldButton>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Save More"
            title="Premium Tool Bundles"
            description="Get the best value with our curated bundles of indicators and EAs."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {bundles.map((bundle) => (
              <GlassCard 
                key={bundle.name} 
                className={`relative text-center ${bundle.featured ? 'border-2 border-gold-400/40 scale-105' : ''}`}
              >
                {bundle.discount && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                    {bundle.discount}
                  </div>
                )}

                <h3 className="text-xl font-serif text-gold-400 mb-2">{bundle.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold gold-gradient-text">{bundle.price}</span>
                  <span className="text-gold-300/50 line-through ml-2">{bundle.value}</span>
                </div>

                <div className="border-t border-gold-400/20 pt-4 mb-4">
                  <p className="text-gold-300/60 text-sm mb-2">Includes:</p>
                  <div className="space-y-1">
                    {bundle.items.map((item) => (
                      <p key={item} className="text-gold-200/80 text-sm">{item}</p>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {bundle.features.map((feature) => (
                    <div key={feature} className="flex items-center justify-center gap-2 text-xs text-gold-300/70">
                      <CheckCircle className="w-3 h-3 text-emerald-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                <GoldButton
                  href="https://infinityalgoacademy.net"
                  external
                  size="md"
                  className="w-full"
                  variant={bundle.featured ? "primary" : "outline"}
                  icon={<ShoppingCart className="w-4 h-4" />}
                >
                  Get Bundle
                </GoldButton>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="section-padding bg-gradient-to-r from-navy-900/30 via-onyx to-navy-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <GlassCard glow>
            <Shield className="w-16 h-16 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-bold gold-gradient-text mb-4">
              30-Day Money-Back Guarantee
            </h2>
            <p className="text-gold-200/70 mb-6">
              We stand behind our tools with confidence. If you're not completely satisfied 
              within 30 days of purchase, we'll provide a full refund - no questions asked.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gold-300/60">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Lifetime Updates
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                24/7 Support
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Video Tutorials
              </span>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
