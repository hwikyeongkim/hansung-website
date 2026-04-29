import { useTranslations } from 'next-intl';
import HeroSection from '@/components/sections/HeroSection';
import AboutPreview from '@/components/sections/AboutPreview';
import BusinessCards from '@/components/sections/BusinessCards';
import StatsSection from '@/components/sections/StatsSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <BusinessCards />
      <StatsSection />
      <CTASection />
    </>
  );
}
