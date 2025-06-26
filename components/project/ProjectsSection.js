import ProjectCard from "./ProjectCard";
import "@/styles/project.scss";

const projects = [
  {
    title: "Site Nina Carducci - photographe",
    description: "Débuggage et optimisation d'un site de photographe",
    challenges:
      "Le site était lent à charger à cause d’images non optimisées et d’un JavaScript peu performant avec la présence de bug de fonctionnement. J’ai mis en place un lazy loading des images, ajouter les balises métas et optimisé les scripts pour réduire le temps de chargement, améliorant ainsi le SEO et l’accessibilité.",
    skills: ["SEO", "Performance", "Accessibilité", "Référencement"],
    github: "https://github.com/Emma-F-git/Projet-4.git",
    image: "/images/Nina_Carducci.webp",
  },
  {
    title: "Application Kasa location immobilière",
    description:
      "Création d'une application web de location immobilière avec React",
    challenges:
      "La gestion des routes a nécessité l’utilisation de React Router. J’ai structuré les routes et utilisé des hooks React pour gérer l’état et la navigation de façon fluide et intuitive. De plus, j'ai utilisé les styles SCSS avec mixins et variables",
    skills: ["React", "ReactRouter", "Javascript", "SCSS"],
    github: "https://github.com/Emma-F-git/Projet-5.git",
    image: "/images/Kasa_Logo.webp",
  },
  {
    title: "Site de notation de livres Mon Vieux Grimoire",
    description: "Développer le back-end d'un site de notation de livres.",
    challenges:
      "Le défi principal était de concevoir une base de données performante et sécurisée avec MongoDB et Mongoose. J’ai structuré les schémas pour optimiser les requêtes et mis en place une API REST sécurisée pour protéger les données utilisateurs.",
    skills: ["Express", "MongoDB", "Mongoose", "Node.js", "Green Code"],
    github: "https://github.com/Emma-F-git/Projet-6.git",
    image: "/images/Monvieuxgrimoire_logo.webp",
  },
  {
    title: "Site Internet d'hébergements et d'activités",
    description: "Intégrer l'interface du site avec HTML et CSS.",
    challenges:
      "Le site devait être responsive et compatible avec les navigateurs. J’ai utilisé HTML, CSS avec Flexbox et Grid.",
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
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
