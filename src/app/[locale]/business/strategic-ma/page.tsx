import { useTranslations } from 'next-intl';
import { TrendingUp } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

export default function StrategicMaPage() {
  const t = useTranslations('business.strategicMa');

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Strategic M&A</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">{t('title')}</h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">{t('subtitle')}</p>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed">{t('desc')}</p>

          <div className="mt-12 aspect-video rounded-2xl bg-gradient-to-br from-navy-500 to-navy-700 flex items-center justify-center shadow-xl">
            <div className="text-center p-8">
              <TrendingUp className="w-16 h-16 text-white/40 mx-auto mb-4" />
              <p className="text-white/60 text-sm">전략적 M&A 관련 이미지</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
