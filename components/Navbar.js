import Link from "next/link";
import "../styles/navbar.scss";
import "../styles/globals.scss";

export default function Navbar() {
  return (
    <nav className="mynavbar">
      <Link href="/">
        <img src="/images/Logo.webp" alt="Logo EF" className="logo" />
      </Link>
      <div className="nav-links">
        <Link href="/" className="nav-link">
          Accueil
        </Link>
        <Link href="/#a-propos" className="nav-link">
          Mon profil
        </Link>
        <Link href="/#projets" className="nav-link">
          Mes projets
        </Link>
        <Link href="/contact" className="nav-link">
          Contact
        </Link>
      </div>
    </nav>
  );
}
