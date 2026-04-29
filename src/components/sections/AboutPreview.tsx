'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPreview() {
  const t = useTranslations('home');

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">About Us</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              {t('aboutTitle')}
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {t('aboutDesc')}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-brand-blue hover:text-brand-blue-hover font-semibold transition-colors"
            >
              {t('aboutMore')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Building Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src="/images/buildings/hq.jpg"
                alt="Hansung Electronics Headquarters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-navy-500/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
