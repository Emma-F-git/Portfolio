import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mon portfolio",
  description: "Voici un aperçu de mes compétences de développeuse Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
