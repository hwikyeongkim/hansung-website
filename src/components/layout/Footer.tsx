'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { COMPANY } from '@/lib/constants/company';
import { Phone, Mail, MapPin, Printer } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-2xl font-bold tracking-tight">HANSUNG</span>
              <p className="text-xs text-gray-400 tracking-widest uppercase mt-1">Electronics Co., Ltd.</p>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Samsung Electronics Tier-1 Vendor<br />
              Cable Harness Manufacturer<br />
              Est. {COMPANY.founded}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Menu</h3>
            <ul className="space-y-3">
              {[
                { href: '/about', label: nav('about') },
                { href: '/business', label: nav('business') },
                { href: '/products', label: nav('products') },
                { href: '/quality', label: nav('quality') },
                { href: '/company-profile', label: nav('companyProfile') },
                { href: '/contact', label: nav('contact') },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Business</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/business/cable-harness" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {nav('businessCableHarness')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">{COMPANY.tel}</span>
              </li>
              <li className="flex items-start gap-2">
                <Printer className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">{COMPANY.fax}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">{COMPANY.address.ko}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-xs text-gray-500">
            {t('copyright', { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
