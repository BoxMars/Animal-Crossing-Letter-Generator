import "./Card.css";

export enum CardName {
  Airmail = "Airmail",
  HappyClovers = "Happy-Clovers",
  BlueSky = "Blue-Sky",
  BirthdayCake = "Birthday-Cake",
  Balloons = "Balloons",
  Star = "Star",
  Bandage = "Bandage",
  FantasyStars = "Fantasy-Stars",
  BabyGoods = "Baby-Goods",
  Ribbon = "Ribbon",
  FlowerBouquet = "Flower-Bouquet",
  Gem = "Gem",
  CoolCool = "Cool-Cool",
  LovelyHearts = "Lovely Hearts",
  Shapes = "Shapes",
  Goldfish = "Goldfish",
  Graffiti = "Graffiti",
  Fanciful = "Fanciful",
  Common = "Common",
  Decorative = "Decorative",
  Graduation = "Graduation",
  RedDragonflies = "Red-Dragonflies",
  Camo = "Camo",
  Zen = "Zen",
  Wedding = "Wedding",
  ElegantRoses = "Elegant-Roses",
  Torn = "Torn",
  SoManyHearts = "So-Many-Hearts",
  ShootingStars = "Shooting-Stars",
  StationaryGoods = "Stationary-Goods",
  Velvety = "Velvety",
  Gears = "Gears",
  DawningYear = "Dawning-Year",
  Fireworks = "Fireworks",
  // Seasonal
  BunnyDay = "Bunny-Day",
  CherryBlossoms = "Cherry-Blossoms",
  Dandelion = "Dandelion",
  FathersDay = "Father's Day",
  FullBloom = "Full Bloom",
  Hibiscus = "Hibiscus",
  MothersDay = "Mother's Day",
  FluffyClouds = "Fluffy-Clouds",
  Beach = "Beach",
}

function getCssClass(type: CardName): string {
  return `${type.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}-card`;
}

export default function Card({ type = CardName.Airmail }: { type?: CardName }) {
  return (
    <div className={`card ${getCssClass(type)}`} key={type}>
      <div className="card-start">
        Dear future Idrees,
      </div>
      <div className="card-message-container">
        <div className="card-message" contentEditable={true}>
          Congratulations on your big move! We hope you enjoy your new island life. To celebrate this fresh start, we'd like to give you a gift that is sure to come in handy!
        </div>
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