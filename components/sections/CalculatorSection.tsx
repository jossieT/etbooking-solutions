'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { calculatePrice, formatPriceETB, formatPriceUSD, PRICING_CONFIG } from '@/lib/pricing';

interface CalculatorSectionProps {
  onProposalRequest?: (requirementsText: string) => void;
}

export function CalculatorSection({ onProposalRequest }: CalculatorSectionProps) {
  const { t } = useTranslation();

  // State inputs
  const [businessType, setBusinessType] = useState<string>('beauty');
  const [staffTier, setStaffTier] = useState<1 | 2 | 3>(1);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  // Outputs
  const [prices, setPrices] = useState({
    basePrice: 40000,
    staffAddition: 0,
    featuresTotal: 0,
    totalETB: 40000,
    totalUSD: 333,
  });

  // Calculate pricing when inputs change
  useEffect(() => {
    try {
      const result = calculatePrice({
        businessType,
        staffTier,
        selectedFeatures,
      });
      setPrices(result);
    } catch (e) {
      console.error(e);
    }
  }, [businessType, staffTier, selectedFeatures]);

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId) ? prev.filter((id) => id !== featureId) : [...prev, featureId]
    );
  };

  const handleRequestProposal = () => {
    const requirements: string[] = [];
    if (selectedFeatures.includes('portal')) requirements.push('Customer Portal');
    if (selectedFeatures.includes('sms')) requirements.push('SMS Notifications');
    if (selectedFeatures.includes('payments')) requirements.push('Payment Integration');
    if (selectedFeatures.includes('mobile')) requirements.push('Mobile App');
    if (selectedFeatures.includes('analytics')) requirements.push('Analytics Dashboard');

    const bizName = PRICING_CONFIG.businesses[businessType as keyof typeof PRICING_CONFIG.businesses]?.name || 'custom';
    
    const detailsText = `Hello Booking Solutions, we would like a custom proposal for our ${bizName} business. We selected capabilities including: ${
      requirements.join(', ') || 'Base Engine'
    }. Please contact us back with technical layouts.`;

    if (onProposalRequest) {
      onProposalRequest(detailsText);
    }

    // Scroll to contact form smoothly
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Label formatting helper for staff size slider
  const getStaffLabel = (tier: 1 | 2 | 3) => {
    const isAm = t('calc_staff_label').includes('ሰራተኞች') || t('nav_faq').includes('ተደጋጋሚ');
    if (tier === 1) return isAm ? '1–5 ሰራተኞች' : '1–5 Staff';
    if (tier === 2) return isAm ? '5–20 ሰራተኞች' : '5–20 Staff';
    return isAm ? '20+ ሰራተኞች' : '20+ Staff';
  };

  return (
    <section
      id="calculator"
      className="py-24 bg-gradient-to-tr from-slate-100/60 to-slate-200/40 dark:from-slate-900/40 dark:to-slate-950/20"
    >
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
            {t('calc_badge')}
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('calc_title')}
          </motion.h2>
          <motion.p
            className="text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('calc_desc')}
          </motion.p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-2xl">
          {/* Controls Side (Left) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Business Selection */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                {t('calc_biz_label')}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.entries(PRICING_CONFIG.businesses).map(([id, biz]) => {
                  const isActive = businessType === id;
                  let icon = 'fa-solid fa-scissors';
                  if (id === 'auto') icon = 'fa-solid fa-car';
                  if (id === 'clinic') icon = 'fa-solid fa-stethoscope';
                  if (id === 'gym') icon = 'fa-solid fa-dumbbell';
                  if (id === 'cleaning') icon = 'fa-solid fa-house-chimney';
                  if (id === 'other') icon = 'fa-solid fa-gears';

                  return (
                    <button
                      key={id}
                      onClick={() => setBusinessType(id)}
                      className={`p-3 rounded-2xl text-left transition-all text-xs font-semibold cursor-pointer border ${
                        isActive
                          ? 'border-primary-500 bg-primary-50/50 dark:bg-primary-950/30'
                          : 'border-slate-200 dark:border-slate-800 hover:border-primary-500'
                      }`}
                    >
                      <i className={`${icon} mb-1 block text-primary-500 text-sm`}></i>
                      <span>{biz.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Staff Selection Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {t('calc_staff_label')}
                </label>
                <span className="text-sm font-extrabold bg-primary-100 dark:bg-primary-950 text-primary-600 px-3 py-1 rounded-full">
                  {getStaffLabel(staffTier)}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="3"
                value={staffTier}
                step="1"
                onChange={(e) => setStaffTier(Number(e.target.value) as 1 | 2 | 3)}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-semibold uppercase">
                <span>1-5 STAFF (Included)</span>
                <span>5-20 STAFF (+15k ETB)</span>
                <span>20+ STAFF (+35k ETB)</span>
              </div>
            </div>

            {/* Features Selection */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                {t('calc_feat_label')}
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {/* Standard booking feature (included) */}
                <label className="flex items-start gap-3 p-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-800/10 opacity-70">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="mt-1 w-4.5 h-4.5 text-primary-600 rounded cursor-not-allowed"
                  />
                  <div>
                    <span className="text-xs font-bold block">Online Booking Scheduling</span>
                    <span className="text-[10px] text-slate-400">Included (Base Engine)</span>
                  </div>
                </label>

                {/* Optional features */}
                {Object.entries(PRICING_CONFIG.features).map(([id, feature]) => {
                  const isChecked = selectedFeatures.includes(id);
                  const translationKey = `c_feat_${id === 'analytics' ? 'analytic' : id === 'mobile' ? 'mob' : id}`;

                  return (
                    <label
                      key={id}
                      className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors ${
                        isChecked ? 'border-primary-500 bg-primary-50/10' : 'border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleFeatureToggle(id)}
                        className="mt-1 w-4.5 h-4.5 text-primary-600 rounded cursor-pointer"
                      />
                      <div>
                        <span className="text-xs font-bold block">{t(translationKey)}</span>
                        <span className="text-[10px] text-emerald-500 font-semibold">
                          +{feature.cost.toLocaleString()} ETB
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pricing Screen Side (Right) */}
          <div className="lg:col-span-5 bg-gradient-to-tr from-primary-900 to-primary-950 rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-primary-300 font-extrabold">
                  {t('calc_bill_est')}
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-full font-bold">
                  Custom Development
                </span>
              </div>

              {/* Pricing Display */}
              <div className="space-y-1">
                <span className="text-[10px] uppercase text-primary-300 block font-bold">
                  {t('calc_p_etb')}
                </span>
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                  {formatPriceETB(prices.totalETB)}
                </h2>
                <div className="h-px bg-primary-800/60 my-4"></div>
                <span className="text-[10px] uppercase text-primary-300 block font-bold">
                  {t('calc_p_usd')}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-300">
                  {formatPriceUSD(prices.totalUSD)}
                </h3>
              </div>

              {/* Inclusions List */}
              <ul className="space-y-2 text-xs text-primary-200/90 pt-4">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-emerald-400 flex-shrink-0"></i>
                  <span>{t('calc_inc_1')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-emerald-400 flex-shrink-0"></i>
                  <span>{t('calc_inc_2')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-emerald-400 flex-shrink-0"></i>
                  <span>{t('calc_inc_3')}</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 space-y-4">
              <button
                onClick={handleRequestProposal}
                className="w-full block text-center bg-white hover:bg-slate-100 text-primary-950 font-bold py-4 rounded-2xl transition-all shadow-md transform hover:-translate-y-0.5"
              >
                {t('calc_cta')}
              </button>
              <p className="text-[10px] text-center text-primary-300">{t('calc_disclaimer')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
