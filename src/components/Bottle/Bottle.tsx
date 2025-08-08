import "./Bottle.css";
import { useNavigate } from "react-router";

export default function Bottle({ visible = true }: { visible?: boolean }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/found-bottle");
  };

  return (
    <div className={`bottle ${!visible ? "bottle-hide" : ""}`} onClick={handleClick}></div>
  )
}