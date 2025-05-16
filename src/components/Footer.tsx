import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export default function Footer({ currentLang }: { currentLang: 'de' | 'tr' }) {
  const footerData = require(`../data/${currentLang}.json`);

  return (
    <div className="flex justify-between text-sm bg-[var(--color-button-hover)]  p-4 md:p-3 md:text-lg">
      <Image
        src="/images/logo.jpg"
        alt="Logo"
        width={60}
        height={50}
        className="rounded-full"
        priority
      />
        <div className="flex justify-center items-center ">
      <Link href={`/${currentLang}`} className="font-bold ">
        {footerData.footer.impressum}
      </Link>

      <Link href={`/${currentLang}/about`} className="font-bold ml-[-15] ">
        {footerData.footer.datenschutz}
      </Link>
      </div>
    </div>
  );
}
