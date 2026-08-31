'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useTranslation } from '@/hooks/useTranslation';
import { Menu, X, Sun, Moon, CalendarDays } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, t, setLanguage } = useTranslation();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'am' : 'en');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { label: t('nav_industries'), href: '#industries' },
    { label: t('nav_solutions'), href: '#solutions' },
    { label: t('nav_calculator'), href: '#calculator' },
    { label: t('nav_capabilities'), href: '#capabilities' },
    { label: t('nav_portfolio'), href: '#portfolio' },
    { label: t('nav_faq'), href: '#faq' },
    { label: language === 'am' ? 'ያግኙን' : 'Contact', href: '#contact' },
  ];

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo (Stacked: Booking on top, Solutions under) */}
          <Link
            href="/"
            className="flex items-center space-x-3 group cursor-pointer select-none focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 via-primary-500 to-emerald-400 flex items-center justify-center shadow-md shadow-primary-500/20 group-hover:scale-105 group-hover:shadow-primary-500/30 transition-all duration-200 flex-shrink-0">
              <CalendarDays className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors duration-200 leading-none">
                Booking
              </span>
              <span className="text-xs sm:text-sm font-extrabold tracking-tight bg-gradient-to-r from-primary-600 to-emerald-500 bg-clip-text text-transparent mt-0.5 leading-none">
                Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-sm font-medium text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/60 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions (Language & Theme) */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 bg-slate-100/90 hover:bg-slate-200/90 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-800 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300 transition-all"
              aria-label="Switch Language"
            >
              <span>{language === 'en' ? '🇺🇸' : '🇪🇹'}</span>
              <span>{language === 'en' ? 'English' : 'አማርኛ'}</span>
            </button>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full bg-slate-100/90 hover:bg-slate-200/90 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-700" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300"
              aria-label="Switch Language"
            >
              {language === 'en' ? '🇺🇸 EN' : '🇪🇹 አማ'}
            </button>
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon className="w-3.5 h-3.5 text-slate-700" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-amber-400" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[65px] bg-slate-950/40 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl px-6 py-6 space-y-4 z-50 lg:hidden"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-medium py-2.5 px-3 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
