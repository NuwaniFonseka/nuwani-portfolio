import React from "react";

const images = [
  "/Donate1.jpeg",
  "/Donate2.png",
];

const DonatePath = () => (
  <div className="bg-black text-white min-h-screen px-6 py-24">
    <div className="max-w-6xl mx-auto space-y-16">

      {/* Header */}
      <h1 className="text-4xl font-bold text-primary text-center">Donate Path</h1>

      {/* Image Section */}
      <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-primary mb-4">📸 Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`DonatePath Screenshot ${idx + 1}`}
              className="rounded-lg w-full h-56 object-cover border border-gray-700"
            />
          ))}
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-primary mb-4">📱 Project Overview</h2>
        <div className="text-gray-300 space-y-4 mb-4">
          <p>
            <strong>DonatePath</strong> is a Flutter-based mobile application designed to streamline and enhance the donation event management process for donors, volunteers, and nonprofit organizations. It creates a centralized platform that bridges the gap between those who want to give and those in need.
          </p>
          <p>
            The app leverages <strong>Flutter</strong> and <strong>Dart</strong> for a smooth cross-platform experience, while <strong>Firebase Auth</strong> and <strong>Cloud Firestore</strong> power secure authentication and real-time data handling.
          </p>
          <p>
            Key features include event creation, secure donation tracking, volunteer coordination, real-time notifications, and an analytics dashboard for organizations. Multi-role access ensures each user sees relevant content and tools.
          </p>
          <p>
            Designed with <strong>Figma</strong> and UX principles in mind, the interface ensures accessibility, clarity, and responsive performance across devices.
          </p>
          <p>
            This project reflects a real-world application of mobile and cloud development and highlights the power of tech in enabling transparency, collaboration, and community impact.
          </p>
        </div>
        <p className="text-gray-400">
          <strong>Skills:</strong> Flutter · Dart · Firebase · Firestore · Firebase Auth · UX · Figma · Cross-Platform Development
        </p>
      </div>
    </div>
  </div>
);

export default DonatePath;
