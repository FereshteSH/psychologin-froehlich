import {getContent } from "../lib/getContent";
import Image from "next/image";
import Quote from "./Quote";

export default function Angebote({lang}: {lang: "de"| "tr"}){
    const content = getContent(lang , "angebote");
    const q = getContent(lang , "quotes")
    return (
        <section className="bg-[var(--color-foreground)] text-center pt-3 ">
            <div>
            <h3 className="m-8 ">
                {content.therapie1}
            </h3>
            <Image 
                src="/images/einzelth.jpeg"
                alt="Einzeltherapie"
                width={295}
                height={360}
                priority
                className="rounded-[52] m-auto "
            />
            <p className="pt-6 w-100 m-auto">{content.content1}</p>
            <Quote text={q.quoteTherapie1 || "default quote"} author={q.quoteTherapie1Author || "default author"} />
        </div>
        <div>
             <h3 className="m-8">
                {content.therapie2}
            </h3>
            <Image 
                src="/images/paarth.jpg"
                alt="Paartherapie"
                width={295}
                height={360}
                priority
                className="rounded-[52] m-auto "
            />
            <p className="pt-6 w-100 m-auto">{content.content2}</p>
            <Quote text={q.quoteTherapie2 || "default quote"} author={q.quoteTherapie2Author || "default author"} />

        </div>

         <div>
             <h3 className="m-8">
                {content.therapie3}
            </h3>
            <Image 
                src="/images/paarth.jpg"
                alt="Paartherapie"
                width={295}
                height={360}
                priority
                className="rounded-[52] m-auto "
            />
            <p className="pt-6 w-100 m-auto">{content.content3}</p>
            <Quote text={q.quoteTherapie3 || "default quote"} author={q.quoteTherapie3Author || "default author"} />

        </div>
        </section>
    )
}
