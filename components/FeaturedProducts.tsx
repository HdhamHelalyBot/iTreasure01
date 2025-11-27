
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

const FeaturedProducts: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          {t('featured.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
