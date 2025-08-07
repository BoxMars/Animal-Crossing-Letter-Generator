import LZString from "lz-string";

export function encode(text: string) {
  return LZString.compressToEncodedURIComponent(text);
}

export function decode(encodedText: string) {
  const decoded = LZString.decompressFromEncodedURIComponent(encodedText);
  return decoded;
}