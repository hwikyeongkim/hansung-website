'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Award, FileText } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import CTASection from '@/components/sections/CTASection';

export default function CertificationsPage() {
  const t = useTranslations('certifications');

  // ISO/TS 16949·IATF 16949 항목은 과거 천진·청도 공장 인증으로 표기한다(현재 유효 인증 아님).
  // 현행 인증(ISO 9001·14001, UL E200054)은 베트남 HANSUNG VINA 기준이며 인증서 원본을 링크한다.
  const CERT_DIR = '/files/certificates';
  const certificationSections: {
    key: string;
    title: string;
    note?: string;
    certs: { label: string; detail?: string; href?: string }[];
  }[] = [
    {
      key: 'hq',
      title: t('hqTitle'),
      certs: [
        { label: t('hqCert1') },
        { label: t('hqCert2') },
        { label: t('hqCert3') },
        { label: t('hqCert4') },
        { label: t('hqCert5') },
        { label: t('hqCert6') },
      ],
    },
    {
      key: 'tianjin',
      title: t('tianjinTitle'),
      certs: [
        { label: t('tianjinCert1') },
        { label: t('tianjinCert2') },
        { label: t('tianjinCert3') },
        { label: t('tianjinCert4') },
      ],
    },
    {
      key: 'qingdao',
      title: t('qingdaoTitle'),
      certs: [
        { label: t('qingdaoCert1') },
        { label: t('qingdaoCert2') },
        { label: t('qingdaoCert3') },
        { label: t('qingdaoCert4') },
      ],
    },
    {
      key: 'vietnam',
      title: t('vietnamTitle'),
      note: t('vietnamNote'),
      certs: [
        {
          label: t('vietnamCert1'),
          detail: t('vietnamCert1Detail'),
          href: `${CERT_DIR}/HANSUNG_VINA_ISO9001-2015_No752302_exp2029-01-13.pdf`,
        },
        {
          label: t('vietnamCert2'),
          detail: t('vietnamCert2Detail'),
          href: `${CERT_DIR}/HANSUNG_VINA_ISO14001-2015_No747569_exp2029-01-15.pdf`,
        },
        {
          label: t('vietnamCert3'),
          detail: t('vietnamCert3Detail'),
          href: `${CERT_DIR}/HANSUNG_VINA_UL_File_E200054_WiringHarness_rev2024-09-12.pdf`,
        },
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
                {section.note && <p className="mt-4 text-sm text-gray-500 max-w-3xl">{section.note}</p>}
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
                      <p className="text-center text-gray-700 font-semibold leading-relaxed">{cert.label}</p>
                      {cert.detail && (
                        <p className="mt-2 text-center text-sm text-gray-500 leading-relaxed">{cert.detail}</p>
                      )}
                      {cert.href && (
                        <a
                          href={cert.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover transition-colors"
                        >
                          <FileText className="w-4 h-4" />
                          {t('viewCertificate')}
                        </a>
                      )}
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
