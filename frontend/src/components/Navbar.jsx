// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // icons for menu

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = links.length - 1; i >= 0; i--) {
        const section = document.getElementById(links[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActive(links[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-blue-950 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Portfolio Title */}
        <h1 className="text-xl md:text-2xl font-bold text-white">
          TATHAGATA BHATTACHARJEE
        </h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 mr-12 text-lg font-medium">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-125 ${
                  active === link.id
                    ? "bg-white text-blue-600 shadow-md"
                    : "text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 bg-blue-900 px-6 py-4">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                  active === link.id
                    ? "bg-white text-blue-600 shadow-md"
                    : "text-white"
                }`}
                onClick={() => setMenuOpen(false)} // close menu on click
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
