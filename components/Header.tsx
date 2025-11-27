
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';
import LanguageIcon from './icons/LanguageIcon';
import { ChipIcon } from './icons/CategoryIcons';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className="bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center gap-2 text-brand-red-700 dark:text-brand-red-700">
              <ChipIcon className="h-8 w-8" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">iTreasure</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">{t('nav.home')}</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">{t('nav.products')}</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">{t('nav.about')}</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">{t('nav.contact')}</a>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={handleLanguageChange}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Toggle Language"
            >
              <LanguageIcon className="h-6 w-6" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none ml-2 rtl:mr-2 rtl:ml-0"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
