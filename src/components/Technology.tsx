import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Technology = () => {
  const headerAnim = useScrollAnimation();
  const feature1Anim = useScrollAnimation();
  const feature2Anim = useScrollAnimation();
  const feature3Anim = useScrollAnimation();
  const qualityAnim = useScrollAnimation();
  return (
    <section className="py-32 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Header */}
          <div ref={headerAnim.ref} className={`space-y-8 transition-all duration-1000 ${headerAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block">
              <div className="h-px w-20 bg-accent mx-auto mb-8"></div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-light">
                Inovação Brasileira
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extralight text-primary leading-relaxed">
              Nanotecnologia<br />Avançada
            </h2>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-12 pt-8">
            <div ref={feature1Anim.ref} className={`space-y-4 transition-all duration-1000 ${feature1Anim.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="text-5xl font-extralight text-accent">63+</div>
              <div className="h-px w-12 bg-accent/30 mx-auto"></div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light">
                Minerais Naturais
              </p>
            </div>
            
            <div ref={feature2Anim.ref} className={`space-y-4 transition-all duration-1000 delay-150 ${feature2Anim.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="text-5xl font-extralight text-accent">20km</div>
              <div className="h-px w-12 bg-accent/30 mx-auto"></div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light">
                Da Costa
              </p>
            </div>
            
            <div ref={feature3Anim.ref} className={`space-y-4 transition-all duration-1000 delay-300 ${feature3Anim.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="text-5xl font-extralight text-accent">100%</div>
              <div className="h-px w-12 bg-accent/30 mx-auto"></div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light">
                Sustentável
              </p>
            </div>
          </div>

          {/* Quality */}
          <div ref={qualityAnim.ref} className={`pt-12 transition-all duration-1000 ${qualityAnim.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="inline-block border border-border px-12 py-6">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground font-light">
                Padrões OMS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
