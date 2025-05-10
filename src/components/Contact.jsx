import React from "react";
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  GitHubIcon,
  TikTokIcon,
  YouTubeIcon,
} from "../assets/SocialIcons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white px-6 py-24 scroll-mt-24"
      
    >
      <h2 className="text-4xl font-bold mb-8 text-center">
        Contact <span className="text-primary">Me</span>
      </h2>

      <div className="text-center space-y-4 text-lg">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:nuwanifonseka@gmail.com"
            className="text-primary underline hover:text-green-400"
          >
            nuwanifonseka@gmail.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a
            href="tel:+94770758438"
            className="text-primary underline hover:text-green-400"
          >
            +94 770 758 438
          </a>
        </p>
        <p>
          <strong>Location:</strong>{" "}
          <a
            href="https://www.google.com/maps/place/+Negombo,+Sri+Lanka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-green-400"
          >
            Negombo, Sri Lanka
          </a>
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 pt-10">
        <a
          href="https://linkedin.com/in/nuwani-fonseka-5a87ba234"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-primary hover:scale-125 transition-transform duration-200"
        >
          {LinkedInIcon}
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-primary hover:scale-125 transition-transform duration-200"
        >
          {InstagramIcon}
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-primary hover:scale-125 transition-transform duration-200"
        >
          {FacebookIcon}
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-primary hover:scale-125 transition-transform duration-200"
        >
          {GitHubIcon}
        </a>
        <a
          href="https://tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="hover:text-primary hover:scale-125 transition-transform duration-200"
        >
          {TikTokIcon}
        </a>
        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="hover:text-primary hover:scale-125 transition-transform duration-200"
        >
          {YouTubeIcon}
        </a>
      </div>
    </section>
  );
};

export default Contact;
