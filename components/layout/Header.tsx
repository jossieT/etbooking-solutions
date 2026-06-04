'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useTranslation } from '@/hooks/useTranslation';
import { Menu, X, Sun, Moon } from 'lucide-react';

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

    window.addEventListener('scroll', handleScroll);
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
  ];

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        scrolled
          ? 'glass shadow-lg border-slate-200 dark:border-slate-800'
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-emerald-500 flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform">
              <span className="text-white text-xl">📅</span>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-primary-600 to-emerald-500 bg-clip-text text-transparent">
                ETBooking
              </span>
              <span className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">
                Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 font-medium text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-primary-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controls & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all"
            >
              <span>{language === 'en' ? '🇺🇸' : '🇪🇹'}</span>
              <span>{language === 'en' ? 'English' : 'አማርኛ'}</span>
            </button>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-slate-600" />
              ) : (
                <Sun className="w-5 h-5 text-amber-400" />
              )}
            </button>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary-500/10 transition-all transform hover:-translate-y-0.5"
            >
              {t('nav_cta')}
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-600" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold"
            >
              {language === 'en' ? '🇺🇸 EN' : '🇪🇹 አማ'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300"
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

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-6 space-y-4 animate-slide-down">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-medium py-2 text-slate-700 dark:text-slate-300 hover:text-primary-600"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-xl"
          >
            {t('nav_cta')}
          </Link>
        </div>
      )}
    </header>
  );
}
