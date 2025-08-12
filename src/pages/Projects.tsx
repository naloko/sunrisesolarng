
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';

const Projects = () => {
  return (
    <main>
      <SEO title="Solar Projects Portfolio | Sunrise Solar" description="Commercial and utility-scale rooftop PV and ground power stations." canonicalPath="/projects" />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="hero-video-container">
          <video 
            className="hero-video"
            autoPlay 
            muted 
            loop 
            playsInline
            poster="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          >
            <source src="https://www.pexels.com/video/solar-panel-farm-use-for-energy-production-4324109/" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection animation="fade-in">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Our <span className="text-primary">Projects</span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl mt-6 mb-8">
                Explore our portfolio of successful solar installations and see the positive impact we're making.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="section-heading">Featured Projects</h2>
              <p className="max-w-3xl mx-auto text-gray-600 mt-4">
                Browse through our diverse range of solar installations across residential and commercial sectors.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: '/lovable-uploads/1ef6150b-d442-4719-8f0e-0a7c7f62df97.png', title: 'Shandong Technology Company 1.75MW', category: 'Commercial', description: 'Rooftop Distributed PV Project' },
              { src: '/lovable-uploads/82147e90-c7f1-4a59-baa2-1c2481aca1f0.png', title: 'Shandong Company 1.75MW', category: 'Commercial', description: 'Rooftop Distributed PV Project' },
              { src: '/lovable-uploads/be81870f-8fc1-48a4-95eb-3cbc3ead7fce.png', title: 'Shandong Company 3.16MW', category: 'Commercial', description: 'Rooftop Distributed PV Project' },
              { src: '/lovable-uploads/9b7855ff-1769-4a1e-9802-f8420e493700.png', title: 'Shandong Zeyu New Energy 3.2MW', category: 'Commercial', description: 'Rooftop Distributed PV Project' },
              { src: '/lovable-uploads/39ceb9a9-5483-4d13-b2d4-2cea27568329.png', title: 'Shandong New Energy 3.3MW', category: 'Commercial', description: 'Rooftop Distributed PV Project' },
              { src: '/lovable-uploads/41819b5c-ab2d-454a-b674-b17e8adb9cf2.png', title: 'Shandong New Energy 4MW', category: 'Commercial', description: 'Rooftop Distributed PV Project' },
              { src: '/lovable-uploads/77a73b5e-f017-4068-896a-90f6fb279f16.png', title: 'Shandong Yiqian New Energy 4.2MW', category: 'Commercial', description: 'Rooftop Distributed PV Project' },
              { src: '/lovable-uploads/5bef1146-460f-4b41-a4ea-f8cc08763d56.png', title: 'Shandong Zexuan New Energy 4.98MW', category: 'Commercial', description: 'Rooftop Distributed PV Project' },
              { src: '/lovable-uploads/2ee13fb0-2fc4-4093-bfdb-eeabf982dfa8.png', title: 'Weifang New Energy Company 9MW', category: 'Commercial', description: 'Rooftop Distributed PV Project' },
              { src: '/lovable-uploads/088addd1-5195-4428-ae4d-8ff5fa602284.png', title: 'Weifang District 26MW', category: 'Utility-scale', description: 'Ground Power Station' },
              { src: '/lovable-uploads/5853f1c2-b2da-485b-bf06-3679b375d4b3.png', title: 'Immigrant Villages of Huanghua Town 637.1kW', category: 'Community', description: 'Rooftop Distributed PV Project' },
              { src: '/lovable-uploads/99924a3f-561a-47fd-8d99-2ffa6b3031c5.png', title: 'Sunbelt Group 221 kW Grid-tied PV Project', category: 'Commercial', description: 'Kano State, Nigeria - Annual yield 360,000 kWh; ROI < 2 years' },
              { src: '/lovable-uploads/8df34e49-93cb-46ff-8f28-47f6db8de0c0.png', title: 'Qingdao Energy Company 1.49MW', category: 'Commercial', description: 'Rooftop Distributed PV Project' },
            ].map((p, i) => (
              <AnimatedSection key={p.src} animation="scale-in" delay={(i + 1) * 100}>
                <div className="overflow-hidden rounded-xl shadow-md">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={p.src}
                      alt={`${p.title} – ${p.description}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="badge">{p.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-gray-600 mb-4">{p.description}</p>
                    <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline">
                      View Project <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center bg-primary text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-primary/90">
              Load More Projects <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Project Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="section-heading">How We Deliver Excellence</h2>
              <p className="max-w-3xl mx-auto text-gray-600 mt-4">
                Our proven project delivery process ensures quality, efficiency, and customer satisfaction.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="relative">
                <div className="bg-white p-6 rounded-xl shadow-md relative z-10">
                  <div className="bg-primary h-12 w-12 flex items-center justify-center text-white rounded-full text-xl font-bold mb-4">1</div>
                  <h3 className="text-xl font-semibold mb-3">Consultation</h3>
                  <p className="text-gray-600">We assess your needs and provide tailored recommendations for your solar solution.</p>
                </div>
                <div className="absolute top-1/2 left-full w-16 h-1 bg-primary hidden lg:block" style={{ transform: "translateY(-50%)" }}></div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <div className="relative">
                <div className="bg-white p-6 rounded-xl shadow-md relative z-10">
                  <div className="bg-primary h-12 w-12 flex items-center justify-center text-white rounded-full text-xl font-bold mb-4">2</div>
                  <h3 className="text-xl font-semibold mb-3">Design</h3>
                  <p className="text-gray-600">Our engineers create a custom system design optimized for your specific requirements.</p>
                </div>
                <div className="absolute top-1/2 left-full w-16 h-1 bg-primary hidden lg:block" style={{ transform: "translateY(-50%)" }}></div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="relative">
                <div className="bg-white p-6 rounded-xl shadow-md relative z-10">
                  <div className="bg-primary h-12 w-12 flex items-center justify-center text-white rounded-full text-xl font-bold mb-4">3</div>
                  <h3 className="text-xl font-semibold mb-3">Installation</h3>
                  <p className="text-gray-600">Our professional team installs your system with precision and attention to detail.</p>
                </div>
                <div className="absolute top-1/2 left-full w-16 h-1 bg-primary hidden lg:block" style={{ transform: "translateY(-50%)" }}></div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={400}>
              <div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-primary h-12 w-12 flex items-center justify-center text-white rounded-full text-xl font-bold mb-4">4</div>
                  <h3 className="text-xl font-semibold mb-3">Support</h3>
                  <p className="text-gray-600">We provide ongoing maintenance and support to ensure optimal system performance.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="section-heading">What Our Clients Say</h2>
              <p className="max-w-3xl mx-auto text-gray-600 mt-4">
                Hear from our satisfied clients about their experience working with Sunrise Solar.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="bg-gray-50 p-6 rounded-xl relative">
                <div className="text-primary text-5xl font-serif absolute top-4 left-4 opacity-20">"</div>
                <div className="relative z-10">
                  <p className="text-gray-600 mb-6 italic">
                    "Sunrise Solar exceeded our expectations. The team was professional, the installation was flawless, 
                    and we're now saving significantly on our energy bills."
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">John Okafor</h4>
                      <p className="text-gray-500 text-sm">CEO, Okafor Enterprises</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <div className="bg-gray-50 p-6 rounded-xl relative">
                <div className="text-primary text-5xl font-serif absolute top-4 left-4 opacity-20">"</div>
                <div className="relative z-10">
                  <p className="text-gray-600 mb-6 italic">
                    "The solar system installed by Sunrise has been a game-changer for our hotel. We've reduced our energy costs 
                    by 70% and our guests appreciate our commitment to sustainability."
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Sarah Adeyemi</h4>
                      <p className="text-gray-500 text-sm">Manager, Sunshine Hotel</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="bg-gray-50 p-6 rounded-xl relative">
                <div className="text-primary text-5xl font-serif absolute top-4 left-4 opacity-20">"</div>
                <div className="relative z-10">
                  <p className="text-gray-600 mb-6 italic">
                    "We chose Sunrise Solar for our campus project because of their reputation for quality. They delivered on time, 
                    within budget, and the system has been performing flawlessly."
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Prof. Ibrahim Mohammed</h4>
                      <p className="text-gray-500 text-sm">Director, University of Abuja</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Solar Journey?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact us today to discuss your project and discover how we can help you harness the power of the sun.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-lg font-medium transition-all transform hover:scale-105"
                >
                  Contact Us Now
                </Link>
                <Link 
                  to="/products" 
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-white/20"
                >
                  Explore Products
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
