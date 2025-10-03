"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CreditCard as Edit3,
  LogOut,
  ShoppingBag,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  getCurrentUser,
  updateUser,
  logoutUser,
  getCart,
  getWishlist,
} from "@/lib/store";
import { User as UserType } from "@/lib/store";

const ProfilPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<UserType | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const [editData, setEditData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    adresse: "",
  });

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      router.push("/connexion");
      return;
    }

    setUser(currentUser);
    setEditData({
      prenom: currentUser.prenom,
      nom: currentUser.nom,
      email: currentUser.email,
      telephone: currentUser.telephone || "",
      adresse: currentUser.adresse || "",
    });
    setLoading(false);

    // Get cart and wishlist counts
    setCartCount(getCart().reduce((count, item) => count + item.quantity, 0));
    setWishlistCount(getWishlist().length);

    // Listen for updates
    const handleUserUpdate = () => {
      const updatedUser = getCurrentUser();
      setUser(updatedUser);
    };

    const handleCartUpdate = () => {
      setCartCount(getCart().reduce((count, item) => count + item.quantity, 0));
    };

    const handleWishlistUpdate = () => {
      setWishlistCount(getWishlist().length);
    };

    window.addEventListener("userUpdated", handleUserUpdate);
    window.addEventListener("cartUpdated", handleCartUpdate);
    window.addEventListener("wishlistUpdated", handleWishlistUpdate);

    return () => {
      window.removeEventListener("userUpdated", handleUserUpdate);
      window.removeEventListener("cartUpdated", handleCartUpdate);
      window.removeEventListener("wishlistUpdated", handleWishlistUpdate);
    };
  }, [router]);

  const handleSave = () => {
    updateUser(editData);
    setIsEditing(false);
  };

  const handleLogout = () => {
    logoutUser();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold font-playfair text-gray-900">
                Mon Profil
              </h1>
              <p className="text-gray-600 mt-1">
                Gérez vos informations personnelles et vos préférences
              </p>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="text-red-600 border-red-200 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Informations personnelles
                </h2>
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(!isEditing)}
                  size="sm"
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  {isEditing ? "Annuler" : "Modifier"}
                </Button>
              </div>

              {isEditing ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="prenom">Prénom</Label>
                      <Input
                        id="prenom"
                        value={editData.prenom}
                        onChange={(e) =>
                          setEditData({ ...editData, prenom: e.target.value })
                        }
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="nom">Nom</Label>
                      <Input
                        id="nom"
                        value={editData.nom}
                        onChange={(e) =>
                          setEditData({ ...editData, nom: e.target.value })
                        }
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={editData.email}
                      onChange={(e) =>
                        setEditData({ ...editData, email: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input
                      id="telephone"
                      value={editData.telephone}
                      onChange={(e) =>
                        setEditData({ ...editData, telephone: e.target.value })
                      }
                      className="mt-1"
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div>
                    <Label htmlFor="adresse">Adresse</Label>
                    <Input
                      id="adresse"
                      value={editData.adresse}
                      onChange={(e) =>
                        setEditData({ ...editData, adresse: e.target.value })
                      }
                      className="mt-1"
                      placeholder="123 Rue de la Paix, 75001 Paris"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={handleSave}
                      className="bg-gray-900 hover:bg-gray-800"
                    >
                      Sauvegarder
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                    >
                      Annuler
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Nom complet</p>
                      <p className="font-medium text-gray-900">
                        {user.prenom} {user.nom}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium text-gray-900">{user.email}</p>
                    </div>
                  </div>

                  {user.telephone && (
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600">Téléphone</p>
                        <p className="font-medium text-gray-900">
                          {user.telephone}
                        </p>
                      </div>
                    </div>
                  )}

                  {user.adresse && (
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600">Adresse</p>
                        <p className="font-medium text-gray-900">
                          {user.adresse}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Membre depuis</p>
                      <p className="font-medium text-gray-900">
                        {new Date(user.dateInscription).toLocaleDateString(
                          "fr-FR",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            {/* Account Stats */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Activité
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <ShoppingBag className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">
                      Articles dans le panier
                    </span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {cartCount}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">Produits favoris</span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {wishlistCount}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Actions rapides
              </h3>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a href="/cart">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Voir mon panier
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a href="/mes-sohaits">
                    <Heart className="w-4 h-4 mr-2" />
                    Mes favoris
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;
