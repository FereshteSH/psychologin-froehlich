'use client';

import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { useState } from 'react';

export default function NavBar({ currentLang }: { currentLang: 'de' | 'tr' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navData = require(`../data/${currentLang}.json`);

  return (
    <nav className="w-full fixed top-0 left-0 navi shadow-md relative  h-20 md:h-30 ">
      {/* Desktop layout */}
      <div className="hidden md:flex items-center justify-between ">
        {/* Left links */}
        <div className="flex gap-6 mt-8 ml-15">
          <Link href={`/${currentLang}`} className='text-2xl'>{navData.nav.home}</Link>
          <Link href={`/${currentLang}/about`} className='text-2xl'>{navData.nav.about}</Link>
          <Link href={`/${currentLang}/angebote`} className='text-2xl'>{navData.nav.angebote}</Link>
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-5">
          <Link href={`/${currentLang}`}>
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={98}
              height={90}
              className="rounded-full"
              priority
            />
          </Link>
        </div>

        {/* Right links + Language button */}
        <div className="flex items-center gap-6 mt-8 mr-15">
          <Link href={`/${currentLang}/cost`} className='text-2xl'>{navData.nav.cost}</Link>
          <Link href={`/${currentLang}/contact`} className='text-2xl'>{navData.nav.contact}</Link>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile layout with hamburger */}
      <div className="md:hidden flex justify-between items-center">
        <button
          className=""
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
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
        <LanguageSwitcher />
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 items-center bg-[var(--color-bg-navi)] text-green-700 py-2 z-10">
          <Link href={`/${currentLang}`} onClick={() => setMenuOpen(false)}>{navData.nav.home}</Link>
          <Link href={`/${currentLang}/about`} onClick={() => setMenuOpen(false)}>{navData.nav.about}</Link>
          <Link href={`/${currentLang}/angebote`} onClick={() => setMenuOpen(false)}>{navData.nav.angebote}</Link>
          <Link href={`/${currentLang}/cost`} onClick={() => setMenuOpen(false)}>{navData.nav.cost}</Link>
          <Link href={`/${currentLang}/contact`} onClick={() => setMenuOpen(false)}>{navData.nav.contact}</Link>
        </div>
      )}
    </nav>
  );
}
