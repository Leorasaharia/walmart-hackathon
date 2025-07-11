import React, { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';

type Page = 'home' | 'how-it-works' | 'live-demo' | 'features' | 'about' | 'contact';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'how-it-works' as Page, label: 'How It Works' },
    { id: 'live-demo' as Page, label: 'Live Demo' },
    { id: 'features' as Page, label: 'Features' },
    { id: 'about' as Page, label: 'About' },
    { id: 'contact' as Page, label: 'Contact' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-walmart-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavigate('home')}
          >
            <div className="p-2 bg-walmart-blue rounded-lg group-hover:bg-walmart-blue-light transition-colors">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-walmart-blue">Hyperlocal AI</h1>
              <p className="text-xs text-walmart-gray-600 -mt-1">Inventory Rebalancer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-sm font-medium transition-colors hover:text-walmart-blue ${
                  currentPage === item.id
                    ? 'text-walmart-blue border-b-2 border-walmart-yellow pb-1'
                    : 'text-walmart-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => handleNavigate('live-demo')}
              className="bg-walmart-yellow hover:bg-walmart-yellow-light text-walmart-blue px-6 py-2 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              Try Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-walmart-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-walmart-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`text-left text-sm font-medium transition-colors hover:text-walmart-blue ${
                    currentPage === item.id
                      ? 'text-walmart-blue'
                      : 'text-walmart-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavigate('live-demo')}
                className="bg-walmart-yellow hover:bg-walmart-yellow-light text-walmart-blue px-4 py-2 rounded-lg font-semibold transition-colors text-left w-fit"
              >
                Try Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;