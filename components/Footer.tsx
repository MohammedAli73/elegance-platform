import React from "react";
import Link from "next/link";

const Footer = () => {
  const liens = {
    entreprise: [
      { nom: "À Propos", href: "about" },
      { nom: "Carrières", href: "/about" },
      { nom: "Presse", href: "/about" },
      { nom: "Investisseurs", href: "/about" },
    ],
    support: [
      { nom: "Centre d'aide", href: "/about" },
      { nom: "Contact", href: "/aboute" },
      { nom: "Livraisons", href: "/about" },
      { nom: "Retours", href: "/about" },
    ],
    legal: [
      { nom: "Conditions d'utilisation", href: "/about" },
      { nom: "Politique de confidentialité", href: "/about" },
      { nom: "Cookies", href: "/about" },
      { nom: "CGV", href: "/about" },
    ],
  };

  const reseauxSociaux = [
    { nom: "Instagram", icon: "/instagram.svg", href: "#" },
    { nom: "X", icon: "/X.svg", href: "#" },
    { nom: "TikTok", icon: "/tiktok.svg", href: "#" },
    { nom: "YouTube", icon: "/youtube.svg", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold">ÉléganceShop</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Découvrez notre sélection de produits premium avec une expérience
              shopping exceptionnelle. Qualité, élégance et service client
              irréprochable.
            </p>
            <div className="flex space-x-4">
              {reseauxSociaux.map((reseau) => (
                <Link
                  key={reseau.nom}
                  href={reseau.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                >
                  <img src={reseau.icon} className="w-5 h-5 text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Entreprise</h3>
            <ul className="space-y-4">
              {liens.entreprise.map((lien) => (
                <li key={lien.nom}>
                  <Link
                    href={lien.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {lien.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              {liens.support.map((lien) => (
                <li key={lien.nom}>
                  <Link
                    href={lien.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {lien.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Légal</h3>
            <ul className="space-y-4">
              {liens.legal.map((lien) => (
                <li key={lien.nom}>
                  <Link
                    href={lien.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {lien.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Restez informé</h3>
            <p className="text-gray-400 mb-6">
              Recevez nos dernières nouveautés et offres exclusives
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-200"
              />
              <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 ÉléganceShop. Tous droits réservés.
          </p>
          <p className="text-gray-400 text-sm mt-4 sm:mt-0">
            Fait par Mohamed El hadj issa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
