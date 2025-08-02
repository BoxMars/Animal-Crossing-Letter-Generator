import type { Route } from "./+types/editor";
import { useSearchParams } from "react-router";
import Editor from "~/components/Editor/Editor";
import { CardName } from "~/components/Card/Card";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Animal Crossing Letter Editor" },
  ];
}

export default function EditorPage() {
  const [params] = useSearchParams();
  let cardType = CardName.Airmail;
  if (params.has("card")) {
    const card = params.get("card");
    if (card && Object.values(CardName).includes(card as CardName)) {
      cardType = card as CardName;
    } else {
      console.error(`Invalid card type: ${card}`);
    }
  }
  return (
    <Editor cardType={cardType} />
  );
}