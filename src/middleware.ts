import createMiddleware from 'next-intl/middleware';
import { routing } from './lib/i18n/navigation';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // 모든 쿠키에 보안 속성 강제 적용 (SecurityScorecard 대응)
  const setCookieHeader = response.headers.get('set-cookie');
  if (setCookieHeader) {
    const securedCookies = setCookieHeader
      .split(', ')
      .map((cookie) => {
        let secured = cookie;
        if (!secured.toLowerCase().includes('httponly')) {
          secured += '; HttpOnly';
        }
        if (!secured.toLowerCase().includes('secure')) {
          secured += '; Secure';
        }
        if (!secured.toLowerCase().includes('samesite')) {
          secured += '; SameSite=Lax';
        }
        return secured;
      })
      .join(', ');
    response.headers.set('set-cookie', securedCookies);
  }

  return response;
}

export const config = {
  matcher: ['/', '/(ko|en|ja|zh)/:path*'],
};
