import "./Mailbox.css";
import { CardType } from "~/components/Card/Card";
import Card from "~/components/Card/Card";

export default function Mailbox() {
  let cards = Object.values(CardType).map((type) => (
    <Card type={type} key={type} />
  ));
  return (
    <div className="mailbox-holder">
      <div className="mailbox">
        {cards}
      </div>
    </div>
  );
} 