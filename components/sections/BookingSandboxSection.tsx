'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { fadeInUp } from '@/lib/animations';
import { Sparkles, CheckCircle2, RotateCcw, Clock, User, Calendar, CreditCard, ChevronRight } from 'lucide-react';

interface SandboxService {
  name: string;
  price: number;
  duration: string;
  type: string;
  icon: string;
  iconColor: string;
  bgColor: string;
  descKey: string;
  nameKey: string;
}

export function BookingSandboxSection() {
  const { t, language } = useTranslation();
  const [sandboxStep, setSandboxStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedService, setSelectedService] = useState<SandboxService | null>(null);
  const [selectedStaff, setSelectedStaff] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const services: SandboxService[] = [
    {
      name: 'Premium Car Wash & Detail',
      nameKey: 'sb_serv1',
      price: 2800,
      duration: '90 mins',
      type: 'detailing',
      icon: 'fa-solid fa-car',
      iconColor: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-950/50',
      descKey: 'sb_serv1_desc',
    },
    {
      name: 'VIP Grooming Session',
      nameKey: 'sb_serv2',
      price: 1200,
      duration: '45 mins',
      type: 'barber',
      icon: 'fa-solid fa-scissors',
      iconColor: 'text-amber-600 dark:text-amber-400',
      bgColor: 'bg-amber-100 dark:bg-amber-950/50',
      descKey: 'sb_serv2_desc',
    },
  ];

  const handleSelectService = (service: SandboxService) => {
    setSelectedService(service);
    setSandboxStep(2);
  };

  const handleSelectStaff = (staff: string) => {
    setSelectedStaff(staff);
    if (selectedTime) {
      setSandboxStep(3);
    }
  };

  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
    if (selectedStaff) {
      setSandboxStep(3);
    }
  };

  const resetSandbox = () => {
    setSelectedService(null);
    setSelectedStaff(null);
    setSelectedTime(null);
    setSandboxStep(1);
  };

  return (
    <section id="sandbox" className="py-20 sm:py-28 relative scroll-mt-20">
      {/* Background ambient accents */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          className="text-center space-y-3 mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-950/60 border border-primary-100 dark:border-primary-900 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
            <span className="text-xs font-semibold text-primary-700 dark:text-primary-300">
              {language === 'am' ? 'የቀጥታ ሲስተም ሙከራ' : 'Live Interactive Demo'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t('sandbox_header')}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('sandbox_sub')}
          </p>
        </motion.div>

        {/* Centered Elevated Sandbox Card */}
        <motion.div
          {...fadeInUp}
          className="relative max-w-4xl mx-auto rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 backdrop-blur-xl overflow-hidden"
        >
          {/* Card Top Banner */}
          <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {t('sandbox_header')}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {language === 'am' ? 'የ 3 ደረጃ ፈጣን የቦታ ማስያዣ ማሳያ' : '3-Step Seamless Reservation Flow'}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {sandboxStep > 1 && (
                <button
                  onClick={resetSandbox}
                  className="inline-flex items-center space-x-1.5 text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{language === 'am' ? 'እንደገና ጀምር' : 'Reset'}</span>
                </button>
              )}
              <span className="text-xs bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-bold px-3 py-1 rounded-full flex items-center gap-1.5 border border-emerald-200 dark:border-emerald-900">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-emerald-600 dark:text-emerald-400" />
                Demo Live
              </span>
            </div>
          </div>

          {/* Progress Steps Header */}
          <div className="px-6 py-4 bg-slate-50/30 dark:bg-slate-950/30 border-b border-slate-100 dark:border-slate-800">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto">
              <div
                className={`flex items-center gap-2 text-xs font-semibold transition-all ${
                  sandboxStep >= 1
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-slate-400 dark:text-slate-600'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    sandboxStep >= 1
                      ? 'bg-primary-600 text-white shadow-sm shadow-primary-500/30'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                  }`}
                >
                  1
                </span>
                <span className="truncate">{t('sb_step1')}</span>
              </div>

              <div
                className={`flex items-center gap-2 text-xs font-semibold transition-all ${
                  sandboxStep >= 2
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-slate-400 dark:text-slate-600'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    sandboxStep >= 2
                      ? 'bg-primary-600 text-white shadow-sm shadow-primary-500/30'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                  }`}
                >
                  2
                </span>
                <span className="truncate">{t('sb_step2')}</span>
              </div>

              <div
                className={`flex items-center gap-2 text-xs font-semibold transition-all ${
                  sandboxStep >= 3
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-slate-400 dark:text-slate-600'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    sandboxStep >= 3
                      ? 'bg-primary-600 text-white shadow-sm shadow-primary-500/30'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                  }`}
                >
                  3
                </span>
                <span className="truncate">{t('sb_step3')}</span>
              </div>
            </div>
          </div>

          {/* Sandbox Interactive Body */}
          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {/* Step 1: Select Service */}
              {sandboxStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {t('sb_v1_title')}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {language === 'am'
                        ? 'ለማስያዝ ከታች ካሉት አገልግሎቶች አንዱን ይምረጡ'
                        : 'Choose a service vertical to test the automated workflow'}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <button
                        key={service.type}
                        onClick={() => handleSelectService(service)}
                        className="flex flex-col justify-between p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary-500 dark:hover:border-primary-500 text-left bg-slate-50/70 hover:bg-slate-50 dark:bg-slate-800/40 dark:hover:bg-slate-800/80 transition-all duration-200 hover:shadow-md group cursor-pointer"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center ${service.iconColor} text-lg group-hover:scale-110 transition-transform`}
                          >
                            <i className={service.icon}></i>
                          </div>
                          <div>
                            <h5 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                              {t(service.nameKey)}
                            </h5>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                              {t(service.descKey)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{service.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-base text-primary-600 dark:text-primary-400">
                              {service.price.toLocaleString()} ETB
                            </span>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Select Staff & Time */}
              {sandboxStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Selected service pill */}
                  {selectedService && (
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-primary-50/70 dark:bg-primary-950/40 border border-primary-100 dark:border-primary-900/60">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-lg ${selectedService.bgColor} flex items-center justify-center ${selectedService.iconColor}`}>
                          <i className={selectedService.icon}></i>
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 dark:text-white">
                            {t(selectedService.nameKey)}
                          </span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                            {selectedService.price.toLocaleString()} ETB (~{selectedService.duration})
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSandboxStep(1)}
                        className="text-xs text-primary-600 dark:text-primary-400 hover:underline font-semibold"
                      >
                        {language === 'am' ? 'ቀይር' : 'Change'}
                      </button>
                    </div>
                  )}

                  {/* Staff Selection */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {t('sb_v2_staff')}
                    </h5>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <button
                        onClick={() => handleSelectStaff('Yared')}
                        className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-left ${
                          selectedStaff === 'Yared'
                            ? 'border-primary-500 bg-primary-50/80 dark:bg-primary-950/50 shadow-sm'
                            : 'border-slate-200 dark:border-slate-800 hover:border-primary-500 bg-slate-50/60 dark:bg-slate-800/40'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Image
                            src="https://placehold.co/100x100/3b82f6/ffffff?text=Y"
                            width={38}
                            height={38}
                            className="rounded-full shadow-sm"
                            alt="Yared"
                          />
                          <div>
                            <h6 className="text-sm font-bold text-slate-900 dark:text-white">Yared T.</h6>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">Senior Specialist</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-900">
                          {t('sb_avail')}
                        </span>
                      </button>

                      <button
                        onClick={() => handleSelectStaff('Elena')}
                        className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-left ${
                          selectedStaff === 'Elena'
                            ? 'border-primary-500 bg-primary-50/80 dark:bg-primary-950/50 shadow-sm'
                            : 'border-slate-200 dark:border-slate-800 hover:border-primary-500 bg-slate-50/60 dark:bg-slate-800/40'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Image
                            src="https://placehold.co/100x100/10b981/ffffff?text=E"
                            width={38}
                            height={38}
                            className="rounded-full shadow-sm"
                            alt="Elena"
                          />
                          <div>
                            <h6 className="text-sm font-bold text-slate-900 dark:text-white">Elena K.</h6>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">Lead Professional</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-900">
                          {t('sb_avail')}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {t('sb_v2_time')}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { time: '09:30 AM (Morning)', label: '09:30 AM', period: 'Morning Slot' },
                        { time: '02:00 PM (Afternoon)', label: '02:00 PM', period: 'Afternoon Slot' },
                        { time: '05:30 PM (Evening)', label: '05:30 PM', period: 'Evening Slot' },
                      ].map((slot) => (
                        <button
                          key={slot.time}
                          onClick={() => handleSelectTime(slot.time)}
                          className={`p-3 rounded-xl border text-center transition-all ${
                            selectedTime === slot.time
                              ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/60 shadow-sm'
                              : 'border-slate-200 dark:border-slate-800 hover:border-primary-500 bg-slate-50/50 dark:bg-slate-800/40'
                          }`}
                        >
                          <span className="block text-sm font-bold text-slate-900 dark:text-white">
                            {slot.label}
                          </span>
                          <span className="block text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                            {slot.period}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Complete & Payment Preview */}
              {sandboxStep === 3 && selectedService && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Appointment Summary Receipt */}
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {t('sb_v3_selected')}
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white">
                        {t(selectedService.nameKey)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        {t('sb_v3_staff')}
                      </span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {selectedStaff} T.
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {t('sb_v3_time')}
                      </span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {selectedTime?.split(' ')[0]} {selectedTime?.split(' ')[1]}
                      </span>
                    </div>

                    <div className="h-px bg-slate-200 dark:bg-slate-700 my-2" />

                    <div className="flex items-center justify-between text-base">
                      <span className="font-bold text-slate-900 dark:text-white">
                        {t('sb_v3_total')}
                      </span>
                      <span className="font-extrabold text-primary-600 dark:text-primary-400 text-lg">
                        {selectedService.price.toLocaleString()} ETB
                      </span>
                    </div>
                  </div>

                  {/* Payment Channel Preview */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {t('sb_payment_channel')}
                    </h5>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-3 p-4 border border-blue-200 dark:border-blue-900/60 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-blue-500/5 dark:from-blue-500/20 dark:to-transparent cursor-pointer hover:border-blue-500 transition-all">
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 dark:text-white block">
                            Telebirr
                          </span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400">
                            Instant PIN Checkout
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-4 border border-emerald-200 dark:border-emerald-900/60 rounded-2xl bg-gradient-to-tr from-emerald-500/10 to-emerald-500/5 dark:from-emerald-500/20 dark:to-transparent cursor-pointer hover:border-emerald-500 transition-all">
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 dark:text-white block">
                            Chapa (CBE Birr)
                          </span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400">
                            Direct Bank & Card
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Confirmation Button */}
                  <button
                    onClick={() => setSandboxStep(4)}
                    className="w-full bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 rounded-2xl text-sm transition-all duration-200 tracking-wider uppercase shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>{t('sb_v3_book')}</span>
                  </button>
                </motion.div>
              )}

              {/* Step 4: Success Screen */}
              {sandboxStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-8 sm:py-12 space-y-5"
                >
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-950/80 rounded-full flex items-center justify-center mx-auto text-emerald-500 shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h4 className="font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                      {t('sb_v4_success')}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {t('sb_v4_desc')}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={resetSandbox}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{t('sb_v4_restart')}</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
