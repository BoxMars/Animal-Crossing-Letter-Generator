import "./Editor.css";
import Card from "../Card/Card";
import { CardName } from "../Card/Card";
import Button from "../Button/Button";
import { snapdom } from '@zumer/snapdom';
import { useNavigate } from "react-router";
import LZString from "lz-string";

function encode(text: string) {
  return LZString.compressToEncodedURIComponent(text);
}

export function decode(encodedText: string) {
  const decoded = LZString.decompressFromEncodedURIComponent(encodedText);
  return decoded;
}

async function saveImage(cardElement: HTMLElement) {
  const cardScale = parseFloat(getComputedStyle(cardElement).getPropertyValue("--card-scale") ?? 1)
  const result = await snapdom(cardElement, {
    embedFonts: true, // TODO: This is the problematic part
    scale: 1 / cardScale,
    compress: true,
  });
  
  // Copy to clipboard
  const canvas = await result.toCanvas();
  canvas.toBlob((blob) => {
    if (blob) {
      const item = new ClipboardItem({ "image/png": blob });
      navigator.clipboard.write([item]).then(() => {
        console.log("Image copied to clipboard");
      }).catch(err => {
        console.error("Failed to copy image to clipboard", err);
      });
    }
  });

  // Download the image
  result.download({
    format: "png",
    filename: "animal-crossing-card"
  });
}

function copyLink(cardType: CardName, startText: string, messageText: string, signatureText: string) {
  const params = new URLSearchParams({
    card: cardType,
    start: encode(startText),
    message: encode(messageText),
    signature: encode(signatureText)
  });
  const url = `${window.location.origin}/#/share?${params.toString()}`;
  // Copy to clipboard
  navigator.clipboard.writeText(url).then(() => {
    console.log("Link copied to clipboard");
  }).catch(err => {
    console.error("Failed to copy link to clipboard", err);
  });
}

export default function Editor({ cardType, shareMode: shareMode = false, startText, messageText, signatureText }: { cardType: CardName, shareMode?: boolean, startText?: string, messageText?: string, signatureText?: string }) {
  const navigate = useNavigate();
  return (
    <div className="editor">
      <Card type={cardType} editable={!shareMode} zoomable={false} startText={startText} messageText={messageText} signatureText={signatureText} />
      <div className="editor-controls">
        <Button label="Save Image" onClick={
          () => {
            const cardElement = document.querySelector(".card");
            if (cardElement instanceof HTMLElement) {
              saveImage(cardElement);
            }
          }
        } />
        <Button label="Copy Link" onClick={() => {
          const cardElement = document.querySelector(".card");
          if (cardElement instanceof HTMLElement) {
            // Get start text, message text, and signature text
            const startText = cardElement.querySelector(".card-start")?.textContent ?? "";
            const messageText = cardElement.querySelector(".card-message")?.textContent ?? "";
            const signatureText = cardElement.querySelector(".card-signature")?.textContent ?? "";
            copyLink(cardType, startText, messageText, signatureText);
          }
        }} />
        {shareMode && (
          <Button label="Make Your Own" onClick={() => {
            navigate("/");
          }} />
        )}
        {!shareMode && (
          <Button label="Share w/ the World" onClick={() => {
            confirm("Are you sure you want to share this letter? It will be available for anyone to see, so make sure it is appropriate and doesn't contain any personal information!");
          }} />
        )}
      </div>
    </div>
  );
}