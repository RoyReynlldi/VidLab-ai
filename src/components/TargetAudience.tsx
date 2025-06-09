import React from 'react';
import { GraduationCap, Video, BookOpen, Users, Mic, Camera } from 'lucide-react';

const TargetAudience = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Perfect For <span className="text-purple-400">Everyone</span>
          </h2>
          <p className="text-xl text-gray-300">
            Whether you're studying or creating, VidLab AI adapts to your needs
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Students Section */}
          <div className="bg-gradient-to-br from-blue-900/20 to-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Students</h3>
                <p className="text-blue-300">All Majors Welcome</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2">Study Material Clips</h4>
                  <p className="text-gray-400">Turn long lectures into digestible study clips for better retention</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2">Group Project Highlights</h4>
                  <p className="text-gray-400">Extract key moments from group discussions and presentations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mic className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2">Research Summaries</h4>
                  <p className="text-gray-400">Create quick summaries of research interviews and findings</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Creators Section */}
          <div className="bg-gradient-to-br from-purple-900/20 to-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Video className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Content Creators</h3>
                <p className="text-purple-300">Multi-Platform Ready</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Camera className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2">YouTube Shorts</h4>
                  <p className="text-gray-400">Extract the best moments from long-form content for Shorts</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Video className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2">TikTok & Reels</h4>
                  <p className="text-gray-400">Create viral-ready clips optimized for maximum engagement</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2">Cross-Platform Growth</h4>
                  <p className="text-gray-400">Repurpose content across all major social media platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;