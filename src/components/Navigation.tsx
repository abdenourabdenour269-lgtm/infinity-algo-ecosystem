"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo3D } from "./Logo3D";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X, ExternalLink } from "lucide-react";

const navItems = [
  { 
    label: "Home", 
    href: "/" 
  },
  { 
    label: "About", 
    href: "/about",
    submenu: [
      { label: "Our Story", href: "/about" },
      { label: "Leadership Team", href: "/team" },
      { label: "Success Stories", href: "/testimonials" },
    ]
  },
  { 
    label: "Products", 
    href: "#",
    submenu: [
      { label: "Academy & Courses", href: "/academy" },
      { label: "Tools Marketplace", href: "/tools" },
      { label: "AI Signals", href: "/signals" },
      { label: "Trading Bots", href: "/bots" },
    ]
  },
  { 
    label: "Trading", 
    href: "#",
    submenu: [
      { label: "Live Deals", href: "/deals" },
      { label: "Market Analysis", href: "/analysis" },
      { label: "Education Hub", href: "/education" },
    ]
  },
  { 
    label: "Pricing", 
    href: "/pricing" 
  },
  { 
    label: "Community", 
    href: "/community" 
  },
  { 
    label: "Resources", 
    href: "/resources" 
  },
];

const externalLinks = [
  { 
    label: "Infinity Algo Academy", 
    href: "https://infinityalgoacademy.net",
    description: "MT4/MT5 Indicators, Expert Advisors, Courses & Bots"
  },
  { 
    label: "Infinity Signals", 
    href: "https://infinitysignals.net",
    description: "AI Signals, Crypto Scanner & Automated Trading"
  },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled 
            ? "bg-onyx/95 backdrop-blur-xl shadow-2xl border-b border-gold-400/20" 
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Logo3D size="md" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                      "text-gold-200 hover:text-gold-400",
                      "hover:bg-gold-400/10",
                      "flex items-center gap-1"
                    )}
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        activeDropdown === item.label && "rotate-180"
                      )} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.submenu && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-56 py-2 glass-card rounded-xl shadow-2xl">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gold-200 hover:text-gold-400 hover:bg-gold-400/10 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* External Links & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* External Links */}
              <div className="flex items-center gap-2">
                {externalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold-300 hover:text-gold-400 flex items-center gap-1 transition-colors"
                  >
                    {link.label.split(" ")[1] || link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/pricing"
                className="gold-button px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gold-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Gold Underline */}
        <div className={cn(
          "h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-50"
        )} />
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-500",
          mobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
      >
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={cn(
            "absolute top-20 left-0 right-0 bg-onyx border-b border-gold-400/20 transition-transform duration-500",
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="max-h-[calc(100vh-5rem)] overflow-y-auto py-4 px-4">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                {item.submenu ? (
                  <>
                    <div className="text-gold-200 font-medium py-2">{item.label}</div>
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block py-2 text-gold-300/70 hover:text-gold-400"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-gold-200 font-medium hover:text-gold-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* External Links */}
            <div className="mt-4 pt-4 border-t border-gold-400/20 space-y-3">
              {externalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 text-gold-400 hover:text-gold-300"
                >
                  {link.label}
                  <ExternalLink className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-gold-400/20">
              <Link
                href="/pricing"
                className="block w-full gold-button text-center py-3 rounded-full font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
