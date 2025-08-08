import "./CardSelection.css";
import { DEFAULT_STATIONARY } from "../Card/cardConstants";
import Card from "../Card/Card";
import { useNavigate } from "react-router";

export default function CardSelection() {
  const navigate = useNavigate();
  const cards = DEFAULT_STATIONARY.map((type) => (
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