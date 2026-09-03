'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { fadeInUp } from '@/lib/animations';
import { Sparkles, CheckCircle2, RotateCcw, Clock, User, Calendar, CreditCard, ChevronRight, MousePointerClick, Smartphone, ArrowRight } from 'lucide-react';

interface SandboxService {
  price: number;
  duration: string;
  type: string;
  icon: string;
  iconColor: string;
  bgColor: string;
  descKey: string;
  nameKey: string;
}

interface SandboxStaff {
  id: string;
  displayName: string;
  title: string;
  initials: string;
  avatarBg: string;
  avatarText: string;
}

export function BookingSandboxSection() {
  const { t, language } = useTranslation();
  const [sandboxStep, setSandboxStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedService, setSelectedService] = useState<SandboxService | null>(null);
  const [selectedStaff, setSelectedStaff] = useState<SandboxStaff | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'telebirr' | 'chapa'>('telebirr');

  const services: SandboxService[] = [
    {
      nameKey: 'sandbox_service_auto_detail',
      price: 2800,
      duration: '90 mins',
      type: 'detailing',
      icon: 'fa-solid fa-car',
      iconColor: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-950/50',
      descKey: 'sandbox_service_auto_detail_desc',
    },
    {
      nameKey: 'sandbox_service_vip_grooming',
      price: 1200,
      duration: '45 mins',
      type: 'barber',
      icon: 'fa-solid fa-scissors',
      iconColor: 'text-amber-600 dark:text-amber-400',
      bgColor: 'bg-amber-100 dark:bg-amber-950/50',
      descKey: 'sandbox_service_vip_grooming_desc',
    },
  ];

  const staffMembers: SandboxStaff[] = [
    {
      id: 'yared',
      displayName: 'Yared T.',
      title: 'Senior Specialist',
      initials: 'YT',
      avatarBg: 'bg-blue-600',
      avatarText: 'text-white',
    },
    {
      id: 'elena',
      displayName: 'Elena K.',
      title: 'Lead Professional',
      initials: 'EK',
      avatarBg: 'bg-emerald-500',
      avatarText: 'text-white',
    },
  ];

  const handleSelectService = (service: SandboxService) => {
    setSelectedService(service);
    setSandboxStep(2);
  };

  const handleSelectStaff = (staff: SandboxStaff) => {
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
    setSelectedPaymentMethod('telebirr');
    setSandboxStep(1);
  };

  return (
    <section id="sandbox" className="pt-2 pb-10 sm:pt-4 sm:pb-14 relative scroll-mt-20">
      {/* Background ambient accents */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          className="text-center space-y-3 mb-6 sm:mb-8"
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

          {/* Interactive Simulation Roadmap Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-slate-600 dark:text-slate-400 max-w-3xl mx-auto pt-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-950/70 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              {language === 'am' ? '1. አገልግሎት ይምረጡ' : '1. Choose Service'}
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden sm:inline-block" />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-slate-700 dark:text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
              {language === 'am' ? '2. ሰዓት እና ባለሙያ' : '2. Time & Staff'}
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden sm:inline-block" />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-slate-700 dark:text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {language === 'am' ? '3. ቴሌብር/ንግድ ባንክ ክፍያ' : '3. Mock Telebirr/CBE'}
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden sm:inline-block" />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-slate-700 dark:text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {language === 'am' ? '4. ፈጣን የኤስኤምኤስ ማረጋገጫ' : '4. Automated SMS'}
            </span>
          </div>
        </motion.div>

        {/* Centered Elevated Sandbox Card */}
        <motion.div
          {...fadeInUp}
          className="relative max-w-4xl mx-auto rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 backdrop-blur-xl overflow-hidden"
        >
          {/* Card Top Banner */}
          <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <span className="flex h-3.5 w-3.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                    {language === 'am' ? 'የቀጥታ የቦታ ማስያዣ ሲሙሌተር' : 'Live Booking Simulator'}
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                    {language === 'am' ? 'ተግባራዊ ሙከራ' : 'Click to Test'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {language === 'am' ? 'የ 3 ደረጃ ፈጣን የቦታ ማስያዣ ማሳያ' : 'Experience the end-to-end customer reservation & payment flow'}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {sandboxStep > 1 && (
                <button
                  onClick={resetSandbox}
                  className="inline-flex items-center space-x-1.5 text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
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
                  {/* Interactive Action Prompt Banner */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-primary-50 via-blue-50/60 to-primary-50 dark:from-primary-950/50 dark:via-slate-900 dark:to-primary-950/50 border border-primary-200/80 dark:border-primary-800/70 shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary-600 text-white flex items-center justify-center shadow-md shadow-primary-500/20 flex-shrink-0">
                        <MousePointerClick className="w-5 h-5 animate-bounce" />
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white block">
                          {language === 'am'
                            ? 'የማስመሰያ ሙከራውን ለመጀመር ከታች ካሉት አገልግሎቶች አንዱን ይጫኑ'
                            : 'Click any service below to test the automated booking flow'}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          {language === 'am'
                            ? 'ምንም እውነተኛ ክፍያ አያስፈልግም • ፈጣን የደንበኛ ተሞክሮ ማሳያ'
                            : 'Fully interactive simulation • No real payment required'}
                        </span>
                      </div>
                    </div>
                    <span className="self-start sm:self-center text-[11px] font-extrabold text-primary-700 dark:text-primary-300 bg-white dark:bg-slate-900 px-3 py-1 rounded-full border border-primary-200 dark:border-primary-800 shadow-xs flex-shrink-0">
                      Step 1 of 3
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <button
                        key={service.type}
                        onClick={() => handleSelectService(service)}
                        className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl border-2 border-slate-200/90 dark:border-slate-800 hover:border-primary-500 dark:hover:border-primary-500 text-left bg-slate-50/80 hover:bg-white dark:bg-slate-800/40 dark:hover:bg-slate-800/90 transition-all duration-200 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1 cursor-pointer"
                      >
                        {/* Interactive prompt badge */}
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/80 px-2.5 py-1 rounded-full border border-primary-200 dark:border-primary-800 group-hover:bg-primary-600 group-hover:text-white transition-colors flex items-center gap-1 shadow-2xs">
                          <MousePointerClick className="w-3 h-3" />
                          <span>{language === 'am' ? 'ይጫኑ' : 'Click to test'}</span>
                        </div>

                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${service.bgColor} flex items-center justify-center ${service.iconColor} text-xl group-hover:scale-110 transition-transform shadow-xs`}
                          >
                            <i className={service.icon}></i>
                          </div>
                          <div className="pr-16">
                            <h5 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                              {t(service.nameKey)}
                            </h5>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                              {t(service.descKey)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-3.5 border-t border-slate-200/80 dark:border-slate-700/80">
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>{service.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-base text-slate-900 dark:text-white">
                              {service.price.toLocaleString()} ETB
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-white bg-primary-600 group-hover:bg-primary-700 px-3 py-1.5 rounded-xl shadow-xs transition-colors">
                              <span>{language === 'am' ? 'ጀምር' : 'Simulate'}</span>
                              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </span>
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
                      {staffMembers.map((staff) => (
                        <button
                          key={staff.id}
                          onClick={() => handleSelectStaff(staff)}
                          className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-left ${
                            selectedStaff?.id === staff.id
                              ? 'border-primary-500 bg-primary-50/80 dark:bg-primary-950/50 shadow-sm'
                              : 'border-slate-200 dark:border-slate-800 hover:border-primary-500 bg-slate-50/60 dark:bg-slate-800/40'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {/* CSS initials avatar */}
                            <div
                              className={`w-[38px] h-[38px] rounded-full ${staff.avatarBg} ${staff.avatarText} flex items-center justify-center text-xs font-extrabold shadow-sm select-none flex-shrink-0`}
                              aria-hidden="true"
                            >
                              {staff.initials}
                            </div>
                            <div>
                              <h6 className="text-sm font-bold text-slate-900 dark:text-white">{staff.displayName}</h6>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400">{staff.title}</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-900">
                            {t('sb_avail')}
                          </span>
                        </button>
                      ))}
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
                      <span className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                        {selectedStaff && (
                          <span
                            className={`w-6 h-6 rounded-full ${selectedStaff.avatarBg} ${selectedStaff.avatarText} flex items-center justify-center text-[10px] font-extrabold select-none flex-shrink-0`}
                            aria-hidden="true"
                          >
                            {selectedStaff.initials}
                          </span>
                        )}
                        {selectedStaff?.displayName ?? '—'}
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
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {t('sb_payment_channel')}
                      </h5>
                      <span className="text-[11px] font-semibold text-primary-600 dark:text-primary-400">
                        {language === 'am' ? 'የሚመርጡትን ክፍያ ይጫኑ' : 'Select preferred gateway'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Payment method">
                      {/* Telebirr */}
                      <button
                        type="button"
                        role="radio"
                        aria-checked={selectedPaymentMethod === 'telebirr'}
                        onClick={() => setSelectedPaymentMethod('telebirr')}
                        className={`relative flex items-center gap-3 p-4 rounded-2xl transition-all duration-200 text-left cursor-pointer ${
                          selectedPaymentMethod === 'telebirr'
                            ? 'border-2 border-blue-500 bg-blue-50/90 dark:bg-blue-950/60 shadow-md ring-2 ring-blue-500/20'
                            : 'border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 opacity-70 hover:opacity-100 hover:border-blue-300 dark:hover:border-blue-900/60'
                        }`}
                      >
                        <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-blue-500 flex-shrink-0">
                          {selectedPaymentMethod === 'telebirr' && (
                            <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-bold text-slate-900 dark:text-white block">
                            Telebirr
                          </span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
                            Instant PIN Checkout
                          </span>
                        </div>
                        {selectedPaymentMethod === 'telebirr' && (
                          <span className="hidden sm:inline-block text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                            Active
                          </span>
                        )}
                      </button>

                      {/* Chapa (CBE Birr) */}
                      <button
                        type="button"
                        role="radio"
                        aria-checked={selectedPaymentMethod === 'chapa'}
                        onClick={() => setSelectedPaymentMethod('chapa')}
                        className={`relative flex items-center gap-3 p-4 rounded-2xl transition-all duration-200 text-left cursor-pointer ${
                          selectedPaymentMethod === 'chapa'
                            ? 'border-2 border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/60 shadow-md ring-2 ring-emerald-500/20'
                            : 'border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 opacity-70 hover:opacity-100 hover:border-emerald-300 dark:hover:border-emerald-900/60'
                        }`}
                      >
                        <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-emerald-500 flex-shrink-0">
                          {selectedPaymentMethod === 'chapa' && (
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-bold text-slate-900 dark:text-white block">
                            Chapa (CBE Birr)
                          </span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
                            Direct Bank & Card
                          </span>
                        </div>
                        {selectedPaymentMethod === 'chapa' && (
                          <span className="hidden sm:inline-block text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300">
                            Active
                          </span>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Submit Confirmation Button */}
                  <button
                    onClick={() => setSandboxStep(4)}
                    className="w-full bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 rounded-2xl text-sm transition-all duration-200 tracking-wider uppercase shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>
                      {language === 'am'
                        ? `በ${selectedPaymentMethod === 'telebirr' ? 'ቴሌብር' : 'ቻፓ'} ክፍያውን ይሞክሩ`
                        : `Simulate ${selectedPaymentMethod === 'telebirr' ? 'Telebirr' : 'Chapa'} Payment`}
                    </span>
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

                  {/* Simulated SMS Notification Bubble */}
                  <div className="max-w-md mx-auto p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 text-left space-y-2.5 shadow-sm">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-700/80 pb-2">
                      <span className="flex items-center gap-1.5 text-primary-600 dark:text-primary-400 font-bold">
                        <Smartphone className="w-3.5 h-3.5" />
                        <span>{language === 'am' ? 'የተላከ የኤስኤምኤስ መልእክት (Ethio Telecom)' : 'Simulated Client SMS (Ethio Telecom)'}</span>
                      </span>
                      <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-full font-bold">Delivered</span>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800 shadow-inner">
                      <p className="text-xs text-slate-800 dark:text-slate-200 font-mono leading-relaxed">
                        {language === 'am'
                          ? `ውድ ደንበኛ፣ የ${selectedService ? t(selectedService.nameKey) : 'አገልግሎት'} ቀጠሮዎ ከ${selectedStaff?.displayName || 'ባለሙያ'} ጋር ለ${selectedTime?.split(' ')[0] || '10:00 AM'} በተሳካ ሁኔታ ተይዟል። ክፍያ በ${selectedPaymentMethod === 'telebirr' ? 'ቴሌብር' : 'ቻፓ'} ተረጋግጧል። ኮድ: ETB-9842። እናመሰግናለን!`
                          : `Dear Customer, your reservation for ${selectedService ? t(selectedService.nameKey) : 'Service'} with ${selectedStaff?.displayName || 'Specialist'} is confirmed for ${selectedTime?.split(' ')[0] || '10:00 AM'}. Paid via ${selectedPaymentMethod === 'telebirr' ? 'Telebirr' : 'Chapa (CBE Birr)'}. Ref: ETB-9842. Thank you for booking!`}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={resetSandbox}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{t('sb_v4_restart')}</span>
                    </button>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
                    >
                      <span>{language === 'am' ? 'ይህን ሲስተም ለድርጅትዎ ያበጁ' : 'Get This System Built For You'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
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
