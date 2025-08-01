import "./Card.css";

export enum CardName {
  Airmail = "Airmail",
  BirthdayCake = "Birthday Cake",
  BlueSky = "Blue Sky",
  BunnyDay = "Bunny Day",
  CherryBlossoms = "Cherry Blossoms",
  Common = "Common",
  Dandelion = "Dandelion",
  ElegantRoses = "Elegant Roses",
  FantasyStars = "Fantasy Stars",
  FathersDay = "Father's Day",
  FullBloom = "Full Bloom",
  Gears = "Gears",
  Gem = "Gem",
  Goldfish = "Goldfish",
  Graffiti = "Graffiti",
  Hibiscus = "Hibiscus",
  MothersDay = "Mother's Day",
  Fireworks = "Fireworks",
  Dragonflies = "Dragonflies",
  ShootingStars = "Shooting Stars",
  SoManyHearts = "So Many Hearts",
  StationaryGoods = "Stationary Goods",
  Clouds = "Clouds",
  Beach = "Beach",
  Velvety = "Velvety"
}

function getCssClass(type: CardName): string {
  return `${type.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}-card`;
}

export default function Card({ type = CardName.Airmail }: { type?: CardName }) {
  return (
    <div className={`card ${getCssClass(type)}`} key={type}>
      <div className="card-start">
        Dear Fink,
      </div>
      <div className="card-message">
        Congratulations on your big move! We hope you enjoy your new island life. To celebrate this fresh start, we'd like to give you a gift that is sure to come in handy!
      </div>
      <div className="card-signature">
        From Nintendo
      </div>
      <div className="card-label">
        {type}
      </div>
    </div>
  );
}