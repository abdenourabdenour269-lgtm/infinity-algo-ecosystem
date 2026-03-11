"use client";

import { HeroSection } from "@/components/HeroSection";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { SectionHeading } from "@/components/SectionHeading";
import { 
  Star,
  TrendingUp,
  Quote,
  ExternalLink,
  CheckCircle,
  Calendar,
  DollarSign,
  Target,
  Users,
  Award
} from "lucide-react";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Full-Time Trader",
    location: "Singapore",
    avatar: "MC",
    rating: 5,
    content: "The SMC course completely transformed my trading. I went from break-even to consistent profitability within 3 months. The order block identification alone was worth 10x the investment.",
    results: {
      before: "Break-even",
      after: "+18% Monthly",
      timeframe: "3 months"
    },
    verified: true,
  },
  {
    name: "Sarah Williams",
    role: "Part-Time Trader",
    location: "London, UK",
    avatar: "SW",
    rating: 5,
    content: "As a working professional, the AI signals have been a game-changer. I receive alerts on my phone and execute trades during my lunch break. Made $12,000 in my first quarter.",
    results: {
      before: "$0/month",
      after: "$4,000/month",
      timeframe: "3 months"
    },
    verified: true,
  },
  {
    name: "Ahmed Hassan",
    role: "Forex Trader",
    location: "Dubai, UAE",
    avatar: "AH",
    rating: 5,
    content: "The Infinity AutoTrader EA runs 24/7 on my VPS. It's like having a professional trader working for me around the clock. The risk management is excellent.",
    results: {
      before: "Manual Trading",
      after: "+12% Monthly Automated",
      timeframe: "6 months"
    },
    verified: true,
  },
  {
    name: "Jennifer Taylor",
    role: "Crypto Investor",
    location: "California, USA",
    avatar: "JT",
    rating: 5,
    content: "The crypto scanner identified SOL at $23 before its massive run. I took profits at $180. One signal paid for a lifetime membership. The research team is top-notch.",
    results: {
      before: "HODL Strategy",
      after: "+650% on SOL Trade",
      timeframe: "Single trade"
    },
    verified: true,
  },
  {
    name: "Klaus Mueller",
    role: "Professional Trader",
    location: "Berlin, Germany",
    avatar: "KM",
    rating: 5,
    content: "After 10 years of trading, I thought I knew it all. The ICT concepts taught here revealed gaps in my understanding that were costing me money. Now I trade with institutional precision.",
    results: {
      before: "55% Win Rate",
      after: "78% Win Rate",
      timeframe: "4 months"
    },
    verified: true,
  },
  {
    name: "Priya Sharma",
    role: "Beginner Trader",
    location: "Mumbai, India",
    avatar: "PS",
    rating: 5,
    content: "Started with zero trading knowledge. The foundation course and mentorship program gave me confidence. Made my first profitable month within 8 weeks of starting.",
    results: {
      before: "Complete Beginner",
      after: "First Profitable Month",
      timeframe: "8 weeks"
    },
    verified: true,
  },
];

const successStories = [
  {
    title: "From $5,000 to $47,000",
    trader: "David M.",
    duration: "8 months",
    strategy: "SMC + Elliott Wave",
    description: "David started with our Professional plan and applied the SMC methodology combined with Elliott Wave analysis. His disciplined approach to position sizing and risk management led to consistent growth.",
    keyTrades: [
      { pair: "XAU/USD", result: "+$8,400", type: "BUY at Order Block" },
      { pair: "BTC/USD", result: "+$12,300", type: "Wave 3 Entry" },
      { pair: "EUR/USD", result: "+$6,200", type: "Liquidity Sweep" },
    ],
    advice: "Focus on quality over quantity. One high-probability setup beats ten average ones.",
  },
  {
    title: "Automated Success Story",
    trader: "Michelle K.",
    duration: "6 months",
    strategy: "EA Portfolio",
    description: "Michelle deployed three of our Expert Advisors with proper risk allocation. The automated approach removed emotional trading and achieved consistent monthly returns.",
    keyTrades: [
      { pair: "Multi-Pair", result: "+$4,200/month", type: "AutoTrader Pro" },
      { pair: "EUR/USD", result: "+$2,800/month", type: "Grid Master EA" },
      { pair: "XAU/USD", result: "+$3,400/month", type: "Scalper Elite" },
    ],
    advice: "Let the bots do the heavy lifting. Focus on proper risk allocation across strategies.",
  },
];

const stats = [
  { value: "15,000+", label: "Active Traders", icon: Users },
  { value: "$50M+", label: "Trading Volume", icon: DollarSign },
  { value: "87%", label: "Success Rate", icon: Target },
  { value: "4.9/5", label: "Average Rating", icon: Star },
];

export default function TestimonialsPage() {
  return (
    <>
      <HeroSection
        subtitle="Success Stories"
        title="Real Traders, Real Results"
        description="Join thousands of traders who have transformed their trading journey with Infinity Algo. Their success is our proof."
        size="md"
        showLogo={false}
        actions={{
          primary: { label: "Start Your Journey", href: "https://infinityalgoacademy.net", external: true },
        }}
      />

      {/* Stats */}
      <section className="section-padding bg-gradient-to-r from-navy-900/30 via-onyx to-navy-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold gold-gradient-text mb-1">{stat.value}</div>
                <div className="text-gold-300/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="What Our Traders Say"
            title="Community Testimonials"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <GlassCard key={index} className="border border-gold-400/20">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-onyx font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-gold-100 font-medium">{testimonial.name}</h3>
                      {testimonial.verified && (
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      )}
                    </div>
                    <p className="text-gold-300/50 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gold-200/70 text-sm mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>

                {/* Results */}
                <div className="bg-navy-900/30 rounded-lg p-3">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <span className="text-gold-300/50 text-xs">Before</span>
                      <p className="text-gold-200/80">{testimonial.results.before}</p>
                    </div>
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <div className="text-right">
                      <span className="text-gold-300/50 text-xs">After</span>
                      <p className="text-emerald-400 font-medium">{testimonial.results.after}</p>
                    </div>
                  </div>
                  <p className="text-gold-300/50 text-xs mt-2 text-center">
                    Achieved in {testimonial.results.timeframe}
                  </p>
                </div>

                {/* Location */}
                <p className="text-gold-300/40 text-xs mt-3">{testimonial.location}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-gradient-to-b from-navy-900/20 to-onyx">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Featured Stories"
            title="Detailed Success Cases"
            description="In-depth analysis of traders who achieved exceptional results"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <GlassCard key={index} className="border border-gold-400/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-serif text-gold-400">{story.title}</h3>
                  <Award className="w-6 h-6 text-gold-400" />
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="text-gold-300/60">Trader: <span className="text-gold-100">{story.trader}</span></span>
                  <span className="text-gold-300/60">Duration: <span className="text-gold-100">{story.duration}</span></span>
                </div>

                <p className="text-gold-200/70 text-sm mb-4">{story.description}</p>

                <div className="space-y-2 mb-4">
                  {story.keyTrades.map((trade, i) => (
                    <div key={i} className="flex items-center justify-between bg-navy-900/30 rounded p-2 text-sm">
                      <span className="text-gold-100">{trade.pair}</span>
                      <span className="text-gold-300/50">{trade.type}</span>
                      <span className="text-emerald-400 font-medium">{trade.result}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gold-400/10 pt-4">
                  <p className="text-gold-300/60 text-sm">
                    <span className="text-gold-400">Key Advice:</span> {story.advice}
                  </p>
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
            <Quote className="w-16 h-16 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold gold-gradient-text mb-4">
              Your Success Story Starts Here
            </h2>
            <p className="text-gold-200/70 mb-6">
              Join our community of successful traders and start your journey to consistent profitability.
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
                Get Signals
              </GoldButton>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
