
// FIX: To resolve the "Cannot find namespace 'React'" error, `ComponentType` is imported from 'react'.
import type { ComponentType } from 'react';

export type Language = 'en' | 'ar';

export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export interface Category {
  id: number;
  name: {
    en: string;
    ar: string;
  };
  icon: ComponentType<{ className?: string }>;
}

export interface Product {
  id: number;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  imageUrl: string;
  category: string;
}