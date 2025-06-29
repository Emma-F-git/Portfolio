import ProjectsSection from "@/components/project/ProjectsSection";
import Image from "next/image";
import "../styles/profil.scss";
import "../styles/skillsformation.scss";

export default function Home() {
  return (
    <div className="page-container">
      <main className="main-content">
        <h1>Emma Fortat | Développeuse Web</h1>

        <section id="a-propos" className="a-propos-section">
          <h2 className="section-title">Venez découvrir mon profil</h2>
          <div className="profil-content">
            <Image
              src="/images/illustration_de_profil.webp"
              alt="Illustration du profil Emma Fortat"
              width={200}
              height={200}
              className="rounded-full profil-image"
            />
            <div className="profil-text">
              <p className="section-paragraph-1">
                Passionnée par le développement web, j&apos;ai eu
                l&apos;occasion de découvrir différentes technologies au fil de
                mon parcours, ce qui m&apos;a permis d&apos;acquérir des bases
                et de développer des compétences techniques variées.
              </p>
              <p className="section-paragraph-2">
                Autonome mais aussi à l&apos;aise en équipe, j&apos;apprécie les
                environnements collaboratifs et je suis toujours motivée par
                l&apos;idée de relever de nouveaux défis et d&apos;apprendre en
                continu.
              </p>
              <p className="section-paragraph-3">
                Je suis actuellement à la recherche d&apos;une alternance sur
                Lorient pour poursuivre une formation Bac+3 en Développement
                Full Stack.
              </p>
            </div>
          </div>
        </section>

        <div className="skills-formation">
          <div className="skills-categories">
            <h3 className="section-title">Compétences</h3>

            <div className="skills-category">
              <h4>Frontend</h4>
              <div className="skills">
                {["HTML", "CSS", "JavaScript", "React", "Next.js"].map(
                  (skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="skills-category">
              <h4>Backend</h4>
              <div className="skills">
                {["Node.js", "Express"].map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h4>Outils</h4>
              <div className="skills">
                {["MongoDB", "API Rest", "Git et Github"].map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="formation">
            <h3 className="section-title">Formation</h3>
            <p>Bac+2 Développeur Web – OpenClassrooms (2025)</p>
            <p>Bac+3 Bachelor Collaborateur Comptable - IHECF (2018)</p>
          </div>
        </div>

        <div className="page-container">
          <ProjectsSection />
        </div>
      </main>
    </div>
  );
}
