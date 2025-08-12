import React from 'react';
import SEO from '@/components/SEO';
import ServiceHero from '@/components/services/ServiceHero';
import KeyBenefits from '@/components/services/KeyBenefits';
import FeatureAccordion from '@/components/services/FeatureAccordion';
import ModelChip from '@/components/services/ModelChip';
import { ShieldCheck, Zap, Layers, DollarSign, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnchorNav from '@/components/services/AnchorNav';
import AtAGlanceStats from '@/components/services/AtAGlanceStats';
import PackagesGrid from '@/components/services/PackagesGrid';
import FaqList from '@/components/services/FaqList';
import DownloadsStrip from '@/components/services/DownloadsStrip';
import CertificationsStrip from '@/components/about/sections/CertificationsStrip';
import ProductGallery from '@/components/products/ProductGallery';
import FeaturedProductsCarousel from '@/components/products/FeaturedProductsCarousel';

const Residential: React.FC = () => {
  return (
    <main>
      <SEO
        title="Residential Solutions | Tanso Solar"
        description="Achieve energy independence with Tanso Home Solutions: reliable residential solar + storage with smart energy management."
        canonicalPath="/services/residential"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Residential Solar Energy Solutions',
          serviceType: 'Residential solar + storage',
          provider: { '@type': 'Organization', name: 'Tanso Solar' },
          areaServed: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Kano', addressCountry: 'NG' } }
        }}
      />

      <ServiceHero
        title="Residential Solutions"
        subtitle="Achieve energy independence with a smart, reliable all‑in‑one solar energy storage system."
        imageSrc="/lovable-uploads/3d0d2bd7-3c44-405c-8551-3fb6a83a3b5a.png"
        imageAlt="Residential solar energy storage system"
        ctaText="Request a Quote"
        ctaLink="/contact"
      />

      <AnchorNav
        items={[
          { href: '#overview', label: 'Overview' },
          { href: '#benefits', label: 'Benefits' },
          { href: '#features', label: 'Features' },
          { href: '#packages', label: 'Packages' },
          { href: '#gallery', label: 'Installations' },
          { href: '#faqs', label: 'FAQs' },
          { href: '#downloads', label: 'Downloads' }
        ]}
      />

      {/* Benefits */}
      <section id="benefits">
        <KeyBenefits
          items={[
            {
              icon: <ShieldCheck className="w-6 h-6" />, 
              title: 'Stable Power Supply',
              description: 'Reliable backup and smooth switchover keep your home powered during grid outages.'
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: 'Energy Independence',
              description: 'Store excess solar energy and use it anytime to reduce reliance on the grid.'
            },
            {
              icon: <Layers className="w-6 h-6" />,
              title: 'Scalable Design',
              description: 'Modular architecture adapts to your household needs with flexible capacity.'
            },
            {
              icon: <DollarSign className="w-6 h-6" />,
              title: 'Cost Savings',
              description: 'Leverage time‑of‑use rates: store off‑peak energy and use it at peak to lower bills.'
            },
            {
              icon: <Cpu className="w-6 h-6" />,
              title: 'Smart Energy Management',
              description: 'Real‑time monitoring and remote control for full visibility over energy usage.'
            }
          ]}
        />
      </section>

      {/* At a glance */}
      <AtAGlanceStats
        items={[
          { value: '≤ 4 ms', label: 'Automatic switchover' },
          { value: '20 A', label: 'Max PV input current' },
          { value: '200% / 10s', label: 'Overload capability' },
          { value: 'Unbalanced', label: '3‑phase load support' }
        ]}
      />

      {/* Solutions & Features */}
      <section id="features">
        <FeatureAccordion
          sections={[
            {
              title: 'Off‑grid Energy Storage Solutions (P5)',
              content: (
                <ul className="list-disc ml-6">
                  <li>Designed for regions with unstable or no grid power; pairs with PV, grid, or generator.</li>
                  <li>Modular assembly with multiple parallel units; up to 30 kW single‑phase systems.</li>
                  <li>Ideal for small industrial, commercial, or residential projects.</li>
                </ul>
              )
            },
            {
              title: 'Single Phase Low Voltage Energy Storage Inverters (P9, P11)',
              content: (
                <ul className="list-disc ml-6">
                  <li>Generator‑compatible to extend backup duration; automatic switchover &lt; 4 ms.</li>
                  <li>Supports microgrids with multiple inverters in parallel; dual backup ports.</li>
                  <li>20 A max PV input current; handles modern high‑power modules.</li>
                  <li>200% overload for 10 seconds ensures stability under demanding scenarios.</li>
                </ul>
              )
            },
            {
              title: 'Three Phase Low Voltage Energy Storage Inverters (P13)',
              content: (
                <ul className="list-disc ml-6">
                  <li>Supports unbalanced and half‑wave loads on both grid and backup ports.</li>
                  <li>20 A max PV input; battery DC side up to 290 A charge/discharge.</li>
                  <li>Seamless transitions keep loads stable even with weak grids or generators.</li>
                </ul>
              )
            },
            {
              title: 'Battery Systems: Stack, Rack, Wall‑Mounted, Vertical (P15–P18)',
              content: (
                <ul className="list-disc ml-6">
                  <li>LiFePO4 chemistry for safety and longevity with over‑charge/over‑current protections.</li>
                  <li>Stackable and rack‑type options for easy expansion; wall‑mounted for space saving.</li>
                  <li>Vertical 15 kWh system with wheels for flexible placement at home or small workshops.</li>
                </ul>
              )
            }
          ]}
        />
      </section>

      {/* Models */}
      <section className="py-12" id="models">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Models</h2>
          <p className="section-description mt-2">Popular residential inverter models and battery systems.</p>
          <div className="mt-6">
            <div className="mb-2 font-semibold">Off‑grid Inverters</div>
            <div className="flex flex-wrap">
              {['S6-EO1P4K-48','S6-EO1P5K-48'].map(m => <ModelChip key={m} label={m} />)}
            </div>
          </div>
          <div className="mt-6">
            <div className="mb-2 font-semibold">Single Phase LV Inverters</div>
            <div className="flex flex-wrap">
              {['S6-EH1P3K-L-PLUS','S6-EH1P3.6K-L-PLUS','S6-EH1P4.6K-L-PLUS','S6-EH1P5K-L-PLUS','S6-EH1P6K-L-PLUS','S6-EH1P8K-L-PLUS','S6-EH1P(12-16)K03-NV-YD-L'].map(m => <ModelChip key={m} label={m} />)}
            </div>
          </div>
          <div className="mt-6">
            <div className="mb-2 font-semibold">Three Phase LV Inverters</div>
            <div className="flex flex-wrap">
              {['S6-EH3P8K02-NV-YD-L','S6-EH3P10K02-NV-YD-L','S6-EH3P12K02-NV-YD-L','S6-EH3P15K02-NV-YD-L'].map(m => <ModelChip key={m} label={m} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <PackagesGrid
        packages={[
          {
            name: 'Essential Backup',
            power: '3–5 kW',
            storage: '5–10 kWh',
            models: ['S6-EH1P3K-L-PLUS','S6-EH1P5K-L-PLUS'],
            description: 'Keeps critical loads on during outages (lighting, router, fridge).'
          },
          {
            name: 'Family Plus',
            power: '5–8 kW',
            storage: '10–20 kWh',
            models: ['S6-EH1P6K-L-PLUS','S6-EH1P8K-L-PLUS'],
            description: 'Comfortable daily self‑consumption with extended backup.'
          },
          {
            name: 'Whole‑Home',
            power: '10–15 kW',
            storage: '20–30 kWh',
            models: ['S6-EH1P(12-16)K03-NV-YD-L','S6-EH3P12K02-NV-YD-L'],
            description: 'Large homes or villas; supports heavier loads and three‑phase.'
          }
        ]}
      />

      {/* Trust strip */}
      <CertificationsStrip />

      {/* Gallery */}
      <section id="gallery" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Recent installations</h2>
          <p className="section-description mt-2">A glimpse of residential systems we deliver.</p>
          <div className="mt-6">
            <ProductGallery
              images={[
                {
                  src: '/lovable-uploads/9cdbafdc-f0ac-43c4-b5ad-53b098e4e4b6.png',
                  alt: 'Retail store off-grid solar PV and battery storage in Kano, Nigeria – 16 kW PV + 8 kW / 15 kWh BESS, daily generation 80 kWh',
                  caption: 'Retail Store, Kano State, Nigeria — 16 kW Solar PV + 8 kW / 15 kWh BESS. Daily generation: 80 kWh. Solution: Reliable off-grid power ensuring uninterrupted operations.'
                },
                {
                  src: '/lovable-uploads/412b7ab0-d860-400f-a41a-fdce856bdf2d.png',
                  alt: 'Premium hotel grid-tied solar PV with battery backup in Tashkent, Uzbekistan – 20 kW PV + 5 kW / 10 kWh BESS, daily generation 125 kWh',
                  caption: 'Premium Hotel, Tashkent, Uzbekistan — 20 kW Grid-tied Solar PV + 5 kW / 10 kWh BESS. Daily generation: 125 kWh. Solution: Energy cost reduction and grid backup.'
                },
                {
                  src: '/lovable-uploads/32fb7789-44da-4324-a888-fed42b5da73b.png',
                  alt: 'Kindergarten solar PV and battery storage in Dushanbe, Tajikistan — 5 kW PV + 5 kW / 19.2 kWh BESS, daily generation 20 kWh',
                  caption: 'Kindergarten, Dushanbe, Tajikistan — 5 kW Solar PV + 5 kW / 19.2 kWh BESS. Daily generation: 20 kWh. Solution: Energy security for educational facilities with extended backup.'
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Related products</h2>
          <p className="section-description mt-2">Inverters, batteries, and modules commonly paired with home systems.</p>
          <div className="mt-6">
            <FeaturedProductsCarousel />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqList
        items={[
          { q: 'Will solar work during grid outages?', a: 'Yes. With a hybrid inverter and batteries, critical circuits remain powered even when the grid is down.' },
          { q: 'How many batteries do I need?', a: 'It depends on daily consumption and desired backup time. We size storage after a quick load assessment.' },
          { q: 'Can I expand later?', a: 'Yes. The system is modular. You can add more batteries or upgrade inverter power as needs grow.' },
          { q: 'Do you offer monitoring?', a: 'Smart monitoring provides real‑time visibility and remote configuration for optimal performance.' }
        ]}
      />

      {/* Downloads */}
      <DownloadsStrip />

      {/* CTA */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Ready to design your home system?</h3>
            <p className="text-gray-600">Talk to our experts for a tailored residential solution.</p>
          </div>
          <Button asChild>
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Residential;
