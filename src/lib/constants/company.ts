export const COMPANY = {
  name: {
    ko: '한성전자 주식회사',
    en: 'Hansung Electronics Co., Ltd.',
    ja: '韓成電子株式会社',
    zh: '韩成电子有限公司',
  },
  shortName: {
    ko: '한성전자',
    en: 'Hansung',
    ja: '韓成電子',
    zh: '韩成电子',
  },
  tel: '031-8015-3930',
  fax: '031-8015-3928',
  email: 'asd123a3@hihansung.com',
  address: {
    ko: '경기도 화성시 동탄하나1길 28-15',
    en: '28-15, Dongtan Hana 1-gil, Hwaseong-si, Gyeonggi-do, South Korea',
    ja: '韓国 京畿道 華城市 東灘ハナ1ギル 28-15',
    zh: '韩国 京畿道 华城市 东滩HANA1路 28-15',
  },
  founded: '1992',
  capital: {
    ko: '30억원',
    en: '3 billion KRW',
    ja: '30億ウォン',
    zh: '30亿韩元',
  },
  domain: 'hihansung.com',
  url: 'https://hihansung.com',
} as const;

// 해외 영업 창구 (영업메일 캠페인 수신자가 보는 연락처·미팅 예약)
export const SALES_CONTACT = {
  email: 'hkkim@hansungelectronics.com',
  bookingUrl:
    'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0KoJRV2MTkZ4CTC1Rok4nuLd1YpZcTFzlnCJOoe-mCq4GXWqqUkFJbIJSOUiTp-bRnqglSybII',
} as const;

// 회사소개서 PDF (일본어 페이지만 일본어판, 나머지는 영문판)
export const COMPANY_PROFILE_PDF = {
  en: '/files/Hansung_Company_Profile_EN.pdf',
  ja: '/files/Hansung_Company_Profile_JA.pdf',
} as const;
