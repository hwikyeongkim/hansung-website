'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import PageHeader from '@/components/ui/PageHeader';
import CTASection from '@/components/sections/CTASection';

export default function CEOPage() {
  const t = useTranslations('ceo');

  return (
    <>
      <PageHeader
        tag="CEO Message"
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/about/ceo-bg.jpg"
      />

      {/* CEO Message Content */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Quote */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex justify-center">
              <span className="text-6xl text-accent/30 font-serif">&ldquo;</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-navy-900 leading-relaxed whitespace-pre-line">
              {t('quote')}
            </p>
            <div className="flex justify-center mt-4">
              <span className="text-6xl text-accent/30 font-serif">&rdquo;</span>
            </div>
          </motion.div>

          {/* Body Content */}
          <motion.div
            className="space-y-8 text-lg text-gray-700 leading-[1.9]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p>{t('body1')}</p>
            <p>{t('body2')}</p>
            <p>{t('body3')}</p>
          </motion.div>

          {/* Closing & Signature */}
          <motion.div
            className="mt-16 pt-8 border-t border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 mb-8">{t('closing')}</p>
            <div className="text-right">
              <p className="text-sm text-gray-500">{t('companyName')}</p>
              <p className="text-xl font-bold text-navy-900 mt-1">{t('ceoName')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
