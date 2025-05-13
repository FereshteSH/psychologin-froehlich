import { getContent } from "../../lib/getContent";

type Params = { lang: "de" | "tr" };

export default async function Home({ params }: { params: Params }) {
  const content = getContent(params.lang, "home");

  return (
    <main>
    </main>
  );
}
