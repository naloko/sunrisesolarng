import { useTranslation } from 'react-i18next';
import AnimatedSection from '../../AnimatedSection';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <header className="relative overflow-hidden">
      <div className="relative h-[320px] sm:h-[420px] md:h-[520px]">
        <img
          src="/lovable-uploads/e98919f1-676b-4e7c-85df-877382b8999c.png"
          alt="Solar panels at sunset along water - Sunrise Renewables"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-end pb-10">
          <AnimatedSection animation="fade-in">
            <span className="inline-block text-primary bg-primary/10 px-4 py-1 rounded-full text-sm font-medium mb-4">
              {t('sections.about.subtitle')}
            </span>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              {t('sections.about.title')}
            </h1>
            <p className="text-white/90 text-base sm:text-lg mt-2 max-w-2xl">
              {t('sections.about.description1')}
            </p>
          </AnimatedSection>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
