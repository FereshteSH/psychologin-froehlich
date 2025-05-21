import Startseite from "@/src/components/Startseite";
import { getContent } from "@/src/lib/getContent";

type Params = { lang: "de" | "tr" };

export default async function Home( { params }: { params: Params }) {
  const content = getContent(params.lang, "home");

  return (
    <main className="">
    <div className="">
      <div className="w-80 m-auto text-center p-4 ">
      <h1>{content.name}</h1>
      <h1>{content.title}</h1>
      </div>
      <Startseite lang={params.lang} />
    </div>
    
   
    </main>
    
  );
}
