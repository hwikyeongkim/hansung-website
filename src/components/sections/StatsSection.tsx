'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const t = useTranslations('home');

  const stats = [
    { value: t('statYearsValue'), unit: t('statYearsUnit'), label: t('statYears') },
    { value: t('statCapitalValue'), unit: t('statCapitalUnit'), label: t('statCapital') },
    { value: t('statClientsValue'), unit: t('statClientsUnit'), label: t('statClients') },
    { value: t('statCertValue'), unit: t('statCertUnit'), label: t('statCert') },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">At a Glance</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-900">
            {t('statsTitle')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-navy-700 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-accent mb-2">{stat.unit}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
