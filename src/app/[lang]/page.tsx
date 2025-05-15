import { getContent } from "../../lib/getContent";
import Startseite from "@/src/components/Startseite";
type Params = { lang: "de" | "tr" };

export default async function Home() {
  // const content = getContent(params.lang, "home");

  return (
    <main className="">
      
    <Startseite/>
   
    </main>
    
  );
}
