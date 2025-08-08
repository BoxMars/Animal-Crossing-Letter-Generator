import "./Editor.css";
import Card from "../Card/Card";
import { CardName } from "../Card/cardConstants";
import Button from "../Button/Button";
import { generateLink } from "./editorFunctions";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router";
import { useState } from "react";

function saveImage(cardElement: HTMLElement, callback?: (success: boolean) => void) {
  console.log("Saving image...");
  const cardScale = parseFloat(getComputedStyle(cardElement).getPropertyValue("--card-scale") ?? 1)
  html2canvas(cardElement, { scale: 1 / cardScale, backgroundColor: null }).then((canvas) => {
    // Copy to clipboard
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
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `animal-crossing-card.png`;
    link.click();
    if (callback) {
      callback(true);
    }
  }).catch(err => {
    console.error("Failed to save image", err);
    if (callback) {
      callback(false);
    }
  });
}

function copyLink(cardType: CardName, startText: string, messageText: string, signatureText: string) {
  const url = generateLink(cardType, startText, messageText, signatureText);
  // Copy to clipboard
  navigator.clipboard.writeText(url).then(() => {
    console.log("Link copied to clipboard");
  }).catch(err => {
    console.error("Failed to copy link to clipboard", err);
  });
}

export default function Editor({ cardType, shareMode: shareMode = false, startText, messageText, signatureText }: { cardType: CardName, shareMode?: boolean, startText?: string, messageText?: string, signatureText?: string }) {
  const LABEL_DELAY = 1500;
  const SAVE_LABEL = "Save Image";
  const LINK_LABEL = "Copy Link";

  const navigate = useNavigate();
  const [saveButtonLabel, setSaveButtonLabel] = useState(SAVE_LABEL);
  const [linkButtonLabel, setLinkButtonLabel] = useState(LINK_LABEL);

  return (
    <div className="editor editor-visible">
      <Card type={cardType} editable={!shareMode} zoomable={false} startText={startText} messageText={messageText} signatureText={signatureText} />
      <div className="editor-controls">
        <Button label={saveButtonLabel} onClick={
          () => {
            setSaveButtonLabel("Saving...");
            const cardElement = document.querySelector(".card");
            if (cardElement instanceof HTMLElement) {
              saveImage(cardElement, (success) => {
                if (success) {
                  setSaveButtonLabel("Saved!");
                  setTimeout(() => {
                    setSaveButtonLabel(SAVE_LABEL);
                  }, LABEL_DELAY);
                } else {
                  setSaveButtonLabel(SAVE_LABEL);
                }
              });
            }
          }
        } />
        <Button label={linkButtonLabel} onClick={() => {
          const cardElement = document.querySelector(".card");
          if (cardElement instanceof HTMLElement) {
            // Get start text, message text, and signature text
            const startText = cardElement.querySelector(".card-start")?.textContent ?? "";
            const messageText = cardElement.querySelector(".card-message")?.textContent ?? "";
            const signatureText = cardElement.querySelector(".card-signature")?.textContent ?? "";
            copyLink(cardType, startText, messageText, signatureText);
            setLinkButtonLabel("Link Copied!");
            setTimeout(() => {
              setLinkButtonLabel(LINK_LABEL);
            }, LABEL_DELAY);
          }
        }} />
        {shareMode && (
          <Button label="Make Your Own" onClick={() => {
            navigate("/");
          }} />
        )}
        {!shareMode && (
          <Button label="Share in a Bottle" onClick={() => {
            if (confirm("Are you sure you want to share this letter? It will be available for anyone to see, so make sure it is appropriate and doesn't contain any personal information!")) {
              navigate("/sent-bottle");
            }
          }} />
        )}
      </div>
    </div>
  );
}