/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "pt" | "en" | "es";

export const languages: Language[] = ["pt", "en", "es"];

export const translations = {
  pt: {
    meta: {
      htmlLang: "pt-BR",
      title: "O.N.E. - Ocean Nutrition Effect | Água Premium do Mar",
      description:
        "Água purificada do mar com mais de 63 minerais naturais através de tecnologia avançada e nanotecnologia. Pioneirismo brasileiro em água premium.",
      keywords: "água premium, minerais naturais, nanotecnologia, água do mar, dessalinização, água purificada",
    },
    languageSwitcher: {
      label: "Selecionar idioma",
      options: {
        pt: "Português",
        en: "Inglês",
        es: "Espanhol",
      },
    },
    hero: {
      label: "Coleção Pristine Water",
      logoAlt: "O.N.E. Water",
      subtitle: "Das profundezas do Oceano Atlântico",
      description: "Água purificada do mar com mais de 63 minerais naturais através de nanotecnologia avançada",
    },
    premium: {
      headerLabel: "Coleção Exclusiva",
      titlePrefix: "ONE",
      titleAccent: "Premium",
      description:
        "Uma nova era de sofisticação. Design audacioso em preto e dourado, onde cada detalhe reflete excelência e exclusividade.",
      oceanWater: "Ocean Water",
      reserveAlt: "ONE Ocean Water Reserve - Edição Limitada",
      reserveBadge: "Edição Limitada",
      reserveTitle: "Ocean Water Reserve",
      collectionAlt: "ONE Ocean Water Collection",
      collectionBadge: "Coleção",
      crystalTitle: "Crystal Edition",
      stillAlt: "ONE Ocean Water Sem Gás",
      stillLabel: "Sem Gás",
      sparklingAlt: "ONE Ocean Water Com Gás",
      sparklingLabel: "Com Gás",
      beerCollection: "Cerveja Premium",
      beerBottleAlt: "ONE Cerveja Premium Pilsen",
      pureMalt: "Puro Malte",
      pilsen: "Pilsen",
      beerCanAlt: "ONE Cerveja Premium Lata",
      premiumCan: "Lata Premium",
      volume350: "350ml",
      reserveKitAlt: "ONE Reserva Especial Kit",
      specialReserve: "Reserva Especial",
      superPremium: "Super Premium",
      maltKitAlt: "ONE Cerveja Puro Malte Kit",
      limitedEdition: "Edição Limitada",
      threeBottles: "3 Garrafas",
      nutrition: "Ocean Nutrition Effect",
      functionalAlt: "ONE Ocean Nutrition Effect - Bebidas Funcionais",
      functionalBadge: "Bebida Funcional",
      functionalFlavors: "Hibiscus · Seawepple & Saíca · Aloe Vera",
    },
    productGlass: {
      label: "Edição Vidro",
      titleLine1: "Pristine",
      titleLine2: "Water",
      volume: "750ml",
      description:
        "Garrafa de vidro premium com tampa dourada. Pureza absoluta do oceano Atlântico em design minimalista e elegante.",
      cta: "Descubra",
      alt: "Garrafa de vidro O.N.E. Pristine Water",
    },
    productCan: {
      label: "Lata Premium",
      titleLine1: "Ocean",
      titleLine2: "Waves",
      volume: "350ml",
      description:
        "Design artístico exclusivo com ondas oceânicas em detalhes dourados. Arte que reflete a origem de nossa água.",
      cta: "Descubra",
      alt: "Lata premium O.N.E.",
    },
    productGold: {
      label: "Edição Limitada",
      titleLine1: "Sparkling",
      titleLine2: "Gold",
      volume: "750ml",
      description:
        "Edição especial com água gaseificada do oceano Atlântico. Garrafa dourada exclusiva que transforma cada momento em celebração.",
      cta: "Descubra",
      alt: "O.N.E. Sparkling Gold Edition",
    },
    productCups: {
      label: "Coleção",
      titleLine1: "Pristine",
      titleLine2: "Cups",
      edition: "Edição Colecionável",
      description:
        "Copos premium com logo dourado em cores exclusivas. Elegância e sofisticação em cada detalhe do design.",
      cta: "Descubra",
      alt: "Colecao de copos O.N.E. Pristine Cups",
    },
    technology: {
      label: "Inovação Brasileira",
      titleLine1: "Nanotecnologia",
      titleLine2: "Avançada",
      naturalMinerals: "Minerais Naturais",
      fromCoast: "Da Costa",
      sustainable: "Sustentável",
      oms: "Padrões OMS",
    },
    footer: {
      brandText: "Pristine Water by Perkup",
      aboutTitle: "Ocean Nutrition Effect",
      aboutText: "Pioneira em tecnologias de purificação do oceano Atlântico",
      sustainabilityTitle: "100% Brasileiro",
      sustainabilityText: "Compromisso com sustentabilidade e inovação",
      documentsTitle: "Documentos",
      whitePaper: "White Paper",
      copyright: "© 2025 O.N.E. Todos os direitos reservados.",
      navPremium: "Premium",
      navTechnology: "Tecnologia",
      navQuality: "Qualidade",
    },
    notFound: {
      message: "Página não encontrada",
      returnHome: "Voltar para o início",
    },
  },
  en: {
    meta: {
      htmlLang: "en",
      title: "O.N.E. - Ocean Nutrition Effect | Premium Ocean Water",
      description:
        "Purified ocean water with more than 63 natural minerals through advanced technology and nanotechnology. Brazilian pioneer in premium water.",
      keywords: "premium water, natural minerals, nanotechnology, ocean water, desalination, purified water",
    },
    languageSwitcher: {
      label: "Select language",
      options: {
        pt: "Portuguese",
        en: "English",
        es: "Spanish",
      },
    },
    hero: {
      label: "Pristine Water Collection",
      logoAlt: "O.N.E. Water",
      subtitle: "From the depths of the Atlantic Ocean",
      description: "Purified seawater with more than 63 natural minerals through advanced nanotechnology",
    },
    premium: {
      headerLabel: "Exclusive Collection",
      titlePrefix: "ONE",
      titleAccent: "Premium",
      description:
        "A new era of sophistication. Bold design in black and gold, where every detail reflects excellence and exclusivity.",
      oceanWater: "Ocean Water",
      reserveAlt: "ONE Ocean Water Reserve - Limited Edition",
      reserveBadge: "Limited Edition",
      reserveTitle: "Ocean Water Reserve",
      collectionAlt: "ONE Ocean Water Collection",
      collectionBadge: "Collection",
      crystalTitle: "Crystal Edition",
      stillAlt: "ONE Ocean Water Still",
      stillLabel: "Still",
      sparklingAlt: "ONE Ocean Water Sparkling",
      sparklingLabel: "Sparkling",
      beerCollection: "Premium Beer",
      beerBottleAlt: "ONE Premium Pilsen Beer",
      pureMalt: "Pure Malt",
      pilsen: "Pilsen",
      beerCanAlt: "ONE Premium Beer Can",
      premiumCan: "Premium Can",
      volume350: "350ml",
      reserveKitAlt: "ONE Special Reserve Kit",
      specialReserve: "Special Reserve",
      superPremium: "Super Premium",
      maltKitAlt: "ONE Pure Malt Beer Kit",
      limitedEdition: "Limited Edition",
      threeBottles: "3 Bottles",
      nutrition: "Ocean Nutrition Effect",
      functionalAlt: "ONE Ocean Nutrition Effect - Functional Beverages",
      functionalBadge: "Functional Beverage",
      functionalFlavors: "Hibiscus · Seawepple & Saíca · Aloe Vera",
    },
    productGlass: {
      label: "Glass Edition",
      titleLine1: "Pristine",
      titleLine2: "Water",
      volume: "750ml",
      description:
        "Premium glass bottle with a gold cap. Absolute purity from the Atlantic Ocean in a minimalist, elegant design.",
      cta: "Discover",
      alt: "O.N.E. Pristine Water glass bottle",
    },
    productCan: {
      label: "Premium Can",
      titleLine1: "Ocean",
      titleLine2: "Waves",
      volume: "350ml",
      description:
        "Exclusive artistic design with ocean waves in gold details. Art that reflects the origin of our water.",
      cta: "Discover",
      alt: "O.N.E. Premium Can",
    },
    productGold: {
      label: "Limited Edition",
      titleLine1: "Sparkling",
      titleLine2: "Gold",
      volume: "750ml",
      description:
        "Special edition with sparkling water from the Atlantic Ocean. An exclusive golden bottle that turns every moment into a celebration.",
      cta: "Discover",
      alt: "O.N.E. Sparkling Gold Edition",
    },
    productCups: {
      label: "Collection",
      titleLine1: "Pristine",
      titleLine2: "Cups",
      edition: "Collectible Edition",
      description: "Premium cups with a gold logo in exclusive colors. Elegance and sophistication in every design detail.",
      cta: "Discover",
      alt: "O.N.E. Pristine Cups Collection",
    },
    technology: {
      label: "Brazilian Innovation",
      titleLine1: "Advanced",
      titleLine2: "Nanotechnology",
      naturalMinerals: "Natural Minerals",
      fromCoast: "From the Coast",
      sustainable: "Sustainable",
      oms: "WHO Standards",
    },
    footer: {
      brandText: "Pristine Water by Perkup",
      aboutTitle: "Ocean Nutrition Effect",
      aboutText: "A pioneer in Atlantic Ocean purification technologies",
      sustainabilityTitle: "100% Brazilian",
      sustainabilityText: "Commitment to sustainability and innovation",
      documentsTitle: "Documents",
      whitePaper: "White Paper",
      copyright: "© 2025 O.N.E. All rights reserved.",
      navPremium: "Premium",
      navTechnology: "Technology",
      navQuality: "Quality",
    },
    notFound: {
      message: "Oops! Page not found",
      returnHome: "Return to Home",
    },
  },
  es: {
    meta: {
      htmlLang: "es",
      title: "O.N.E. - Ocean Nutrition Effect | Agua Premium del Mar",
      description:
        "Agua purificada del mar con más de 63 minerales naturales mediante tecnología avanzada y nanotecnología. Pioneros brasileños en agua premium.",
      keywords: "agua premium, minerales naturales, nanotecnología, agua de mar, desalinización, agua purificada",
    },
    languageSwitcher: {
      label: "Seleccionar idioma",
      options: {
        pt: "Portugués",
        en: "Inglés",
        es: "Español",
      },
    },
    hero: {
      label: "Colección Pristine Water",
      logoAlt: "O.N.E. Water",
      subtitle: "Desde las profundidades del Océano Atlántico",
      description: "Agua purificada del mar con más de 63 minerales naturales mediante nanotecnología avanzada",
    },
    premium: {
      headerLabel: "Colección Exclusiva",
      titlePrefix: "ONE",
      titleAccent: "Premium",
      description:
        "Una nueva era de sofisticación. Diseño audaz en negro y dorado, donde cada detalle refleja excelencia y exclusividad.",
      oceanWater: "Ocean Water",
      reserveAlt: "ONE Ocean Water Reserve - Edición Limitada",
      reserveBadge: "Edición Limitada",
      reserveTitle: "Ocean Water Reserve",
      collectionAlt: "ONE Ocean Water Collection",
      collectionBadge: "Colección",
      crystalTitle: "Crystal Edition",
      stillAlt: "ONE Ocean Water Sin Gas",
      stillLabel: "Sin Gas",
      sparklingAlt: "ONE Ocean Water Con Gas",
      sparklingLabel: "Con Gas",
      beerCollection: "Cerveza Premium",
      beerBottleAlt: "ONE Cerveza Premium Pilsen",
      pureMalt: "Malta Pura",
      pilsen: "Pilsen",
      beerCanAlt: "ONE Cerveza Premium Lata",
      premiumCan: "Lata Premium",
      volume350: "350ml",
      reserveKitAlt: "ONE Kit Reserva Especial",
      specialReserve: "Reserva Especial",
      superPremium: "Super Premium",
      maltKitAlt: "ONE Kit Cerveza Malta Pura",
      limitedEdition: "Edición Limitada",
      threeBottles: "3 Botellas",
      nutrition: "Ocean Nutrition Effect",
      functionalAlt: "ONE Ocean Nutrition Effect - Bebidas Funcionales",
      functionalBadge: "Bebida Funcional",
      functionalFlavors: "Hibiscus · Seawepple & Saíca · Aloe Vera",
    },
    productGlass: {
      label: "Edición Vidrio",
      titleLine1: "Pristine",
      titleLine2: "Water",
      volume: "750ml",
      description:
        "Botella de vidrio premium con tapa dorada. Pureza absoluta del océano Atlántico en un diseño minimalista y elegante.",
      cta: "Descubrir",
      alt: "Botella de vidrio O.N.E. Pristine Water",
    },
    productCan: {
      label: "Lata Premium",
      titleLine1: "Ocean",
      titleLine2: "Waves",
      volume: "350ml",
      description:
        "Diseño artístico exclusivo con olas oceánicas en detalles dorados. Arte que refleja el origen de nuestra agua.",
      cta: "Descubrir",
      alt: "Lata premium O.N.E.",
    },
    productGold: {
      label: "Edición Limitada",
      titleLine1: "Sparkling",
      titleLine2: "Gold",
      volume: "750ml",
      description:
        "Edición especial con agua gasificada del océano Atlántico. Botella dorada exclusiva que transforma cada momento en celebración.",
      cta: "Descubrir",
      alt: "O.N.E. Sparkling Gold Edition",
    },
    productCups: {
      label: "Colección",
      titleLine1: "Pristine",
      titleLine2: "Cups",
      edition: "Edición Coleccionable",
      description:
        "Vasos premium con logotipo dorado en colores exclusivos. Elegancia y sofisticación en cada detalle del diseño.",
      cta: "Descubrir",
      alt: "Coleccion de vasos O.N.E. Pristine Cups",
    },
    technology: {
      label: "Innovación Brasileña",
      titleLine1: "Nanotecnología",
      titleLine2: "Avanzada",
      naturalMinerals: "Minerales Naturales",
      fromCoast: "De la Costa",
      sustainable: "Sostenible",
      oms: "Estándares OMS",
    },
    footer: {
      brandText: "Pristine Water by Perkup",
      aboutTitle: "Ocean Nutrition Effect",
      aboutText: "Pionera en tecnologías de purificación del océano Atlántico",
      sustainabilityTitle: "100% Brasileño",
      sustainabilityText: "Compromiso con la sostenibilidad y la innovación",
      documentsTitle: "Documentos",
      whitePaper: "White Paper",
      copyright: "© 2025 O.N.E. Todos los derechos reservados.",
      navPremium: "Premium",
      navTechnology: "Tecnología",
      navQuality: "Calidad",
    },
    notFound: {
      message: "Página no encontrada",
      returnHome: "Volver al inicio",
    },
  },
} as const;

export type TranslationContent = (typeof translations)[Language];

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationContent;
};

const STORAGE_KEY = "onewater-language";
const DEFAULT_LANGUAGE: Language = "pt";
const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const isLanguage = (value: string | null): value is Language => {
  return value !== null && languages.includes(value as Language);
};

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  try {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    return isLanguage(storedLanguage) ? storedLanguage : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
};

const updateMetaContent = (selector: string, content: string) => {
  const element = document.querySelector<HTMLMetaElement>(selector);

  if (element) {
    element.setAttribute("content", content);
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang;
    document.title = t.meta.title;

    updateMetaContent('meta[name="description"]', t.meta.description);
    updateMetaContent('meta[name="keywords"]', t.meta.keywords);
    updateMetaContent('meta[property="og:title"]', t.meta.title);
    updateMetaContent('meta[name="twitter:title"]', t.meta.title);
    updateMetaContent('meta[property="og:description"]', t.meta.description);
    updateMetaContent('meta[name="twitter:description"]', t.meta.description);

    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // The language still changes even when localStorage is unavailable.
    }
  }, [language, t]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
};
