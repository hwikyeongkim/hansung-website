'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { Cable, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    key: 'cableHarness',
    href: '/business/cable-harness',
    icon: Cable,
    image: '/images/business/business-cable-harness.jpg',
  },
  {
    key: 'strategicMa',
    href: '/business/strategic-ma',
    icon: TrendingUp,
    image: '/images/business/business-strategic-ma.jpg',
  },
];

export default function BusinessCards() {
  const t = useTranslations('home');

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Business Areas</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-900">
            {t('businessTitle')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t('businessDesc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Link href={card.href} className="group block">
                  <div className="relative rounded-2xl overflow-hidden h-full min-h-[420px] flex flex-col justify-end transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                    {/* Background Image */}
                    <img
                      src={card.image}
                      alt={card.key}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/50 to-navy-900/20" />

                    {/* Content */}
                    <div className="relative p-8 lg:p-10">
                      <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5 border border-white/10">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                        {t(`${card.key}Title`)}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                        {t(`${card.key}Desc`)}
                      </p>
                      <div className="flex items-center gap-2 text-accent-light group-hover:text-white transition-colors mt-5">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
