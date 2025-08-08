import "./Bottle.css";

export default function Bottle({ visible = true }: { visible?: boolean }) {
  return (
    <div className={`bottle ${!visible ? "bottle-hide" : ""}`} onClick={() => alert("Bottle clicked!")}></div>
  )
}