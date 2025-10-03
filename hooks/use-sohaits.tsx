"use client";

import { createContext, useState } from "react";
import { Product } from "@/lib/types";
import {
  addToWishlist,
  clearWishlist,
  removeFromWishlist,
  getWishlist,
} from "@/lib/store";

type WishContextType = {
  wishItems: Product[];
  addWish: Function;
  removeWish: Function;
  clearWish: Function;
};
export const wishContext = createContext<WishContextType>({
  wishItems: [],
  addWish: () => {},
  removeWish: () => {},
  clearWish: () => {},
});

export function WishContextProvider({ children }: any) {
  const [wishItems, setWishItems] = useState<Product[]>(getWishlist());
  const addWish = (item: Product) => {
    addToWishlist(item);
    setWishItems((prev) => [...prev, item]);
  };
  const removeWish = (item: Product) => {
    removeFromWishlist(item.id);
    setWishItems((prev) => prev.filter((i) => i.id !== item.id));
  };
  const clearWish = () => {
    clearWishlist();
    setWishItems([]);
  };
  return (
    <wishContext.Provider value={{ wishItems, addWish, removeWish, clearWish }}>
      {children}
    </wishContext.Provider>
  );
}
