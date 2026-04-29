'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection() {
  const t = useTranslations('home');

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-500/20 rounded-full blur-[96px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {t('ctaTitle')}
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
            {t('ctaDesc')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-10 px-10 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-xl text-lg"
          >
            {t('ctaButton')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
