// src/components/About.jsx
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiMysql,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

export default function About() {
  const techStack = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-600 w-8 h-8" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600 w-8 h-8" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-8 h-8" /> },
    { name: "React", icon: <SiReact className="text-cyan-500 w-8 h-8" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600 w-8 h-8" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700 w-8 h-8" /> },
    { name: "Python", icon: <SiPython className="text-blue-500 w-8 h-8" /> },
    { name: "Java", icon: <DiJava className="text-red-600 w-8 h-8" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-700 w-8 h-8" /> },
    { name: "Power BI", icon: <img src="/power-bi-icon.svg" alt="Power BI" className="w-8 h-8" /> },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Curious. Driven. Solutions-focused. I’m passionate about turning ideas into impact—whether it’s through strategic thinking, innovative problem-solving, or collaborative teamwork. I thrive in environments that challenge me to grow.

          I believe in continuous learning, honest communication, and making work meaningful. My goal is to not only meet expectations but redefine what’s possible—while keeping humanity and humility at the core of everything I do.

          Let’s connect if you're building something bold or want to exchange ideas that matter.
        </p>

        {/* Tech Stack Section */}
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">Tech Stack</h3>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto shadow-md rounded-md p-6">
          {techStack.map((tech) => (
            <li
              key={tech.name}
              className="flex items-center gap-3 hover:scale-105 transition-transform duration-200"
            >
              {tech.icon}
              <span className="text-lg font-medium text-gray-700">{tech.name}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
