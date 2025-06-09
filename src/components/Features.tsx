import React from 'react';
import { Scissors, Download, Infinity, Clock, Target, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Scissors,
      title: "Automatic Viral Clip Selection",
      description: "AI identifies the most engaging moments that are likely to go viral on social media platforms."
    },
    {
      icon: Download,
      title: "No Watermark Downloads",
      description: "Get clean, professional clips without any branding or watermarks for your content."
    },
    {
      icon: Infinity,
      title: "Unlimited Videos",
      description: "Process as many videos as you want with no restrictions on quantity or frequency."
    },
    {
      icon: Clock,
      title: "Fast Summarization",
      description: "Get your clips ready in minutes, not hours. Our AI works at lightning speed."
    },
    {
      icon: Target,
      title: "Platform Optimization",
      description: "Clips are automatically formatted for TikTok, Instagram Reels, and YouTube Shorts."
    },
    {
      icon: Sparkles,
      title: "Smart Enhancement",
      description: "Automatic color correction, audio leveling, and visual improvements for better engagement."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful <span className="text-purple-400">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to create engaging short-form content from your long videos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;