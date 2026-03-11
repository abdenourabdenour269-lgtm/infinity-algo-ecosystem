"use client";

import { HeroSection } from "@/components/HeroSection";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { SectionHeading } from "@/components/SectionHeading";
import { 
  BookOpen,
  Video,
  FileText,
  Download,
  Brain,
  Calculator,
  ExternalLink,
  CheckCircle,
  Clock,
  TrendingUp,
  Target,
  Shield,
  Users,
  Award,
  Layers,
  BarChart3
} from "lucide-react";

const courses = [
  {
    title: "Trading Foundation",
    level: "Beginner",
    duration: "8 Hours",
    modules: 12,
    description: "Perfect for those starting their trading journey. Learn market basics, terminology, and foundational concepts.",
    topics: ["Market Structure", "Chart Reading", "Order Types", "Trading Psychology", "Basic Analysis", "Risk Basics"],
    color: "from-emerald-500/20 to-emerald-600/20",
  },
  {
    title: "Technical Analysis Mastery",
    level: "Intermediate",
    duration: "16 Hours",
    modules: 24,
    description: "Deep dive into technical analysis including patterns, indicators, and multi-timeframe strategies.",
    topics: ["Chart Patterns", "Technical Indicators", "Multi-TF Analysis", "Support/Resistance", "Trend Analysis", "Entry Timing"],
    color: "from-gold-400/20 to-gold-500/20",
  },
  {
    title: "SMC & ICT Complete",
    level: "Advanced",
    duration: "24 Hours",
    modules: 36,
    description: "Master Smart Money Concepts and ICT methodology with institutional-level strategies.",
    topics: ["Order Blocks", "Liquidity Analysis", "Market Structure", "Fair Value Gaps", "Kill Zones", "Optimal Entry"],
    color: "from-navy-400/20 to-navy-500/20",
  },
  {
    title: "Elliott Wave Professional",
    level: "Advanced",
    duration: "20 Hours",
    modules: 30,
    description: "Complete Elliott Wave education from basic patterns to complex corrective combinations.",
    topics: ["Wave Patterns", "Fibonacci Integration", "Wave Degrees", "Corrective Patterns", "Wave Validation", "Time Analysis"],
    color: "from-gold-400/20 to-gold-600/20",
  },
  {
    title: "Risk Management Pro",
    level: "Essential",
    duration: "10 Hours",
    modules: 15,
    description: "Professional risk management strategies including position sizing and portfolio management.",
    topics: ["Position Sizing", "Kelly Criterion", "Drawdown Management", "Portfolio Balance", "Correlation Analysis", "Capital Preservation"],
    color: "from-emerald-500/20 to-gold-400/20",
  },
  {
    title: "Trading Psychology",
    level: "Essential",
    duration: "8 Hours",
    modules: 12,
    description: "Master the mental game with proven psychological frameworks and discipline strategies.",
    topics: ["Emotional Control", "Discipline Building", "Loss Acceptance", "Routine Development", "Journaling", "Peak Performance"],
    color: "from-navy-400/20 to-emerald-500/20",
  },
];

const mathTopics = [
  {
    title: "Expectancy & Probability",
    description: "Understanding expected value and probability in trading decisions",
    formulas: ["E = (Win% × Avg Win) − (Loss% × Avg Loss)", "Probability of consecutive wins/losses"],
  },
  {
    title: "Position Sizing Mathematics",
    description: "Calculating optimal position sizes for consistent risk management",
    formulas: ["Lots = Risk / (Stop Distance × Pip Value)", "Account risk percentage calculations"],
  },
  {
    title: "Risk of Ruin Analysis",
    description: "Calculating the probability of account depletion",
    formulas: ["RoR = [(1 − Edge) / (1 + Edge)]^Capital", "Monte Carlo simulations"],
  },
  {
    title: "Kelly Criterion",
    description: "Optimal bet sizing for maximum long-term growth",
    formulas: ["f* = (bp − q) / b", "Fractional Kelly for risk adjustment"],
  },
  {
    title: "Compounding Strategies",
    description: "Understanding exponential growth in trading accounts",
    formulas: ["FV = PV × (1 + r)^n", "Monthly/Annual growth projections"],
  },
  {
    title: "Performance Metrics",
    description: "Measuring and analyzing trading performance",
    formulas: ["Sharpe Ratio = (Rp − Rf) / σp", "Maximum drawdown calculations"],
  },
];

const tips = [
  "Always wait for confirmation before entering a trade - patience is a profitable skill.",
  "Risk no more than 1-2% per trade to survive inevitable losing streaks.",
  "Trade with the trend - the trend is your friend until it bends.",
  "Keep a trading journal - what gets measured gets improved.",
  "Never add to a losing position - cut losses short, let winners run.",
  "Trade the chart, not your opinion - the market is always right.",
  "Focus on process over profits - good process leads to good results.",
  "Master one strategy before adding more - complexity often leads to confusion.",
];

export default function EducationPage() {
  return (
    <>
      <HeroSection
        subtitle="Trading Education Hub"
        title="Master the Art of Trading"
        description="Comprehensive education from beginner foundations to advanced institutional strategies. Learn the math, psychology, and secrets of professional traders."
        size="md"
        showLogo={false}
        actions={{
          primary: { label: "Access All Courses", href: "https://infinityalgoacademy.net", external: true },
        }}
      />

      {/* Course Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Professional Courses"
            title="Complete Trading Education"
            description="Structured learning paths designed for serious traders"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <GlassCard key={course.title} className="group hover:border-gold-400/40 transition-all">
                <div className={`w-full h-1 rounded-full bg-gradient-to-r ${course.color} mb-4`} />
                
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded text-xs ${
                    course.level === "Beginner" ? "bg-emerald-500/20 text-emerald-400" :
                    course.level === "Intermediate" ? "bg-gold-400/20 text-gold-400" :
                    course.level === "Advanced" ? "bg-navy-400/20 text-navy-200" :
                    "bg-gold-400/10 text-gold-400"
                  }`}>
                    {course.level}
                  </span>
                  <span className="text-gold-300/50 text-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {course.duration}
                  </span>
                </div>

                <h3 className="text-lg font-serif text-gold-400 mb-2">{course.title}</h3>
                <p className="text-gold-200/60 text-sm mb-4">{course.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {course.topics.slice(0, 3).map((topic) => (
                    <span key={topic} className="px-2 py-0.5 text-xs bg-navy-900/50 rounded text-gold-300/70">
                      {topic}
                    </span>
                  ))}
                  {course.topics.length > 3 && (
                    <span className="px-2 py-0.5 text-xs text-gold-300/50">
                      +{course.topics.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gold-400/10">
                  <span className="text-gold-300/50 text-sm">{course.modules} modules</span>
                  <GoldButton href="https://infinityalgoacademy.net" external size="sm">
                    Start Learning
                  </GoldButton>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Mathematics Section */}
      <section className="section-padding bg-gradient-to-b from-navy-900/20 to-onyx">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Trading Mathematics"
            title="Mathematical Foundations"
            description="Essential math every professional trader must understand"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathTopics.map((topic) => (
              <GlassCard key={topic.title} className="border border-gold-400/20">
                <div className="flex items-center gap-2 mb-3">
                  <Calculator className="w-5 h-5 text-gold-400" />
                  <h3 className="text-lg font-serif text-gold-400">{topic.title}</h3>
                </div>
                <p className="text-gold-200/60 text-sm mb-4">{topic.description}</p>
                <div className="space-y-2">
                  {topic.formulas.map((formula, index) => (
                    <div key={index} className="formula-display text-xs py-2">
                      <code className="text-gold-100">{formula}</code>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Professional Advice"
            title="Daily Trading Tips"
            description="Wisdom from experienced traders"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tips.map((tip, index) => (
              <GlassCard key={index} className="border-l-2 border-l-gold-400">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-400/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold-400 font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gold-200/80 text-sm">{tip}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="section-padding bg-gradient-to-r from-navy-900/30 via-onyx to-navy-900/30">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Your Journey"
            title="Path to Trading Mastery"
          />

          <div className="relative">
            {[
              { step: 1, title: "Foundation", desc: "Learn market basics, terminology, and chart reading fundamentals", icon: BookOpen },
              { step: 2, title: "Technical Mastery", desc: "Master technical analysis, patterns, and indicator strategies", icon: BarChart3 },
              { step: 3, title: "Advanced Concepts", desc: "Learn SMC, ICT, Elliott Wave, and institutional strategies", icon: Layers },
              { step: 4, title: "Risk & Psychology", desc: "Develop discipline, emotional control, and risk management", icon: Brain },
              { step: 5, title: "Live Trading", desc: "Apply knowledge in live markets with mentorship support", icon: Target },
            ].map((item, index) => (
              <div key={item.step} className="flex items-center gap-6 mb-6 last:mb-0">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-onyx font-bold text-xl">
                    {item.step}
                  </div>
                  {index < 4 && (
                    <div className="absolute top-16 left-1/2 w-px h-6 bg-gold-400/30 -translate-x-1/2" />
                  )}
                </div>
                <GlassCard className="flex-1">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-6 h-6 text-gold-400" />
                    <div>
                      <h3 className="text-lg font-serif text-gold-400">{item.title}</h3>
                      <p className="text-gold-200/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <GlassCard glow className="border border-gold-400/30">
            <Award className="w-16 h-16 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold gold-gradient-text mb-4">
              Start Your Trading Education
            </h2>
            <p className="text-gold-200/70 mb-6">
              Access all courses, tools, and mentorship at Infinity Algo Academy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GoldButton
                href="https://infinityalgoacademy.net"
                external
                size="lg"
                icon={<ExternalLink className="w-5 h-5" />}
              >
                Join Academy Now
              </GoldButton>
              <GoldButton
                href="/resources"
                size="lg"
                variant="outline"
                icon={<Download className="w-5 h-5" />}
              >
                Free Resources
              </GoldButton>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
