import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Check, Download } from 'lucide-react';
import { PRODUCT_CATALOG } from '@/config/productCatalog';
import SEO from '@/components/SEO';
import AnimatedSection from '@/components/AnimatedSection';

const ProductDetail = () => {
  const { categorySlug, productSlug } = useParams();

  const category = PRODUCT_CATALOG.find(cat => cat.slug === categorySlug);
  const product = category?.products.find(prod => prod.slug === productSlug);

  if (!category || !product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <main>
      <SEO 
        title={`${product.title} | ${category.title} | Solar Products`}
        description={`${product.shortDescription}. View detailed specifications, features, and applications for our ${product.title} solar water heater.`}
        canonicalPath={`/products/${categorySlug}/${productSlug}`}
      />

      {/* Breadcrumb Navigation */}
      <section className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/products" className="text-gray-600 hover:text-primary transition-colors">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <Link to={`/products#${categorySlug}`} className="text-gray-600 hover:text-primary transition-colors">
              {category.title}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.title}</span>
          </nav>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="space-y-6">
                <div>
                  <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-3">
                    {category.title}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h1>
                  <p className="text-lg text-gray-600">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Get Quote
                  </Link>
                  <button className="inline-flex items-center justify-center border border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-6 py-3 rounded-lg font-medium transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Download Spec Sheet
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Specifications */}
            {product.specs && product.specs.length > 0 && (
              <AnimatedSection>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h2>
                  <div className="space-y-3">
                    {product.specs.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-600">{spec.label}</span>
                        <span className="font-medium text-gray-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <AnimatedSection>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            )}

            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
              <AnimatedSection>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Applications</h2>
                  <ul className="space-y-3">
                    {product.applications.map((application, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2.5 flex-shrink-0"></div>
                        <span className="text-gray-700">{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* Back to Products */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <Link
              to="/products"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Products
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;