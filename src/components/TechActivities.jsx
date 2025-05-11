// src/components/TechActivities.jsx
import React, { useState } from "react";
import ModalGallery from "./ModalGallery";

const techActivities = [
  {
    icon: "🏢",
    title: "IFS Industry Visit",
    desc: "Participated in an industry visit to IFS R&D International in Colombo, Sri Lanka, organized to provide real-world insights into enterprise software and agile practices. The session included facility tours, professional workshops, and networking with IFS employees, bridging academic learning with industry application.",
    images: ["/events/ifs1.jpg", "/events/ifs2.jpg", "/events/ifs3.jpg", "/events/IFS.png","/events/ifs4.jpg","/events/ifs5.jpg"],
  },
  {
    icon: "💡",
    title: "Perituza Workshop @ Cinnamon Lakeside",
    desc: "Attended a workshop by Perituza on innovation, digital transformation, and career pathways.",
    images: ["/events/perituza1.jpeg", "/events/perituza1.jpeg", "/events/perituza1.jpeg"],
  },
  {
    icon: "🚀",
    title: "Postman GenAI + API Tour 2025",
    desc: "Explored Generative AI and modern API innovation during the Sri Lanka tour hosted by Postman and Pieces for Developers. Hands-on sessions and future-focused discussions enhanced our developer journey.",
    images: ["/events/postman1.jpeg", "/events/postman2.jpeg", "/events/postman3.png","/events/postman4.png",],
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
