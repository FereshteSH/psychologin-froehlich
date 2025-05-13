import { getContent } from "../../lib/getContent";

type Params = { lang: "de" | "tr" };

export default async function Home({ params }: { params: Params }) {
  const content = getContent(params.lang, "home");

  return (
    <main>
      <h1 className="">{content.title}</h1>
      <p className="">{content.description}</p>
      {/* <button>{content.button}</button> */}
    </main>
  );
}
