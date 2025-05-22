import { getContent } from "@/src/lib/getContent";
import { CostsBox } from "./CostsBox";
import Button from "./Button";

export default function Costs({ lang }: { lang: "de" | "tr" }) {
  const content = getContent(lang, "costs");

  return (
    <div className="bg-[var(--color-foreground)] text-center">
      <h4 className="font-semibold pt-5">{content.content}</h4>
      <div className="grid grid-cols-2 gap-4 mt-10 m-auto w-full max-w-md">
        <CostsBox price="0 €" text={content.cost1 ?? ""} />
        <CostsBox price="90 €" text={content.cost2 ?? ""} />
        <div className="col-span-2 flex justify-center">
          <CostsBox price="140 €" text={content.cost3 ?? ""} />
        </div>
      </div>
      <Button text={content.costButton ?? ""}/>
    </div>
  );
}
