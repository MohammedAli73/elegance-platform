"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import { cartContext } from "@/hooks/use-cart";
import { wishContext } from "@/hooks/use-sohaits";
import { getCurrentUser } from "@/lib/store";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className = "" }: ProductCardProps) => {
  const cart = useContext(cartContext);
  const wish = useContext(wishContext);
  const [liked, setLiked] = useState<Boolean>(false);
  const prixAffiche =
    product.promotion && product.prixOriginal ? product.prix : product.prix;

  const pourcentageReduction = product.prixOriginal
    ? Math.round(
        ((product.prixOriginal - product.prix) / product.prixOriginal) * 100
      )
    : 0;
  const currentUser = getCurrentUser();

  return (
    <div
      className={`group relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 ${className}`}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.nouveau && (
          <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Nouveau
          </span>
        )}
        {product.promotion && pourcentageReduction > 0 && (
          <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            -{pourcentageReduction}%
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        className={`absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm 
          rounded-full flex items-center justify-center 
          group-hover:opacity-100 transition-opacity duration-200 hover:bg-white
          ${liked ? "sm:opacity-100" : "sm:opacity-0"}`}
        onClick={() => {
          if (!currentUser) {
            alert("Vous n'est pas connectez");
            return;
          } else if (!liked) {
            setLiked(true);
            wish.addWish(product);
          } else {
            setLiked(false);
            wish.removeWish(product);
          }
        }}
      >
        <Heart
          className={`w-4 h-4 text-gray-600 ${
            liked && currentUser && "fill-current text-red-500"
          } transition-colors duration-200`}
        />
      </button>

      {/* Image */}
      <Link href={`/produits/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <Image
            src={product.image}
            alt={product.nom}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-3 sm:p-4">
        {/* Brand */}
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 truncate">
          {product.marque}
        </p>

        {/* Title */}
        <Link href={`/produits/${product.id}`}>
          <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-gray-700 transition-colors duration-200">
            {product.nom}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2 sm:mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                  i < Math.floor(product.note)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">
            ({product.nombreAvis})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <span className="text-base sm:text-lg font-bold text-gray-900">
            {prixAffiche.toFixed(2)} FCFA
          </span>
          {product.prixOriginal && product.promotion && (
            <span className="text-sm text-gray-500">
              <span className="line-through">
                {product.prixOriginal.toFixed(2)}
              </span>{" "}
              FCFA
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          className="w-full bg-gray-900 hover:bg-gray-800 text-white transition-colors duration-200 group-hover:shadow-md text-sm sm:text-base py-2 sm:py-3"
          disabled={!product.disponible}
          onClick={() => {
            if (!currentUser) {
              alert("vous n'etes pas connectez");
              return;
            }
            cart.addItem(product, 1);
          }}
        >
          {product.disponible ? (
            <>
              <ShoppingCart className="w-4 h-4 mr-1 sm:mr-2" />
              Ajouter au panier
            </>
          ) : (
            "Rupture de stock"
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
