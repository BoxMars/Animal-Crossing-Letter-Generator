import "./Waves.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Bottle from "../Bottle/Bottle";

export default function Waves({type = "front"} : {type?: "front" | "back"}) {
  const location = useLocation();

  // Hide waves on the library page
  const [waveHeight, setWaveHeight] = useState("low");
  useEffect(() => {
    if (location.pathname === "/library") {
      setWaveHeight("gone");
    } else if (location.pathname === "/found-bottle") {
      setWaveHeight("high");
    } else {
      setWaveHeight("low");
    }
  }, [location.pathname]);

  return (
    <div className={`waves-container`} style={type === "front" ? {zIndex: 3} : {}}>
      {type === "front" ? <Bottle visible={waveHeight === "low"} /> : null}
      <div className={`waves ${type}-waves ${waveHeight === "gone" ? " waves-hide" : ""} ${waveHeight === "high" ? "waves-flood" : ""}`}></div>
    </div>
  );
}
