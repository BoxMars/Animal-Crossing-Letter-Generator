import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Animal Crossing Letter Generator" },
  ];
}

export default function Home() {
  return (
    <div>
      <div className="dialogue-holder">
        <div className="dialogue">
          <div className="dialogue-blobs">
            <div className="dialogue-blob-top"></div>
            <div className="dialogue-blob-bottom"></div>
            <div className="dialogue-text">What a great night to watch the shooting stars. You should try making a wish and see what happens!</div>
          </div>
          <div className="dialogue-character-wrap">
            <div className="dialogue-character">
              <slot name="character">Tom Nook</slot>
            </div>
          </div>
          <svg className="arrow" width="45" height="25" viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 25C18.0184 25 7.59473 12.6404 1.55317 4.96431C-0.122281 2.83559 1.72264 -0.179893 4.39835 0.243337C10.2831 1.17415 18.2164 2.28736 22.5 2.28736C26.7836 2.28736 34.7169 1.17415 40.6017 0.243339C43.2774 -0.17989 45.1223 2.83559 43.4468 4.96431C37.4053 12.6404 26.9816 25 22.5 25Z" fill="#F1AE04"></path>
          </svg>
        </div>
        <svg className="hide" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="fancy-goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix>
              <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
