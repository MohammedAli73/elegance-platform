"use client";

import { Card } from "@/components/ui/card";
import { useContext } from "react";
import { cartContext } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import {
  Star,
  ArrowLeftFromLineIcon,
  Frown,
  Home,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Cart() {
  const { cartItems, removeItem, clearItems } = useContext(cartContext);
  let totale = 0.0;
  cartItems.map((item) => (totale = item.prix + totale));

  return (
    <div className="p-2 flex flex-col gap-3 items-center font-[inherit]">
      <h2 className="text-3xl font-extrabold w-1/1">Tout tes produits</h2>
      <h3 className="text-lg font-medium">
        Voici les articles que vous avez choisis.
      </h3>
      <h3 className="text-lg font-medium">
        Vous allez payer en totale pour ce panier:{" "}
        <span className="bg-secondary px-2 rounded-sm">{totale} FCFA</span>
      </h3>
      <Button
        variant="outline"
        onClick={() => clearItems()}
        disabled={cartItems.length === 0}
        className="text-xl bg-secondary font-semibold w-full max-w-md py-2 hover:bg-slate-800 hover:text-gray-100 transition-all ease-in-out"
      >
        Vider mon panier
      </Button>
      <div className="min-h-full min-w-full grid sm:grid-cols-2 gap-3 px-3 py-10 bg-secondary">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <Card className="flex flex-col gap-2 p-1 shadow-md transition-transform ease-in-out hover:scale-[101%]">
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {item.nouveau && (
                  <span className="bg-green-500 opacity-100 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Nouveau
                  </span>
                )}
                {item.promotion && item.prixOriginal && (
                  <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    -
                    {Math.round(
                      ((item.prixOriginal - item.prix) * 100) /
                        item.prixOriginal
                    )}
                    %
                  </span>
                )}
              </div>
              <Image
                src={item.image}
                alt={item.nom}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-md"
              />
              <p className="text-xs text-gray-500 uppercase tracking-wider pb-2 truncate">
                {item.marque}
              </p>
              <div className="flex flex-col gap-3 p-2">
                <h3 className="text-xl font-bold">{item.nom}</h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${
                        i < Math.floor(item.note)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}

                  <span className="text-xs text-gray-500 ml-1">
                    ({item.nombreAvis})
                  </span>
                </div>
                <p>{item.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg font-bold text-gray-900">
                    {item.prix.toFixed(2)} FCFA
                  </span>
                  {item.prixOriginal && item.promotion && (
                    <span className="text-sm text-gray-500">
                      <span className="line-through">
                        {item.prixOriginal.toFixed(2)}
                      </span>{" "}
                      FCFA
                    </span>
                  )}
                </div>
                <div className="text-lg font-bold flex flex-col gap-2">
                  <span>Quantité: {item.quantity} unités</span>
                  <span>Totale à payer: {item.quantity * item.prix} FCFA</span>
                </div>
              </div>
              <Button
                className="w-full bg-gray-900 hover:bg-gray-800 text-white transition-colors duration-200 group-hover:shadow-md text-sm sm:text-base py-2 sm:py-3"
                onClick={() => removeItem(item)}
              >
                <ArrowLeftFromLineIcon className="w-4 h-4 mr-1 sm:mr-2" />
                Enlever du panier
              </Button>
            </Card>
          ))
        ) : (
          <div className="flex flex-col gap-3 items-center col-span-2">
            <h1 className="text-2xl font-bold">Panier est vide</h1>
            <Frown className="w-24 h-24" />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/produits">
                <Button>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Voir nos produits
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline">
                  <Home className="w-4 h-4 mr-2" /> Visit le page d'accueil
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
