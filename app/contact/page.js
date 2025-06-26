"use client";
import { useState } from "react";
import "../../styles/contact.scss";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    firstname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Message envoyé !");
      setForm({ name: "", firstname: "", email: "", message: "" });
    } else {
      alert("Erreur lors de l'envoi.");
    }
  };

  return (
    <div className="contact-page">
      <h1>Contactez-moi</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Prénom :{" "}
          <input
            id="firstname"
            name="firstname"
            value={form.firstname}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Nom :{" "}
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email :{" "}
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message :{" "}
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
