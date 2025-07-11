import React from 'react';
import { Brain, Zap, Shield, Truck, Globe, BarChart, Users, Leaf } from 'lucide-react';

const Features: React.FC = () => {
  const coreFeatures = [
    {
      icon: Brain,
      title: "Autonomous Multi-Agent System",
      description: "Specialized AI agents work in perfect harmony—demand forecasters detect patterns, transfer optimizers calculate routes, and logistics coordinators execute moves without human intervention.",
      benefits: [
        "Zero-latency decision making",
        "24/7 continuous monitoring",
        "Self-improving algorithms",
        "Human-free operations"
      ],
      color: "blue"
    },
    {
      icon: Zap,
      title: "Hyperlocal Demand Sensing",
      description: "Real-time integration of POS data, weather patterns, social media trends, and local events creates unprecedented visibility into micro-level demand patterns.",
      benefits: [
        "Sub-5-minute detection",
        "Multi-source data fusion",
        "Predictive trend analysis",
        "Location-specific insights"
      ],
      color: "yellow"
    },
    {
      icon: Shield,
      title: "Explainable AI Decisions",
      description: "Every inventory action comes with transparent rationale, confidence scores, and audit trails to ensure trust, compliance, and continuous learning.",
      benefits: [
        "Full decision transparency",
        "Compliance documentation",
        "Confidence scoring",
        "Audit trail tracking"
      ],
      color: "green"
    }
  ];

  const advancedCapabilities = [
    {
      icon: Truck,
      category: "Logistics Intelligence",
      title: "Dynamic Route Optimization",
      description: "AI continuously optimizes delivery routes based on real-time traffic, weather, and capacity constraints."
    },
    {
      icon: Globe,
      category: "Network Orchestration",
      title: "Multi-DC Coordination",
      description: "Seamlessly coordinate inventory across distribution centers, stores, and fulfillment networks."
    },
    {
      icon: BarChart,
      category: "Predictive Analytics",
      title: "Demand Pattern Learning",
      description: "Machine learning models identify seasonal, event-based, and emerging demand patterns."
    },
    {
      icon: Users,
      category: "Customer Experience",
      title: "Satisfaction Optimization",
      description: "Proactively prevent stockouts and optimize product availability for maximum customer satisfaction."
    },
    {
      icon: Leaf,
      category: "Sustainability",
      title: "Waste Reduction",
      description: "Minimize overstock and spoilage through precise demand forecasting and efficient redistribution."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-walmart-blue to-walmart-blue-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Powerful <span className="text-walmart-yellow">Features</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the comprehensive capabilities that make our Hyperlocal AI the most advanced 
            inventory management solution for enterprise retail.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-walmart-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-walmart-gray-900 mb-4">
              Core AI Capabilities
            </h2>
            <p className="text-xl text-walmart-gray-600">
              Three revolutionary technologies working together to transform inventory management
            </p>
          </div>

          <div className="space-y-16">
            {coreFeatures.map((feature, index) => (
              <div key={index} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row items-center gap-12`}>
                <div className="flex-1 animate-fade-in">
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-2xl mr-4 ${
                      feature.color === 'blue' ? 'bg-walmart-blue' :
                      feature.color === 'yellow' ? 'bg-walmart-yellow' :
                      'bg-green-500'
                    }`}>
                      <feature.icon className={`h-8 w-8 ${
                        feature.color === 'yellow' ? 'text-walmart-blue' : 'text-white'
                      }`} />
                    </div>
                    <h3 className="text-3xl font-bold text-walmart-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-walmart-gray-600 mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          feature.color === 'blue' ? 'bg-walmart-blue' :
                          feature.color === 'yellow' ? 'bg-walmart-yellow' :
                          'bg-green-500'
                        }`} />
                        <span className="text-walmart-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 animate-slide-up">
                  <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <div className="aspect-square bg-gradient-to-br from-walmart-gray-100 to-walmart-gray-200 rounded-xl flex items-center justify-center mb-6">
                      <feature.icon className={`h-24 w-24 ${
                        feature.color === 'blue' ? 'text-walmart-blue' :
                        feature.color === 'yellow' ? 'text-walmart-yellow' :
                        'text-green-500'
                      } animate-pulse-slow`} />
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-walmart-gray-900 mb-2">
                        Live System Status
                      </h4>
                      <div className="flex justify-center items-center text-green-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                        <span className="text-sm font-medium">Active & Optimizing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-walmart-gray-900 mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-walmart-gray-600">
              Comprehensive features designed for enterprise-scale retail operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedCapabilities.map((capability, index) => (
              <div key={index} className="bg-white border border-walmart-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all group animate-fade-in">
                <div className="p-3 bg-walmart-blue/10 rounded-lg w-fit mb-6 group-hover:bg-walmart-blue/20 transition-colors">
                  <capability.icon className="h-6 w-6 text-walmart-blue" />
                </div>
                <div className="text-sm font-medium text-walmart-yellow mb-2 uppercase tracking-wide">
                  {capability.category}
                </div>
                <h3 className="text-xl font-bold text-walmart-gray-900 mb-4">
                  {capability.title}
                </h3>
                <p className="text-walmart-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-walmart-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-walmart-gray-400">
              Built for enterprise scale with industry-leading performance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Performance Metrics */}
            <div className="bg-walmart-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-walmart-yellow mb-6">Performance Metrics</h3>
              <div className="space-y-6">
                {[
                  { metric: "Response Time", value: "< 5 minutes", description: "From detection to action" },
                  { metric: "Prediction Accuracy", value: "99.9%", description: "Demand forecasting precision" },
                  { metric: "System Uptime", value: "99.99%", description: "Enterprise-grade reliability" },
                  { metric: "Concurrent Stores", value: "10,000+", description: "Simultaneous monitoring" },
                  { metric: "Data Processing", value: "1TB/hour", description: "Real-time analytics capacity" },
                  { metric: "Agent Collaboration", value: "Real-time", description: "Millisecond coordination" }
                ].map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-walmart-gray-700">
                    <div>
                      <div className="font-semibold text-white">{spec.metric}</div>
                      <div className="text-sm text-walmart-gray-400">{spec.description}</div>
                    </div>
                    <div className="text-walmart-yellow font-bold text-lg">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration Capabilities */}
            <div className="bg-walmart-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-walmart-yellow mb-6">Integration Capabilities</h3>
              <div className="space-y-4">
                {[
                  { system: "Walmart POS Systems", status: "Native Integration" },
                  { system: "Weather APIs", status: "Real-time Feeds" },
                  { system: "Social Media Monitoring", status: "Multi-platform" },
                  { system: "Supply Chain Management", status: "Bi-directional" },
                  { system: "Customer Analytics", status: "360° View" },
                  { system: "Financial Systems", status: "Cost Optimization" },
                  { system: "Logistics Platforms", status: "Route Optimization" },
                  { system: "Compliance Systems", status: "Audit Ready" }
                ].map((integration, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-walmart-gray-700 rounded-lg">
                    <span className="font-medium text-white">{integration.system}</span>
                    <span className="text-green-400 text-sm font-medium">{integration.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 bg-walmart-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Security & Compliance
            </h2>
            <p className="text-xl text-blue-100">
              Enterprise-grade security with full regulatory compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Protection",
                features: ["End-to-end encryption", "Zero-trust architecture", "GDPR compliance", "SOC 2 certified"]
              },
              {
                title: "AI Ethics",
                features: ["Explainable decisions", "Bias detection", "Human oversight", "Audit trails"]
              },
              {
                title: "Enterprise Security",
                features: ["Multi-factor auth", "Role-based access", "Network isolation", "24/7 monitoring"]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-walmart-yellow mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white">
                      <Shield className="h-4 w-4 text-walmart-yellow mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;