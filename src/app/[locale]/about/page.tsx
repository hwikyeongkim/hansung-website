import { useTranslations } from 'next-intl';
import PageHeader from '@/components/ui/PageHeader';
import AboutContent from '@/components/sections/AboutContent';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <>
      <PageHeader
        tag="About Us"
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/headers/header-about.jpg"
      />
      <AboutContent />
    </>
  );
}
