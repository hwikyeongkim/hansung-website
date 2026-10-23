'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import CTASection from '@/components/sections/CTASection';

export default function CertificationsPage() {
  const t = useTranslations('certifications');

  // CERT-CHECK: confirm current ISO 9001/14001 certificate copies (owner)
  // ISO/TS 16949·IATF 16949 항목은 과거 천진·청도 공장 인증으로 표기한다(현재 유효 인증 아님).
  const certificationSections = [
    {
      key: 'hq',
      title: t('hqTitle'),
      certs: [
        t('hqCert1'),
        t('hqCert2'),
        t('hqCert3'),
        t('hqCert4'),
        t('hqCert5'),
        t('hqCert6'),
      ],
    },
    {
      key: 'tianjin',
      title: t('tianjinTitle'),
      certs: [
        t('tianjinCert1'),
        t('tianjinCert2'),
        t('tianjinCert3'),
        t('tianjinCert4'),
      ],
    },
    {
      key: 'qingdao',
      title: t('qingdaoTitle'),
      certs: [
        t('qingdaoCert1'),
        t('qingdaoCert2'),
        t('qingdaoCert3'),
        t('qingdaoCert4'),
      ],
    },
    {
      key: 'vietnam',
      title: t('vietnamTitle'),
      certs: [
        t('vietnamCert1'),
        t('vietnamCert2'),
        t('vietnamCert3'),
      ],
    },
  ];

  return (
    <>
      <PageHeader
        tag="Certifications"
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/headers/header-quality.jpg"
      />

      {/* Certifications Content */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('description')}</p>
          </motion.div>

          {/* Certification Sections */}
          {certificationSections.map((section, sectionIndex) => (
            <motion.div
              key={section.key}
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              {/* Section Title */}
              <div className="mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-3">{section.title}</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
              </div>

              {/* Certification Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.certs.map((cert, certIndex) => (
                  <motion.div
                    key={certIndex}
                    className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-accent/50 hover:shadow-lg transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (sectionIndex * 0.1) + (certIndex * 0.05) }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                        <Award className="w-8 h-8 text-accent" />
                      </div>
                      <p className="text-center text-gray-700 font-semibold leading-relaxed">{cert}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Summary Statement */}
          <motion.div
            className="mt-20 p-12 bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg leading-relaxed">{t('summary')}</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
