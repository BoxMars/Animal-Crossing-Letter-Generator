import type { Route } from "./+types/library";

export function meta({ }: Route.MetaArgs) {
  return [
	{ title: "Animal Crossing Letter Generator" },
  ];
}

export default function Library() {
  return (
	<div>
	  Hello, world!
	</div>
  );
}