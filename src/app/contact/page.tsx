"use client";

import { HeroSection } from "@/components/HeroSection";
import { GlassCard } from "@/components/GlassCard";
import { GoldButton } from "@/components/GoldButton";
import { SectionHeading } from "@/components/SectionHeading";
import { useState } from "react";
import { 
  Mail,
  MessageCircle,
  Phone,
  Clock,
  ExternalLink,
  Send,
  MapPin,
  Globe,
  CheckCircle
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed responses within 24 hours",
    value: "support@infinityalgo.com",
    action: "mailto:support@infinityalgo.com",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Instant support during business hours",
    value: "Available 24/5",
    action: "#",
  },
  {
    icon: Globe,
    title: "Community",
    description: "Join our Discord community",
    value: "15,000+ Members",
    action: "https://infinityalgoacademy.net",
  },
];

const supportHours = [
  { day: "Monday - Friday", hours: "24 Hours" },
  { day: "Saturday", hours: "10 AM - 6 PM EST" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "normal",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <HeroSection
        subtitle="Get in Touch"
        title="24/7 Priority Support"
        description="We're here to help you succeed. Reach out to our dedicated support team for any questions or assistance."
        size="md"
        showLogo={false}
      />

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Contact Us"
            title="How Can We Help?"
          />

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method) => (
              <GlassCard key={method.title} className="text-center hover:border-gold-400/40 transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400/20 to-navy-900/50 flex items-center justify-center mx-auto mb-4 border border-gold-400/20">
                  <method.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-lg font-serif text-gold-400 mb-2">{method.title}</h3>
                <p className="text-gold-200/60 text-sm mb-3">{method.description}</p>
                <a 
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gold-400 text-sm hover:text-gold-300 transition-colors"
                >
                  {method.value}
                </a>
              </GlassCard>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <GlassCard className="border border-gold-400/20">
              <h3 className="text-xl font-serif text-gold-400 mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                  <h4 className="text-xl font-serif text-gold-400 mb-2">Message Sent!</h4>
                  <p className="text-gold-200/70">
                    We&apos;ll get back to you within 24 hours. Check your email for a confirmation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gold-300/70 text-sm mb-2">Your Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-navy-900/30 border border-gold-400/20 rounded-lg text-gold-100 placeholder-gold-300/30 focus:outline-none focus:border-gold-400/50"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gold-300/70 text-sm mb-2">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-navy-900/30 border border-gold-400/20 rounded-lg text-gold-100 placeholder-gold-300/30 focus:outline-none focus:border-gold-400/50"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gold-300/70 text-sm mb-2">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-navy-900/30 border border-gold-400/20 rounded-lg text-gold-100 focus:outline-none focus:border-gold-400/50"
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gold-300/70 text-sm mb-2">Priority</label>
                    <div className="flex gap-4">
                      {["normal", "high", "urgent"].map((priority) => (
                        <label key={priority} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="priority"
                            value={priority}
                            checked={formData.priority === priority}
                            onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                            className="w-4 h-4 accent-gold-400"
                          />
                          <span className="text-gold-200/80 capitalize">{priority}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gold-300/70 text-sm mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-navy-900/30 border border-gold-400/20 rounded-lg text-gold-100 placeholder-gold-300/30 focus:outline-none focus:border-gold-400/50 resize-none"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <GoldButton
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    icon={<Send className="w-5 h-5" />}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </GoldButton>
                </form>
              )}
            </GlassCard>

            {/* Info */}
            <div className="space-y-6">
              {/* Support Hours */}
              <GlassCard className="border border-gold-400/20">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-gold-400" />
                  <h3 className="text-lg font-serif text-gold-400">Support Hours</h3>
                </div>
                <div className="space-y-3">
                  {supportHours.map((item) => (
                    <div key={item.day} className="flex justify-between text-sm">
                      <span className="text-gold-200/80">{item.day}</span>
                      <span className="text-gold-400">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Quick Links */}
              <GlassCard className="border border-gold-400/20">
                <h3 className="text-lg font-serif text-gold-400 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href="https://infinityalgoacademy.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-navy-900/20 rounded-lg hover:bg-navy-900/30 transition-all group"
                  >
                    <span className="text-gold-200/80">Infinity Algo Academy</span>
                    <ExternalLink className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://infinitysignals.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-navy-900/20 rounded-lg hover:bg-navy-900/30 transition-all group"
                  >
                    <span className="text-gold-200/80">Infinity Signals Platform</span>
                    <ExternalLink className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </GlassCard>

              {/* FAQ Teaser */}
              <GlassCard className="border border-gold-400/20">
                <h3 className="text-lg font-serif text-gold-400 mb-4">Frequently Asked</h3>
                <div className="space-y-3">
                  {[
                    "How do I access my purchased tools?",
                    "What's included in the membership?",
                    "How do I cancel my subscription?",
                    "Do you offer refunds?",
                  ].map((question, index) => (
                    <div key={index} className="text-sm text-gold-200/60 flex items-start gap-2">
                      <span className="text-gold-400">Q:</span>
                      {question}
                    </div>
                  ))}
                </div>
                <GoldButton href="/pricing" size="sm" className="mt-4 w-full">
                  View All FAQs
                </GoldButton>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-navy-900/30 via-onyx to-navy-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <GlassCard glow className="border border-gold-400/30">
            <MessageCircle className="w-16 h-16 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold gold-gradient-text mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-gold-200/70 mb-6">
              Join our Discord community for instant support from our team and fellow traders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GoldButton
                href="https://infinityalgoacademy.net"
                external
                size="lg"
                icon={<ExternalLink className="w-5 h-5" />}
              >
                Join Community
              </GoldButton>
              <GoldButton
                href="mailto:support@infinityalgo.com"
                size="lg"
                variant="outline"
                icon={<Mail className="w-5 h-5" />}
              >
                Email Support
              </GoldButton>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
