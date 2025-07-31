// @ts-check
import type { Route } from "./+types/home";
import { DialogueOverlay } from "~/components/Dialogue/Dialogue";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Animal Crossing Letter Generator" },
  ];
}


export default function Home() {
  return (
    <DialogueOverlay name="Tom Nook" message="Hello, world!" />
  );
}
