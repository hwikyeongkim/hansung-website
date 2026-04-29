'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/lib/i18n/navigation';
import { Cable, CheckCircle, ArrowRight } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

export default function CableHarnessPage() {
  const t = useTranslations('business.cableHarness');

  const features: string[] = t.raw('features');

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Cable className="w-6 h-6 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Cable Harness</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">{t('title')}</h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">{t('subtitle')}</p>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{t('desc')}</p>
              <div className="space-y-4">
                {features.map((feature: string, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-all"
              >
                문의하기
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* Product image placeholder */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center shadow-xl">
                <div className="text-center p-8">
                  <Cable className="w-16 h-16 text-white/40 mx-auto mb-4" />
                  <p className="text-white/60 text-sm">케이블 하네스 제품 사진</p>
                  <p className="text-white/40 text-xs mt-1">Product photo placeholder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
