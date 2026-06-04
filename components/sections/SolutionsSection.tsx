'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { SERVICES } from '@/data';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function SolutionsSection() {
  const { t } = useTranslation();

  return (
    <section id="solutions" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('sol_badge')}
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('sol_title')}
          </motion.h2>
          <motion.p
            className="text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('sol_desc')}
          </motion.p>
        </div>

        {/* Solutions Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          {...staggerContainer}
        >
          {SERVICES.map((service, index) => {
            const cardNumber = index + 1;
            const titleKey = `sol_${cardNumber}_title`;
            const descKey = `sol_${cardNumber}_desc`;

            return (
              <motion.div
                key={service.id}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 hover:shadow-xl transition-all"
                {...staggerItem}
              >
                <div
                  className={`w-10 h-10 rounded-lg ${service.iconBg} flex items-center justify-center`}
                >
                  <i className={service.icon}></i>
                </div>
                <h3 className="font-bold text-lg">{t(titleKey)}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t(descKey)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
