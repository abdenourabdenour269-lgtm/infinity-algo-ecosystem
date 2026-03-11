"use client";

import { HeroSection } from "@/components/HeroSection";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { SectionHeading } from "@/components/SectionHeading";
import { 
  Bot,
  ExternalLink,
  Zap,
  Clock,
  Shield,
  TrendingUp,
  Settings,
  BarChart3,
  CheckCircle,
  Activity,
  PlayCircle,
  PauseCircle,
  RefreshCw
} from "lucide-react";

const bots = [
  {
    name: "Infinity AutoTrader Pro",
    type: "Full Automation",
    status: "Active",
    winRate: "87%",
    monthlyReturn: "+12.4%",
    drawdown: "8.2%",
    trades: 234,
    description: "Our flagship automated trading system using proprietary SMC algorithms for consistent profits across multiple pairs.",
    features: ["24/7 Auto Execution", "Multi-Pair Trading", "Dynamic Risk Management", "Smart Entry/Exit", "News Filter Integration"],
    pairs: ["XAU/USD", "EUR/USD", "GBP/USD", "USD/JPY"],
    price: "$499",
  },
  {
    name: "Grid Master Pro",
    type: "Grid Strategy",
    status: "Active",
    winRate: "92%",
    monthlyReturn: "+8.7%",
    drawdown: "5.4%",
    trades: 456,
    description: "Intelligent grid trading system with advanced recovery modes and dynamic lot sizing for stable growth.",
    features: ["Smart Grid Spacing", "Recovery Mode", "Trend Filter", "Dynamic Lots", "Max Drawdown Protection"],
    pairs: ["EUR/USD", "GBP/USD", "AUD/USD"],
    price: "$349",
  },
  {
    name: "Scalper Elite",
    type: "High-Frequency",
    status: "Active",
    winRate: "84%",
    monthlyReturn: "+15.2%",
    drawdown: "12.1%",
    trades: 892,
    description: "High-frequency scalping EA optimized for major pairs with spread protection and fast execution.",
    features: ["Millisecond Execution", "Spread Filter", "Session Optimization", "Quick TP/SL", "Trailing Stop"],
    pairs: ["EUR/USD", "GBP/USD", "USD/JPY", "XAU/USD"],
    price: "$299",
  },
  {
    name: "Crypto Alpha Bot",
    type: "Cryptocurrency",
    status: "Active",
    winRate: "79%",
    monthlyReturn: "+22.8%",
    drawdown: "15.3%",
    trades: 178,
    description: "Specialized bot for cryptocurrency markets with sentiment analysis and volatility-based strategies.",
    features: ["Multi-Exchange Support", "Sentiment Analysis", "Volatility Adaptation", "Arbitrage Detection", "Portfolio Rebalancing"],
    pairs: ["BTC/USDT", "ETH/USDT", "SOL/USDT", "BNB/USDT"],
    price: "$599",
  },
];

const features = [
  {
    icon: Clock,
    title: "24/7 Operation",
    description: "Our bots never sleep, capturing opportunities across all trading sessions automatically.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Built-in risk controls including max drawdown limits, daily loss limits, and position sizing.",
  },
  {
    icon: Settings,
    title: "Easy Configuration",
    description: "Simple setup process with pre-configured settings for different risk profiles.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Real-time monitoring dashboard with detailed analytics and trade history.",
  },
];

const integrationSteps = [
  { step: 1, title: "Download EA", desc: "Get your purchased EA from our secure portal" },
  { step: 2, title: "Install on MT4/MT5", desc: "Simple one-click installation process" },
  { step: 3, title: "Connect Account", desc: "Enter your license key and account details" },
  { step: 4, title: "Start Trading", desc: "Activate the bot and watch it work" },
];

export default function BotsPage() {
  return (
    <>
      <HeroSection
        subtitle="AI Trading Automation"
        title="Let AI Trade For You 24/7"
        description="Deploy our battle-tested expert advisors and automated trading systems. Execute trades with precision while you sleep."
        size="md"
        showLogo={false}
        actions={{
          primary: { label: "Get Trading Bots", href: "https://infinityalgoacademy.net", external: true },
        }}
      />

      {/* Live Bot Performance */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Live Performance"
            title="Active Trading Bots"
            description="Real-time performance data from our trading systems"
          />

          <div className="grid gap-6">
            {bots.map((bot) => (
              <GlassCard key={bot.name} className="border border-gold-400/20">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Bot Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-navy-900/50 flex items-center justify-center border border-gold-400/20">
                        <Bot className="w-6 h-6 text-gold-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif text-gold-400">{bot.name}</h3>
                        <p className="text-gold-300/50 text-sm">{bot.type}</p>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 bg-emerald-500/10 rounded-full">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-emerald-400 text-xs">{bot.status}</span>
                      </div>
                    </div>
                    <p className="text-gold-200/60 text-sm mb-4">{bot.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {bot.pairs.map((pair) => (
                        <span key={pair} className="px-2 py-1 text-xs bg-navy-900/50 rounded text-gold-300/70">
                          {pair}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-400">{bot.winRate}</div>
                      <div className="text-gold-300/50 text-xs">Win Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-400">{bot.monthlyReturn}</div>
                      <div className="text-gold-300/50 text-xs">Monthly</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gold-400">{bot.drawdown}</div>
                      <div className="text-gold-300/50 text-xs">Drawdown</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gold-gradient-text">{bot.price}</div>
                      <div className="text-gold-300/50 text-xs">Price</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col gap-2">
                    <GoldButton href="https://infinityalgoacademy.net" external size="sm" icon={<ExternalLink className="w-4 h-4" />}>
                      Get Bot
                    </GoldButton>
                    <button className="text-gold-400 text-sm hover:text-gold-300 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-4 pt-4 border-t border-gold-400/10">
                  <div className="flex flex-wrap gap-3">
                    {bot.features.map((feature) => (
                      <span key={feature} className="flex items-center gap-1 text-xs text-gold-300/70">
                        <CheckCircle className="w-3 h-3 text-emerald-500" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gradient-to-b from-navy-900/20 to-onyx">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Bot Features"
            title="Enterprise-Grade Automation"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
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

      {/* Integration Steps */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Quick Setup"
            title="Get Started in 4 Steps"
          />

          <div className="grid md:grid-cols-4 gap-6">
            {integrationSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-onyx font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-serif text-gold-400 mb-2">{item.title}</h3>
                <p className="text-gold-200/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-navy-900/30 via-onyx to-navy-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <GlassCard glow className="border border-gold-400/30">
            <Bot className="w-16 h-16 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold gold-gradient-text mb-4">
              Automate Your Trading Today
            </h2>
            <p className="text-gold-200/70 mb-6">
              Join thousands of traders who have automated their profits with our expert advisors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GoldButton
                href="https://infinityalgoacademy.net"
                external
                size="lg"
                icon={<ExternalLink className="w-5 h-5" />}
              >
                Browse All Bots
              </GoldButton>
              <GoldButton
                href="https://infinitysignals.net"
                external
                size="lg"
                variant="outline"
                icon={<ExternalLink className="w-5 h-5" />}
              >
                AI Signal Automation
              </GoldButton>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
