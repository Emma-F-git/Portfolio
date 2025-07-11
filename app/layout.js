import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.scss";
import "../styles/tailwind.css";

export const metadata = {
  title: "Emma Fortat - Développeuse Web",
  description: "Voici un aperçu de mes compétences de développeuse Web",
  robots: {
    index: true,
    follow: true,
  },
  charset: "UTF-8",
  icons: {
    icon: "/favicon/favicon.ico",
  },
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
