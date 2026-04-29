'use client';

import { useTranslations } from 'next-intl';
import { Award, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/ui/PageHeader';
import CTASection from '@/components/sections/CTASection';

export default function QualityPage() {
  const t = useTranslations('quality');

  const certifications = [
    { name: 'ISO 9001', desc: '품질경영시스템', year: '인증 보유' },
    { name: 'ISO 14001', desc: '환경경영시스템', year: '인증 보유' },
    { name: 'IATF 16949', desc: '자동차 품질경영시스템', year: '인증 보유' },
    { name: 'UL', desc: '안전 인증', year: '인증 보유' },
  ];

  const processes = [
    '원자재 입고 검사',
    '공정 중 품질 관리',
    '완제품 전수 검사',
    '출하 전 최종 검증',
    '고객 피드백 관리',
    '지속적 개선 활동',
  ];

  return (
    <>
      <PageHeader
        tag="Quality"
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/headers/header-quality.jpg"
      />

      {/* Quality Policy */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield className="w-12 h-12 text-navy-700 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-navy-900 mb-6">{t('policy')}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              한성전자는 삼성전자 1차 벤더로서 최고 수준의 품질관리 시스템을 운영합니다.
              원자재 입고부터 완제품 출하까지 전 공정에 걸친 엄격한 품질 관리를 통해
              고객 만족을 실현합니다.
            </p>
          </motion.div>

          {/* Quality Image */}
          <motion.div
            className="max-w-4xl mx-auto mb-20 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <img
              src="/images/quality/quality-bg.jpg"
              alt="Quality Management"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-navy-900 text-center mb-8">{t('process')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {processes.map((process, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{process}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">{t('certifications')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl bg-white border border-gray-100 text-center shadow-sm hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Award className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.desc}</p>
                <span className="inline-block mt-3 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                  {cert.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
