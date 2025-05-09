import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function NavBar({ currentLang }: { currentLang: 'de' | 'tr' }) {
  
  const navData = require(`../data/${currentLang}.json`)
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <div className="flex gap-4">
        <Link href={`/${currentLang}`}>{navData.nav.home}</Link>
        <Link href={`/${currentLang}/about`}>{navData.nav.about}</Link>
      </div>
      <LanguageSwitcher />
    </nav>
  );
}