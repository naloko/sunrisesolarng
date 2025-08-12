
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';
import FeaturedProductsCarousel from '../components/products/FeaturedProductsCarousel';
import ProductGallery from '../components/products/ProductGallery';
import { BROCHURES } from '../config/brochures';

const Products = () => {
  return (
    <main>
      <SEO title="Solar Products | Water Heaters, Panels & Storage" description="Professional, minimalist solar products: water heaters, panels, and energy storage. Explore featured products and an interactive gallery." canonicalPath="/products" />
      {/* Hero Section */}
      <section data-dark-bg className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/77d8f05c-07e1-41f2-9463-07744cde539e.png"
            alt="Solar technician installing panels – products hero background"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection animation="fade-in">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Our <span className="text-primary">Solar</span> Products
              </h1>
              <p className="text-white/80 text-lg md:text-xl mt-6 mb-8">
                Explore our comprehensive range of solar energy products designed to provide efficient, 
                reliable, and sustainable power solutions for homes and businesses.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="section-header">
              <h2 className="section-heading">Featured Products</h2>
              <p className="section-description mx-auto">Our top sellers: water heaters, solar panels, inverters and storage.</p>
            </div>
          </AnimatedSection>

          <FeaturedProductsCarousel />
        </div>
      </section>

      {/* Interactive Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="section-header">
              <h2 className="section-heading">Interactive Gallery</h2>
              <p className="section-description mx-auto">Peek inside our storage systems and explore solar water heater models.</p>
            </div>
          </AnimatedSection>

          <ProductGallery
            images={[
              { src: '/lovable-uploads/579a7101-0f7b-4c0b-8772-8715b1a7c158.png', alt: 'Energy storage container interior – open doors' },
              { src: '/lovable-uploads/176c34c4-5b29-434d-94f5-8c24b2b0fe60.png', alt: 'Energy storage container modules and control cabinets' },
              { src: '/lovable-uploads/0c5b8a28-c3b5-4315-91fa-2059a4997db3.png', alt: 'Top‑down view of containerized storage layout' },
              { src: '/lovable-uploads/832433c8-6f7e-4a3e-a7d7-f6b316f7fb3f.png', alt: 'Technician assembling battery storage racks in factory' },
              { src: '/lovable-uploads/3ed17f49-1606-4c6f-a582-030043e0bb84.png', alt: 'Overview of solar water heater product family' },
              { src: '/lovable-uploads/339dcac6-b76f-4741-bb0b-d9590c0bb3c4.png', alt: 'Heat pipe solar collector spec sheet' },
              { src: '/lovable-uploads/e87b0368-ea97-42d2-823b-79f4156987ff.png', alt: 'Compact flat plate solar water heater brochure page' },
              { src: '/lovable-uploads/401284b2-78cf-4942-9b20-4f17d91fe6e5.png', alt: 'Compact non‑pressure solar water heater brochure page' },
              { src: '/lovable-uploads/96f49ca6-964a-48a3-baec-0c2f5942be26.png', alt: 'Compact pressurized heat pipe solar water heater brochure page' },
              { src: '/lovable-uploads/2383ed8e-d178-4154-91e7-ea0776ce6b6a.png', alt: 'Preheated solar water heater brochure page' },
              // New battery & inverter datasheets
              { src: '/lovable-uploads/4620eef3-4a50-4dc2-9d76-7fdd6aa697f5.png', alt: 'Wall‑mounted battery datasheet and specs' },
              { src: '/lovable-uploads/f49a71ac-ce40-4a76-b2e1-a9624f5b3cbf.png', alt: 'Rack battery module datasheet and specs' },
              { src: '/lovable-uploads/aa758644-54d4-4554-8b94-a1b372543533.png', alt: 'Floor battery cabinet datasheet' },
              { src: '/lovable-uploads/0364870b-1c7b-4a6d-9cfd-63e4eb6c34b9.png', alt: 'Stacked battery energy system specs' },
              { src: '/lovable-uploads/bf98f41e-a630-44e1-94c3-77fc6d1048a5.png', alt: 'All‑in‑one home energy system datasheet' },
              { src: '/lovable-uploads/7c99b5ba-6241-4f7f-9b95-ff1a916d5840.png', alt: 'Modular stacked home energy system datasheet' },
              { src: '/lovable-uploads/c059f602-666e-4344-b8c5-ad6193861b51.png', alt: 'Hybrid inverter datasheet' },
              { src: '/lovable-uploads/f26742d5-1825-4c2e-9c5e-085cdca250cc.png', alt: 'Hybrid inverter with LCD interface datasheet' },
              { src: '/lovable-uploads/20c63626-d4f3-47c8-abda-8400821cbf0a.png', alt: 'Stackable battery system datasheet' },
              // Newly added: panels & heater photos
              { src: '/lovable-uploads/4b4b213b-0bf5-498f-8dbd-a3e86aef308f.png', alt: 'Solar panel module front view' },
              { src: '/lovable-uploads/1d4fdc53-b574-4cf5-8bc8-93536f84711b.png', alt: 'Rooftop solar panel array installation' },
              { src: '/lovable-uploads/fa574ee8-f575-4238-aa13-e2b4a0bd6425.png', alt: 'Compact non‑pressure solar water heater units' },
            ]}
          />

          {/* Brochures CTA */}
          <div className="mt-12">
            <div className="section-header">
              <h2 className="section-heading">Brochures & Specs</h2>
              <p className="section-description mx-auto">Download detailed brochures for offline review.</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {BROCHURES.map((b) => (
                <a
                  key={b.id}
                  href={`/brochures/${encodeURIComponent(b.filename)}`}
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm transition hover:bg-primary/5"
                >
                  {b.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Harness the Power of the Sun?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Take the first step towards energy independence and sustainability. Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-lg font-medium transition-all transform hover:scale-105"
                >
                  Contact Us Now
                </Link>
                <Link 
                  to="/about" 
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-white/20"
                >
                  Learn More
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
