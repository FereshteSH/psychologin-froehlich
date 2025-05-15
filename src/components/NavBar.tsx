'use client';

import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function NavBar({ currentLang }: { currentLang: 'de' | 'tr' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navData = require(`../data/${currentLang}.json`);

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);


  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full h-20 z-[100] bg-[var(--color-bg-navi)] shadow-md flex items-center justify-between px-4 md:px-10 md:hidden">
        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8 text-[var(--color-heading)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Logo */}
        <Link href={`/${currentLang}`}>
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={60}
            height={50}
            className=" rounded-full md:block md:hidden"
            priority
          />
        </Link>

        {/* Language Switch */}
        <LanguageSwitcher />
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 w-full h-[calc(100vh-5rem)] z-[90] bg-[var(--color-bg-navi-mobile)] flex flex-col items-center justify-center gap-8 text-2xl md:hidden"
          >
            <div className="w-full h-full bg-[var(--color-bg-navi)] absolute top-0 left-0 z-[-1]" />
            <Link href={`/${currentLang}`} onClick={() => setMenuOpen(false)}>{navData.nav.home}</Link>
            <Link href={`/${currentLang}/about`} onClick={() => setMenuOpen(false)}>{navData.nav.about}</Link>
            <Link href={`/${currentLang}/angebote`} onClick={() => setMenuOpen(false)}>{navData.nav.angebote}</Link>
            <Link href={`/${currentLang}/cost`} onClick={() => setMenuOpen(false)}>{navData.nav.cost}</Link>
            <Link href={`/${currentLang}/contact`} onClick={() => setMenuOpen(false)}>{navData.nav.contact}</Link>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Desktop Layout */}
      <div className="hidden md:flex fixed top-0 left-0 w-full h-30 bg-[var(--color-bg-navi)] shadow-md z-[100] items-center justify-between px-10">
        {/* Left Links */}
        <div className="flex gap-6">
          <Link href={`/${currentLang}`} className='text-2xl'>{navData.nav.home}</Link>
          <Link href={`/${currentLang}/about`} className='text-2xl'>{navData.nav.about}</Link>
          <Link href={`/${currentLang}/angebote`} className='text-2xl'>{navData.nav.angebote}</Link>
        </div>

        {/* Center Logo */}
        <div className=" absolute left-1/2 transform -translate-x-1/2">
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
