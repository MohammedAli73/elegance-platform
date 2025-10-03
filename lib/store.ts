import { Product } from "./types";
import { Items } from "@/hooks/use-cart";

export interface User {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  adresse?: string;
  dateInscription: string;
}

// Cart management
export const getCart = (): Items[] => {
  if (typeof window === "undefined") return [];
  const cart = localStorage.getItem("elegance-cart");
  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart: Items[]): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem("elegance-cart", JSON.stringify(cart));
  // Trigger custom event for cart updates
  window.dispatchEvent(new CustomEvent("cartUpdated"));
};

export const addToCart = (
  product: Product,
  quantity: number = 1,
  taille?: string,
  couleur?: string
): void => {
  const cart = getCart();
  const existingItemIndex = cart.findIndex((item) => item.id === product.id);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({ ...product, quantity, taille, couleur });
  }

  saveCart(cart);
};

export const removeFromCart = (productId: string): void => {
  const cart = getCart();
  const filteredCart = cart.filter((item) => !(item.id === productId));
  saveCart(filteredCart);
};

export const updateCartItemQuantity = (
  productId: string,
  quantite: number,
  taille?: string,
  couleur?: string
): void => {
  const cart = getCart();
  const itemIndex = cart.findIndex(
    (item) =>
      item.id === productId &&
      item.taille === taille &&
      item.couleur === couleur
  );

  if (itemIndex > -1) {
    if (quantite <= 0) {
      cart.splice(itemIndex, 1);
    } else {
      cart[itemIndex].quantity = quantite;
    }
    saveCart(cart);
  }
};

export const clearCart = (): void => {
  saveCart([]);
};

export const getCartTotal = (): number => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.prix * item.quantity, 0);
};

export const getCartItemsCount = (): number => {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.quantity, 0);
};

// Wishlist management
export const getWishlist = (): Product[] => {
  if (typeof window === "undefined") return [];
  const wishlist = localStorage.getItem("elegance-wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
};

export const saveWishlist = (wishlist: Product[]): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem("elegance-wishlist", JSON.stringify(wishlist));
  // Trigger custom event for wishlist updates
  window.dispatchEvent(new CustomEvent("wishlistUpdated"));
};

export const addToWishlist = (product: Product): void => {
  const wishlist = getWishlist();
  if (!wishlist.find((item) => item.id === product.id)) {
    wishlist.push(product);
    saveWishlist(wishlist);
  }
};

export const removeFromWishlist = (productId: string): void => {
  const wishlist = getWishlist();
  const filteredWishlist = wishlist.filter((item) => item.id !== productId);
  saveWishlist(filteredWishlist);
};

export const clearWishlist = (): void => {
  saveWishlist([]);
};
export const isInWishlist = (productId: string): boolean => {
  const wishlist = getWishlist();
  return wishlist.some((item) => item.id === productId);
};

// User authentication
export const getCurrentUser = (): User | null => {
  if (typeof window === "undefined") return null;
  const user = localStorage.getItem("elegance-user");
  return user ? JSON.parse(user) : null;
};

export const saveUser = (user: User): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem("elegance-user", JSON.stringify(user));
  window.dispatchEvent(new CustomEvent("userUpdated"));
};

export const loginUser = (email: string, password: string): User | null => {
  // Simple mock authentication - in real app, this would call an API
  const users = getStoredUsers();
  const user = users.find((u) => u.email === email);

  if (user) {
    saveUser(user);
    return user;
  }
  return null;
};

export const registerUser = (
  userData: Omit<User, "id" | "dateInscription">
): User => {
  const users = getStoredUsers();
  const newUser: User = {
    ...userData,
    id: Date.now().toString(),
    dateInscription: new Date().toISOString(),
  };

  users.push(newUser);
  localStorage.setItem("elegance-users", JSON.stringify(users));
  saveUser(newUser);

  return newUser;
};

export const logoutUser = (): void => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("elegance-user");
  window.dispatchEvent(new CustomEvent("userUpdated"));
};

export const updateUser = (userData: Partial<User>): void => {
  const currentUser = getCurrentUser();
  if (currentUser) {
    const updatedUser = { ...currentUser, ...userData };
    saveUser(updatedUser);

    // Update in users list
    const users = getStoredUsers();
    const userIndex = users.findIndex((u) => u.id === currentUser.id);
    if (userIndex > -1) {
      users[userIndex] = updatedUser;
      localStorage.setItem("elegance-users", JSON.stringify(users));
    }
  }
};

const getStoredUsers = (): User[] => {
  if (typeof window === "undefined") return [];
  const users = localStorage.getItem("elegance-users");
  return users ? JSON.parse(users) : [];
};
