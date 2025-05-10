import React from "react";

const Projects = () => (
  <section className="min-h-screen bg-mint text-black px-6 py-20">
    <h2 className="text-4xl font-bold mb-6 text-center">My <span className="text-primary">Projects</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-2xl font-bold">Vehicle Rental System</h3>
        <p className="text-grayish">Full stack MERN project to manage vehicles and bookings</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-2xl font-bold">IELTS Master App</h3>
        <p className="text-grayish">Figma + Mobile UI/UX Design for IELTS Learning</p>
      </div>
    </div>
  </section>
);

export default Projects;
