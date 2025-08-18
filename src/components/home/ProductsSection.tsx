import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../AnimatedSection';
import ProductCard from './ProductCard';
const ProductsSection = () => {
  const {
    t
  } = useTranslation();
  const products = [{
    image: "/lovable-uploads/f2040cb6-fe47-4ec1-b256-ef31c13cd1c8.png",
    titleKey: "products.heater.title",
    descriptionKey: "products.heater.description",
    link: "/products/solar-water-heater"
  }, {
    image: "/lovable-uploads/be0620a9-b789-464b-b554-66d4c2376130.png",
    titleKey: "products.panel.title",
    descriptionKey: "products.panel.description",
    link: "/products/solar-panel"
  }, {
    image: "/lovable-uploads/425045d0-781c-4a14-a59f-41dfee50cafb.png",
    titleKey: "products.battery.title",
    descriptionKey: "products.battery.description",
    link: "/products/energy-storage"
  }, {
    image: "/lovable-uploads/05c1eed8-c553-48b3-ba7b-0e8d3e3bb27b.png",
    titleKey: "products.inverter.title",
    descriptionKey: "products.inverter.description",
    link: "/products/inverter"
  }];
  return <section className="py-16 bg-white">
      <div className="section-container">
        <div className="section-header">
          <AnimatedSection animation="fade-in">
            
            <h2 className="section-heading text-yellow-500">
              {t('sections.products.title')}
            </h2>
            <p className="section-description mx-auto">
              {t('sections.products.description')}
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product, index) => <AnimatedSection key={index} animation="slide-up" delay={(index + 1) * 100}>
              <ProductCard image={product.image} titleKey={product.titleKey} descriptionKey={product.descriptionKey} link={product.link} />
            </AnimatedSection>)}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="inline-flex items-center bg-primary text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-primary/90">
            {t('sections.products.viewAll')} <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>;
};
export default ProductsSection;