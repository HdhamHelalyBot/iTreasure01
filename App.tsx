import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './hooks/useLanguage';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { LEGAL_CONTENT } from './constants';
import type { Language } from './types';

type ModalContentKey = 'terms' | 'privacy';

// Define a more specific type for LEGAL_CONTENT to help TypeScript
interface LegalContent {
  title: string;
  content: string;
}

interface LegalContentCollection {
  [key: string]: {
    [lang in Language]: LegalContent;
  };
}

const legalContentStyles = [
  'space-y-2',
  '[&_h3]:text-lg [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-2',
  '[&_h3]:text-gray-900 dark:[&_h3]:text-white',
  '[&_ul]:list-disc [&_ul]:list-inside',
  'ltr:[&_ul]:ml-4 rtl:[&_ul]:mr-4',
].join(' ');

const AppContent: React.FC<{ theme: 'light' | 'dark'; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
  const [modalContentKey, setModalContentKey] = useState<ModalContentKey | null>(null);
  const { language } = useLanguage();

  const handleOpenModal = (key: ModalContentKey) => {
    setModalContentKey(key);
  };

  const handleCloseModal = () => {
    setModalContentKey(null);
  };

  const modalContent = modalContentKey ? (LEGAL_CONTENT as LegalContentCollection)[modalContentKey][language] : null;

  return (
    <>
      <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <Categories />
          <FeaturedProducts />
          <About />
        </main>
        <Footer onLegalLinkClick={handleOpenModal} />
      </div>
      <Modal
        isOpen={!!modalContentKey}
        onClose={handleCloseModal}
        title={modalContent?.title || ''}
      >
        {modalContent && (
          <div
            className={legalContentStyles}
            dangerouslySetInnerHTML={{ __html: modalContent.content }}
          />
        )}
      </Modal>
    </>
  );
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme === 'dark' || storedTheme === 'light') {
        return storedTheme;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <LanguageProvider>
      <AppContent theme={theme} toggleTheme={toggleTheme} />
    </LanguageProvider>
  );
};

export default App;
