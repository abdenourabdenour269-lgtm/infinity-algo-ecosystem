"use client";

import Link from "next/link";
import { Logo3D } from "./Logo3D";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, Twitter, Youtube, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    company: [
      { label: t("footer.aboutUs"), href: "/about" },
      { label: t("footer.leadershipTeam"), href: "/team" },
      { label: t("footer.successStories"), href: "/testimonials" },
      { label: t("footer.contact"), href: "/contact" },
    ],
    products: [
      { label: t("footer.algoAcademy"), href: "/academy" },
      { label: t("footer.toolsMarketplace"), href: "/tools" },
      { label: t("footer.aiSignals"), href: "/signals" },
      { label: t("footer.tradingBots"), href: "/bots" },
    ],
    resources: [
      { label: t("footer.marketAnalysis"), href: "/analysis" },
      { label: t("footer.educationHub"), href: "/education" },
      { label: t("footer.liveDeals"), href: "/deals" },
      { label: t("footer.downloads"), href: "/resources" },
    ],
    support: [
      { label: t("footer.community"), href: "/community" },
      { label: t("footer.pricing"), href: "/pricing" },
      { label: t("footer.faq"), href: "/contact" },
      { label: t("footer.support247"), href: "/contact" },
    ],
  };

  const categoryLabels: Record<string, string> = {
    company: t("footer.company"),
    products: t("footer.products"),
    resources: t("footer.resources"),
    support: t("footer.support"),
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: MessageCircle, href: "#", label: "Discord" },
  ];

  return (
    <footer className="relative bg-onyx border-t border-gold-400/20">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-6">
            <Logo3D size="lg" />
            <p className="text-gold-300/70 text-sm leading-relaxed max-w-sm">
              {t("footer.footerDesc")}
            </p>

            {/* External Links Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://infinityalgoacademy.net"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button px-5 py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2"
              >
                {t("nav.academyPortal")}
                <ExternalLink className="w-4 h-4 rtl-icon" />
              </a>
              <a
                href="https://infinitysignals.net"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button px-5 py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2"
              >
                {t("nav.signalsPortal")}
                <ExternalLink className="w-4 h-4 rtl-icon" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400 hover:text-gold-300 hover:bg-gold-400/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-gold-400 font-serif text-lg font-semibold mb-4">
                  {categoryLabels[category]}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gold-300/60 hover:text-gold-400 text-sm transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gold-400/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-gold-300/50 text-sm">
                © {new Date().getFullYear()} Infinity Algo Ecosystem. {t("footer.allRightsReserved")}
              </div>
              {/* Language Toggle in Footer */}
              <LanguageToggle />
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/contact" className="text-gold-300/50 hover:text-gold-400 transition-colors">
                {t("footer.privacyPolicy")}
              </Link>
              <Link href="/contact" className="text-gold-300/50 hover:text-gold-400 transition-colors">
                {t("footer.termsOfService")}
              </Link>
              <Link href="/contact" className="text-gold-300/50 hover:text-gold-400 transition-colors">
                {t("footer.riskDisclaimer")}
              </Link>
            </div>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-gold-300/30 text-xs max-w-3xl mx-auto">
            {t("footer.disclaimerText")}
          </p>
        </div>
      </div>
    </footer>
  );
}
