import { Store, ExternalLink, Github, FileText, Brain } from "lucide-react";

const skills = ["react", "javascript", "css3", "html5"];

const projectData = [
  {
    id: 1,
    title: "Inventory Management App",
    icon: <Store />,
    description:
      "A full-stack inventory management application inspired by RuneScape. Users can browse items by category and perform full CRUD operations on inventory items using a relational database.",
    tech: ["nodejs", "express", "postgresql", "ejs", "bootstrap"],
    github: "https://github.com/holyparas/runescape-inventory", // update if different
    live: "https://runescape-inventory.onrender.com/",
  },
  {
    id: 2,
    title: "Full-Stack Blog Platform",
    icon: <FileText />,
    description:
      "A decoupled blog platform with separate public and author dashboards. Authors can create and publish posts via a protected interface, while public users can read posts and leave comments.",
    tech: ["react", "tailwindcss", "nodejs", "express", "postgresql"],
    github: "https://github.com/holyparas/blog-frontend-public", // update if different
    live: "https://blogpublictop.netlify.app/",
  },
  {
    id: 3,
    title: "Fake Store",
    icon: <Store />,
    description:
      "A simple e-commerce web app that fetches products from an external API. Users can browse products, view details, and manage a shopping cart using reusable React components.",
    tech: ["react", "javascript", "css3", "html5"],
    github: "https://github.com/holyparas/platzi-fake-store",
    live: "https://fakestoreparas.netlify.app/",
  },
  {
    id: 4,
    title: "CV Generator",
    icon: <FileText />,
    description:
      "A React-based CV generator that dynamically renders a clean, printable resume from user-provided personal, education, and work experience data.",
    tech: ["react", "javascript", "css3", "html5"],
    github: "https://github.com/holyparas/cv-generator",
    live: "https://parascvgenerator.netlify.app/",
  },
  {
    id: 5,
    title: "Memory Game",
    icon: <Brain />,
    description:
      "An interactive memory matching game built with vanilla JavaScript. Players flip cards to match pairs, testing memory and attention.",
    tech: ["javascript", "html5", "css3"],
    github: "https://github.com/holyparas/MemoryGame",
    live: "https://memorygameparas.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-800 min-h-screen p-8 space-y-8">
      <h1 className="text-5xl md:text-7xl text-yellow-300 font-bold mb-8">
        Projects
      </h1>

      <div className="flex flex-col gap-6">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="border-white border-solid border-2 p-4 rounded-2xl bg-fuchsia-800 hover:bg-fuchsia-900 transition"
          >
            <div className="flex items-center gap-4 text-3xl md:text-5xl mb-2 text-white">
              <p className="text-yellow-400">{project.id}</p>
              <a href={project.live} target="_blank" rel="noreferrer">
                <h2>{project.title}</h2>
              </a>
              {project.icon}
            </div>

            <p className="text-gray-200 mb-4">{project.description}</p>

            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                {project.tech.map((tech, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={`logos/${tech}.svg`}
                      alt={tech}
                      className="w-8 cursor-pointer hover:scale-110 transition brightness-75 invert"
                    />
                    <span
                      className="
                        absolute -top-8 left-1/2 -translate-x-1/2
                        bg-black text-white text-xs px-2 py-1 rounded
                        opacity-0 group-hover:opacity-100
                        transition
                        whitespace-nowrap
                      "
                    >
                      {tech.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 text-white">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github className="hover:text-yellow-400 cursor-pointer" />
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  <ExternalLink className="hover:text-yellow-400 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
