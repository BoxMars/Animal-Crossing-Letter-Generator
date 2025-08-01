import "./Mailbox.css";
import { CardName } from "~/components/Card/Card";
import Card from "~/components/Card/Card";

export default function Mailbox() {
  let cards = Object.values(CardName).map((type) => (
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