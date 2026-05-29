import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import oceanWaterBottles from '@/assets/PHOTO-2026-05-28-11-12-55 3.jpg';
import oceanWaterReserve from '@/assets/PHOTO-2026-05-28-11-12-55 2.jpg';
import oceanWaterCanStill from '@/assets/PHOTO-2026-05-28-11-12-55 4.jpg';
import oceanWaterCanSparkling from '@/assets/PHOTO-2026-05-28-11-12-56.jpg';
import beerBottle from '@/assets/PHOTO-2026-05-28-11-12-54 3.jpg';
import beerCan from '@/assets/PHOTO-2026-05-28-11-12-54 2.jpg';
import beerKit from '@/assets/PHOTO-2026-05-28-11-12-54.jpg';
import beerKitBr from '@/assets/PHOTO-2026-05-28-11-12-55.jpg';
import functionalBottles from '@/assets/PHOTO-2026-05-28-11-12-53.jpg';

const ProductPremium = () => {
  const headerAnim = useScrollAnimation();
  const gridAnim1 = useScrollAnimation();
  const gridAnim2 = useScrollAnimation();
  const gridAnim3 = useScrollAnimation();

  return (
    <section className="py-32 lg:py-40 bg-premium-dark relative overflow-hidden">
      {/* Subtle gold particles background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(46 65% 50%) 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Gold gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-gold"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-gold"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerAnim.ref} className={`text-center mb-24 transition-all duration-1000 ${headerAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block">
            <div className="h-px w-24 bg-gold mx-auto mb-8"></div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold font-light mb-6">
              Coleção Exclusiva
            </p>
          </div>
          <h2 className="text-5xl lg:text-7xl font-extralight text-white leading-tight mb-6">
            ONE <span className="text-gold">Premium</span>
          </h2>
          <p className="text-lg font-light text-white/70 max-w-2xl mx-auto leading-relaxed">
            Uma nova era de sofisticação. Design audacioso em preto e dourado, 
            onde cada detalhe reflete excelência e exclusividade.
          </p>
        </div>

        {/* Ocean Water Collection */}
        <div ref={gridAnim1.ref} className={`mb-32 transition-all duration-1000 ${gridAnim1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-6 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-light">Ocean Water</p>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Featured - Reserve */}
            <div className="lg:col-span-7 group">
              <div className="relative overflow-hidden rounded-sm bg-black/40 border border-gold/20">
                <img 
                  src={oceanWaterReserve} 
                  alt="ONE Ocean Water Reserve - Limited Edition"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Limited Edition</p>
                  <h3 className="text-3xl font-extralight text-white">Ocean Water Reserve</h3>
                </div>
              </div>
            </div>

            {/* Side images */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="group relative overflow-hidden rounded-sm bg-black/40 border border-gold/20 flex-1">
                <img 
                  src={oceanWaterBottles} 
                  alt="ONE Ocean Water Collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold mb-1">Collection</p>
                  <h3 className="text-xl font-extralight text-white">Crystal Edition</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="group relative overflow-hidden rounded-sm bg-black/40 border border-gold/20 aspect-[3/4]">
                  <img 
                    src={oceanWaterCanStill} 
                    alt="ONE Ocean Water Still"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">Still</p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-sm bg-black/40 border border-gold/20 aspect-[3/4]">
                  <img 
                    src={oceanWaterCanSparkling} 
                    alt="ONE Ocean Water Sparkling"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">Sparkling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Beer Collection */}
        <div ref={gridAnim2.ref} className={`mb-32 transition-all duration-1000 ${gridAnim2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-6 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-light">Cerveja Premium</p>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 group relative overflow-hidden rounded-sm bg-black/40 border border-gold/20 aspect-[3/4]">
              <img 
                src={beerBottle} 
                alt="ONE Cerveja Premium Pilsen"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-1">Puro Malte</p>
                <h3 className="text-xl font-extralight text-white">Pilsen</h3>
              </div>
            </div>
            <div className="lg:col-span-4 group relative overflow-hidden rounded-sm bg-black/40 border border-gold/20 aspect-[3/4]">
              <img 
                src={beerCan} 
                alt="ONE Cerveja Premium Lata"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-1">Premium Can</p>
                <h3 className="text-xl font-extralight text-white">350ml</h3>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="group relative overflow-hidden rounded-sm bg-black/40 border border-gold/20 flex-1">
                <img 
                  src={beerKit} 
                  alt="ONE Reserva Especial Kit"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold mb-1">Reserva Especial</p>
                  <h3 className="text-xl font-extralight text-white">Super Premium</h3>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-sm bg-black/40 border border-gold/20 flex-1">
                <img 
                  src={beerKitBr} 
                  alt="ONE Cerveja Puro Malte Kit"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold mb-1">Edição Limitada</p>
                  <h3 className="text-xl font-extralight text-white">3 Garrafas</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Functional Beverages */}
        <div ref={gridAnim3.ref} className={`transition-all duration-1000 ${gridAnim3.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-6 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-light">Ocean Nutrition Effect</p>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="group relative overflow-hidden rounded-sm bg-black/40 border border-gold/20">
              <img 
                src={functionalBottles} 
                alt="ONE Ocean Nutrition Effect - Functional Beverages"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Functional Beverage</p>
                <h3 className="text-3xl font-extralight text-white mb-2">Ocean Nutrition Effect</h3>
                <p className="text-sm text-white/60 font-light">Hibiscus · Seawepple & Saíca · Aloe Vera</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPremium;
