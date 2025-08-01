import type { Route } from "./+types/library";
import Mailbox from "~/components/Mailbox/Mailbox";

export function meta({ }: Route.MetaArgs) {
  return [
	{ title: "Animal Crossing Letter Generator" },
  ];
}

export default function Library() {
  return (
	<Mailbox />
  );
}