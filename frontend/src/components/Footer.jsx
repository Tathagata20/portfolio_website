// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-6 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/Tathagata20"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-200 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tathagata-bhattacharjee-a3b112295/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-200 transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="mailto:tatbat201201@gmail.com"
            className="flex items-center gap-2 hover:text-gray-200 transition-colors"
          >
            <FaEnvelope className="w-5 h-5" />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
