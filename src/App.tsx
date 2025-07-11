import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import LiveDemo from './pages/LiveDemo';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';

type Page = 'home' | 'how-it-works' | 'live-demo' | 'features' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'how-it-works':
        return <HowItWorks />;
      case 'live-demo':
        return <LiveDemo />;
      case 'features':
        return <Features />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="animate-fade-in">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;