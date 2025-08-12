import React from 'react';
import SEO from '@/components/SEO';
import ServiceHero from '@/components/services/ServiceHero';
import KeyBenefits from '@/components/services/KeyBenefits';
import FeatureAccordion from '@/components/services/FeatureAccordion';
import ModelChip from '@/components/services/ModelChip';
import { ShieldCheck, TrendingDown, Factory, Settings, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnchorNav from '@/components/services/AnchorNav';
import AtAGlanceStats from '@/components/services/AtAGlanceStats';
import PackagesGrid from '@/components/services/PackagesGrid';
import FaqList from '@/components/services/FaqList';
import DownloadsStrip from '@/components/services/DownloadsStrip';
import CertificationsStrip from '@/components/about/sections/CertificationsStrip';

const Commercial: React.FC = () => {
  return (
    <main>
      <SEO
        title="Commercial & Industrial Solutions | Tanso Solar"
        description="C&I solar and storage for reliable backup, lower costs, and intelligent energy management."
        canonicalPath="/services/commercial"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Commercial & Industrial Solar Energy Solutions',
          serviceType: 'C&I solar + storage',
          provider: { '@type': 'Organization', name: 'Tanso Solar' },
          areaServed: { '@type': 'Place', address: { '@type': 'PostalAddress', addressCountry: 'NG' } }
        }}
      />

      <ServiceHero
        title="Commercial & Industrial Solutions"
        subtitle="Reliable backup, lower electricity costs, and intelligent energy management for businesses."
        imageSrc="/lovable-uploads/bb700bda-cb0d-48c0-9040-2bc4c6d04bc9.png"
        imageAlt="Aerial view of industrial facility with solar rooftops - C&I solar energy"
        ctaText="Speak with an Expert"
        ctaLink="/contact"
      />

      <AnchorNav
        items={[
          { href: '#overview', label: 'Overview' },
          { href: '#benefits', label: 'Benefits' },
          { href: '#solutions', label: 'Solutions' },
          { href: '#models', label: 'Models' },
          { href: '#packages', label: 'Packages' },
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
              title: 'Reliable Backup Power',
              description: '10 ms switchover to emergency power keeps operations uninterrupted.'
            },
            {
              icon: <TrendingDown className="w-6 h-6" />,
              title: 'Lower Electricity Bills',
              description: 'Charge off‑peak, discharge at peak; leverage dynamic pricing and peak‑shaving.'
            },
            {
              icon: <Settings className="w-6 h-6" />,
              title: 'Intelligent Management',
              description: 'Smart schedules, scenes, and 24/7 TOU for optimal performance.'
            },
            {
              icon: <Layers className="w-6 h-6" />,
              title: 'Flexible Operation',
              description: 'Microgrid‑ready; seamless grid‑tied/off‑grid switching with generator integration.'
            },
            {
              icon: <Factory className="w-6 h-6" />,
              title: 'Easy Installation & Scale',
              description: 'Modular, scalable systems tailored to specific energy needs.'
            }
          ]}
        />
      </section>

      {/* At a glance */}
      <AtAGlanceStats
        title="At a glance"
        description="Key capabilities for resilient C&I energy."
        items={[
          { value: '≤ 10 ms', label: 'Switchover to backup' },
          { value: '200% DC/AC', label: 'PV oversizing' },
          { value: '140 A / 2×70 A', label: 'Charge / discharge' },
          { value: 'Unbalanced', label: '3‑phase load support' }
        ]}
      />

      {/* Solutions */}
      <section id="solutions">
        <FeatureAccordion
          sections={[
            {
              title: 'Three Phase High Voltage Energy Storage Inverters (P23) – S6‑EH3P (29.9–50) K‑H',
              content: (
                <ul className="list-disc ml-6">
                  <li>160% overload for 2 seconds; supports 200% DC/AC ratio for maximum PV utilization.</li>
                  <li>20 A max PV input; battery charging/discharging 140 A/70 A + 70 A (280 Ah cell, 0.5C).</li>
                  <li>Real‑time battery monitoring, remote upgrades, and battery healing functions.</li>
                  <li>Peak shaving in self‑use and generator modes; supports unbalanced/half‑wave loads.</li>
                </ul>
              )
            },
            {
              title: 'MPS Microgrid Hybrid Inverter (P25)',
              content: (
                <ul className="list-disc ml-6">
                  <li>Integrated PV/MPPT, transformer, STS, and maintenance bypass; easy parallel expansion.</li>
                  <li>Supports 100% unbalance; flexible control strategies and DG load rate control.</li>
                  <li>Ideal for off‑grid mines/islands, nomadic farms, and unelectrified villages.</li>
                </ul>
              )
            },
            {
              title: 'High Voltage ESS – Rack Modules (P27, P29, P31) & Stacked Residential ESS (P33)',
              content: (
                <ul className="list-disc ml-6">
                  <li>Latest LFP technology with higher energy density and smaller footprints.</li>
                  <li>Expandable modular design; real‑time monitoring, online updates, and maintenance.</li>
                  <li>Full protections: over‑charge/discharge, over‑current, voltage, short‑circuit, temperature.</li>
                </ul>
              )
            },
            {
              title: 'All‑in‑one Hybrid Energy Storage System (P35–P36)',
              content: (
                <ul className="list-disc ml-6">
                  <li>Integrated EMS, hybrid inverter, and BMS; supports black start and off‑grid operation.</li>
                  <li>Comprehensive safety with aerosol fire suppression, gas/smoke/temperature detection.</li>
                  <li>Flexible capacity expansion to megawatt scale; outdoor‑ready and efficient.</li>
                </ul>
              )
            },
            {
              title: 'On‑grid Solar Solutions (P37)',
              content: (
                <ul className="list-disc ml-6">
                  <li>Lower upfront costs with continuous power access and net‑metering benefits where available.</li>
                  <li>Financial incentives and subsidies in many regions; low maintenance requirements.</li>
                  <li>Ideal for homes, businesses, and institutions seeking sustainability and savings.</li>
                </ul>
              )
            }
          ]}
        />
      </section>

      {/* Models (examples) */}
      <section className="py-12" id="models">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Models</h2>
          <p className="section-description mt-2">High‑voltage inverter and ESS modules for C&I deployments.</p>
          <div className="mt-6">
            <div className="mb-2 font-semibold">Three Phase HV Inverters</div>
            <div className="flex flex-wrap">
              {['S6‑EH3P(29.9‑50)K‑H'].map(m => <ModelChip key={m} label={m} />)}
            </div>
          </div>
          <div className="mt-6">
            <div className="mb-2 font-semibold">HV ESS Rack Modules</div>
            <div className="flex flex-wrap">
              {['TS‑HV100R','TS‑HV280R','TS‑HV314R','TS‑HV100S'].map(m => <ModelChip key={m} label={m} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <PackagesGrid
        title="Recommended C&I packages"
        description="Typical commercial setups; final design depends on your load profile and site."
        packages={[
          {
            name: 'Peak Shaving Starter',
            power: '30–50 kW',
            storage: '40–100 kWh',
            models: ['S6‑EH3P(29.9‑50)K‑H','TS‑HV100R'],
            description: 'Reduce demand charges by discharging during peaks; charge off‑peak for savings.'
          },
          {
            name: 'UPS‑grade Backup',
            power: '50–100 kW',
            storage: '100–300 kWh',
            models: ['MPS Hybrid Inverter','TS‑HV280R'],
            description: '≤10 ms switchover keeps critical processes online; supports unbalanced three‑phase.'
          },
          {
            name: 'Microgrid Cluster',
            power: '100 kW–1 MW',
            storage: '300 kWh–1+ MWh',
            models: ['All‑in‑one ESS (P35–P36)'],
            description: 'Islandable microgrid for campuses, factories, and remote sites with DG integration.'
          }
        ]}
      />

      {/* Trust strip */}
      <CertificationsStrip />

      {/* FAQs */}
      <FaqList
        title="C&I FAQs"
        description="Common questions about commercial solar + storage."
        items={[
          { q: 'Can the system keep critical loads running during outages?', a: 'Yes. With hybrid inverters and batteries, critical circuits switch to backup within ~10 ms.' },
          { q: 'How do we size storage for peak shaving?', a: 'We analyze your load profiles and peak demand to determine optimal battery capacity for maximum savings.' },
          { q: 'Can we scale as our operations grow?', a: 'Absolutely. Systems are modular and can scale from tens of kW to MW‑class microgrids.' },
          { q: 'Do you support generator integration?', a: 'Yes. Microgrid‑ready controllers coordinate PV, batteries, and DG with flexible control strategies.' }
        ]}
      />

      {/* Downloads */}
      <DownloadsStrip description="Datasheets and brochures for commercial and industrial energy products." />

      {/* CTA */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Explore a tailored C&I system</h3>
            <p className="text-gray-600">We design for retail, factories, offices, warehouses, hospitals, and more.</p>
          </div>
          <Button asChild>
            <Link to="/contact">Request Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Commercial;
