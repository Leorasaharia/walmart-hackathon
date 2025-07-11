import React from 'react';
import { Brain, Mail, Github, Linkedin } from 'lucide-react';

type Page = 'home' | 'how-it-works' | 'live-demo' | 'features' | 'about' | 'contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-walmart-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-walmart-blue rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Hyperlocal AI Inventory Rebalancer</h3>
                <p className="text-walmart-gray-400 text-sm">Autonomous. Intelligent. Walmart-Ready.</p>
              </div>
            </div>
            <p className="text-walmart-gray-400 text-sm leading-relaxed max-w-lg">
              Revolutionary multi-agent AI platform that autonomously detects, predicts, and rebalances 
              inventory across stores and fulfillment centers in response to hyperlocal demand surges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { id: 'home' as Page, label: 'Home' },
                { id: 'how-it-works' as Page, label: 'How It Works' },
                { id: 'live-demo' as Page, label: 'Live Demo' },
                { id: 'features' as Page, label: 'Features' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-walmart-gray-400 hover:text-walmart-yellow transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-walmart-gray-400 hover:text-walmart-yellow transition-colors"
                >
                  About Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-walmart-gray-400 hover:text-walmart-yellow transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
            
            <div className="flex space-x-4 mt-4">
              <div className="p-2 bg-walmart-gray-800 rounded-lg hover:bg-walmart-blue transition-colors cursor-pointer">
                <Mail className="h-4 w-4" />
              </div>
              <div className="p-2 bg-walmart-gray-800 rounded-lg hover:bg-walmart-blue transition-colors cursor-pointer">
                <Github className="h-4 w-4" />
              </div>
              <div className="p-2 bg-walmart-gray-800 rounded-lg hover:bg-walmart-blue transition-colors cursor-pointer">
                <Linkedin className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-walmart-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-walmart-gray-400 text-sm">
              © 2025 Hyperlocal AI Inventory Rebalancer. Built for Walmart Innovation Challenge.
            </p>
            <p className="text-walmart-gray-400 text-sm mt-2 md:mt-0">
              Powered by Agentic AI • Real-time Analytics • Autonomous Operations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;