'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { TESTIMONIALS } from '@/data';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-slate-100/50 dark:bg-slate-900/30">
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
            {t('test_badge')}
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('test_title')}
          </motion.h2>
          <motion.p
            className="text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('test_desc')}
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          {...staggerContainer}
        >
          {TESTIMONIALS.map((testimonial, index) => {
            const cardNumber = index + 1;
            const reviewKey = `test_review${cardNumber}`;
            const roleKey = `test_role${cardNumber}`;

            return (
              <motion.div
                key={testimonial.id}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 relative space-y-4 shadow-sm hover:shadow-md transition-shadow"
                {...staggerItem}
              >
                <span className="text-4xl text-primary-400/30 dark:text-primary-500/20 font-serif absolute top-6 right-8 select-none">
                  “
                </span>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic relative z-10">
                  &ldquo;{t(reviewKey)}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <Image
                    src={testimonial.image}
                    width={40}
                    height={40}
                    className="rounded-full border border-slate-100 dark:border-slate-800"
                    alt={testimonial.name}
                  />
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">
                      {testimonial.name}
                    </h4>
                    <p className="text-[10px] text-slate-450 dark:text-slate-500 font-semibold uppercase tracking-wider">
                      {t(roleKey)}
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
