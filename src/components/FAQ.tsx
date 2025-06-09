import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "Is there a maximum video duration?",
      answer: "No, there's absolutely no limit on video duration. Our AI can process videos of any length, from short clips to multi-hour content like lectures, podcasts, or live streams."
    },
    {
      question: "Can I choose specific timestamps for clips?",
      answer: "Currently, our AI automatically selects the most engaging moments based on advanced algorithms that analyze audio, visual, and engagement patterns. This ensures optimal viral potential, but manual timestamp selection is not available."
    },
    {
      question: "What video formats are supported?",
      answer: "We only support support MP4 Formated."
    },
    {
      question: "How long does processing take?",
      answer: "Processing time varies based on video length, but most videos are ready within 1-2 minutes."
    },
    {
      question: "Do credits expire?",
      answer: "No, your credits never expire. Once purchased, you can use them whenever you need to process videos, making it perfect for irregular content creation schedules."
    },
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-purple-400">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about VidLab AI
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
            >
              <button
                className="w-full text-left p-6 flex items-center justify-between focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {faq.question}
                </h3>
                <div className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="h-px bg-slate-700 mb-4"></div>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;