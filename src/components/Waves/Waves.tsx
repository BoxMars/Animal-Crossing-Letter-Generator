import "./Waves.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Bottle from "../Bottle/Bottle";

export default function Waves({type = "front"} : {type?: "front" | "back"}) {
  const location = useLocation();

  // Hide waves on the library page
  const [wavesVisible, setWavesVisible] = useState(true);
  useEffect(() => {
    setWavesVisible(location.pathname !== "/library");
  }, [location.pathname]);

  return (
    <div className={`waves-container`} style={type === "front" ? {zIndex: 3} : {}}>
      {type === "front" ? <Bottle visible={wavesVisible} /> : null}
      <div className={`waves ${type}-waves ${!wavesVisible ? " waves-hide" : ""}`}></div>
    </div>
  );
}
