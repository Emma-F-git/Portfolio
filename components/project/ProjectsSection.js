import ProjectCard from "./ProjectCard";
import "@/styles/project.scss";

const projects = [
  {
    title: "Site Sophie Bluel - photographe",
    description: "Débuggage et optimisation d'un site de photographe",
    skills: [
      "SEO",
      "Performance",
      "Accessibilité",
      "Référencement",
      "Débuggage",
    ],
    github: "https://github.com/Emma-F-git/Projet-3.git",
    demo: "X",
  },
  {
    title: "Application Kasa location immobilière",
    description:
      "Création d'une application web de location immobilière avec React",
    skills: ["React", "ReactRouter", "Javascript", "SCSS"],
    github: "https://github.com/Emma-F-git/Projet-5.git",
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Mes projets</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
