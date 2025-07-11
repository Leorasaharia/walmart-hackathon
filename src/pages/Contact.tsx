import { Calendar, CheckCircle, Mail, MapPin, Phone, Send, Users } from 'lucide-react';
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: 'demo',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen bg-walmart-gray-50 flex items-center justify-center">
        <div className="max-w-lg mx-auto text-center p-8">
          <div className="p-4 bg-green-500 rounded-full w-fit mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-walmart-gray-900 mb-4">
            Thank You!
          </h2>
          <p className="text-lg text-walmart-gray-600 mb-6">
            We've received your message and will get back to you within 24 hours. 
            Our team is excited to discuss how Hyperlocal AI can transform your inventory management.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-walmart-blue hover:bg-walmart-blue-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-walmart-blue to-walmart-blue-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Get in <span className="text-walmart-yellow">Touch</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to revolutionize your inventory management? Let's discuss how our 
            Hyperlocal AI can transform your retail operations.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-walmart-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-walmart-gray-900 mb-8">
                  Schedule a Demo
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-walmart-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-walmart-gray-300 rounded-lg focus:ring-2 focus:ring-walmart-blue focus:border-transparent outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-walmart-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-walmart-gray-300 rounded-lg focus:ring-2 focus:ring-walmart-blue focus:border-transparent outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-walmart-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-walmart-gray-300 rounded-lg focus:ring-2 focus:ring-walmart-blue focus:border-transparent outline-none transition-all"
                        placeholder="Walmart Inc."
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-walmart-gray-700 mb-2">
                        Your Role
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-walmart-gray-300 rounded-lg focus:ring-2 focus:ring-walmart-blue focus:border-transparent outline-none transition-all"
                        placeholder="Supply Chain Manager"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-walmart-gray-700 mb-2">
                      I'm interested in *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-walmart-gray-300 rounded-lg focus:ring-2 focus:ring-walmart-blue focus:border-transparent outline-none transition-all"
                    >
                      <option value="demo">Live Demo & Presentation</option>
                      <option value="pilot">Pilot Program Discussion</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="technical">Technical Deep Dive</option>
                      <option value="pricing">Pricing & Implementation</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-walmart-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-walmart-gray-300 rounded-lg focus:ring-2 focus:ring-walmart-blue focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your current inventory challenges and what you'd like to learn about our solution..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-walmart-blue hover:bg-walmart-blue-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl flex items-center justify-center group"
                  >
                    Schedule Demo
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up">
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-walmart-gray-900 mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-walmart-blue/10 rounded-lg mr-4">
                        <Mail className="h-6 w-6 text-walmart-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-walmart-gray-900">Email</h4>
                        <p className="text-walmart-gray-600">hyperlocal-ai@walmart-innovation.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="p-3 bg-walmart-blue/10 rounded-lg mr-4">
                        <Phone className="h-6 w-6 text-walmart-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-walmart-gray-900">Phone</h4>
                        <p className="text-walmart-gray-600">+91 (7880) 123-HYPER</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="p-3 bg-walmart-blue/10 rounded-lg mr-4">
                        <MapPin className="h-6 w-6 text-walmart-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-walmart-gray-900">Location</h4>
                        <p className="text-walmart-gray-600">Raipur, CG</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Demo Options */}
                <div className="bg-walmart-blue rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold text-walmart-yellow mb-6">
                    Demo Options
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-walmart-yellow mr-3" />
                      <span>30-minute live demo</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-walmart-yellow mr-3" />
                      <span>Technical deep dive session</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-walmart-yellow mr-3" />
                      <span>Pilot program discussion</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/10 rounded-lg">
                    <p className="text-sm text-blue-100">
                      <strong>Next available:</strong> Tomorrow at 2:00 PM IST
                    </p>
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-walmart-gray-100 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-walmart-gray-900 mb-6">
                    Quick Questions?
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-walmart-gray-900 mb-1">
                        How long is the demo?
                      </h4>
                      <p className="text-sm text-walmart-gray-600">
                        Standard demos are 30 minutes, with optional extended technical sessions.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-walmart-gray-900 mb-1">
                        What will you show?
                      </h4>
                      <p className="text-sm text-walmart-gray-600">
                        Live AI agent collaboration, real-time demand detection, and actual inventory rebalancing scenarios.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-walmart-gray-900 mb-1">
                        Is this ready for production?
                      </h4>
                      <p className="text-sm text-walmart-gray-600">
                        Yes! Our system is enterprise-ready and can be deployed across Walmart's network immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-walmart-yellow to-walmart-yellow-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-walmart-blue mb-6">
            Ready to Transform Your Inventory Management?
          </h2>
          <p className="text-xl text-walmart-blue/80 mb-8">
            Join the future of retail with autonomous AI agents working 24/7 to optimize your inventory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-walmart-blue hover:bg-walmart-blue-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl">
              Schedule Demo Now
            </button>
            <button className="border-2 border-walmart-blue text-walmart-blue hover:bg-walmart-blue hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
              Download Whitepaper
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;