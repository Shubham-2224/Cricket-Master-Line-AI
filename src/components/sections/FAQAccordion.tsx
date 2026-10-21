import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is Cricket Master Line AI?',
      answer:
        'Cricket Master Line AI is a cricket-focused mobile application combining cricket score information with AI-powered analysis.',
    },
    {
      question: 'Does Cricket Master Line AI provide cricket scores?',
      answer:
        "The application is designed to provide a cricket score experience. Visit the app's official download page to explore its available features.",
    },
    {
      question: 'What is AI cricket analysis?',
      answer:
        'It refers to using artificial intelligence to help interpret cricket-related information and surface insights, depending on the capabilities supported by the application.',
    },
    {
      question: 'Where can I download the application?',
      answer:
        'Use the official app download link provided on this website.',
    },
    {
      question: 'Is this website a live cricket score platform?',
      answer:
        'No. This website introduces Cricket Master Line AI and its features. It does not display live cricket scores or scorecards.',
    },
    {
      question: 'How can I contact the team?',
      answer: `Use the official contact details provided on this website (${siteConfig.contact.email}).`,
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#0E081C]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#E879F9]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-[#BDB4C9] leading-relaxed">
            Find answers to common questions about Cricket Master Line AI and this introductory website.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-[#1B1230] border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E879F9]"
                >
                  <span className="text-base sm:text-lg font-bold font-heading text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#E879F9] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#841770]/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-[#BDB4C9] leading-relaxed border-t border-white/5"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
