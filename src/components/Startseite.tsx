import {getContent} from "@/src/lib/getContent";
import Image from "next/image";
import Button from "@/src/components/Button";
import Quote from "@/src/components/Quote";

export default function Startseite({lang}: {lang: "de" | "tr"}) {
  const h = getContent(lang, "home");
  const q = getContent(lang, "quotes");
  return (
    <div className="bg-[var(--color-foreground)] text-center ">
      <div className="pt-8 ">
      <Image 
      src="/images/hero.jpeg"
      alt="Hero Image"
      width={295}
      height={360}
      priority
      className="rounded-[52] m-auto "
      />
      </div>
      <p className="pt-6 w-100 m-auto">{h.description}</p>
      <div className="flex items-center justify-around ">
        <div>
        <Button text={h.buttonText}/>
        </div>
        <div>
        <Quote text={q?.quoteHome || "default quote"} author={q?.quoteHomeAuthor || "anonymous"} />
        </div>
      </div>
      <div>
        <Image 
        src={h.wordcloudPhoto || "/images/default-wordcloud.jpg"}
        alt="Wordcloud"
        width={400}
        height={390}
        priority
        
        />
      </div>
    </div>
  );
}