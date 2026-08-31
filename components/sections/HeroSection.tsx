'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { ShieldCheck, Smartphone, Bell, ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  const { t, language } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative pt-32 pb-6 sm:pt-40 sm:pb-8 overflow-hidden">
      {/* Background Visual Interest (Grid & Mesh Gradients) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Ambient Blurred Mesh Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[450px] bg-gradient-to-tr from-primary-500/20 via-emerald-400/15 to-blue-600/15 rounded-full blur-[130px] opacity-75 dark:opacity-60" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[90px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-500/10 rounded-full blur-[100px]" />

        {/* Subtle Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30 dark:opacity-25" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} className="max-w-4xl space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              {language === 'am' ? (
                <>
                  አገልግሎት ሰጪ ድርጅቶችን የሚያሳድጉ{' '}
                  <span className="bg-gradient-to-r from-primary-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    የቦታ ማስያዣ ሲስተሞች
                  </span>
                </>
              ) : (
                <>
                  Custom{' '}
                  <span className="bg-gradient-to-r from-primary-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    Booking Solutions
                  </span>{' '}
                  That Help Service Businesses Grow
                </>
              )}
            </h1>
          </motion.div>

          {/* Subtitle / Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            {t('hero_desc')}
          </motion.p>

          {/* Dual Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2"
          >
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-primary-500/25 hover:shadow-primary-500/35 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{t('hero_cta_consult')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#sandbox"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/90 dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold text-sm sm:text-base px-8 py-4 rounded-full backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play className="w-4 h-4 text-emerald-500 fill-emerald-500" />
              <span>{language === 'am' ? 'የቀጥታ ማሳያ ይመልከቱ' : 'See Live Demo'}</span>
            </Link>
          </motion.div>

          {/* Trust Indicators Row */}
          <motion.div
            variants={itemVariants}
            className="pt-5 sm:pt-6 w-full max-w-2xl mx-auto"
          >
            <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-8 py-3.5 px-6 rounded-2xl bg-slate-100/60 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-sm text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{t('trust_1')}</span>
              </div>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
              <div className="flex items-center space-x-2">
                <Smartphone className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <span>{t('trust_2')}</span>
              </div>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
              <div className="flex items-center space-x-2">
                <Bell className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>{t('trust_3')}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
