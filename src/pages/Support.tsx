import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Mail, 
  MessageSquare, 
  HelpCircle, 
  Send, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Smartphone, 
  Activity, 
  Copy, 
  Check, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface SupportProps {
  onBack: () => void;
  onOpenDownload?: () => void;
}

interface SupportFaqItem {
  question: string;
  answer: string;
}

const SUPPORT_FAQS: SupportFaqItem[] = [
  {
    question: "How do I download and install Cricket Master Line AI?",
    answer: "You can download the application once official store releases go live on Google Play and Apple App Store. Tap the 'Download App' button in the navigation bar to check the current availability status and sign up for launch alerts."
  },
  {
    question: "Why are live AI predictions or match insights momentarily delayed?",
    answer: "Our AI engine recalculates win probability and momentum curves with each ball and over bowled. During high-traffic international tournaments, data synchronization takes 1-3 seconds to verify incoming telemetric ball metrics before feeding our predictive models."
  },
  {
    question: "How can I report a bug or incorrect match data?",
    answer: "You can submit a ticket using the Support Form on this page or email us directly at contact@cricketmasterline.ai with your device model, OS version, and a brief description or screenshot of the anomaly."
  },
  {
    question: "Is Cricket Master Line AI free or subscription-based?",
    answer: "The introductory release of Cricket Master Line AI offers free access to live scores, match summaries, and foundational AI companion analysis. Premium historical deep-dive statistics and customizable advanced alert engines may be introduced in upcoming major releases."
  },
  {
    question: "What devices and operating systems are supported?",
    answer: "Cricket Master Line AI is optimized for Android devices running Android 8.0 (Oreo) and above, as well as iOS devices running iOS 14.0 or later."
  },
  {
    question: "How can I request support for a specific league or tournament?",
    answer: "We welcome feature and tournament requests! Simply choose 'Feature Request' in the inquiry form below and specify the series or tournament you would like prioritized."
  }
];

export const Support: React.FC<SupportProps> = ({ onBack, onOpenDownload }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    category: 'technical_issue',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate API dispatch
    setTimeout(() => {
      const generatedId = `CML-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleResetForm = () => {
    setFormState({
      name: '',
      email: '',
      category: 'technical_issue',
      subject: '',
      message: ''
    });
    setIsSubmitted(false);
    setTicketId('');
  };

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#10091F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Back button */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-[#BDB4C9] hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E879F9]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          {/* Quick status pill */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>All Systems Operational</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#3C1392]/60 to-[#841770]/60 border border-white/10 text-xs font-semibold text-[#E879F9]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Customer Support &amp; Help Desk</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            How can we <span className="bg-gradient-to-r from-white via-[#E879F9] to-[#C4B5FD] bg-clip-text text-transparent">assist you?</span>
          </h1>

          <p className="text-[#BDB4C9] text-base sm:text-lg leading-relaxed">
            Have questions about Cricket Master Line AI, experiencing an issue with your app, or want to suggest a new match feature? Our dedicated team is here to help.
          </p>
        </div>

        {/* Quick Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Direct Email */}
          <div className="p-6 rounded-2xl bg-[#1B1230]/70 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3C1392] to-[#841770] flex items-center justify-center text-white shadow-lg">
                <Mail className="w-6 h-6 text-[#E879F9]" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Direct Email Support</h3>
              <p className="text-sm text-[#BDB4C9] leading-relaxed">
                Send an email for account inquiries, technical logs, or general assistance from our team.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs text-[#8E83A2]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E879F9]" />
                  <span>Avg reply: &lt; 24h</span>
                </span>
                <span className="text-emerald-400 font-medium">Mon - Sat</span>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Us</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#BDB4C9] hover:text-white transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: In-App Diagnostics */}
          <div className="p-6 rounded-2xl bg-[#1B1230]/70 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3C1392] to-[#841770] flex items-center justify-center text-white shadow-lg">
                <Smartphone className="w-6 h-6 text-[#E879F9]" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">In-App Feedback</h3>
              <p className="text-sm text-[#BDB4C9] leading-relaxed">
                Submit instantaneous telemetry logs and diagnostic reports directly from the app menu.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs text-[#8E83A2]">
                <span>App Settings &rarr; Send Feedback</span>
              </div>

              {onOpenDownload ? (
                <button
                  onClick={onOpenDownload}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Download App Status</span>
                </button>
              ) : (
                <div className="text-xs text-[#8E83A2] py-2 text-center">
                  Settings Menu &rarr; Help &amp; Support
                </div>
              )}
            </div>
          </div>

          {/* Card 3: Feature Suggestions */}
          <div className="p-6 rounded-2xl bg-[#1B1230]/70 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3C1392] to-[#841770] flex items-center justify-center text-white shadow-lg">
                <Sparkles className="w-6 h-6 text-[#E879F9]" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Feature Requests</h3>
              <p className="text-sm text-[#BDB4C9] leading-relaxed">
                Have an innovative AI metric, cricket analytics widget, or tournament you want included?
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs text-[#8E83A2]">
                <span>Community &amp; Analytics Roadmap</span>
              </div>

              <a
                href="#ticket-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('ticket-form')?.scrollIntoView({ behavior: 'smooth' });
                  setFormState(prev => ({ ...prev, category: 'feature_request' }));
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Submit Feature Request</span>
              </a>
            </div>
          </div>

        </div>

        {/* Main Grid: Ticket Form + Status & FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Support Ticket Form (7 cols) */}
          <div id="ticket-form" className="lg:col-span-7 bg-[#1B1230]/80 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#E879F9] uppercase tracking-wider mb-1">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Submit a Request</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-white">Send Us a Message</h2>
              <p className="text-sm text-[#BDB4C9] mt-1">
                Fill out the form below and our support engineers will review your query promptly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold font-heading text-white">Ticket Submitted Successfully!</h3>
                
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-sm mx-auto text-left space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#8E83A2]">Ticket Reference:</span>
                    <span className="font-mono font-bold text-[#E879F9]">{ticketId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8E83A2]">Contact Email:</span>
                    <span className="font-medium text-white">{formState.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8E83A2]">Category:</span>
                    <span className="font-medium text-white capitalize">{formState.category.replace('_', ' ')}</span>
                  </div>
                </div>

                <p className="text-sm text-[#BDB4C9] max-w-md mx-auto">
                  Thank you for reaching out. A confirmation has been logged, and our team will get back to you within 24 hours.
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleResetForm}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#BDB4C9] uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#8E83A2] text-sm focus:outline-none focus:border-[#E879F9] focus:ring-1 focus:ring-[#E879F9] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#BDB4C9] uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-[#E879F9]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#8E83A2] text-sm focus:outline-none focus:border-[#E879F9] focus:ring-1 focus:ring-[#E879F9] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#BDB4C9] uppercase tracking-wider mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      name="category"
                      value={formState.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1B1230] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E879F9] focus:ring-1 focus:ring-[#E879F9] transition-all"
                    >
                      <option value="technical_issue">App Bug / Technical Issue</option>
                      <option value="ai_feedback">AI Prediction &amp; Analytics Feedback</option>
                      <option value="download_support">Download &amp; Store Inquiries</option>
                      <option value="feature_request">Feature Request / Suggestion</option>
                      <option value="partnership">Business &amp; Partnership</option>
                      <option value="other">General Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#BDB4C9] uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                      placeholder="Brief topic summary"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#8E83A2] text-sm focus:outline-none focus:border-[#E879F9] focus:ring-1 focus:ring-[#E879F9] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#BDB4C9] uppercase tracking-wider mb-1.5">
                    Detailed Message <span className="text-[#E879F9]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Describe your question, issue, or feedback in detail (e.g. tournament match, device model, steps to reproduce)..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#8E83A2] text-sm focus:outline-none focus:border-[#E879F9] focus:ring-1 focus:ring-[#E879F9] transition-all resize-y"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#3C1392] to-[#841770] hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_4px_16px_rgba(132,23,112,0.35)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Support Ticket</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-[#8E83A2] text-center pt-1">
                  We respect your privacy. Inquiries are used exclusively to resolve your support request.
                </p>
              </form>
            )}

          </div>

          {/* Right Column: Status & Support FAQs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* System Status Box */}
            <div className="p-6 rounded-2xl bg-[#1B1230]/70 border border-white/10 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Activity className="w-4 h-4 text-[#E879F9]" />
                  <span>Platform Health Status</span>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
                  99.98% Uptime
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                  <span className="text-[#BDB4C9]">Live Cricket Telemetry Feed</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Operational
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                  <span className="text-[#BDB4C9]">AI Win Probability Engine</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Operational
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                  <span className="text-[#BDB4C9]">Push Notification Relays</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Operational
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Support FAQs */}
            <div className="p-6 rounded-2xl bg-[#1B1230]/70 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#E879F9] uppercase tracking-wider mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Quick Answers</span>
              </div>
              <h3 className="text-lg font-bold font-heading text-white mb-4">Support Questions</h3>

              <div className="space-y-3">
                {SUPPORT_FAQS.map((item, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="border border-white/5 rounded-xl overflow-hidden bg-white/[0.02]"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full text-left p-3.5 flex items-center justify-between gap-3 text-xs font-semibold text-white hover:text-[#E879F9] transition-colors"
                      >
                        <span>{item.question}</span>
                        <ChevronDown className={`w-4 h-4 text-[#8E83A2] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#E879F9]' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="px-3.5 pb-3.5 pt-1 text-xs text-[#BDB4C9] leading-relaxed border-t border-white/5">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
