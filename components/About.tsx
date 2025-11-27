
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{t('about.work.title')}</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('about.work.content')}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{t('about.us.title')}</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('about.us.content')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
