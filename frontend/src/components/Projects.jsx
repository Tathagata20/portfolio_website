import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/projects`);
        console.log(res.data);

        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl text-center mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
        <p className="mt-2 text-gray-600">
          A selection of my recent work and experiments.
        </p>

        {loading ? (
          <p className="mt-6 text-gray-500">Loading projects...</p>
        ) : (
          <div className="mt-10 grid grid-cols-1 shadow-md p-5 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.data.map((project) => (
              <div
                key={project._id}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        )}

        {/* Modal for showing details */}


        {/* Modal for showing details */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 backdrop-blur-md bg-white/30 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white p-0 rounded-xl shadow-lg max-w-2xl w-full relative overflow-hidden"
                initial={{ y: -50, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="relative w-full h-screen">
  {/* Fullscreen background image */}
  <img
    src={`${import.meta.env.VITE_API_BASE_URL}/${selectedProject.image}`}
    alt={selectedProject.title}
    className="absolute opacity-55 inset-0 w-full h-full object-cover"
  />

  {/* Dark overlay with scrollable content */}
  <div className="absolute inset-0 bg-black/40 overflow-y-auto">
    {/* Close button */}
    <button
      onClick={() => setSelectedProject(null)}
      className="absolute top-2 right-3 text-white hover:text-gray-300 text-2xl"
    >
      ✕
    </button>

    {/* Content */}
    <div className="p-6 mt-8 text-white">
      <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
      <p className="mb-4">{selectedProject.description}</p>

      <h4 className="font-semibold mb-2">Tech Stack:</h4>
      <ul className="flex gap-2 flex-wrap mb-4">
        {selectedProject.techStack.map((tech, idx) => (
          <li
            key={idx}
            className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm"
          >
            {tech}
          </li>
        ))}
      </ul>

      {selectedProject.details?.length > 0 && (
        <>
          <h4 className="font-semibold mb-2">Details:</h4>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            {selectedProject.details.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </>
      )}

      <div className="flex gap-4">
        {selectedProject.githubLink && (
          <a
            href={selectedProject.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 text-white px-4 py-2 rounded-md"
          >
            GitHub
          </a>
        )}
        {selectedProject.liveDemo && (
          <a
            href={selectedProject.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
</div>

                
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>


      </div>
    </section>
  );
}
