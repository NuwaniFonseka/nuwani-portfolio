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
    title: "Perituza Workshop",
    desc: "Attended a workshop by Perituza on innovation, digital transformation, and career pathways.",
    images: ["/events/perituza1.jpg", "/events/perituza2.jpg", "/events/perituza3.jpg", "/events/perituz4.jpg", "/events/perituza13.jpg", "/events/perituza6.jpg","/events/perituza8.jpg", "/events/perituza9.jpg", "/events/perituza12.jpg", "/events/perituza11.jpg",],
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
  <p className="text-gray-300 mb-2">{item.desc}</p>
  <div className="text-sm text-gray-400 flex items-center gap-2">
    <span>📸 View Photos</span>
  </div>
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
