import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';


export default function NavBar({ currentLang }: { currentLang: 'de' | 'tr' }) {
  
  const navData = require(`../data/${currentLang}.json`)
  return (
    <nav className="flex justify-between items-center p-4 bg-[rgba(250,243,224,0.5)] shadow-md ">
      <div className="flex gap-4">
        <Link href={`/${currentLang}`}>{navData.nav.home}</Link>
        <Link href={`/${currentLang}/about`}>{navData.nav.about}</Link>
        <Link href={`/${currentLang}/Kontakt`}>{navData.nav.kontakt}</Link>
      </div>
      <LanguageSwitcher />
  
    </nav>
  );
}