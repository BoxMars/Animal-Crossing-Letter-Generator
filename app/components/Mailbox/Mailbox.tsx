import "./Mailbox.css";
import { CardName, DEFAULT_STATIONARY } from "~/components/Card/Card";
import Card from "~/components/Card/Card";

export default function Mailbox() {
  let cards = DEFAULT_STATIONARY.map((type) => (
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