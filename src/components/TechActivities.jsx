// src/components/TechActivities.jsx
import React, { useState } from "react";
import ModalGallery from "./ModalGallery";

const techActivities = [
  {
    icon: "🏢",
    title: "IFS Industry Visit",
    desc: "Participated in a guided industry visit to IFS HQ. Learned about enterprise software and agile workflows.",
    images: ["/events/ifs1.jpg", "/events/ifs2.jpg", "/events/ifs1.jpg", "/events/ifs2.jpg"],
  },
  {
    icon: "💡",
    title: "Perituza Workshop @ Cinnamon Lakeside",
    desc: "Attended a workshop by Perituza on innovation, digital transformation, and career pathways.",
    images: ["/events/perituza1.jpeg", "/events/perituza1.jpeg", "/events/perituza1.jpeg"],
  },
  {
    icon: "🎤",
    title: "SLIIT Career Week – Tech Panel Discussion",
    desc: "Panel discussions with tech professionals on internships, trends, and branding.",
    images: ["/events/careerweek1.jpg", "/events/careerweek1.jpg"],
  },
];

const TechActivities = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="activities" className="bg-[#111111] text-white px-6 py-24 scroll-mt-24" >
      <h2 className="text-4xl font-bold mb-12 text-center">
        Tech <span className="text-primary">Activities</span> & Industry Engagements
      </h2>
      <div className="space-y-6 max-w-5xl mx-auto">
        {techActivities.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelected(item)}
            className="w-full text-left bg-[#1c1c1c] p-6 rounded-lg shadow hover:shadow-lg transition block"
          >
            <h3 className="text-xl font-semibold text-primary mb-1">
              {item.icon} {item.title}
            </h3>
            <p className="text-gray-300">{item.desc}</p>
          </button>
        ))}
      </div>

      {selected && (
        <ModalGallery
          images={selected.images}
          title={selected.title}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
};

export default TechActivities;
