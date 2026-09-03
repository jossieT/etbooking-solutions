'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { DEVELOPMENT_STEPS } from '@/data';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function TimelineSection() {
  const { t } = useTranslation();

  return (
    <section className="py-14 sm:py-16">
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
            {t('dev_badge')}
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('dev_title')}
          </motion.h2>
          <motion.p
            className="text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('dev_desc')}
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 relative"
          {...staggerContainer}
        >
          {DEVELOPMENT_STEPS.map((step, index) => {
            const stepNumber = index + 1;
            const titleKey = `step${stepNumber}_t`;
            const descKey = `step${stepNumber}_d`;

            return (
              <motion.div
                key={step.id}
                className="relative space-y-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow"
                {...staggerItem}
              >
                <span className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary-600 text-white font-extrabold text-sm flex items-center justify-center shadow-lg shadow-primary-500/20">
                  {step.id}
                </span>
                <div className="pt-2 flex items-center gap-2.5">
                  <i className={`${step.icon} text-primary-500 text-sm`}></i>
                  <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                    {t(titleKey)}
                  </h3>
                </div>
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
