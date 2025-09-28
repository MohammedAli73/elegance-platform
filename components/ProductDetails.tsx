"use client";

import React, { useContext, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { cartContext } from "@/hooks/use-cart";
import Link from "next/link";
import {
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Minus,
  Plus,
  Truck,
  Shield,
  RotateCcw,
  ChevronLeft,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/ProductCard";
import { products, featuredProducts } from "@/lib/data";

export interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

const ProductDetailPage = ({ params }: ProductDetailPageProps) => {
  const { addItem } = useContext(cartContext);
  const product = products.find((p) => p.id === params.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    notFound();
  }

  const productImages = product.images || [product.image];
  const relatedProducts = featuredProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["Noir", "Blanc", "Bleu", "Rouge"];

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const avantages = [
    {
      icon: Truck,
      text: "Livraison gratuite dès 50€",
    },
    {
      icon: Shield,
      text: "Garantie 2 ans",
    },
    {
      icon: RotateCcw,
      text: "Retour sous 30 jours",
    },
  ];

  const pourcentageReduction = product.prixOriginal
    ? Math.round(
        ((product.prixOriginal - product.prix) / product.prixOriginal) * 100
      )
    : 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              Accueil
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/produits"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              Produits
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium truncate">
              {product.nom}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Images */}
          <div className="space-y-3 sm:space-y-4">
            {/* Image principale */}
            <div className="aspect-square overflow-hidden rounded-xl bg-gray-50 relative">
              <Image
                src={productImages[selectedImage]}
                alt={product.nom}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {product.nouveau && (
                <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                  Nouveau
                </Badge>
              )}
              {product.promotion && pourcentageReduction > 0 && (
                <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                  -{pourcentageReduction}%
                </Badge>
              )}
            </div>

            {/* Thumbnails */}
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2 sm:gap-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded-lg bg-gray-50 border-2 transition-all ${
                      selectedImage === index
                        ? "border-gray-900"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.nom} ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Détails du produit */}
          <div className="space-y-4 sm:space-y-6">
            {/* Header */}
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                {product.marque}
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                {product.nom}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.note)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.note} ({product.nombreAvis} avis)
                  </span>
                </div>
              </div>

              {/* Prix */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {product.prix.toFixed(2)} €
                </span>
                {product.prixOriginal && product.promotion && (
                  <span className="text-lg sm:text-xl text-gray-500 line-through">
                    {product.prixOriginal.toFixed(2)} €
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <Separator />

            {/* Options */}
            {product.categorie === "mode" && (
              <div className="space-y-4">
                {/* Tailles */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Taille
                  </label>
                  <div className="grid grid-cols-5 gap-2 sm:gap-3">
                    {sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedSize(size)}
                        className="h-9 sm:h-10 text-sm"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Couleurs */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Couleur
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <Button
                        key={color}
                        variant={
                          selectedColor === color ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setSelectedColor(color)}
                        className="px-3 sm:px-4 text-sm"
                      >
                        {color}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Quantité */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Quantité
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-2 h-9 w-9 sm:h-10 sm:w-10"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-10 sm:w-12 text-center text-sm font-medium">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 h-9 w-9 sm:h-10 sm:w-10"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Separator />

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white h-11 sm:h-12 text-sm sm:text-base"
                  disabled={!product.disponible}
                  onClick={() => addItem(product, quantity)}
                >
                  {product.disponible ? (
                    <>
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Ajouter au panier
                    </>
                  ) : (
                    "Rupture de stock"
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="h-11 sm:h-12 px-4 sm:w-auto w-full"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isWishlisted ? "fill-current text-red-500" : ""
                    }`}
                  />
                  <span className="ml-2 sm:hidden">Favoris</span>
                </Button>
              </div>

              <Button
                variant="outline"
                size="lg"
                className="w-full h-11 sm:h-12 text-sm sm:text-base"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Partager ce produit
              </Button>
            </div>

            <Separator />

            {/* Avantages */}
            <div className="space-y-4">
              {avantages.map((avantage, index) => (
                <div key={index} className="flex items-center gap-3">
                  <avantage.icon className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">{avantage.text}</span>
                </div>
              ))}
            </div>

            {/* Disponibilité */}
            <div className="flex items-center gap-2 p-3 sm:p-4 bg-green-50 rounded-lg">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-sm text-green-800 font-medium">
                En stock - Expédié sous 24h
              </span>
            </div>
          </div>
        </div>

        {/* Produits similaires */}
        {relatedProducts.length > 0 && (
          <div className="mt-12 sm:mt-20">
            <h2 className="text-xl sm:text-2xl font-bold font-playfair text-gray-900 mb-6 sm:mb-8 text-center">
              Produits similaires
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
