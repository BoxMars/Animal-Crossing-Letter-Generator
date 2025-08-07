import "./Waves.css";

export default function Waves({type = "both"}) {
  if (type === "front") {
    return (
      <div className="waves-container" style={{zIndex: 3}}>
        <div className="waves front-waves"></div>
      </div>
    );
  } else if (type === "back") {
    return (
      <div className="waves-container">
        <div className="waves back-waves"></div>
      </div>
    );
  }
  return null;
}
