import "./Editor.css";
import Card from "~/components/Card/Card";
import { CardName } from "~/components/Card/Card";

export default function Editor({ cardType }: { cardType: CardName }) {
  return (
    <div className="editor">
      <Card type={cardType} editable zoomable={false} />
    </div>
  );
}