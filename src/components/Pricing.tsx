import React from 'react';
import { Zap, Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple <span className="text-purple-400">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300">
            Pay only for what you use with our flexible credit system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Trial Package */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Free Trial</h3>
              <p className="text-gray-400 mb-6">Try our service risk-free</p>

              <div className="mb-6">
                <div className="text-5xl font-bold text-white mb-2">$0</div>
                <div className="text-purple-300 text-lg">20 Free Credits</div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 mb-6">
                <div className="text-purple-300 font-semibold">2 free videos</div>
                <div className="text-gray-400 text-sm">No time limit to use</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Unlimited video length",
                "No watermarks",
                "AI-powered clip selection",
                "Works with YouTube links",
                "Free forever until used",
                "No credit card needed"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/25">
              Get Started Free
            </button>

            <p className="text-center text-gray-400 text-sm mt-4">
              20 credits instantly available after login
            </p>
          </div>

          {/* Credit Package */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Credit Package</h3>
              <p className="text-gray-400 mb-6">Perfect for regular content creation</p>

              <div className="mb-6">
                <div className="text-5xl font-bold text-white mb-2">$20</div>
                <div className="text-purple-300 text-lg">620 Credits</div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 mb-6">
                <div className="text-purple-300 font-semibold">10 credits per video</div>
                <div className="text-gray-400 text-sm">Process up to 62 videos</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Unlimited video length",
                "No watermarks",
                "AI-powered clip selection",
                "Multi-platform optimization",
                "High-quality downloads",
                "24/7 support"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/25">
              Get Started Now
            </button>

            <p className="text-center text-gray-400 text-sm mt-4">
              No subscription required • Credits never expire
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Pricing;
