export interface Product {
  id: string;
  nom: string;
  description: string;
  prix: number;
  prixOriginal?: number;
  image: string;
  images?: string[];
  categorie: string;
  sousCategorie?: string;
  marque: string;
  disponible: boolean;
  note: number;
  nombreAvis: number;
  nouveau?: boolean;
  promotion?: boolean;
  tags?: string[];
}

export interface CartItem {
  product: Product;
  quantite: number;
  taille?: string;
  couleur?: string;
}

export interface User {
  id: string;
  nom: string;
  email: string;
  avatar?: string;
}

export interface Category {
  id: string;
  nom: string;
  slug: string;
  image: string;
  description: string;
  nombreProduits: number;
}