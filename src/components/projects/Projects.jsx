import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "HobbyHub",
    overview:
      "A local hobby group organizer that helps users create or join groups based on their interests and hobbies.",
    description:
      "A local hobby group organizer for creating and joining interest‑based groups.",
    features: ["React", "Firebase", "MongoDB", "Express.js"],
    image: "https://i.ibb.co/XhR9tjH/hobbyhub.png",
    live: "https://hobby-hub-32310.web.app/",
    client: "https://github.com/Sumiaya-Akther/hobbyHub",
    server: "https://github.com/Sumiaya-Akther/hobbyHub-server",
  },
  {
    name: "KnowledgeShare",
    overview:
      "A platform for students to share knowledge by writing articles, commenting, and interacting with content.",
    description:
      "A student knowledge‑sharing platform with articles, comments, and like system.",
    features: ["React", "MongoDB", "Express", "JWT", "Tailwind"],
    image: "https://i.ibb.co/rRGLTjDS/knowlegehunt.png",
    live: "https://knowledge-hunting.web.app/",
    client: "https://github.com/yourname/knowledgeshare-client",
    server: "https://github.com/yourname/knowledgeshare-server",
  },
  {
    name: "Phudu (Doctor Appointment)",
    overview:
      "A doctor booking platform where users can search, book, and manage appointments, with favorites and charts.",
    description:
      "A platform to find doctors, book appointments, and manage favorites with charts.",
    features: ["React", "Tailwind", "LocalStorage"],
    image: "https://i.ibb.co/TqcrVkR9/doctor.png",
    live: "https://doctor-appointment-a-8.netlify.app/",
    client: "https://github.com/Sumiaya-Akther/phudu",
    
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-[#2c3a4f] mb-12">
        My Projects
      </h2>

      <div className="space-y-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row bg-[#2c3a4f] p-5 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              className="md:w-1/3 w-full h-64 object-cover rounded-xl"
            />

            <div className="md:w-2/3 w-full p-6 flex flex-col justify-between text-white">
              <div>
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((f, idx) => (
                    <span
                      key={idx}
                      className="bg-white text-[#2c3a4f] px-3 py-1 rounded-full text-sm"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#345783] text-white rounded-lg hover:bg-cyan-700"
                >
                  Live Site
                </a>
                <a
                  href={project.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-[#2c3a4f] transition"
                >
                  Client Code
                </a>
                <a
                  href={project.server}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-[#2c3a4f] transition"
                >
                  Server Code
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-[#2c3a4f] transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full max-w-3xl rounded-xl shadow-xl overflow-hidden max-h-[90vh] overflow-y-auto relative"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-2xl font-bold text-red-500 hover:text-red-700"
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-96 object-cover"
            />
            <div className="p-6 text-[#2c3a4f] space-y-4">
              <h3 className="text-2xl font-bold">{selectedProject.name}</h3>
              <p>{selectedProject.overview}</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.features.map((f, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#345783] text-white rounded-lg hover:bg-[#3a96e7]"
                >
                  Live Site
                </a>
                <a
                  href={selectedProject.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-[#2c3a4f] text-[#2c3a4f] rounded-lg hover:bg-[#2c3a4f] hover:text-white transition"
                >
                  Client Code
                </a>
                <a
                  href={selectedProject.server}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-[#2c3a4f] text-[#2c3a4f] rounded-lg hover:bg-[#2c3a4f] hover:text-white transition"
                >
                  Server Code
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
