import React from 'react';
import { Brain, Zap, Target, Shield, ArrowRight, Play } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-walmart-blue via-walmart-blue-light to-walmart-blue overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                AI Agents.<br />
                <span className="text-walmart-yellow">Hyperlocal Impact.</span><br />
                Walmart Ready.
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Revolutionary multi-agent AI platform that autonomously detects, predicts, and rebalances 
                inventory across stores and fulfillment centers in response to sudden, hyperlocal demand surges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                Experience Live Demo
                <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <button className="border-2 border-white text-white hover:bg-white hover:text-walmart-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center group">
                  Learn How It Works
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-walmart-yellow/20 rounded-lg p-4 text-center">
                      <Brain className="h-8 w-8 text-walmart-yellow mx-auto mb-2 animate-pulse-slow" />
                      <p className="text-white text-sm font-medium">AI Agents</p>
                      <p className="text-white/80 text-xs">Autonomous</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <Zap className="h-8 w-8 text-walmart-yellow mx-auto mb-2 animate-bounce-slow" />
                      <p className="text-white text-sm font-medium">Real-time</p>
                      <p className="text-white/80 text-xs">Detection</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <Target className="h-8 w-8 text-walmart-yellow mx-auto mb-2 animate-pulse-slow" />
                      <p className="text-white text-sm font-medium">Hyperlocal</p>
                      <p className="text-white/80 text-xs">Targeting</p>
                    </div>
                    <div className="bg-walmart-yellow/20 rounded-lg p-4 text-center">
                      <Shield className="h-8 w-8 text-walmart-yellow mx-auto mb-2 animate-bounce-slow" />
                      <p className="text-white text-sm font-medium">Explainable</p>
                      <p className="text-white/80 text-xs">AI Decisions</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-walmart-yellow/30 rounded-full blur-xl animate-pulse-slow"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-walmart-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-walmart-gray-900 mb-4">
              Revolutionary Inventory Intelligence
            </h2>
            <p className="text-xl text-walmart-gray-600 max-w-3xl mx-auto">
              Transform how Walmart responds to demand with autonomous AI agents that work together 
              to optimize inventory before customers even know they need it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Autonomous Multi-Agent System",
                description: "Specialized AI agents collaborate in real-time: demand forecasters detect anomalies, transfer optimizers calculate routes, and logistics coordinators execute moves—all without human intervention."
              },
              {
                icon: Zap,
                title: "Hyperlocal Demand Sensing",
                description: "Real-time integration of POS data, weather patterns, social media trends, and local events to predict micro-level demand spikes before they impact customer experience."
              },
              {
                icon: Shield,
                title: "Explainable AI Decisions",
                description: "Every inventory decision comes with transparent rationale and confidence scores, ensuring trust, compliance, and the ability to learn from each action taken."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group animate-fade-in">
                <div className="p-3 bg-walmart-blue/10 rounded-lg w-fit mb-6 group-hover:bg-walmart-blue/20 transition-colors">
                  <benefit.icon className="h-8 w-8 text-walmart-blue" />
                </div>
                <h3 className="text-xl font-bold text-walmart-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-walmart-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-walmart-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Impact at Scale
            </h2>
            <p className="text-xl text-blue-100">
              Built to handle Walmart's massive scale with precision and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "10,500+", label: "Walmart Stores", description: "Ready for deployment" },
              { number: "< 5 min", label: "Response Time", description: "From detection to action" },
              { number: "99.9%", label: "Accuracy", description: "In demand prediction" },
              { number: "30%", label: "Waste Reduction", description: "Through optimization" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-4xl lg:text-5xl font-bold text-walmart-yellow mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-blue-200 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-walmart-yellow to-walmart-yellow-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-walmart-blue mb-6">
            Ready to Experience the Future of Retail Inventory?
          </h2>
          <p className="text-xl text-walmart-blue/80 mb-8">
            See how our autonomous AI agents transform inventory management in real-time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-walmart-blue hover:bg-walmart-blue-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl flex items-center justify-center group">
              Launch Live Demo
              <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-walmart-blue text-walmart-blue hover:bg-walmart-blue hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center group">
              Schedule Presentation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;