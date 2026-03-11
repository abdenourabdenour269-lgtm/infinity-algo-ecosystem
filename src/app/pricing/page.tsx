"use client";

import { HeroSection } from "@/components/HeroSection";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { SectionHeading } from "@/components/SectionHeading";
import { 
  Check,
  Crown,
  Star,
  Zap,
  ExternalLink,
  CheckCircle,
  Clock,
  Shield,
  Gift,
  Sparkles
} from "lucide-react";

const pricingPlans = [
  {
    name: "Essential",
    price: "$97",
    period: "/month",
    description: "Perfect for traders starting their journey with access to core features and education.",
    features: [
      "Access to Foundation Courses",
      "Basic Signal Alerts",
      "Community Access",
      "Weekly Market Analysis",
      "Email Support",
      "2 Indicators Included",
    ],
    notIncluded: [
      "Advanced SMC/ICT Courses",
      "AI Signal Scanner",
      "Expert Advisors",
      "1-on-1 Mentorship",
    ],
    cta: "Start Essential",
    href: "https://infinityalgoacademy.net",
    popular: false,
  },
  {
    name: "Professional",
    price: "$297",
    period: "/month",
    description: "For serious traders ready to master institutional strategies and automated tools.",
    features: [
      "All Essential Features",
      "Full Course Library Access",
      "AI Signal Scanner",
      "5 Premium Indicators",
      "2 Expert Advisors",
      "Priority Support",
      "Live Trading Sessions",
      "Private Discord Channel",
    ],
    notIncluded: [
      "Custom EA Development",
      "1-on-1 Mentorship",
    ],
    cta: "Go Professional",
    href: "https://infinitysignals.net",
    popular: true,
  },
  {
    name: "Elite",
    price: "$997",
    period: "/month",
    description: "The ultimate package for traders who demand the very best tools and support.",
    features: [
      "All Professional Features",
      "All Indicators & EAs",
      "Custom EA Development",
      "Weekly 1-on-1 Mentorship",
      "VIP Priority Support",
      "Early Access to New Tools",
      "Personalized Trading Plan",
      "Lifetime Updates",
    ],
    notIncluded: [],
    cta: "Become Elite",
    href: "https://infinityalgoacademy.net",
    popular: false,
  },
];

const lifetimeDeals = [
  {
    name: "Academy Lifetime",
    price: "$1,997",
    value: "$5,000+",
    discount: "60% OFF",
    description: "Lifetime access to all Academy courses, tools, and future releases.",
    features: ["All Courses Forever", "All Indicators", "All Expert Advisors", "Lifetime Updates", "VIP Support"],
    cta: "Get Lifetime Deal",
    href: "https://infinityalgoacademy.net",
  },
  {
    name: "Signals Lifetime",
    price: "$2,497",
    value: "$7,000+",
    discount: "65% OFF",
    description: "Lifetime access to AI signals, crypto scanner, and automated trading.",
    features: ["AI Signal Scanner", "Crypto Scanner", "Auto-Trading", "Real-Time Alerts", "API Access"],
    cta: "Get Lifetime Deal",
    href: "https://infinitysignals.net",
  },
];

const bonuses = [
  { icon: Gift, title: "Free Trading Journal Template", description: "Professional journaling system for tracking trades" },
  { icon: Sparkles, title: "Risk Calculator Tool", description: "Calculate position size and risk instantly" },
  { icon: Crown, title: "Private Community Access", description: "Join our exclusive trader community" },
  { icon: Shield, title: "30-Day Money Back Guarantee", description: "Full refund if not completely satisfied" },
];

export default function PricingPage() {
  return (
    <>
      <HeroSection
        subtitle="Investment in Excellence"
        title="Choose Your Path to Mastery"
        description="Select the perfect plan for your trading journey. Every plan includes our commitment to your success."
        size="md"
        showLogo={false}
      />

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-gold-400 to-gold-600 text-onyx text-sm font-bold rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                )}
                <GlassCard
                  className={`h-full flex flex-col ${
                    plan.popular
                      ? "border-2 border-gold-400/50 shadow-lg shadow-gold-400/10"
                      : "border border-gold-400/20"
                  }`}
                >
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-serif text-gold-400 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl md:text-5xl font-bold gold-gradient-text">{plan.price}</span>
                      <span className="text-gold-300/50">{plan.period}</span>
                    </div>
                    <p className="text-gold-200/60 text-sm mt-3">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <div className="flex-1">
                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          <span className="text-gold-200/80">{feature}</span>
                        </div>
                      ))}
                      {plan.notIncluded.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm opacity-50">
                          <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center text-gold-400/30">×</div>
                          <span className="text-gold-300/50 line-through">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <GoldButton
                    href={plan.href}
                    external
                    size="lg"
                    className="w-full"
                    variant={plan.popular ? "primary" : "outline"}
                    icon={<ExternalLink className="w-4 h-4" />}
                  >
                    {plan.cta}
                  </GoldButton>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifetime Deals */}
      <section className="section-padding bg-gradient-to-b from-navy-900/20 to-onyx">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Limited Offer"
            title="Lifetime Access Deals"
            description="Lock in lifetime access with our exclusive limited-time offers"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {lifetimeDeals.map((deal) => (
              <GlassCard key={deal.name} className="border border-gold-400/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-bl-lg">
                  {deal.discount}
                </div>
                <h3 className="text-2xl font-serif text-gold-400 mb-2">{deal.name}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold gold-gradient-text">{deal.price}</span>
                  <span className="text-gold-300/50 line-through">{deal.value}</span>
                </div>
                <p className="text-gold-200/60 text-sm mb-4">{deal.description}</p>
                <div className="space-y-2 mb-6">
                  {deal.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gold-200/80">
                      <Check className="w-4 h-4 text-emerald-500" />
                      {feature}
                    </div>
                  ))}
                </div>
                <GoldButton
                  href={deal.href}
                  external
                  size="lg"
                  className="w-full"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  {deal.cta}
                </GoldButton>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Included Free"
            title="Exclusive Bonuses"
            description="Every plan includes these valuable bonuses"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonuses.map((bonus) => (
              <GlassCard key={bonus.title} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400/20 to-navy-900/50 flex items-center justify-center mx-auto mb-4 border border-gold-400/20">
                  <bonus.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-lg font-serif text-gold-400 mb-2">{bonus.title}</h3>
                <p className="text-gold-200/60 text-sm">{bonus.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="section-padding bg-gradient-to-r from-navy-900/30 via-onyx to-navy-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <GlassCard glow className="border border-gold-400/30">
            <Shield className="w-16 h-16 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold gold-gradient-text mb-4">
              30-Day Money-Back Guarantee
            </h2>
            <p className="text-gold-200/70 mb-6">
              We're confident you'll love our platform. If you're not completely satisfied within 
              30 days of purchase, we'll provide a full refund - no questions asked.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gold-300/60 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                No Questions Asked
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Full Refund
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Instant Processing
              </span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            label="FAQ"
            title="Common Questions"
          />

          <div className="space-y-4">
            {[
              { q: "Can I upgrade or downgrade my plan?", a: "Yes, you can change your plan at any time. Upgrades are prorated, and downgrades take effect at your next billing cycle." },
              { q: "Do I need both Academy and Signals?", a: "They serve different purposes. Academy is for education and tools, while Signals provides real-time trading opportunities. Many traders use both for maximum benefit." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and select cryptocurrencies for your convenience." },
              { q: "Is there a contract or commitment?", a: "No contracts. All plans are month-to-month and you can cancel anytime. Lifetime deals are one-time payments with no recurring fees." },
            ].map((item, index) => (
              <GlassCard key={index} className="border border-gold-400/20">
                <h3 className="text-gold-400 font-medium mb-2">{item.q}</h3>
                <p className="text-gold-200/60 text-sm">{item.a}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
