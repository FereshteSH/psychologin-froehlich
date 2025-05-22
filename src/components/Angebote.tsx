import { getContent } from "../lib/getContent";
import Image from "next/image";
import Quote from "./Quote";

export default function Angebote({ lang }: { lang: "de" | "tr" }) {
  const content = getContent(lang, "angebote");
  const q = getContent(lang, "quotes");

  return (
    <section className="bg-[var(--color-foreground)] pt-9">
      {/* Therapie Sections */}
      {[1, 2, 3].map((num) => (
        <div key={num}>
          <h3 className="text-xl font-semibold m-4 text-center md:text-[18px] lg:text-[25px] lg:!text-right lg:mr-60 lg:!mb-[-40px]">
            {content[`therapie${num}` as keyof typeof content]}
          </h3>

          <div className="flex flex-col justify-between lg:flex-row items-center lg:items-start text-left gap-6 max-w-5xl mx-auto px-4 py-10">
            <Image
              src={`/images/${num === 1 ? "einzelth.jpeg" : "paarth.jpg"}`}
              alt={`Therapie ${num}`}
              width={450}
              height={390}
              priority
              className="rounded-[52px] w-[295px] h-[360px] md:w-[360px] md:h-[480px] lg:w-[500px] lg:h-[580px]"
            />
            <div className="flex flex-col">
              <p className="pt-6 w-100 m-auto lg:text-left lg:m-5 lg:!text-[20px]">
                {content[`content${num}` as keyof typeof content]}
              </p>
              <div className="self-start md:self-end">
                <Quote
                  text={q[`quoteTherapie${num}` as keyof typeof q] || "default quote"}
                  author={q[`quoteTherapie${num}Author` as keyof typeof q] || "default author"}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
