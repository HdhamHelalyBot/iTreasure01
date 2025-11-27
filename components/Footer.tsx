
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { ChipIcon } from './icons/CategoryIcons';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-start">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
               <ChipIcon className="h-8 w-8 text-brand-red-700" />
               <span className="text-2xl font-bold text-gray-900 dark:text-white">iTreasure</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs mx-auto md:mx-0">
                {t('footer.brief')}
            </p>
          </div>
          <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex space-x-6 rtl:space-x-reverse mb-4 md:mb-0">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-red-700 transition-colors">{t('footer.terms')}</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-red-700 transition-colors">{t('footer.privacy')}</a>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} iTreasure. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
