import Link from "next/link";
import "../styles/globals.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">
        <img src="/images/Logo.png" alt="Logo EF" className="logo" />
      </Link>
      <div className="nav-links">
        <Link href="/" className="nav-link">
          Accueil
        </Link>
        <a href="#a-propos" className="nav-link">
          Mon profil
        </a>
      </div>
    </nav>
  );
}
