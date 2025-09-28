import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartContextProvider } from "@/hooks/use-cart";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "ÉléganceShop - Boutique en ligne premium",
  description:
    "Découvrez notre sélection de produits premium avec une expérience shopping exceptionnelle. Mode, électronique, maison et beauté.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <CartContextProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartContextProvider>
      </body>
    </html>
  );
}
