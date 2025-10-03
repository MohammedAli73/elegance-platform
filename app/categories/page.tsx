"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Grid3x3, Package, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { categories, getProductsByCategory } from "@/lib/data";
import { Category, Product } from "@/lib/types";

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const [productsLoading, setProductsLoading] = useState(false);

  const handleCategoryClick = async (categorySlug: string) => {
    if (selectedCategory === categorySlug) {
      setSelectedCategory("");
      setCategoryProducts([]);
      return;
    }

    setSelectedCategory(categorySlug);
    setProductsLoading(true);

    try {
      const products = await getProductsByCategory(categorySlug);
      setCategoryProducts(products);
    } catch (error) {
      console.error("Error loading category products:", error);
    } finally {
      setProductsLoading(false);
    }
  };

  const totalProducts = categories.reduce(
    (sum, cat) => sum + cat.nombreProduits,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <Grid3x3 className="w-8 h-8 text-gray-900" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-gray-900">
              Nos Catégories
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600">
            Explorez notre sélection organisée par catégories avec des données
            en temps réel
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
            <Grid3x3 className="w-8 h-8 text-gray-900 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {categories.length}
            </div>
            <div className="text-sm text-gray-600">Catégories</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
            <Package className="w-8 h-8 text-gray-900 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {totalProducts}
            </div>
            <div className="text-sm text-gray-600">Produits au total</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
            <TrendingUp className="w-8 h-8 text-gray-900 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {Math.round(totalProducts / categories.length)}
            </div>
            <div className="text-sm text-gray-600">Produits par catégorie</div>
          </div>
        </div>

        {/* Categories Grid */}
        {false ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="aspect-[4/3] bg-gray-200 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="animate-in fade-in slide-in-from-bottom duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleCategoryClick(category.slug)}
              >
                <CategoryCard
                  category={category}
                  className={`transition-all duration-200 ${
                    selectedCategory === category.slug
                      ? "ring-2 ring-gray-900 ring-offset-2"
                      : "hover:shadow-lg"
                  }`}
                />
              </div>
            ))}
          </div>
        )}

        {/* Selected Category Products */}
        {selectedCategory && (
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Produits de la catégorie sélectionnée
              </h2>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("");
                  setCategoryProducts([]);
                }}
              >
                Fermer
              </Button>
            </div>

            {productsLoading ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gray-200 rounded-xl animate-pulse"
                  />
                ))}
              </div>
            ) : categoryProducts.length > 0 ? (
              <>
                <div className="mb-6">
                  <p className="text-gray-600">
                    {categoryProducts.length} produit
                    {categoryProducts.length > 1 ? "s" : ""} trouvé
                    {categoryProducts.length > 1 ? "s" : ""}
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categoryProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-in fade-in slide-in-from-bottom duration-500"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Aucun produit trouvé
                </h3>
                <p className="text-gray-600">
                  Cette catégorie ne contient pas encore de produits.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gray-900 rounded-xl p-8 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Explorez tous nos produits ou utilisez notre fonction de recherche
              pour trouver exactement ce dont vous avez besoin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-white text-gray-900 hover:text-white hover:bg-slate-900"
                asChild
              >
                <Link href="/produits">
                  <Package className="w-5 h-5 mr-2" />
                  Voir tous les produits
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white hover:bg-slate-900 hover:text-white bg-white text-gray-900"
                asChild
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
