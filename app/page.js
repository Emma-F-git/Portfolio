export default function Home() {
  return (
    <div className="page-container">
      <main className="main-content">
        <h1>Bonjour ! Je suis Emma Fortat Développeuse Web</h1>

        <section id="a-propos" className="a-propos-section">
          <h2 className="section-title">À propos</h2>
          <p className="section-paragraph">
            Je suis une développeuse web passionnée...
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
      </main>
    </div>
  );
}
