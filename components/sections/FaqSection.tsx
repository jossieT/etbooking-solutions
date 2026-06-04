'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { FAQ_ITEMS } from '@/data';
import { ChevronDown } from 'lucide-react';

export function FaqSection() {
  const { t } = useTranslation();
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.span
            className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('faq_badge')}
          </motion.span>
          <motion.h2
            className="text-3xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('faq_title')}
          </motion.h2>
          <motion.p
            className="text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('faq_desc')}
          </motion.p>
        </div>

        {/* FAQ Accordion Items */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const itemNumber = index + 1;
            const questionKey = `faq_q${itemNumber}`;
            const answerKey = `faq_a${itemNumber}`;
            const isOpen = openIds.includes(item.id);

            return (
              <motion.div
                key={item.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-slate-800 dark:text-slate-250 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <span className="text-sm sm:text-base leading-snug">{t(questionKey)}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      isOpen ? 'rotate-180 text-primary-500' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed pt-1 border-t border-slate-100/60 dark:border-slate-800/50">
                        {t(answerKey)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
