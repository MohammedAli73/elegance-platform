import { Product, Category } from './types';

export const categories: Category[] = [
  {
    id: 'mode',
    nom: 'Mode & Accessoires',
    slug: 'mode',
    image: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Découvrez notre collection exclusive de vêtements et accessoires',
    nombreProduits: 156
  },
  {
    id: 'electronique',
    nom: 'Électronique',
    slug: 'electronique',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Les dernières innovations technologiques',
    nombreProduits: 89
  },
  {
    id: 'maison',
    nom: 'Maison & Jardin',
    slug: 'maison',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Transformez votre espace avec nos produits design',
    nombreProduits: 234
  },
  {
    id: 'beaute',
    nom: 'Beauté & Santé',
    slug: 'beaute',
    image: 'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Produits de beauté et bien-être premium',
    nombreProduits: 78
  }
];

export const products: Product[] = [
  {
    id: '1',
    nom: 'Veste en Cuir Premium',
    description: 'Veste en cuir véritable, confectionnée à la main avec finitions haut de gamme. Design intemporel et confort exceptionnel.',
    prix: 299.99,
    prixOriginal: 399.99,
    image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    categorie: 'mode',
    sousCategorie: 'vestes',
    marque: 'LuxeMode',
    disponible: true,
    note: 4.8,
    nombreAvis: 127,
    nouveau: false,
    promotion: true,
    tags: ['cuir', 'premium', 'unisexe']
  },
  {
    id: '2',
    nom: 'Smartphone Pro Max',
    description: 'Le dernier smartphone avec écran OLED 6.7", processeur haute performance et système photo professionnel.',
    prix: 1299.99,
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4968638/pexels-photo-4968638.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    categorie: 'electronique',
    sousCategorie: 'smartphones',
    marque: 'TechPro',
    disponible: true,
    note: 4.9,
    nombreAvis: 2341,
    nouveau: true,
    promotion: false,
    tags: ['5G', 'camera pro', 'dernière génération']
  },
  {
    id: '3',
    nom: 'Canapé Scandinave',
    description: 'Canapé 3 places au design scandinave épuré. Tissu haut de gamme et structure en bois massif.',
    prix: 899.99,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    categorie: 'maison',
    sousCategorie: 'mobilier',
    marque: 'NordicHome',
    disponible: true,
    note: 4.7,
    nombreAvis: 89,
    nouveau: false,
    promotion: false,
    tags: ['scandinave', 'bois massif', 'confortable']
  },
  {
    id: '4',
    nom: 'Parfum Élégance',
    description: 'Fragrance sophistiquée aux notes florales et boisées. Édition limitée dans un flacon collector.',
    prix: 129.99,
    prixOriginal: 159.99,
    image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    categorie: 'beaute',
    sousCategorie: 'parfums',
    marque: 'Élégance Paris',
    disponible: true,
    note: 4.6,
    nombreAvis: 156,
    nouveau: false,
    promotion: true,
    tags: ['unisexe', 'édition limitée', 'longue tenue']
  },
  {
    id: '5',
    nom: 'Montre Chronographe',
    description: 'Montre automatique suisse avec boîtier en acier inoxydable et bracelet en cuir italien.',
    prix: 599.99,
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    categorie: 'mode',
    sousCategorie: 'montres',
    marque: 'Swiss Time',
    disponible: true,
    note: 4.9,
    nombreAvis: 203,
    nouveau: true,
    promotion: false,
    tags: ['suisse', 'automatique', 'cuir italien']
  },
  {
    id: '6',
    nom: 'Casque Audio Premium',
    description: 'Casque sans fil avec réduction de bruit active et autonomie de 30 heures. Son haute fidélité.',
    prix: 349.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    categorie: 'electronique',
    sousCategorie: 'audio',
    marque: 'AudioTech',
    disponible: true,
    note: 4.8,
    nombreAvis: 445,
    nouveau: false,
    promotion: false,
    tags: ['sans fil', 'réduction bruit', 'longue autonomie']
  }
];

export const featuredProducts = products.slice(0, 4);
export const newProducts = products.filter(p => p.nouveau);
export const saleProducts = products.filter(p => p.promotion);