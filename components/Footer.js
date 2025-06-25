import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href="https://github.com/Emma-F-git"
          target="_blank"
          aria-label="GitHub"
          className="github-icon"
        >
          <FaGithub size={26} />
        </a>
        <a
          href="https://www.linkedin.com/in/emma-f-1305a41b5/"
          target="_blank"
          aria-label="linkedin"
          className="linkedin-icon"
        >
          <FaLinkedin size={26} />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Emma Fortat – Tous droits réservés</p>
    </footer>
  );
}
