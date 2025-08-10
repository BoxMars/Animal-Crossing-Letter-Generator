import { useEffect } from "react";

export default function PageTitle({ title = "Animal Crossing Letter Editor" }: { title: string }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
}