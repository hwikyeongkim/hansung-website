import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Analytics } from '@vercel/analytics/next';
import { locales, type Locale } from '@/lib/i18n/config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const BASE_URL = 'https://www.hihansung.com';

// Organization 구조화 데이터 (검색엔진·AI 검색이 회사 정보를 정확히 인식하도록)
const ORGANIZATION_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hansung Electronics Co., Ltd.',
  alternateName: '한성전자 주식회사',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo/hansung%20electronics%20master%20logo.png`,
  foundingDate: '1992-07',
  description:
    'Cable harness and wire harness manufacturer. Samsung Electronics Tier-1 vendor since 1992, with production facilities in Korea and Vietnam.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '28-15, Dongtan Hana 1-gil',
    addressLocality: 'Hwaseong-si',
    addressRegion: 'Gyeonggi-do',
    addressCountry: 'KR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+82-31-8015-3930',
    contactType: 'sales',
    availableLanguage: ['Korean', 'English', 'Japanese', 'Chinese'],
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    metadataBase: new URL(BASE_URL),
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${BASE_URL}/${locale}`,
      siteName: 'Hansung Electronics',
      type: 'website',
      locale: locale === 'ko' ? 'ko_KR' : locale === 'ja' ? 'ja_JP' : locale === 'zh' ? 'zh_CN' : 'en_US',
    },
    // hreflang은 sitemap.xml에서 URL별로 정확히 제공 (레이아웃 일괄 지정은
    // 모든 하위 페이지가 홈을 가리키는 오류를 만들어 제거함)
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* Google Fonts loaded via link tags (works in production, not in sandboxed build) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-[#1A1A2E]" style={{ fontFamily: "'Inter', 'Noto Sans JP', 'Noto Sans SC', system-ui, -apple-system, sans-serif" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
