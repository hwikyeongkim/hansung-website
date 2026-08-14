import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.hihansung.com';
const LOCALES = ['ko', 'en', 'ja', 'zh'] as const;

// 모든 페이지 라우트 (src/app/[locale]/**/page.tsx 기준)
const ROUTES: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/business', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/business/cable-harness', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/products', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/quality', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about/ceo', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/about/overview', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/about/history', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/about/motto', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/about/quality-policy', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/about/certifications', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about/organization', priority: 0.5, changeFrequency: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap(({ path, priority, changeFrequency }) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      // URL별 hreflang (구글은 sitemap의 alternates를 link 태그와 동일하게 인식)
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${BASE_URL}/${l}${path}`])
        ),
      },
    }))
  );
}
