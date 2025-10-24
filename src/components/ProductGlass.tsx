import bottleGlass from '@/assets/bottle-glass.png';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProductGlass = () => {
  const imageAnim = useScrollAnimation();
  const contentAnim = useScrollAnimation();
  return (
    <section className="py-32 lg:py-40 bg-gradient-elegant relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Image */}
            <div ref={imageAnim.ref} className={`order-2 lg:order-1 transition-all duration-1000 ${imageAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}`}>
              <div className="relative">
                <img 
                  src={bottleGlass} 
                  alt="O.N.E. Pristine Water Glass Bottle"
                  className="w-full h-auto max-w-lg mx-auto animate-float drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div ref={contentAnim.ref} className={`order-1 lg:order-2 space-y-10 transition-all duration-1000 ${contentAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'}`}>
              <div className="space-y-6">
                <div className="inline-block">
                  <div className="h-px w-16 bg-accent mb-6"></div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-light">
                    Glass Edition
                  </p>
                </div>
                
                <h2 className="text-5xl lg:text-6xl font-extralight text-primary leading-tight">
                  Pristine<br />Water
                </h2>
                
                <div className="space-y-4 pt-4">
                  <p className="text-lg font-light text-foreground">
                    750ml
                  </p>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-md">
                    Garrafa de vidro premium com tampa dourada. Pureza absoluta do oceano Atlântico em design minimalista e elegante.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="https://store.perkuptoken.com/agua-one" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-block px-8 py-4 border border-primary text-primary tracking-[0.2em] text-xs uppercase font-light transition-all duration-700 hover:bg-primary hover:text-primary-foreground"
                >
                  Descubra
                  <span className="inline-block ml-3 transition-transform duration-700 group-hover:translate-x-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGlass;
