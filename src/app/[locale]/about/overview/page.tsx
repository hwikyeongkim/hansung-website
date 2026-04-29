'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Phone, Globe, Calendar } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import CTASection from '@/components/sections/CTASection';

const buildingImages: Record<string, string> = {
  hq: '/images/buildings/hq.jpg',
  tianjin: '/images/buildings/tianjin.jpg',
  qingdao: '/images/buildings/qingdao.jpg',
  slovakia: '/images/buildings/slovakia.jpg',
  mexico: '/images/buildings/mexico.jpg',
  vietnam: '/images/buildings/vietnam.jpg',
};

export default function OverviewPage() {
  const t = useTranslations('overview');

  const locationKeys = ['hq', 'tianjin', 'qingdao', 'slovakia', 'mexico', 'vietnam'] as const;

  return (
    <>
      <PageHeader
        tag="Company Info"
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/headers/header-about.jpg"
      />

      {/* HQ Info Table */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* HQ Image */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/buildings/hq.jpg"
                alt="Hansung Electronics Headquarters"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </motion.div>

            {/* Info Table */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-navy-900 mb-8">{t('headquarters')}</h2>
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full border-collapse">
                  <tbody>
                    {[
                      { label: t('companyName'), value: t('locations.hq.name') },
                      { label: t('established'), value: t('locations.hq.established') },
                      { label: t('capital'), value: t('locations.hq.capital') },
                      { label: t('address'), value: t('locations.hq.address') },
                      { label: t('tel'), value: t('locations.hq.tel') },
                      { label: t('fax'), value: t('locations.hq.fax') },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-gray-200 last:border-b-0">
                        <td className="py-4 px-6 bg-gray-50 font-semibold text-navy-900 w-32 text-sm">{row.label}</td>
                        <td className="py-4 px-6 text-gray-700 text-sm">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Network Map */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Global Presence</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">{t('globalNetwork')}</h2>
          </motion.div>
          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <img
              src="/images/about/global-network.jpg"
              alt="Global Network Map"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Overseas Locations */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationKeys.filter(k => k !== 'hq').map((key, index) => (
              <motion.div
                key={key}
                className="overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Building Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={buildingImages[key]}
                    alt={t(`locations.${key}.name` as any)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy-900 mb-4">
                    {t(`locations.${key}.name` as any)}
                  </h3>

                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex gap-2 items-start">
                      <Calendar className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{t(`locations.${key}.established` as any)}</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-xs">{t(`locations.${key}.address` as any)}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{t(`locations.${key}.tel` as any)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
