'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslation } from '@/hooks/useTranslation';
import type { ContactFormData } from '@/types';
import { Phone, Mail, MapPin, Loader2, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  requirementsText?: string;
}

const ethiopianPhoneRegex = /^(\+251|0)?\s?[79]\d{8}$/;

const contactSchema = z.object({
  fullName: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  businessName: z.string().min(2, { message: 'Business name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().refine((val: string) => ethiopianPhoneRegex.test(val), {
    message: 'Invalid phone number. Must be a valid Ethiopian number (e.g. +251 977 784 658 or 0977784658)',
  }),
  requirements: z.string().min(5, { message: 'Please provide more details' }),
});

export function ContactSection({ requirementsText }: ContactSectionProps) {
  const { t, language } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);



  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      businessName: '',
      email: '',
      phone: '',
      requirements: '',
    },
  });

  // Watch for proposal requirements text changes and update form
  useEffect(() => {
    if (requirementsText) {
      setValue('requirements', requirementsText);
    }
  }, [requirementsText, setValue]);

  const onSubmit = async (_data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();

    // Hide success alert after 8 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 8000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Details Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
                {t('cont_badge')}
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight">
                {t('cont_title')}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {t('cont_desc')}
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-4 text-sm">
              <a
                href="tel:+251977784658"
                className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 shadow-sm hover:border-primary-500 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400 flex items-center justify-center text-lg flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-slate-400 text-[10px] uppercase font-bold">
                    {t('cont_p')}
                  </span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">+251 977 784 658</span>
                </div>
              </a>

              <a
                href="https://wa.me/251977784658"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 shadow-sm hover:border-emerald-500 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fa-brands fa-whatsapp text-xl"></i>
                </div>
                <div>
                  <span className="block text-slate-400 text-[10px] uppercase font-bold">
                    WhatsApp Business
                  </span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">+251 977 784 658</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center text-lg flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-slate-400 text-[10px] uppercase font-bold">
                    Business Email
                  </span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">info@etbookingsolutions.com</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center text-lg flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-slate-400 text-[10px] uppercase font-bold">
                    {t('cont_loc')}
                  </span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">Bole Road, Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Box */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    {t('form_name')}
                  </label>
                  <input
                    type="text"
                    {...register('fullName')}
                    className={`w-full bg-slate-50 dark:bg-slate-800 border p-3.5 rounded-xl text-xs outline-none transition-all ${
                      errors.fullName
                        ? 'border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-950'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-[10px] mt-1 font-semibold">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    {t('form_biz')}
                  </label>
                  <input
                    type="text"
                    {...register('businessName')}
                    className={`w-full bg-slate-50 dark:bg-slate-800 border p-3.5 rounded-xl text-xs outline-none transition-all ${
                      errors.businessName
                        ? 'border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-950'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500'
                    }`}
                  />
                  {errors.businessName && (
                    <p className="text-red-500 text-[10px] mt-1 font-semibold">
                      {errors.businessName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    {t('form_email')}
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className={`w-full bg-slate-50 dark:bg-slate-800 border p-3.5 rounded-xl text-xs outline-none transition-all ${
                      errors.email
                        ? 'border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-950'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[10px] mt-1 font-semibold">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    {t('form_phone')}
                  </label>
                  <input
                    type="tel"
                    placeholder="+251 977 784 658"
                    {...register('phone')}
                    className={`w-full bg-slate-50 dark:bg-slate-800 border p-3.5 rounded-xl text-xs outline-none transition-all ${
                      errors.phone
                        ? 'border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-950'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-[10px] mt-1 font-semibold">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  {t('form_msg')}
                </label>
                <textarea
                  rows={4}
                  placeholder={
                    language === 'am'
                      ? 'የድርጅትዎን አገልግሎቶች እና የቅርንጫፍ ብዛት ያብራሩልን...'
                      : 'Tell us about your services and branches...'
                  }
                  {...register('requirements')}
                  className={`w-full bg-slate-50 dark:bg-slate-800 border p-3.5 rounded-xl text-xs outline-none transition-all ${
                    errors.requirements
                      ? 'border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-950'
                      : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500'
                  }`}
                />
                {errors.requirements && (
                  <p className="text-red-500 text-[10px] mt-1 font-semibold">
                    {errors.requirements.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-550 text-white font-bold py-4 rounded-xl text-xs tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>{t('form_btn')}</span>
                )}
              </button>
            </form>

            {/* Success Feedback Alert Box */}
            {submitSuccess && (
              <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-300 dark:border-emerald-800 rounded-xl text-emerald-600 dark:text-emerald-400 text-xs text-center font-bold flex items-center justify-center gap-2 animate-slide-up">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>
                  {language === 'am'
                    ? 'መልዕክትዎ በተሳካ ሁኔታ ደርሶናል! የቦታ ማስያዝ ባለሙያዎቻችን በ 2 ሰዓት ውስጥ ያገኙዎታል።'
                    : 'Message received successfully! Our booking experts will contact you within 2 hours.'}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
