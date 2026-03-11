"use client";

import { HeroSection } from "@/components/HeroSection";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { SectionHeading } from "@/components/SectionHeading";
import { Logo3D } from "@/components/Logo3D";
import { 
  Globe, 
  Users, 
  Target, 
  TrendingUp, 
  Shield, 
  Award,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const timeline = [
  {
    year: "2018",
    title: "The Vision Begins",
    description: "King Arius establishes Infinity Algo with a vision to democratize professional-grade trading education and tools.",
  },
  {
    year: "2019",
    title: "Academy Launch",
    description: "Infinity Algo Academy launches, providing comprehensive MT4/MT5 indicators and expert advisors to traders worldwide.",
  },
  {
    year: "2020",
    title: "Community Growth",
    description: "Our community expands to 5,000+ active traders, with success stories emerging from every continent.",
  },
  {
    year: "2021",
    title: "AI Integration",
    description: "Introduction of AI-powered signal analysis and automated trading systems, revolutionizing our approach.",
  },
  {
    year: "2022",
    title: "Signals Platform",
    description: "Infinity Signals launches, offering real-time AI signals and crypto scanner technology.",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Reached 15,000+ active traders with presence in 80+ countries. Launched advanced education modules.",
  },
  {
    year: "2024",
    title: "The Ecosystem",
    description: "Unification of all platforms under the Infinity Algo Ecosystem, creating a seamless trading experience.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our operations and recommendations.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Every analysis, signal, and tool is crafted with meticulous attention to detail.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of collective knowledge and mutual support.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Continuous improvement in our methods, tools, and trader outcomes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        subtitle="Our Story"
        title="Building the Future of Trading"
        description="From a vision to a global ecosystem - discover the journey of Infinity Algo and our commitment to trader excellence."
        size="md"
        showLogo={false}
      />

      {/* Mission Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="Our Mission"
                title="Empowering Traders Worldwide"
                align="left"
              />
              <p className="text-gold-200/70 text-lg leading-relaxed mb-6">
                At Infinity Algo Ecosystem, we believe that every trader deserves access to 
                institutional-grade tools and education. Our mission is to bridge the gap 
                between professional trading operations and individual traders.
              </p>
              <p className="text-gold-200/70 text-lg leading-relaxed mb-8">
                Through our two powerful platforms - Infinity Algo Academy and Infinity Signals - 
                we provide a comprehensive suite of resources designed to transform beginners 
                into confident, profitable traders.
              </p>
              <div className="flex flex-wrap gap-4">
                <GoldButton href="https://infinityalgoacademy.net" external icon={<ExternalLink className="w-4 h-4" />}>
                  Visit Academy
                </GoldButton>
                <GoldButton href="https://infinitysignals.net" external variant="outline" icon={<ExternalLink className="w-4 h-4" />}>
                  Visit Signals
                </GoldButton>
              </div>
            </div>
            <div className="flex justify-center">
              <Logo3D size="xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="section-padding bg-gradient-to-r from-navy-900/20 via-onyx to-navy-900/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Platforms"
            title="Two Ecosystems, Endless Possibilities"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard className="border border-gold-400/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                  <Globe className="w-7 h-7 text-onyx" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-gold-400">Infinity Algo Academy</h3>
                  <p className="text-gold-300/60 text-sm">infinityalgoacademy.net</p>
                </div>
              </div>
              <p className="text-gold-200/70 mb-6">
                Your comprehensive hub for MT4/MT5 indicators, Expert Advisors, professional 
                trading courses, and automation tools. Master the markets with institutional-grade resources.
              </p>
              <ul className="space-y-3 mb-6">
                {["Professional Trading Courses", "Custom MT4/MT5 Indicators", "Expert Advisors (EAs)", "Trading Bots & Automation"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gold-300/80">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <GoldButton href="https://infinityalgoacademy.net" external size="sm" icon={<ExternalLink className="w-4 h-4" />}>
                Explore Academy
              </GoldButton>
            </GlassCard>

            <GlassCard className="border border-gold-400/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-onyx" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-gold-400">Infinity Signals</h3>
                  <p className="text-gold-300/60 text-sm">infinitysignals.net</p>
                </div>
              </div>
              <p className="text-gold-200/70 mb-6">
                Real-time AI-powered trading signals, crypto scanner, and automated trading 
                solutions. Stay ahead of the markets with intelligent analysis and instant alerts.
              </p>
              <ul className="space-y-3 mb-6">
                {["AI Signal Scanner", "Crypto Market Analysis", "Automated Trading", "Real-Time Alerts"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gold-300/80">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <GoldButton href="https://infinitysignals.net" external size="sm" icon={<ExternalLink className="w-4 h-4" />}>
                Get Signals
              </GoldButton>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Our Journey"
            title="The Infinity Algo Timeline"
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400 via-gold-400/50 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <GlassCard padding="sm" className="inline-block">
                      <span className="text-gold-400 font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-serif text-gold-100 mt-1">{item.title}</h3>
                      <p className="text-gold-200/60 text-sm mt-2">{item.description}</p>
                    </GlassCard>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gold-400 border-4 border-onyx" />

                  {/* Spacer for other side */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-b from-navy-900/20 to-onyx">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Values"
            title="The Principles We Stand By"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <GlassCard key={value.title} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400/20 to-navy-900/50 flex items-center justify-center mx-auto mb-4 border border-gold-400/20">
                  <value.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-lg font-serif text-gold-400 mb-2">{value.title}</h3>
                <p className="text-gold-200/60 text-sm">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15,000+", label: "Active Traders", icon: Users },
              { value: "80+", label: "Countries", icon: Globe },
              { value: "50+", label: "Courses", icon: Award },
              { value: "4.9★", label: "Average Rating", icon: Star },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-6">
                <stat.icon className="w-6 h-6 text-gold-400 mx-auto mb-3" />
                <div className="text-3xl font-bold gold-gradient-text mb-1">{stat.value}</div>
                <div className="text-gold-300/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
