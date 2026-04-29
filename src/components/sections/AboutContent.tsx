'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { COMPANY } from '@/lib/constants/company';
import { Target, Compass, Award, MapPin } from 'lucide-react';

export default function AboutContent() {
  const t = useTranslations('about');

  const timeline = [
    { year: '1992', event: '한성전자 설립 (경기도 화성시)' },
    { year: '2000', event: '삼성전자 1차 벤더 등록' },
    { year: '2010', event: 'ISO 인증 취득' },
    { year: '2020', event: '자본금 30억원 달성' },
    { year: '2024', event: '로보틱스 & AI 서버 신사업 추진' },
    { year: '2026', event: '웹사이트 리뉴얼 및 글로벌 확장' },
  ];

  return (
    <div className="bg-white">
      {/* Vision & Mission */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="p-10 rounded-2xl bg-gray-50 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-xl bg-navy-700/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-navy-700" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{t('vision')}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{t('visionDesc')}</p>
            </motion.div>
            <motion.div
              className="p-10 rounded-2xl bg-gray-50 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{t('mission')}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{t('missionDesc')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: '설립', value: `${COMPANY.founded}년`, icon: '🏢' },
              { label: '자본금', value: COMPANY.capital.ko, icon: '💰' },
              { label: '주요 고객', value: '삼성전자', icon: '🤝' },
              { label: '소재지', value: '경기도 화성시', icon: '📍' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-xl font-bold text-navy-900">{item.value}</div>
                <div className="text-sm text-gray-500 mt-1">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">History</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-900">{t('history')}</h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex gap-8 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-navy-700 flex items-center justify-center shrink-0 relative z-10">
                    <span className="text-xs font-bold text-white">{item.year}</span>
                  </div>
                  <div className="pt-4">
                    <p className="text-lg text-gray-700">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Location</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-900">{t('location')}</h2>
          </motion.div>
          <div className="flex items-center justify-center gap-3 text-gray-600 mb-8">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-lg">{COMPANY.address.ko}</span>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Google Maps embed will be placed here</p>
          </div>
        </div>
      </section>
    </div>
  );
}
