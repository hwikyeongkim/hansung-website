'use client';

import { motion } from 'framer-motion';

type PageHeaderProps = {
  tag: string;
  title: string;
  subtitle?: string;
  image?: string;
};

export default function PageHeader({ tag, title, subtitle, image }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      {image ? (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/80 to-navy-900/60" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-800" />
      )}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            {tag}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-white/60 max-w-2xl">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
