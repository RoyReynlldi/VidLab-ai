import React from 'react';
import { Play, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 text-purple-300">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">AI-Powered Video Intelligence</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transform Long Videos Into
          <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Viral Clips
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          VidLab AI automatically finds the most engaging moments in your content, 
          creating perfect clips for TikTok, YouTube Shorts, and Instagram Reels.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://ai.appvidlab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25 flex items-center gap-3"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Coba Gratis
          </a>

          <a
            href="https://ai.appvidlab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/10"
          >
            Lihat Demo
          </a>
        </div>
        
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">10x</div>
            <div className="text-gray-400">Faster Content</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">AI-Powered</div>
            <div className="text-gray-400">Smart Selection</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">No Limits</div>
            <div className="text-gray-400">Unlimited Videos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
