import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            {/* Brand */}
            <div className="space-y-6">
              <img 
                src={logo} 
                alt="O.N.E. Water" 
                className="h-16"
              />
              <div className="h-px w-12 bg-accent"></div>
              <p className="text-sm font-light opacity-80 tracking-wide">
                Pristine Water by Perkup
              </p>
            </div>

            {/* About */}
            <div className="space-y-6">
              <h4 className="text-sm uppercase tracking-[0.2em] font-light">Ocean Nutrition Effect</h4>
              <p className="text-sm font-light opacity-80 leading-relaxed">
                Pioneira em tecnologias de purificação do oceano Atlântico
              </p>
            </div>

            {/* Sustainability */}
            <div className="space-y-6">
              <h4 className="text-sm uppercase tracking-[0.2em] font-light">100% Brasileiro</h4>
              <p className="text-sm font-light opacity-80 leading-relaxed">
                Compromisso com sustentabilidade e inovação
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-primary-foreground/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-xs font-light opacity-60 tracking-wide">
                © 2025 O.N.E. Todos os direitos reservados.
              </p>
              <div className="flex gap-8 text-xs font-light opacity-60">
                <a href="#" className="hover:opacity-100 hover:text-accent transition-all duration-300">Premium</a>
                <a href="#" className="hover:opacity-100 hover:text-accent transition-all duration-300">Tecnologia</a>
                <a href="#" className="hover:opacity-100 hover:text-accent transition-all duration-300">Qualidade</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
