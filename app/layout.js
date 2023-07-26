import "./globals.css";

import { Inter } from "next/font/google";
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";

const inter = Inter({ subsets: ["latin"] });

export const Metadata = {
  title: "Guitars",
  description: "Sitio de venta de guitarras y accesorios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
