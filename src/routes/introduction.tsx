import { DialogueOverlay } from "../components/Dialogue/Dialogue";

export default function Introduction() {
  return (
    <DialogueOverlay
      name="Tom Nook"
      message="Welcome to the stationary station, for all of your letter writing needs! Pick a letter template to get started."
      linkTo="/library"
    />
  );
}
