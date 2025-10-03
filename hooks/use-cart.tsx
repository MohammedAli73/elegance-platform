"use client";

import { createContext, useState } from "react";
import { Product } from "@/lib/types";
import { clearCart, getCart, addToCart, removeFromCart } from "@/lib/store";

export type Items = Product & {
  quantity: number;
  couleur?: string;
  taille?: string;
};
type CartContextType = {
  cartItems: Items[];
  addItem: Function;
  removeItem: Function;
  clearItems: Function;
};
export const cartContext = createContext<CartContextType>({
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItems: () => {},
});

export function CartContextProvider({ children }: any) {
  const [cartItems, setCartItems] = useState<Items[]>(getCart());
  const addItem = (item: Items, quantity: number) => {
    if (cartItems.find((i) => i.id === item.id)) {
      addToCart(item, quantity);
      setCartItems((prev) =>
        prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        )
      );
    } else setCartItems((prev) => [...prev, { ...item, quantity: quantity }]);
  };
  const removeItem = (item: Items) => {
    removeFromCart(item.id);
    setCartItems((prev) => prev.filter((i) => i.id !== item.id));
  };
  const clearItems = () => {
    clearCart();
    setCartItems([]);
  };
  return (
    <cartContext.Provider
      value={{ cartItems, addItem, removeItem, clearItems }}
    >
      {children}
    </cartContext.Provider>
  );
}
