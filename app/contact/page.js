import "../../styles/contact.scss";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contactez-moi</h1>
      <form className="contact-form">
        <label>
          Prénom :
          <input type="text" name="firstname" required />
        </label>
        <label>
          Nom :
          <input type="text" name="name" required />
        </label>
        <label>
          Email :
          <input type="email" name="email" required />
        </label>
        <label>
          Message :<textarea name="message" rows="5" required></textarea>
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
