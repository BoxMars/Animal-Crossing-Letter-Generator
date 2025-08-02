import "./Editor.css";
import Card from "~/components/Card/Card";
import { CardName } from "~/components/Card/Card";
import Button from "~/components/Button/Button";
import html2canvas from "html2canvas";

export default function Editor({ cardType }: { cardType: CardName }) {
  return (
    <div className="editor">
      <Card type={cardType} editable zoomable={false} />
      <div className="editor-controls">
        <Button label="Save Image" onClick={
          () => {
            const cardElement = document.querySelector(".card");
            if (cardElement instanceof HTMLElement) {
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
                link.download = `${cardType}.png`;
                link.click();
              });
            }
          }
        } />
        <Button label="Copy Link" />
        {/* <Button label="Send Away" /> */}
      </div>
    </div>
  );
}