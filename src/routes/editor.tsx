import { useSearchParams } from "react-router";
import PageTitle from "../components/PageTitle/PageTitle";
import Editor from "../components/Editor/Editor";
import { decode } from "../components/Editor/editorFunctions";
import { CardName } from "../components/Card/cardConstants";

export default function EditorPage({ shareMode = false } : { shareMode?: boolean }) {
  const [params] = useSearchParams();
  let cardType: CardName = CardName.Airmail;
  if (params.has("card")) {
    const card = params.get("card");
    if (card && Object.values(CardName).includes(card as CardName)) {
      cardType = card as CardName;
    } else {
      console.error(`Invalid card type: ${card}`);
    }
  }
  const startText = params.get("start") ? decode(params.get("start")!) : undefined;
  const messageText = params.get("message") ? decode(params.get("message")!) : undefined;
  const signatureText = params.get("signature") ? decode(params.get("signature")!) : undefined;
  
  let title = `Letter Editor - ${cardType}`;
  if (shareMode) {
    title = `Shared Letter - ${signatureText}`;
  }
  return (
    <>
      <PageTitle title={title} />
      <Editor cardType={cardType} startText={startText} messageText={messageText} signatureText={signatureText} shareMode={shareMode} />
    </>
  );
}