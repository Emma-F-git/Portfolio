import ProjectCard from "./ProjectCard";
import "@/styles/project.scss";

const projects = [
  {
    title: "Site Nina Carducci - photographe",
    description: "Débuggage et optimisation d'un site de photographe",
    skills: [
      "SEO",
      "Performance",
      "Accessibilité",
      "Référencement",
      "Débuggage",
    ],
    github: "https://github.com/Emma-F-git/Projet-4.git",
    demo: "X",
    image: "/images/Nina_Carducci.webp",
  },
  {
    title: "Application Kasa location immobilière",
    description:
      "Création d'une application web de location immobilière avec React",
    skills: ["React", "ReactRouter", "Javascript", "SCSS"],
    github: "https://github.com/Emma-F-git/Projet-5.git",
    image: "/images/Kasa_Logo.webp",
  },
  {
    title: "Site de notation de livres Mon Vieux Grimoire",
    description: "Développer le back-end d'un site de notation de livres.",
    skills: ["Express", "MongoDB", "Mongoose", "Node.js", "Green Code"],
    github: "https://github.com/Emma-F-git/Projet-6.git",
    image: "/images/Monvieuxgrimoire_logo.webp",
  },
  {
    title: "Site Internet d'hébergements et d'activités",
    description: "Intégrer l'interface du site avec HTML et CSS.",
    skills: ["HTML", "CSS"],
    github: "https://github.com/Emma-F-git/OpenclassroomsProject.git",
    image: "/images/Booki_logo.webp",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projets" className="projects-section">
      <h2 className="section-title">Mes projets</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
