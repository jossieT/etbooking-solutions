'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { CASE_STUDIES } from '@/data';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { TrendingUp } from 'lucide-react';

export function PortfolioSection() {
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="py-24 bg-slate-100/50 dark:bg-slate-900/30">
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
            {t('port_badge')}
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('port_title')}
          </motion.h2>
          <motion.p
            className="text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('port_desc')}
          </motion.p>
        </div>

        {/* Portfolio Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          {...staggerContainer}
        >
          {CASE_STUDIES.map((study, index) => {
            // Colors for tags
            let badgeBg = 'bg-pink-100 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400';
            if (index === 1) {
              badgeBg = 'bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400';
            } else if (index === 2) {
              badgeBg = 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400';
            }

            const primaryMetric = study.metrics[0];

            return (
              <motion.div
                key={study.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all"
                {...staggerItem}
              >
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${badgeBg}`}>
                      {study.industry}
                    </span>
                    {primaryMetric && (
                      <span className="text-xs text-emerald-500 font-bold flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>
                          {primaryMetric.value} {primaryMetric.label}
                        </span>
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                    {study.company}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {study.challenge}
                  </p>
                  <div className="pt-4 space-y-2 text-xs border-t border-slate-100 dark:border-slate-800">
                    <p className="leading-relaxed">
                      <strong className="text-slate-700 dark:text-slate-200">
                        {t('port_sol')}{' '}
                      </strong>
                      <span className="text-slate-600 dark:text-slate-400">
                        {study.solution}
                      </span>
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-slate-700 dark:text-slate-200">
                        {t('port_res')}{' '}
                      </strong>
                      <span className="text-slate-600 dark:text-slate-400">
                        {study.results.join(', ')}
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
