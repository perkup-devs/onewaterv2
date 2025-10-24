import { useEffect, useState } from 'react';
import logo from '@/assets/logo.png';

const Hero = () => {
  const [showLine, setShowLine] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowLine(true), 100),
      setTimeout(() => setShowLabel(true), 300),
      setTimeout(() => setShowTitle(true), 600),
      setTimeout(() => setShowSubtitle(true), 1000),
      setTimeout(() => setShowDescription(true), 1400),
      setTimeout(() => setShowScroll(true), 1800),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-card">
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <div className="inline-block">
              <div className={`h-px w-20 bg-accent mx-auto mb-8 transition-all duration-700 ${showLine ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
              <p className={`text-xs uppercase tracking-[0.4em] text-muted-foreground font-light transition-all duration-700 ${showLabel ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Pristine Water Collection
              </p>
            </div>
            
            <div className={`transition-all duration-1000 ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <img 
                src={logo} 
                alt="O.N.E. Water" 
                className="h-32 lg:h-40 mx-auto logo-primary-filter"
              />
            </div>
            
            <p className={`text-xl lg:text-2xl font-light text-foreground tracking-wide max-w-2xl mx-auto transition-all duration-1000 ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              From the depths of the Atlantic Ocean
            </p>
          </div>
          
          <div className={`pt-8 transition-all duration-1000 ${showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-md mx-auto">
              Água purificada do mar com mais de 63 minerais naturais através de nanotecnologia avançada
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${showScroll ? 'opacity-30 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="w-px h-24 bg-gradient-to-b from-accent to-transparent animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;
