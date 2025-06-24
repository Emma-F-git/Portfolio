import React from "react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  skills,
  github,
  demo,
  image,
}) {
  return (
    <div className="project-card">
      <img
        src={image}
        alt={`Illustration du projet ${title}`}
        className="project-image"
      />
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <div className="skills">
        {skills.map((skill, i) => (
          <span key={i}>{skill}</span>
        ))}
      </div>
      <div className="links">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
          >
            <FaGithub className="icon" />
            Code
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
          >
            Démo
          </a>
        )}
      </div>
    </div>
  );
}
