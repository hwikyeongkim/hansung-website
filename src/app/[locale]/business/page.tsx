import { useTranslations } from 'next-intl';
import PageHeader from '@/components/ui/PageHeader';
import BusinessCards from '@/components/sections/BusinessCards';
import CTASection from '@/components/sections/CTASection';

export default function BusinessPage() {
  const t = useTranslations('business');

  return (
    <>
      <PageHeader
        tag="Business"
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/headers/header-business.jpg"
      />
      <BusinessCards />
      <CTASection />
    </>
  );
}
