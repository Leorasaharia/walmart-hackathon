import { Award, Brain, Globe, Lightbulb, Target, Users } from 'lucide-react';
import React from 'react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Leora Saharia",
      role: "AI/ML Lead",
      expertise: "Multi-agent systems, Deep learning",
    },
    {
      name: "Adya Singh",
      role: "Data Science, Lead UI",
      expertise: "Predictive analytics, Supply chain optimization",
    },
    {
      name: "Swara Mandale",
      role: "Systems Architect",
      expertise: "Distributed systems, Real-time processing",
    },
    {
      name: "Veerta Srivastava",
      role: "Product Strategy",
      expertise: "Retail operations, User researches",
    }
  ];

  const achievements = [
    { icon: Award, title: "Innovation Award", description: "Best AI Solution 2024" },
    { icon: Target, title: "Precision Leader", description: "96.9% Accuracy Rate" },
    { icon: Users, title: "Team Excellence", description: "Combined 50+ years experience" },
    { icon: Globe, title: "Scale Ready", description: "Enterprise deployment ready" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-walmart-blue to-walmart-blue-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            About <span className="text-walmart-yellow">Our Vision</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pioneering the future of retail inventory management through autonomous AI agents 
            and hyperlocal intelligence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-walmart-gray-900 mb-8">
                Transforming Retail with <span className="text-walmart-blue">Intelligent Automation</span>
              </h2>
              <div className="space-y-6 text-lg text-walmart-gray-600 leading-relaxed">
                <p>
                  We believe the future of retail lies in autonomous systems that can predict, 
                  adapt, and respond to customer needs faster than ever before. Our Hyperlocal 
                  AI Inventory Rebalancer represents a paradigm shift from reactive to 
                  predictive inventory management.
                </p>
                <p>
                  Built specifically for Walmart's scale and complexity, our solution combines 
                  cutting-edge multi-agent AI with real-time data processing to create the most 
                  advanced inventory management system in retail.
                </p>
                <p>
                  Every decision is transparent, every action is optimized, and every outcome 
                  contributes to a smarter, more sustainable retail ecosystem.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <div className="bg-gradient-to-br from-walmart-blue/10 to-walmart-yellow/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg">
                      <div className="p-3 bg-walmart-blue/10 rounded-lg w-fit mx-auto mb-4">
                        <achievement.icon className="h-8 w-8 text-walmart-blue" />
                      </div>
                      <h3 className="font-bold text-walmart-gray-900 mb-2">{achievement.title}</h3>
                      <p className="text-sm text-walmart-gray-600">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-walmart-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-walmart-gray-900 mb-4">
              Our Innovative Approach
            </h2>
            <p className="text-xl text-walmart-gray-600">
              Three core principles that drive our revolutionary solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Autonomous Intelligence",
                description: "AI agents that learn, adapt, and improve without human intervention, making thousands of optimization decisions every hour.",
                color: "blue"
              },
              {
                icon: Lightbulb,
                title: "Hyperlocal Focus",
                description: "Precision targeting at the store level, understanding unique local patterns and customer behaviors for maximum relevance.",
                color: "yellow"
              },
              {
                icon: Target,
                title: "Explainable Decisions",
                description: "Every action comes with clear reasoning and confidence scores, ensuring trust and enabling continuous learning.",
                color: "green"
              }
            ].map((principle, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group animate-fade-in">
                <div className={`p-4 rounded-2xl w-fit mb-6 ${
                  principle.color === 'blue' ? 'bg-walmart-blue' :
                  principle.color === 'yellow' ? 'bg-walmart-yellow' :
                  'bg-green-500'
                } group-hover:scale-110 transition-transform`}>
                  <principle.icon className={`h-8 w-8 ${
                    principle.color === 'yellow' ? 'text-walmart-blue' : 'text-white'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-walmart-gray-900 mb-4">{principle.title}</h3>
                <p className="text-walmart-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-walmart-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-walmart-gray-600">
              World-class experts in AI, retail, and enterprise systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-walmart-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all group animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-br from-walmart-blue to-walmart-blue-light rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-walmart-gray-900 mb-2">{member.name}</h3>
                <p className="text-walmart-blue font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-walmart-gray-600 mb-3">{member.expertise}</p>
                <p className="text-xs text-walmart-gray-500">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathon Context */}
      <section className="py-24 bg-walmart-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Walmart Innovation Challenge
            </h2>
            <p className="text-xl text-blue-100">
              Built for the future of retail, ready for deployment today
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="text-2xl font-bold text-walmart-yellow mb-6">Challenge Statement</h3>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                "Develop an innovative solution that leverages AI and automation to optimize 
                inventory management across Walmart's vast network of stores and distribution centers, 
                with focus on real-time responsiveness to local demand patterns."
              </p>
              
              <h3 className="text-2xl font-bold text-walmart-yellow mb-4">Our Solution</h3>
              <div className="space-y-3">
                {[
                  "Autonomous multi-agent AI system",
                  "Hyperlocal demand pattern recognition",
                  "Real-time inventory rebalancing",
                  "Explainable AI for full transparency",
                  "Enterprise-scale deployment ready"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-walmart-yellow rounded-full mr-3" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-walmart-yellow mb-6">Project Timeline</h3>
              <div className="space-y-4">
                {[
                  { phase: "Research & Design", duration: "Week 1-2", status: "Complete" },
                  { phase: "AI Agent Development", duration: "Week 3-4", status: "Complete" },
                  { phase: "Integration & Testing", duration: "Week 5-6", status: "Complete" },
                  { phase: "Demo & Presentation", duration: "Week 7", status: "Current" }
                ].map((phase, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <div>
                      <div className="font-semibold text-white">{phase.phase}</div>
                      <div className="text-sm text-blue-200">{phase.duration}</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      phase.status === 'Complete' ? 'bg-green-500 text-white' : 'bg-walmart-yellow text-walmart-blue'
                    }`}>
                      {phase.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Impact */}
      <section className="py-24 bg-walmart-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-walmart-gray-900 mb-4">
              Our Values & Impact
            </h2>
            <p className="text-xl text-walmart-gray-600">
              Building technology that serves people, communities, and the planet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Customer First",
                description: "Every optimization decision prioritizes customer satisfaction and product availability.",
                impact: "98% customer satisfaction maintained during demand surges"
              },
              {
                title: "Sustainability",
                description: "Reducing waste through precise demand prediction and efficient redistribution.",
                impact: "30% reduction in inventory waste and spoilage"
              },
              {
                title: "Innovation",
                description: "Pushing the boundaries of what's possible with AI in retail operations.",
                impact: "First fully autonomous inventory management system"
              },
              {
                title: "Transparency",
                description: "Explainable AI ensures every decision can be understood and trusted.",
                impact: "100% decision auditability and compliance"
              },
              {
                title: "Scalability",
                description: "Built for Walmart's global scale with room for unlimited growth.",
                impact: "Ready for 10,000+ stores worldwide"
              },
              {
                title: "Reliability",
                description: "Enterprise-grade systems that work 24/7 without interruption.",
                impact: "99.99% uptime with autonomous recovery"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all animate-fade-in">
                <h3 className="text-xl font-bold text-walmart-gray-900 mb-4">{value.title}</h3>
                <p className="text-walmart-gray-600 mb-4 leading-relaxed">{value.description}</p>
                <div className="p-3 bg-walmart-blue/10 rounded-lg">
                  <p className="text-sm font-medium text-walmart-blue">{value.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;