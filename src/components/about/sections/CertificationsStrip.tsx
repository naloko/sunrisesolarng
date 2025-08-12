import { useTranslation } from 'react-i18next';
import { ShieldCheck, Award, Zap, Leaf } from 'lucide-react';
import AnimatedSection from '../../AnimatedSection';

const items = [
  { icon: ShieldCheck, key: 'about.certifications.iso' },
  { icon: Award, key: 'about.certifications.warranty' },
  { icon: Zap, key: 'about.certifications.grid' },
  { icon: Leaf, key: 'about.certifications.safety' },
];

const CertificationsStrip = () => {
  const { t } = useTranslation();

  return (
    <section aria-label={t('about.certifications.title')} className="bg-background">
      <div className="container mx-auto px-4 py-6">
        <AnimatedSection animation="fade-in" className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map(({ icon: Icon, key }) => (
              <div key={key} className="flex items-center gap-3 rounded-lg border border-border bg-card/50 px-4 py-3">
                <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground/90">{t(key)}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CertificationsStrip;
