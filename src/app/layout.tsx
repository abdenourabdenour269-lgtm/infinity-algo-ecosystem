import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infinity Algo Ecosystem | Elite Trading & Education Platform",
  description: "Join the elite trading community with cutting-edge AI tools, premium education, MT4/MT5 indicators, expert advisors, and automated trading solutions. Master the markets with Infinity Algo.",
  keywords: ["trading", "forex", "crypto", "AI trading", "expert advisors", "MT4", "MT5", "trading education", "algorithmic trading", "Infinity Algo"],
  authors: [{ name: "Infinity Algo Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Infinity Algo Ecosystem",
    description: "Elite Trading & Education Platform - Master the markets with AI-powered tools",
    url: "https://infinityalgo.com",
    siteName: "Infinity Algo Ecosystem",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinity Algo Ecosystem",
    description: "Elite Trading & Education Platform - Master the markets with AI-powered tools",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-onyx text-gold-50`}
      >
        <LanguageProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingCTA />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
