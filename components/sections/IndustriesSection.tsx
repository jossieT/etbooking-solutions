'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { INDUSTRIES } from '@/data';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function IndustriesSection() {
  const { t } = useTranslation();

  return (
    <section id="industries" className="py-14 sm:py-16 bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-4">
          <motion.span
            className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('ind_sub')}
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('ind_title')}
          </motion.h2>
          <motion.p
            className="text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('ind_desc')}
          </motion.p>
        </div>

        {/* Industries Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          {...staggerContainer}
        >
          {INDUSTRIES.map((industry, index) => {
            const cardNumber = index + 1;
            const titleKey = `ind_card${cardNumber}_title`;

            return (
              <motion.div
                key={industry.id}
                className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-8 rounded-3xl hover:shadow-xl hover:shadow-primary-500/5 transition-all group"
                {...staggerItem}
              >
                <div
                  className={`w-12 h-12 ${industry.iconBg} rounded-2xl flex items-center justify-center mb-6 text-xl font-bold group-hover:scale-110 transition-transform`}
                >
                  <i className={industry.icon}></i>
                </div>
                <h3 className="font-bold text-xl mb-4">{t(titleKey)}</h3>
                <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
                  {industry.features.map((_, fIndex) => {
                    const featureKey = `ind_card${cardNumber}_f${fIndex + 1}`;
                    return (
                      <li key={featureKey} className="flex items-center gap-2">
                        <i className="fa-solid fa-check text-emerald-500 text-xs flex-shrink-0"></i>
                        <span>{t(featureKey)}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
