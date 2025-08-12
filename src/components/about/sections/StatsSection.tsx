import AnimatedSection from '../../AnimatedSection';
import AnimatedCounter from '../../AnimatedCounter';
import { useTranslation } from 'react-i18next';

const Stat = ({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) => (
  <div className="text-center rounded-xl border border-border bg-card/50 px-6 py-8">
    <AnimatedCounter end={value} duration={1800} suffix={suffix} className="text-3xl sm:text-4xl font-bold text-primary" />
    <p className="mt-2 text-sm text-foreground/80">{label}</p>
  </div>
);

const StatsSection = () => {
  const { t } = useTranslation();

  return (
    <section aria-label="Company statistics" className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <Stat value={10} suffix="+" label={t('about.stats.experience')} />
            <Stat value={250} suffix="+" label={t('about.stats.projects')} />
            <Stat value={50} suffix="+" label={t('about.stats.team')} />
            <Stat value={5000} suffix="+" label={t('about.stats.co2')} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default StatsSection;
