// src/components/ProjectCard.jsx
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiMysql
} from "react-icons/si";
import { DiJava } from "react-icons/di";

export default function ProjectCard({ title, description, techStack,image }) {
  // Map tech names to icons
  const techIcons = {
    HTML: <SiHtml5 className="w-5 h-5 text-orange-600" />,
    CSS: <SiCss3 className="w-5 h-5 text-blue-600" />,
    JavaScript: <SiJavascript className="w-5 h-5 text-yellow-400" />,
    React: <SiReact className="w-5 h-5 text-cyan-500" />,
    "Node.js": <SiNodedotjs className="w-5 h-5 text-green-600" />,
    MongoDB: <SiMongodb className="w-5 h-5 text-green-700" />,
    Python: <SiPython className="w-5 h-5 text-blue-500" />,
    Java: <DiJava className="w-5 h-5 text-red-600" />,
    SQL: <SiMysql className="w-5 h-5 text-blue-700" />,
    "Power BI": <img src="public\power-bi-icon.svg" className="w-5 h-5" alt="Power BI" />
  };

   return (
    <div className="bg-white shadow-md rounded-lg p-6 h-180 hover:shadow-lg transition-shadow duration-200 flex flex-col">
      {image && (
        <img
          src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${image}`}
          alt={title}
          className="w-full h-50 object-cover border-s-black rounded mb-4"
        />
      )}
      <h3 className="text-start text-xl font-semibold mb-2">{title}</h3>
      <p className="text-start text-gray-600 mb-4 flex-grow">{description}</p>

      <div className="flex flex-wrap gap-3 mt-auto">
        {techStack.map((tech) => (
          <span key={tech} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-sm">
            {techIcons[tech]} {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
