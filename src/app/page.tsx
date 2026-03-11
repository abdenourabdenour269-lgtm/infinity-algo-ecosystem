"use client";

import { HeroSection } from "@/components/HeroSection";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { SectionHeading } from "@/components/SectionHeading";
import { Logo3D } from "@/components/Logo3D";
import { useLanguage } from "@/context/LanguageContext";
import { 
  TrendingUp, 
  Brain, 
  Shield, 
  Users, 
  BookOpen,
  Bot,
  LineChart,
  Target,
  Award,
  ExternalLink,
  ChevronRight,
  Activity,
  DollarSign,
  Clock
} from "lucide-react";
import { useState, useEffect } from "react";

// Rotating signals for live display
const liveSignals = [
  { pair: "XAU/USD", type: "BUY", entry: "2342.50", target: "2368.00", stop: "2330.00", profit: "+$2,550" },
  { pair: "EUR/USD", type: "SELL", entry: "1.0892", target: "1.0820", stop: "1.0920", profit: "+$720" },
  { pair: "BTC/USD", type: "BUY", entry: "67,450", target: "71,200", stop: "65,800", profit: "+$3,750" },
  { pair: "GBP/JPY", type: "BUY", entry: "192.45", target: "194.80", stop: "191.20", profit: "+$1,180" },
  { pair: "ETH/USD", type: "SELL", entry: "3,420", target: "3,180", stop: "3,520", profit: "+$2,400" },
];

export default function HomePage() {
  const [currentSignal, setCurrentSignal] = useState(0);
  const { t, language, direction } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: t("features.aiPoweredAnalysis"),
      description: t("features.aiPoweredAnalysisDesc"),
    },
    {
      icon: Bot,
      title: t("features.automatedTrading"),
      description: t("features.automatedTradingDesc"),
    },
    {
      icon: BookOpen,
      title: t("features.eliteEducation"),
      description: t("features.eliteEducationDesc"),
    },
    {
      icon: Shield,
      title: t("features.riskManagement"),
      description: t("features.riskManagementDesc"),
    },
    {
      icon: LineChart,
      title: t("features.realTimeSignals"),
      description: t("features.realTimeSignalsDesc"),
    },
    {
      icon: Users,
      title: t("features.vipCommunity"),
      description: t("features.vipCommunityDesc"),
    },
  ];

  const externalPlatforms = [
    {
      name: t("platforms.academyName"),
      href: "https://infinityalgoacademy.net",
      description: t("platforms.academyDesc"),
      features: [t("platforms.professionalCourses"), t("platforms.customIndicators"), t("platforms.expertAdvisors"), t("platforms.tradingTools")],
      icon: BookOpen,
    },
    {
      name: t("platforms.signalsName"),
      href: "https://infinitysignals.net",
      description: t("platforms.signalsDesc"),
      features: [t("platforms.aiSignalScanner"), t("platforms.cryptoAnalysis"), t("platforms.autoTrading"), t("platforms.liveAlerts")],
      icon: Activity,
    },
  ];

  const stats = [
    { value: "15,000+", label: t("stats.activeTraders"), icon: Users },
    { value: "87%", label: t("stats.successRate"), icon: Target },
    { value: "2,500+", label: t("stats.monthlyPips"), icon: TrendingUp },
    { value: "50+", label: t("stats.courses"), icon: BookOpen },
  ];

  const bottomStats = [
    { value: "$50M+", label: t("stats.tradingVolume"), icon: DollarSign },
    { value: "15+", label: t("stats.yearsExperience"), icon: Award },
    { value: "98%", label: t("stats.clientSatisfaction"), icon: Target },
    { value: "24/7", label: t("stats.supportAvailable"), icon: Clock },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSignal((prev) => (prev + 1) % liveSignals.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getBuyText = () => language === "ar" ? "شراء" : "BUY";
  const getSellText = () => language === "ar" ? "بيع" : "SELL";

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        subtitle={t("hero.welcomeToElite")}
        title={t("hero.title")}
        description={t("hero.description")}
        size="xl"
        actions={{
          primary: { label: t("hero.startTrading"), href: "https://infinitysignals.net", external: true },
          secondary: { label: t("hero.exploreAcademy"), href: "https://infinityalgoacademy.net", external: true },
        }}
        stats={stats}
      >
        {/* Live Signal Display */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-6 border border-gold-400/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-gold-400 text-sm font-medium">{t("hero.liveSignal")}</span>
              </div>
              <div className="flex items-center gap-2 text-gold-300/60 text-xs">
                <Clock className="w-3 h-3" />
                <span>{t("common.updatesEvery")} 4s</span>
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-4 text-center transition-all duration-500">
              <div>
                <span className="text-gold-300/50 text-xs">{t("hero.pair")}</span>
                <p className="text-gold-100 font-semibold">{liveSignals[currentSignal].pair}</p>
              </div>
              <div>
                <span className="text-gold-300/50 text-xs">{t("hero.type")}</span>
                <p className={`font-semibold ${liveSignals[currentSignal].type === 'BUY' ? 'text-emerald-500' : 'text-red-500'}`}>
                  {liveSignals[currentSignal].type === 'BUY' ? getBuyText() : getSellText()}
                </p>
              </div>
              <div>
                <span className="text-gold-300/50 text-xs">{t("hero.entry")}</span>
                <p className="text-gold-100 font-semibold">{liveSignals[currentSignal].entry}</p>
              </div>
              <div>
                <span className="text-gold-300/50 text-xs">{t("hero.target")}</span>
                <p className="text-emerald-500 font-semibold">{liveSignals[currentSignal].target}</p>
              </div>
              <div>
                <span className="text-gold-300/50 text-xs">{t("hero.profit")}</span>
                <p className="text-emerald-400 font-bold">{liveSignals[currentSignal].profit}</p>
              </div>
            </div>

            {/* Signal dots */}
            <div className="flex justify-center gap-2 mt-4">
              {liveSignals.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSignal ? "bg-gold-400 w-4" : "bg-gold-400/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </HeroSection>

      {/* Platform Links Section */}
      <section className="section-padding bg-gradient-to-b from-onyx to-navy-900/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label={t("platforms.ourPlatforms")}
            title={t("platforms.twoEcosystems")}
            description={t("platforms.platformsDescription")}
          />

          <div className="grid md:grid-cols-2 gap-8">
            {externalPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-3xl p-8 group cursor-pointer block"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                    <platform.icon className="w-8 h-8 text-onyx" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-gold-400/50 group-hover:text-gold-400 transition-colors rtl-icon" />
                </div>

                <h3 className="text-2xl font-serif text-gold-400 mb-3">{platform.name}</h3>
                <p className="text-gold-200/60 mb-6">{platform.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {platform.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs bg-navy-900/50 border border-gold-400/20 rounded-full text-gold-300/80"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-gold-400 font-medium">
                  <span>{t("common.visitPlatform")}</span>
                  <ChevronRight className={`w-4 h-4 ${direction === 'rtl' ? 'mr-1 rotate-180' : 'ml-1'} group-hover:translate-x-2 transition-transform`} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label={t("features.whyChooseUs")}
            title={t("features.infinityAdvantage")}
            description={t("features.featuresDescription")}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <GlassCard key={feature.title} className="group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400/20 to-navy-900/50 flex items-center justify-center mb-4 border border-gold-400/20 group-hover:border-gold-400/40 transition-colors">
                  <feature.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-xl font-serif text-gold-400 mb-2">{feature.title}</h3>
                <p className="text-gold-200/60 text-sm leading-relaxed">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-navy-900/30 via-onyx to-navy-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {bottomStats.map((stat) => (
              <div key={stat.label} className="relative">
                <stat.icon className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-bold gold-gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gold-300/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard glow className="border border-gold-400/30">
            <Logo3D size="lg" className="mb-6 justify-center" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold gold-gradient-text mb-4">
              {t("cta.readyToJoin")}
            </h2>
            <p className="text-gold-200/70 text-lg mb-8 max-w-2xl mx-auto">
              {t("cta.ctaDescription")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GoldButton
                href="https://infinitysignals.net"
                external
                size="lg"
                icon={<ExternalLink className="w-5 h-5 rtl-icon" />}
              >
                {t("cta.getAiSignals")}
              </GoldButton>
              <GoldButton
                href="https://infinityalgoacademy.net"
                external
                size="lg"
                variant="outline"
                icon={<ExternalLink className="w-5 h-5 rtl-icon" />}
              >
                {t("cta.joinAcademy")}
              </GoldButton>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
