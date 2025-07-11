import React, { useState, useEffect } from 'react';
import { Brain, Zap, Truck, AlertTriangle, CheckCircle, Play, Pause, RotateCcw, ExternalLink } from 'lucide-react';

const LiveDemo: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [metrics, setMetrics] = useState({
    demandSpike: 0,
    inventoryLevel: 100,
    customerSatisfaction: 95,
    transfersInitiated: 0
  });

  const demoSteps = [
    {
      title: "🌤️ Weather Alert Detected",
      description: "Severe thunderstorm warning issued for Austin, TX area",
      duration: 2000,
      action: () => setMetrics(prev => ({ ...prev, demandSpike: 15 }))
    },
    {
      title: "📱 Social Media Surge",
      description: "AI detects 400% increase in flashlight-related posts",
      duration: 1500,
      action: () => setMetrics(prev => ({ ...prev, demandSpike: 45 }))
    },
    {
      title: "🛒 POS Data Spike",
      description: "Real-time sales show 200% increase in emergency supplies",
      duration: 1500,
      action: () => setMetrics(prev => ({ ...prev, demandSpike: 85, inventoryLevel: 60 }))
    },
    {
      title: "🤖 Agent Collaboration",
      description: "Demand, Transfer, and Logistics agents reach consensus",
      duration: 2500,
      action: () => setMetrics(prev => ({ ...prev, transfersInitiated: 3 }))
    },
    {
      title: "🚛 Transfers Initiated",
      description: "Automated shipments from 3 nearby distribution centers",
      duration: 2000,
      action: () => setMetrics(prev => ({ ...prev, inventoryLevel: 95, transfersInitiated: 8 }))
    },
    {
      title: "✅ Crisis Averted",
      description: "Customer demand met, satisfaction maintained at 98%",
      duration: 2000,
      action: () => setMetrics(prev => ({ ...prev, customerSatisfaction: 98, inventoryLevel: 87 }))
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && currentStep < demoSteps.length) {
      interval = setTimeout(() => {
        demoSteps[currentStep].action();
        setCurrentStep(prev => prev + 1);
      }, demoSteps[currentStep].duration);
    }

    if (currentStep >= demoSteps.length && isRunning) {
      setIsRunning(false);
    }

    return () => clearTimeout(interval);
  }, [isRunning, currentStep]);

  const resetDemo = () => {
    setCurrentStep(0);
    setIsRunning(false);
    setMetrics({
      demandSpike: 0,
      inventoryLevel: 100,
      customerSatisfaction: 95,
      transfersInitiated: 0
    });
  };

  const toggleDemo = () => {
    if (currentStep >= demoSteps.length) {
      resetDemo();
    } else {
      setIsRunning(!isRunning);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-walmart-blue to-walmart-blue-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Live <span className="text-walmart-yellow">Demo</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Experience our AI agents responding to real-time demand surges and see the full system in action
          </p>
          <a
            href="https://walmartbackend-gtm7uheag29dxcvyg6j3gp-v2.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-walmart-yellow hover:bg-walmart-yellow-light text-walmart-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl group"
          >
            Launch Full Interactive Demo
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Embedded Streamlit Dashboard */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-walmart-gray-900 mb-4">
              Interactive AI Agent Dashboard
            </h2>
            <p className="text-xl text-walmart-gray-600 mb-6">
              Watch our multi-agent system detect demand surges and orchestrate inventory transfers in real-time
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <div className="flex items-center bg-green-100 px-4 py-2 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-800 font-medium">Live System Active</span>
              </div>
              <div className="flex items-center bg-walmart-blue/10 px-4 py-2 rounded-lg">
                <Brain className="h-4 w-4 text-walmart-blue mr-2" />
                <span className="text-walmart-blue font-medium">AI Agents Online</span>
              </div>
            </div>
          </div>

          {/* Streamlit Embed */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-walmart-gray-200">
            <div className="bg-walmart-blue text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Brain className="h-6 w-6 mr-3" />
                <h3 className="text-lg font-semibold">Hyperlocal AI Control Center</h3>
              </div>
              <a
                href="https://walmartbackend-gtm7uheag29dxcvyg6j3gp-v2.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-walmart-yellow hover:text-walmart-yellow-light transition-colors"
              >
                Open in New Tab
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="relative" style={{ paddingBottom: '75%', height: 0 }}>
              <iframe
                src="https://walmartbackend-gtm7uheag29dxcvyg6j3gp-v2.streamlit.app/?embed=true"
                className="absolute top-0 left-0 w-full h-full border-0"
                title="Hyperlocal AI Inventory Rebalancer Dashboard"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-walmart-gray-600 mb-4">
              The dashboard above shows real AI agents working together to optimize inventory across Walmart stores.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-walmart-gray-50 rounded-lg p-4">
                <Zap className="h-6 w-6 text-walmart-blue mx-auto mb-2" />
                <p className="text-sm font-medium text-walmart-gray-900">Real-time Detection</p>
                <p className="text-xs text-walmart-gray-600">Monitors demand patterns continuously</p>
              </div>
              <div className="bg-walmart-gray-50 rounded-lg p-4">
                <Brain className="h-6 w-6 text-walmart-blue mx-auto mb-2" />
                <p className="text-sm font-medium text-walmart-gray-900">Agent Collaboration</p>
                <p className="text-xs text-walmart-gray-600">Multiple AI agents work together</p>
              </div>
              <div className="bg-walmart-gray-50 rounded-lg p-4">
                <Truck className="h-6 w-6 text-walmart-blue mx-auto mb-2" />
                <p className="text-sm font-medium text-walmart-gray-900">Autonomous Execution</p>
                <p className="text-xs text-walmart-gray-600">Transfers happen automatically</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Demo Simulation */}
      <section className="py-12 bg-walmart-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-walmart-gray-900 mb-4">
              Quick Scenario Simulation
            </h2>
            <p className="text-xl text-walmart-gray-600">
              See a condensed version of how our system responds to demand surges
            </p>
          </div>

          {/* Control Panel */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold text-walmart-gray-900">
                  Austin, TX - Store #1234
                </h3>
                <p className="text-walmart-gray-600">
                  Emergency Supplies Category • Thunderstorm Scenario
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={toggleDemo}
                  className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all ${
                    isRunning
                      ? 'bg-walmart-gray-200 text-walmart-gray-700 hover:bg-walmart-gray-300'
                      : 'bg-walmart-blue text-white hover:bg-walmart-blue-light'
                  }`}
                >
                  {isRunning ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  {isRunning ? 'Pause' : currentStep >= demoSteps.length ? 'Restart Demo' : 'Start Demo'}
                </button>
                <button
                  onClick={resetDemo}
                  className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2 border-2 border-walmart-gray-300 text-walmart-gray-700 hover:bg-walmart-gray-50 transition-all"
                >
                  <RotateCcw className="h-5 w-5" />
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-walmart-gray-700">Demand Spike</h4>
                <Zap className={`h-6 w-6 ${metrics.demandSpike > 50 ? 'text-red-500 animate-bounce' : 'text-walmart-gray-400'}`} />
              </div>
              <div className="text-3xl font-bold text-walmart-blue mb-2">
                +{metrics.demandSpike}%
              </div>
              <div className="w-full bg-walmart-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-walmart-yellow to-red-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min(metrics.demandSpike, 100)}%` }}
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-walmart-gray-700">Inventory Level</h4>
                <AlertTriangle className={`h-6 w-6 ${metrics.inventoryLevel < 70 ? 'text-red-500 animate-pulse' : 'text-green-500'}`} />
              </div>
              <div className="text-3xl font-bold text-walmart-blue mb-2">
                {metrics.inventoryLevel}%
              </div>
              <div className="w-full bg-walmart-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-1000 ${
                    metrics.inventoryLevel < 70 ? 'bg-gradient-to-r from-red-500 to-yellow-500' : 'bg-gradient-to-r from-green-500 to-walmart-blue'
                  }`}
                  style={{ width: `${metrics.inventoryLevel}%` }}
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-walmart-gray-700">Customer Satisfaction</h4>
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-walmart-blue mb-2">
                {metrics.customerSatisfaction}%
              </div>
              <div className="w-full bg-walmart-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${metrics.customerSatisfaction}%` }}
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-walmart-gray-700">Active Transfers</h4>
                <Truck className={`h-6 w-6 ${metrics.transfersInitiated > 0 ? 'text-walmart-blue animate-bounce' : 'text-walmart-gray-400'}`} />
              </div>
              <div className="text-3xl font-bold text-walmart-blue mb-2">
                {metrics.transfersInitiated}
              </div>
              <div className="text-sm text-walmart-gray-600">
                Distribution centers
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-walmart-gray-900 mb-6">Event Timeline</h4>
              <div className="space-y-4">
                {demoSteps.map((step, index) => (
                  <div key={index} className={`flex items-start gap-4 p-4 rounded-lg transition-all ${
                    index < currentStep ? 'bg-green-50 border-l-4 border-green-500' :
                    index === currentStep && isRunning ? 'bg-walmart-yellow/20 border-l-4 border-walmart-yellow animate-pulse' :
                    'bg-walmart-gray-50 border-l-4 border-walmart-gray-300'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      index < currentStep ? 'bg-green-500 text-white' :
                      index === currentStep && isRunning ? 'bg-walmart-yellow text-walmart-blue' :
                      'bg-walmart-gray-300 text-walmart-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <h5 className="font-semibold text-walmart-gray-900">{step.title}</h5>
                      <p className="text-walmart-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Agent Activity */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-walmart-gray-900 mb-6">Agent Activity</h4>
              <div className="space-y-4">
                {[
                  { name: "Demand Forecasting Agent", status: currentStep >= 2 ? "active" : "standby", activity: "Analyzing 247% surge pattern" },
                  { name: "Transfer Optimization Agent", status: currentStep >= 3 ? "active" : "standby", activity: "Calculating optimal DC sources" },
                  { name: "Logistics Coordination Agent", status: currentStep >= 4 ? "active" : "standby", activity: "Routing 8 emergency shipments" },
                  { name: "Risk Assessment Agent", status: currentStep >= 1 ? "monitoring" : "standby", activity: "Weather impact evaluation" }
                ].map((agent, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="p-2 bg-walmart-blue/10 rounded-lg">
                      <Brain className={`h-5 w-5 ${
                        agent.status === "active" ? "text-walmart-blue animate-pulse" :
                        agent.status === "monitoring" ? "text-walmart-yellow" :
                        "text-walmart-gray-400"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-walmart-gray-900">{agent.name}</h5>
                      <p className="text-sm text-walmart-gray-600">{agent.activity}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      agent.status === "active" ? "bg-green-100 text-green-800" :
                      agent.status === "monitoring" ? "bg-walmart-yellow/20 text-walmart-blue" :
                      "bg-walmart-gray-100 text-walmart-gray-600"
                    }`}>
                      {agent.status}
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Decision Explanation */}
              {currentStep >= 4 && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-walmart-blue">
                  <h5 className="font-semibold text-walmart-blue mb-2">AI Decision Rationale</h5>
                  <p className="text-sm text-walmart-gray-700">
                    "Based on 85% demand spike correlation with weather patterns and 3.2x social media sentiment, 
                    recommending immediate transfer of 500 units from DCs within 50-mile radius. 
                    Confidence: 94% • Expected customer satisfaction: 98%"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Results */}
      {currentStep >= demoSteps.length && (
        <section className="py-16 bg-walmart-blue">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Demo Complete - Crisis Averted! 🎉
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              The AI agents successfully prevented stockouts and maintained customer satisfaction during the demand surge.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-walmart-yellow">5:32</div>
                <div className="text-blue-200 text-sm">Total Response Time</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-walmart-yellow">98%</div>
                <div className="text-blue-200 text-sm">Customer Satisfaction</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-walmart-yellow">$84K</div>
                <div className="text-blue-200 text-sm">Revenue Protected</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-walmart-yellow">0</div>
                <div className="text-blue-200 text-sm">Stockouts</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetDemo}
                className="bg-walmart-yellow hover:bg-walmart-yellow-light text-walmart-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl"
              >
                Run Another Scenario
              </button>
              <a
                href="https://walmartbackend-gtm7uheag29dxcvyg6j3gp-v2.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-walmart-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all group"
              >
                Explore Full Dashboard
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-walmart-yellow to-walmart-yellow-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-walmart-blue mb-6">
            👉 Experience the Future of Retail Inventory—Today
          </h2>
          <p className="text-xl text-walmart-blue/80 mb-8">
            See how autonomous AI agents can transform inventory management at Walmart scale
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://walmartbackend-gtm7uheag29dxcvyg6j3gp-v2.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-walmart-blue hover:bg-walmart-blue-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl group"
            >
              Launch Interactive Demo
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="border-2 border-walmart-blue text-walmart-blue hover:bg-walmart-blue hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
              Schedule Presentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveDemo;