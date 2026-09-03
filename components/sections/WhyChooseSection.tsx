'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { fadeInLeft, fadeInRight } from '@/lib/animations';

export function WhyChooseSection() {
  const { t } = useTranslation();

  const benefits = [
    {
      titleKey: 'why_c1_t',
      descKey: 'why_c1_d',
      icon: 'fa-solid fa-shield-halved',
      colorClass: 'text-emerald-500',
    },
    {
      titleKey: 'why_c2_t',
      descKey: 'why_c2_d',
      icon: 'fa-solid fa-bolt-lightning',
      colorClass: 'text-blue-500',
    },
    {
      titleKey: 'why_c3_t',
      descKey: 'why_c3_d',
      icon: 'fa-solid fa-comments',
      colorClass: 'text-pink-500',
    },
    {
      titleKey: 'why_c4_t',
      descKey: 'why_c4_d',
      icon: 'fa-solid fa-chart-pie',
      colorClass: 'text-purple-500',
    },
  ];

  return (
    <section className="py-14 sm:py-16 bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Details Info */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            {...fadeInLeft}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
              {t('why_badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t('why_title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {t('why_desc')}
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-500 mt-0.5 text-xs flex-shrink-0">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                    {t('why_p1_t')}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {t('why_p1_d')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-500 mt-0.5 text-xs flex-shrink-0">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                    {t('why_p2_t')}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {t('why_p2_d')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Cards Grid */}
          <motion.div
            className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
            {...fadeInRight}
          >
            {benefits.map((benefit) => (
              <div
                key={benefit.titleKey}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <i className={`${benefit.icon} text-2xl ${benefit.colorClass}`}></i>
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                  {t(benefit.titleKey)}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t(benefit.descKey)}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
