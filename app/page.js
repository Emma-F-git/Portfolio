import ProjectsSection from "@/components/project/ProjectsSection";

export default function Home() {
  return (
    <div className="page-container">
      <main className="main-content">
        <h1>Bonjour ! Je suis Emma Fortat Développeuse Web</h1>

        <section id="a-propos" className="a-propos-section">
          <h2 className="section-title">Venez découvrir mon profil</h2>
          <p className="section-paragraph-1">
            Passionnée par le développement web, j’ai eu l’occasion de découvrir
            différentes technologies au fil de mon parcours, ce qui m’a permis
            d'acquérir des bases et de développer des compétences techniques
            variées.
          </p>
          <p className="section-paragraph-2">
            Autonome mais aussi à l’aise en équipe, j’apprécie les
            environnements collaboratifs et je suis toujours motivée par l’idée
            de relever de nouveaux défis et d’apprendre en continu.
          </p>
          <p className="section-paragraph-3">
            Je suis actuellement à la recherche d’une alternance pour poursuivre
            une formation Bac+3 en Développement Full Stack.
          </p>
        </section>

        <h3 className="section-title">Compétences</h3>
        <div className="skills-list">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Tailwind",
            "MongoDB",
            "Git et Github",
          ].map((skill) => (
            <span key={skill} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>

        <a href="/projects" className="btn-primary">
          Voir mes projets
        </a>
        <div className="page-container">
          {/* autres sections */}
          <ProjectsSection />
        </div>
      </main>
    </div>
  );
}
