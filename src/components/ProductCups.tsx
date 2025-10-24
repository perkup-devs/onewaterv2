import cups from '@/assets/cups.png';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProductCups = () => {
  const contentAnim = useScrollAnimation();
  const imageAnim = useScrollAnimation();
  return (
    <section className="py-32 lg:py-40 bg-gradient-elegant relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <div ref={contentAnim.ref} className={`space-y-10 transition-all duration-1000 ${contentAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}`}>
              <div className="space-y-6">
                <div className="inline-block">
                  <div className="h-px w-16 bg-accent mb-6"></div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-light">
                    Collection
                  </p>
                </div>
                
                <h2 className="text-5xl lg:text-6xl font-extralight text-primary leading-tight">
                  Pristine<br />Cups
                </h2>
                
                <div className="space-y-4 pt-4">
                  <p className="text-lg font-light text-foreground">
                    Edição Colecionável
                  </p>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-md">
                    Copos premium com logo dourado em cores exclusivas. Elegância e sofisticação em cada detalhe do design.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="#" 
                  className="group inline-block px-8 py-4 border border-primary text-primary tracking-[0.2em] text-xs uppercase font-light transition-all duration-700 hover:bg-primary hover:text-primary-foreground"
                >
                  Descubra
                  <span className="inline-block ml-3 transition-transform duration-700 group-hover:translate-x-2">→</span>
                </a>
              </div>
            </div>

            {/* Image */}
            <div ref={imageAnim.ref} className={`transition-all duration-1000 ${imageAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'}`}>
              <div className="relative">
                <img 
                  src={cups} 
                  alt="O.N.E. Pristine Cups Collection"
                  className="w-full h-auto max-w-xl mx-auto animate-float drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCups;
