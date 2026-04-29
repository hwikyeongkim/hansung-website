'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import PageHeader from '@/components/ui/PageHeader';
import CTASection from '@/components/sections/CTASection';

export default function OrganizationPage() {
  const t = useTranslations('organization');

  return (
    <>
      <PageHeader
        tag="Company Structure"
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/headers/header-about.jpg"
      />

      {/* Organization Chart */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="overflow-x-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Chart Container */}
            <div className="inline-block w-full min-w-max p-8">
              {/* Level 1: CEO */}
              <div className="flex justify-center mb-20">
                <div className="relative">
                  <div className="w-40 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                    <span className="text-white font-bold text-center px-4">{t('ceo')}</span>
                  </div>
                  {/* Line down from CEO */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-300" />
                </div>
              </div>

              {/* Level 2: Advisors */}
              <div className="flex justify-center gap-32 mb-20 relative">
                {/* Horizontal line connecting advisors */}
                <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gray-300 transform -translate-y-8" />

                {/* Left advisor line */}
                <div className="absolute left-1/3 top-0 w-0.5 h-8 bg-gray-300 transform -translate-y-8" />

                {/* Right advisor line */}
                <div className="absolute right-1/3 top-0 w-0.5 h-8 bg-gray-300 transform -translate-y-8" />

                {/* Left Advisor */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-36 h-20 bg-navy-700/10 border-2 border-navy-700 rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow">
                    <span className="text-navy-900 font-bold text-center px-4 text-sm">{t('managementAdvisor')}</span>
                  </div>
                  {/* Line down */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-300" />
                </motion.div>

                {/* Right Advisor */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="w-36 h-20 bg-navy-700/10 border-2 border-navy-700 rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow">
                    <span className="text-navy-900 font-bold text-center px-4 text-sm">{t('financeAdvisor')}</span>
                  </div>
                  {/* Line down */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-300" />
                </motion.div>
              </div>

              {/* Level 3: Main divisions */}
              <div className="flex justify-between gap-12 mb-20 relative">
                {/* Connecting line for level 3 */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-8" />

                {/* Main Headquarters */}
                <motion.div
                  className="flex-1 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-300 -translate-y-8" />

                  <div className="w-full bg-blue-50 border-2 border-blue-300 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-navy-900 mb-4">{t('hqDivision')}</h3>
                  </div>

                  {/* Departments under HQ */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-300 mt-6" />

                  <div className="mt-16 space-y-4">
                    {[t('adminHQ'), t('qaHQ'), t('salesHQ'), t('researchCenter')].map((dept, idx) => (
                      <motion.div
                        key={idx}
                        className="ml-4 p-4 bg-blue-100 border border-blue-300 rounded-lg text-sm font-semibold text-navy-900 text-center hover:shadow-md transition-shadow"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        {dept}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Overseas Factories */}
                <motion.div
                  className="flex-1 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-300 -translate-y-8" />

                  <div className="w-full bg-green-50 border-2 border-green-300 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-navy-900 mb-4">{t('overseasDivision')}</h3>
                  </div>

                  {/* Factories under Overseas */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-300 mt-6" />

                  <div className="mt-16 space-y-4">
                    {[t('tianjin'), t('qingdao'), t('slovakia'), t('mexico'), t('vietnam')].map((factory, idx) => (
                      <motion.div
                        key={idx}
                        className="ml-4 p-4 bg-green-100 border border-green-300 rounded-lg text-sm font-semibold text-navy-900 text-center hover:shadow-md transition-shadow"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (0.15 + idx * 0.05) }}
                      >
                        {factory}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Organization Description */}
          <motion.div
            className="mt-20 p-10 bg-gray-50 rounded-2xl border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-navy-900 mb-4">{t('structureTitle')}</h3>
            <p className="text-gray-700 leading-relaxed">{t('structureDesc')}</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
