import { DialogueOverlay } from "../components/Dialogue/Dialogue";

export default function SentBottle() {
  return (
    <DialogueOverlay
      name="Tom Nook"
      message="Your bottle has been sent away! Hopefully it will reach someone special across the world!"
      linkTo={"/library"}
    />
  );
}