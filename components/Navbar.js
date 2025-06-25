import Link from "next/link";
import "../styles/navbar.scss";
import "../styles/globals.css";

export default function Navbar() {
  return (
    <nav className="mynavbar">
      <Link href="/">
        <img src="/images/Logo.webp" alt="Logo EF" className="logo" />
      </Link>
      <div className="nav-links">
        <Link href="/">Accueil</Link>
        <Link href="/#a-propos">Mon profil</Link>
        <Link href="/#projets">Mes projets</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
