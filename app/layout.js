import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.scss";

export const metadata = {
  title: "Emma Fortat - Développeuse Web",
  description: "Voici un aperçu de mes compétences de développeuse Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
