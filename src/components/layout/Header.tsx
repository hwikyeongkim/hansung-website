'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link, usePathname, useRouter } from '@/lib/i18n/navigation';
import { localeNames, type Locale } from '@/lib/i18n/config';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
    setMobileOpen(false);
  };

  const navItems = [
    {
      href: '/about',
      label: t('about'),
      children: [
        { href: '/about/ceo', label: t('aboutCeo') },
        { href: '/about/overview', label: t('aboutOverview') },
        { href: '/about/history', label: t('aboutHistory') },
        { href: '/about/motto', label: t('aboutMotto') },
        { href: '/about/quality-policy', label: t('aboutQualityPolicy') },
        { href: '/about/certifications', label: t('aboutCertifications') },
        { href: '/about/organization', label: t('aboutOrganization') },
      ],
    },
    {
      href: '/business',
      label: t('business'),
      children: [
        { href: '/business/cable-harness', label: t('businessCableHarness') },
        { href: '/business/strategic-ma', label: t('businessStrategicMa') },
      ],
    },
    { href: '/products', label: t('products') },
    { href: '/quality', label: t('quality') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo/symbol-logo.png"
              alt="Hansung Electronics Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-navy-700 tracking-tight">HANSUNG</span>
              <span className="text-[10px] text-gray-500 tracking-widest uppercase">Electronics Co., Ltd.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-navy-700 transition-colors rounded-lg hover:bg-gray-50 flex items-center gap-1"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-navy-700 hover:bg-gray-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Language Switcher */}
            <div className="relative ml-4">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-navy-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{localeNames[locale]}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[140px]">
                  {(Object.entries(localeNames) as [Locale, string][]).map(([code, name]) => (
                    <button
                      key={code}
                      onClick={() => switchLocale(code)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        locale === code
                          ? 'text-navy-700 font-semibold bg-gray-50'
                          : 'text-gray-600 hover:text-navy-700 hover:bg-gray-50'
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-navy-700"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => {
              const isAbout = item.href === '/about';
              const isOpen = isAbout ? aboutOpen : businessOpen;
              const setOpen = isAbout ? setAboutOpen : setBusinessOpen;
              return (
              <div key={item.href}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setOpen(!isOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:text-navy-700 hover:bg-gray-50 rounded-lg"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:text-navy-700 hover:bg-gray-50 rounded-lg"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-navy-700 hover:bg-gray-50 rounded-lg"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
              );
            })}

            {/* Mobile Language */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex gap-2 px-4">
                {(Object.entries(localeNames) as [Locale, string][]).map(([code, name]) => (
                  <button
                    key={code}
                    onClick={() => switchLocale(code)}
                    className={`px-3 py-1.5 text-xs rounded-full transition-colors ${
                      locale === code
                        ? 'bg-navy-700 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
