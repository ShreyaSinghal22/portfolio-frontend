import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive personal portfolio to showcase projects, skills, and experience with smooth animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 2,
    title: "E-Commerce Web Application",
    description:
      "A full-featured e-commerce platform with product listing, cart functionality, and secure checkout.",
    tech: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    id: 3,
    title: "Blog CMS Platform",
    description:
      "A content management system for writing, editing, and publishing blog posts with user authentication.",
    tech: ["Next.js", "Tailwind CSS", "Firebase"]
  },
  {
    id: 4,
    title: "Task Management App",
    description:
      "A productivity app to create, manage, and track tasks with drag-and-drop support.",
    tech: ["React", "Redux", "Tailwind CSS"]
  },
  {
    id: 5,
    title: "Weather Forecast Application",
    description:
      "A real-time weather forecasting app using external APIs with location-based results.",
    tech: ["JavaScript", "API", "CSS"]
  },
];

function Projects() {
    return (
        <>
         <h1 className="text-4xl text-black text-left font-semibold mb-2">
            Recent Projects
         </h1>
         <ul className="bg-white text-left rounded-xl p-4">
            {projects.map((project,id) => (
                <li key={id}>
                    <ProjectCard className="text-pretty"
                    title={project.title}
                    description={project.description}
                    tech={project.tech}/>
                </li>
            ))}
         </ul>
        </>
    );
};

export default Projects;
