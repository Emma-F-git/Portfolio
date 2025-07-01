"use client";
import { useState } from "react";
import Link from "next/link";
import "../styles/navbar.scss";
import "../styles/globals.scss";
import "../styles/tailwind.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="mynavbar">
      <Link href="/">
        <img src="/images/Logo.webp" alt="Logo EF" className="logo" />
      </Link>

      <button
        className="menu-toggle md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          Accueil
        </Link>
        <Link
          href="/#a-propos"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Mon profil
        </Link>
        <Link
          href="/#projets"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Mes projets
        </Link>
        <Link
          href="/contact"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
