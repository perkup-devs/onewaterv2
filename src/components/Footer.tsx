import logo from '@/assets/logo.png';
import { useLanguage } from '@/i18n';
import { FileText } from 'lucide-react';

const Footer = () => {
  const { language, t } = useLanguage();
  const whitePaperHref = language === 'pt'
    ? '/documents/one-white-paper-pt-br.pdf'
    : '/documents/one-white-paper-en.pdf';

  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 mb-16">
            {/* Brand */}
            <div className="space-y-6">
              <img 
                src={logo} 
                alt="O.N.E. Water" 
                className="h-16"
              />
              <div className="h-px w-12 bg-accent"></div>
              <p className="text-sm font-light opacity-80 tracking-wide">
                {t.footer.brandText}
              </p>
            </div>

            {/* About */}
            <div className="space-y-6">
              <h4 className="text-sm uppercase tracking-[0.2em] font-light">{t.footer.aboutTitle}</h4>
              <p className="text-sm font-light opacity-80 leading-relaxed">
                {t.footer.aboutText}
              </p>
            </div>

            {/* Sustainability */}
            <div className="space-y-6">
              <h4 className="text-sm uppercase tracking-[0.2em] font-light">{t.footer.sustainabilityTitle}</h4>
              <p className="text-sm font-light opacity-80 leading-relaxed">
                {t.footer.sustainabilityText}
              </p>
            </div>

            {/* Documents */}
            <div className="space-y-6">
              <h4 className="text-sm uppercase tracking-[0.2em] font-light">{t.footer.documentsTitle}</h4>
              <a
                href={whitePaperHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.footer.documentsTitle}: ${t.footer.whitePaper}`}
                className="inline-flex items-center gap-2 text-sm font-light opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300"
              >
                <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.footer.whitePaper}</span>
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-primary-foreground/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-xs font-light opacity-60 tracking-wide">
                {t.footer.copyright}
              </p>
              <div className="flex gap-8 text-xs font-light opacity-60">
                <a href="#" className="hover:opacity-100 hover:text-accent transition-all duration-300">{t.footer.navPremium}</a>
                <a href="#" className="hover:opacity-100 hover:text-accent transition-all duration-300">{t.footer.navTechnology}</a>
                <a href="#" className="hover:opacity-100 hover:text-accent transition-all duration-300">{t.footer.navQuality}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
