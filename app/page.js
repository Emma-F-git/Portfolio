export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <main className="max-w-3xl w-full text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Bonjour ! Je suis Emma Fortat Développeuse Web
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6">
          Développeuse Web
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Compétences</h2>
        <div className="flex flex-wrap gap-2 mb-8">
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
            <span
              key={skill}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <a
          href="/projects"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Voir mes projets
        </a>
      </main>
    </div>
  );
}
