import { Product, Category } from "./types";

export const categories: Category[] = [
  {
    id: "mode",
    nom: "Mode & Accessoires",
    slug: "mode",
    image:
      "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Découvrez notre collection exclusive de vêtements et accessoires",
    nombreProduits: 156,
  },
  {
    id: "electronique",
    nom: "Électronique",
    slug: "electronique",
    image:
      "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Les dernières innovations technologiques",
    nombreProduits: 89,
  },
  {
    id: "maison",
    nom: "Maison & Jardin",
    slug: "maison",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Transformez votre espace avec nos produits design",
    nombreProduits: 234,
  },
  {
    id: "beaute",
    nom: "Beauté & Santé",
    slug: "beaute",
    image:
      "https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Produits de beauté et bien-être premium",
    nombreProduits: 78,
  },
];

export const products: Product[] = [
  {
    id: "1",
    nom: "Cap en Cuir Premium",
    description:
      "Veste en cuir véritable, confectionnée à la main avec finitions haut de gamme. Design intemporel et confort exceptionnel.",
    prix: 10500.75,
    prixOriginal: 15500.75,
    image:
      "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "mode",
    sousCategorie: "vestes",
    marque: "LuxeMode",
    disponible: true,
    note: 4.8,
    nombreAvis: 127,
    nouveau: false,
    promotion: true,
    tags: ["cuir", "premium", "unisexe"],
  },
  {
    id: "2",
    nom: "iPhone 11 Pro Max",
    description:
      'Le dernier smartphone avec écran OLED 6.7", processeur haute performance et système photo professionnel.',
    prix: 350000,
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4968638/pexels-photo-4968638.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "electronique",
    sousCategorie: "smartphones",
    marque: "Apple",
    disponible: true,
    note: 4.9,
    nombreAvis: 2341,
    nouveau: true,
    promotion: false,
    tags: ["5G", "camera pro", "dernière génération"],
  },
  {
    id: "3",
    nom: "Canapé Scandinave",
    description:
      "Canapé 3 places au design scandinave épuré. Tissu haut de gamme et structure en bois massif.",
    prix: 890000,
    image:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "maison",
    sousCategorie: "mobilier",
    marque: "NordicHome",
    disponible: true,
    note: 4.7,
    nombreAvis: 89,
    nouveau: false,
    promotion: false,
    tags: ["scandinave", "bois massif", "confortable"],
  },
  {
    id: "4",
    nom: "Parfum Élégance",
    description:
      "Fragrance sophistiquée aux notes florales et boisées. Édition limitée dans un flacon collector.",
    prix: 25000,
    prixOriginal: 35000,
    image:
      "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "beaute",
    sousCategorie: "parfums",
    marque: "Élégance Paris",
    disponible: true,
    note: 4.6,
    nombreAvis: 156,
    nouveau: false,
    promotion: true,
    tags: ["unisexe", "édition limitée", "longue tenue"],
  },
  {
    id: "5",
    nom: "Montre Chronographe",
    description:
      "Montre automatique suisse avec boîtier en acier inoxydable et bracelet en cuir italien.",
    prix: 125000,
    image:
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "mode",
    sousCategorie: "montres",
    marque: "Swiss Time",
    disponible: true,
    note: 4.9,
    nombreAvis: 203,
    nouveau: true,
    promotion: false,
    tags: ["suisse", "automatique", "cuir italien"],
  },
  {
    id: "6",
    nom: "Casque Audio Premium",
    description:
      "Casque sans fil avec réduction de bruit active et autonomie de 30 heures. Son haute fidélité.",
    prix: 40000,
    image:
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "electronique",
    sousCategorie: "audio",
    marque: "AudioTech",
    disponible: true,
    note: 4.8,
    nombreAvis: 445,
    nouveau: false,
    promotion: false,
    tags: ["sans fil", "réduction bruit", "longue autonomie"],
  },
  {
    id: "7",
    nom: "Montre Connectée FitLife",
    description:
      "Montre intelligente avec suivi de santé, GPS intégré et notifications en temps réel.",
    prix: 85750,
    image:
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "electronique",
    sousCategorie: "wearable",
    marque: "FitLife",
    disponible: true,
    note: 4.6,
    nombreAvis: 312,
    nouveau: true,
    promotion: true,
    tags: ["santé", "sport", "GPS"],
  },
  {
    id: "8",
    nom: "Sac à Main Élégance",
    description:
      "Sac en cuir véritable avec design minimaliste et bandoulière réglable.",
    prix: 129.99,
    image:
      "https://images.pexels.com/photos/1488465/pexels-photo-1488465.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1488465/pexels-photo-1488465.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "mode",
    sousCategorie: "sacs",
    marque: "BelleVie",
    disponible: true,
    note: 4.7,
    nombreAvis: 512,
    nouveau: false,
    promotion: false,
    tags: ["cuir", "minimaliste", "femme"],
  },
  {
    id: "9",
    nom: "Lampe de Table Moderne",
    description:
      "Lampe design avec base en bois et abat-jour en tissu pour une lumière douce.",
    prix: 45500,
    prixOriginal: 58000,
    image:
      "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "maison",
    sousCategorie: "luminaire",
    marque: "DecoLight",
    disponible: true,
    note: 4.4,
    nombreAvis: 178,
    nouveau: true,
    promotion: true,
    tags: ["scandinave", "bois", "design"],
  },
  {
    id: "10",
    nom: "Rouge à Lèvres Velvet",
    description:
      "Rouge à lèvres mat longue tenue avec une formule hydratante et riche en pigments.",
    prix: 30000,
    image:
      "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "beaute",
    sousCategorie: "maquillage",
    marque: "LuxeCosmetics",
    disponible: true,
    note: 4.9,
    nombreAvis: 623,
    nouveau: true,
    promotion: true,
    tags: ["mat", "hydratant", "longue tenue"],
  },
  {
    id: "11",
    nom: "Chaussures de Sport UltraRun",
    description:
      "Chaussures légères et respirantes avec semelle amortissante pour la course.",
    prix: 22500,
    prixOriginal: 30000,
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "mode",
    sousCategorie: "chaussures",
    marque: "UltraRun",
    disponible: true,
    note: 4.5,
    nombreAvis: 267,
    nouveau: false,
    promotion: true,
    tags: ["running", "confort", "respirant"],
  },
  {
    id: "13",
    nom: "Tasse Marbel",
    description: "Tasse haute puissance idéal pour smoothies, caffé et tea.",
    prix: 5000,
    image:
      "https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "maison",
    sousCategorie: "cuisine",
    marque: "KitchenPro",
    disponible: true,
    note: 4.6,
    nombreAvis: 342,
    nouveau: false,
    promotion: false,
    tags: ["smoothie", "polyvalent", "rapide"],
  },
  {
    id: "14",
    nom: "Parfum Élégance Noire",
    description:
      "Eau de parfum intense avec notes boisées et épicées, idéale pour soirées.",
    prix: 45000,
    prixOriginal: 62500,
    image:
      "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "beaute",
    sousCategorie: "parfum",
    marque: "Élégance",
    disponible: true,
    note: 4.7,
    nombreAvis: 421,
    nouveau: false,
    promotion: true,
    tags: ["soirée", "boisé", "élégant"],
  },
  {
    id: "15",
    nom: "Ordinateur Portable ZenBook",
    description:
      "Ultrabook léger avec écran Full HD, processeur rapide et autonomie de 12 heures.",
    prix: 575000,
    image:
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "electronique",
    sousCategorie: "ordinateurs",
    marque: "ZenTech",
    disponible: true,
    note: 4.8,
    nombreAvis: 523,
    nouveau: true,
    promotion: false,
    tags: ["ultrabook", "léger", "batterie longue"],
  },
  {
    id: "16",
    nom: "T-shirt d’Été Florale",
    description:
      "T-shirt légère avec motifs floraux, parfaite pour les journées ensoleillées.",
    prix: 15750,
    prixOriginal: 20000,
    image:
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "mode",
    sousCategorie: "robes",
    marque: "SummerVibes",
    disponible: true,
    note: 4.3,
    nombreAvis: 201,
    nouveau: true,
    promotion: true,
    tags: ["florale", "été", "homme"],
  },
  {
    id: "17",
    nom: "Fauteuil Relax Scandinave",
    description:
      "Fauteuil confortable avec revêtement en tissu et pieds en bois clair.",
    prix: 650000,
    image:
      "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "maison",
    sousCategorie: "mobilier",
    marque: "NordicHome",
    disponible: true,
    note: 4.8,
    nombreAvis: 134,
    nouveau: false,
    promotion: false,
    tags: ["confort", "scandinave", "design"],
  },
  {
    id: "18",
    nom: "Crème Hydratante PureSkin",
    description:
      "Crème visage hydratante à l’acide hyaluronique pour une peau douce et éclatante.",
    prix: 15000,
    image:
      "https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/5699669/pexels-photo-5699669.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "beaute",
    sousCategorie: "soins",
    marque: "PureSkin",
    disponible: true,
    note: 4.9,
    nombreAvis: 678,
    nouveau: true,
    promotion: false,
    tags: ["hydratant", "visage", "naturel"],
  },
  {
    id: "19",
    nom: "Enceinte Audio Kit",
    description:
      "Enceinte compacte et étanche avec son puissant et 20 heures d’autonomie.",
    prix: 25000,
    prixOriginal: 60000,
    image:
      "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "electronique",
    sousCategorie: "audio",
    marque: "SoundWave",
    disponible: true,
    note: 4.6,
    nombreAvis: 398,
    nouveau: false,
    promotion: true,
    tags: ["portable", "étanche", "puissant"],
  },
  {
    id: "20",
    nom: "Chemise Classique Homme",
    description:
      "Chemise en coton premium avec coupe ajustée, idéale pour le bureau.",
    prix: 25000,
    image:
      "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "mode",
    sousCategorie: "chemises",
    marque: "EleganMen",
    disponible: true,
    note: 4.5,
    nombreAvis: 220,
    nouveau: false,
    promotion: false,
    tags: ["coton", "bureau", "homme"],
  },
  {
    id: "21",
    nom: "Set de Couteaux Premium",
    description:
      "Ensemble de couteaux en acier inoxydable avec bloc en bois élégant.",
    prix: 7500,
    image:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    categorie: "maison",
    sousCategorie: "cuisine",
    marque: "ChefMaster",
    disponible: true,
    note: 4.7,
    nombreAvis: 310,
    nouveau: false,
    promotion: false,
    tags: ["inox", "cuisine", "professionnel"],
  },
];

export async function getFeaturedProducts(): Promise<Product[]> {
  return products.slice(0, 8); // More featured products from live data
}

export async function getNewProducts(): Promise<Product[]> {
  return products.filter((p) => p.nouveau);
}

export async function getSaleProducts(): Promise<Product[]> {
  return products.filter((p) => p.promotion);
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return products.find((p) => p.id === id);
}

export async function getProductsByCategory(
  categorySlug: string
): Promise<Product[]> {
  return products.filter((p) => p.categorie === categorySlug);
}
export const featuredProducts = products.slice(0, 4);
export const newProducts = products.filter((p) => p.nouveau);
export const saleProducts = products.filter((p) => p.promotion);
