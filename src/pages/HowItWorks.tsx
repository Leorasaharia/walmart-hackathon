import React, { useState } from 'react';
import { Brain, Eye, Zap, Truck, CheckCircle, ArrowRight, Play } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      icon: Eye,
      title: "Hyperlocal Detection",
      subtitle: "Real-time Demand Sensing",
      description: "AI agents continuously monitor POS data, weather patterns, social media trends, and local events to detect emerging demand patterns.",
      details: [
        "Real-time POS data analysis across all channels",
        "Weather impact modeling for seasonal products",
        "Social media sentiment and viral trend detection",
        "Local event calendar integration",
        "Competitor pricing and stock monitoring"
      ]
    },
    {
      id: 1,
      icon: Brain,
      title: "Agent Collaboration",
      subtitle: "Multi-Agent Decision Making",
      description: "Specialized AI agents work together: demand forecasters, transfer optimizers, and logistics coordinators collaborate to develop the optimal response.",
      details: [
        "Demand Forecasting Agent predicts quantity and timing",
        "Transfer Optimization Agent calculates best sourcing",
        "Logistics Coordination Agent plans efficient routes",
        "Risk Assessment Agent evaluates potential issues",
        "Consensus building through agent negotiation"
      ]
    },
    {
      id: 2,
      icon: Zap,
      title: "Autonomous Execution",
      subtitle: "Rapid Response Implementation",
      description: "Once consensus is reached, the system automatically initiates inventory transfers, updates systems, and tracks progress in real-time.",
      details: [
        "Automated purchase orders and transfer requests",
        "Real-time supplier and DC coordination",
        "Dynamic routing optimization during transit",
        "Continuous progress monitoring and adjustment",
        "Exception handling and contingency activation"
      ]
    },
    {
      id: 3,
      icon: CheckCircle,
      title: "Continuous Learning",
      subtitle: "Explainable Optimization",
      description: "Every decision is tracked and explained, with outcomes fed back to improve future predictions and build institutional knowledge.",
      details: [
        "Transparent decision rationale documentation",
        "Outcome tracking and performance analysis",
        "Model retraining with new data patterns",
        "Confidence scoring for all predictions",
        "Human oversight and intervention capabilities"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-walmart-blue to-walmart-blue-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            How It <span className="text-walmart-yellow">Works</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Discover the revolutionary four-stage process that enables autonomous, 
            hyperlocal inventory rebalancing across Walmart's entire network.
          </p>
          <button className="bg-walmart-yellow hover:bg-walmart-yellow-light text-walmart-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl flex items-center justify-center mx-auto group">
            Watch Process Demo
            <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-walmart-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step Navigation */}
          <div className="flex flex-col lg:flex-row gap-4 mb-16 bg-white rounded-2xl p-4 shadow-lg">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`flex-1 p-6 rounded-xl transition-all text-left ${
                  activeStep === index
                    ? 'bg-walmart-blue text-white shadow-lg'
                    : 'hover:bg-walmart-gray-100 text-walmart-gray-700'
                }`}
              >
                <div className="flex items-center mb-3">
                  <div className={`p-2 rounded-lg mr-3 ${
                    activeStep === index ? 'bg-walmart-yellow/20' : 'bg-walmart-blue/10'
                  }`}>
                    <step.icon className={`h-6 w-6 ${
                      activeStep === index ? 'text-walmart-yellow' : 'text-walmart-blue'
                    }`} />
                  </div>
                  <div className="text-sm font-medium opacity-80">Step {index + 1}</div>
                </div>
                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-sm opacity-80">{step.subtitle}</p>
              </button>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-walmart-blue rounded-2xl mr-4">
                  {React.createElement(steps[activeStep].icon, {
                    className: "h-8 w-8 text-walmart-yellow"
                  })}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-walmart-gray-900">
                    {steps[activeStep].title}
                  </h2>
                  <p className="text-walmart-blue font-medium">
                    {steps[activeStep].subtitle}
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-walmart-gray-600 mb-8 leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="space-y-4">
                {steps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-1 bg-walmart-yellow/20 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-4 w-4 text-walmart-blue" />
                    </div>
                    <p className="text-walmart-gray-700">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Representation */}
            <div className="animate-slide-up">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-walmart-gray-900 mb-2">
                    Live Process Visualization
                  </h3>
                  <p className="text-walmart-gray-600">
                    Example: Local festival detected in Austin, TX
                  </p>
                </div>

                {/* Process Flow Visualization */}
                <div className="space-y-6">
                  {/* Data Inputs */}
                  <div className="flex justify-center space-x-4">
                    {['POS', 'Weather', 'Social', 'Events'].map((source, index) => (
                      <div key={source} className={`px-3 py-2 rounded-lg text-xs font-medium ${
                        activeStep >= 0 ? 'bg-walmart-blue text-white animate-pulse' : 'bg-walmart-gray-200 text-walmart-gray-500'
                      }`}>
                        {source}
                      </div>
                    ))}
                  </div>

                  {/* Agent Processing */}
                  <div className="flex justify-center">
                    <div className={`px-6 py-4 rounded-xl border-2 ${
                      activeStep >= 1 ? 'border-walmart-yellow bg-walmart-yellow/10 animate-bounce-slow' : 'border-walmart-gray-300'
                    }`}>
                      <Brain className={`h-8 w-8 mx-auto mb-2 ${
                        activeStep >= 1 ? 'text-walmart-blue' : 'text-walmart-gray-400'
                      }`} />
                      <p className="text-xs font-medium text-center">Multi-Agent Processing</p>
                    </div>
                  </div>

                  {/* Execution */}
                  <div className="flex justify-center space-x-4">
                    {['Transfer', 'Route', 'Track'].map((action, index) => (
                      <div key={action} className={`px-3 py-2 rounded-lg text-xs font-medium ${
                        activeStep >= 2 ? 'bg-walmart-yellow text-walmart-blue animate-pulse' : 'bg-walmart-gray-200 text-walmart-gray-500'
                      }`}>
                        {action}
                      </div>
                    ))}
                  </div>

                  {/* Learning */}
                  <div className="flex justify-center">
                    <div className={`px-4 py-2 rounded-lg text-xs font-medium ${
                      activeStep >= 3 ? 'bg-green-100 text-green-800 animate-pulse' : 'bg-walmart-gray-200 text-walmart-gray-500'
                    }`}>
                      📊 Learning & Optimization
                    </div>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-8 flex justify-between items-center">
                  <div className="flex space-x-2">
                    {steps.map((_, index) => (
                      <div key={index} className={`w-3 h-3 rounded-full ${
                        index <= activeStep ? 'bg-walmart-blue' : 'bg-walmart-gray-300'
                      }`} />
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                    className="text-walmart-blue hover:text-walmart-blue-light flex items-center text-sm font-medium group"
                  >
                    Next Step
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Scenario */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-walmart-gray-900 mb-4">
              Real-World Scenario
            </h2>
            <p className="text-xl text-walmart-gray-600">
              See how the system handles a complex, multi-factor demand surge
            </p>
          </div>

          <div className="bg-gradient-to-br from-walmart-blue to-walmart-blue-light rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Hurricane Laura Approaches Texas Coast
                </h3>
                <div className="space-y-4 text-blue-100">
                  <p><strong className="text-walmart-yellow">12:00 PM:</strong> Weather agent detects hurricane path prediction</p>
                  <p><strong className="text-walmart-yellow">12:05 PM:</strong> Social media agent confirms panic buying trends</p>
                  <p><strong className="text-walmart-yellow">12:10 PM:</strong> Demand forecasting agent predicts 300% surge in water, batteries, flashlights</p>
                  <p><strong className="text-walmart-yellow">12:15 PM:</strong> Transfer optimization agent calculates optimal DC sources</p>
                  <p><strong className="text-walmart-yellow">12:20 PM:</strong> Logistics agent initiates emergency shipments</p>
                  <p><strong className="text-walmart-yellow">12:25 PM:</strong> All 47 affected stores receive additional inventory</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4">System Response Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-walmart-yellow">5 min</div>
                    <div className="text-sm">Detection to Action</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-walmart-yellow">47</div>
                    <div className="text-sm">Stores Restocked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-walmart-yellow">98%</div>
                    <div className="text-sm">Customer Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-walmart-yellow">$2.1M</div>
                    <div className="text-sm">Revenue Protected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;