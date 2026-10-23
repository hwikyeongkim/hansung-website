import { useLocale, useTranslations } from 'next-intl';
import { Download, ExternalLink } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import SalesContactCard from '@/components/ui/SalesContactCard';
import { COMPANY_PROFILE_PDF } from '@/lib/constants/company';

export default function CompanyProfilePage() {
  const t = useTranslations('companyProfile');
  const locale = useLocale();
  const pdf = locale === 'ja' ? COMPANY_PROFILE_PDF.ja : COMPANY_PROFILE_PDF.en;
  const languageNote = t('languageNote');

  return (
    <>
      <PageHeader
        tag="Company Profile"
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/headers/header-about.jpg"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-700 leading-relaxed">{t('summary1')}</p>
              <p className="mt-2 text-lg text-gray-700 leading-relaxed">{t('summary2')}</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={pdf}
                  download
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-all shadow-lg shadow-accent/25"
                >
                  <Download className="w-5 h-5" />
                  {t('download')}
                </a>
                <a
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-navy-700 text-navy-700 hover:bg-navy-700/5 font-semibold rounded-xl transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  {t('openPdf')}
                </a>
              </div>
              {languageNote && <p className="mt-4 text-sm text-gray-500">{languageNote}</p>}

              {/* 모바일 브라우저는 PDF 임베드가 불안정해 md 이상에서만 미리보기를 보여준다 */}
              <div className="hidden md:block mt-10 rounded-xl overflow-hidden border border-gray-200 bg-gray-100 h-[80vh] min-h-[560px]">
                <iframe src={pdf} title={t('previewTitle')} className="w-full h-full" loading="lazy" />
              </div>
            </div>

            <div>
              <SalesContactCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
