'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

export function CtaSection() {
  const { t } = useTranslation();

  return (
    <section className="py-14 sm:py-16 relative overflow-hidden bg-primary-950 text-white text-center">
      {/* Background graphics */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-950 to-primary-900 z-0"></div>
      <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <motion.h2
          className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('cta_title')}
        </motion.h2>
        
        <motion.p
          className="text-primary-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {t('cta_desc')}
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#contact"
            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold px-8 py-4 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 block text-center"
          >
            {t('cta_primary')}
          </a>
          <a
            href="#calculator"
            className="w-full sm:w-auto border border-primary-500 hover:bg-primary-900/40 text-white font-semibold px-8 py-4 rounded-2xl transition-all block text-center"
          >
            {t('cta_secondary')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
