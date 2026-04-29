'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Scale, Award } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import CTASection from '@/components/sections/CTASection';

export default function MottoPage() {
  const t = useTranslations('motto');

  const policies = [
    {
      key: 'policy1',
      icon: Users,
      title: t('policy1Title'),
      description: t('policy1Desc'),
    },
    {
      key: 'policy2',
      icon: Scale,
      title: t('policy2Title'),
      description: t('policy2Desc'),
    },
    {
      key: 'policy3',
      icon: Award,
      title: t('policy3Title'),
      description: t('policy3Desc'),
    },
  ];

  return (
    <>
      <PageHeader
        tag="Company Values"
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/headers/header-about.jpg"
      />

      {/* Company Motto Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Motto Image */}
          <motion.div
            className="mb-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md">
              <Image
                src="/images/about/motto.jpg"
                alt="Company Motto Stone"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Company Motto</h2>
            <h3 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 leading-tight mb-8">
              {t('mottoTitle')}
            </h3>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">{t('mottoMeaning')}</p>
            </div>
          </motion.div>

          {/* Motto meaning breakdown */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {[
              { word: t('mottoWord1'), meaning: t('mottoWord1Meaning') },
              { word: t('mottoWord2'), meaning: t('mottoWord2Meaning') },
              { word: t('mottoWord3'), meaning: t('mottoWord3Meaning') },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <p className="text-4xl font-bold text-accent mb-3">{item.word}</p>
                <p className="text-gray-600">{item.meaning}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Management Policies Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Management Principles</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-navy-900">{t('policiesTitle')}</h3>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t('policiesIntro')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {policies.map((policy, index) => {
              const IconComponent = policy.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold text-accent mb-4">{policy.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{policy.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Closing statement */}
          <motion.div
            className="text-center p-10 bg-white rounded-2xl border-2 border-accent/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-accent">{t('closingStatement')}</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
