
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { CATEGORIES } from '../constants';

const Categories: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          {t('categories.title')}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col items-center p-6 bg-white dark:bg-black rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-transparent hover:border-brand-red-700"
            >
              <category.icon className="h-12 w-12 text-brand-red-700 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-md font-semibold text-center text-gray-800 dark:text-gray-200">
                {category.name[language]}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
