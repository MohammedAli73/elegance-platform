import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Category } from '@/lib/types';

interface CategoryCardProps {
  category: Category;
  className?: string;
}

const CategoryCard = ({ category, className = '' }: CategoryCardProps) => {
  return (
    <Link href={`/produits?categorie=${category.slug}`}>
      <div className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${className}`}>
        {/* Background Image */}
        <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] overflow-hidden">
          <Image
            src={category.image}
            alt={category.nom}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
          <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 group-hover:translate-y-[-4px] transition-transform duration-300">
            {category.nom}
          </h3>
          <p className="text-xs sm:text-sm text-gray-200 mb-2 sm:mb-3 opacity-90 line-clamp-2">
            {category.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm text-gray-300">
              {category.nombreProduits} produits
            </span>
            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium group-hover:gap-2 sm:group-hover:gap-3 transition-all duration-300">
              Découvrir
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;