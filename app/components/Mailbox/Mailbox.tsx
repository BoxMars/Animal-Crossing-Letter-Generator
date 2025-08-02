import "./Mailbox.css";
import { DEFAULT_STATIONARY } from "~/components/Card/Card";
import Card from "~/components/Card/Card";
import { useNavigate } from "react-router";

export default function Mailbox() {
  let navigate = useNavigate();
  let cards = DEFAULT_STATIONARY.map((type) => (
    <Card type={type}
      key={type}
      tilt={true}
      onClick={() => navigate(`/editor?card=${encodeURIComponent(type)}`)} />
  ));
  return (
    <div className="mailbox-holder">
      <div className="mailbox">
        {cards}
      </div>
    </div>
  );
} 