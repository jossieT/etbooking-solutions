'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { staggerContainer, staggerItem } from '@/lib/animations';

interface Partner {
  name: string;
  icon: string;
  iconColor: string;
  bgFrom: string;
  bgTo: string;
  badgeColor: string;
  badge: string;
}

const partners: Partner[] = [
  {
    name: 'Next.js',
    icon: 'fa-solid fa-n',
    iconColor: 'text-white',
    bgFrom: 'from-slate-800',
    bgTo: 'to-slate-900',
    badge: 'Frontend',
    badgeColor: 'bg-slate-600 text-slate-100',
  },
  {
    name: 'PostgreSQL',
    icon: 'fa-solid fa-database',
    iconColor: 'text-sky-200',
    bgFrom: 'from-sky-700',
    bgTo: 'to-sky-900',
    badge: 'Database',
    badgeColor: 'bg-sky-600 text-sky-100',
  },
  {
    name: 'Telebirr SDK',
    icon: 'fa-solid fa-mobile-screen-button',
    iconColor: 'text-yellow-200',
    bgFrom: 'from-yellow-500',
    bgTo: 'to-orange-600',
    badge: 'Payments',
    badgeColor: 'bg-yellow-500 text-yellow-950',
  },
  {
    name: 'Chapa API',
    icon: 'fa-solid fa-credit-card',
    iconColor: 'text-emerald-100',
    bgFrom: 'from-emerald-600',
    bgTo: 'to-teal-700',
    badge: 'Payments',
    badgeColor: 'bg-emerald-600 text-emerald-100',
  },
  {
    name: 'Ethio Telecom',
    icon: 'fa-solid fa-tower-broadcast',
    iconColor: 'text-blue-100',
    bgFrom: 'from-blue-600',
    bgTo: 'to-blue-800',
    badge: 'SMS / API',
    badgeColor: 'bg-blue-600 text-blue-100',
  },
  {
    name: 'Docker',
    icon: 'fa-brands fa-docker',
    iconColor: 'text-blue-200',
    bgFrom: 'from-cyan-600',
    bgTo: 'to-blue-700',
    badge: 'DevOps',
    badgeColor: 'bg-cyan-600 text-cyan-100',
  },
  {
    name: 'AWS',
    icon: 'fa-brands fa-aws',
    iconColor: 'text-orange-200',
    bgFrom: 'from-orange-500',
    bgTo: 'to-amber-600',
    badge: 'Cloud',
    badgeColor: 'bg-orange-500 text-orange-950',
  },
];

export function TechStackSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 border-t border-b border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <motion.span
            className="inline-block text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powered By
          </motion.span>
          <motion.h2
            className="text-2xl sm:text-3xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('tech_title')}
          </motion.h2>
          <motion.p
            className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Built on a battle-tested stack of enterprise-grade tools, cloud services, and Ethiopian payment infrastructure.
          </motion.p>
        </div>

        {/* Partner Cards */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4"
          {...staggerContainer}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              {...staggerItem}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative flex flex-col items-center gap-3 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Gradient glow background on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${partner.bgFrom} ${partner.bgTo} transition-opacity duration-300 rounded-2xl`}
              />

              {/* Icon circle */}
              <div
                className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${partner.bgFrom} ${partner.bgTo} flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300`}
              >
                <i className={`${partner.icon} text-lg ${partner.iconColor}`} />
              </div>

              {/* Name */}
              <p className="relative z-10 text-[11px] font-bold text-center text-slate-700 dark:text-slate-200 leading-tight">
                {partner.name}
              </p>

              {/* Badge */}
              <span
                className={`relative z-10 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${partner.badgeColor}`}
              >
                {partner.badge}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative divider */}
        <motion.div
          className="mt-14 flex items-center justify-center gap-3 text-xs text-slate-400 dark:text-slate-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-slate-300 dark:to-slate-700" />
          <span className="font-semibold tracking-wider uppercase">Enterprise-Grade Infrastructure</span>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-slate-300 dark:to-slate-700" />
        </motion.div>

      </div>
    </section>
  );
}
