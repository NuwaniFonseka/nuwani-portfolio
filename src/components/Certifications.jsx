import React, { useState } from "react";

const Certifications = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
        title: "Java (Basic) – HackerRank",
        image: "/sample_cert.jpg",
        file: "/sample_cert.jpg",
      },
      {
        title: "JavaScript (Basic) – HackerRank",
        image: "/sample_cert.jpg",
        file: "/sample_cert.jpg",
      },
      {
        title: "Front-End React – IBM (Coursera)",
        image: "/sample_cert.jpg",
        file: "/sample_cert.jpg",
      },
      {
        title: "UX Design – Google (Coursera)",
        image: "/sample_cert.jpg",
        file: "/sample_cert.jpg",
      },
      {
        title: "Postman API Fundamentals Student Expert",
        image: "/sample_cert.jpg",
        file: "/sample_cert.jpg",
      },
      {
        title: "Generative AI – Coursera",
        image: "/sample_cert.jpg",
        file: "/sample_cert.jpg",
      },
      {
        title: "IELTS – Academic | Score: 7.5",
        image: "/sample_cert.jpg",
        file: "/sample_cert.jpg",
      },
  ];

  return (
    <section
      id="certifications"
      className="bg-[#121212] text-white px-6 py-24 scroll-mt-24"
      
    >
      <h2 className="text-4xl font-bold mb-10 text-center">
        <span className="text-primary">Certifications</span>
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelectedCert(cert);
              setModalOpen(true);
            }}
            className="bg-[#1a1a1a] hover:bg-[#222] border border-gray-700 text-left p-4 rounded shadow transition"
          >
            <span className="text-lg text-primary">📄</span>{" "}
            <span className="ml-2">{cert.title}</span>
          </button>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-[#1a1a1a] p-6 rounded-lg max-w-lg w-full shadow-lg relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-4 text-white text-xl"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-center mb-4 text-primary">
              {selectedCert.title}
            </h3>
            <img
              src={selectedCert.image}
              alt="Certificate"
              className="rounded mb-4 w-full"
            />
            <div className="text-center">
              <a
                href={selectedCert.file}
                download
                className="bg-primary text-black px-4 py-2 rounded font-bold hover:opacity-90"
              >
                Download Certificate
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
