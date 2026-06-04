'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

export function TechStackSection() {
  const { t } = useTranslation();

  const partners = [
    'Next.js',
    'PostgreSQL',
    'Telebirr SDK',
    'Chapa API',
    'Ethio Telecom SMS',
    'Docker',
    'AWS',
  ];

  return (
    <section className="py-16 border-t border-b border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('tech_title')}
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-12 items-center opacity-75"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {partners.map((partner) => (
            <span
              key={partner}
              className="text-xs font-extrabold bg-slate-100 dark:bg-slate-800/80 py-2.5 px-4.5 rounded-xl border border-slate-200/40 dark:border-slate-700/30 text-slate-600 dark:text-slate-350 hover:scale-105 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shadow-sm"
            >
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
