import React, { useState, useEffect } from "react";

const images = [
  "/public/shopping-eye/shop1.jpg", 
  "/public/shopping-eye/shop4.jpg", 
  "/public/shopping-eye/shop5.jpg", 
];

const ShoppingEye = () => {
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
              Shopping Eye
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-green-500 mx-auto rounded-full"></div>
          </div>
          {/* GitHub Link */}
            <div className="flex justify-center">
              <a
                href="https://github.com/NuwaniFonseka/Shopping-Eye-Extended_Shopping-Mall-Application"
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
          {/* Image Section */}
          <div className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-700/50 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:shadow-lime-500/20 hover:border-lime-500/30 hover:scale-[1.02]`}>
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text text-transparent mb-6 flex items-center">
              <span className="mr-3 text-2xl animate-bounce">📸</span>
              Screenshots
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
                    alt={`Shopping Eye Screenshot ${idx + 1}`}
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
              <span className="mr-3 text-2xl animate-bounce delay-100">🛒</span>
              Project Overview
            </h2>
            
            <div className="text-gray-300 space-y-6 mb-8 leading-relaxed">
              <p className="transform transition-all duration-700 delay-600 hover:text-white hover:scale-[1.01]">
                <strong className="text-lime-400">Shopping Eye</strong> is an innovative MERN stack-based Shopping Mall Navigation System developed as a collaborative university project at SLIIT. This comprehensive system was designed to revolutionize the shopping experience through advanced navigation features, interactive mall exploration, and intelligent shop management capabilities.
              </p>
              <p className="transform transition-all duration-700 delay-700 hover:text-white hover:scale-[1.01]">
                As part of a three-member development team including <strong className="text-green-400">Tiny Vilan</strong> and <strong className="text-emerald-400">Yasiru</strong>, I took primary responsibility for the shop management backend, analytics systems, and business intelligence tools, focusing on creating comprehensive solutions for shop owners and enhancing the customer experience.
              </p>
              <p className="transform transition-all duration-700 delay-800 hover:text-white hover:scale-[1.01]">
                The system was built using <strong className="text-lime-400">React.js</strong> for the frontend, <strong className="text-green-400">Node.js</strong> and <strong className="text-emerald-400">Express.js</strong> for the backend API, and <strong className="text-lime-300">MongoDB</strong> for data management. The interface is styled with <strong className="text-green-300">Tailwind CSS</strong> to ensure a modern, responsive design across all devices.
              </p>
              <p className="transform transition-all duration-700 delay-900 hover:text-white hover:scale-[1.01]">
                The project features advanced <strong className="text-lime-400">skin tone and body type-based clothing recommendations</strong> tailored to individual user preferences, along with precise <strong className="text-green-400">location mapping</strong> that shows users exactly where specific clothing items can be found within the shopping mall, creating a truly personalized and efficient shopping experience.
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
                  { icon: "🏪", title: "Complete Shop Management CRUD System", desc: "Designed and implemented full Create, Read, Update, Delete operations for shop profiles, enabling shop owners to manage their business information, operating hours, contact details, and store policies." },
                  { icon: "📦", title: "Product Inventory Management", desc: "Developed comprehensive CRUD functionality for shop items, allowing shop owners to add, edit, update, and remove products with detailed information including images, descriptions, pricing, and availability." },
                  { icon: "📊", title: "Individual Shop Dashboards", desc: "Created personalized dashboard interfaces for each shop, providing shop owners with centralized access to their business metrics, performance indicators, and management tools." },
                  { icon: "🔥", title: "Popular Products Analytics", desc: "Implemented real-time tracking and display systems to identify and showcase the most popular products for each shop, helping shop owners understand customer preferences and optimize their inventory." },
                  { icon: "📈", title: "Sales Analytics & Reporting", desc: "Developed comprehensive analytics engine that generates interactive charts and exportable PDF reports, providing shop owners with detailed insights into their sales performance, trends, and customer behavior patterns." },
                  { icon: "💬", title: "Customer Feedback System", desc: "Built a complete feedback management system that displays customer reviews and ratings for relevant shops, enabling shop owners to monitor their reputation and respond to customer concerns." },
                  { icon: "🗺️", title: "Clothing Location Integration", desc: "Implemented location mapping functionality that shows users the exact mall location where specific clothing items matching their preferences can be found, enhancing the shopping navigation experience." }
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
            
            {/* Team Project Features */}
            <div className="mt-8 mb-8 transform transition-all duration-700 delay-1200">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent mb-6 flex items-center">
                <span className="mr-3 text-xl animate-spin-slow">✨</span>
                Complete System Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { feature: "QR Code Scanning", desc: "Instant location identification through strategically placed QR codes", type: "team" },
                  { feature: "3D Mall Visualization", desc: "Interactive Three.js-powered 3D model for immersive exploration", type: "team" },
                  { feature: "Advanced Navigation", desc: "Step-by-step directions with optimal route planning", type: "team" },
                  { feature: "Shop Profile Management", desc: "Complete CRUD operations for shop information", type: "my" },
                  { feature: "Product Inventory System", desc: "Full CRUD functionality for shop items and product catalogs", type: "my" },
                  { feature: "Personalized Shop Dashboards", desc: "Individual dashboards for each shop owner with key metrics", type: "my" },
                  { feature: "Popular Products Tracking", desc: "Real-time identification and display of most popular items per shop", type: "my" },
                  { feature: "Sales Analytics Engine", desc: "Interactive charts and PDF report generation for business insights", type: "my" },
                  { feature: "Customer Feedback Management", desc: "Rating and review system with feedback display for shops", type: "my" },
                  { feature: "Personalized Clothing Recommendations", desc: "Skin tone and body type-based clothing suggestions tailored to user preferences", type: "team" },
                  { feature: "Clothing Location Mapping", desc: "Shows exact mall locations where recommended clothing items can be found", type: "my" },
                  { feature: "Responsive Design", desc: "Seamless experience across desktop, tablet, and mobile devices", type: "team" }
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
                  { tech: "Frontend", detail: "React.js with modern hooks and state management for dynamic user interfaces", color: "lime", highlight: false },
                  { tech: "Backend", detail: "Node.js with Express.js RESTful API architecture for scalable server operations", color: "green", highlight: false },
                  { tech: "Database", detail: "MongoDB for flexible data storage with collections for shops, products, users, and feedback", color: "emerald", highlight: false },
                  { tech: "3D Graphics", detail: "Three.js for interactive 3D mall modeling and visualization (Team implementation)", color: "green", highlight: false },
                  { tech: "Styling", detail: "Tailwind CSS for responsive, utility-first design across all components", color: "lime", highlight: false },
                  { tech: "QR Integration", detail: "Camera API integration for seamless QR code scanning (Team implementation)", color: "emerald", highlight: false },
                  { tech: "My Backend Systems", detail: "CRUD API endpoints for shop and product management with authentication and authorization", color: "lime", highlight: true },
                  { tech: "Analytics Engine", detail: "Custom analytics system with Chart.js for data visualization and PDF generation (My implementation)", color: "green", highlight: true },
                  { tech: "Dashboard Architecture", detail: "Component-based dashboard system with real-time data updates (My implementation)", color: "emerald", highlight: true },
                  { tech: "Feedback System", detail: "Rating aggregation system with review management and display functionality (My implementation)", color: "lime", highlight: true },
                  { tech: "Recommendation Engine", detail: "Algorithm for skin tone and body type-based clothing suggestions with location mapping", color: "green", highlight: false }
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
                  <span className="text-gray-300"> React.js · Node.js · Express.js · MongoDB · RESTful APIs · CRUD Operations · Data Analytics · Chart.js · PDF Generation · Dashboard Development · Feedback Systems · Backend Architecture · Database Design · Business Intelligence</span>
                </p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-gray-800/20 to-gray-700/20 rounded-lg border border-gray-600/20 hover:border-gray-500/40 transition-all duration-300">
                <p className="text-gray-400">
                  <strong className="text-green-400">Team Technologies:</strong> 
                  <span className="text-gray-300"> Three.js · QR Code Integration · 3D Modeling · Tailwind CSS · Responsive Design · Recommendation Algorithms</span>
                </p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <p className="text-gray-400">
                  <strong className="text-green-400">Duration:</strong> October 2024 | 
                  <strong className="text-lime-400"> Institution:</strong> SLIIT University Project | 
                  <strong className="text-emerald-400"> Team:</strong> 3 members (Tiny Vilan, Yasiru, and myself)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-20">
        <button className="bg-gradient-to-r from-lime-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-lime-500/50 transform hover:scale-110 transition-all duration-300 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ShoppingEye;