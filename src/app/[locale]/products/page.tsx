'use client';

import { useTranslations } from 'next-intl';
import { Cable, Plug, Settings, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '@/lib/i18n/navigation';
import CTASection from '@/components/sections/CTASection';

export default function ProductsPage() {
  const nav = useTranslations('nav');

  const products = [
    {
      icon: Cable,
      titleKo: 'FFC / FPC',
      titleEn: 'Flexible Flat Cable',
      desc: '유연한 평면 케이블(FFC) 및 유연 인쇄 회로(FPC) 제조. 삼성전자 VD사업부, 생활가전사업부에 공급하는 핵심 제품입니다.',
      image: '/images/products/product-ffc-bg.jpg',
      crawledImage: '/images/products/ffc.jpg',
    },
    {
      icon: Plug,
      titleKo: '와이어 하네스',
      titleEn: 'Wire Harness',
      desc: '고품질 와이어 하네스 제품군. 가전, 산업용, 자동차 등 다양한 분야에 적용되는 정밀 배선 솔루션을 제공합니다.',
      image: '/images/products/product-harness-bg.jpg',
      crawledImage: '/images/products/harness-types.jpg',
    },
    {
      icon: Settings,
      titleKo: '커넥터 & 케이블 어셈블리',
      titleEn: 'Connector & Cable Assembly',
      desc: '다양한 규격의 커넥터 및 케이블 어셈블리 제조. 고객 요구사항에 맞춘 맞춤형 설계와 생산이 가능합니다.',
      image: '/images/products/product-connector-bg.jpg',
      crawledImage: '/images/products/s1_i2.jpg',
    },
  ];

  return (
    <>
      {/* Page Header with background image */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <img
          src="/images/headers/header-products.jpg"
          alt="Products"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Products</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">{nav('products')}</h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">
            삼성전자 1차 벤더의 기술력으로 제조되는 고품질 제품군
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, i) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={i}
                  className="group rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  {/* Product Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.titleEn}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-navy-900 mb-1">{product.titleKo}</h3>
                    <p className="text-sm text-accent font-medium mb-4">{product.titleEn}</p>
                    <p className="text-gray-600 leading-relaxed text-sm">{product.desc}</p>

                    {/* Real product photo from crawled images */}
                    <div className="mt-6 aspect-[4/3] rounded-xl overflow-hidden border border-gray-100">
                      <img
                        src={product.crawledImage}
                        alt={`${product.titleEn} sample`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover transition-colors"
                    >
                      문의하기
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
