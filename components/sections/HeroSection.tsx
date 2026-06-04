'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { fadeInLeft, fadeInRight } from '@/lib/animations';
import { ShieldCheck, Smartphone, Bell, Sparkles } from 'lucide-react';

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

export function HeroSection() {
  const { t } = useTranslation();
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
    <section className="pt-32 pb-24 overflow-hidden relative">
      {/* Background gradient graphics for SaaS premium feel */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-400/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            className="lg:col-span-6 space-y-8 text-center lg:text-left"
            {...fadeInLeft}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-950/50 border border-primary-100 dark:border-primary-900 px-4 py-2 rounded-full w-fit mx-auto lg:mx-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-primary-700 dark:text-primary-300">
                {t('hero_badge')}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              {t('hero_title')}
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('hero_desc')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#contact"
                className="w-full sm:w-auto text-center bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl shadow-primary-500/20 hover:shadow-primary-500/30 transition-all transform hover:-translate-y-1"
              >
                {t('hero_cta_consult')}
              </Link>
              <Link
                href="#calculator"
                className="w-full sm:w-auto text-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold px-8 py-4 rounded-2xl transition-all"
              >
                {t('hero_cta_demo')}
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {t('trust_1')}
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Smartphone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {t('trust_2')}
                </span>
              </div>
              <div className="flex items-center space-x-2.5 col-span-2 sm:col-span-1">
                <Bell className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {t('trust_3')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual: Interactive Live Booking Sandbox */}
          <motion.div
            className="lg:col-span-6"
            {...fadeInRight}
          >
            <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-6 overflow-hidden">
              {/* Mini Sandbox Header */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <span>{t('sandbox_header')}</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t('sandbox_sub')}
                  </p>
                </div>
                <span className="text-xs bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-300 font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3 animate-pulse" /> Demo Live
                </span>
              </div>

              {/* Step Indicator */}
              <div className="flex justify-between items-center mb-6 text-xs font-medium">
                <div
                  className={`flex items-center gap-1.5 transition-colors duration-300 ${
                    sandboxStep >= 1 ? 'text-primary-600 dark:text-primary-400' : 'text-slate-400 dark:text-slate-600'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${
                      sandboxStep >= 1
                        ? 'bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                    }`}
                  >
                    1
                  </span>
                  <span>{t('sb_step1')}</span>
                </div>
                <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1 mx-2"></div>
                <div
                  className={`flex items-center gap-1.5 transition-colors duration-300 ${
                    sandboxStep >= 2 ? 'text-primary-600 dark:text-primary-400' : 'text-slate-400 dark:text-slate-600'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${
                      sandboxStep >= 2
                        ? 'bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                    }`}
                  >
                    2
                  </span>
                  <span>{t('sb_step2')}</span>
                </div>
                <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1 mx-2"></div>
                <div
                  className={`flex items-center gap-1.5 transition-colors duration-300 ${
                    sandboxStep >= 3 ? 'text-primary-600 dark:text-primary-400' : 'text-slate-400 dark:text-slate-600'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${
                      sandboxStep >= 3
                        ? 'bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                    }`}
                  >
                    3
                  </span>
                  <span>{t('sb_step3')}</span>
                </div>
              </div>

              {/* Sandbox Views Container */}
              <div className="space-y-4">
                {/* View 1: Select Service */}
                {sandboxStep === 1 && (
                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {t('sb_v1_title')}
                    </p>
                    <div className="grid gap-3">
                      {services.map((service) => (
                        <button
                          key={service.type}
                          onClick={() => handleSelectService(service)}
                          className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary-500 dark:hover:border-primary-500 text-left bg-slate-50 dark:bg-slate-800/50 transition-all cursor-pointer group"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-lg ${service.bgColor} flex items-center justify-center ${service.iconColor} group-hover:scale-105 transition-transform`}
                            >
                              <i className={service.icon}></i>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">{t(service.nameKey)}</h4>
                              <p className="text-xs text-slate-500 dark:text-slate-400">
                                {t(service.descKey)}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-sm text-primary-600 dark:text-primary-400">
                              {service.price.toLocaleString()} ETB
                            </span>
                            <p className="text-[10px] text-slate-400">~{service.duration}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* View 2: Select Staff & Time */}
                {sandboxStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                        {t('sb_v2_staff')}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => handleSelectStaff('Yared')}
                          className={`flex items-center gap-3 p-2.5 rounded-xl border transition-all text-left ${
                            selectedStaff === 'Yared'
                              ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/30'
                              : 'border-slate-200 dark:border-slate-800 hover:border-primary-500 bg-slate-50 dark:bg-slate-800/50'
                          }`}
                        >
                          <Image
                            src="https://placehold.co/100x100/3b82f6/ffffff?text=Y"
                            width={32}
                            height={32}
                            className="rounded-full"
                            alt="Yared"
                          />
                          <div>
                            <h5 className="text-xs font-bold">Yared T.</h5>
                            <p className="text-[9px] text-emerald-500">{t('sb_avail')}</p>
                          </div>
                        </button>

                        <button
                          onClick={() => handleSelectStaff('Elena')}
                          className={`flex items-center gap-3 p-2.5 rounded-xl border transition-all text-left ${
                            selectedStaff === 'Elena'
                              ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/30'
                              : 'border-slate-200 dark:border-slate-800 hover:border-primary-500 bg-slate-50 dark:bg-slate-800/50'
                          }`}
                        >
                          <Image
                            src="https://placehold.co/100x100/10b981/ffffff?text=E"
                            width={32}
                            height={32}
                            className="rounded-full"
                            alt="Elena"
                          />
                          <div>
                            <h5 className="text-xs font-bold">Elena K.</h5>
                            <p className="text-[9px] text-emerald-500">{t('sb_avail')}</p>
                          </div>
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                        {t('sb_v2_time')}
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {['09:30 AM (Morning)', '02:00 PM (Afternoon)', '05:30 PM (Evening)'].map(
                          (time) => {
                            const timeLabel = time.split(' ')[0] + ' ' + time.split(' ')[1];
                            return (
                              <button
                                key={time}
                                onClick={() => handleSelectTime(time)}
                                className={`py-2 px-1 text-center border rounded-lg text-xs transition-all font-medium ${
                                  selectedTime === time
                                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-950'
                                    : 'border-slate-200 dark:border-slate-800 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950'
                                }`}
                              >
                                {timeLabel}
                              </button>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* View 3: Complete & Payment Selection */}
                {sandboxStep === 3 && selectedService && (
                  <div className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-500">{t('sb_v3_selected')}</span>
                        <span className="font-bold">{t(selectedService.nameKey)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">{t('sb_v3_staff')}</span>
                        <span className="font-semibold">{selectedStaff} T.</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">{t('sb_v3_time')}</span>
                        <span className="font-semibold">{selectedTime?.split(' ')[0]} {selectedTime?.split(' ')[1]}</span>
                      </div>
                      <div className="h-px bg-slate-200 dark:bg-slate-800 my-1"></div>
                      <div className="flex justify-between text-sm">
                        <span className="font-bold text-slate-700 dark:text-slate-300">
                          {t('sb_v3_total')}
                        </span>
                        <span className="font-extrabold text-primary-600 dark:text-primary-400">
                          {selectedService.price.toLocaleString()} ETB
                        </span>
                      </div>
                    </div>

                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {t('sb_payment_channel')}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 p-3.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-gradient-to-tr from-[#003B95]/10 to-[#003B95]/5 cursor-pointer hover:border-[#003B95] transition-all">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
                          Telebirr
                        </span>
                      </div>
                      <div className="flex items-center gap-2 p-3.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-gradient-to-tr from-[#10b981]/10 to-[#10b981]/5 cursor-pointer hover:border-[#10b981] transition-all">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
                          Chapa (CBE Birr)
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSandboxStep(4)}
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3.5 rounded-xl text-xs transition-all tracking-wider uppercase shadow-md"
                    >
                      {t('sb_v3_book')}
                    </button>
                  </div>
                )}

                {/* Success Screen */}
                {sandboxStep === 4 && (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 rounded-full flex items-center justify-center mx-auto text-emerald-500 text-3xl animate-bounce">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-lg text-emerald-500">
                        {t('sb_v4_success')}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                        {t('sb_v4_desc')}
                      </p>
                    </div>
                    <button
                      onClick={resetSandbox}
                      className="text-xs text-primary-600 dark:text-primary-400 font-bold hover:underline"
                    >
                      {t('sb_v4_restart')}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
