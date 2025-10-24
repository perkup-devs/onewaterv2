import Hero from '@/components/Hero';
import ProductGlass from '@/components/ProductGlass';
import ProductCan from '@/components/ProductCan';
import ProductGold from '@/components/ProductGold';
import ProductCups from '@/components/ProductCups';
import Technology from '@/components/Technology';
import Footer from '@/components/Footer';

const Index = () => {

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <ProductGlass />
      <ProductCan />
      <ProductGold />
      <ProductCups />
      <Technology />
      <Footer />
    </main>
  );
};

export default Index;
