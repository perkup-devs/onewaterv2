import { languages, type Language, useLanguage } from "@/i18n";

const languageLabels: Record<Language, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
};

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex items-center gap-1 rounded-full border border-primary/15 bg-card/95 p-1.5 shadow-premium backdrop-blur-md sm:bottom-6 sm:right-6"
      role="group"
      aria-label={t.languageSwitcher.label}
    >
      {languages.map((option) => {
        const isActive = option === language;

        return (
          <button
            key={option}
            type="button"
            aria-label={t.languageSwitcher.options[option]}
            aria-pressed={isActive}
            title={t.languageSwitcher.options[option]}
            onClick={() => setLanguage(option)}
            className={`h-10 min-w-10 rounded-full px-3 text-xs font-medium tracking-[0.12em] transition-all duration-300 ${
              isActive
                ? "bg-primary text-primary-foreground shadow-soft"
                : "text-primary hover:bg-primary/10 hover:text-primary"
            }`}
          >
            {languageLabels[option]}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
