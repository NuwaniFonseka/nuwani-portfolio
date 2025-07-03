import React, { useState, useEffect } from "react";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import TechActivities from "./components/TechActivities";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer for section animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-lime-400/10 to-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-500/10 to-lime-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/5 to-lime-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 w-full bg-black/80 backdrop-blur-lg px-6 py-4 z-50 shadow-2xl border-b border-gray-800/50 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-xl font-bold text-white hover:text-lime-400 transition-colors duration-300 cursor-pointer">
            Nuwani
          </h1>
          <nav className="space-x-6">
            {["Home", "About", "Projects", "Contact"].map((item, idx) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`hover:text-lime-400 font-bold transition-all duration-300 transform hover:scale-110 relative ${
                  activeSection === item.toLowerCase() ? 'text-lime-400' : 'text-white'
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-lime-400 animate-pulse"></div>
                )}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HOME Section */}
      <section
        id="home"
        className="relative px-6 py-32 min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 scroll-mt-24 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-lime-400 opacity-20 blur-[100px] rounded-full z-0 animate-pulse" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[300px] h-[300px] bg-green-400 opacity-20 blur-[80px] rounded-full z-0 animate-pulse delay-500" />
        
        <div className={`z-10 flex-1 space-y-6 text-center md:text-left transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight animate-fade-in">
            Nuwani <span className="text-lime-400 animate-pulse">Fonseka</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed transform transition-all duration-700 delay-500 hover:text-white">
            I'm a Software Engineering undergraduate driven by creativity and
            real-world problem-solving. I build user-centric web applications
            with modern tech, clean design, and thoughtful code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-lime-400 text-black px-8 py-3 rounded-full font-bold hover:bg-lime-300 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-lime-400/50 transform hover:-translate-y-1"
            >
              Let's Talk
            </a>
            <a
              href="#projects"
              className="border-2 border-lime-400 text-lime-400 px-8 py-3 rounded-full font-bold hover:bg-lime-400 hover:text-black transition-all duration-300 hover:scale-105 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-lime-400/30"
            >
              View Work
            </a>
            <a
              href="/NuwaniResume.pdf"
              download
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-lime-400 hover:text-black hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 transform hover:-translate-y-1 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 group-hover:animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12"
                />
              </svg>
              Download CV
            </a>
          </div>
        </div>
        
        <div className={`z-10 flex-1 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="relative group max-w-sm mx-auto">
            <img
              src="/girl5.jpg"
              alt="Hero"
              className="w-full rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-700 ease-out object-cover aspect-[4/5] border border-gray-700/30 hover:border-gray-600/50 bg-gradient-to-br from-gray-800 to-gray-900"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>

      {/* ABOUT Section */}
      <section
        id="about"
        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg text-white px-6 py-24 scroll-mt-24 opacity-0 translate-y-10 transition-all duration-1000 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-lime-900/5 to-green-900/5"></div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center relative z-10">
          About <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="max-w-5xl mx-auto space-y-12 text-gray-200 relative z-10">
          {/* Intro */}
          <p className="text-xl md:text-2xl leading-relaxed text-center transform transition-all duration-700 hover:scale-[1.02] hover:text-white">
            I'm{" "}
            <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent font-semibold text-2xl md:text-3xl">
              Nuwani Fonseka
            </span>
            , a Software Engineering undergraduate at{" "}
            <span className="text-white font-medium">SLIIT</span> focused on
            building impactful digital products that solve real-world problems.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base">
            {[
              {
                icon: "🎯",
                title: "Current Role",
                content: "Software Engineer Intern @ Kode Tech (Jul 2024 – Feb 2025)"
              },
              {
                icon: "🎓",
                title: "Education",
                content: "BSc (Hons) in IT – Software Engineering (2022–2026) @ SLIIT\nSt. Peter's College Colombo 04 – Negombo Branch"
              },
              {
                icon: "🌐",
                title: "Languages",
                content: "English (Professional) • Sinhala (Native)"
              },
              {
                icon: "📊",
                title: "IELTS Test Score",
                content: "Overall: 7.5\nListening: 7.5 • Reading: 8.5 • Speaking: 7.5 • Writing: 6.5"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-lime-500/20 transition-all duration-500 border border-gray-700/50 hover:border-lime-500/30 transform hover:scale-105 hover:-translate-y-2 group`}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <h3 className="text-lime-400 font-bold mb-3 flex items-center gap-2 text-lg group-hover:text-lime-300 transition-colors">
                  <span className="text-2xl group-hover:animate-bounce">{item.icon}</span>
                  {item.title}
                </h3>
                <p className="leading-relaxed whitespace-pre-line group-hover:text-white transition-colors">
                  {item.content}
                </p>
              </div>
            ))}

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-lime-500/20 transition-all duration-500 border border-gray-700/50 hover:border-lime-500/30 md:col-span-2 transform hover:scale-105 hover:-translate-y-2 group">
              <h3 className="text-lime-400 font-bold mb-3 flex items-center gap-2 text-lg group-hover:text-lime-300 transition-colors">
                <span className="text-2xl group-hover:animate-bounce">💼</span>
                Soft Skills
              </h3>
              <p className="flex flex-wrap gap-3">
                {["Teamwork", "Time Management", "Public Speaking", "Problem Solving", "Leadership"].map((skill, skillIdx) => (
                  <span
                    key={skill}
                    className="bg-gradient-to-r from-lime-900/30 to-green-900/30 border border-lime-500/20 px-4 py-2 rounded-full hover:border-lime-400/40 hover:bg-gradient-to-r hover:from-lime-800/40 hover:to-green-800/40 transition-all duration-300 transform hover:scale-110 cursor-default"
                    style={{ animationDelay: `${skillIdx * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="text-center pt-10">
            <a
              href="https://www.linkedin.com/in/nuwani-fonseka-5a87ba234/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-lime-400 to-green-500 text-black px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-lime-400/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
            >
              <span className="flex items-center gap-2">
                <span className="group-hover:animate-bounce">🔗</span>
                Connect on LinkedIn
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS Section */}
      <section
        id="projects"
        className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg text-white px-6 py-24 scroll-mt-24 opacity-0 translate-y-10 transition-all duration-1000 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/5 to-lime-900/5"></div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center relative z-10">
          My <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
          {[
            {
              title: "Automated Testing Project",
              image: "/testing.jpeg",
              desc: "Automation test suite using <strong>Cypress</strong> for <strong>UI/API testing and Integration testing</strong> on a <strong>React</strong> app. Included <strong>login validation</strong> and <strong>result logging</strong>.",
              link: "/projects/automation",
            },
            {
              title: "FoodFlix – Food Delivery System",
              image: "/foodflix.jpeg",
              desc: "<strong>Microservices-based</strong> system with <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, <strong>JWT</strong>, and <strong>Stripe</strong>.",
              link: "/projects/foodflix",
            },
            {
              title: "School Management System",
              image: "/school-management.jpg",
              desc: "<strong>Java</strong> project using <strong>OSGi</strong> and <strong>Microkernel architecture</strong> for fee and library modules.",
              link: "/projects/school",
            },
            {
              title: "Countries Explorer",
              image: "/countries.png",
              desc: "Responsive <strong>React</strong> app using <strong>REST Countries API</strong>, <strong>Tailwind CSS</strong>, and <strong>Jest</strong>.",
              link: "/projects/countries",
            },
            {
              title: "Finance Tracker",
              image: "/finance.jpg",
              desc: "<strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong> API for budgeting, reports, and <strong>JWT</strong> auth.",
              link: "/projects/financetracker",
            },
            {
              title: "Shopping Eye",
              image: "/shoppingg.jpg",
              desc: "<strong>MERN</strong> app with <strong>QR scanning</strong> for mall navigation.",
              link: "/projects/shoppingeye",
            },
            {
              title: "Zero Waste",
              image: "/waste.jpg",
              desc: "<strong>MERN</strong> waste management app with <strong>scheduling</strong> and <strong>analytics</strong>.",
              link: "/projects/zerowaste",
            },
            {
              title: "Vehicle Rental System",
              image: "/carrent.jpg",
              desc: "<strong>MERN</strong> app for vehicle rentals with <strong>CRUD</strong> and booking flow.",
              link: "/projects/vehiclerental",
            },
            {
              title: "DonatePath",
              image: "/Donate.jpg",
              desc: "<strong>Flutter</strong> app for donations with <strong>Firebase</strong>, <strong>notifications</strong>, and <strong>analytics</strong>.",
              link: "/projects/donatepath",
            },
          ].map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              className={`bg-gradient-to-br from-white to-gray-100 text-black p-6 rounded-xl shadow-lg hover:shadow-lime-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 hover:rotate-1 group border-2 border-transparent hover:border-lime-400/30`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-lime-600 transition-colors duration-300">
                {project.title}
              </h3>
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[200px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p
                className="text-[15px] text-gray-800 leading-relaxed group-hover:text-gray-900 transition-colors duration-300"
                dangerouslySetInnerHTML={{ __html: project.desc }}
              ></p>
            </a>
          ))}
        </div>
      </section>

      <TechActivities />

      <section
        id="skills"
        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg text-white px-6 py-24 scroll-mt-24 opacity-0 translate-y-10 transition-all duration-1000 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-lime-900/5 to-green-900/5"></div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center relative z-10">
          My <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">Skills</span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center relative z-10">
          {[
            "React.js",
            "Tailwind CSS",
            "Firebase",
            "Shopify",
            "HTML / CSS",
            "Vite",
            "Node.js",
            "Express.js",
            "MongoDB",
            "SQL / MySQL",
            "JavaScript",
            "Java",
            "Docker",
            "Kubernetes",
            "Kotlin",
            "WordPress",
            "Selenium",
            "Cypress",
          ].map((skill, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 hover:border-lime-400 text-gray-200 hover:text-lime-400 py-4 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-lime-500/20 cursor-default transform hover:scale-110 hover:-translate-y-2 group`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <span className="group-hover:font-semibold transition-all duration-300">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Certifications />

      {/* CONTACT Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black to-gray-900 text-gray-400 text-center py-8 border-t border-gray-800">
        <p className="hover:text-lime-400 transition-colors duration-300">
          © {new Date().getFullYear()} Nuwani. All rights reserved.
        </p>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
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
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .animate-fade-in {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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

export default App;