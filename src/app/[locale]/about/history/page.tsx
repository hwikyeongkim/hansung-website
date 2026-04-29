'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import PageHeader from '@/components/ui/PageHeader';
import CTASection from '@/components/sections/CTASection';

export default function HistoryPage() {
  const t = useTranslations('history');

  const timelineData = {
    '2010s': [
      { date: '2015.03', key: '2015_03' },
      { date: '2014.01', key: '2014_01' },
      { date: '2012.12', key: '2012_12' },
      { date: '2012.10', key: '2012_10' },
      { date: '2010.12', key: '2010_12' },
      { date: '2010.11', key: '2010_11' },
    ],
    '2000s': [
      { date: '2009.06', key: '2009_06' },
      { date: '2008.12', key: '2008_12' },
      { date: '2008.10', key: '2008_10' },
      { date: '2008.05', key: '2008_05' },
      { date: '2007.12', key: '2007_12' },
      { date: '2007.03', key: '2007_03' },
      { date: '2006.12', key: '2006_12' },
      { date: '2005.05', key: '2005_05' },
      { date: '2005.04', key: '2005_04' },
      { date: '2005.03', key: '2005_03' },
      { date: '2004.04', key: '2004_04' },
      { date: '2000.03', key: '2000_03' },
    ],
    '1990s': [
      { date: '1997.07', key: '1997_07' },
      { date: '1997.05', key: '1997_05' },
      { date: '1996.12', key: '1996_12' },
      { date: '1992.07', key: '1992_07' },
    ],
  };

  const getEventDescription = (key: string) => {
    try {
      return t(`events.${key}`);
    } catch {
      return '';
    }
  };

  const renderTimelineDecade = (decade: string, events: Array<{ date: string; key: string }>) => (
    <motion.div
      key={decade}
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-navy-900">{decade}</h3>
        <div className="mt-2 h-1 w-24 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300" />

        <div className="space-y-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="relative flex gap-8 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              {/* Timeline dot */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center shrink-0 relative z-10 shadow-lg">
                <span className="text-xs font-bold text-white text-center px-1">{event.date}</span>
              </div>

              {/* Event description */}
              <div className="pt-3">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {getEventDescription(event.key)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <PageHeader
        tag="Company History"
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/headers/header-history.jpg"
      />

      {/* Timeline Content */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('description')}</p>
          </motion.div>

          {/* Timeline by decades */}
          {Object.entries(timelineData).map(([decade, events]) =>
            renderTimelineDecade(decade, events)
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
