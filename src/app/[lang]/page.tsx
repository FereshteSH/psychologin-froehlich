import Startseite from "@/src/components/Startseite";
import { getContent } from "@/src/lib/getContent";
import Angebote from "@/src/components/Angebote";

type Params = { lang: "de" | "tr" };

export default async function Home( { params }: { params: Params }) {
  const content = getContent(params.lang, "home");
  const angebottitle = getContent(params.lang, "angebote");
  return (
    <main className="">
    <section className="">
      <div className="w-80 m-auto text-center p-4 ">
      <h1>{content.name}</h1>
      <h1>{content.title}</h1>
      </div>
      <Startseite lang={params.lang} />
    </section>
    <section>
    <h2 className="m-10 text-center text-[30px] ">{angebottitle.title}</h2>
    
    <Angebote lang={params.lang} />
    </section>
  </main>

  );
}
