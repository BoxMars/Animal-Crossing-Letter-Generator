import "./Card.css";
import CanvasBackground from "../CanvasBackground/CanvasBackground";
import { useEffect, useRef, useState } from "react";

export const CardName = {
  Airmail: "Airmail",
  HappyClovers: "Happy-Clovers",
  BlueSky: "Blue-Sky",
  BirthdayCake: "Birthday-Cake",
  Balloons: "Balloons",
  Star: "Star",
  Bandage: "Bandage",
  FantasyStars: "Fantasy-Stars",
  BabyGoods: "Baby-Goods",
  Ribbon: "Ribbon",
  FlowerBouquet: "Flower-Bouquet",
  Gem: "Gem",
  CoolCool: "Cool-Cool",
  LovelyHearts: "Lovely Hearts",
  Shapes: "Shapes",
  Goldfish: "Goldfish",
  Graffiti: "Graffiti",
  Fanciful: "Fanciful",
  Common: "Common",
  Decorative: "Decorative",
  Graduation: "Graduation",
  RedDragonflies: "Red-Dragonflies",
  Camo: "Camo",
  Zen: "Zen",
  Wedding: "Wedding",
  ElegantRoses: "Elegant-Roses",
  Torn: "Torn",
  SoManyHearts: "So-Many-Hearts",
  ShootingStars: "Shooting-Stars",
  StationaryGoods: "Stationary-Goods",
  Velvety: "Velvety",
  Gears: "Gears",
  DawningYear: "Dawning-Year",
  Fireworks: "Fireworks",
  // Seasonal
  BunnyDay: "Bunny-Day",
  CherryBlossoms: "Cherry-Blossoms",
  Dandelion: "Dandelion",
  FathersDay: "Father's Day",
  FullBloom: "Full Bloom",
  Hibiscus: "Hibiscus",
  MothersDay: "Mother's Day",
  FluffyClouds: "Fluffy-Clouds",
  Beach: "Beach",
} as const;

export type CardName = typeof CardName[keyof typeof CardName];

export const DEFAULT_STATIONARY = [
  CardName.Airmail,
  CardName.HappyClovers,
  CardName.BlueSky,
  CardName.BirthdayCake,
  CardName.Balloons,
  CardName.Star,
  CardName.Bandage,
  CardName.FantasyStars,
  CardName.BabyGoods,
  CardName.Ribbon,
  CardName.FlowerBouquet,
  CardName.Gem,
  CardName.CoolCool,
  CardName.LovelyHearts,
  CardName.Shapes,
  CardName.Goldfish,
  CardName.Graffiti,
  CardName.Fanciful,
  CardName.Common,
  CardName.Decorative,
  CardName.Graduation,
  CardName.RedDragonflies,
  CardName.Camo,
  CardName.Zen,
  CardName.Wedding,
  CardName.ElegantRoses,
  CardName.Torn,
  CardName.SoManyHearts,
  CardName.ShootingStars,
  CardName.StationaryGoods,
  CardName.Velvety,
  CardName.Gears,
  CardName.DawningYear,
  CardName.Fireworks
];

export const Holidays = {
  ValentinesDay: "Valentine's Day",
  BunnyDay: "Bunny Day",
  MothersDay: "Mother's Day",
  FathersDay: "Father's Day",
  Thanksgiving: "Thanksgiving",
  Halloween: "Halloween",
  Christmas: "Christmas",
  NewYears: "New Year's",
  Spring: "Spring",
  Summer: "Summer",
  Fall: "Fall",
  Winter: "Winter",
}

export type Holidays = typeof Holidays[keyof typeof Holidays];

function getCssClass(type: CardName): string {
  return `${type.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}-card`;
}

const backgroundColors: Record<string, string> = {
  [CardName.Gem]: "rgb(185, 222, 199)",
  [CardName.Balloons]: "rgb(252, 252, 240)",
  [CardName.Fireworks]: "rgb(54, 42, 152)",
  [CardName.Hibiscus]: "rgb(243, 241, 242)",
}

export default function Card({
  type = CardName.Airmail,
  tilt = false,
  editable = false,
  zoomable = true,
  onClick,
  startText: startDisplayText = "Dear Villager,",
  messageText: messageDisplayText = "Congratulations on your big move! We hope you enjoy your new island life. To celebrate this fresh start, we'd like to give you a gift that is sure to come in handy!",
  signatureText: signatureDisplayText = "From Tom Nook"
}: {
  type?: CardName,
  tilt?: boolean,
  editable?: boolean,
  zoomable?: boolean,
  onClick?: () => void,
  startText?: string,
  messageText?: string,
  signatureText?: string
}) {
  const startRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const signatureRef = useRef<HTMLDivElement>(null);

  const [startText, setStartText] = useState(startDisplayText);
  const [messageText, setMessageText] = useState(messageDisplayText);
  const [signatureText, setSignatureText] = useState(signatureDisplayText);

  useEffect(() => {
    if (startRef.current) {
      startRef.current.addEventListener("input", () => {
        setStartText(startRef.current?.textContent || startDisplayText);
        console.log("Start text updated:", startRef.current?.textContent);
      });
    }
    if (messageRef.current) {
      messageRef.current.addEventListener("input", () => {
        setMessageText(messageRef.current?.textContent || messageDisplayText);
      });
    }
    if (signatureRef.current) {
      signatureRef.current.addEventListener("input", () => {
        setSignatureText(signatureRef.current?.textContent || signatureDisplayText);
      });
    }
  }, [startRef, messageRef, signatureRef, startDisplayText, messageDisplayText, signatureDisplayText]);

  return (
    <div
      className={`card ${getCssClass(type)} ${tilt ? "card-tilt" : ""} ${zoomable ? "card-zoomable" : ""}`}
      key={type}
      onClick={onClick}
    >
      <CanvasBackground className="card-start" backgroundColor={backgroundColors[type]} contentToWatch={startText}>
        <div contentEditable={editable} ref={startRef} suppressContentEditableWarning>
          {startDisplayText}
        </div>
      </CanvasBackground>
      <div className="card-message-container">
        <CanvasBackground backgroundColor={backgroundColors[type]} className="card-message-inner-container" contentToWatch={messageText}>
          <div className="card-message" contentEditable={editable} ref={messageRef} suppressContentEditableWarning>
            {messageDisplayText}
          </div>
        </CanvasBackground>
      </div>
      <CanvasBackground className="card-signature" backgroundColor={backgroundColors[type]} contentToWatch={signatureText}>
        <div contentEditable={editable} ref={signatureRef} suppressContentEditableWarning>
          {signatureDisplayText}
        </div>
      </CanvasBackground>
      {zoomable ? (
        <div className="card-label">
          {type}
        </div>
      ) : null}
    </div>
  );
}