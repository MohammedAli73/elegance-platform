"use client";
import { useState, useContext } from "react";
import { cartContext } from "@/hooks/use-cart";
import Link from "next/link";
import { ShoppingCart, User, Menu, X, Heart } from "lucide-react";

export default function Header() {
  const cart = useContext(cartContext);
  console.log(cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Élégance
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Accueil
              </Link>
              <Link
                href="/produits"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Produits
              </Link>
              <Link
                href="/categories"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Catégories
              </Link>
              <Link
                href="/nouveautes"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Nouveautés
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors relative">
                <Heart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <User className="w-6 h-6" />
              </button>
              <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center space-x-2">
              <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors relative">
                <Heart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <Link
                href="/cart"
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors relative"
              >
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.cartItems.length && cart.cartItems.length}
                </span>
              </Link>
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closeMenu}
          />
          <div className="fixed top-0 left-0 right-0 bg-white shadow-xl animate-slide-down">
            <div className="px-4 py-6">
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                <button
                  onClick={closeMenu}
                  className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-4 mb-6">
                <Link
                  href="/"
                  className="block py-3 text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors border-b border-gray-100"
                  onClick={closeMenu}
                >
                  Accueil
                </Link>
                <Link
                  href="/produits"
                  className="block py-3 text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors border-b border-gray-100"
                  onClick={closeMenu}
                >
                  Produits
                </Link>
                <Link
                  href="/categories"
                  className="block py-3 text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors border-b border-gray-100"
                  onClick={closeMenu}
                >
                  Catégories
                </Link>
                <Link
                  href="/nouveautes"
                  className="block py-3 text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors border-b border-gray-100"
                  onClick={closeMenu}
                >
                  Nouveautés
                </Link>
                <Link
                  href="/contact"
                  className="block py-3 text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors border-b border-gray-100"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </nav>

              {/* Mobile User Actions */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <button
                  className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-gray-900 transition-colors"
                  onClick={closeMenu}
                >
                  <div className="flex items-center space-x-3">
                    <Heart className="w-6 h-6" />
                    <span className="text-lg font-medium">
                      Liste de souhaits
                    </span>
                  </div>
                  <span className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    3
                  </span>
                </button>
                <button
                  className="flex items-center space-x-3 w-full py-3 text-gray-700 hover:text-gray-900 transition-colors"
                  onClick={closeMenu}
                >
                  <User className="w-6 h-6" />
                  <span className="text-lg font-medium">Mon compte</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
