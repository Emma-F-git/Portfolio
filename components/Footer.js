import { FaGithub } from "react-icons/fa";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Emma Fortat – Tous droits réservés</p>
      <div className="footer-links">
        <a
          href="https://github.com/Emma-F-git"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="github-icon"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
}
