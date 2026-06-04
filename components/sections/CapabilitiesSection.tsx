'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { ShieldCheck, Activity, TrendingUp } from 'lucide-react';

type TabId = 'client' | 'admin' | 'mobile';

export function CapabilitiesSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabId>('client');

  const tabClass = (id: TabId) =>
    `px-6 py-3 rounded-xl text-sm font-bold border transition-all cursor-pointer ${
      activeTab === id
        ? 'border-primary-500 bg-primary-600 text-white'
        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
    }`;

  return (
    <section id="capabilities" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            {t('cap_badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t('cap_title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            {t('cap_desc')}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button onClick={() => setActiveTab('client')} className={tabClass('client')}>
            {t('cap_tab1')}
          </button>
          <button onClick={() => setActiveTab('admin')} className={tabClass('admin')}>
            {t('cap_tab2')}
          </button>
          <button onClick={() => setActiveTab('mobile')} className={tabClass('mobile')}>
            {t('cap_tab3')}
          </button>
        </div>

        {/* Visual Content Box */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl relative min-h-[420px] overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === 'client' && (
              <motion.div
                key="client"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-10 items-center"
              >
                <div className="space-y-6">
                  <span className="text-xs font-bold bg-pink-100 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 px-3 py-1 rounded-full uppercase">
                    {t('cap_c_badge')}
                  </span>
                  <h3 className="text-2xl font-bold">{t('cap_c_title')}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t('cap_c_desc')}
                  </p>
                  <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>No logins required to start booking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Native localization into English & Amharic</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Instant calendar invite files sent automatically</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-bold">{t('cap_c_serv')}</span>
                    <span className="text-xs text-emerald-500 font-extrabold">1,500 ETB</span>
                  </div>
                  <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-bold">{t('cap_c_date')}</span>
                    <span className="text-xs text-slate-500">June 15 - 04:00 PM</span>
                  </div>
                  <div className="bg-primary-50 dark:bg-primary-950/40 border border-primary-100 dark:border-primary-900/50 p-4 rounded-xl text-center text-xs space-y-1">
                    <span className="font-bold text-primary-700 dark:text-primary-300">
                      {t('cap_c_con')}
                    </span>
                    <p className="text-[10px] text-slate-400">
                      Chapa APIs and instant notifications connected
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'admin' && (
              <motion.div
                key="admin"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-10 items-center"
              >
                <div className="space-y-6">
                  <span className="text-xs font-bold bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full uppercase">
                    {t('cap_a_badge')}
                  </span>
                  <h3 className="text-2xl font-bold">{t('cap_a_title')}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t('cap_a_desc')}
                  </p>
                  <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Daily and weekly team timeline grids</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Real-time payment deposit confirmation hooks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>One-click export of financial reports for accounting</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-950 text-slate-100 p-6 rounded-2xl border border-slate-800 space-y-4 font-sans">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <span className="text-xs font-bold">Admin Panel - Bole Branch</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                      <Activity className="w-2.5 h-2.5 animate-pulse" /> Live Status
                    </span>
                  </div>
                  {/* Mock Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 block mb-1">Daily Bookings</span>
                      <h4 className="text-lg font-bold flex items-center gap-1">
                        38{' '}
                        <span className="text-xs text-emerald-400 font-normal flex items-center">
                          <TrendingUp className="w-3 h-3" /> +12%
                        </span>
                      </h4>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 block mb-1">Daily Revenue</span>
                      <h4 className="text-lg font-bold">84,500 ETB</h4>
                    </div>
                  </div>
                  {/* Scheduling rows */}
                  <div className="space-y-2 text-[11px] font-medium">
                    <div className="flex items-center justify-between bg-slate-900/50 p-2.5 rounded-lg border border-slate-800">
                      <span className="text-slate-300">10:30 AM - Barber VIP</span>
                      <span className="text-yellow-400">Abebe K. (Yared T.)</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-900/50 p-2.5 rounded-lg border border-slate-800">
                      <span className="text-slate-300">11:45 AM - Wax Polish</span>
                      <span className="text-emerald-400">Semere L. (Elena K.)</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'mobile' && (
              <motion.div
                key="mobile"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-10 items-center"
              >
                <div className="space-y-6">
                  <span className="text-xs font-bold bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 px-3 py-1 rounded-full uppercase">
                    {t('cap_m_badge')}
                  </span>
                  <h3 className="text-2xl font-bold">{t('cap_m_title')}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t('cap_m_desc')}
                  </p>
                  <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Fast, lightweight rendering for low-bandwidth networks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Push notifications configured inside modern PWAs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Native tap optimization for quick thumbs</span>
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center">
                  <div className="w-56 h-96 bg-slate-950 text-white rounded-[32px] border-4 border-slate-800 relative overflow-hidden p-4 shadow-2xl flex flex-col justify-between">
                    <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-slate-950 border border-slate-800"></div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between pt-2">
                      <div className="space-y-2 text-center">
                        <div className="w-8 h-8 rounded bg-gradient-to-tr from-primary-600 to-emerald-500 mx-auto flex items-center justify-center text-[10px] font-extrabold shadow shadow-primary-500/20">
                          ET
                        </div>
                        <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                          Bole Grooming
                        </span>
                      </div>
                      <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-[10px] space-y-1 shadow-inner">
                        <p className="font-bold text-center text-slate-300">Confirm with Telebirr</p>
                        <div className="bg-primary-600 py-1 rounded text-center text-white cursor-pointer font-bold hover:bg-primary-700 transition-colors">
                          Pay Now
                        </div>
                      </div>
                      <span className="text-[7px] text-slate-500 text-center font-medium block">
                        Secure checkout powered by ETBooking
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
