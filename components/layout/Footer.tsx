'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Calendar, Facebook, Linkedin, Send } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Branding Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-600 to-emerald-500 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                ETBooking Solutions
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed max-w-xs">
              {t('foot_desc')}
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-white font-bold">{t('foot_h1')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Online Scheduling
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Client Portal
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Staff Management
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Payment Gateway
                </a>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div className="space-y-3">
            <h4 className="text-white font-bold">{t('foot_h2')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Hair & Beauty
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Car Washes
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Medical Clinics
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Gym & Fitness
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-white font-bold">{t('foot_h3')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Technical FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Sales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
          <span>
            © {currentYear} ETBooking Solutions. {t('foot_copy')}
          </span>
          <span>Designed & Programmed Dynamically. Addis Ababa, Ethiopia.</span>
        </div>
      </div>
    </footer>
  );
}
