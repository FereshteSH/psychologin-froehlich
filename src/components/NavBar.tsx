'use client';

import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx'; // Make sure you have this installed: npm i clsx

export default function NavBar({ currentLang }: { currentLang: 'de' | 'tr' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navData = require(`../data/${currentLang}.json`);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const navClass = clsx(
    'fixed top-0 left-0 w-full h-20 shadow-md flex items-center justify-between px-4 md:px-10 transition-colors duration-300 z-[100]',
    {
      'bg-[var(--color-bg-navi)]': !isScrolled,
      'bg-[var(--color-bg-navi-scrolled)]': isScrolled,
    }
  );

  return (
    <>
      {/* Top Navbar (Mobile) */}
      {!menuOpen && (
        <nav className={`${navClass} md:hidden`}>
          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8 text-[var(--color-heading)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <Link href={`/${currentLang}`}>
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={60}
              height={50}
              className="rounded-full"
              priority
            />
          </Link>

          {/* Language Switch */}
          <LanguageSwitcher />
        </nav>
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen z-[90] bg-[var(--color-bg-navi-mobile)] flex flex-col items-center justify-center gap-8 text-2xl md:hidden"
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-8 h-8 text-[var(--color-heading)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <Link href={`/${currentLang}`} onClick={() => setMenuOpen(false)}>{navData.nav.home}</Link>
            <Link href={`/${currentLang}/about`} onClick={() => setMenuOpen(false)}>{navData.nav.about}</Link>
            <Link href={`/${currentLang}/angebote`} onClick={() => setMenuOpen(false)}>{navData.nav.angebote}</Link>
            <Link href={`/${currentLang}/cost`} onClick={() => setMenuOpen(false)}>{navData.nav.cost}</Link>
            <Link href={`/${currentLang}/contact`} onClick={() => setMenuOpen(false)}>{navData.nav.contact}</Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navbar */}
      <div className={clsx(
        'hidden md:flex fixed top-0 left-0 w-full h-30 shadow-md z-[100] items-center justify-between px-10 transition-colors duration-300',
        {
          'bg-[var(--color-bg-navi)]': !isScrolled,
          'bg-[var(--color-bg-navi-scrolled)]': isScrolled,
        }
      )}>
        {/* Left Links */}
        <div className="flex gap-6">
          <Link href={`/${currentLang}`} className='text-2xl'>{navData.nav.home}</Link>
          <Link href={`/${currentLang}/about`} className='text-2xl'>{navData.nav.about}</Link>
          <Link href={`/${currentLang}/angebote`} className='text-2xl'>{navData.nav.angebote}</Link>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href={`/${currentLang}`}>
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={90}
              height={80}
              className="rounded-full"
              priority
            />
          </Link>
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-6">
          <Link href={`/${currentLang}/cost`} className='text-2xl'>{navData.nav.cost}</Link>
          <Link href={`/${currentLang}/contact`} className='text-2xl'>{navData.nav.contact}</Link>
          <LanguageSwitcher />
        </div>
      </div>
    </>
  );
}
