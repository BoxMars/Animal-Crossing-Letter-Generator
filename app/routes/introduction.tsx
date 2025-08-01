import type { Route } from "./+types/introduction";
import { Link } from "react-router";
import { DialogueOverlay } from "~/components/Dialogue/Dialogue";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Animal Crossing Letter Generator" },
  ];
}

export default function Home() {
  return (
    <Link to="/library">
      <DialogueOverlay name="Tom Nook" message="Welcome to the stationary station, for all of your letter writing needs! Pick a letter template to get started." />
    </Link>
  );
}
