import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Animal Crossing Letter Generator" },
  ];
}

export default function Home() {
  return (
    <div>
      <p>Hello, World!</p>
    </div>
  );
}
