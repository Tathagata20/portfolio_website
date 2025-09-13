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
                <div className="h-fit w-full">
                  <img
                  src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${selectedProject.image}`}
                  className="relative opacity-40 h-full w-full object-cover"
                  alt=""
                />
                <div className="absolute h-full w-full top-6 z-40">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-0.5 right-3 text-gray-600 hover:text-black text-xl"
                  >
                    ✕
                  </button>
                  <h3 className="text-start text-2xl font-bold mb-2 pl-6">
                    {selectedProject.title}
                  </h3>
                  <p className="text-start text-black mb-4 pl-6">
                    {selectedProject.description}
                  </p>
                  <h4 className="text-start font-semibold pl-6 mb-5">Tech Stack:</h4>
                  <ul className="flex gap-2 flex-wrap mb-4 pl-6">
                    {selectedProject.techStack.map((tech, idx) => (
                      <li
                        key={idx}
                        className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  {selectedProject.details?.length > 0 && (
                    <>
                      <h4 className="font-semibold pl-6">Details:</h4>
                      <ul className="list-disc text-left mb-4 pl-8">
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
                        className="bg-gray-600 text-white px-4 py-2 rounded-md ml-6"
                      >
                        GitHub
                      </a>
                    )}
                    {selectedProject.liveDemo && (
                      <a
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
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
