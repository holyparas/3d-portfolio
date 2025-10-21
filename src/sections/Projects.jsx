import { Store, ExternalLink, Github, FileText, Brain } from "lucide-react";

const skills = ["react", "javascript", "css3", "html5"];

const projectData = [
  {
    id: 1,
    title: "Fake Store",
    icon: <Store />,
    description:
      "A simple e-commerce web app that fetches products from the Fake Store API. Users can browse products, view details, and manage a shopping cart — built with reusable components and routing.",
    tech: skills,
    github: "https://github.com/holyparas/platzi-fake-store",
    live: "https://fakestoreparas.netlify.app/",
  },
  {
    id: 2,
    title: "CV Generator",
    icon: <FileText />,
    description:
      "A React-based CV generator that lets users input personal information, education, and work experience to dynamically generate a clean, printable resume.",
    tech: skills,
    github: "https://github.com/holyparas/cv-generator",
    live: "https://parascvgenerator.netlify.app/",
  },
  {
    id: 3,
    title: "Memory Game",
    icon: <Brain />,
    description:
      "A fun and interactive memory matching game built with JavaScript, HTML, and CSS. Players flip cards to match pairs, testing memory and attention.",
    tech: skills,
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
              <h2>{project.title}</h2>
              {project.icon}
            </div>

            <p className="text-gray-200 mb-4">{project.description}</p>

            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                {project.tech.map((tech, index) => (
                  <img
                    key={index}
                    src={`logos/${tech}.svg`}
                    alt={tech}
                    className="w-8"
                  />
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
