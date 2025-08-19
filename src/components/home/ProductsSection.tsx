import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../AnimatedSection';
import ProductCard from './ProductCard';
const ProductsSection = () => {
  const {
    t
  } = useTranslation();
  const solarWaterHeaters = [{
    image: "/lovable-uploads/62bfdc70-0d42-4629-a77e-1cce0abacee9.png",
    titleKey: "products.heater.title",
    descriptionKey: "products.heater.description",
    link: "/products/solar-water-heater/compact-non-pressure"
  }];

  const batteryProducts = [{
    image: "/lovable-uploads/96506ab6-7564-4dea-b1cb-385e84b56d19.png",
    titleKey: "products.inverter1.title",
    descriptionKey: "products.inverter1.description",
    link: "/products/low-voltage-battery/s6-eh1p-3-8k-l-plus"
  }, {
    image: "/lovable-uploads/ae9a6e51-a5ee-4b46-8fe7-825163e436dd.png",
    titleKey: "products.inverter2.title",
    descriptionKey: "products.inverter2.description",
    link: "/products/low-voltage-battery/s6-eh1p-12-16k-nv-yd-l"
  }, {
    image: "/lovable-uploads/e2fdb118-678b-4f55-a414-f4b57bed1112.png",
    titleKey: "products.inverter3.title",
    descriptionKey: "products.inverter3.description",
    link: "/products/low-voltage-battery/s6-eh3p-8-15k-nv-yd-l"
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

        {/* Solar Water Heater Section */}
        <AnimatedSection animation="fade-in" delay={200} className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Solar Water Heater</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Efficient solar thermal systems that use sunlight to heat water for residential and commercial use.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 mb-16 max-w-md mx-auto">
          {solarWaterHeaters.map((product, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={300 + index * 100}>
              <ProductCard image={product.image} titleKey={product.titleKey} descriptionKey={product.descriptionKey} link={product.link} />
            </AnimatedSection>
          ))}
        </div>

        {/* Low Voltage Battery Section */}
        <AnimatedSection animation="fade-in" delay={400} className="mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Low Voltage Energy Storage Inverters</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced energy storage solutions with generator compatibility, microgrid formation, and superior power management capabilities.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {batteryProducts.map((product, index) => (
            <AnimatedSection key={`battery-${index}`} animation="slide-up" delay={500 + index * 100}>
              <ProductCard image={product.image} titleKey={product.titleKey} descriptionKey={product.descriptionKey} link={product.link} />
            </AnimatedSection>
          ))}
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