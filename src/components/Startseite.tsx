import {getContent} from "@/src/lib/getContent";
import Image from "next/image";

export default function Startseite({lang}: {lang: "de" | "tr"}) {
  const h = getContent(lang, "home")
  return (
    <div className="bg-[var(--color-foreground)]">
      <Image 
      src="/images/hero.jpeg"
      alt="Hero Image"
      width={295}
      height={360}
      priority
      
      
      />
      <p>{h.description}</p>
    </div>
  );
}