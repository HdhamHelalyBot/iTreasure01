
import type { Translations, Category, Product } from './types';
import { ChipIcon, CableIcon, CpuChipIcon, CubeTransparentIcon, CogIcon, WrenchScrewdriverIcon, CodeBracketIcon, BoltIcon, LightBulbIcon, CircleStackIcon } from './components/icons/CategoryIcons';


export const translations: Translations = {
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'hero.title': 'The Ultimate Hub for IT & Electronics Specialists',
    'hero.subtitle': 'Find everything from motherboards to microchips. Your next project starts here.',
    'search.placeholder': 'Search for products...',
    'search.button': 'Search',
    'categories.title': 'Product Categories',
    'featured.title': 'Featured Products',
    'about.work.title': 'What We Do',
    'about.work.content': 'iTreasure is a leading supplier of electronic components, IT equipment, and automation solutions. We provide high-quality products to professionals, hobbyists, and businesses, empowering innovation and development in the tech industry.',
    'about.us.title': 'Who We Are',
    'about.us.content': 'Founded by a team of passionate engineers, iTreasure aims to be the most reliable and comprehensive resource for all your electronic and IT needs. We believe in quality, affordability, and exceptional customer service.',
    'footer.brief': 'iTreasure: Your treasure trove for IT and electronic components. We provide the parts that power your passion.',
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.rights': 'All rights reserved.',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.products': 'المنتجات',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'hero.title': 'الوجهة المثلى لمتخصصي تكنولوجيا المعلومات والإلكترونيات',
    'hero.subtitle': 'ابحث عن كل شيء من اللوحات الأم إلى الرقائق الدقيقة. مشروعك القادم يبدأ هنا.',
    'search.placeholder': 'ابحث عن المنتجات...',
    'search.button': 'بحث',
    'categories.title': 'فئات المنتجات',
    'featured.title': 'المنتجات المميزة',
    'about.work.title': 'طبيعة عملنا',
    'about.work.content': 'آي تريجر هي المورد الرائد للمكونات الإلكترونية ومعدات تكنولوجيا المعلومات وحلول الأتمتة. نحن نقدم منتجات عالية الجودة للمحترفين والهواة والشركات، مما يدعم الابتكار والتطوير في صناعة التكنولوجيا.',
    'about.us.title': 'من نحن',
    'about.us.content': 'تأسست آي تريجر على يد فريق من المهندسين الشغوفين، وتهدف إلى أن تكون المورد الأكثر موثوقية وشمولية لجميع احتياجاتك الإلكترونية والمتعلقة بتكنولوجيا المعلومات. نحن نؤمن بالجودة والأسعار المعقولة وخدمة العملاء الاستثنائية.',
    'footer.brief': 'آي تريجر: كنزك الثمين لمكونات تكنولوجيا المعلومات والإلكترونيات. نحن نوفر الأجزاء التي تشغل شغفك.',
    'footer.terms': 'الشروط والأحكام',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.rights': 'جميع الحقوق محفوظة.',
  },
};

export const CATEGORIES: Category[] = [
  { id: 1, name: { en: 'Connectors & Cables', ar: 'موصلات وكابلات' }, icon: CableIcon },
  { id: 2, name: { en: 'Semiconductors', ar: 'أشباه الموصلات' }, icon: ChipIcon },
  { id: 3, name: { en: 'Passive Components', ar: 'مكونات سلبية' }, icon: CircleStackIcon },
  { id: 4, name: { en: 'Electromechanical', ar: 'كهروميكانيكية' }, icon: CogIcon },
  { id: 5, name: { en: 'Automation & Control', ar: 'الأتمتة والتحكم' }, icon: CpuChipIcon },
  { id: 6, name: { en: 'Computer Tools', ar: 'أدوات الكمبيوتر' }, icon: WrenchScrewdriverIcon },
  { id: 7, name: { en: 'Software & Development', ar: 'التطوير والبرمجيات' }, icon: CodeBracketIcon },
  { id: 8, name: { en: 'Power & Circuit Protection', ar: 'الطاقة وحماية الدوائر' }, icon: BoltIcon },
  { id: 9, name: { en: 'Optoelectronics', ar: 'الإلكترونيات الضوئية' }, icon: LightBulbIcon },
  { id: 10, name: { en: 'Engineering Software', ar: 'برمجيات الهندسة' }, icon: CubeTransparentIcon },
];

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: { en: 'High-Performance CPU', ar: 'معالج عالي الأداء' },
        description: { en: 'Latest generation processor for demanding applications and gaming.', ar: 'معالج من الجيل الأحدث للتطبيقات والألعاب المتطلبة.' },
        imageUrl: 'https://picsum.photos/seed/cpu/400/300',
        category: 'Semiconductors'
    },
    {
        id: 2,
        name: { en: 'Braided HDMI Cable', ar: 'كابل HDMI مجدول' },
        description: { en: '4K ready, high-speed HDMI cable with gold-plated connectors.', ar: 'كابل HDMI عالي السرعة جاهز لدقة 4K مع موصلات مطلية بالذهب.' },
        imageUrl: 'https://picsum.photos/seed/cable/400/300',
        category: 'Connectors & Cables'
    },
    {
        id: 3,
        name: { en: 'Industrial Automation PLC', ar: 'وحدة تحكم منطقية قابلة للبرمجة صناعية' },
        description: { en: 'Robust PLC for controlling machinery and industrial processes.', ar: 'وحدة تحكم قوية للتحكم في الآلات والعمليات الصناعية.' },
        imageUrl: 'https://picsum.photos/seed/plc/400/300',
        category: 'Automation & Control'
    },
    {
        id: 4,
        name: { en: 'Precision Tool Kit', ar: 'مجموعة أدوات دقيقة' },
        description: { en: '72-piece tool kit for computer and electronics repair.', ar: 'مجموعة أدوات مكونة من 72 قطعة لإصلاح أجهزة الكمبيوتر والإلكترونيات.' },
        imageUrl: 'https://picsum.photos/seed/tools/400/300',
        category: 'Computer Tools'
    },
    {
        id: 5,
        name: { en: 'Variable Power Supply', ar: 'مزود طاقة متغير' },
        description: { en: '0-30V, 0-5A benchtop power supply for testing and development.', ar: 'مزود طاقة مكتبي بجهد 0-30 فولت وتيار 0-5 أمبير للاختبار والتطوير.' },
        imageUrl: 'https://picsum.photos/seed/power/400/300',
        category: 'Power & Circuit Protection'
    },
    {
        id: 6,
        name: { en: 'IoT Development Board', ar: 'لوحة تطوير إنترنت الأشياء' },
        description: { en: 'WiFi and Bluetooth enabled board for building connected devices.', ar: 'لوحة تدعم الواي فاي والبلوتوث لبناء الأجهزة المتصلة.' },
        imageUrl: 'https://picsum.photos/seed/iot/400/300',
        category: 'Software & Development'
    }
];
