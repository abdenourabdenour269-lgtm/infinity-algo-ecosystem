"use client";

import { HeroSection } from "@/components/HeroSection";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { SectionHeading } from "@/components/SectionHeading";
import { 
  TrendingUp,
  TrendingDown,
  ExternalLink,
  Clock,
  DollarSign,
  Target,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Activity,
  Calendar,
  ArrowRight,
  Info
} from "lucide-react";

const liveDeals = [
  {
    pair: "XAU/USD",
    type: "BUY",
    status: "Open",
    entry: "2342.50",
    currentPrice: "2358.20",
    target: "2368.00",
    stopLoss: "2330.00",
    profit: "+$1,570",
    profitPercent: "+0.67%",
    lotSize: "1.0",
    analysis: {
      technical: "Bullish order block at 2330, break of structure confirmed on H4",
      fundamental: "DXY weakness, safe-haven demand increasing",
      elliott: "Wave 3 extension in progress, targeting 1.618 fib extension",
      smc: "Liquidity grab below previous low, now targeting buy-side liquidity"
    },
    math: {
      riskReward: "2.6:1",
      positionSize: "1.0 lot = $10/pip",
      riskAmount: "$1,250 (1.25%)",
      potentialProfit: "$2,550"
    },
    timestamp: "2 hours ago"
  },
  {
    pair: "EUR/USD",
    type: "SELL",
    status: "Open",
    entry: "1.0892",
    currentPrice: "1.0865",
    target: "1.0820",
    stopLoss: "1.0920",
    profit: "+$270",
    profitPercent: "+0.25%",
    lotSize: "1.0",
    analysis: {
      technical: "Bearish market structure, rejection from key resistance zone",
      fundamental: "ECB dovish stance, USD strength expected",
      elliott: "Wave C of ABC correction, targeting 1.0820",
      smc: "Premium zone entry, sell-side liquidity target below"
    },
    math: {
      riskReward: "2.4:1",
      positionSize: "1.0 lot = $10/pip",
      riskAmount: "$280 (1.4%)",
      potentialProfit: "$720"
    },
    timestamp: "45 min ago"
  },
];

const closedDeals = [
  {
    pair: "BTC/USD",
    type: "BUY",
    status: "Closed",
    result: "Win",
    entry: "67,450",
    exit: "71,200",
    profit: "+$3,750",
    profitPercent: "+5.56%",
    lotSize: "0.5 BTC",
    holdingTime: "3 days",
    analysis: {
      entry: "Bullish engulfing at key support, institutional accumulation detected",
      exit: "Take profit hit at resistance, volume climax",
      technical: "Inverse head & shoulders breakout with volume confirmation",
      math: "R:R achieved 3.8:1, Position sized at 2% risk"
    },
    closedAt: "Today"
  },
  {
    pair: "GBP/JPY",
    type: "BUY",
    status: "Closed",
    result: "Win",
    entry: "192.45",
    exit: "194.80",
    profit: "+$1,180",
    profitPercent: "+1.22%",
    lotSize: "0.5 lot",
    holdingTime: "18 hours",
    analysis: {
      entry: "Order block flip at 192.00, bullish CHoCH confirmed",
      exit: "TP1 hit, partial close; TP2 hit at liquidity zone",
      technical: "Break and retest of key resistance turned support",
      math: "R:R achieved 2.8:1, Compounding applied"
    },
    closedAt: "Yesterday"
  },
  {
    pair: "ETH/USD",
    type: "SELL",
    status: "Closed",
    result: "Win",
    entry: "3,420",
    exit: "3,180",
    profit: "+$2,400",
    profitPercent: "+7.02%",
    lotSize: "1.0 ETH",
    holdingTime: "2 days",
    analysis: {
      entry: "Bearish divergence on RSI, rejection from supply zone",
      exit: "Target hit at demand zone, partial profit taken",
      technical: "Elliott wave 3 down, Fibonacci extension target achieved",
      math: "R:R achieved 3.2:1, Kelly criterion position sizing"
    },
    closedAt: "2 days ago"
  },
  {
    pair: "USD/JPY",
    type: "BUY",
    status: "Closed",
    result: "Loss",
    entry: "154.80",
    exit: "153.90",
    profit: "-$890",
    profitPercent: "-0.58%",
    lotSize: "1.0 lot",
    holdingTime: "4 hours",
    analysis: {
      entry: "Break of structure, looked like continuation",
      exit: "Stop loss hit, false breakout identified",
      technical: "Market manipulation, liquidity sweep before reversal",
      math: "Risk managed at 1%, position sized correctly"
    },
    closedAt: "3 days ago"
  },
];

const mathFormulas = [
  {
    name: "Expectancy Formula",
    formula: "E = (Win% × Avg Win) − (Loss% × Avg Loss)",
    example: "E = (0.65 × $500) − (0.35 × $200) = $255 per trade",
    description: "Calculates average profit per trade over many trades"
  },
  {
    name: "Risk-Reward Ratio",
    formula: "R:R = (Target − Entry) / (Entry − Stop)",
    example: "R:R = (2368 − 2342) / (2342 − 2330) = 2.17:1",
    description: "Measures potential profit relative to risk taken"
  },
  {
    name: "Position Sizing",
    formula: "Lots = Risk Amount / (Stop Distance × Pip Value)",
    example: "Lots = $1,000 / (50 pips × $10) = 2.0 lots",
    description: "Determines appropriate trade size based on risk tolerance"
  },
  {
    name: "Kelly Criterion",
    formula: "f* = (bp − q) / b",
    example: "f* = (2 × 0.65 − 0.35) / 2 = 0.475 (47.5% of capital)",
    description: "Optimal position size for maximum long-term growth"
  },
];

export default function DealsPage() {
  return (
    <>
      <HeroSection
        subtitle="Live Trading Performance"
        title="Real Deals, Real Results"
        description="Transparent view of our live and closed trades with complete analysis including technical, fundamental, and mathematical breakdowns."
        size="md"
        showLogo={false}
        actions={{
          primary: { label: "Get Signal Access", href: "https://infinitysignals.net", external: true },
        }}
      />

      {/* Performance Stats */}
      <section className="section-padding bg-gradient-to-r from-navy-900/30 via-onyx to-navy-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "87%", label: "Win Rate", icon: Target, color: "text-emerald-400" },
              { value: "$24,580", label: "Monthly Profit", icon: DollarSign, color: "text-emerald-400" },
              { value: "2.8:1", label: "Avg R:R", icon: BarChart3, color: "text-gold-400" },
              { value: "156", label: "Trades This Month", icon: Activity, color: "text-gold-400" },
            ].map((stat) => (
              <GlassCard key={stat.label} className="text-center">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold gold-gradient-text mb-1">{stat.value}</div>
                <div className="text-gold-300/60 text-sm">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Live Deals */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Active Positions"
            title="Live Trading Deals"
            description="Current open positions with full analysis and risk metrics"
          />

          <div className="space-y-6">
            {liveDeals.map((deal, index) => (
              <GlassCard key={index} className="border border-gold-400/20">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gold-400/10">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      deal.type === "BUY" ? "bg-emerald-500/20" : "bg-red-500/20"
                    }`}>
                      {deal.type === "BUY" ? (
                        <TrendingUp className="w-6 h-6 text-emerald-500" />
                      ) : (
                        <TrendingDown className="w-6 h-6 text-red-500" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-serif text-gold-400">{deal.pair}</h3>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          deal.type === "BUY" ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
                        }`}>
                          {deal.type}
                        </span>
                        <span className="flex items-center gap-1 px-2 py-0.5 bg-gold-400/10 rounded text-xs text-gold-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                          {deal.status}
                        </span>
                      </div>
                      <p className="text-gold-300/50 text-sm">{deal.timestamp}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-400">{deal.profit}</div>
                    <div className="text-emerald-400/80 text-sm">{deal.profitPercent}</div>
                  </div>
                </div>

                {/* Trade Details */}
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-navy-900/30 rounded-lg p-3">
                    <span className="text-gold-300/50 text-xs">Entry Price</span>
                    <p className="text-gold-100 font-semibold">{deal.entry}</p>
                  </div>
                  <div className="bg-navy-900/30 rounded-lg p-3">
                    <span className="text-gold-300/50 text-xs">Current Price</span>
                    <p className="text-gold-100 font-semibold">{deal.currentPrice}</p>
                  </div>
                  <div className="bg-navy-900/30 rounded-lg p-3">
                    <span className="text-gold-300/50 text-xs">Take Profit</span>
                    <p className="text-emerald-400 font-semibold">{deal.target}</p>
                  </div>
                  <div className="bg-navy-900/30 rounded-lg p-3">
                    <span className="text-gold-300/50 text-xs">Stop Loss</span>
                    <p className="text-red-400 font-semibold">{deal.stopLoss}</p>
                  </div>
                </div>

                {/* Analysis Tabs */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-gold-400 font-medium mb-3 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      Full Analysis
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-navy-900/20 rounded-lg p-3">
                        <span className="text-gold-300/50 text-xs">Technical Analysis</span>
                        <p className="text-gold-200/80 text-sm">{deal.analysis.technical}</p>
                      </div>
                      <div className="bg-navy-900/20 rounded-lg p-3">
                        <span className="text-gold-300/50 text-xs">Fundamental Analysis</span>
                        <p className="text-gold-200/80 text-sm">{deal.analysis.fundamental}</p>
                      </div>
                      <div className="bg-navy-900/20 rounded-lg p-3">
                        <span className="text-gold-300/50 text-xs">Elliott Wave</span>
                        <p className="text-gold-200/80 text-sm">{deal.analysis.elliott}</p>
                      </div>
                      <div className="bg-navy-900/20 rounded-lg p-3">
                        <span className="text-gold-300/50 text-xs">SMC / ICT</span>
                        <p className="text-gold-200/80 text-sm">{deal.analysis.smc}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-gold-400 font-medium mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Mathematical Metrics
                    </h4>
                    <div className="space-y-2">
                      {Object.entries(deal.math).map(([key, value]) => (
                        <div key={key} className="flex justify-between bg-navy-900/20 rounded-lg p-3">
                          <span className="text-gold-300/50 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="text-gold-100 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Closed Deals */}
      <section className="section-padding bg-gradient-to-b from-navy-900/20 to-onyx">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Performance History"
            title="Closed Deals Analysis"
            description="Complete breakdown of recent trades with entry/exit reasoning"
          />

          <div className="grid gap-4">
            {closedDeals.map((deal, index) => (
              <GlassCard key={index} className={`border ${deal.result === "Win" ? "border-emerald-500/20" : "border-red-500/20"}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      deal.type === "BUY" ? "bg-emerald-500/20" : "bg-red-500/20"
                    }`}>
                      {deal.type === "BUY" ? (
                        <TrendingUp className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <TrendingDown className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-gold-100 font-semibold">{deal.pair}</span>
                        <span className={`px-2 py-0.5 rounded text-xs ${
                          deal.result === "Win" ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
                        }`}>
                          {deal.result}
                        </span>
                      </div>
                      <p className="text-gold-300/50 text-sm">{deal.holdingTime} • {deal.closedAt}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <span className="text-gold-300/50 text-xs">Entry</span>
                      <p className="text-gold-100 font-medium">{deal.entry}</p>
                    </div>
                    <div className="text-center">
                      <span className="text-gold-300/50 text-xs">Exit</span>
                      <p className="text-gold-100 font-medium">{deal.exit}</p>
                    </div>
                    <div className={`text-xl font-bold ${deal.profit.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}>
                      {deal.profit}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gold-400/10">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gold-300/50">Entry Reason:</span>
                      <p className="text-gold-200/80">{deal.analysis.entry}</p>
                    </div>
                    <div>
                      <span className="text-gold-300/50">Exit Reason:</span>
                      <p className="text-gold-200/80">{deal.analysis.exit}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Math Formulas Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Trading Mathematics"
            title="Mathematical Formulas Used"
            description="Understanding the math behind professional trading decisions"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {mathFormulas.map((item) => (
              <GlassCard key={item.name} className="border border-gold-400/20">
                <h3 className="text-lg font-serif text-gold-400 mb-3">{item.name}</h3>
                <div className="formula-display mb-4">
                  <code className="text-gold-100">{item.formula}</code>
                </div>
                <div className="bg-navy-900/30 rounded-lg p-3 mb-3">
                  <span className="text-gold-300/50 text-xs">Example:</span>
                  <p className="text-gold-200/80 text-sm font-mono">{item.example}</p>
                </div>
                <p className="text-gold-300/60 text-sm">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-navy-900/30 via-onyx to-navy-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <GlassCard glow className="border border-gold-400/30">
            <Activity className="w-16 h-16 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold gold-gradient-text mb-4">
              Get Access to Live Signals
            </h2>
            <p className="text-gold-200/70 mb-6">
              Join our trading community and receive real-time signals with complete analysis.
            </p>
            <GoldButton
              href="https://infinitysignals.net"
              external
              size="lg"
              icon={<ExternalLink className="w-5 h-5" />}
            >
              Start Trading Now
            </GoldButton>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
