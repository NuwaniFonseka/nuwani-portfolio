import React, { useState, useEffect } from "react";

const images = [
  "/public/foodflix/food1.jpg", 
  "/public/foodflix/food2.jpg", 
];

const FoodFlix = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoading, setImageLoading] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleImageLoad = (index) => {
    setImageLoading(prev => ({ ...prev, [index]: false }));
  };

  const handleImageStart = (index) => {
    setImageLoading(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/10 to-lime-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-lime-500/10 to-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className={`relative z-10 px-6 py-24 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="text-center transform transition-all duration-1000 delay-200">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 bg-clip-text text-transparent mb-4 animate-pulse">
              FoodFlix
            </h1>
            <p className="text-xl text-gray-400 mb-6">Cloud-Native Food Ordering & Delivery System</p>
            <div className="w-32 h-1 bg-gradient-to-r from-lime-400 to-green-500 mx-auto rounded-full mb-6"></div>
            
            {/* GitHub Link */}
            <div className="flex justify-center">
              <a
                href="https://github.com/NuwaniFonseka/FoodFlix"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-lime-500 to-green-600 text-black px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-lime-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
              >
                <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
          
          {/* Image Section */}
          <div className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-700/50 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:shadow-lime-500/20 hover:border-lime-500/30 hover:scale-[1.02]`}>
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text text-transparent mb-6 flex items-center">
              <span className="mr-3 text-2xl animate-bounce">📸</span>
              Screenshots
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
              {images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`group relative overflow-hidden rounded-xl transform transition-all duration-500 delay-${(idx + 1) * 100} hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-lime-500/25`}
                  style={{ animationDelay: `${(idx + 1) * 200}ms` }}
                >
                  {imageLoading[idx] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-xl">
                      <div className="w-8 h-8 border-4 border-lime-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img
                    src={img}
                    alt={`FoodFlix Screenshot ${idx + 1}`}
                    className="rounded-xl w-full h-56 object-cover border-2 border-gray-600 group-hover:border-lime-500 transition-all duration-300 filter group-hover:brightness-110"
                    onLoadStart={() => handleImageStart(idx)}
                    onLoad={() => handleImageLoad(idx)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    View {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Description Section */}
          <div className={`bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-700/50 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:shadow-lime-500/20 hover:border-lime-500/30`}>
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent mb-6 flex items-center">
              <span className="mr-3 text-2xl animate-bounce delay-100">🍕</span>
              Project Overview
            </h2>
            
            <div className="text-gray-300 space-y-6 mb-8 leading-relaxed">
              <p className="transform transition-all duration-700 delay-600 hover:text-white hover:scale-[1.01]">
                <strong className="text-lime-400">FoodFlix</strong> is a comprehensive cloud-native food ordering and delivery platform inspired by UberEats, built using modern microservices architecture. This scalable system was developed as a university project at SLIIT, designed to handle the complete food delivery workflow from restaurant management to customer satisfaction.
              </p>
              <p className="transform transition-all duration-700 delay-700 hover:text-white hover:scale-[1.01]">
                As part of the development team, I took primary responsibility for the <strong className="text-lime-400">user authentication system</strong>, <strong className="text-green-400">payment integration</strong>, and <strong className="text-emerald-400">notification services</strong>, focusing on creating secure, seamless user experiences and reliable transaction processing.
              </p>
              <p className="transform transition-all duration-700 delay-800 hover:text-white hover:scale-[1.01]">
                The platform was built using <strong className="text-lime-400">React.js</strong> for the frontend, <strong className="text-green-400">Node.js</strong> and <strong className="text-emerald-400">Express.js</strong> for backend services, and <strong className="text-lime-300">MongoDB</strong> for data persistence. The system is containerized with <strong className="text-green-300">Docker</strong> and orchestrated using <strong className="text-lime-300">Kubernetes</strong> for scalable deployment.
              </p>
              <p className="transform transition-all duration-700 delay-900 hover:text-white hover:scale-[1.01]">
                Key features include real-time <strong className="text-lime-400">order tracking</strong>, secure <strong className="text-green-400">payment processing via Stripe</strong>, <strong className="text-emerald-400">role-based access control</strong>, and comprehensive <strong className="text-lime-400">email notification system</strong>, creating a complete food delivery ecosystem similar to industry-leading platforms.
              </p>
            </div>
            
            {/* My Contributions Section */}
            <div className="bg-gradient-to-br from-lime-900/30 to-green-900/30 backdrop-blur-sm p-6 rounded-xl mb-8 border border-lime-500/20 transform transition-all duration-700 delay-1000 hover:scale-[1.02] hover:shadow-lime-500/25">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent mb-4 flex items-center">
                <span className="mr-3 text-xl animate-pulse">👨‍💻</span>
                My Primary Contributions
              </h3>
              <div className="text-gray-300 space-y-4">
                {[
                  { icon: "🔐", title: "User Authentication System", desc: "Designed and implemented comprehensive user registration and login functionality with secure password hashing, JWT token management, and session handling for seamless user experiences." },
                  { icon: "👥", title: "Role-Based Access Control", desc: "Developed sophisticated authorization system with multiple user roles (Customer, Restaurant Owner, Delivery Partner, Admin) ensuring proper access permissions and security boundaries." },
                  { icon: "💳", title: "Stripe Payment Integration", desc: "Implemented secure payment processing using Stripe API, including payment intent creation, webhook handling, refund processing, and PCI-compliant transaction management." },
                  { icon: "📧", title: "Email Notification System", desc: "Built comprehensive email notification service using SendGrid for order confirmations, status updates, payment receipts, and delivery notifications with custom email templates." },
                  { icon: "🔔", title: "Real-time Notifications", desc: "Developed notification infrastructure for instant updates on order status changes, payment confirmations, and delivery tracking information." },
                  { icon: "🛡️", title: "Security Implementation", desc: "Implemented security best practices including input validation, SQL injection prevention, XSS protection, and secure API endpoint authentication." },
                  { icon: "📱", title: "Responsive User Interface", desc: "Created responsive authentication flows and payment interfaces ensuring seamless user experience across desktop and mobile devices." }
                ].map((item, idx) => (
                  <div key={idx} className={`transform transition-all duration-500 delay-${(idx + 1) * 100} hover:translate-x-2 hover:scale-[1.02] p-3 rounded-lg hover:bg-gradient-to-r hover:from-lime-900/20 hover:to-green-900/20 border-l-4 border-lime-500/50 hover:border-lime-400`}>
                    <p>
                      <strong className="text-lime-400 flex items-center gap-2">
                        <span className="text-lg">{item.icon}</span>
                        {item.title}:
                      </strong> 
                      <span className="text-gray-300 hover:text-white transition-colors duration-300">{item.desc}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Complete System Features */}
            <div className="mt-8 mb-8 transform transition-all duration-700 delay-1200">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent mb-6 flex items-center">
                <span className="mr-3 text-xl animate-spin-slow">✨</span>
                Complete System Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { feature: "User Authentication & Authorization", desc: "Secure login/registration with role-based access control", type: "my" },
                  { feature: "Payment Processing", desc: "Stripe integration for secure card payments and transaction handling", type: "my" },
                  { feature: "Email Notification System", desc: "Automated email services for order updates and confirmations", type: "my" },
                  { feature: "Restaurant Management", desc: "Complete restaurant profile and menu management system", type: "team" },
                  { feature: "Order Management", desc: "Full order lifecycle from placement to delivery completion", type: "team" },
                  { feature: "Real-time Order Tracking", desc: "Live tracking of order status and delivery progress", type: "team" },
                  { feature: "Delivery Partner System", desc: "Driver assignment, route optimization, and delivery management", type: "team" },
                  { feature: "Admin Dashboard", desc: "Comprehensive admin panel for system monitoring and management", type: "team" },
                  { feature: "Customer Reviews & Ratings", desc: "Review system for restaurants and delivery experiences", type: "team" },
                  { feature: "Search & Filtering", desc: "Advanced search and filtering for restaurants and food items", type: "team" },
                  { feature: "Cart Management", desc: "Persistent shopping cart with item customization options", type: "team" },
                  { feature: "Microservices Architecture", desc: "Scalable containerized services with Docker and Kubernetes", type: "team" }
                ].map((item, idx) => (
                  <div key={idx} className={`p-4 rounded-lg border transform transition-all duration-500 delay-${idx * 50} hover:scale-105 hover:shadow-lg ${item.type === 'my' ? 'bg-gradient-to-r from-lime-900/20 to-green-900/20 border-lime-500/30 hover:border-lime-400' : 'bg-gradient-to-r from-gray-800/20 to-gray-700/20 border-gray-600/30 hover:border-gray-500'}`}>
                    <h4 className={`font-semibold ${item.type === 'my' ? 'text-lime-400' : 'text-gray-300'} flex items-center justify-between`}>
                      {item.feature}
                      {item.type === 'my' && <span className="text-xs bg-lime-500/20 px-2 py-1 rounded-full animate-pulse">My Implementation</span>}
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Technical Implementation */}
            <div className="mt-8 mb-8 transform transition-all duration-700 delay-1400">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent mb-6 flex items-center">
                <span className="mr-3 text-xl animate-bounce delay-200">🔧</span>
                Technical Implementation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                {[
                  { tech: "Frontend Framework", detail: "React.js with modern hooks and state management for dynamic user interfaces", color: "lime", highlight: false },
                  { tech: "Backend Services", detail: "Node.js with Express.js RESTful API architecture for microservices", color: "green", highlight: false },
                  { tech: "Database", detail: "MongoDB for flexible document storage with collections for users, orders, and restaurants", color: "emerald", highlight: false },
                  { tech: "Authentication System", detail: "JWT-based authentication with bcrypt password hashing and role-based authorization (My implementation)", color: "lime", highlight: true },
                  { tech: "Payment Gateway", detail: "Stripe API integration for secure payment processing and webhook handling (My implementation)", color: "green", highlight: true },
                  { tech: "Email Service", detail: "SendGrid integration for transactional emails and notification system (My implementation)", color: "emerald", highlight: true },
                  { tech: "Containerization", detail: "Docker containerization for all microservices with optimized images", color: "lime", highlight: false },
                  { tech: "Orchestration", detail: "Kubernetes deployment with auto-scaling and load balancing capabilities", color: "green", highlight: false },
                  { tech: "Styling Framework", detail: "Tailwind CSS for responsive, utility-first design across all components", color: "emerald", highlight: false },
                  { tech: "Security Implementation", detail: "Input validation, XSS protection, and secure API endpoints (My implementation)", color: "lime", highlight: true },
                  { tech: "Real-time Communication", detail: "WebSocket integration for live order tracking and notifications", color: "green", highlight: false }
                ].map((item, idx) => (
                  <div key={idx} className={`p-4 rounded-lg border transform transition-all duration-500 delay-${idx * 75} hover:scale-105 hover:-translate-y-1 ${item.highlight ? `bg-gradient-to-r from-${item.color}-900/30 to-${item.color}-800/30 border-${item.color}-500/40 hover:border-${item.color}-400 hover:shadow-${item.color}-500/25` : 'bg-gray-800/30 border-gray-600/30 hover:border-gray-500'}`}>
                    <h4 className={`font-semibold text-${item.color}-400 flex items-center justify-between`}>
                      {item.tech}
                      {item.highlight && <span className="text-xs bg-gradient-to-r from-lime-500/20 to-green-500/20 px-2 py-1 rounded-full animate-pulse">My Work</span>}
                    </h4>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Skills and Info */}
            <div className="space-y-4 transform transition-all duration-700 delay-1600">
              <div className="p-4 bg-gradient-to-r from-lime-900/20 to-green-900/20 rounded-lg border border-lime-500/20 hover:border-lime-400/40 transition-all duration-300">
                <p className="text-gray-400">
                  <strong className="text-lime-400">My Technical Skills Demonstrated:</strong> 
                  <span className="text-gray-300"> React.js · Node.js · Express.js · MongoDB · JWT Authentication · Stripe API · SendGrid · RESTful APIs · Role-Based Access Control · Payment Processing · Email Services · Security Implementation · Microservices · Docker · Kubernetes</span>
                </p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-gray-800/20 to-gray-700/20 rounded-lg border border-gray-600/20 hover:border-gray-500/40 transition-all duration-300">
                <p className="text-gray-400">
                  <strong className="text-green-400">Team Technologies:</strong> 
                  <span className="text-gray-300"> Tailwind CSS · WebSocket · Container Orchestration · Load Balancing · Order Management · Restaurant Management · Delivery Tracking · Admin Dashboard</span>
                </p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <p className="text-gray-400">
                  <strong className="text-green-400">Duration:</strong> May 2025 | 
                  <strong className="text-lime-400"> Institution:</strong> SLIIT University Project | 
                  <strong className="text-emerald-400"> Architecture:</strong> Microservices with Docker & Kubernetes
                </p>
              </div>

              {/* GitHub Repository Link */}
              <div className="text-center pt-6">
                <a
                  href="https://github.com/NuwaniFonseka/FoodFlix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-lime-500/30 hover:border-lime-400 text-lime-400 hover:text-lime-300 px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group hover:shadow-lg hover:shadow-lime-500/25"
                >
                  <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="flex items-center gap-1">
                    <span>📂</span>
                    Explore Source Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-20">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-gradient-to-r from-lime-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-lime-500/50 transform hover:scale-110 transition-all duration-300 animate-bounce group"
        >
          <svg className="w-6 h-6 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default FoodFlix;