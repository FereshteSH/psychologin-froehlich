import Footer from "@/src/components/Footer";
import { getContent } from "../../lib/getContent";
import Startseite from "@/src/components/Startseite";


type Params = { lang: "de" | "tr" };

export default async function Home( { params }: { params: Params }) {
  const content = getContent(params.lang, "home");

  return (
    <main className="pt-25 md:pt-35">
    <div>
      <h1>{content.name}</h1>
      <h1>{content.title}</h1>
      <Startseite/>
      <Footer currentLang={params.lang} />
    </div>
    
   
    </main>
    
  );
}
