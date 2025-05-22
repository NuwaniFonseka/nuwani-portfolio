import React from "react";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import TechActivities from "./components/TechActivities";

const App = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black px-6 py-4 z-50 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Nuwani</h1>
        <nav className="space-x-6">
          <a href="#home" className="hover:text-primary font-bold">
            Home
          </a>
          <a href="#about" className="hover:text-primary font-bold">
            About
          </a>
          <a href="#projects" className="hover:text-primary font-bold">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary font-bold">
            Contact
          </a>
        </nav>
      </header>

      {/* HOME Section */}
      <section
        id="home"
        className="relative px-6 py-32 min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 scroll-mt-24"
      >
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary opacity-20 blur-[100px] rounded-full z-0" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[300px] h-[300px] bg-mint opacity-20 blur-[80px] rounded-full z-0" />
        <div className="z-10 flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-5xl font-extrabold leading-tight">
            Crafting <span className="text-primary">Impactful</span> Digital{" "}
            <br />
            Solutions with <span className="text-primary">Passion</span>
          </h2>
          <p className="text-grayish max-w-xl mx-auto md:mx-0">
            I'm a Software Engineering undergraduate driven by creativity and
            real-world problem-solving. I build user-centric web applications
            with modern tech, clean design, and thoughtful code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-primary text-black px-6 py-3 rounded-full font-bold hover:opacity-90"
            >
              Let’s Talk
            </a>
            <a
              href="#projects"
              className="border border-primary text-primary px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-black transition-all"
            >
              View Work
            </a>
            <a
              href="/NuwaniResume.pdf"
              download
              className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-black hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
        <div className="z-10 flex-1">
          <img
            src="/girl5.jpg"
            alt="Hero"
            className="rounded-xl w-full max-w-sm mx-auto shadow-lg"
          />
        </div>
      </section>

      {/* ABOUT Section */}
      <section
        id="about"
        className="bg-[#111111] text-white px-6 py-24 scroll-mt-24"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="max-w-5xl mx-auto space-y-12 text-gray-200">
          {/* Intro */}
          <p className="text-xl leading-relaxed text-center">
            I'm{" "}
            <span className="text-primary font-semibold text-2xl">
              Nuwani Fonseka
            </span>
            , a Software Engineering undergraduate at{" "}
            <span className="text-white font-medium">SLIIT</span> focused on
            building impactful digital products that solve real-world problems.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base">
            <div className="bg-[#1c1c1c] p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-primary font-bold mb-2">🎯 Current Role</h3>
              <p>Software Engineer Intern @ Kode Tech (Jul 2024 – Feb 2025)</p>
            </div>

            <div className="bg-[#1c1c1c] p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-primary font-bold mb-2">🎓 Education</h3>
              <p>
                BSc (Hons) in IT – Software Engineering (2022–2026) @ SLIIT
                <br />
                St. Peter’s College Colombo 04 – Negombo Branch
              </p>
            </div>

            <div className="bg-[#1c1c1c] p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-primary font-bold mb-2">🌐 Languages</h3>
              <p>English (Professional) • Sinhala (Native)</p>
            </div>

            <div className="bg-[#1c1c1c] p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-primary font-bold mb-2">
                📊 IELTS Test Score
              </h3>
              <p>
                Overall: <span className="text-white font-medium">7.5</span>
                <br />
                Listening: 7.5 • Reading: 8.5 • Speaking: 7.5 • Writing: 6.5
              </p>
            </div>

            <div className="bg-[#1c1c1c] p-6 rounded-lg shadow hover:shadow-lg transition md:col-span-2">
              <h3 className="text-primary font-bold mb-2">💼 Soft Skills</h3>
              <p className="flex flex-wrap gap-2">
                <span className="bg-[#2a2a2a] px-3 py-1 rounded-full">
                  Teamwork
                </span>
                <span className="bg-[#2a2a2a] px-3 py-1 rounded-full">
                  Time Management
                </span>
                <span className="bg-[#2a2a2a] px-3 py-1 rounded-full">
                  Public Speaking
                </span>
                <span className="bg-[#2a2a2a] px-3 py-1 rounded-full">
                  Problem Solving
                </span>
                <span className="bg-[#2a2a2a] px-3 py-1 rounded-full">
                  Leadership
                </span>
              </p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="text-center pt-10">
            <a
              href="https://www.linkedin.com/in/nuwani-fonseka-5a87ba234/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-black px-6 py-3 rounded-full font-bold shadow hover:opacity-90 transition"
            >
              🔗 Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS Section */}
      <section
        id="projects"
        className="bg-[#0c0c0c] text-white px-6 py-24 scroll-mt-24"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Individual Project Card */}
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
              desc: "<strong>MERN</strong> app with <strong>QR scanning</strong>for mall navigation.",
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
              className="bg-white text-black p-6 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold mb-4 text-center">
                {project.title}
              </h3>
              <img
                src={project.image}
                alt={project.title}
                className="rounded mb-4 w-full h-[200px] object-cover"
              />
              <p
                className="text-[15px] text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: project.desc }}
              ></p>
            </a>
          ))}
        </div>
      </section>

      <TechActivities />

      <section
        id="skills"
        className="bg-[#0c0c0c] text-white px-6 py-24 scroll-mt-24"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
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
              className="bg-[#1a1a1a] border border-gray-700 hover:border-primary text-gray-200 hover:text-primary py-4 px-4 rounded-lg transition duration-300 shadow-sm hover:shadow-primary/20 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <Certifications />

      {/* CONTACT Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-black text-grayish text-center py-6">
        © {new Date().getFullYear()} Nuwani. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
