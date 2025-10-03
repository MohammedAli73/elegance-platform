import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, Shield, Headphones, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { Search } from "lucide-react";
import { featuredProducts, categories, newProducts } from "@/lib/data";

const HomePage = () => {
  const avantages = [
    {
      icon: Truck,
      titre: "Livraison gratuite",
      description: "Expédition gratuite dès 50€ d'achat",
    },
    {
      icon: Shield,
      titre: "Paiement sécurisé",
      description: "Transactions protégées par SSL",
    },
    {
      icon: Headphones,
      titre: "Support 24/7",
      description: "Service client disponible tous les jours",
    },
    {
      icon: Award,
      titre: "Qualité premium",
      description: "Produits soigneusement sélectionnés",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col h-[60vh] sm:h-[70vh] min-h-[400px] sm:min-h-[500px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Hero background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative mt-2.5 z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-4 sm:mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
            L'élégance à portée de clic
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 animate-in fade-in slide-in-from-bottom duration-1000 delay-200 px-4">
            Découvrez notre collection exclusive de produits premium
            sélectionnés avec soin pour vous offrir une expérience shopping
            exceptionnelle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              asChild
            >
              <Link href="/produits">
                Découvrir la collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-white text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg backdrop-blur-sm"
              asChild
            >
              <Link href="/categories">Voir les categories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {avantages.map((avantage, index) => (
              <div
                key={avantage.titre}
                className="text-center animate-in fade-in slide-in-from-bottom duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-gray-800 transition-colors duration-200">
                  <avantage.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                  {avantage.titre}
                </h3>
                <p className="text-xs sm:text-base text-gray-600 px-2">
                  {avantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-3 sm:mb-4">
              Explorez nos catégories
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Trouvez exactement ce que vous cherchez dans nos collections
              soigneusement organisées
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="animate-in fade-in slide-in-from-bottom duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produits Vedettes */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-3 sm:mb-4">
              Produits vedettes
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Une sélection de nos produits les plus populaires et les mieux
              notés
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-in fade-in slide-in-from-bottom duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4"
              asChild
            >
              <Link href="/produits">
                Voir tous les produits
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Nouveautés */}
      <section className="py-12 sm:py-20" aria-label="noveautes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-3 sm:mb-4">
              Dernières nouveautés
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Découvrez nos derniers arrivages et les tendances du moment
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {newProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-in fade-in slide-in-from-bottom duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-6 sm:px-8 py-3 sm:py-4"
              asChild
            >
              <Link href="/profil">
                Voir mon profil
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 sm:py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair mb-3 sm:mb-4">
            Restez à la pointe de l'élégance
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 px-4">
            Inscrivez-vous à notre newsletter et recevez en avant-première nos
            nouveautés et offres exclusives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-200"
            />
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-4"
            >
              S'inscrire
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
