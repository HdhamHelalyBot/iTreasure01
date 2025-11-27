
import React from 'react';
import type { Product } from '../types';
import { useLanguage } from '../hooks/useLanguage';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language } = useLanguage();

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
      <div className="overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name[language]}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {product.name[language]}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {product.description[language]}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
