import React from 'react';
import { Rocket, Smile, PlayCircle, Users, TrendingUp, ThumbsUp } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Boost Content Growth",
      description: "Reach more people by turning long videos into short viral clips effortlessly."
    },
    {
      icon: Smile,
      title: "Save Time & Energy",
      description: "Let AI handle editing so you can focus on creativity and engagement."
    },
    {
      icon: PlayCircle,
      title: "Stay Consistent",
      description: "Post more often with ready-to-use clips tailored for each platform."
    },
    {
      icon: Users,
      title: "Made for Creators & Students",
      description: "Whether you're a student or influencer, our tool adapts to your needs."
    },
    {
      icon: TrendingUp,
      title: "Increase Views & Engagement",
      description: "Higher quality and relevance means better performance on social media."
    },
    {
      icon: ThumbsUp,
      title: "No Learning Curve",
      description: "Just paste a link and get clips—no complex editing tools needed."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real <span className="text-purple-400">Benefits</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here’s why VidLab AI makes content creation faster, smarter, and more impactful
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                {benefit.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
