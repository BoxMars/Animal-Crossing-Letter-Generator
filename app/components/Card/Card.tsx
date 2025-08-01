import "./Card.css";

export enum CardType {
  Airmail = "airmail",
  BirthdayCake = "birthday-cake",
  BlueSky = "blue-sky",
  BunnyDay = "bunny-day",
  CherryBlossoms = "cherry-blossoms",
  Common = "common",
  Dandelion = "dandelion",
  ElegantRoses = "elegant-roses",
  FantasyStars = "fantasy-stars",
  FathersDay = "fathers-day",
  FullBloom = "full-bloom",
  Gears = "gears",
  Gem = "gem",
  Goldfish = "goldfish",
  Graffiti = "graffiti",
  Hibiscus = "hibiscus",
  MothersDay = "mothers-day",
  Fireworks = "fireworks",
  Dragonflies = "dragonflies",
  ShootingStars = "shooting-stars",
  SoManyHearts = "so-many-hearts",
  StationaryGoods = "stationary-goods",
  Clouds = "clouds",
  Beach = "beach",
  Velvety = "velvety"
}

export default function Card({ type = CardType.Airmail }: { type?: CardType }) {
  return (
    <div className={`card ${type}-card`} key={type}>
      <div className="card-start" mutable-parsed="true">
        What's up, shmoopy?
      </div>
      <div className="card-message" mutable-parsed="true">
        The umbrella I THOUGHT I lost?
      </div>
      <div className="card-signature" mutable-parsed="true">
        Idrees Hassan
      </div>
    </div>
  );
}