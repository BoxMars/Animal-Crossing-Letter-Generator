import LZString from "lz-string";
import { CardName } from "../Card/cardConstants";

export function encode(text: string) {
  return LZString.compressToEncodedURIComponent(text);
}

export function decode(encodedText: string) {
  const decoded = LZString.decompressFromEncodedURIComponent(encodedText);
  return decoded;
}

export function generateLinkPage(cardType: CardName, startText: string, messageText: string, signatureText: string) {
  const params = new URLSearchParams({
    card: cardType,
    start: encode(startText),
    message: encode(messageText),
    signature: encode(signatureText)
  });
  return "/share?" + params.toString();
}

export function generateLink(cardType: CardName, startText: string, messageText: string, signatureText: string) {
  return `${window.location.origin}/#${generateLinkPage(cardType, startText, messageText, signatureText)}`;
}