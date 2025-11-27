
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SearchIcon from './icons/SearchIcon';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <div 
          className="absolute inset-0 bg-grid-gray-300/20 dark:bg-grid-gray-700/20 [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)]"
          style={{
            backgroundSize: '40px 40px',
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `
          }}
        ></div>
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            {t('hero.title')}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
            {t('hero.subtitle')}
          </p>
          <div className="mt-8 max-w-xl mx-auto">
            <form className="flex items-center bg-white dark:bg-gray-900 rounded-full shadow-lg p-2">
              <input
                type="search"
                placeholder={t('search.placeholder')}
                className="w-full bg-transparent border-none focus:ring-0 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 px-4 py-2"
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-brand-red-700 hover:bg-brand-red-800 text-white rounded-full w-12 h-12 flex-shrink-0 transform transition-transform duration-200 hover:scale-105"
                aria-label={t('search.button')}
              >
                <SearchIcon className="h-6 w-6"/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
