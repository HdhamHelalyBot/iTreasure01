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

export const LEGAL_CONTENT = {
  terms: {
    en: {
      title: 'Terms & Conditions',
      content: `
        <p>Welcome to iTreasure. These terms and conditions outline the rules and regulations for the use of iTreasure's Website.</p>
        <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use iTreasure if you do not agree to take all of the terms and conditions stated on this page.</p>
        <h3>Cookies</h3>
        <p>We employ the use of cookies. By accessing iTreasure, you agreed to use cookies in agreement with the iTreasure's Privacy Policy.</p>
        <h3>License</h3>
        <p>Unless otherwise stated, iTreasure and/or its licensors own the intellectual property rights for all material on iTreasure. All intellectual property rights are reserved. You may access this from iTreasure for your own personal use subjected to restrictions set in these terms and conditions.</p>
        <p>You must not:</p>
        <ul>
          <li>Republish material from iTreasure</li>
          <li>Sell, rent or sub-license material from iTreasure</li>
          <li>Reproduce, duplicate or copy material from iTreasure</li>
          <li>Redistribute content from iTreasure</li>
        </ul>
      `,
    },
    ar: {
      title: 'الشروط والأحكام',
      content: `
        <p>مرحبًا بكم في آي تريجر. تحدد هذه الشروط والأحكام القواعد واللوائح الخاصة باستخدام موقع آي تريجر.</p>
        <p>من خلال الوصول إلى هذا الموقع، نفترض أنك تقبل هذه الشروط والأحكام. لا تواصل استخدام آي تريجر إذا كنت لا توافق على جميع الشروط والأحكام المذكورة في هذه الصفحة.</p>
        <h3>ملفات تعريف الارتباط</h3>
        <p>نحن نستخدم ملفات تعريف الارتباط. من خلال الوصول إلى آي تريجر، فإنك توافق على استخدام ملفات تعريف الارتباط بالاتفاق مع سياسة الخصوصية الخاصة بـ آي تريجر.</p>
        <h3>الترخيص</h3>
        <p>ما لم يُنص على خلاف ذلك، تمتلك آي تريجر و / أو مرخصوها حقوق الملكية الفكرية لجميع المواد الموجودة على آي تريجر. جميع حقوق الملكية الفكرية محفوظة. يمكنك الوصول إلى هذا من آي تريجر لاستخدامك الشخصي مع مراعاة القيود المنصوص عليها في هذه الشروط والأحكام.</p>
        <p>يجب عليك عدم:</p>
        <ul>
          <li>إعادة نشر المواد من آي تريجر</li>
          <li>بيع أو تأجير أو ترخيص المواد من آي تريجر</li>
          <li>إعادة إنتاج أو نسخ أو تكرار المواد من آي تريجر</li>
          <li>إعادة توزيع المحتوى من آي تريجر</li>
        </ul>
      `,
    },
  },
  privacy: {
    en: {
      title: 'Privacy Policy',
      content: `
        <p>Your privacy is important to us. It is iTreasure's policy to respect your privacy regarding any information we may collect from you across our website.</p>
        <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
        <h3>Information We Collect</h3>
        <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
        <h3>How We Use Your Information</h3>
        <p>We use the information we collect in various ways, including to:</p>
        <ul>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
        </ul>
      `,
    },
    ar: {
      title: 'سياسة الخصوصية',
      content: `
        <p>خصوصيتك تهمنا. إن سياسة آي تريجر هي احترام خصوصيتك فيما يتعلق بأي معلومات قد نجمعها منك عبر موقعنا.</p>
        <p>نحن نطلب فقط المعلومات الشخصية عندما نحتاجها حقًا لتقديم خدمة لك. نقوم بجمعها بوسائل عادلة وقانونية، بمعرفتك وموافقتك. كما نعلمك لماذا نجمعها وكيف سيتم استخدامها.</p>
        <h3>المعلومات التي نجمعها</h3>
        <p>سيتم توضيح المعلومات الشخصية التي يُطلب منك تقديمها، والأسباب التي يُطلب منك تقديمها من أجلها، لك في الوقت الذي نطلب منك فيه تقديم معلوماتك الشخصية.</p>
        <h3>كيف نستخدم معلوماتك</h3>
        <p>نحن نستخدم المعلومات التي نجمعها بطرق مختلفة، بما في ذلك:</p>
        <ul>
          <li>توفير وتشغيل وصيانة موقعنا</li>
          <li>تحسين وتخصيص وتوسيع موقعنا</li>
          <li>فهم وتحليل كيفية استخدامك لموقعنا</li>
          <li>تطوير منتجات وخدمات وميزات ووظائف جديدة</li>
        </ul>
      `,
    },
  },
};
