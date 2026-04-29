'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, TrendingUp, Settings } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import CTASection from '@/components/sections/CTASection';

export default function QualityPolicyPage() {
  const t = useTranslations('qualityPolicy');

  const pillars = [
    {
      key: 'pillar1',
      icon: Heart,
      title: t('pillar1Title'),
      description: t('pillar1Desc'),
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },
    {
      key: 'pillar2',
      icon: TrendingUp,
      title: t('pillar2Title'),
      description: t('pillar2Desc'),
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      key: 'pillar3',
      icon: Settings,
      title: t('pillar3Title'),
      description: t('pillar3Desc'),
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
  ];

  return (
    <>
      <PageHeader
        tag="Quality & Environment"
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/headers/header-quality.jpg"
      />

      {/* Three Pillars Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Our Foundation</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-navy-900">{t('description')}</h3>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={index}
                  className={`p-10 rounded-2xl border-2 ${pillar.bgColor} ${pillar.borderColor} hover:shadow-lg transition-shadow`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Icon with gradient background */}
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-md">
                    <IconComponent className={`w-10 h-10 ${pillar.color}`} />
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl font-bold text-navy-900 mb-4">{pillar.title}</h4>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Connection Diagram */}
          <motion.div
            className="mt-20 p-10 bg-gray-50 rounded-2xl border-2 border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="hidden md:flex items-center justify-between">
              {/* Left pillar */}
              <div className="flex-1 text-center">
                <div className="text-5xl font-bold text-navy-700 mb-2">01</div>
                <p className="font-semibold text-navy-900">{t('pillar1Title')}</p>
              </div>

              {/* Connection line */}
              <div className="flex-1 mx-4 relative h-1 bg-gradient-to-r from-red-500 via-accent to-green-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-accent shadow-lg" />
                </div>
              </div>

              {/* Middle pillar */}
              <div className="flex-1 text-center">
                <div className="text-5xl font-bold text-accent mb-2">02</div>
                <p className="font-semibold text-navy-900">{t('pillar2Title')}</p>
              </div>

              {/* Connection line */}
              <div className="flex-1 mx-4 relative h-1 bg-gradient-to-r from-accent to-blue-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-accent shadow-lg" />
                </div>
              </div>

              {/* Right pillar */}
              <div className="flex-1 text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">03</div>
                <p className="font-semibold text-navy-900">{t('pillar3Title')}</p>
              </div>
            </div>

            {/* Mobile view */}
            <div className="md:hidden space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-navy-700 mb-2">01</div>
                <p className="font-semibold text-navy-900">{t('pillar1Title')}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">02</div>
                <p className="font-semibold text-navy-900">{t('pillar2Title')}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">03</div>
                <p className="font-semibold text-navy-900">{t('pillar3Title')}</p>
              </div>
            </div>
          </motion.div>

          {/* Policy Statement */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {t('policyStatement')}
            </p>
          </motion.div>

          {/* Quality Policy Infographic */}
          <motion.div
            className="mt-20 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Image
              src="/images/about/quality-policy.jpg"
              alt="Quality Policy Infographic"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
