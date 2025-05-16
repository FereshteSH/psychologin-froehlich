import { getContent } from "../../lib/getContent";
import Startseite from "@/src/components/Startseite";

type Params = { lang: "de" | "tr" };

export default async function Home( { params }: { params: Params }) {
  const content = getContent(params.lang, "home");

  return (
    <main className="">
    <div>
      <h1>{content.name}</h1>
      <h1>{content.title}</h1>
      <Startseite lang={params.lang} />
    </div>
    
   
    </main>
    
  );
}
